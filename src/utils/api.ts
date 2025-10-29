export interface LoginResponse {
  token: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    user_id: string;
    email: string;
    name: string;
    role: string;
  };
  token: string;
}

const API_BASE = ""; // relative to same origin proxy, e.g., /api

export async function register(name: string, email: string, password: string, phone?: string): Promise<RegisterResponse> {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, phone }),
  });

  if (!res.ok) {
    let message = "Registration failed";
    try {
      const data = await res.json();
      message = data?.message || data?.error || message;
    } catch {}
    throw new Error(message);
  }
  return res.json();
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
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
  const res = await fetch(`${API_BASE}/api/auth/me`, { headers: { ...authHeaders(), 'Cache-Control': 'no-store' }, cache: 'no-store' });
  if (!res.ok) throw new Error("Failed to load profile");
  return res.json();
}

export async function createRide(payload: {
  start_location: string;
  end_location: string;
  start_date: string; // YYYY-MM-DD
  start_time: string; // ISO datetime
  total_fare: number;
  vehicle_id?: string;
}) {
  const res = await fetch(`${API_BASE}/api/rides`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders(), 'Cache-Control': 'no-store' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create ride");
  return res.json();
}

export async function searchRides(params: { start?: string; end?: string; date?: string }) {
  const q = new URLSearchParams();
  if (params.start) q.set("start", params.start);
  if (params.end) q.set("end", params.end);
  if (params.date) q.set("date", params.date);
  const res = await fetch(`${API_BASE}/api/rides/search?${q.toString()}`, { headers: { ...authHeaders(), 'Cache-Control': 'no-store' }, cache: 'no-store' });
  if (!res.ok) throw new Error("Failed to fetch rides");
  return res.json();
}

export async function fetchMyRides() {
  const res = await fetch(`/api/rides/mine`, { headers: { ...authHeaders(), 'Cache-Control': 'no-store' }, cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch my rides');
  return res.json();
}

export async function fetchRideDetails(id: string) {
  const res = await fetch(`/api/rides/${id}`, { headers: { ...authHeaders(), 'Cache-Control': 'no-store' }, cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch ride details');
  return res.json();
}


