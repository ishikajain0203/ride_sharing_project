export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  user_id: string;
  email: string;
}

const API_BASE = "/api"; // Requests will be proxied to the API server

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    let message = "Login failed";
    try {
      const data = await res.json();
      message = data?.error || message;
    } catch {}
    throw new Error(message);
  }
  return res.json();
}

export async function register(name: string, email: string, password: string, phone?: string): Promise<RegisterResponse> {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, phone }),
  });

  if (!res.ok) {
    let message = "Registration failed";
    try {
      const data = await res.json();
      if (data?.error === "ValidationError") {
        message = "ValidationError";
      } else if (data?.error === "EmailExists") {
        message = "EmailExists";
      } else if (data?.error === "InvalidEmailDomain") {
        message = "InvalidEmailDomain";
      } else {
        message = data?.error || message;
      }
    } catch {}
    throw new Error(message);
  }
  return res.json();
}

export function setAuthToken(token: string) {
  localStorage.setItem("auth_token", token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem("auth_token");
}

export function authHeaders(): HeadersInit {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function emitRidesUpdated() {
  try {
    window.dispatchEvent(new CustomEvent('rides:updated'));
  } catch {}
}

export async function fetchMe() {
  try {
    const res = await fetch(`${API_BASE}/auth/me`, { 
      headers: { ...authHeaders(), 'Cache-Control': 'no-store' },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to load profile");
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching profile:', error);
    if (error instanceof Error && (
      error.message.includes('unauthorized') || 
      error.message.includes('token')
    )) {
      throw new Error('unauthorized');
    }
    throw error;
  }
}

export interface CreateRidePayload {
  start_location: string;
  end_location: string;
  start_date: string; // YYYY-MM-DD
  start_time: string; // ISO datetime
  total_fare: number;
  vehicle_type: 'car' | 'suv' | 'auto';
  max_passengers: number;
}

export async function createRide(payload: CreateRidePayload) {
  const res = await fetch(`${API_BASE}/rides`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders(), 'Cache-Control': 'no-store' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: "Failed to create ride" }));
    throw new Error(error.error || "Failed to create ride");
  }
  return res.json();
}

export async function searchRides(params: { start?: string; end?: string; date?: string }) {
  const q = new URLSearchParams();
  if (params.start) q.set("start", params.start);
  if (params.end) q.set("end", params.end);
  if (params.date) q.set("date", params.date);
  const res = await fetch(`${API_BASE}/rides/search?${q.toString()}`, { headers: { ...authHeaders(), 'Cache-Control': 'no-store' }, cache: 'no-store' });
  if (!res.ok) throw new Error("Failed to fetch rides");
  return res.json();
}

export async function fetchMyRides() {
  const res = await fetch(`${API_BASE}/rides/mine`, { headers: { ...authHeaders(), 'Cache-Control': 'no-store' }, cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch my rides');
  return res.json();
}

export async function fetchRideDetails(id: string) {
  const res = await fetch(`${API_BASE}/rides/${id}`, { headers: { ...authHeaders(), 'Cache-Control': 'no-store' }, cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch ride details');
  return res.json();
}

export async function updateProfile(payload: { name: string; phone?: string }) {
  const res = await fetch(`${API_BASE}/auth/profile`, {
    method: 'PATCH',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...authHeaders() 
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || 'Failed to update profile');
  }

  return res.json();
}

export async function bookRide(rideId: string) {
  console.log('Booking ride with ID:', rideId); // Debug log
  try {
    const res = await fetch(`${API_BASE}/rides/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...authHeaders()
      },
      body: JSON.stringify({ ride_id: rideId }),
    });

    console.log('Booking response status:', res.status); // Debug log

    if (!res.ok) {
      const data = await res.json().catch(() => ({ error: "Failed to book ride" }));
      console.log('Error response:', data); // Debug log
      let message = data.error || "Failed to book ride";
      
      // Provide more user-friendly error messages
      if (message === "Cannot book your own ride") {
        message = "You cannot book a ride that you created";
      } else if (message === "AlreadyInActiveRide") {
        message = "You already have an active booking for another ride";
      } else if (message === "RideNotOpen") {
        message = "This ride is no longer available for booking";
      }
      
      throw new Error(message);
    }

    const responseData = await res.json();
    console.log('Booking success response:', responseData); // Debug log
    // notify listeners to refresh rides across the app
    emitRidesUpdated();
    return responseData;
  } catch (error) {
    console.error('Booking request failed:', error); // Debug log
    throw error;
  }
}

export async function cancelRide(rideId: string) {
  const res = await fetch(`${API_BASE}/rides/cancel`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders()
    },
    body: JSON.stringify({ ride_id: rideId })
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: "Failed to cancel ride" }));
    throw new Error(error.error || "Failed to cancel ride");
  }

  // Emit the ride update event to refresh all ride lists
  emitRidesUpdated();
  return res.json();
}
