
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Ride
 * 
 */
export type Ride = $Result.DefaultSelection<Prisma.$RidePayload>
/**
 * Model RideParticipant
 * 
 */
export type RideParticipant = $Result.DefaultSelection<Prisma.$RideParticipantPayload>
/**
 * Model RideCancellation
 * 
 */
export type RideCancellation = $Result.DefaultSelection<Prisma.$RideCancellationPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model SOS_Log
 * 
 */
export type SOS_Log = $Result.DefaultSelection<Prisma.$SOS_LogPayload>
/**
 * Model SOS_Involved
 * 
 */
export type SOS_Involved = $Result.DefaultSelection<Prisma.$SOS_InvolvedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  student: 'student',
  committee_admin: 'committee_admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const RideStatus: {
  open: 'open',
  booked: 'booked',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type RideStatus = (typeof RideStatus)[keyof typeof RideStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type RideStatus = $Enums.RideStatus

export const RideStatus: typeof $Enums.RideStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ride`: Exposes CRUD operations for the **Ride** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rides
    * const rides = await prisma.ride.findMany()
    * ```
    */
  get ride(): Prisma.RideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rideParticipant`: Exposes CRUD operations for the **RideParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RideParticipants
    * const rideParticipants = await prisma.rideParticipant.findMany()
    * ```
    */
  get rideParticipant(): Prisma.RideParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rideCancellation`: Exposes CRUD operations for the **RideCancellation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RideCancellations
    * const rideCancellations = await prisma.rideCancellation.findMany()
    * ```
    */
  get rideCancellation(): Prisma.RideCancellationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sOS_Log`: Exposes CRUD operations for the **SOS_Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SOS_Logs
    * const sOS_Logs = await prisma.sOS_Log.findMany()
    * ```
    */
  get sOS_Log(): Prisma.SOS_LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sOS_Involved`: Exposes CRUD operations for the **SOS_Involved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SOS_Involveds
    * const sOS_Involveds = await prisma.sOS_Involved.findMany()
    * ```
    */
  get sOS_Involved(): Prisma.SOS_InvolvedDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    Ride: 'Ride',
    RideParticipant: 'RideParticipant',
    RideCancellation: 'RideCancellation',
    Payment: 'Payment',
    Feedback: 'Feedback',
    SOS_Log: 'SOS_Log',
    SOS_Involved: 'SOS_Involved'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicle" | "ride" | "rideParticipant" | "rideCancellation" | "payment" | "feedback" | "sOS_Log" | "sOS_Involved"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Ride: {
        payload: Prisma.$RidePayload<ExtArgs>
        fields: Prisma.RideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findFirst: {
            args: Prisma.RideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findMany: {
            args: Prisma.RideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          create: {
            args: Prisma.RideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          createMany: {
            args: Prisma.RideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          delete: {
            args: Prisma.RideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          update: {
            args: Prisma.RideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          deleteMany: {
            args: Prisma.RideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          upsert: {
            args: Prisma.RideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          aggregate: {
            args: Prisma.RideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRide>
          }
          groupBy: {
            args: Prisma.RideGroupByArgs<ExtArgs>
            result: $Utils.Optional<RideGroupByOutputType>[]
          }
          count: {
            args: Prisma.RideCountArgs<ExtArgs>
            result: $Utils.Optional<RideCountAggregateOutputType> | number
          }
        }
      }
      RideParticipant: {
        payload: Prisma.$RideParticipantPayload<ExtArgs>
        fields: Prisma.RideParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RideParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RideParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload>
          }
          findFirst: {
            args: Prisma.RideParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RideParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload>
          }
          findMany: {
            args: Prisma.RideParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload>[]
          }
          create: {
            args: Prisma.RideParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload>
          }
          createMany: {
            args: Prisma.RideParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RideParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload>[]
          }
          delete: {
            args: Prisma.RideParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload>
          }
          update: {
            args: Prisma.RideParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload>
          }
          deleteMany: {
            args: Prisma.RideParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RideParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RideParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload>[]
          }
          upsert: {
            args: Prisma.RideParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideParticipantPayload>
          }
          aggregate: {
            args: Prisma.RideParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRideParticipant>
          }
          groupBy: {
            args: Prisma.RideParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RideParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RideParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<RideParticipantCountAggregateOutputType> | number
          }
        }
      }
      RideCancellation: {
        payload: Prisma.$RideCancellationPayload<ExtArgs>
        fields: Prisma.RideCancellationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RideCancellationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RideCancellationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload>
          }
          findFirst: {
            args: Prisma.RideCancellationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RideCancellationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload>
          }
          findMany: {
            args: Prisma.RideCancellationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload>[]
          }
          create: {
            args: Prisma.RideCancellationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload>
          }
          createMany: {
            args: Prisma.RideCancellationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RideCancellationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload>[]
          }
          delete: {
            args: Prisma.RideCancellationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload>
          }
          update: {
            args: Prisma.RideCancellationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload>
          }
          deleteMany: {
            args: Prisma.RideCancellationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RideCancellationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RideCancellationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload>[]
          }
          upsert: {
            args: Prisma.RideCancellationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RideCancellationPayload>
          }
          aggregate: {
            args: Prisma.RideCancellationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRideCancellation>
          }
          groupBy: {
            args: Prisma.RideCancellationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RideCancellationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RideCancellationCountArgs<ExtArgs>
            result: $Utils.Optional<RideCancellationCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      SOS_Log: {
        payload: Prisma.$SOS_LogPayload<ExtArgs>
        fields: Prisma.SOS_LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SOS_LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SOS_LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload>
          }
          findFirst: {
            args: Prisma.SOS_LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SOS_LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload>
          }
          findMany: {
            args: Prisma.SOS_LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload>[]
          }
          create: {
            args: Prisma.SOS_LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload>
          }
          createMany: {
            args: Prisma.SOS_LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SOS_LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload>[]
          }
          delete: {
            args: Prisma.SOS_LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload>
          }
          update: {
            args: Prisma.SOS_LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload>
          }
          deleteMany: {
            args: Prisma.SOS_LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SOS_LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SOS_LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload>[]
          }
          upsert: {
            args: Prisma.SOS_LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_LogPayload>
          }
          aggregate: {
            args: Prisma.SOS_LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSOS_Log>
          }
          groupBy: {
            args: Prisma.SOS_LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SOS_LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SOS_LogCountArgs<ExtArgs>
            result: $Utils.Optional<SOS_LogCountAggregateOutputType> | number
          }
        }
      }
      SOS_Involved: {
        payload: Prisma.$SOS_InvolvedPayload<ExtArgs>
        fields: Prisma.SOS_InvolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SOS_InvolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SOS_InvolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload>
          }
          findFirst: {
            args: Prisma.SOS_InvolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SOS_InvolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload>
          }
          findMany: {
            args: Prisma.SOS_InvolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload>[]
          }
          create: {
            args: Prisma.SOS_InvolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload>
          }
          createMany: {
            args: Prisma.SOS_InvolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SOS_InvolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload>[]
          }
          delete: {
            args: Prisma.SOS_InvolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload>
          }
          update: {
            args: Prisma.SOS_InvolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload>
          }
          deleteMany: {
            args: Prisma.SOS_InvolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SOS_InvolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SOS_InvolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload>[]
          }
          upsert: {
            args: Prisma.SOS_InvolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SOS_InvolvedPayload>
          }
          aggregate: {
            args: Prisma.SOS_InvolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSOS_Involved>
          }
          groupBy: {
            args: Prisma.SOS_InvolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<SOS_InvolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.SOS_InvolvedCountArgs<ExtArgs>
            result: $Utils.Optional<SOS_InvolvedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicle?: VehicleOmit
    ride?: RideOmit
    rideParticipant?: RideParticipantOmit
    rideCancellation?: RideCancellationOmit
    payment?: PaymentOmit
    feedback?: FeedbackOmit
    sOS_Log?: SOS_LogOmit
    sOS_Involved?: SOS_InvolvedOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ridesHosted: number
    rideParticipants: number
    payments: number
    feedbackGiven: number
    feedbackReceived: number
    cancellations: number
    sosTriggers: number
    sosInvolved: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ridesHosted?: boolean | UserCountOutputTypeCountRidesHostedArgs
    rideParticipants?: boolean | UserCountOutputTypeCountRideParticipantsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    feedbackGiven?: boolean | UserCountOutputTypeCountFeedbackGivenArgs
    feedbackReceived?: boolean | UserCountOutputTypeCountFeedbackReceivedArgs
    cancellations?: boolean | UserCountOutputTypeCountCancellationsArgs
    sosTriggers?: boolean | UserCountOutputTypeCountSosTriggersArgs
    sosInvolved?: boolean | UserCountOutputTypeCountSosInvolvedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRidesHostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRideParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCancellationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideCancellationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSosTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOS_LogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSosInvolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOS_InvolvedWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    rides: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | VehicleCountOutputTypeCountRidesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountRidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
  }


  /**
   * Count Type RideCountOutputType
   */

  export type RideCountOutputType = {
    participants: number
    payments: number
    feedbacks: number
    cancellations: number
    sos_logs: number
  }

  export type RideCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | RideCountOutputTypeCountParticipantsArgs
    payments?: boolean | RideCountOutputTypeCountPaymentsArgs
    feedbacks?: boolean | RideCountOutputTypeCountFeedbacksArgs
    cancellations?: boolean | RideCountOutputTypeCountCancellationsArgs
    sos_logs?: boolean | RideCountOutputTypeCountSos_logsArgs
  }

  // Custom InputTypes
  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCountOutputType
     */
    select?: RideCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideParticipantWhereInput
  }

  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeCountCancellationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideCancellationWhereInput
  }

  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeCountSos_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOS_LogWhereInput
  }


  /**
   * Count Type SOS_LogCountOutputType
   */

  export type SOS_LogCountOutputType = {
    involved_users: number
  }

  export type SOS_LogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    involved_users?: boolean | SOS_LogCountOutputTypeCountInvolved_usersArgs
  }

  // Custom InputTypes
  /**
   * SOS_LogCountOutputType without action
   */
  export type SOS_LogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_LogCountOutputType
     */
    select?: SOS_LogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SOS_LogCountOutputType without action
   */
  export type SOS_LogCountOutputTypeCountInvolved_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOS_InvolvedWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    credibility_score: number | null
    rating: Decimal | null
    cancellation_count: number | null
  }

  export type UserSumAggregateOutputType = {
    credibility_score: number | null
    rating: Decimal | null
    cancellation_count: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: $Enums.UserRole | null
    credibility_score: number | null
    rating: Decimal | null
    cancellation_count: number | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    name: string | null
    email: string | null
    phone: string | null
    role: $Enums.UserRole | null
    credibility_score: number | null
    rating: Decimal | null
    cancellation_count: number | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    phone: number
    role: number
    credibility_score: number
    rating: number
    cancellation_count: number
    password_hash: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credibility_score?: true
    rating?: true
    cancellation_count?: true
  }

  export type UserSumAggregateInputType = {
    credibility_score?: true
    rating?: true
    cancellation_count?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    credibility_score?: true
    rating?: true
    cancellation_count?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    credibility_score?: true
    rating?: true
    cancellation_count?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    credibility_score?: true
    rating?: true
    cancellation_count?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    name: string
    email: string
    phone: string | null
    role: $Enums.UserRole
    credibility_score: number
    rating: Decimal | null
    cancellation_count: number
    password_hash: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    credibility_score?: boolean
    rating?: boolean
    cancellation_count?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    ridesHosted?: boolean | User$ridesHostedArgs<ExtArgs>
    vehicle?: boolean | User$vehicleArgs<ExtArgs>
    rideParticipants?: boolean | User$rideParticipantsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    feedbackGiven?: boolean | User$feedbackGivenArgs<ExtArgs>
    feedbackReceived?: boolean | User$feedbackReceivedArgs<ExtArgs>
    cancellations?: boolean | User$cancellationsArgs<ExtArgs>
    sosTriggers?: boolean | User$sosTriggersArgs<ExtArgs>
    sosInvolved?: boolean | User$sosInvolvedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    credibility_score?: boolean
    rating?: boolean
    cancellation_count?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    credibility_score?: boolean
    rating?: boolean
    cancellation_count?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    credibility_score?: boolean
    rating?: boolean
    cancellation_count?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "phone" | "role" | "credibility_score" | "rating" | "cancellation_count" | "password_hash" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ridesHosted?: boolean | User$ridesHostedArgs<ExtArgs>
    vehicle?: boolean | User$vehicleArgs<ExtArgs>
    rideParticipants?: boolean | User$rideParticipantsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    feedbackGiven?: boolean | User$feedbackGivenArgs<ExtArgs>
    feedbackReceived?: boolean | User$feedbackReceivedArgs<ExtArgs>
    cancellations?: boolean | User$cancellationsArgs<ExtArgs>
    sosTriggers?: boolean | User$sosTriggersArgs<ExtArgs>
    sosInvolved?: boolean | User$sosInvolvedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ridesHosted: Prisma.$RidePayload<ExtArgs>[]
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
      rideParticipants: Prisma.$RideParticipantPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      feedbackGiven: Prisma.$FeedbackPayload<ExtArgs>[]
      feedbackReceived: Prisma.$FeedbackPayload<ExtArgs>[]
      cancellations: Prisma.$RideCancellationPayload<ExtArgs>[]
      sosTriggers: Prisma.$SOS_LogPayload<ExtArgs>[]
      sosInvolved: Prisma.$SOS_InvolvedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      name: string
      email: string
      phone: string | null
      role: $Enums.UserRole
      credibility_score: number
      rating: Prisma.Decimal | null
      cancellation_count: number
      password_hash: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ridesHosted<T extends User$ridesHostedArgs<ExtArgs> = {}>(args?: Subset<T, User$ridesHostedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicle<T extends User$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, User$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rideParticipants<T extends User$rideParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, User$rideParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbackGiven<T extends User$feedbackGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbackGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbackReceived<T extends User$feedbackReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbackReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cancellations<T extends User$cancellationsArgs<ExtArgs> = {}>(args?: Subset<T, User$cancellationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sosTriggers<T extends User$sosTriggersArgs<ExtArgs> = {}>(args?: Subset<T, User$sosTriggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sosInvolved<T extends User$sosInvolvedArgs<ExtArgs> = {}>(args?: Subset<T, User$sosInvolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly credibility_score: FieldRef<"User", 'Int'>
    readonly rating: FieldRef<"User", 'Decimal'>
    readonly cancellation_count: FieldRef<"User", 'Int'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ridesHosted
   */
  export type User$ridesHostedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    where?: RideWhereInput
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    cursor?: RideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * User.vehicle
   */
  export type User$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * User.rideParticipants
   */
  export type User$rideParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    where?: RideParticipantWhereInput
    orderBy?: RideParticipantOrderByWithRelationInput | RideParticipantOrderByWithRelationInput[]
    cursor?: RideParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideParticipantScalarFieldEnum | RideParticipantScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.feedbackGiven
   */
  export type User$feedbackGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User.feedbackReceived
   */
  export type User$feedbackReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User.cancellations
   */
  export type User$cancellationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    where?: RideCancellationWhereInput
    orderBy?: RideCancellationOrderByWithRelationInput | RideCancellationOrderByWithRelationInput[]
    cursor?: RideCancellationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideCancellationScalarFieldEnum | RideCancellationScalarFieldEnum[]
  }

  /**
   * User.sosTriggers
   */
  export type User$sosTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    where?: SOS_LogWhereInput
    orderBy?: SOS_LogOrderByWithRelationInput | SOS_LogOrderByWithRelationInput[]
    cursor?: SOS_LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SOS_LogScalarFieldEnum | SOS_LogScalarFieldEnum[]
  }

  /**
   * User.sosInvolved
   */
  export type User$sosInvolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    where?: SOS_InvolvedWhereInput
    orderBy?: SOS_InvolvedOrderByWithRelationInput | SOS_InvolvedOrderByWithRelationInput[]
    cursor?: SOS_InvolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SOS_InvolvedScalarFieldEnum | SOS_InvolvedScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleMinAggregateOutputType = {
    vehicle_id: string | null
    user_id: string | null
    vehicle_type: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    vehicle_id: string | null
    user_id: string | null
    vehicle_type: string | null
  }

  export type VehicleCountAggregateOutputType = {
    vehicle_id: number
    user_id: number
    vehicle_type: number
    _all: number
  }


  export type VehicleMinAggregateInputType = {
    vehicle_id?: true
    user_id?: true
    vehicle_type?: true
  }

  export type VehicleMaxAggregateInputType = {
    vehicle_id?: true
    user_id?: true
    vehicle_type?: true
  }

  export type VehicleCountAggregateInputType = {
    vehicle_id?: true
    user_id?: true
    vehicle_type?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    vehicle_id: string
    user_id: string
    vehicle_type: string
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicle_id?: boolean
    user_id?: boolean
    vehicle_type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rides?: boolean | Vehicle$ridesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicle_id?: boolean
    user_id?: boolean
    vehicle_type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicle_id?: boolean
    user_id?: boolean
    vehicle_type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    vehicle_id?: boolean
    user_id?: boolean
    vehicle_type?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vehicle_id" | "user_id" | "vehicle_type", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rides?: boolean | Vehicle$ridesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      rides: Prisma.$RidePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      vehicle_id: string
      user_id: string
      vehicle_type: string
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `vehicle_id`
     * const vehicleWithVehicle_idOnly = await prisma.vehicle.findMany({ select: { vehicle_id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `vehicle_id`
     * const vehicleWithVehicle_idOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { vehicle_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `vehicle_id`
     * const vehicleWithVehicle_idOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { vehicle_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rides<T extends Vehicle$ridesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$ridesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly vehicle_id: FieldRef<"Vehicle", 'String'>
    readonly user_id: FieldRef<"Vehicle", 'String'>
    readonly vehicle_type: FieldRef<"Vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.rides
   */
  export type Vehicle$ridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    where?: RideWhereInput
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    cursor?: RideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Ride
   */

  export type AggregateRide = {
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  export type RideAvgAggregateOutputType = {
    total_fare: Decimal | null
    max_passengers: number | null
  }

  export type RideSumAggregateOutputType = {
    total_fare: Decimal | null
    max_passengers: number | null
  }

  export type RideMinAggregateOutputType = {
    ride_id: string | null
    driver_id: string | null
    vehicle_id: string | null
    start_location: string | null
    end_location: string | null
    start_date: Date | null
    start_time: Date | null
    total_fare: Decimal | null
    max_passengers: number | null
    status: $Enums.RideStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RideMaxAggregateOutputType = {
    ride_id: string | null
    driver_id: string | null
    vehicle_id: string | null
    start_location: string | null
    end_location: string | null
    start_date: Date | null
    start_time: Date | null
    total_fare: Decimal | null
    max_passengers: number | null
    status: $Enums.RideStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RideCountAggregateOutputType = {
    ride_id: number
    driver_id: number
    vehicle_id: number
    start_location: number
    end_location: number
    start_date: number
    start_time: number
    total_fare: number
    max_passengers: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RideAvgAggregateInputType = {
    total_fare?: true
    max_passengers?: true
  }

  export type RideSumAggregateInputType = {
    total_fare?: true
    max_passengers?: true
  }

  export type RideMinAggregateInputType = {
    ride_id?: true
    driver_id?: true
    vehicle_id?: true
    start_location?: true
    end_location?: true
    start_date?: true
    start_time?: true
    total_fare?: true
    max_passengers?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type RideMaxAggregateInputType = {
    ride_id?: true
    driver_id?: true
    vehicle_id?: true
    start_location?: true
    end_location?: true
    start_date?: true
    start_time?: true
    total_fare?: true
    max_passengers?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type RideCountAggregateInputType = {
    ride_id?: true
    driver_id?: true
    vehicle_id?: true
    start_location?: true
    end_location?: true
    start_date?: true
    start_time?: true
    total_fare?: true
    max_passengers?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ride to aggregate.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rides
    **/
    _count?: true | RideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RideMaxAggregateInputType
  }

  export type GetRideAggregateType<T extends RideAggregateArgs> = {
        [P in keyof T & keyof AggregateRide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRide[P]>
      : GetScalarType<T[P], AggregateRide[P]>
  }




  export type RideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
    orderBy?: RideOrderByWithAggregationInput | RideOrderByWithAggregationInput[]
    by: RideScalarFieldEnum[] | RideScalarFieldEnum
    having?: RideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RideCountAggregateInputType | true
    _avg?: RideAvgAggregateInputType
    _sum?: RideSumAggregateInputType
    _min?: RideMinAggregateInputType
    _max?: RideMaxAggregateInputType
  }

  export type RideGroupByOutputType = {
    ride_id: string
    driver_id: string
    vehicle_id: string | null
    start_location: string
    end_location: string
    start_date: Date
    start_time: Date
    total_fare: Decimal
    max_passengers: number
    status: $Enums.RideStatus
    created_at: Date
    updated_at: Date
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  type GetRideGroupByPayload<T extends RideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RideGroupByOutputType[P]>
            : GetScalarType<T[P], RideGroupByOutputType[P]>
        }
      >
    >


  export type RideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ride_id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    start_location?: boolean
    end_location?: boolean
    start_date?: boolean
    start_time?: boolean
    total_fare?: boolean
    max_passengers?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | Ride$vehicleArgs<ExtArgs>
    participants?: boolean | Ride$participantsArgs<ExtArgs>
    payments?: boolean | Ride$paymentsArgs<ExtArgs>
    feedbacks?: boolean | Ride$feedbacksArgs<ExtArgs>
    cancellations?: boolean | Ride$cancellationsArgs<ExtArgs>
    sos_logs?: boolean | Ride$sos_logsArgs<ExtArgs>
    _count?: boolean | RideCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ride_id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    start_location?: boolean
    end_location?: boolean
    start_date?: boolean
    start_time?: boolean
    total_fare?: boolean
    max_passengers?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | Ride$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ride_id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    start_location?: boolean
    end_location?: boolean
    start_date?: boolean
    start_time?: boolean
    total_fare?: boolean
    max_passengers?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | Ride$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectScalar = {
    ride_id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    start_location?: boolean
    end_location?: boolean
    start_date?: boolean
    start_time?: boolean
    total_fare?: boolean
    max_passengers?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ride_id" | "driver_id" | "vehicle_id" | "start_location" | "end_location" | "start_date" | "start_time" | "total_fare" | "max_passengers" | "status" | "created_at" | "updated_at", ExtArgs["result"]["ride"]>
  export type RideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | Ride$vehicleArgs<ExtArgs>
    participants?: boolean | Ride$participantsArgs<ExtArgs>
    payments?: boolean | Ride$paymentsArgs<ExtArgs>
    feedbacks?: boolean | Ride$feedbacksArgs<ExtArgs>
    cancellations?: boolean | Ride$cancellationsArgs<ExtArgs>
    sos_logs?: boolean | Ride$sos_logsArgs<ExtArgs>
    _count?: boolean | RideCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | Ride$vehicleArgs<ExtArgs>
  }
  export type RideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | UserDefaultArgs<ExtArgs>
    vehicle?: boolean | Ride$vehicleArgs<ExtArgs>
  }

  export type $RidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ride"
    objects: {
      driver: Prisma.$UserPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
      participants: Prisma.$RideParticipantPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
      cancellations: Prisma.$RideCancellationPayload<ExtArgs>[]
      sos_logs: Prisma.$SOS_LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ride_id: string
      driver_id: string
      vehicle_id: string | null
      start_location: string
      end_location: string
      start_date: Date
      start_time: Date
      total_fare: Prisma.Decimal
      max_passengers: number
      status: $Enums.RideStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ride"]>
    composites: {}
  }

  type RideGetPayload<S extends boolean | null | undefined | RideDefaultArgs> = $Result.GetResult<Prisma.$RidePayload, S>

  type RideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RideCountAggregateInputType | true
    }

  export interface RideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ride'], meta: { name: 'Ride' } }
    /**
     * Find zero or one Ride that matches the filter.
     * @param {RideFindUniqueArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RideFindUniqueArgs>(args: SelectSubset<T, RideFindUniqueArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ride that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RideFindUniqueOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RideFindUniqueOrThrowArgs>(args: SelectSubset<T, RideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RideFindFirstArgs>(args?: SelectSubset<T, RideFindFirstArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RideFindFirstOrThrowArgs>(args?: SelectSubset<T, RideFindFirstOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rides
     * const rides = await prisma.ride.findMany()
     * 
     * // Get first 10 Rides
     * const rides = await prisma.ride.findMany({ take: 10 })
     * 
     * // Only select the `ride_id`
     * const rideWithRide_idOnly = await prisma.ride.findMany({ select: { ride_id: true } })
     * 
     */
    findMany<T extends RideFindManyArgs>(args?: SelectSubset<T, RideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ride.
     * @param {RideCreateArgs} args - Arguments to create a Ride.
     * @example
     * // Create one Ride
     * const Ride = await prisma.ride.create({
     *   data: {
     *     // ... data to create a Ride
     *   }
     * })
     * 
     */
    create<T extends RideCreateArgs>(args: SelectSubset<T, RideCreateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rides.
     * @param {RideCreateManyArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const ride = await prisma.ride.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RideCreateManyArgs>(args?: SelectSubset<T, RideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rides and returns the data saved in the database.
     * @param {RideCreateManyAndReturnArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const ride = await prisma.ride.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rides and only return the `ride_id`
     * const rideWithRide_idOnly = await prisma.ride.createManyAndReturn({
     *   select: { ride_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RideCreateManyAndReturnArgs>(args?: SelectSubset<T, RideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ride.
     * @param {RideDeleteArgs} args - Arguments to delete one Ride.
     * @example
     * // Delete one Ride
     * const Ride = await prisma.ride.delete({
     *   where: {
     *     // ... filter to delete one Ride
     *   }
     * })
     * 
     */
    delete<T extends RideDeleteArgs>(args: SelectSubset<T, RideDeleteArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ride.
     * @param {RideUpdateArgs} args - Arguments to update one Ride.
     * @example
     * // Update one Ride
     * const ride = await prisma.ride.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RideUpdateArgs>(args: SelectSubset<T, RideUpdateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rides.
     * @param {RideDeleteManyArgs} args - Arguments to filter Rides to delete.
     * @example
     * // Delete a few Rides
     * const { count } = await prisma.ride.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RideDeleteManyArgs>(args?: SelectSubset<T, RideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RideUpdateManyArgs>(args: SelectSubset<T, RideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides and returns the data updated in the database.
     * @param {RideUpdateManyAndReturnArgs} args - Arguments to update many Rides.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rides and only return the `ride_id`
     * const rideWithRide_idOnly = await prisma.ride.updateManyAndReturn({
     *   select: { ride_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RideUpdateManyAndReturnArgs>(args: SelectSubset<T, RideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ride.
     * @param {RideUpsertArgs} args - Arguments to update or create a Ride.
     * @example
     * // Update or create a Ride
     * const ride = await prisma.ride.upsert({
     *   create: {
     *     // ... data to create a Ride
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ride we want to update
     *   }
     * })
     */
    upsert<T extends RideUpsertArgs>(args: SelectSubset<T, RideUpsertArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCountArgs} args - Arguments to filter Rides to count.
     * @example
     * // Count the number of Rides
     * const count = await prisma.ride.count({
     *   where: {
     *     // ... the filter for the Rides we want to count
     *   }
     * })
    **/
    count<T extends RideCountArgs>(
      args?: Subset<T, RideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RideAggregateArgs>(args: Subset<T, RideAggregateArgs>): Prisma.PrismaPromise<GetRideAggregateType<T>>

    /**
     * Group by Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RideGroupByArgs['orderBy'] }
        : { orderBy?: RideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ride model
   */
  readonly fields: RideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ride.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends Ride$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, Ride$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participants<T extends Ride$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Ride$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Ride$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Ride$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends Ride$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Ride$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cancellations<T extends Ride$cancellationsArgs<ExtArgs> = {}>(args?: Subset<T, Ride$cancellationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sos_logs<T extends Ride$sos_logsArgs<ExtArgs> = {}>(args?: Subset<T, Ride$sos_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ride model
   */
  interface RideFieldRefs {
    readonly ride_id: FieldRef<"Ride", 'String'>
    readonly driver_id: FieldRef<"Ride", 'String'>
    readonly vehicle_id: FieldRef<"Ride", 'String'>
    readonly start_location: FieldRef<"Ride", 'String'>
    readonly end_location: FieldRef<"Ride", 'String'>
    readonly start_date: FieldRef<"Ride", 'DateTime'>
    readonly start_time: FieldRef<"Ride", 'DateTime'>
    readonly total_fare: FieldRef<"Ride", 'Decimal'>
    readonly max_passengers: FieldRef<"Ride", 'Int'>
    readonly status: FieldRef<"Ride", 'RideStatus'>
    readonly created_at: FieldRef<"Ride", 'DateTime'>
    readonly updated_at: FieldRef<"Ride", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ride findUnique
   */
  export type RideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findUniqueOrThrow
   */
  export type RideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findFirst
   */
  export type RideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findFirstOrThrow
   */
  export type RideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findMany
   */
  export type RideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Rides to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride create
   */
  export type RideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to create a Ride.
     */
    data: XOR<RideCreateInput, RideUncheckedCreateInput>
  }

  /**
   * Ride createMany
   */
  export type RideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rides.
     */
    data: RideCreateManyInput | RideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ride createManyAndReturn
   */
  export type RideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * The data used to create many Rides.
     */
    data: RideCreateManyInput | RideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ride update
   */
  export type RideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to update a Ride.
     */
    data: XOR<RideUpdateInput, RideUncheckedUpdateInput>
    /**
     * Choose, which Ride to update.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride updateMany
   */
  export type RideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rides.
     */
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyInput>
    /**
     * Filter which Rides to update
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to update.
     */
    limit?: number
  }

  /**
   * Ride updateManyAndReturn
   */
  export type RideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * The data used to update Rides.
     */
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyInput>
    /**
     * Filter which Rides to update
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ride upsert
   */
  export type RideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The filter to search for the Ride to update in case it exists.
     */
    where: RideWhereUniqueInput
    /**
     * In case the Ride found by the `where` argument doesn't exist, create a new Ride with this data.
     */
    create: XOR<RideCreateInput, RideUncheckedCreateInput>
    /**
     * In case the Ride was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RideUpdateInput, RideUncheckedUpdateInput>
  }

  /**
   * Ride delete
   */
  export type RideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter which Ride to delete.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride deleteMany
   */
  export type RideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rides to delete
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to delete.
     */
    limit?: number
  }

  /**
   * Ride.vehicle
   */
  export type Ride$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * Ride.participants
   */
  export type Ride$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    where?: RideParticipantWhereInput
    orderBy?: RideParticipantOrderByWithRelationInput | RideParticipantOrderByWithRelationInput[]
    cursor?: RideParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideParticipantScalarFieldEnum | RideParticipantScalarFieldEnum[]
  }

  /**
   * Ride.payments
   */
  export type Ride$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Ride.feedbacks
   */
  export type Ride$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Ride.cancellations
   */
  export type Ride$cancellationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    where?: RideCancellationWhereInput
    orderBy?: RideCancellationOrderByWithRelationInput | RideCancellationOrderByWithRelationInput[]
    cursor?: RideCancellationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideCancellationScalarFieldEnum | RideCancellationScalarFieldEnum[]
  }

  /**
   * Ride.sos_logs
   */
  export type Ride$sos_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    where?: SOS_LogWhereInput
    orderBy?: SOS_LogOrderByWithRelationInput | SOS_LogOrderByWithRelationInput[]
    cursor?: SOS_LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SOS_LogScalarFieldEnum | SOS_LogScalarFieldEnum[]
  }

  /**
   * Ride without action
   */
  export type RideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
  }


  /**
   * Model RideParticipant
   */

  export type AggregateRideParticipant = {
    _count: RideParticipantCountAggregateOutputType | null
    _avg: RideParticipantAvgAggregateOutputType | null
    _sum: RideParticipantSumAggregateOutputType | null
    _min: RideParticipantMinAggregateOutputType | null
    _max: RideParticipantMaxAggregateOutputType | null
  }

  export type RideParticipantAvgAggregateOutputType = {
    share_fare: Decimal | null
  }

  export type RideParticipantSumAggregateOutputType = {
    share_fare: Decimal | null
  }

  export type RideParticipantMinAggregateOutputType = {
    id: string | null
    ride_id: string | null
    user_id: string | null
    share_fare: Decimal | null
    status: string | null
    booking_time: Date | null
  }

  export type RideParticipantMaxAggregateOutputType = {
    id: string | null
    ride_id: string | null
    user_id: string | null
    share_fare: Decimal | null
    status: string | null
    booking_time: Date | null
  }

  export type RideParticipantCountAggregateOutputType = {
    id: number
    ride_id: number
    user_id: number
    share_fare: number
    status: number
    booking_time: number
    _all: number
  }


  export type RideParticipantAvgAggregateInputType = {
    share_fare?: true
  }

  export type RideParticipantSumAggregateInputType = {
    share_fare?: true
  }

  export type RideParticipantMinAggregateInputType = {
    id?: true
    ride_id?: true
    user_id?: true
    share_fare?: true
    status?: true
    booking_time?: true
  }

  export type RideParticipantMaxAggregateInputType = {
    id?: true
    ride_id?: true
    user_id?: true
    share_fare?: true
    status?: true
    booking_time?: true
  }

  export type RideParticipantCountAggregateInputType = {
    id?: true
    ride_id?: true
    user_id?: true
    share_fare?: true
    status?: true
    booking_time?: true
    _all?: true
  }

  export type RideParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RideParticipant to aggregate.
     */
    where?: RideParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RideParticipants to fetch.
     */
    orderBy?: RideParticipantOrderByWithRelationInput | RideParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RideParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RideParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RideParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RideParticipants
    **/
    _count?: true | RideParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RideParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RideParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RideParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RideParticipantMaxAggregateInputType
  }

  export type GetRideParticipantAggregateType<T extends RideParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateRideParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRideParticipant[P]>
      : GetScalarType<T[P], AggregateRideParticipant[P]>
  }




  export type RideParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideParticipantWhereInput
    orderBy?: RideParticipantOrderByWithAggregationInput | RideParticipantOrderByWithAggregationInput[]
    by: RideParticipantScalarFieldEnum[] | RideParticipantScalarFieldEnum
    having?: RideParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RideParticipantCountAggregateInputType | true
    _avg?: RideParticipantAvgAggregateInputType
    _sum?: RideParticipantSumAggregateInputType
    _min?: RideParticipantMinAggregateInputType
    _max?: RideParticipantMaxAggregateInputType
  }

  export type RideParticipantGroupByOutputType = {
    id: string
    ride_id: string
    user_id: string
    share_fare: Decimal | null
    status: string
    booking_time: Date
    _count: RideParticipantCountAggregateOutputType | null
    _avg: RideParticipantAvgAggregateOutputType | null
    _sum: RideParticipantSumAggregateOutputType | null
    _min: RideParticipantMinAggregateOutputType | null
    _max: RideParticipantMaxAggregateOutputType | null
  }

  type GetRideParticipantGroupByPayload<T extends RideParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RideParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RideParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RideParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], RideParticipantGroupByOutputType[P]>
        }
      >
    >


  export type RideParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    user_id?: boolean
    share_fare?: boolean
    status?: boolean
    booking_time?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rideParticipant"]>

  export type RideParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    user_id?: boolean
    share_fare?: boolean
    status?: boolean
    booking_time?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rideParticipant"]>

  export type RideParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    user_id?: boolean
    share_fare?: boolean
    status?: boolean
    booking_time?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rideParticipant"]>

  export type RideParticipantSelectScalar = {
    id?: boolean
    ride_id?: boolean
    user_id?: boolean
    share_fare?: boolean
    status?: boolean
    booking_time?: boolean
  }

  export type RideParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ride_id" | "user_id" | "share_fare" | "status" | "booking_time", ExtArgs["result"]["rideParticipant"]>
  export type RideParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RideParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RideParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RideParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RideParticipant"
    objects: {
      ride: Prisma.$RidePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ride_id: string
      user_id: string
      share_fare: Prisma.Decimal | null
      status: string
      booking_time: Date
    }, ExtArgs["result"]["rideParticipant"]>
    composites: {}
  }

  type RideParticipantGetPayload<S extends boolean | null | undefined | RideParticipantDefaultArgs> = $Result.GetResult<Prisma.$RideParticipantPayload, S>

  type RideParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RideParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RideParticipantCountAggregateInputType | true
    }

  export interface RideParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RideParticipant'], meta: { name: 'RideParticipant' } }
    /**
     * Find zero or one RideParticipant that matches the filter.
     * @param {RideParticipantFindUniqueArgs} args - Arguments to find a RideParticipant
     * @example
     * // Get one RideParticipant
     * const rideParticipant = await prisma.rideParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RideParticipantFindUniqueArgs>(args: SelectSubset<T, RideParticipantFindUniqueArgs<ExtArgs>>): Prisma__RideParticipantClient<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RideParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RideParticipantFindUniqueOrThrowArgs} args - Arguments to find a RideParticipant
     * @example
     * // Get one RideParticipant
     * const rideParticipant = await prisma.rideParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RideParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, RideParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RideParticipantClient<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RideParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideParticipantFindFirstArgs} args - Arguments to find a RideParticipant
     * @example
     * // Get one RideParticipant
     * const rideParticipant = await prisma.rideParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RideParticipantFindFirstArgs>(args?: SelectSubset<T, RideParticipantFindFirstArgs<ExtArgs>>): Prisma__RideParticipantClient<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RideParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideParticipantFindFirstOrThrowArgs} args - Arguments to find a RideParticipant
     * @example
     * // Get one RideParticipant
     * const rideParticipant = await prisma.rideParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RideParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, RideParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RideParticipantClient<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RideParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RideParticipants
     * const rideParticipants = await prisma.rideParticipant.findMany()
     * 
     * // Get first 10 RideParticipants
     * const rideParticipants = await prisma.rideParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rideParticipantWithIdOnly = await prisma.rideParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RideParticipantFindManyArgs>(args?: SelectSubset<T, RideParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RideParticipant.
     * @param {RideParticipantCreateArgs} args - Arguments to create a RideParticipant.
     * @example
     * // Create one RideParticipant
     * const RideParticipant = await prisma.rideParticipant.create({
     *   data: {
     *     // ... data to create a RideParticipant
     *   }
     * })
     * 
     */
    create<T extends RideParticipantCreateArgs>(args: SelectSubset<T, RideParticipantCreateArgs<ExtArgs>>): Prisma__RideParticipantClient<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RideParticipants.
     * @param {RideParticipantCreateManyArgs} args - Arguments to create many RideParticipants.
     * @example
     * // Create many RideParticipants
     * const rideParticipant = await prisma.rideParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RideParticipantCreateManyArgs>(args?: SelectSubset<T, RideParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RideParticipants and returns the data saved in the database.
     * @param {RideParticipantCreateManyAndReturnArgs} args - Arguments to create many RideParticipants.
     * @example
     * // Create many RideParticipants
     * const rideParticipant = await prisma.rideParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RideParticipants and only return the `id`
     * const rideParticipantWithIdOnly = await prisma.rideParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RideParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, RideParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RideParticipant.
     * @param {RideParticipantDeleteArgs} args - Arguments to delete one RideParticipant.
     * @example
     * // Delete one RideParticipant
     * const RideParticipant = await prisma.rideParticipant.delete({
     *   where: {
     *     // ... filter to delete one RideParticipant
     *   }
     * })
     * 
     */
    delete<T extends RideParticipantDeleteArgs>(args: SelectSubset<T, RideParticipantDeleteArgs<ExtArgs>>): Prisma__RideParticipantClient<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RideParticipant.
     * @param {RideParticipantUpdateArgs} args - Arguments to update one RideParticipant.
     * @example
     * // Update one RideParticipant
     * const rideParticipant = await prisma.rideParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RideParticipantUpdateArgs>(args: SelectSubset<T, RideParticipantUpdateArgs<ExtArgs>>): Prisma__RideParticipantClient<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RideParticipants.
     * @param {RideParticipantDeleteManyArgs} args - Arguments to filter RideParticipants to delete.
     * @example
     * // Delete a few RideParticipants
     * const { count } = await prisma.rideParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RideParticipantDeleteManyArgs>(args?: SelectSubset<T, RideParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RideParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RideParticipants
     * const rideParticipant = await prisma.rideParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RideParticipantUpdateManyArgs>(args: SelectSubset<T, RideParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RideParticipants and returns the data updated in the database.
     * @param {RideParticipantUpdateManyAndReturnArgs} args - Arguments to update many RideParticipants.
     * @example
     * // Update many RideParticipants
     * const rideParticipant = await prisma.rideParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RideParticipants and only return the `id`
     * const rideParticipantWithIdOnly = await prisma.rideParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RideParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, RideParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RideParticipant.
     * @param {RideParticipantUpsertArgs} args - Arguments to update or create a RideParticipant.
     * @example
     * // Update or create a RideParticipant
     * const rideParticipant = await prisma.rideParticipant.upsert({
     *   create: {
     *     // ... data to create a RideParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RideParticipant we want to update
     *   }
     * })
     */
    upsert<T extends RideParticipantUpsertArgs>(args: SelectSubset<T, RideParticipantUpsertArgs<ExtArgs>>): Prisma__RideParticipantClient<$Result.GetResult<Prisma.$RideParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RideParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideParticipantCountArgs} args - Arguments to filter RideParticipants to count.
     * @example
     * // Count the number of RideParticipants
     * const count = await prisma.rideParticipant.count({
     *   where: {
     *     // ... the filter for the RideParticipants we want to count
     *   }
     * })
    **/
    count<T extends RideParticipantCountArgs>(
      args?: Subset<T, RideParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RideParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RideParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RideParticipantAggregateArgs>(args: Subset<T, RideParticipantAggregateArgs>): Prisma.PrismaPromise<GetRideParticipantAggregateType<T>>

    /**
     * Group by RideParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RideParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RideParticipantGroupByArgs['orderBy'] }
        : { orderBy?: RideParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RideParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RideParticipant model
   */
  readonly fields: RideParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RideParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RideParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends RideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RideDefaultArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RideParticipant model
   */
  interface RideParticipantFieldRefs {
    readonly id: FieldRef<"RideParticipant", 'String'>
    readonly ride_id: FieldRef<"RideParticipant", 'String'>
    readonly user_id: FieldRef<"RideParticipant", 'String'>
    readonly share_fare: FieldRef<"RideParticipant", 'Decimal'>
    readonly status: FieldRef<"RideParticipant", 'String'>
    readonly booking_time: FieldRef<"RideParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RideParticipant findUnique
   */
  export type RideParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RideParticipant to fetch.
     */
    where: RideParticipantWhereUniqueInput
  }

  /**
   * RideParticipant findUniqueOrThrow
   */
  export type RideParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RideParticipant to fetch.
     */
    where: RideParticipantWhereUniqueInput
  }

  /**
   * RideParticipant findFirst
   */
  export type RideParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RideParticipant to fetch.
     */
    where?: RideParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RideParticipants to fetch.
     */
    orderBy?: RideParticipantOrderByWithRelationInput | RideParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RideParticipants.
     */
    cursor?: RideParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RideParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RideParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RideParticipants.
     */
    distinct?: RideParticipantScalarFieldEnum | RideParticipantScalarFieldEnum[]
  }

  /**
   * RideParticipant findFirstOrThrow
   */
  export type RideParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RideParticipant to fetch.
     */
    where?: RideParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RideParticipants to fetch.
     */
    orderBy?: RideParticipantOrderByWithRelationInput | RideParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RideParticipants.
     */
    cursor?: RideParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RideParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RideParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RideParticipants.
     */
    distinct?: RideParticipantScalarFieldEnum | RideParticipantScalarFieldEnum[]
  }

  /**
   * RideParticipant findMany
   */
  export type RideParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RideParticipants to fetch.
     */
    where?: RideParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RideParticipants to fetch.
     */
    orderBy?: RideParticipantOrderByWithRelationInput | RideParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RideParticipants.
     */
    cursor?: RideParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RideParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RideParticipants.
     */
    skip?: number
    distinct?: RideParticipantScalarFieldEnum | RideParticipantScalarFieldEnum[]
  }

  /**
   * RideParticipant create
   */
  export type RideParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a RideParticipant.
     */
    data: XOR<RideParticipantCreateInput, RideParticipantUncheckedCreateInput>
  }

  /**
   * RideParticipant createMany
   */
  export type RideParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RideParticipants.
     */
    data: RideParticipantCreateManyInput | RideParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RideParticipant createManyAndReturn
   */
  export type RideParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many RideParticipants.
     */
    data: RideParticipantCreateManyInput | RideParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RideParticipant update
   */
  export type RideParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a RideParticipant.
     */
    data: XOR<RideParticipantUpdateInput, RideParticipantUncheckedUpdateInput>
    /**
     * Choose, which RideParticipant to update.
     */
    where: RideParticipantWhereUniqueInput
  }

  /**
   * RideParticipant updateMany
   */
  export type RideParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RideParticipants.
     */
    data: XOR<RideParticipantUpdateManyMutationInput, RideParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RideParticipants to update
     */
    where?: RideParticipantWhereInput
    /**
     * Limit how many RideParticipants to update.
     */
    limit?: number
  }

  /**
   * RideParticipant updateManyAndReturn
   */
  export type RideParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * The data used to update RideParticipants.
     */
    data: XOR<RideParticipantUpdateManyMutationInput, RideParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RideParticipants to update
     */
    where?: RideParticipantWhereInput
    /**
     * Limit how many RideParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RideParticipant upsert
   */
  export type RideParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the RideParticipant to update in case it exists.
     */
    where: RideParticipantWhereUniqueInput
    /**
     * In case the RideParticipant found by the `where` argument doesn't exist, create a new RideParticipant with this data.
     */
    create: XOR<RideParticipantCreateInput, RideParticipantUncheckedCreateInput>
    /**
     * In case the RideParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RideParticipantUpdateInput, RideParticipantUncheckedUpdateInput>
  }

  /**
   * RideParticipant delete
   */
  export type RideParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
    /**
     * Filter which RideParticipant to delete.
     */
    where: RideParticipantWhereUniqueInput
  }

  /**
   * RideParticipant deleteMany
   */
  export type RideParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RideParticipants to delete
     */
    where?: RideParticipantWhereInput
    /**
     * Limit how many RideParticipants to delete.
     */
    limit?: number
  }

  /**
   * RideParticipant without action
   */
  export type RideParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideParticipant
     */
    select?: RideParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideParticipant
     */
    omit?: RideParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideParticipantInclude<ExtArgs> | null
  }


  /**
   * Model RideCancellation
   */

  export type AggregateRideCancellation = {
    _count: RideCancellationCountAggregateOutputType | null
    _min: RideCancellationMinAggregateOutputType | null
    _max: RideCancellationMaxAggregateOutputType | null
  }

  export type RideCancellationMinAggregateOutputType = {
    id: string | null
    ride_id: string | null
    user_id: string | null
    cancelled_at: Date | null
  }

  export type RideCancellationMaxAggregateOutputType = {
    id: string | null
    ride_id: string | null
    user_id: string | null
    cancelled_at: Date | null
  }

  export type RideCancellationCountAggregateOutputType = {
    id: number
    ride_id: number
    user_id: number
    cancelled_at: number
    _all: number
  }


  export type RideCancellationMinAggregateInputType = {
    id?: true
    ride_id?: true
    user_id?: true
    cancelled_at?: true
  }

  export type RideCancellationMaxAggregateInputType = {
    id?: true
    ride_id?: true
    user_id?: true
    cancelled_at?: true
  }

  export type RideCancellationCountAggregateInputType = {
    id?: true
    ride_id?: true
    user_id?: true
    cancelled_at?: true
    _all?: true
  }

  export type RideCancellationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RideCancellation to aggregate.
     */
    where?: RideCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RideCancellations to fetch.
     */
    orderBy?: RideCancellationOrderByWithRelationInput | RideCancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RideCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RideCancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RideCancellations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RideCancellations
    **/
    _count?: true | RideCancellationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RideCancellationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RideCancellationMaxAggregateInputType
  }

  export type GetRideCancellationAggregateType<T extends RideCancellationAggregateArgs> = {
        [P in keyof T & keyof AggregateRideCancellation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRideCancellation[P]>
      : GetScalarType<T[P], AggregateRideCancellation[P]>
  }




  export type RideCancellationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideCancellationWhereInput
    orderBy?: RideCancellationOrderByWithAggregationInput | RideCancellationOrderByWithAggregationInput[]
    by: RideCancellationScalarFieldEnum[] | RideCancellationScalarFieldEnum
    having?: RideCancellationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RideCancellationCountAggregateInputType | true
    _min?: RideCancellationMinAggregateInputType
    _max?: RideCancellationMaxAggregateInputType
  }

  export type RideCancellationGroupByOutputType = {
    id: string
    ride_id: string
    user_id: string
    cancelled_at: Date
    _count: RideCancellationCountAggregateOutputType | null
    _min: RideCancellationMinAggregateOutputType | null
    _max: RideCancellationMaxAggregateOutputType | null
  }

  type GetRideCancellationGroupByPayload<T extends RideCancellationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RideCancellationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RideCancellationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RideCancellationGroupByOutputType[P]>
            : GetScalarType<T[P], RideCancellationGroupByOutputType[P]>
        }
      >
    >


  export type RideCancellationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    user_id?: boolean
    cancelled_at?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rideCancellation"]>

  export type RideCancellationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    user_id?: boolean
    cancelled_at?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rideCancellation"]>

  export type RideCancellationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    user_id?: boolean
    cancelled_at?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rideCancellation"]>

  export type RideCancellationSelectScalar = {
    id?: boolean
    ride_id?: boolean
    user_id?: boolean
    cancelled_at?: boolean
  }

  export type RideCancellationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ride_id" | "user_id" | "cancelled_at", ExtArgs["result"]["rideCancellation"]>
  export type RideCancellationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RideCancellationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RideCancellationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RideCancellationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RideCancellation"
    objects: {
      ride: Prisma.$RidePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ride_id: string
      user_id: string
      cancelled_at: Date
    }, ExtArgs["result"]["rideCancellation"]>
    composites: {}
  }

  type RideCancellationGetPayload<S extends boolean | null | undefined | RideCancellationDefaultArgs> = $Result.GetResult<Prisma.$RideCancellationPayload, S>

  type RideCancellationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RideCancellationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RideCancellationCountAggregateInputType | true
    }

  export interface RideCancellationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RideCancellation'], meta: { name: 'RideCancellation' } }
    /**
     * Find zero or one RideCancellation that matches the filter.
     * @param {RideCancellationFindUniqueArgs} args - Arguments to find a RideCancellation
     * @example
     * // Get one RideCancellation
     * const rideCancellation = await prisma.rideCancellation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RideCancellationFindUniqueArgs>(args: SelectSubset<T, RideCancellationFindUniqueArgs<ExtArgs>>): Prisma__RideCancellationClient<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RideCancellation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RideCancellationFindUniqueOrThrowArgs} args - Arguments to find a RideCancellation
     * @example
     * // Get one RideCancellation
     * const rideCancellation = await prisma.rideCancellation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RideCancellationFindUniqueOrThrowArgs>(args: SelectSubset<T, RideCancellationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RideCancellationClient<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RideCancellation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCancellationFindFirstArgs} args - Arguments to find a RideCancellation
     * @example
     * // Get one RideCancellation
     * const rideCancellation = await prisma.rideCancellation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RideCancellationFindFirstArgs>(args?: SelectSubset<T, RideCancellationFindFirstArgs<ExtArgs>>): Prisma__RideCancellationClient<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RideCancellation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCancellationFindFirstOrThrowArgs} args - Arguments to find a RideCancellation
     * @example
     * // Get one RideCancellation
     * const rideCancellation = await prisma.rideCancellation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RideCancellationFindFirstOrThrowArgs>(args?: SelectSubset<T, RideCancellationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RideCancellationClient<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RideCancellations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCancellationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RideCancellations
     * const rideCancellations = await prisma.rideCancellation.findMany()
     * 
     * // Get first 10 RideCancellations
     * const rideCancellations = await prisma.rideCancellation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rideCancellationWithIdOnly = await prisma.rideCancellation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RideCancellationFindManyArgs>(args?: SelectSubset<T, RideCancellationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RideCancellation.
     * @param {RideCancellationCreateArgs} args - Arguments to create a RideCancellation.
     * @example
     * // Create one RideCancellation
     * const RideCancellation = await prisma.rideCancellation.create({
     *   data: {
     *     // ... data to create a RideCancellation
     *   }
     * })
     * 
     */
    create<T extends RideCancellationCreateArgs>(args: SelectSubset<T, RideCancellationCreateArgs<ExtArgs>>): Prisma__RideCancellationClient<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RideCancellations.
     * @param {RideCancellationCreateManyArgs} args - Arguments to create many RideCancellations.
     * @example
     * // Create many RideCancellations
     * const rideCancellation = await prisma.rideCancellation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RideCancellationCreateManyArgs>(args?: SelectSubset<T, RideCancellationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RideCancellations and returns the data saved in the database.
     * @param {RideCancellationCreateManyAndReturnArgs} args - Arguments to create many RideCancellations.
     * @example
     * // Create many RideCancellations
     * const rideCancellation = await prisma.rideCancellation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RideCancellations and only return the `id`
     * const rideCancellationWithIdOnly = await prisma.rideCancellation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RideCancellationCreateManyAndReturnArgs>(args?: SelectSubset<T, RideCancellationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RideCancellation.
     * @param {RideCancellationDeleteArgs} args - Arguments to delete one RideCancellation.
     * @example
     * // Delete one RideCancellation
     * const RideCancellation = await prisma.rideCancellation.delete({
     *   where: {
     *     // ... filter to delete one RideCancellation
     *   }
     * })
     * 
     */
    delete<T extends RideCancellationDeleteArgs>(args: SelectSubset<T, RideCancellationDeleteArgs<ExtArgs>>): Prisma__RideCancellationClient<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RideCancellation.
     * @param {RideCancellationUpdateArgs} args - Arguments to update one RideCancellation.
     * @example
     * // Update one RideCancellation
     * const rideCancellation = await prisma.rideCancellation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RideCancellationUpdateArgs>(args: SelectSubset<T, RideCancellationUpdateArgs<ExtArgs>>): Prisma__RideCancellationClient<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RideCancellations.
     * @param {RideCancellationDeleteManyArgs} args - Arguments to filter RideCancellations to delete.
     * @example
     * // Delete a few RideCancellations
     * const { count } = await prisma.rideCancellation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RideCancellationDeleteManyArgs>(args?: SelectSubset<T, RideCancellationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RideCancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCancellationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RideCancellations
     * const rideCancellation = await prisma.rideCancellation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RideCancellationUpdateManyArgs>(args: SelectSubset<T, RideCancellationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RideCancellations and returns the data updated in the database.
     * @param {RideCancellationUpdateManyAndReturnArgs} args - Arguments to update many RideCancellations.
     * @example
     * // Update many RideCancellations
     * const rideCancellation = await prisma.rideCancellation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RideCancellations and only return the `id`
     * const rideCancellationWithIdOnly = await prisma.rideCancellation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RideCancellationUpdateManyAndReturnArgs>(args: SelectSubset<T, RideCancellationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RideCancellation.
     * @param {RideCancellationUpsertArgs} args - Arguments to update or create a RideCancellation.
     * @example
     * // Update or create a RideCancellation
     * const rideCancellation = await prisma.rideCancellation.upsert({
     *   create: {
     *     // ... data to create a RideCancellation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RideCancellation we want to update
     *   }
     * })
     */
    upsert<T extends RideCancellationUpsertArgs>(args: SelectSubset<T, RideCancellationUpsertArgs<ExtArgs>>): Prisma__RideCancellationClient<$Result.GetResult<Prisma.$RideCancellationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RideCancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCancellationCountArgs} args - Arguments to filter RideCancellations to count.
     * @example
     * // Count the number of RideCancellations
     * const count = await prisma.rideCancellation.count({
     *   where: {
     *     // ... the filter for the RideCancellations we want to count
     *   }
     * })
    **/
    count<T extends RideCancellationCountArgs>(
      args?: Subset<T, RideCancellationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RideCancellationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RideCancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCancellationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RideCancellationAggregateArgs>(args: Subset<T, RideCancellationAggregateArgs>): Prisma.PrismaPromise<GetRideCancellationAggregateType<T>>

    /**
     * Group by RideCancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCancellationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RideCancellationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RideCancellationGroupByArgs['orderBy'] }
        : { orderBy?: RideCancellationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RideCancellationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideCancellationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RideCancellation model
   */
  readonly fields: RideCancellationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RideCancellation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RideCancellationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends RideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RideDefaultArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RideCancellation model
   */
  interface RideCancellationFieldRefs {
    readonly id: FieldRef<"RideCancellation", 'String'>
    readonly ride_id: FieldRef<"RideCancellation", 'String'>
    readonly user_id: FieldRef<"RideCancellation", 'String'>
    readonly cancelled_at: FieldRef<"RideCancellation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RideCancellation findUnique
   */
  export type RideCancellationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    /**
     * Filter, which RideCancellation to fetch.
     */
    where: RideCancellationWhereUniqueInput
  }

  /**
   * RideCancellation findUniqueOrThrow
   */
  export type RideCancellationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    /**
     * Filter, which RideCancellation to fetch.
     */
    where: RideCancellationWhereUniqueInput
  }

  /**
   * RideCancellation findFirst
   */
  export type RideCancellationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    /**
     * Filter, which RideCancellation to fetch.
     */
    where?: RideCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RideCancellations to fetch.
     */
    orderBy?: RideCancellationOrderByWithRelationInput | RideCancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RideCancellations.
     */
    cursor?: RideCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RideCancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RideCancellations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RideCancellations.
     */
    distinct?: RideCancellationScalarFieldEnum | RideCancellationScalarFieldEnum[]
  }

  /**
   * RideCancellation findFirstOrThrow
   */
  export type RideCancellationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    /**
     * Filter, which RideCancellation to fetch.
     */
    where?: RideCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RideCancellations to fetch.
     */
    orderBy?: RideCancellationOrderByWithRelationInput | RideCancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RideCancellations.
     */
    cursor?: RideCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RideCancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RideCancellations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RideCancellations.
     */
    distinct?: RideCancellationScalarFieldEnum | RideCancellationScalarFieldEnum[]
  }

  /**
   * RideCancellation findMany
   */
  export type RideCancellationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    /**
     * Filter, which RideCancellations to fetch.
     */
    where?: RideCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RideCancellations to fetch.
     */
    orderBy?: RideCancellationOrderByWithRelationInput | RideCancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RideCancellations.
     */
    cursor?: RideCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RideCancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RideCancellations.
     */
    skip?: number
    distinct?: RideCancellationScalarFieldEnum | RideCancellationScalarFieldEnum[]
  }

  /**
   * RideCancellation create
   */
  export type RideCancellationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    /**
     * The data needed to create a RideCancellation.
     */
    data: XOR<RideCancellationCreateInput, RideCancellationUncheckedCreateInput>
  }

  /**
   * RideCancellation createMany
   */
  export type RideCancellationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RideCancellations.
     */
    data: RideCancellationCreateManyInput | RideCancellationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RideCancellation createManyAndReturn
   */
  export type RideCancellationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * The data used to create many RideCancellations.
     */
    data: RideCancellationCreateManyInput | RideCancellationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RideCancellation update
   */
  export type RideCancellationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    /**
     * The data needed to update a RideCancellation.
     */
    data: XOR<RideCancellationUpdateInput, RideCancellationUncheckedUpdateInput>
    /**
     * Choose, which RideCancellation to update.
     */
    where: RideCancellationWhereUniqueInput
  }

  /**
   * RideCancellation updateMany
   */
  export type RideCancellationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RideCancellations.
     */
    data: XOR<RideCancellationUpdateManyMutationInput, RideCancellationUncheckedUpdateManyInput>
    /**
     * Filter which RideCancellations to update
     */
    where?: RideCancellationWhereInput
    /**
     * Limit how many RideCancellations to update.
     */
    limit?: number
  }

  /**
   * RideCancellation updateManyAndReturn
   */
  export type RideCancellationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * The data used to update RideCancellations.
     */
    data: XOR<RideCancellationUpdateManyMutationInput, RideCancellationUncheckedUpdateManyInput>
    /**
     * Filter which RideCancellations to update
     */
    where?: RideCancellationWhereInput
    /**
     * Limit how many RideCancellations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RideCancellation upsert
   */
  export type RideCancellationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    /**
     * The filter to search for the RideCancellation to update in case it exists.
     */
    where: RideCancellationWhereUniqueInput
    /**
     * In case the RideCancellation found by the `where` argument doesn't exist, create a new RideCancellation with this data.
     */
    create: XOR<RideCancellationCreateInput, RideCancellationUncheckedCreateInput>
    /**
     * In case the RideCancellation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RideCancellationUpdateInput, RideCancellationUncheckedUpdateInput>
  }

  /**
   * RideCancellation delete
   */
  export type RideCancellationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
    /**
     * Filter which RideCancellation to delete.
     */
    where: RideCancellationWhereUniqueInput
  }

  /**
   * RideCancellation deleteMany
   */
  export type RideCancellationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RideCancellations to delete
     */
    where?: RideCancellationWhereInput
    /**
     * Limit how many RideCancellations to delete.
     */
    limit?: number
  }

  /**
   * RideCancellation without action
   */
  export type RideCancellationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCancellation
     */
    select?: RideCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RideCancellation
     */
    omit?: RideCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideCancellationInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: string | null
    ride_id: string | null
    payer_id: string | null
    amount: Decimal | null
    paid_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: string | null
    ride_id: string | null
    payer_id: string | null
    amount: Decimal | null
    paid_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    ride_id: number
    payer_id: number
    amount: number
    paid_at: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    ride_id?: true
    payer_id?: true
    amount?: true
    paid_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    ride_id?: true
    payer_id?: true
    amount?: true
    paid_at?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    ride_id?: true
    payer_id?: true
    amount?: true
    paid_at?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: string
    ride_id: string
    payer_id: string
    amount: Decimal
    paid_at: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    ride_id?: boolean
    payer_id?: boolean
    amount?: boolean
    paid_at?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    ride_id?: boolean
    payer_id?: boolean
    amount?: boolean
    paid_at?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    ride_id?: boolean
    payer_id?: boolean
    amount?: boolean
    paid_at?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    payment_id?: boolean
    ride_id?: boolean
    payer_id?: boolean
    amount?: boolean
    paid_at?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "ride_id" | "payer_id" | "amount" | "paid_at", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    payer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      ride: Prisma.$RidePayload<ExtArgs>
      payer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: string
      ride_id: string
      payer_id: string
      amount: Prisma.Decimal
      paid_at: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.createManyAndReturn({
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.updateManyAndReturn({
     *   select: { payment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends RideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RideDefaultArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly payment_id: FieldRef<"Payment", 'String'>
    readonly ride_id: FieldRef<"Payment", 'String'>
    readonly payer_id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paid_at: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    feedback_id: string | null
    ride_id: string | null
    giver_id: string | null
    receiver_id: string | null
    rating: number | null
    comfort_flag: string | null
    comments: string | null
    created_at: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    feedback_id: string | null
    ride_id: string | null
    giver_id: string | null
    receiver_id: string | null
    rating: number | null
    comfort_flag: string | null
    comments: string | null
    created_at: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    feedback_id: number
    ride_id: number
    giver_id: number
    receiver_id: number
    rating: number
    comfort_flag: number
    comments: number
    created_at: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    feedback_id?: true
    ride_id?: true
    giver_id?: true
    receiver_id?: true
    rating?: true
    comfort_flag?: true
    comments?: true
    created_at?: true
  }

  export type FeedbackMaxAggregateInputType = {
    feedback_id?: true
    ride_id?: true
    giver_id?: true
    receiver_id?: true
    rating?: true
    comfort_flag?: true
    comments?: true
    created_at?: true
  }

  export type FeedbackCountAggregateInputType = {
    feedback_id?: true
    ride_id?: true
    giver_id?: true
    receiver_id?: true
    rating?: true
    comfort_flag?: true
    comments?: true
    created_at?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    feedback_id: string
    ride_id: string
    giver_id: string
    receiver_id: string
    rating: number
    comfort_flag: string
    comments: string | null
    created_at: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feedback_id?: boolean
    ride_id?: boolean
    giver_id?: boolean
    receiver_id?: boolean
    rating?: boolean
    comfort_flag?: boolean
    comments?: boolean
    created_at?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feedback_id?: boolean
    ride_id?: boolean
    giver_id?: boolean
    receiver_id?: boolean
    rating?: boolean
    comfort_flag?: boolean
    comments?: boolean
    created_at?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    feedback_id?: boolean
    ride_id?: boolean
    giver_id?: boolean
    receiver_id?: boolean
    rating?: boolean
    comfort_flag?: boolean
    comments?: boolean
    created_at?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    feedback_id?: boolean
    ride_id?: boolean
    giver_id?: boolean
    receiver_id?: boolean
    rating?: boolean
    comfort_flag?: boolean
    comments?: boolean
    created_at?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"feedback_id" | "ride_id" | "giver_id" | "receiver_id" | "rating" | "comfort_flag" | "comments" | "created_at", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    giver?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      ride: Prisma.$RidePayload<ExtArgs>
      giver: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      feedback_id: string
      ride_id: string
      giver_id: string
      receiver_id: string
      rating: number
      comfort_flag: string
      comments: string | null
      created_at: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `feedback_id`
     * const feedbackWithFeedback_idOnly = await prisma.feedback.findMany({ select: { feedback_id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `feedback_id`
     * const feedbackWithFeedback_idOnly = await prisma.feedback.createManyAndReturn({
     *   select: { feedback_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `feedback_id`
     * const feedbackWithFeedback_idOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { feedback_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends RideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RideDefaultArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    giver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly feedback_id: FieldRef<"Feedback", 'String'>
    readonly ride_id: FieldRef<"Feedback", 'String'>
    readonly giver_id: FieldRef<"Feedback", 'String'>
    readonly receiver_id: FieldRef<"Feedback", 'String'>
    readonly rating: FieldRef<"Feedback", 'Int'>
    readonly comfort_flag: FieldRef<"Feedback", 'String'>
    readonly comments: FieldRef<"Feedback", 'String'>
    readonly created_at: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model SOS_Log
   */

  export type AggregateSOS_Log = {
    _count: SOS_LogCountAggregateOutputType | null
    _min: SOS_LogMinAggregateOutputType | null
    _max: SOS_LogMaxAggregateOutputType | null
  }

  export type SOS_LogMinAggregateOutputType = {
    sos_id: string | null
    ride_id: string | null
    trigger_user_id: string | null
    location_at_trigger: string | null
    status: string | null
    trigger_time: Date | null
  }

  export type SOS_LogMaxAggregateOutputType = {
    sos_id: string | null
    ride_id: string | null
    trigger_user_id: string | null
    location_at_trigger: string | null
    status: string | null
    trigger_time: Date | null
  }

  export type SOS_LogCountAggregateOutputType = {
    sos_id: number
    ride_id: number
    trigger_user_id: number
    location_at_trigger: number
    status: number
    trigger_time: number
    _all: number
  }


  export type SOS_LogMinAggregateInputType = {
    sos_id?: true
    ride_id?: true
    trigger_user_id?: true
    location_at_trigger?: true
    status?: true
    trigger_time?: true
  }

  export type SOS_LogMaxAggregateInputType = {
    sos_id?: true
    ride_id?: true
    trigger_user_id?: true
    location_at_trigger?: true
    status?: true
    trigger_time?: true
  }

  export type SOS_LogCountAggregateInputType = {
    sos_id?: true
    ride_id?: true
    trigger_user_id?: true
    location_at_trigger?: true
    status?: true
    trigger_time?: true
    _all?: true
  }

  export type SOS_LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SOS_Log to aggregate.
     */
    where?: SOS_LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOS_Logs to fetch.
     */
    orderBy?: SOS_LogOrderByWithRelationInput | SOS_LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SOS_LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOS_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOS_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SOS_Logs
    **/
    _count?: true | SOS_LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SOS_LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SOS_LogMaxAggregateInputType
  }

  export type GetSOS_LogAggregateType<T extends SOS_LogAggregateArgs> = {
        [P in keyof T & keyof AggregateSOS_Log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSOS_Log[P]>
      : GetScalarType<T[P], AggregateSOS_Log[P]>
  }




  export type SOS_LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOS_LogWhereInput
    orderBy?: SOS_LogOrderByWithAggregationInput | SOS_LogOrderByWithAggregationInput[]
    by: SOS_LogScalarFieldEnum[] | SOS_LogScalarFieldEnum
    having?: SOS_LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SOS_LogCountAggregateInputType | true
    _min?: SOS_LogMinAggregateInputType
    _max?: SOS_LogMaxAggregateInputType
  }

  export type SOS_LogGroupByOutputType = {
    sos_id: string
    ride_id: string
    trigger_user_id: string
    location_at_trigger: string
    status: string
    trigger_time: Date
    _count: SOS_LogCountAggregateOutputType | null
    _min: SOS_LogMinAggregateOutputType | null
    _max: SOS_LogMaxAggregateOutputType | null
  }

  type GetSOS_LogGroupByPayload<T extends SOS_LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SOS_LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SOS_LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SOS_LogGroupByOutputType[P]>
            : GetScalarType<T[P], SOS_LogGroupByOutputType[P]>
        }
      >
    >


  export type SOS_LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sos_id?: boolean
    ride_id?: boolean
    trigger_user_id?: boolean
    location_at_trigger?: boolean
    status?: boolean
    trigger_time?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    trigger_user?: boolean | UserDefaultArgs<ExtArgs>
    involved_users?: boolean | SOS_Log$involved_usersArgs<ExtArgs>
    _count?: boolean | SOS_LogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOS_Log"]>

  export type SOS_LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sos_id?: boolean
    ride_id?: boolean
    trigger_user_id?: boolean
    location_at_trigger?: boolean
    status?: boolean
    trigger_time?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    trigger_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOS_Log"]>

  export type SOS_LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sos_id?: boolean
    ride_id?: boolean
    trigger_user_id?: boolean
    location_at_trigger?: boolean
    status?: boolean
    trigger_time?: boolean
    ride?: boolean | RideDefaultArgs<ExtArgs>
    trigger_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOS_Log"]>

  export type SOS_LogSelectScalar = {
    sos_id?: boolean
    ride_id?: boolean
    trigger_user_id?: boolean
    location_at_trigger?: boolean
    status?: boolean
    trigger_time?: boolean
  }

  export type SOS_LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sos_id" | "ride_id" | "trigger_user_id" | "location_at_trigger" | "status" | "trigger_time", ExtArgs["result"]["sOS_Log"]>
  export type SOS_LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    trigger_user?: boolean | UserDefaultArgs<ExtArgs>
    involved_users?: boolean | SOS_Log$involved_usersArgs<ExtArgs>
    _count?: boolean | SOS_LogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SOS_LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    trigger_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SOS_LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | RideDefaultArgs<ExtArgs>
    trigger_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SOS_LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SOS_Log"
    objects: {
      ride: Prisma.$RidePayload<ExtArgs>
      trigger_user: Prisma.$UserPayload<ExtArgs>
      involved_users: Prisma.$SOS_InvolvedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sos_id: string
      ride_id: string
      trigger_user_id: string
      location_at_trigger: string
      status: string
      trigger_time: Date
    }, ExtArgs["result"]["sOS_Log"]>
    composites: {}
  }

  type SOS_LogGetPayload<S extends boolean | null | undefined | SOS_LogDefaultArgs> = $Result.GetResult<Prisma.$SOS_LogPayload, S>

  type SOS_LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SOS_LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SOS_LogCountAggregateInputType | true
    }

  export interface SOS_LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SOS_Log'], meta: { name: 'SOS_Log' } }
    /**
     * Find zero or one SOS_Log that matches the filter.
     * @param {SOS_LogFindUniqueArgs} args - Arguments to find a SOS_Log
     * @example
     * // Get one SOS_Log
     * const sOS_Log = await prisma.sOS_Log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SOS_LogFindUniqueArgs>(args: SelectSubset<T, SOS_LogFindUniqueArgs<ExtArgs>>): Prisma__SOS_LogClient<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SOS_Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SOS_LogFindUniqueOrThrowArgs} args - Arguments to find a SOS_Log
     * @example
     * // Get one SOS_Log
     * const sOS_Log = await prisma.sOS_Log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SOS_LogFindUniqueOrThrowArgs>(args: SelectSubset<T, SOS_LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SOS_LogClient<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SOS_Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_LogFindFirstArgs} args - Arguments to find a SOS_Log
     * @example
     * // Get one SOS_Log
     * const sOS_Log = await prisma.sOS_Log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SOS_LogFindFirstArgs>(args?: SelectSubset<T, SOS_LogFindFirstArgs<ExtArgs>>): Prisma__SOS_LogClient<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SOS_Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_LogFindFirstOrThrowArgs} args - Arguments to find a SOS_Log
     * @example
     * // Get one SOS_Log
     * const sOS_Log = await prisma.sOS_Log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SOS_LogFindFirstOrThrowArgs>(args?: SelectSubset<T, SOS_LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SOS_LogClient<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SOS_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SOS_Logs
     * const sOS_Logs = await prisma.sOS_Log.findMany()
     * 
     * // Get first 10 SOS_Logs
     * const sOS_Logs = await prisma.sOS_Log.findMany({ take: 10 })
     * 
     * // Only select the `sos_id`
     * const sOS_LogWithSos_idOnly = await prisma.sOS_Log.findMany({ select: { sos_id: true } })
     * 
     */
    findMany<T extends SOS_LogFindManyArgs>(args?: SelectSubset<T, SOS_LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SOS_Log.
     * @param {SOS_LogCreateArgs} args - Arguments to create a SOS_Log.
     * @example
     * // Create one SOS_Log
     * const SOS_Log = await prisma.sOS_Log.create({
     *   data: {
     *     // ... data to create a SOS_Log
     *   }
     * })
     * 
     */
    create<T extends SOS_LogCreateArgs>(args: SelectSubset<T, SOS_LogCreateArgs<ExtArgs>>): Prisma__SOS_LogClient<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SOS_Logs.
     * @param {SOS_LogCreateManyArgs} args - Arguments to create many SOS_Logs.
     * @example
     * // Create many SOS_Logs
     * const sOS_Log = await prisma.sOS_Log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SOS_LogCreateManyArgs>(args?: SelectSubset<T, SOS_LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SOS_Logs and returns the data saved in the database.
     * @param {SOS_LogCreateManyAndReturnArgs} args - Arguments to create many SOS_Logs.
     * @example
     * // Create many SOS_Logs
     * const sOS_Log = await prisma.sOS_Log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SOS_Logs and only return the `sos_id`
     * const sOS_LogWithSos_idOnly = await prisma.sOS_Log.createManyAndReturn({
     *   select: { sos_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SOS_LogCreateManyAndReturnArgs>(args?: SelectSubset<T, SOS_LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SOS_Log.
     * @param {SOS_LogDeleteArgs} args - Arguments to delete one SOS_Log.
     * @example
     * // Delete one SOS_Log
     * const SOS_Log = await prisma.sOS_Log.delete({
     *   where: {
     *     // ... filter to delete one SOS_Log
     *   }
     * })
     * 
     */
    delete<T extends SOS_LogDeleteArgs>(args: SelectSubset<T, SOS_LogDeleteArgs<ExtArgs>>): Prisma__SOS_LogClient<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SOS_Log.
     * @param {SOS_LogUpdateArgs} args - Arguments to update one SOS_Log.
     * @example
     * // Update one SOS_Log
     * const sOS_Log = await prisma.sOS_Log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SOS_LogUpdateArgs>(args: SelectSubset<T, SOS_LogUpdateArgs<ExtArgs>>): Prisma__SOS_LogClient<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SOS_Logs.
     * @param {SOS_LogDeleteManyArgs} args - Arguments to filter SOS_Logs to delete.
     * @example
     * // Delete a few SOS_Logs
     * const { count } = await prisma.sOS_Log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SOS_LogDeleteManyArgs>(args?: SelectSubset<T, SOS_LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SOS_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SOS_Logs
     * const sOS_Log = await prisma.sOS_Log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SOS_LogUpdateManyArgs>(args: SelectSubset<T, SOS_LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SOS_Logs and returns the data updated in the database.
     * @param {SOS_LogUpdateManyAndReturnArgs} args - Arguments to update many SOS_Logs.
     * @example
     * // Update many SOS_Logs
     * const sOS_Log = await prisma.sOS_Log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SOS_Logs and only return the `sos_id`
     * const sOS_LogWithSos_idOnly = await prisma.sOS_Log.updateManyAndReturn({
     *   select: { sos_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SOS_LogUpdateManyAndReturnArgs>(args: SelectSubset<T, SOS_LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SOS_Log.
     * @param {SOS_LogUpsertArgs} args - Arguments to update or create a SOS_Log.
     * @example
     * // Update or create a SOS_Log
     * const sOS_Log = await prisma.sOS_Log.upsert({
     *   create: {
     *     // ... data to create a SOS_Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SOS_Log we want to update
     *   }
     * })
     */
    upsert<T extends SOS_LogUpsertArgs>(args: SelectSubset<T, SOS_LogUpsertArgs<ExtArgs>>): Prisma__SOS_LogClient<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SOS_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_LogCountArgs} args - Arguments to filter SOS_Logs to count.
     * @example
     * // Count the number of SOS_Logs
     * const count = await prisma.sOS_Log.count({
     *   where: {
     *     // ... the filter for the SOS_Logs we want to count
     *   }
     * })
    **/
    count<T extends SOS_LogCountArgs>(
      args?: Subset<T, SOS_LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SOS_LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SOS_Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SOS_LogAggregateArgs>(args: Subset<T, SOS_LogAggregateArgs>): Prisma.PrismaPromise<GetSOS_LogAggregateType<T>>

    /**
     * Group by SOS_Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SOS_LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SOS_LogGroupByArgs['orderBy'] }
        : { orderBy?: SOS_LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SOS_LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSOS_LogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SOS_Log model
   */
  readonly fields: SOS_LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SOS_Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SOS_LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends RideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RideDefaultArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trigger_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    involved_users<T extends SOS_Log$involved_usersArgs<ExtArgs> = {}>(args?: Subset<T, SOS_Log$involved_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SOS_Log model
   */
  interface SOS_LogFieldRefs {
    readonly sos_id: FieldRef<"SOS_Log", 'String'>
    readonly ride_id: FieldRef<"SOS_Log", 'String'>
    readonly trigger_user_id: FieldRef<"SOS_Log", 'String'>
    readonly location_at_trigger: FieldRef<"SOS_Log", 'String'>
    readonly status: FieldRef<"SOS_Log", 'String'>
    readonly trigger_time: FieldRef<"SOS_Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SOS_Log findUnique
   */
  export type SOS_LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Log to fetch.
     */
    where: SOS_LogWhereUniqueInput
  }

  /**
   * SOS_Log findUniqueOrThrow
   */
  export type SOS_LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Log to fetch.
     */
    where: SOS_LogWhereUniqueInput
  }

  /**
   * SOS_Log findFirst
   */
  export type SOS_LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Log to fetch.
     */
    where?: SOS_LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOS_Logs to fetch.
     */
    orderBy?: SOS_LogOrderByWithRelationInput | SOS_LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SOS_Logs.
     */
    cursor?: SOS_LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOS_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOS_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SOS_Logs.
     */
    distinct?: SOS_LogScalarFieldEnum | SOS_LogScalarFieldEnum[]
  }

  /**
   * SOS_Log findFirstOrThrow
   */
  export type SOS_LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Log to fetch.
     */
    where?: SOS_LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOS_Logs to fetch.
     */
    orderBy?: SOS_LogOrderByWithRelationInput | SOS_LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SOS_Logs.
     */
    cursor?: SOS_LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOS_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOS_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SOS_Logs.
     */
    distinct?: SOS_LogScalarFieldEnum | SOS_LogScalarFieldEnum[]
  }

  /**
   * SOS_Log findMany
   */
  export type SOS_LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Logs to fetch.
     */
    where?: SOS_LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOS_Logs to fetch.
     */
    orderBy?: SOS_LogOrderByWithRelationInput | SOS_LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SOS_Logs.
     */
    cursor?: SOS_LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOS_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOS_Logs.
     */
    skip?: number
    distinct?: SOS_LogScalarFieldEnum | SOS_LogScalarFieldEnum[]
  }

  /**
   * SOS_Log create
   */
  export type SOS_LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    /**
     * The data needed to create a SOS_Log.
     */
    data: XOR<SOS_LogCreateInput, SOS_LogUncheckedCreateInput>
  }

  /**
   * SOS_Log createMany
   */
  export type SOS_LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SOS_Logs.
     */
    data: SOS_LogCreateManyInput | SOS_LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SOS_Log createManyAndReturn
   */
  export type SOS_LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * The data used to create many SOS_Logs.
     */
    data: SOS_LogCreateManyInput | SOS_LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SOS_Log update
   */
  export type SOS_LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    /**
     * The data needed to update a SOS_Log.
     */
    data: XOR<SOS_LogUpdateInput, SOS_LogUncheckedUpdateInput>
    /**
     * Choose, which SOS_Log to update.
     */
    where: SOS_LogWhereUniqueInput
  }

  /**
   * SOS_Log updateMany
   */
  export type SOS_LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SOS_Logs.
     */
    data: XOR<SOS_LogUpdateManyMutationInput, SOS_LogUncheckedUpdateManyInput>
    /**
     * Filter which SOS_Logs to update
     */
    where?: SOS_LogWhereInput
    /**
     * Limit how many SOS_Logs to update.
     */
    limit?: number
  }

  /**
   * SOS_Log updateManyAndReturn
   */
  export type SOS_LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * The data used to update SOS_Logs.
     */
    data: XOR<SOS_LogUpdateManyMutationInput, SOS_LogUncheckedUpdateManyInput>
    /**
     * Filter which SOS_Logs to update
     */
    where?: SOS_LogWhereInput
    /**
     * Limit how many SOS_Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SOS_Log upsert
   */
  export type SOS_LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    /**
     * The filter to search for the SOS_Log to update in case it exists.
     */
    where: SOS_LogWhereUniqueInput
    /**
     * In case the SOS_Log found by the `where` argument doesn't exist, create a new SOS_Log with this data.
     */
    create: XOR<SOS_LogCreateInput, SOS_LogUncheckedCreateInput>
    /**
     * In case the SOS_Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SOS_LogUpdateInput, SOS_LogUncheckedUpdateInput>
  }

  /**
   * SOS_Log delete
   */
  export type SOS_LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
    /**
     * Filter which SOS_Log to delete.
     */
    where: SOS_LogWhereUniqueInput
  }

  /**
   * SOS_Log deleteMany
   */
  export type SOS_LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SOS_Logs to delete
     */
    where?: SOS_LogWhereInput
    /**
     * Limit how many SOS_Logs to delete.
     */
    limit?: number
  }

  /**
   * SOS_Log.involved_users
   */
  export type SOS_Log$involved_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    where?: SOS_InvolvedWhereInput
    orderBy?: SOS_InvolvedOrderByWithRelationInput | SOS_InvolvedOrderByWithRelationInput[]
    cursor?: SOS_InvolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SOS_InvolvedScalarFieldEnum | SOS_InvolvedScalarFieldEnum[]
  }

  /**
   * SOS_Log without action
   */
  export type SOS_LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Log
     */
    select?: SOS_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Log
     */
    omit?: SOS_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_LogInclude<ExtArgs> | null
  }


  /**
   * Model SOS_Involved
   */

  export type AggregateSOS_Involved = {
    _count: SOS_InvolvedCountAggregateOutputType | null
    _min: SOS_InvolvedMinAggregateOutputType | null
    _max: SOS_InvolvedMaxAggregateOutputType | null
  }

  export type SOS_InvolvedMinAggregateOutputType = {
    id: string | null
    sos_id: string | null
    user_id: string | null
  }

  export type SOS_InvolvedMaxAggregateOutputType = {
    id: string | null
    sos_id: string | null
    user_id: string | null
  }

  export type SOS_InvolvedCountAggregateOutputType = {
    id: number
    sos_id: number
    user_id: number
    _all: number
  }


  export type SOS_InvolvedMinAggregateInputType = {
    id?: true
    sos_id?: true
    user_id?: true
  }

  export type SOS_InvolvedMaxAggregateInputType = {
    id?: true
    sos_id?: true
    user_id?: true
  }

  export type SOS_InvolvedCountAggregateInputType = {
    id?: true
    sos_id?: true
    user_id?: true
    _all?: true
  }

  export type SOS_InvolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SOS_Involved to aggregate.
     */
    where?: SOS_InvolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOS_Involveds to fetch.
     */
    orderBy?: SOS_InvolvedOrderByWithRelationInput | SOS_InvolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SOS_InvolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOS_Involveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOS_Involveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SOS_Involveds
    **/
    _count?: true | SOS_InvolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SOS_InvolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SOS_InvolvedMaxAggregateInputType
  }

  export type GetSOS_InvolvedAggregateType<T extends SOS_InvolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateSOS_Involved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSOS_Involved[P]>
      : GetScalarType<T[P], AggregateSOS_Involved[P]>
  }




  export type SOS_InvolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SOS_InvolvedWhereInput
    orderBy?: SOS_InvolvedOrderByWithAggregationInput | SOS_InvolvedOrderByWithAggregationInput[]
    by: SOS_InvolvedScalarFieldEnum[] | SOS_InvolvedScalarFieldEnum
    having?: SOS_InvolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SOS_InvolvedCountAggregateInputType | true
    _min?: SOS_InvolvedMinAggregateInputType
    _max?: SOS_InvolvedMaxAggregateInputType
  }

  export type SOS_InvolvedGroupByOutputType = {
    id: string
    sos_id: string
    user_id: string
    _count: SOS_InvolvedCountAggregateOutputType | null
    _min: SOS_InvolvedMinAggregateOutputType | null
    _max: SOS_InvolvedMaxAggregateOutputType | null
  }

  type GetSOS_InvolvedGroupByPayload<T extends SOS_InvolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SOS_InvolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SOS_InvolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SOS_InvolvedGroupByOutputType[P]>
            : GetScalarType<T[P], SOS_InvolvedGroupByOutputType[P]>
        }
      >
    >


  export type SOS_InvolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sos_id?: boolean
    user_id?: boolean
    sos?: boolean | SOS_LogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOS_Involved"]>

  export type SOS_InvolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sos_id?: boolean
    user_id?: boolean
    sos?: boolean | SOS_LogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOS_Involved"]>

  export type SOS_InvolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sos_id?: boolean
    user_id?: boolean
    sos?: boolean | SOS_LogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sOS_Involved"]>

  export type SOS_InvolvedSelectScalar = {
    id?: boolean
    sos_id?: boolean
    user_id?: boolean
  }

  export type SOS_InvolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sos_id" | "user_id", ExtArgs["result"]["sOS_Involved"]>
  export type SOS_InvolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sos?: boolean | SOS_LogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SOS_InvolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sos?: boolean | SOS_LogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SOS_InvolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sos?: boolean | SOS_LogDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SOS_InvolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SOS_Involved"
    objects: {
      sos: Prisma.$SOS_LogPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sos_id: string
      user_id: string
    }, ExtArgs["result"]["sOS_Involved"]>
    composites: {}
  }

  type SOS_InvolvedGetPayload<S extends boolean | null | undefined | SOS_InvolvedDefaultArgs> = $Result.GetResult<Prisma.$SOS_InvolvedPayload, S>

  type SOS_InvolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SOS_InvolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SOS_InvolvedCountAggregateInputType | true
    }

  export interface SOS_InvolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SOS_Involved'], meta: { name: 'SOS_Involved' } }
    /**
     * Find zero or one SOS_Involved that matches the filter.
     * @param {SOS_InvolvedFindUniqueArgs} args - Arguments to find a SOS_Involved
     * @example
     * // Get one SOS_Involved
     * const sOS_Involved = await prisma.sOS_Involved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SOS_InvolvedFindUniqueArgs>(args: SelectSubset<T, SOS_InvolvedFindUniqueArgs<ExtArgs>>): Prisma__SOS_InvolvedClient<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SOS_Involved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SOS_InvolvedFindUniqueOrThrowArgs} args - Arguments to find a SOS_Involved
     * @example
     * // Get one SOS_Involved
     * const sOS_Involved = await prisma.sOS_Involved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SOS_InvolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, SOS_InvolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SOS_InvolvedClient<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SOS_Involved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_InvolvedFindFirstArgs} args - Arguments to find a SOS_Involved
     * @example
     * // Get one SOS_Involved
     * const sOS_Involved = await prisma.sOS_Involved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SOS_InvolvedFindFirstArgs>(args?: SelectSubset<T, SOS_InvolvedFindFirstArgs<ExtArgs>>): Prisma__SOS_InvolvedClient<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SOS_Involved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_InvolvedFindFirstOrThrowArgs} args - Arguments to find a SOS_Involved
     * @example
     * // Get one SOS_Involved
     * const sOS_Involved = await prisma.sOS_Involved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SOS_InvolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, SOS_InvolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__SOS_InvolvedClient<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SOS_Involveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_InvolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SOS_Involveds
     * const sOS_Involveds = await prisma.sOS_Involved.findMany()
     * 
     * // Get first 10 SOS_Involveds
     * const sOS_Involveds = await prisma.sOS_Involved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sOS_InvolvedWithIdOnly = await prisma.sOS_Involved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SOS_InvolvedFindManyArgs>(args?: SelectSubset<T, SOS_InvolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SOS_Involved.
     * @param {SOS_InvolvedCreateArgs} args - Arguments to create a SOS_Involved.
     * @example
     * // Create one SOS_Involved
     * const SOS_Involved = await prisma.sOS_Involved.create({
     *   data: {
     *     // ... data to create a SOS_Involved
     *   }
     * })
     * 
     */
    create<T extends SOS_InvolvedCreateArgs>(args: SelectSubset<T, SOS_InvolvedCreateArgs<ExtArgs>>): Prisma__SOS_InvolvedClient<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SOS_Involveds.
     * @param {SOS_InvolvedCreateManyArgs} args - Arguments to create many SOS_Involveds.
     * @example
     * // Create many SOS_Involveds
     * const sOS_Involved = await prisma.sOS_Involved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SOS_InvolvedCreateManyArgs>(args?: SelectSubset<T, SOS_InvolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SOS_Involveds and returns the data saved in the database.
     * @param {SOS_InvolvedCreateManyAndReturnArgs} args - Arguments to create many SOS_Involveds.
     * @example
     * // Create many SOS_Involveds
     * const sOS_Involved = await prisma.sOS_Involved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SOS_Involveds and only return the `id`
     * const sOS_InvolvedWithIdOnly = await prisma.sOS_Involved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SOS_InvolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, SOS_InvolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SOS_Involved.
     * @param {SOS_InvolvedDeleteArgs} args - Arguments to delete one SOS_Involved.
     * @example
     * // Delete one SOS_Involved
     * const SOS_Involved = await prisma.sOS_Involved.delete({
     *   where: {
     *     // ... filter to delete one SOS_Involved
     *   }
     * })
     * 
     */
    delete<T extends SOS_InvolvedDeleteArgs>(args: SelectSubset<T, SOS_InvolvedDeleteArgs<ExtArgs>>): Prisma__SOS_InvolvedClient<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SOS_Involved.
     * @param {SOS_InvolvedUpdateArgs} args - Arguments to update one SOS_Involved.
     * @example
     * // Update one SOS_Involved
     * const sOS_Involved = await prisma.sOS_Involved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SOS_InvolvedUpdateArgs>(args: SelectSubset<T, SOS_InvolvedUpdateArgs<ExtArgs>>): Prisma__SOS_InvolvedClient<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SOS_Involveds.
     * @param {SOS_InvolvedDeleteManyArgs} args - Arguments to filter SOS_Involveds to delete.
     * @example
     * // Delete a few SOS_Involveds
     * const { count } = await prisma.sOS_Involved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SOS_InvolvedDeleteManyArgs>(args?: SelectSubset<T, SOS_InvolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SOS_Involveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_InvolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SOS_Involveds
     * const sOS_Involved = await prisma.sOS_Involved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SOS_InvolvedUpdateManyArgs>(args: SelectSubset<T, SOS_InvolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SOS_Involveds and returns the data updated in the database.
     * @param {SOS_InvolvedUpdateManyAndReturnArgs} args - Arguments to update many SOS_Involveds.
     * @example
     * // Update many SOS_Involveds
     * const sOS_Involved = await prisma.sOS_Involved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SOS_Involveds and only return the `id`
     * const sOS_InvolvedWithIdOnly = await prisma.sOS_Involved.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SOS_InvolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, SOS_InvolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SOS_Involved.
     * @param {SOS_InvolvedUpsertArgs} args - Arguments to update or create a SOS_Involved.
     * @example
     * // Update or create a SOS_Involved
     * const sOS_Involved = await prisma.sOS_Involved.upsert({
     *   create: {
     *     // ... data to create a SOS_Involved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SOS_Involved we want to update
     *   }
     * })
     */
    upsert<T extends SOS_InvolvedUpsertArgs>(args: SelectSubset<T, SOS_InvolvedUpsertArgs<ExtArgs>>): Prisma__SOS_InvolvedClient<$Result.GetResult<Prisma.$SOS_InvolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SOS_Involveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_InvolvedCountArgs} args - Arguments to filter SOS_Involveds to count.
     * @example
     * // Count the number of SOS_Involveds
     * const count = await prisma.sOS_Involved.count({
     *   where: {
     *     // ... the filter for the SOS_Involveds we want to count
     *   }
     * })
    **/
    count<T extends SOS_InvolvedCountArgs>(
      args?: Subset<T, SOS_InvolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SOS_InvolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SOS_Involved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_InvolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SOS_InvolvedAggregateArgs>(args: Subset<T, SOS_InvolvedAggregateArgs>): Prisma.PrismaPromise<GetSOS_InvolvedAggregateType<T>>

    /**
     * Group by SOS_Involved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SOS_InvolvedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SOS_InvolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SOS_InvolvedGroupByArgs['orderBy'] }
        : { orderBy?: SOS_InvolvedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SOS_InvolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSOS_InvolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SOS_Involved model
   */
  readonly fields: SOS_InvolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SOS_Involved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SOS_InvolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sos<T extends SOS_LogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SOS_LogDefaultArgs<ExtArgs>>): Prisma__SOS_LogClient<$Result.GetResult<Prisma.$SOS_LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SOS_Involved model
   */
  interface SOS_InvolvedFieldRefs {
    readonly id: FieldRef<"SOS_Involved", 'String'>
    readonly sos_id: FieldRef<"SOS_Involved", 'String'>
    readonly user_id: FieldRef<"SOS_Involved", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SOS_Involved findUnique
   */
  export type SOS_InvolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Involved to fetch.
     */
    where: SOS_InvolvedWhereUniqueInput
  }

  /**
   * SOS_Involved findUniqueOrThrow
   */
  export type SOS_InvolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Involved to fetch.
     */
    where: SOS_InvolvedWhereUniqueInput
  }

  /**
   * SOS_Involved findFirst
   */
  export type SOS_InvolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Involved to fetch.
     */
    where?: SOS_InvolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOS_Involveds to fetch.
     */
    orderBy?: SOS_InvolvedOrderByWithRelationInput | SOS_InvolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SOS_Involveds.
     */
    cursor?: SOS_InvolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOS_Involveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOS_Involveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SOS_Involveds.
     */
    distinct?: SOS_InvolvedScalarFieldEnum | SOS_InvolvedScalarFieldEnum[]
  }

  /**
   * SOS_Involved findFirstOrThrow
   */
  export type SOS_InvolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Involved to fetch.
     */
    where?: SOS_InvolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOS_Involveds to fetch.
     */
    orderBy?: SOS_InvolvedOrderByWithRelationInput | SOS_InvolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SOS_Involveds.
     */
    cursor?: SOS_InvolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOS_Involveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOS_Involveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SOS_Involveds.
     */
    distinct?: SOS_InvolvedScalarFieldEnum | SOS_InvolvedScalarFieldEnum[]
  }

  /**
   * SOS_Involved findMany
   */
  export type SOS_InvolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    /**
     * Filter, which SOS_Involveds to fetch.
     */
    where?: SOS_InvolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SOS_Involveds to fetch.
     */
    orderBy?: SOS_InvolvedOrderByWithRelationInput | SOS_InvolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SOS_Involveds.
     */
    cursor?: SOS_InvolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SOS_Involveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SOS_Involveds.
     */
    skip?: number
    distinct?: SOS_InvolvedScalarFieldEnum | SOS_InvolvedScalarFieldEnum[]
  }

  /**
   * SOS_Involved create
   */
  export type SOS_InvolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a SOS_Involved.
     */
    data: XOR<SOS_InvolvedCreateInput, SOS_InvolvedUncheckedCreateInput>
  }

  /**
   * SOS_Involved createMany
   */
  export type SOS_InvolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SOS_Involveds.
     */
    data: SOS_InvolvedCreateManyInput | SOS_InvolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SOS_Involved createManyAndReturn
   */
  export type SOS_InvolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * The data used to create many SOS_Involveds.
     */
    data: SOS_InvolvedCreateManyInput | SOS_InvolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SOS_Involved update
   */
  export type SOS_InvolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a SOS_Involved.
     */
    data: XOR<SOS_InvolvedUpdateInput, SOS_InvolvedUncheckedUpdateInput>
    /**
     * Choose, which SOS_Involved to update.
     */
    where: SOS_InvolvedWhereUniqueInput
  }

  /**
   * SOS_Involved updateMany
   */
  export type SOS_InvolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SOS_Involveds.
     */
    data: XOR<SOS_InvolvedUpdateManyMutationInput, SOS_InvolvedUncheckedUpdateManyInput>
    /**
     * Filter which SOS_Involveds to update
     */
    where?: SOS_InvolvedWhereInput
    /**
     * Limit how many SOS_Involveds to update.
     */
    limit?: number
  }

  /**
   * SOS_Involved updateManyAndReturn
   */
  export type SOS_InvolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * The data used to update SOS_Involveds.
     */
    data: XOR<SOS_InvolvedUpdateManyMutationInput, SOS_InvolvedUncheckedUpdateManyInput>
    /**
     * Filter which SOS_Involveds to update
     */
    where?: SOS_InvolvedWhereInput
    /**
     * Limit how many SOS_Involveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SOS_Involved upsert
   */
  export type SOS_InvolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the SOS_Involved to update in case it exists.
     */
    where: SOS_InvolvedWhereUniqueInput
    /**
     * In case the SOS_Involved found by the `where` argument doesn't exist, create a new SOS_Involved with this data.
     */
    create: XOR<SOS_InvolvedCreateInput, SOS_InvolvedUncheckedCreateInput>
    /**
     * In case the SOS_Involved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SOS_InvolvedUpdateInput, SOS_InvolvedUncheckedUpdateInput>
  }

  /**
   * SOS_Involved delete
   */
  export type SOS_InvolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
    /**
     * Filter which SOS_Involved to delete.
     */
    where: SOS_InvolvedWhereUniqueInput
  }

  /**
   * SOS_Involved deleteMany
   */
  export type SOS_InvolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SOS_Involveds to delete
     */
    where?: SOS_InvolvedWhereInput
    /**
     * Limit how many SOS_Involveds to delete.
     */
    limit?: number
  }

  /**
   * SOS_Involved without action
   */
  export type SOS_InvolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SOS_Involved
     */
    select?: SOS_InvolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SOS_Involved
     */
    omit?: SOS_InvolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SOS_InvolvedInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    role: 'role',
    credibility_score: 'credibility_score',
    rating: 'rating',
    cancellation_count: 'cancellation_count',
    password_hash: 'password_hash',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    vehicle_id: 'vehicle_id',
    user_id: 'user_id',
    vehicle_type: 'vehicle_type'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const RideScalarFieldEnum: {
    ride_id: 'ride_id',
    driver_id: 'driver_id',
    vehicle_id: 'vehicle_id',
    start_location: 'start_location',
    end_location: 'end_location',
    start_date: 'start_date',
    start_time: 'start_time',
    total_fare: 'total_fare',
    max_passengers: 'max_passengers',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RideScalarFieldEnum = (typeof RideScalarFieldEnum)[keyof typeof RideScalarFieldEnum]


  export const RideParticipantScalarFieldEnum: {
    id: 'id',
    ride_id: 'ride_id',
    user_id: 'user_id',
    share_fare: 'share_fare',
    status: 'status',
    booking_time: 'booking_time'
  };

  export type RideParticipantScalarFieldEnum = (typeof RideParticipantScalarFieldEnum)[keyof typeof RideParticipantScalarFieldEnum]


  export const RideCancellationScalarFieldEnum: {
    id: 'id',
    ride_id: 'ride_id',
    user_id: 'user_id',
    cancelled_at: 'cancelled_at'
  };

  export type RideCancellationScalarFieldEnum = (typeof RideCancellationScalarFieldEnum)[keyof typeof RideCancellationScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    ride_id: 'ride_id',
    payer_id: 'payer_id',
    amount: 'amount',
    paid_at: 'paid_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    feedback_id: 'feedback_id',
    ride_id: 'ride_id',
    giver_id: 'giver_id',
    receiver_id: 'receiver_id',
    rating: 'rating',
    comfort_flag: 'comfort_flag',
    comments: 'comments',
    created_at: 'created_at'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const SOS_LogScalarFieldEnum: {
    sos_id: 'sos_id',
    ride_id: 'ride_id',
    trigger_user_id: 'trigger_user_id',
    location_at_trigger: 'location_at_trigger',
    status: 'status',
    trigger_time: 'trigger_time'
  };

  export type SOS_LogScalarFieldEnum = (typeof SOS_LogScalarFieldEnum)[keyof typeof SOS_LogScalarFieldEnum]


  export const SOS_InvolvedScalarFieldEnum: {
    id: 'id',
    sos_id: 'sos_id',
    user_id: 'user_id'
  };

  export type SOS_InvolvedScalarFieldEnum = (typeof SOS_InvolvedScalarFieldEnum)[keyof typeof SOS_InvolvedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RideStatus'
   */
  export type EnumRideStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RideStatus'>
    


  /**
   * Reference to a field of type 'RideStatus[]'
   */
  export type ListEnumRideStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RideStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    credibility_score?: IntFilter<"User"> | number
    rating?: DecimalNullableFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFilter<"User"> | number
    password_hash?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    ridesHosted?: RideListRelationFilter
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    rideParticipants?: RideParticipantListRelationFilter
    payments?: PaymentListRelationFilter
    feedbackGiven?: FeedbackListRelationFilter
    feedbackReceived?: FeedbackListRelationFilter
    cancellations?: RideCancellationListRelationFilter
    sosTriggers?: SOS_LogListRelationFilter
    sosInvolved?: SOS_InvolvedListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    credibility_score?: SortOrder
    rating?: SortOrderInput | SortOrder
    cancellation_count?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ridesHosted?: RideOrderByRelationAggregateInput
    vehicle?: VehicleOrderByWithRelationInput
    rideParticipants?: RideParticipantOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    feedbackGiven?: FeedbackOrderByRelationAggregateInput
    feedbackReceived?: FeedbackOrderByRelationAggregateInput
    cancellations?: RideCancellationOrderByRelationAggregateInput
    sosTriggers?: SOS_LogOrderByRelationAggregateInput
    sosInvolved?: SOS_InvolvedOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    credibility_score?: IntFilter<"User"> | number
    rating?: DecimalNullableFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFilter<"User"> | number
    password_hash?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    ridesHosted?: RideListRelationFilter
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    rideParticipants?: RideParticipantListRelationFilter
    payments?: PaymentListRelationFilter
    feedbackGiven?: FeedbackListRelationFilter
    feedbackReceived?: FeedbackListRelationFilter
    cancellations?: RideCancellationListRelationFilter
    sosTriggers?: SOS_LogListRelationFilter
    sosInvolved?: SOS_InvolvedListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    credibility_score?: SortOrder
    rating?: SortOrderInput | SortOrder
    cancellation_count?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    credibility_score?: IntWithAggregatesFilter<"User"> | number
    rating?: DecimalNullableWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntWithAggregatesFilter<"User"> | number
    password_hash?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicle_id?: StringFilter<"Vehicle"> | string
    user_id?: StringFilter<"Vehicle"> | string
    vehicle_type?: StringFilter<"Vehicle"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rides?: RideListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_type?: SortOrder
    user?: UserOrderByWithRelationInput
    rides?: RideOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    vehicle_id?: string
    user_id?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicle_type?: StringFilter<"Vehicle"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rides?: RideListRelationFilter
  }, "vehicle_id" | "user_id">

  export type VehicleOrderByWithAggregationInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_type?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    vehicle_id?: StringWithAggregatesFilter<"Vehicle"> | string
    user_id?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicle_type?: StringWithAggregatesFilter<"Vehicle"> | string
  }

  export type RideWhereInput = {
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    ride_id?: StringFilter<"Ride"> | string
    driver_id?: StringFilter<"Ride"> | string
    vehicle_id?: StringNullableFilter<"Ride"> | string | null
    start_location?: StringFilter<"Ride"> | string
    end_location?: StringFilter<"Ride"> | string
    start_date?: DateTimeFilter<"Ride"> | Date | string
    start_time?: DateTimeFilter<"Ride"> | Date | string
    total_fare?: DecimalFilter<"Ride"> | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFilter<"Ride"> | number
    status?: EnumRideStatusFilter<"Ride"> | $Enums.RideStatus
    created_at?: DateTimeFilter<"Ride"> | Date | string
    updated_at?: DateTimeFilter<"Ride"> | Date | string
    driver?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    participants?: RideParticipantListRelationFilter
    payments?: PaymentListRelationFilter
    feedbacks?: FeedbackListRelationFilter
    cancellations?: RideCancellationListRelationFilter
    sos_logs?: SOS_LogListRelationFilter
  }

  export type RideOrderByWithRelationInput = {
    ride_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrderInput | SortOrder
    start_location?: SortOrder
    end_location?: SortOrder
    start_date?: SortOrder
    start_time?: SortOrder
    total_fare?: SortOrder
    max_passengers?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    driver?: UserOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    participants?: RideParticipantOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
    cancellations?: RideCancellationOrderByRelationAggregateInput
    sos_logs?: SOS_LogOrderByRelationAggregateInput
  }

  export type RideWhereUniqueInput = Prisma.AtLeast<{
    ride_id?: string
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    driver_id?: StringFilter<"Ride"> | string
    vehicle_id?: StringNullableFilter<"Ride"> | string | null
    start_location?: StringFilter<"Ride"> | string
    end_location?: StringFilter<"Ride"> | string
    start_date?: DateTimeFilter<"Ride"> | Date | string
    start_time?: DateTimeFilter<"Ride"> | Date | string
    total_fare?: DecimalFilter<"Ride"> | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFilter<"Ride"> | number
    status?: EnumRideStatusFilter<"Ride"> | $Enums.RideStatus
    created_at?: DateTimeFilter<"Ride"> | Date | string
    updated_at?: DateTimeFilter<"Ride"> | Date | string
    driver?: XOR<UserScalarRelationFilter, UserWhereInput>
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    participants?: RideParticipantListRelationFilter
    payments?: PaymentListRelationFilter
    feedbacks?: FeedbackListRelationFilter
    cancellations?: RideCancellationListRelationFilter
    sos_logs?: SOS_LogListRelationFilter
  }, "ride_id">

  export type RideOrderByWithAggregationInput = {
    ride_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrderInput | SortOrder
    start_location?: SortOrder
    end_location?: SortOrder
    start_date?: SortOrder
    start_time?: SortOrder
    total_fare?: SortOrder
    max_passengers?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RideCountOrderByAggregateInput
    _avg?: RideAvgOrderByAggregateInput
    _max?: RideMaxOrderByAggregateInput
    _min?: RideMinOrderByAggregateInput
    _sum?: RideSumOrderByAggregateInput
  }

  export type RideScalarWhereWithAggregatesInput = {
    AND?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    OR?: RideScalarWhereWithAggregatesInput[]
    NOT?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    ride_id?: StringWithAggregatesFilter<"Ride"> | string
    driver_id?: StringWithAggregatesFilter<"Ride"> | string
    vehicle_id?: StringNullableWithAggregatesFilter<"Ride"> | string | null
    start_location?: StringWithAggregatesFilter<"Ride"> | string
    end_location?: StringWithAggregatesFilter<"Ride"> | string
    start_date?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
    start_time?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
    total_fare?: DecimalWithAggregatesFilter<"Ride"> | Decimal | DecimalJsLike | number | string
    max_passengers?: IntWithAggregatesFilter<"Ride"> | number
    status?: EnumRideStatusWithAggregatesFilter<"Ride"> | $Enums.RideStatus
    created_at?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
  }

  export type RideParticipantWhereInput = {
    AND?: RideParticipantWhereInput | RideParticipantWhereInput[]
    OR?: RideParticipantWhereInput[]
    NOT?: RideParticipantWhereInput | RideParticipantWhereInput[]
    id?: StringFilter<"RideParticipant"> | string
    ride_id?: StringFilter<"RideParticipant"> | string
    user_id?: StringFilter<"RideParticipant"> | string
    share_fare?: DecimalNullableFilter<"RideParticipant"> | Decimal | DecimalJsLike | number | string | null
    status?: StringFilter<"RideParticipant"> | string
    booking_time?: DateTimeFilter<"RideParticipant"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RideParticipantOrderByWithRelationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    share_fare?: SortOrderInput | SortOrder
    status?: SortOrder
    booking_time?: SortOrder
    ride?: RideOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RideParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ride_id_user_id?: RideParticipantRide_id_user_idCompoundUniqueInput
    AND?: RideParticipantWhereInput | RideParticipantWhereInput[]
    OR?: RideParticipantWhereInput[]
    NOT?: RideParticipantWhereInput | RideParticipantWhereInput[]
    ride_id?: StringFilter<"RideParticipant"> | string
    user_id?: StringFilter<"RideParticipant"> | string
    share_fare?: DecimalNullableFilter<"RideParticipant"> | Decimal | DecimalJsLike | number | string | null
    status?: StringFilter<"RideParticipant"> | string
    booking_time?: DateTimeFilter<"RideParticipant"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "ride_id_user_id">

  export type RideParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    share_fare?: SortOrderInput | SortOrder
    status?: SortOrder
    booking_time?: SortOrder
    _count?: RideParticipantCountOrderByAggregateInput
    _avg?: RideParticipantAvgOrderByAggregateInput
    _max?: RideParticipantMaxOrderByAggregateInput
    _min?: RideParticipantMinOrderByAggregateInput
    _sum?: RideParticipantSumOrderByAggregateInput
  }

  export type RideParticipantScalarWhereWithAggregatesInput = {
    AND?: RideParticipantScalarWhereWithAggregatesInput | RideParticipantScalarWhereWithAggregatesInput[]
    OR?: RideParticipantScalarWhereWithAggregatesInput[]
    NOT?: RideParticipantScalarWhereWithAggregatesInput | RideParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RideParticipant"> | string
    ride_id?: StringWithAggregatesFilter<"RideParticipant"> | string
    user_id?: StringWithAggregatesFilter<"RideParticipant"> | string
    share_fare?: DecimalNullableWithAggregatesFilter<"RideParticipant"> | Decimal | DecimalJsLike | number | string | null
    status?: StringWithAggregatesFilter<"RideParticipant"> | string
    booking_time?: DateTimeWithAggregatesFilter<"RideParticipant"> | Date | string
  }

  export type RideCancellationWhereInput = {
    AND?: RideCancellationWhereInput | RideCancellationWhereInput[]
    OR?: RideCancellationWhereInput[]
    NOT?: RideCancellationWhereInput | RideCancellationWhereInput[]
    id?: StringFilter<"RideCancellation"> | string
    ride_id?: StringFilter<"RideCancellation"> | string
    user_id?: StringFilter<"RideCancellation"> | string
    cancelled_at?: DateTimeFilter<"RideCancellation"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RideCancellationOrderByWithRelationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    cancelled_at?: SortOrder
    ride?: RideOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RideCancellationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RideCancellationWhereInput | RideCancellationWhereInput[]
    OR?: RideCancellationWhereInput[]
    NOT?: RideCancellationWhereInput | RideCancellationWhereInput[]
    ride_id?: StringFilter<"RideCancellation"> | string
    user_id?: StringFilter<"RideCancellation"> | string
    cancelled_at?: DateTimeFilter<"RideCancellation"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RideCancellationOrderByWithAggregationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    cancelled_at?: SortOrder
    _count?: RideCancellationCountOrderByAggregateInput
    _max?: RideCancellationMaxOrderByAggregateInput
    _min?: RideCancellationMinOrderByAggregateInput
  }

  export type RideCancellationScalarWhereWithAggregatesInput = {
    AND?: RideCancellationScalarWhereWithAggregatesInput | RideCancellationScalarWhereWithAggregatesInput[]
    OR?: RideCancellationScalarWhereWithAggregatesInput[]
    NOT?: RideCancellationScalarWhereWithAggregatesInput | RideCancellationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RideCancellation"> | string
    ride_id?: StringWithAggregatesFilter<"RideCancellation"> | string
    user_id?: StringWithAggregatesFilter<"RideCancellation"> | string
    cancelled_at?: DateTimeWithAggregatesFilter<"RideCancellation"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    payment_id?: StringFilter<"Payment"> | string
    ride_id?: StringFilter<"Payment"> | string
    payer_id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFilter<"Payment"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    ride_id?: SortOrder
    payer_id?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
    ride?: RideOrderByWithRelationInput
    payer?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: string
    ride_id_payer_id?: PaymentRide_id_payer_idCompoundUniqueInput
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    ride_id?: StringFilter<"Payment"> | string
    payer_id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFilter<"Payment"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    payer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "payment_id" | "ride_id_payer_id">

  export type PaymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    ride_id?: SortOrder
    payer_id?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    payment_id?: StringWithAggregatesFilter<"Payment"> | string
    ride_id?: StringWithAggregatesFilter<"Payment"> | string
    payer_id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    feedback_id?: StringFilter<"Feedback"> | string
    ride_id?: StringFilter<"Feedback"> | string
    giver_id?: StringFilter<"Feedback"> | string
    receiver_id?: StringFilter<"Feedback"> | string
    rating?: IntFilter<"Feedback"> | number
    comfort_flag?: StringFilter<"Feedback"> | string
    comments?: StringNullableFilter<"Feedback"> | string | null
    created_at?: DateTimeFilter<"Feedback"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    giver?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    feedback_id?: SortOrder
    ride_id?: SortOrder
    giver_id?: SortOrder
    receiver_id?: SortOrder
    rating?: SortOrder
    comfort_flag?: SortOrder
    comments?: SortOrderInput | SortOrder
    created_at?: SortOrder
    ride?: RideOrderByWithRelationInput
    giver?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    feedback_id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    ride_id?: StringFilter<"Feedback"> | string
    giver_id?: StringFilter<"Feedback"> | string
    receiver_id?: StringFilter<"Feedback"> | string
    rating?: IntFilter<"Feedback"> | number
    comfort_flag?: StringFilter<"Feedback"> | string
    comments?: StringNullableFilter<"Feedback"> | string | null
    created_at?: DateTimeFilter<"Feedback"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    giver?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "feedback_id">

  export type FeedbackOrderByWithAggregationInput = {
    feedback_id?: SortOrder
    ride_id?: SortOrder
    giver_id?: SortOrder
    receiver_id?: SortOrder
    rating?: SortOrder
    comfort_flag?: SortOrder
    comments?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    feedback_id?: StringWithAggregatesFilter<"Feedback"> | string
    ride_id?: StringWithAggregatesFilter<"Feedback"> | string
    giver_id?: StringWithAggregatesFilter<"Feedback"> | string
    receiver_id?: StringWithAggregatesFilter<"Feedback"> | string
    rating?: IntWithAggregatesFilter<"Feedback"> | number
    comfort_flag?: StringWithAggregatesFilter<"Feedback"> | string
    comments?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type SOS_LogWhereInput = {
    AND?: SOS_LogWhereInput | SOS_LogWhereInput[]
    OR?: SOS_LogWhereInput[]
    NOT?: SOS_LogWhereInput | SOS_LogWhereInput[]
    sos_id?: StringFilter<"SOS_Log"> | string
    ride_id?: StringFilter<"SOS_Log"> | string
    trigger_user_id?: StringFilter<"SOS_Log"> | string
    location_at_trigger?: StringFilter<"SOS_Log"> | string
    status?: StringFilter<"SOS_Log"> | string
    trigger_time?: DateTimeFilter<"SOS_Log"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    trigger_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    involved_users?: SOS_InvolvedListRelationFilter
  }

  export type SOS_LogOrderByWithRelationInput = {
    sos_id?: SortOrder
    ride_id?: SortOrder
    trigger_user_id?: SortOrder
    location_at_trigger?: SortOrder
    status?: SortOrder
    trigger_time?: SortOrder
    ride?: RideOrderByWithRelationInput
    trigger_user?: UserOrderByWithRelationInput
    involved_users?: SOS_InvolvedOrderByRelationAggregateInput
  }

  export type SOS_LogWhereUniqueInput = Prisma.AtLeast<{
    sos_id?: string
    AND?: SOS_LogWhereInput | SOS_LogWhereInput[]
    OR?: SOS_LogWhereInput[]
    NOT?: SOS_LogWhereInput | SOS_LogWhereInput[]
    ride_id?: StringFilter<"SOS_Log"> | string
    trigger_user_id?: StringFilter<"SOS_Log"> | string
    location_at_trigger?: StringFilter<"SOS_Log"> | string
    status?: StringFilter<"SOS_Log"> | string
    trigger_time?: DateTimeFilter<"SOS_Log"> | Date | string
    ride?: XOR<RideScalarRelationFilter, RideWhereInput>
    trigger_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    involved_users?: SOS_InvolvedListRelationFilter
  }, "sos_id">

  export type SOS_LogOrderByWithAggregationInput = {
    sos_id?: SortOrder
    ride_id?: SortOrder
    trigger_user_id?: SortOrder
    location_at_trigger?: SortOrder
    status?: SortOrder
    trigger_time?: SortOrder
    _count?: SOS_LogCountOrderByAggregateInput
    _max?: SOS_LogMaxOrderByAggregateInput
    _min?: SOS_LogMinOrderByAggregateInput
  }

  export type SOS_LogScalarWhereWithAggregatesInput = {
    AND?: SOS_LogScalarWhereWithAggregatesInput | SOS_LogScalarWhereWithAggregatesInput[]
    OR?: SOS_LogScalarWhereWithAggregatesInput[]
    NOT?: SOS_LogScalarWhereWithAggregatesInput | SOS_LogScalarWhereWithAggregatesInput[]
    sos_id?: StringWithAggregatesFilter<"SOS_Log"> | string
    ride_id?: StringWithAggregatesFilter<"SOS_Log"> | string
    trigger_user_id?: StringWithAggregatesFilter<"SOS_Log"> | string
    location_at_trigger?: StringWithAggregatesFilter<"SOS_Log"> | string
    status?: StringWithAggregatesFilter<"SOS_Log"> | string
    trigger_time?: DateTimeWithAggregatesFilter<"SOS_Log"> | Date | string
  }

  export type SOS_InvolvedWhereInput = {
    AND?: SOS_InvolvedWhereInput | SOS_InvolvedWhereInput[]
    OR?: SOS_InvolvedWhereInput[]
    NOT?: SOS_InvolvedWhereInput | SOS_InvolvedWhereInput[]
    id?: StringFilter<"SOS_Involved"> | string
    sos_id?: StringFilter<"SOS_Involved"> | string
    user_id?: StringFilter<"SOS_Involved"> | string
    sos?: XOR<SOS_LogScalarRelationFilter, SOS_LogWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SOS_InvolvedOrderByWithRelationInput = {
    id?: SortOrder
    sos_id?: SortOrder
    user_id?: SortOrder
    sos?: SOS_LogOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SOS_InvolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SOS_InvolvedWhereInput | SOS_InvolvedWhereInput[]
    OR?: SOS_InvolvedWhereInput[]
    NOT?: SOS_InvolvedWhereInput | SOS_InvolvedWhereInput[]
    sos_id?: StringFilter<"SOS_Involved"> | string
    user_id?: StringFilter<"SOS_Involved"> | string
    sos?: XOR<SOS_LogScalarRelationFilter, SOS_LogWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SOS_InvolvedOrderByWithAggregationInput = {
    id?: SortOrder
    sos_id?: SortOrder
    user_id?: SortOrder
    _count?: SOS_InvolvedCountOrderByAggregateInput
    _max?: SOS_InvolvedMaxOrderByAggregateInput
    _min?: SOS_InvolvedMinOrderByAggregateInput
  }

  export type SOS_InvolvedScalarWhereWithAggregatesInput = {
    AND?: SOS_InvolvedScalarWhereWithAggregatesInput | SOS_InvolvedScalarWhereWithAggregatesInput[]
    OR?: SOS_InvolvedScalarWhereWithAggregatesInput[]
    NOT?: SOS_InvolvedScalarWhereWithAggregatesInput | SOS_InvolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SOS_Involved"> | string
    sos_id?: StringWithAggregatesFilter<"SOS_Involved"> | string
    user_id?: StringWithAggregatesFilter<"SOS_Involved"> | string
  }

  export type UserCreateInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    vehicle_id?: string
    vehicle_type: string
    user: UserCreateNestedOneWithoutVehicleInput
    rides?: RideCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    vehicle_id?: string
    user_id: string
    vehicle_type: string
    rides?: RideUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVehicleNestedInput
    rides?: RideUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    rides?: RideUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    vehicle_id?: string
    user_id: string
    vehicle_type: string
  }

  export type VehicleUpdateManyMutationInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
  }

  export type RideCreateInput = {
    ride_id?: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    driver: UserCreateNestedOneWithoutRidesHostedInput
    vehicle?: VehicleCreateNestedOneWithoutRidesInput
    participants?: RideParticipantCreateNestedManyWithoutRideInput
    payments?: PaymentCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateInput = {
    ride_id?: string
    driver_id: string
    vehicle_id?: string | null
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    participants?: RideParticipantUncheckedCreateNestedManyWithoutRideInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideUpdateInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutRidesHostedNestedInput
    vehicle?: VehicleUpdateOneWithoutRidesNestedInput
    participants?: RideParticipantUpdateManyWithoutRideNestedInput
    payments?: PaymentUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RideParticipantUncheckedUpdateManyWithoutRideNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUncheckedUpdateManyWithoutRideNestedInput
  }

  export type RideCreateManyInput = {
    ride_id?: string
    driver_id: string
    vehicle_id?: string | null
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RideUpdateManyMutationInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideParticipantCreateInput = {
    id?: string
    share_fare?: Decimal | DecimalJsLike | number | string | null
    status?: string
    booking_time?: Date | string
    ride: RideCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutRideParticipantsInput
  }

  export type RideParticipantUncheckedCreateInput = {
    id?: string
    ride_id: string
    user_id: string
    share_fare?: Decimal | DecimalJsLike | number | string | null
    status?: string
    booking_time?: Date | string
  }

  export type RideParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutRideParticipantsNestedInput
  }

  export type RideParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideParticipantCreateManyInput = {
    id?: string
    ride_id: string
    user_id: string
    share_fare?: Decimal | DecimalJsLike | number | string | null
    status?: string
    booking_time?: Date | string
  }

  export type RideParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCancellationCreateInput = {
    id?: string
    cancelled_at?: Date | string
    ride: RideCreateNestedOneWithoutCancellationsInput
    user: UserCreateNestedOneWithoutCancellationsInput
  }

  export type RideCancellationUncheckedCreateInput = {
    id?: string
    ride_id: string
    user_id: string
    cancelled_at?: Date | string
  }

  export type RideCancellationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutCancellationsNestedInput
    user?: UserUpdateOneRequiredWithoutCancellationsNestedInput
  }

  export type RideCancellationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCancellationCreateManyInput = {
    id?: string
    ride_id: string
    user_id: string
    cancelled_at?: Date | string
  }

  export type RideCancellationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCancellationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    payment_id?: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string
    ride: RideCreateNestedOneWithoutPaymentsInput
    payer: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    payment_id?: string
    ride_id: string
    payer_id: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string
  }

  export type PaymentUpdateInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutPaymentsNestedInput
    payer?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    payment_id?: string
    ride_id: string
    payer_id: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    feedback_id?: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
    ride: RideCreateNestedOneWithoutFeedbacksInput
    giver: UserCreateNestedOneWithoutFeedbackGivenInput
    receiver: UserCreateNestedOneWithoutFeedbackReceivedInput
  }

  export type FeedbackUncheckedCreateInput = {
    feedback_id?: string
    ride_id: string
    giver_id: string
    receiver_id: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
  }

  export type FeedbackUpdateInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutFeedbacksNestedInput
    giver?: UserUpdateOneRequiredWithoutFeedbackGivenNestedInput
    receiver?: UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    giver_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    feedback_id?: string
    ride_id: string
    giver_id: string
    receiver_id: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    giver_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOS_LogCreateInput = {
    sos_id?: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
    ride: RideCreateNestedOneWithoutSos_logsInput
    trigger_user: UserCreateNestedOneWithoutSosTriggersInput
    involved_users?: SOS_InvolvedCreateNestedManyWithoutSosInput
  }

  export type SOS_LogUncheckedCreateInput = {
    sos_id?: string
    ride_id: string
    trigger_user_id: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
    involved_users?: SOS_InvolvedUncheckedCreateNestedManyWithoutSosInput
  }

  export type SOS_LogUpdateInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutSos_logsNestedInput
    trigger_user?: UserUpdateOneRequiredWithoutSosTriggersNestedInput
    involved_users?: SOS_InvolvedUpdateManyWithoutSosNestedInput
  }

  export type SOS_LogUncheckedUpdateInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    trigger_user_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    involved_users?: SOS_InvolvedUncheckedUpdateManyWithoutSosNestedInput
  }

  export type SOS_LogCreateManyInput = {
    sos_id?: string
    ride_id: string
    trigger_user_id: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
  }

  export type SOS_LogUpdateManyMutationInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOS_LogUncheckedUpdateManyInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    trigger_user_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOS_InvolvedCreateInput = {
    id?: string
    sos: SOS_LogCreateNestedOneWithoutInvolved_usersInput
    user: UserCreateNestedOneWithoutSosInvolvedInput
  }

  export type SOS_InvolvedUncheckedCreateInput = {
    id?: string
    sos_id: string
    user_id: string
  }

  export type SOS_InvolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sos?: SOS_LogUpdateOneRequiredWithoutInvolved_usersNestedInput
    user?: UserUpdateOneRequiredWithoutSosInvolvedNestedInput
  }

  export type SOS_InvolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sos_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type SOS_InvolvedCreateManyInput = {
    id?: string
    sos_id: string
    user_id: string
  }

  export type SOS_InvolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SOS_InvolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sos_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RideListRelationFilter = {
    every?: RideWhereInput
    some?: RideWhereInput
    none?: RideWhereInput
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type RideParticipantListRelationFilter = {
    every?: RideParticipantWhereInput
    some?: RideParticipantWhereInput
    none?: RideParticipantWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type RideCancellationListRelationFilter = {
    every?: RideCancellationWhereInput
    some?: RideCancellationWhereInput
    none?: RideCancellationWhereInput
  }

  export type SOS_LogListRelationFilter = {
    every?: SOS_LogWhereInput
    some?: SOS_LogWhereInput
    none?: SOS_LogWhereInput
  }

  export type SOS_InvolvedListRelationFilter = {
    every?: SOS_InvolvedWhereInput
    some?: SOS_InvolvedWhereInput
    none?: SOS_InvolvedWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RideParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RideCancellationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SOS_LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SOS_InvolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    credibility_score?: SortOrder
    rating?: SortOrder
    cancellation_count?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credibility_score?: SortOrder
    rating?: SortOrder
    cancellation_count?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    credibility_score?: SortOrder
    rating?: SortOrder
    cancellation_count?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    credibility_score?: SortOrder
    rating?: SortOrder
    cancellation_count?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credibility_score?: SortOrder
    rating?: SortOrder
    cancellation_count?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VehicleCountOrderByAggregateInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_type?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_type?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    vehicle_id?: SortOrder
    user_id?: SortOrder
    vehicle_type?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumRideStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusFilter<$PrismaModel> | $Enums.RideStatus
  }

  export type RideCountOrderByAggregateInput = {
    ride_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    start_location?: SortOrder
    end_location?: SortOrder
    start_date?: SortOrder
    start_time?: SortOrder
    total_fare?: SortOrder
    max_passengers?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RideAvgOrderByAggregateInput = {
    total_fare?: SortOrder
    max_passengers?: SortOrder
  }

  export type RideMaxOrderByAggregateInput = {
    ride_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    start_location?: SortOrder
    end_location?: SortOrder
    start_date?: SortOrder
    start_time?: SortOrder
    total_fare?: SortOrder
    max_passengers?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RideMinOrderByAggregateInput = {
    ride_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    start_location?: SortOrder
    end_location?: SortOrder
    start_date?: SortOrder
    start_time?: SortOrder
    total_fare?: SortOrder
    max_passengers?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RideSumOrderByAggregateInput = {
    total_fare?: SortOrder
    max_passengers?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumRideStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusWithAggregatesFilter<$PrismaModel> | $Enums.RideStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRideStatusFilter<$PrismaModel>
    _max?: NestedEnumRideStatusFilter<$PrismaModel>
  }

  export type RideScalarRelationFilter = {
    is?: RideWhereInput
    isNot?: RideWhereInput
  }

  export type RideParticipantRide_id_user_idCompoundUniqueInput = {
    ride_id: string
    user_id: string
  }

  export type RideParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    share_fare?: SortOrder
    status?: SortOrder
    booking_time?: SortOrder
  }

  export type RideParticipantAvgOrderByAggregateInput = {
    share_fare?: SortOrder
  }

  export type RideParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    share_fare?: SortOrder
    status?: SortOrder
    booking_time?: SortOrder
  }

  export type RideParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    share_fare?: SortOrder
    status?: SortOrder
    booking_time?: SortOrder
  }

  export type RideParticipantSumOrderByAggregateInput = {
    share_fare?: SortOrder
  }

  export type RideCancellationCountOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    cancelled_at?: SortOrder
  }

  export type RideCancellationMaxOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    cancelled_at?: SortOrder
  }

  export type RideCancellationMinOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    user_id?: SortOrder
    cancelled_at?: SortOrder
  }

  export type PaymentRide_id_payer_idCompoundUniqueInput = {
    ride_id: string
    payer_id: string
  }

  export type PaymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    ride_id?: SortOrder
    payer_id?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    ride_id?: SortOrder
    payer_id?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    ride_id?: SortOrder
    payer_id?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FeedbackCountOrderByAggregateInput = {
    feedback_id?: SortOrder
    ride_id?: SortOrder
    giver_id?: SortOrder
    receiver_id?: SortOrder
    rating?: SortOrder
    comfort_flag?: SortOrder
    comments?: SortOrder
    created_at?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    feedback_id?: SortOrder
    ride_id?: SortOrder
    giver_id?: SortOrder
    receiver_id?: SortOrder
    rating?: SortOrder
    comfort_flag?: SortOrder
    comments?: SortOrder
    created_at?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    feedback_id?: SortOrder
    ride_id?: SortOrder
    giver_id?: SortOrder
    receiver_id?: SortOrder
    rating?: SortOrder
    comfort_flag?: SortOrder
    comments?: SortOrder
    created_at?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SOS_LogCountOrderByAggregateInput = {
    sos_id?: SortOrder
    ride_id?: SortOrder
    trigger_user_id?: SortOrder
    location_at_trigger?: SortOrder
    status?: SortOrder
    trigger_time?: SortOrder
  }

  export type SOS_LogMaxOrderByAggregateInput = {
    sos_id?: SortOrder
    ride_id?: SortOrder
    trigger_user_id?: SortOrder
    location_at_trigger?: SortOrder
    status?: SortOrder
    trigger_time?: SortOrder
  }

  export type SOS_LogMinOrderByAggregateInput = {
    sos_id?: SortOrder
    ride_id?: SortOrder
    trigger_user_id?: SortOrder
    location_at_trigger?: SortOrder
    status?: SortOrder
    trigger_time?: SortOrder
  }

  export type SOS_LogScalarRelationFilter = {
    is?: SOS_LogWhereInput
    isNot?: SOS_LogWhereInput
  }

  export type SOS_InvolvedCountOrderByAggregateInput = {
    id?: SortOrder
    sos_id?: SortOrder
    user_id?: SortOrder
  }

  export type SOS_InvolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    sos_id?: SortOrder
    user_id?: SortOrder
  }

  export type SOS_InvolvedMinOrderByAggregateInput = {
    id?: SortOrder
    sos_id?: SortOrder
    user_id?: SortOrder
  }

  export type RideCreateNestedManyWithoutDriverInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type VehicleCreateNestedOneWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput
    connect?: VehicleWhereUniqueInput
  }

  export type RideParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<RideParticipantCreateWithoutUserInput, RideParticipantUncheckedCreateWithoutUserInput> | RideParticipantCreateWithoutUserInput[] | RideParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideParticipantCreateOrConnectWithoutUserInput | RideParticipantCreateOrConnectWithoutUserInput[]
    createMany?: RideParticipantCreateManyUserInputEnvelope
    connect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutPayerInput = {
    create?: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput> | PaymentCreateWithoutPayerInput[] | PaymentUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayerInput | PaymentCreateOrConnectWithoutPayerInput[]
    createMany?: PaymentCreateManyPayerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutGiverInput = {
    create?: XOR<FeedbackCreateWithoutGiverInput, FeedbackUncheckedCreateWithoutGiverInput> | FeedbackCreateWithoutGiverInput[] | FeedbackUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutGiverInput | FeedbackCreateOrConnectWithoutGiverInput[]
    createMany?: FeedbackCreateManyGiverInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FeedbackCreateWithoutReceiverInput, FeedbackUncheckedCreateWithoutReceiverInput> | FeedbackCreateWithoutReceiverInput[] | FeedbackUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutReceiverInput | FeedbackCreateOrConnectWithoutReceiverInput[]
    createMany?: FeedbackCreateManyReceiverInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type RideCancellationCreateNestedManyWithoutUserInput = {
    create?: XOR<RideCancellationCreateWithoutUserInput, RideCancellationUncheckedCreateWithoutUserInput> | RideCancellationCreateWithoutUserInput[] | RideCancellationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideCancellationCreateOrConnectWithoutUserInput | RideCancellationCreateOrConnectWithoutUserInput[]
    createMany?: RideCancellationCreateManyUserInputEnvelope
    connect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
  }

  export type SOS_LogCreateNestedManyWithoutTrigger_userInput = {
    create?: XOR<SOS_LogCreateWithoutTrigger_userInput, SOS_LogUncheckedCreateWithoutTrigger_userInput> | SOS_LogCreateWithoutTrigger_userInput[] | SOS_LogUncheckedCreateWithoutTrigger_userInput[]
    connectOrCreate?: SOS_LogCreateOrConnectWithoutTrigger_userInput | SOS_LogCreateOrConnectWithoutTrigger_userInput[]
    createMany?: SOS_LogCreateManyTrigger_userInputEnvelope
    connect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
  }

  export type SOS_InvolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<SOS_InvolvedCreateWithoutUserInput, SOS_InvolvedUncheckedCreateWithoutUserInput> | SOS_InvolvedCreateWithoutUserInput[] | SOS_InvolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SOS_InvolvedCreateOrConnectWithoutUserInput | SOS_InvolvedCreateOrConnectWithoutUserInput[]
    createMany?: SOS_InvolvedCreateManyUserInputEnvelope
    connect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
  }

  export type RideUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput
    connect?: VehicleWhereUniqueInput
  }

  export type RideParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RideParticipantCreateWithoutUserInput, RideParticipantUncheckedCreateWithoutUserInput> | RideParticipantCreateWithoutUserInput[] | RideParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideParticipantCreateOrConnectWithoutUserInput | RideParticipantCreateOrConnectWithoutUserInput[]
    createMany?: RideParticipantCreateManyUserInputEnvelope
    connect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPayerInput = {
    create?: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput> | PaymentCreateWithoutPayerInput[] | PaymentUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayerInput | PaymentCreateOrConnectWithoutPayerInput[]
    createMany?: PaymentCreateManyPayerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutGiverInput = {
    create?: XOR<FeedbackCreateWithoutGiverInput, FeedbackUncheckedCreateWithoutGiverInput> | FeedbackCreateWithoutGiverInput[] | FeedbackUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutGiverInput | FeedbackCreateOrConnectWithoutGiverInput[]
    createMany?: FeedbackCreateManyGiverInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FeedbackCreateWithoutReceiverInput, FeedbackUncheckedCreateWithoutReceiverInput> | FeedbackCreateWithoutReceiverInput[] | FeedbackUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutReceiverInput | FeedbackCreateOrConnectWithoutReceiverInput[]
    createMany?: FeedbackCreateManyReceiverInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type RideCancellationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RideCancellationCreateWithoutUserInput, RideCancellationUncheckedCreateWithoutUserInput> | RideCancellationCreateWithoutUserInput[] | RideCancellationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideCancellationCreateOrConnectWithoutUserInput | RideCancellationCreateOrConnectWithoutUserInput[]
    createMany?: RideCancellationCreateManyUserInputEnvelope
    connect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
  }

  export type SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput = {
    create?: XOR<SOS_LogCreateWithoutTrigger_userInput, SOS_LogUncheckedCreateWithoutTrigger_userInput> | SOS_LogCreateWithoutTrigger_userInput[] | SOS_LogUncheckedCreateWithoutTrigger_userInput[]
    connectOrCreate?: SOS_LogCreateOrConnectWithoutTrigger_userInput | SOS_LogCreateOrConnectWithoutTrigger_userInput[]
    createMany?: SOS_LogCreateManyTrigger_userInputEnvelope
    connect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
  }

  export type SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SOS_InvolvedCreateWithoutUserInput, SOS_InvolvedUncheckedCreateWithoutUserInput> | SOS_InvolvedCreateWithoutUserInput[] | SOS_InvolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SOS_InvolvedCreateOrConnectWithoutUserInput | SOS_InvolvedCreateOrConnectWithoutUserInput[]
    createMany?: SOS_InvolvedCreateManyUserInputEnvelope
    connect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RideUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutDriverInput | RideUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutDriverInput | RideUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RideUpdateManyWithWhereWithoutDriverInput | RideUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type VehicleUpdateOneWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput
    upsert?: VehicleUpsertWithoutUserInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutUserInput, VehicleUpdateWithoutUserInput>, VehicleUncheckedUpdateWithoutUserInput>
  }

  export type RideParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<RideParticipantCreateWithoutUserInput, RideParticipantUncheckedCreateWithoutUserInput> | RideParticipantCreateWithoutUserInput[] | RideParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideParticipantCreateOrConnectWithoutUserInput | RideParticipantCreateOrConnectWithoutUserInput[]
    upsert?: RideParticipantUpsertWithWhereUniqueWithoutUserInput | RideParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RideParticipantCreateManyUserInputEnvelope
    set?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    disconnect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    delete?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    connect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    update?: RideParticipantUpdateWithWhereUniqueWithoutUserInput | RideParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RideParticipantUpdateManyWithWhereWithoutUserInput | RideParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RideParticipantScalarWhereInput | RideParticipantScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutPayerNestedInput = {
    create?: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput> | PaymentCreateWithoutPayerInput[] | PaymentUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayerInput | PaymentCreateOrConnectWithoutPayerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPayerInput | PaymentUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: PaymentCreateManyPayerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPayerInput | PaymentUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPayerInput | PaymentUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutGiverNestedInput = {
    create?: XOR<FeedbackCreateWithoutGiverInput, FeedbackUncheckedCreateWithoutGiverInput> | FeedbackCreateWithoutGiverInput[] | FeedbackUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutGiverInput | FeedbackCreateOrConnectWithoutGiverInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutGiverInput | FeedbackUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: FeedbackCreateManyGiverInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutGiverInput | FeedbackUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutGiverInput | FeedbackUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FeedbackCreateWithoutReceiverInput, FeedbackUncheckedCreateWithoutReceiverInput> | FeedbackCreateWithoutReceiverInput[] | FeedbackUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutReceiverInput | FeedbackCreateOrConnectWithoutReceiverInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutReceiverInput | FeedbackUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FeedbackCreateManyReceiverInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutReceiverInput | FeedbackUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutReceiverInput | FeedbackUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type RideCancellationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RideCancellationCreateWithoutUserInput, RideCancellationUncheckedCreateWithoutUserInput> | RideCancellationCreateWithoutUserInput[] | RideCancellationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideCancellationCreateOrConnectWithoutUserInput | RideCancellationCreateOrConnectWithoutUserInput[]
    upsert?: RideCancellationUpsertWithWhereUniqueWithoutUserInput | RideCancellationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RideCancellationCreateManyUserInputEnvelope
    set?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    disconnect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    delete?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    connect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    update?: RideCancellationUpdateWithWhereUniqueWithoutUserInput | RideCancellationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RideCancellationUpdateManyWithWhereWithoutUserInput | RideCancellationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RideCancellationScalarWhereInput | RideCancellationScalarWhereInput[]
  }

  export type SOS_LogUpdateManyWithoutTrigger_userNestedInput = {
    create?: XOR<SOS_LogCreateWithoutTrigger_userInput, SOS_LogUncheckedCreateWithoutTrigger_userInput> | SOS_LogCreateWithoutTrigger_userInput[] | SOS_LogUncheckedCreateWithoutTrigger_userInput[]
    connectOrCreate?: SOS_LogCreateOrConnectWithoutTrigger_userInput | SOS_LogCreateOrConnectWithoutTrigger_userInput[]
    upsert?: SOS_LogUpsertWithWhereUniqueWithoutTrigger_userInput | SOS_LogUpsertWithWhereUniqueWithoutTrigger_userInput[]
    createMany?: SOS_LogCreateManyTrigger_userInputEnvelope
    set?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    disconnect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    delete?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    connect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    update?: SOS_LogUpdateWithWhereUniqueWithoutTrigger_userInput | SOS_LogUpdateWithWhereUniqueWithoutTrigger_userInput[]
    updateMany?: SOS_LogUpdateManyWithWhereWithoutTrigger_userInput | SOS_LogUpdateManyWithWhereWithoutTrigger_userInput[]
    deleteMany?: SOS_LogScalarWhereInput | SOS_LogScalarWhereInput[]
  }

  export type SOS_InvolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SOS_InvolvedCreateWithoutUserInput, SOS_InvolvedUncheckedCreateWithoutUserInput> | SOS_InvolvedCreateWithoutUserInput[] | SOS_InvolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SOS_InvolvedCreateOrConnectWithoutUserInput | SOS_InvolvedCreateOrConnectWithoutUserInput[]
    upsert?: SOS_InvolvedUpsertWithWhereUniqueWithoutUserInput | SOS_InvolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SOS_InvolvedCreateManyUserInputEnvelope
    set?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    disconnect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    delete?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    connect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    update?: SOS_InvolvedUpdateWithWhereUniqueWithoutUserInput | SOS_InvolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SOS_InvolvedUpdateManyWithWhereWithoutUserInput | SOS_InvolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SOS_InvolvedScalarWhereInput | SOS_InvolvedScalarWhereInput[]
  }

  export type RideUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutDriverInput | RideUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutDriverInput | RideUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RideUpdateManyWithWhereWithoutDriverInput | RideUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput
    upsert?: VehicleUpsertWithoutUserInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutUserInput, VehicleUpdateWithoutUserInput>, VehicleUncheckedUpdateWithoutUserInput>
  }

  export type RideParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RideParticipantCreateWithoutUserInput, RideParticipantUncheckedCreateWithoutUserInput> | RideParticipantCreateWithoutUserInput[] | RideParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideParticipantCreateOrConnectWithoutUserInput | RideParticipantCreateOrConnectWithoutUserInput[]
    upsert?: RideParticipantUpsertWithWhereUniqueWithoutUserInput | RideParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RideParticipantCreateManyUserInputEnvelope
    set?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    disconnect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    delete?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    connect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    update?: RideParticipantUpdateWithWhereUniqueWithoutUserInput | RideParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RideParticipantUpdateManyWithWhereWithoutUserInput | RideParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RideParticipantScalarWhereInput | RideParticipantScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPayerNestedInput = {
    create?: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput> | PaymentCreateWithoutPayerInput[] | PaymentUncheckedCreateWithoutPayerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPayerInput | PaymentCreateOrConnectWithoutPayerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPayerInput | PaymentUpsertWithWhereUniqueWithoutPayerInput[]
    createMany?: PaymentCreateManyPayerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPayerInput | PaymentUpdateWithWhereUniqueWithoutPayerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPayerInput | PaymentUpdateManyWithWhereWithoutPayerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutGiverNestedInput = {
    create?: XOR<FeedbackCreateWithoutGiverInput, FeedbackUncheckedCreateWithoutGiverInput> | FeedbackCreateWithoutGiverInput[] | FeedbackUncheckedCreateWithoutGiverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutGiverInput | FeedbackCreateOrConnectWithoutGiverInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutGiverInput | FeedbackUpsertWithWhereUniqueWithoutGiverInput[]
    createMany?: FeedbackCreateManyGiverInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutGiverInput | FeedbackUpdateWithWhereUniqueWithoutGiverInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutGiverInput | FeedbackUpdateManyWithWhereWithoutGiverInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FeedbackCreateWithoutReceiverInput, FeedbackUncheckedCreateWithoutReceiverInput> | FeedbackCreateWithoutReceiverInput[] | FeedbackUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutReceiverInput | FeedbackCreateOrConnectWithoutReceiverInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutReceiverInput | FeedbackUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FeedbackCreateManyReceiverInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutReceiverInput | FeedbackUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutReceiverInput | FeedbackUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type RideCancellationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RideCancellationCreateWithoutUserInput, RideCancellationUncheckedCreateWithoutUserInput> | RideCancellationCreateWithoutUserInput[] | RideCancellationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideCancellationCreateOrConnectWithoutUserInput | RideCancellationCreateOrConnectWithoutUserInput[]
    upsert?: RideCancellationUpsertWithWhereUniqueWithoutUserInput | RideCancellationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RideCancellationCreateManyUserInputEnvelope
    set?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    disconnect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    delete?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    connect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    update?: RideCancellationUpdateWithWhereUniqueWithoutUserInput | RideCancellationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RideCancellationUpdateManyWithWhereWithoutUserInput | RideCancellationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RideCancellationScalarWhereInput | RideCancellationScalarWhereInput[]
  }

  export type SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput = {
    create?: XOR<SOS_LogCreateWithoutTrigger_userInput, SOS_LogUncheckedCreateWithoutTrigger_userInput> | SOS_LogCreateWithoutTrigger_userInput[] | SOS_LogUncheckedCreateWithoutTrigger_userInput[]
    connectOrCreate?: SOS_LogCreateOrConnectWithoutTrigger_userInput | SOS_LogCreateOrConnectWithoutTrigger_userInput[]
    upsert?: SOS_LogUpsertWithWhereUniqueWithoutTrigger_userInput | SOS_LogUpsertWithWhereUniqueWithoutTrigger_userInput[]
    createMany?: SOS_LogCreateManyTrigger_userInputEnvelope
    set?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    disconnect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    delete?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    connect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    update?: SOS_LogUpdateWithWhereUniqueWithoutTrigger_userInput | SOS_LogUpdateWithWhereUniqueWithoutTrigger_userInput[]
    updateMany?: SOS_LogUpdateManyWithWhereWithoutTrigger_userInput | SOS_LogUpdateManyWithWhereWithoutTrigger_userInput[]
    deleteMany?: SOS_LogScalarWhereInput | SOS_LogScalarWhereInput[]
  }

  export type SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SOS_InvolvedCreateWithoutUserInput, SOS_InvolvedUncheckedCreateWithoutUserInput> | SOS_InvolvedCreateWithoutUserInput[] | SOS_InvolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SOS_InvolvedCreateOrConnectWithoutUserInput | SOS_InvolvedCreateOrConnectWithoutUserInput[]
    upsert?: SOS_InvolvedUpsertWithWhereUniqueWithoutUserInput | SOS_InvolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SOS_InvolvedCreateManyUserInputEnvelope
    set?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    disconnect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    delete?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    connect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    update?: SOS_InvolvedUpdateWithWhereUniqueWithoutUserInput | SOS_InvolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SOS_InvolvedUpdateManyWithWhereWithoutUserInput | SOS_InvolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SOS_InvolvedScalarWhereInput | SOS_InvolvedScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVehicleInput = {
    create?: XOR<UserCreateWithoutVehicleInput, UserUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehicleInput
    connect?: UserWhereUniqueInput
  }

  export type RideCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RideCreateWithoutVehicleInput, RideUncheckedCreateWithoutVehicleInput> | RideCreateWithoutVehicleInput[] | RideUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RideCreateOrConnectWithoutVehicleInput | RideCreateOrConnectWithoutVehicleInput[]
    createMany?: RideCreateManyVehicleInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RideUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RideCreateWithoutVehicleInput, RideUncheckedCreateWithoutVehicleInput> | RideCreateWithoutVehicleInput[] | RideUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RideCreateOrConnectWithoutVehicleInput | RideCreateOrConnectWithoutVehicleInput[]
    createMany?: RideCreateManyVehicleInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<UserCreateWithoutVehicleInput, UserUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehicleInput
    upsert?: UserUpsertWithoutVehicleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehicleInput, UserUpdateWithoutVehicleInput>, UserUncheckedUpdateWithoutVehicleInput>
  }

  export type RideUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RideCreateWithoutVehicleInput, RideUncheckedCreateWithoutVehicleInput> | RideCreateWithoutVehicleInput[] | RideUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RideCreateOrConnectWithoutVehicleInput | RideCreateOrConnectWithoutVehicleInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutVehicleInput | RideUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: RideCreateManyVehicleInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutVehicleInput | RideUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RideUpdateManyWithWhereWithoutVehicleInput | RideUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RideUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RideCreateWithoutVehicleInput, RideUncheckedCreateWithoutVehicleInput> | RideCreateWithoutVehicleInput[] | RideUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RideCreateOrConnectWithoutVehicleInput | RideCreateOrConnectWithoutVehicleInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutVehicleInput | RideUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: RideCreateManyVehicleInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutVehicleInput | RideUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RideUpdateManyWithWhereWithoutVehicleInput | RideUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRidesHostedInput = {
    create?: XOR<UserCreateWithoutRidesHostedInput, UserUncheckedCreateWithoutRidesHostedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRidesHostedInput
    connect?: UserWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutRidesInput = {
    create?: XOR<VehicleCreateWithoutRidesInput, VehicleUncheckedCreateWithoutRidesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRidesInput
    connect?: VehicleWhereUniqueInput
  }

  export type RideParticipantCreateNestedManyWithoutRideInput = {
    create?: XOR<RideParticipantCreateWithoutRideInput, RideParticipantUncheckedCreateWithoutRideInput> | RideParticipantCreateWithoutRideInput[] | RideParticipantUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RideParticipantCreateOrConnectWithoutRideInput | RideParticipantCreateOrConnectWithoutRideInput[]
    createMany?: RideParticipantCreateManyRideInputEnvelope
    connect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutRideInput = {
    create?: XOR<PaymentCreateWithoutRideInput, PaymentUncheckedCreateWithoutRideInput> | PaymentCreateWithoutRideInput[] | PaymentUncheckedCreateWithoutRideInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRideInput | PaymentCreateOrConnectWithoutRideInput[]
    createMany?: PaymentCreateManyRideInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutRideInput = {
    create?: XOR<FeedbackCreateWithoutRideInput, FeedbackUncheckedCreateWithoutRideInput> | FeedbackCreateWithoutRideInput[] | FeedbackUncheckedCreateWithoutRideInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRideInput | FeedbackCreateOrConnectWithoutRideInput[]
    createMany?: FeedbackCreateManyRideInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type RideCancellationCreateNestedManyWithoutRideInput = {
    create?: XOR<RideCancellationCreateWithoutRideInput, RideCancellationUncheckedCreateWithoutRideInput> | RideCancellationCreateWithoutRideInput[] | RideCancellationUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RideCancellationCreateOrConnectWithoutRideInput | RideCancellationCreateOrConnectWithoutRideInput[]
    createMany?: RideCancellationCreateManyRideInputEnvelope
    connect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
  }

  export type SOS_LogCreateNestedManyWithoutRideInput = {
    create?: XOR<SOS_LogCreateWithoutRideInput, SOS_LogUncheckedCreateWithoutRideInput> | SOS_LogCreateWithoutRideInput[] | SOS_LogUncheckedCreateWithoutRideInput[]
    connectOrCreate?: SOS_LogCreateOrConnectWithoutRideInput | SOS_LogCreateOrConnectWithoutRideInput[]
    createMany?: SOS_LogCreateManyRideInputEnvelope
    connect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
  }

  export type RideParticipantUncheckedCreateNestedManyWithoutRideInput = {
    create?: XOR<RideParticipantCreateWithoutRideInput, RideParticipantUncheckedCreateWithoutRideInput> | RideParticipantCreateWithoutRideInput[] | RideParticipantUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RideParticipantCreateOrConnectWithoutRideInput | RideParticipantCreateOrConnectWithoutRideInput[]
    createMany?: RideParticipantCreateManyRideInputEnvelope
    connect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutRideInput = {
    create?: XOR<PaymentCreateWithoutRideInput, PaymentUncheckedCreateWithoutRideInput> | PaymentCreateWithoutRideInput[] | PaymentUncheckedCreateWithoutRideInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRideInput | PaymentCreateOrConnectWithoutRideInput[]
    createMany?: PaymentCreateManyRideInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutRideInput = {
    create?: XOR<FeedbackCreateWithoutRideInput, FeedbackUncheckedCreateWithoutRideInput> | FeedbackCreateWithoutRideInput[] | FeedbackUncheckedCreateWithoutRideInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRideInput | FeedbackCreateOrConnectWithoutRideInput[]
    createMany?: FeedbackCreateManyRideInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type RideCancellationUncheckedCreateNestedManyWithoutRideInput = {
    create?: XOR<RideCancellationCreateWithoutRideInput, RideCancellationUncheckedCreateWithoutRideInput> | RideCancellationCreateWithoutRideInput[] | RideCancellationUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RideCancellationCreateOrConnectWithoutRideInput | RideCancellationCreateOrConnectWithoutRideInput[]
    createMany?: RideCancellationCreateManyRideInputEnvelope
    connect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
  }

  export type SOS_LogUncheckedCreateNestedManyWithoutRideInput = {
    create?: XOR<SOS_LogCreateWithoutRideInput, SOS_LogUncheckedCreateWithoutRideInput> | SOS_LogCreateWithoutRideInput[] | SOS_LogUncheckedCreateWithoutRideInput[]
    connectOrCreate?: SOS_LogCreateOrConnectWithoutRideInput | SOS_LogCreateOrConnectWithoutRideInput[]
    createMany?: SOS_LogCreateManyRideInputEnvelope
    connect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumRideStatusFieldUpdateOperationsInput = {
    set?: $Enums.RideStatus
  }

  export type UserUpdateOneRequiredWithoutRidesHostedNestedInput = {
    create?: XOR<UserCreateWithoutRidesHostedInput, UserUncheckedCreateWithoutRidesHostedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRidesHostedInput
    upsert?: UserUpsertWithoutRidesHostedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRidesHostedInput, UserUpdateWithoutRidesHostedInput>, UserUncheckedUpdateWithoutRidesHostedInput>
  }

  export type VehicleUpdateOneWithoutRidesNestedInput = {
    create?: XOR<VehicleCreateWithoutRidesInput, VehicleUncheckedCreateWithoutRidesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRidesInput
    upsert?: VehicleUpsertWithoutRidesInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutRidesInput, VehicleUpdateWithoutRidesInput>, VehicleUncheckedUpdateWithoutRidesInput>
  }

  export type RideParticipantUpdateManyWithoutRideNestedInput = {
    create?: XOR<RideParticipantCreateWithoutRideInput, RideParticipantUncheckedCreateWithoutRideInput> | RideParticipantCreateWithoutRideInput[] | RideParticipantUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RideParticipantCreateOrConnectWithoutRideInput | RideParticipantCreateOrConnectWithoutRideInput[]
    upsert?: RideParticipantUpsertWithWhereUniqueWithoutRideInput | RideParticipantUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: RideParticipantCreateManyRideInputEnvelope
    set?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    disconnect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    delete?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    connect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    update?: RideParticipantUpdateWithWhereUniqueWithoutRideInput | RideParticipantUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: RideParticipantUpdateManyWithWhereWithoutRideInput | RideParticipantUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: RideParticipantScalarWhereInput | RideParticipantScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutRideNestedInput = {
    create?: XOR<PaymentCreateWithoutRideInput, PaymentUncheckedCreateWithoutRideInput> | PaymentCreateWithoutRideInput[] | PaymentUncheckedCreateWithoutRideInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRideInput | PaymentCreateOrConnectWithoutRideInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutRideInput | PaymentUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: PaymentCreateManyRideInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutRideInput | PaymentUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutRideInput | PaymentUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutRideNestedInput = {
    create?: XOR<FeedbackCreateWithoutRideInput, FeedbackUncheckedCreateWithoutRideInput> | FeedbackCreateWithoutRideInput[] | FeedbackUncheckedCreateWithoutRideInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRideInput | FeedbackCreateOrConnectWithoutRideInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutRideInput | FeedbackUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: FeedbackCreateManyRideInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutRideInput | FeedbackUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutRideInput | FeedbackUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type RideCancellationUpdateManyWithoutRideNestedInput = {
    create?: XOR<RideCancellationCreateWithoutRideInput, RideCancellationUncheckedCreateWithoutRideInput> | RideCancellationCreateWithoutRideInput[] | RideCancellationUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RideCancellationCreateOrConnectWithoutRideInput | RideCancellationCreateOrConnectWithoutRideInput[]
    upsert?: RideCancellationUpsertWithWhereUniqueWithoutRideInput | RideCancellationUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: RideCancellationCreateManyRideInputEnvelope
    set?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    disconnect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    delete?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    connect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    update?: RideCancellationUpdateWithWhereUniqueWithoutRideInput | RideCancellationUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: RideCancellationUpdateManyWithWhereWithoutRideInput | RideCancellationUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: RideCancellationScalarWhereInput | RideCancellationScalarWhereInput[]
  }

  export type SOS_LogUpdateManyWithoutRideNestedInput = {
    create?: XOR<SOS_LogCreateWithoutRideInput, SOS_LogUncheckedCreateWithoutRideInput> | SOS_LogCreateWithoutRideInput[] | SOS_LogUncheckedCreateWithoutRideInput[]
    connectOrCreate?: SOS_LogCreateOrConnectWithoutRideInput | SOS_LogCreateOrConnectWithoutRideInput[]
    upsert?: SOS_LogUpsertWithWhereUniqueWithoutRideInput | SOS_LogUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: SOS_LogCreateManyRideInputEnvelope
    set?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    disconnect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    delete?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    connect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    update?: SOS_LogUpdateWithWhereUniqueWithoutRideInput | SOS_LogUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: SOS_LogUpdateManyWithWhereWithoutRideInput | SOS_LogUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: SOS_LogScalarWhereInput | SOS_LogScalarWhereInput[]
  }

  export type RideParticipantUncheckedUpdateManyWithoutRideNestedInput = {
    create?: XOR<RideParticipantCreateWithoutRideInput, RideParticipantUncheckedCreateWithoutRideInput> | RideParticipantCreateWithoutRideInput[] | RideParticipantUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RideParticipantCreateOrConnectWithoutRideInput | RideParticipantCreateOrConnectWithoutRideInput[]
    upsert?: RideParticipantUpsertWithWhereUniqueWithoutRideInput | RideParticipantUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: RideParticipantCreateManyRideInputEnvelope
    set?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    disconnect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    delete?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    connect?: RideParticipantWhereUniqueInput | RideParticipantWhereUniqueInput[]
    update?: RideParticipantUpdateWithWhereUniqueWithoutRideInput | RideParticipantUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: RideParticipantUpdateManyWithWhereWithoutRideInput | RideParticipantUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: RideParticipantScalarWhereInput | RideParticipantScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutRideNestedInput = {
    create?: XOR<PaymentCreateWithoutRideInput, PaymentUncheckedCreateWithoutRideInput> | PaymentCreateWithoutRideInput[] | PaymentUncheckedCreateWithoutRideInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRideInput | PaymentCreateOrConnectWithoutRideInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutRideInput | PaymentUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: PaymentCreateManyRideInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutRideInput | PaymentUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutRideInput | PaymentUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutRideNestedInput = {
    create?: XOR<FeedbackCreateWithoutRideInput, FeedbackUncheckedCreateWithoutRideInput> | FeedbackCreateWithoutRideInput[] | FeedbackUncheckedCreateWithoutRideInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRideInput | FeedbackCreateOrConnectWithoutRideInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutRideInput | FeedbackUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: FeedbackCreateManyRideInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutRideInput | FeedbackUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutRideInput | FeedbackUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type RideCancellationUncheckedUpdateManyWithoutRideNestedInput = {
    create?: XOR<RideCancellationCreateWithoutRideInput, RideCancellationUncheckedCreateWithoutRideInput> | RideCancellationCreateWithoutRideInput[] | RideCancellationUncheckedCreateWithoutRideInput[]
    connectOrCreate?: RideCancellationCreateOrConnectWithoutRideInput | RideCancellationCreateOrConnectWithoutRideInput[]
    upsert?: RideCancellationUpsertWithWhereUniqueWithoutRideInput | RideCancellationUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: RideCancellationCreateManyRideInputEnvelope
    set?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    disconnect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    delete?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    connect?: RideCancellationWhereUniqueInput | RideCancellationWhereUniqueInput[]
    update?: RideCancellationUpdateWithWhereUniqueWithoutRideInput | RideCancellationUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: RideCancellationUpdateManyWithWhereWithoutRideInput | RideCancellationUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: RideCancellationScalarWhereInput | RideCancellationScalarWhereInput[]
  }

  export type SOS_LogUncheckedUpdateManyWithoutRideNestedInput = {
    create?: XOR<SOS_LogCreateWithoutRideInput, SOS_LogUncheckedCreateWithoutRideInput> | SOS_LogCreateWithoutRideInput[] | SOS_LogUncheckedCreateWithoutRideInput[]
    connectOrCreate?: SOS_LogCreateOrConnectWithoutRideInput | SOS_LogCreateOrConnectWithoutRideInput[]
    upsert?: SOS_LogUpsertWithWhereUniqueWithoutRideInput | SOS_LogUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: SOS_LogCreateManyRideInputEnvelope
    set?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    disconnect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    delete?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    connect?: SOS_LogWhereUniqueInput | SOS_LogWhereUniqueInput[]
    update?: SOS_LogUpdateWithWhereUniqueWithoutRideInput | SOS_LogUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: SOS_LogUpdateManyWithWhereWithoutRideInput | SOS_LogUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: SOS_LogScalarWhereInput | SOS_LogScalarWhereInput[]
  }

  export type RideCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<RideCreateWithoutParticipantsInput, RideUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RideCreateOrConnectWithoutParticipantsInput
    connect?: RideWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRideParticipantsInput = {
    create?: XOR<UserCreateWithoutRideParticipantsInput, UserUncheckedCreateWithoutRideParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRideParticipantsInput
    connect?: UserWhereUniqueInput
  }

  export type RideUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<RideCreateWithoutParticipantsInput, RideUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RideCreateOrConnectWithoutParticipantsInput
    upsert?: RideUpsertWithoutParticipantsInput
    connect?: RideWhereUniqueInput
    update?: XOR<XOR<RideUpdateToOneWithWhereWithoutParticipantsInput, RideUpdateWithoutParticipantsInput>, RideUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutRideParticipantsNestedInput = {
    create?: XOR<UserCreateWithoutRideParticipantsInput, UserUncheckedCreateWithoutRideParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRideParticipantsInput
    upsert?: UserUpsertWithoutRideParticipantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRideParticipantsInput, UserUpdateWithoutRideParticipantsInput>, UserUncheckedUpdateWithoutRideParticipantsInput>
  }

  export type RideCreateNestedOneWithoutCancellationsInput = {
    create?: XOR<RideCreateWithoutCancellationsInput, RideUncheckedCreateWithoutCancellationsInput>
    connectOrCreate?: RideCreateOrConnectWithoutCancellationsInput
    connect?: RideWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCancellationsInput = {
    create?: XOR<UserCreateWithoutCancellationsInput, UserUncheckedCreateWithoutCancellationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCancellationsInput
    connect?: UserWhereUniqueInput
  }

  export type RideUpdateOneRequiredWithoutCancellationsNestedInput = {
    create?: XOR<RideCreateWithoutCancellationsInput, RideUncheckedCreateWithoutCancellationsInput>
    connectOrCreate?: RideCreateOrConnectWithoutCancellationsInput
    upsert?: RideUpsertWithoutCancellationsInput
    connect?: RideWhereUniqueInput
    update?: XOR<XOR<RideUpdateToOneWithWhereWithoutCancellationsInput, RideUpdateWithoutCancellationsInput>, RideUncheckedUpdateWithoutCancellationsInput>
  }

  export type UserUpdateOneRequiredWithoutCancellationsNestedInput = {
    create?: XOR<UserCreateWithoutCancellationsInput, UserUncheckedCreateWithoutCancellationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCancellationsInput
    upsert?: UserUpsertWithoutCancellationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCancellationsInput, UserUpdateWithoutCancellationsInput>, UserUncheckedUpdateWithoutCancellationsInput>
  }

  export type RideCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<RideCreateWithoutPaymentsInput, RideUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: RideCreateOrConnectWithoutPaymentsInput
    connect?: RideWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type RideUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<RideCreateWithoutPaymentsInput, RideUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: RideCreateOrConnectWithoutPaymentsInput
    upsert?: RideUpsertWithoutPaymentsInput
    connect?: RideWhereUniqueInput
    update?: XOR<XOR<RideUpdateToOneWithWhereWithoutPaymentsInput, RideUpdateWithoutPaymentsInput>, RideUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type RideCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<RideCreateWithoutFeedbacksInput, RideUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: RideCreateOrConnectWithoutFeedbacksInput
    connect?: RideWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbackGivenInput = {
    create?: XOR<UserCreateWithoutFeedbackGivenInput, UserUncheckedCreateWithoutFeedbackGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbackReceivedInput = {
    create?: XOR<UserCreateWithoutFeedbackReceivedInput, UserUncheckedCreateWithoutFeedbackReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type RideUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<RideCreateWithoutFeedbacksInput, RideUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: RideCreateOrConnectWithoutFeedbacksInput
    upsert?: RideUpsertWithoutFeedbacksInput
    connect?: RideWhereUniqueInput
    update?: XOR<XOR<RideUpdateToOneWithWhereWithoutFeedbacksInput, RideUpdateWithoutFeedbacksInput>, RideUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbackGivenNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackGivenInput, UserUncheckedCreateWithoutFeedbackGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackGivenInput
    upsert?: UserUpsertWithoutFeedbackGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackGivenInput, UserUpdateWithoutFeedbackGivenInput>, UserUncheckedUpdateWithoutFeedbackGivenInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackReceivedInput, UserUncheckedCreateWithoutFeedbackReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackReceivedInput
    upsert?: UserUpsertWithoutFeedbackReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackReceivedInput, UserUpdateWithoutFeedbackReceivedInput>, UserUncheckedUpdateWithoutFeedbackReceivedInput>
  }

  export type RideCreateNestedOneWithoutSos_logsInput = {
    create?: XOR<RideCreateWithoutSos_logsInput, RideUncheckedCreateWithoutSos_logsInput>
    connectOrCreate?: RideCreateOrConnectWithoutSos_logsInput
    connect?: RideWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSosTriggersInput = {
    create?: XOR<UserCreateWithoutSosTriggersInput, UserUncheckedCreateWithoutSosTriggersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSosTriggersInput
    connect?: UserWhereUniqueInput
  }

  export type SOS_InvolvedCreateNestedManyWithoutSosInput = {
    create?: XOR<SOS_InvolvedCreateWithoutSosInput, SOS_InvolvedUncheckedCreateWithoutSosInput> | SOS_InvolvedCreateWithoutSosInput[] | SOS_InvolvedUncheckedCreateWithoutSosInput[]
    connectOrCreate?: SOS_InvolvedCreateOrConnectWithoutSosInput | SOS_InvolvedCreateOrConnectWithoutSosInput[]
    createMany?: SOS_InvolvedCreateManySosInputEnvelope
    connect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
  }

  export type SOS_InvolvedUncheckedCreateNestedManyWithoutSosInput = {
    create?: XOR<SOS_InvolvedCreateWithoutSosInput, SOS_InvolvedUncheckedCreateWithoutSosInput> | SOS_InvolvedCreateWithoutSosInput[] | SOS_InvolvedUncheckedCreateWithoutSosInput[]
    connectOrCreate?: SOS_InvolvedCreateOrConnectWithoutSosInput | SOS_InvolvedCreateOrConnectWithoutSosInput[]
    createMany?: SOS_InvolvedCreateManySosInputEnvelope
    connect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
  }

  export type RideUpdateOneRequiredWithoutSos_logsNestedInput = {
    create?: XOR<RideCreateWithoutSos_logsInput, RideUncheckedCreateWithoutSos_logsInput>
    connectOrCreate?: RideCreateOrConnectWithoutSos_logsInput
    upsert?: RideUpsertWithoutSos_logsInput
    connect?: RideWhereUniqueInput
    update?: XOR<XOR<RideUpdateToOneWithWhereWithoutSos_logsInput, RideUpdateWithoutSos_logsInput>, RideUncheckedUpdateWithoutSos_logsInput>
  }

  export type UserUpdateOneRequiredWithoutSosTriggersNestedInput = {
    create?: XOR<UserCreateWithoutSosTriggersInput, UserUncheckedCreateWithoutSosTriggersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSosTriggersInput
    upsert?: UserUpsertWithoutSosTriggersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSosTriggersInput, UserUpdateWithoutSosTriggersInput>, UserUncheckedUpdateWithoutSosTriggersInput>
  }

  export type SOS_InvolvedUpdateManyWithoutSosNestedInput = {
    create?: XOR<SOS_InvolvedCreateWithoutSosInput, SOS_InvolvedUncheckedCreateWithoutSosInput> | SOS_InvolvedCreateWithoutSosInput[] | SOS_InvolvedUncheckedCreateWithoutSosInput[]
    connectOrCreate?: SOS_InvolvedCreateOrConnectWithoutSosInput | SOS_InvolvedCreateOrConnectWithoutSosInput[]
    upsert?: SOS_InvolvedUpsertWithWhereUniqueWithoutSosInput | SOS_InvolvedUpsertWithWhereUniqueWithoutSosInput[]
    createMany?: SOS_InvolvedCreateManySosInputEnvelope
    set?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    disconnect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    delete?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    connect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    update?: SOS_InvolvedUpdateWithWhereUniqueWithoutSosInput | SOS_InvolvedUpdateWithWhereUniqueWithoutSosInput[]
    updateMany?: SOS_InvolvedUpdateManyWithWhereWithoutSosInput | SOS_InvolvedUpdateManyWithWhereWithoutSosInput[]
    deleteMany?: SOS_InvolvedScalarWhereInput | SOS_InvolvedScalarWhereInput[]
  }

  export type SOS_InvolvedUncheckedUpdateManyWithoutSosNestedInput = {
    create?: XOR<SOS_InvolvedCreateWithoutSosInput, SOS_InvolvedUncheckedCreateWithoutSosInput> | SOS_InvolvedCreateWithoutSosInput[] | SOS_InvolvedUncheckedCreateWithoutSosInput[]
    connectOrCreate?: SOS_InvolvedCreateOrConnectWithoutSosInput | SOS_InvolvedCreateOrConnectWithoutSosInput[]
    upsert?: SOS_InvolvedUpsertWithWhereUniqueWithoutSosInput | SOS_InvolvedUpsertWithWhereUniqueWithoutSosInput[]
    createMany?: SOS_InvolvedCreateManySosInputEnvelope
    set?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    disconnect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    delete?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    connect?: SOS_InvolvedWhereUniqueInput | SOS_InvolvedWhereUniqueInput[]
    update?: SOS_InvolvedUpdateWithWhereUniqueWithoutSosInput | SOS_InvolvedUpdateWithWhereUniqueWithoutSosInput[]
    updateMany?: SOS_InvolvedUpdateManyWithWhereWithoutSosInput | SOS_InvolvedUpdateManyWithWhereWithoutSosInput[]
    deleteMany?: SOS_InvolvedScalarWhereInput | SOS_InvolvedScalarWhereInput[]
  }

  export type SOS_LogCreateNestedOneWithoutInvolved_usersInput = {
    create?: XOR<SOS_LogCreateWithoutInvolved_usersInput, SOS_LogUncheckedCreateWithoutInvolved_usersInput>
    connectOrCreate?: SOS_LogCreateOrConnectWithoutInvolved_usersInput
    connect?: SOS_LogWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSosInvolvedInput = {
    create?: XOR<UserCreateWithoutSosInvolvedInput, UserUncheckedCreateWithoutSosInvolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSosInvolvedInput
    connect?: UserWhereUniqueInput
  }

  export type SOS_LogUpdateOneRequiredWithoutInvolved_usersNestedInput = {
    create?: XOR<SOS_LogCreateWithoutInvolved_usersInput, SOS_LogUncheckedCreateWithoutInvolved_usersInput>
    connectOrCreate?: SOS_LogCreateOrConnectWithoutInvolved_usersInput
    upsert?: SOS_LogUpsertWithoutInvolved_usersInput
    connect?: SOS_LogWhereUniqueInput
    update?: XOR<XOR<SOS_LogUpdateToOneWithWhereWithoutInvolved_usersInput, SOS_LogUpdateWithoutInvolved_usersInput>, SOS_LogUncheckedUpdateWithoutInvolved_usersInput>
  }

  export type UserUpdateOneRequiredWithoutSosInvolvedNestedInput = {
    create?: XOR<UserCreateWithoutSosInvolvedInput, UserUncheckedCreateWithoutSosInvolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSosInvolvedInput
    upsert?: UserUpsertWithoutSosInvolvedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSosInvolvedInput, UserUpdateWithoutSosInvolvedInput>, UserUncheckedUpdateWithoutSosInvolvedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumRideStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusFilter<$PrismaModel> | $Enums.RideStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumRideStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusWithAggregatesFilter<$PrismaModel> | $Enums.RideStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRideStatusFilter<$PrismaModel>
    _max?: NestedEnumRideStatusFilter<$PrismaModel>
  }

  export type RideCreateWithoutDriverInput = {
    ride_id?: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutRidesInput
    participants?: RideParticipantCreateNestedManyWithoutRideInput
    payments?: PaymentCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateWithoutDriverInput = {
    ride_id?: string
    vehicle_id?: string | null
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    participants?: RideParticipantUncheckedCreateNestedManyWithoutRideInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideCreateOrConnectWithoutDriverInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput>
  }

  export type RideCreateManyDriverInputEnvelope = {
    data: RideCreateManyDriverInput | RideCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type VehicleCreateWithoutUserInput = {
    vehicle_id?: string
    vehicle_type: string
    rides?: RideCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutUserInput = {
    vehicle_id?: string
    vehicle_type: string
    rides?: RideUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutUserInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type RideParticipantCreateWithoutUserInput = {
    id?: string
    share_fare?: Decimal | DecimalJsLike | number | string | null
    status?: string
    booking_time?: Date | string
    ride: RideCreateNestedOneWithoutParticipantsInput
  }

  export type RideParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    ride_id: string
    share_fare?: Decimal | DecimalJsLike | number | string | null
    status?: string
    booking_time?: Date | string
  }

  export type RideParticipantCreateOrConnectWithoutUserInput = {
    where: RideParticipantWhereUniqueInput
    create: XOR<RideParticipantCreateWithoutUserInput, RideParticipantUncheckedCreateWithoutUserInput>
  }

  export type RideParticipantCreateManyUserInputEnvelope = {
    data: RideParticipantCreateManyUserInput | RideParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutPayerInput = {
    payment_id?: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string
    ride: RideCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutPayerInput = {
    payment_id?: string
    ride_id: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPayerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput>
  }

  export type PaymentCreateManyPayerInputEnvelope = {
    data: PaymentCreateManyPayerInput | PaymentCreateManyPayerInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutGiverInput = {
    feedback_id?: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
    ride: RideCreateNestedOneWithoutFeedbacksInput
    receiver: UserCreateNestedOneWithoutFeedbackReceivedInput
  }

  export type FeedbackUncheckedCreateWithoutGiverInput = {
    feedback_id?: string
    ride_id: string
    receiver_id: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutGiverInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutGiverInput, FeedbackUncheckedCreateWithoutGiverInput>
  }

  export type FeedbackCreateManyGiverInputEnvelope = {
    data: FeedbackCreateManyGiverInput | FeedbackCreateManyGiverInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutReceiverInput = {
    feedback_id?: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
    ride: RideCreateNestedOneWithoutFeedbacksInput
    giver: UserCreateNestedOneWithoutFeedbackGivenInput
  }

  export type FeedbackUncheckedCreateWithoutReceiverInput = {
    feedback_id?: string
    ride_id: string
    giver_id: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutReceiverInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutReceiverInput, FeedbackUncheckedCreateWithoutReceiverInput>
  }

  export type FeedbackCreateManyReceiverInputEnvelope = {
    data: FeedbackCreateManyReceiverInput | FeedbackCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type RideCancellationCreateWithoutUserInput = {
    id?: string
    cancelled_at?: Date | string
    ride: RideCreateNestedOneWithoutCancellationsInput
  }

  export type RideCancellationUncheckedCreateWithoutUserInput = {
    id?: string
    ride_id: string
    cancelled_at?: Date | string
  }

  export type RideCancellationCreateOrConnectWithoutUserInput = {
    where: RideCancellationWhereUniqueInput
    create: XOR<RideCancellationCreateWithoutUserInput, RideCancellationUncheckedCreateWithoutUserInput>
  }

  export type RideCancellationCreateManyUserInputEnvelope = {
    data: RideCancellationCreateManyUserInput | RideCancellationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SOS_LogCreateWithoutTrigger_userInput = {
    sos_id?: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
    ride: RideCreateNestedOneWithoutSos_logsInput
    involved_users?: SOS_InvolvedCreateNestedManyWithoutSosInput
  }

  export type SOS_LogUncheckedCreateWithoutTrigger_userInput = {
    sos_id?: string
    ride_id: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
    involved_users?: SOS_InvolvedUncheckedCreateNestedManyWithoutSosInput
  }

  export type SOS_LogCreateOrConnectWithoutTrigger_userInput = {
    where: SOS_LogWhereUniqueInput
    create: XOR<SOS_LogCreateWithoutTrigger_userInput, SOS_LogUncheckedCreateWithoutTrigger_userInput>
  }

  export type SOS_LogCreateManyTrigger_userInputEnvelope = {
    data: SOS_LogCreateManyTrigger_userInput | SOS_LogCreateManyTrigger_userInput[]
    skipDuplicates?: boolean
  }

  export type SOS_InvolvedCreateWithoutUserInput = {
    id?: string
    sos: SOS_LogCreateNestedOneWithoutInvolved_usersInput
  }

  export type SOS_InvolvedUncheckedCreateWithoutUserInput = {
    id?: string
    sos_id: string
  }

  export type SOS_InvolvedCreateOrConnectWithoutUserInput = {
    where: SOS_InvolvedWhereUniqueInput
    create: XOR<SOS_InvolvedCreateWithoutUserInput, SOS_InvolvedUncheckedCreateWithoutUserInput>
  }

  export type SOS_InvolvedCreateManyUserInputEnvelope = {
    data: SOS_InvolvedCreateManyUserInput | SOS_InvolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RideUpsertWithWhereUniqueWithoutDriverInput = {
    where: RideWhereUniqueInput
    update: XOR<RideUpdateWithoutDriverInput, RideUncheckedUpdateWithoutDriverInput>
    create: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput>
  }

  export type RideUpdateWithWhereUniqueWithoutDriverInput = {
    where: RideWhereUniqueInput
    data: XOR<RideUpdateWithoutDriverInput, RideUncheckedUpdateWithoutDriverInput>
  }

  export type RideUpdateManyWithWhereWithoutDriverInput = {
    where: RideScalarWhereInput
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyWithoutDriverInput>
  }

  export type RideScalarWhereInput = {
    AND?: RideScalarWhereInput | RideScalarWhereInput[]
    OR?: RideScalarWhereInput[]
    NOT?: RideScalarWhereInput | RideScalarWhereInput[]
    ride_id?: StringFilter<"Ride"> | string
    driver_id?: StringFilter<"Ride"> | string
    vehicle_id?: StringNullableFilter<"Ride"> | string | null
    start_location?: StringFilter<"Ride"> | string
    end_location?: StringFilter<"Ride"> | string
    start_date?: DateTimeFilter<"Ride"> | Date | string
    start_time?: DateTimeFilter<"Ride"> | Date | string
    total_fare?: DecimalFilter<"Ride"> | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFilter<"Ride"> | number
    status?: EnumRideStatusFilter<"Ride"> | $Enums.RideStatus
    created_at?: DateTimeFilter<"Ride"> | Date | string
    updated_at?: DateTimeFilter<"Ride"> | Date | string
  }

  export type VehicleUpsertWithoutUserInput = {
    update: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutUserInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUpdateWithoutUserInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    rides?: RideUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutUserInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    rides?: RideUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type RideParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: RideParticipantWhereUniqueInput
    update: XOR<RideParticipantUpdateWithoutUserInput, RideParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<RideParticipantCreateWithoutUserInput, RideParticipantUncheckedCreateWithoutUserInput>
  }

  export type RideParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: RideParticipantWhereUniqueInput
    data: XOR<RideParticipantUpdateWithoutUserInput, RideParticipantUncheckedUpdateWithoutUserInput>
  }

  export type RideParticipantUpdateManyWithWhereWithoutUserInput = {
    where: RideParticipantScalarWhereInput
    data: XOR<RideParticipantUpdateManyMutationInput, RideParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type RideParticipantScalarWhereInput = {
    AND?: RideParticipantScalarWhereInput | RideParticipantScalarWhereInput[]
    OR?: RideParticipantScalarWhereInput[]
    NOT?: RideParticipantScalarWhereInput | RideParticipantScalarWhereInput[]
    id?: StringFilter<"RideParticipant"> | string
    ride_id?: StringFilter<"RideParticipant"> | string
    user_id?: StringFilter<"RideParticipant"> | string
    share_fare?: DecimalNullableFilter<"RideParticipant"> | Decimal | DecimalJsLike | number | string | null
    status?: StringFilter<"RideParticipant"> | string
    booking_time?: DateTimeFilter<"RideParticipant"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutPayerInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPayerInput, PaymentUncheckedUpdateWithoutPayerInput>
    create: XOR<PaymentCreateWithoutPayerInput, PaymentUncheckedCreateWithoutPayerInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPayerInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPayerInput, PaymentUncheckedUpdateWithoutPayerInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPayerInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPayerInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    payment_id?: StringFilter<"Payment"> | string
    ride_id?: StringFilter<"Payment"> | string
    payer_id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFilter<"Payment"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutGiverInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutGiverInput, FeedbackUncheckedUpdateWithoutGiverInput>
    create: XOR<FeedbackCreateWithoutGiverInput, FeedbackUncheckedCreateWithoutGiverInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutGiverInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutGiverInput, FeedbackUncheckedUpdateWithoutGiverInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutGiverInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutGiverInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    feedback_id?: StringFilter<"Feedback"> | string
    ride_id?: StringFilter<"Feedback"> | string
    giver_id?: StringFilter<"Feedback"> | string
    receiver_id?: StringFilter<"Feedback"> | string
    rating?: IntFilter<"Feedback"> | number
    comfort_flag?: StringFilter<"Feedback"> | string
    comments?: StringNullableFilter<"Feedback"> | string | null
    created_at?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutReceiverInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutReceiverInput, FeedbackUncheckedUpdateWithoutReceiverInput>
    create: XOR<FeedbackCreateWithoutReceiverInput, FeedbackUncheckedCreateWithoutReceiverInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutReceiverInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutReceiverInput, FeedbackUncheckedUpdateWithoutReceiverInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutReceiverInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutReceiverInput>
  }

  export type RideCancellationUpsertWithWhereUniqueWithoutUserInput = {
    where: RideCancellationWhereUniqueInput
    update: XOR<RideCancellationUpdateWithoutUserInput, RideCancellationUncheckedUpdateWithoutUserInput>
    create: XOR<RideCancellationCreateWithoutUserInput, RideCancellationUncheckedCreateWithoutUserInput>
  }

  export type RideCancellationUpdateWithWhereUniqueWithoutUserInput = {
    where: RideCancellationWhereUniqueInput
    data: XOR<RideCancellationUpdateWithoutUserInput, RideCancellationUncheckedUpdateWithoutUserInput>
  }

  export type RideCancellationUpdateManyWithWhereWithoutUserInput = {
    where: RideCancellationScalarWhereInput
    data: XOR<RideCancellationUpdateManyMutationInput, RideCancellationUncheckedUpdateManyWithoutUserInput>
  }

  export type RideCancellationScalarWhereInput = {
    AND?: RideCancellationScalarWhereInput | RideCancellationScalarWhereInput[]
    OR?: RideCancellationScalarWhereInput[]
    NOT?: RideCancellationScalarWhereInput | RideCancellationScalarWhereInput[]
    id?: StringFilter<"RideCancellation"> | string
    ride_id?: StringFilter<"RideCancellation"> | string
    user_id?: StringFilter<"RideCancellation"> | string
    cancelled_at?: DateTimeFilter<"RideCancellation"> | Date | string
  }

  export type SOS_LogUpsertWithWhereUniqueWithoutTrigger_userInput = {
    where: SOS_LogWhereUniqueInput
    update: XOR<SOS_LogUpdateWithoutTrigger_userInput, SOS_LogUncheckedUpdateWithoutTrigger_userInput>
    create: XOR<SOS_LogCreateWithoutTrigger_userInput, SOS_LogUncheckedCreateWithoutTrigger_userInput>
  }

  export type SOS_LogUpdateWithWhereUniqueWithoutTrigger_userInput = {
    where: SOS_LogWhereUniqueInput
    data: XOR<SOS_LogUpdateWithoutTrigger_userInput, SOS_LogUncheckedUpdateWithoutTrigger_userInput>
  }

  export type SOS_LogUpdateManyWithWhereWithoutTrigger_userInput = {
    where: SOS_LogScalarWhereInput
    data: XOR<SOS_LogUpdateManyMutationInput, SOS_LogUncheckedUpdateManyWithoutTrigger_userInput>
  }

  export type SOS_LogScalarWhereInput = {
    AND?: SOS_LogScalarWhereInput | SOS_LogScalarWhereInput[]
    OR?: SOS_LogScalarWhereInput[]
    NOT?: SOS_LogScalarWhereInput | SOS_LogScalarWhereInput[]
    sos_id?: StringFilter<"SOS_Log"> | string
    ride_id?: StringFilter<"SOS_Log"> | string
    trigger_user_id?: StringFilter<"SOS_Log"> | string
    location_at_trigger?: StringFilter<"SOS_Log"> | string
    status?: StringFilter<"SOS_Log"> | string
    trigger_time?: DateTimeFilter<"SOS_Log"> | Date | string
  }

  export type SOS_InvolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: SOS_InvolvedWhereUniqueInput
    update: XOR<SOS_InvolvedUpdateWithoutUserInput, SOS_InvolvedUncheckedUpdateWithoutUserInput>
    create: XOR<SOS_InvolvedCreateWithoutUserInput, SOS_InvolvedUncheckedCreateWithoutUserInput>
  }

  export type SOS_InvolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: SOS_InvolvedWhereUniqueInput
    data: XOR<SOS_InvolvedUpdateWithoutUserInput, SOS_InvolvedUncheckedUpdateWithoutUserInput>
  }

  export type SOS_InvolvedUpdateManyWithWhereWithoutUserInput = {
    where: SOS_InvolvedScalarWhereInput
    data: XOR<SOS_InvolvedUpdateManyMutationInput, SOS_InvolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type SOS_InvolvedScalarWhereInput = {
    AND?: SOS_InvolvedScalarWhereInput | SOS_InvolvedScalarWhereInput[]
    OR?: SOS_InvolvedScalarWhereInput[]
    NOT?: SOS_InvolvedScalarWhereInput | SOS_InvolvedScalarWhereInput[]
    id?: StringFilter<"SOS_Involved"> | string
    sos_id?: StringFilter<"SOS_Involved"> | string
    user_id?: StringFilter<"SOS_Involved"> | string
  }

  export type UserCreateWithoutVehicleInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideCreateNestedManyWithoutDriverInput
    rideParticipants?: RideParticipantCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVehicleInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideUncheckedCreateNestedManyWithoutDriverInput
    rideParticipants?: RideParticipantUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVehicleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehicleInput, UserUncheckedCreateWithoutVehicleInput>
  }

  export type RideCreateWithoutVehicleInput = {
    ride_id?: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    driver: UserCreateNestedOneWithoutRidesHostedInput
    participants?: RideParticipantCreateNestedManyWithoutRideInput
    payments?: PaymentCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateWithoutVehicleInput = {
    ride_id?: string
    driver_id: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    participants?: RideParticipantUncheckedCreateNestedManyWithoutRideInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideCreateOrConnectWithoutVehicleInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutVehicleInput, RideUncheckedCreateWithoutVehicleInput>
  }

  export type RideCreateManyVehicleInputEnvelope = {
    data: RideCreateManyVehicleInput | RideCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVehicleInput = {
    update: XOR<UserUpdateWithoutVehicleInput, UserUncheckedUpdateWithoutVehicleInput>
    create: XOR<UserCreateWithoutVehicleInput, UserUncheckedCreateWithoutVehicleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehicleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehicleInput, UserUncheckedUpdateWithoutVehicleInput>
  }

  export type UserUpdateWithoutVehicleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUpdateManyWithoutDriverNestedInput
    rideParticipants?: RideParticipantUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVehicleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUncheckedUpdateManyWithoutDriverNestedInput
    rideParticipants?: RideParticipantUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RideUpsertWithWhereUniqueWithoutVehicleInput = {
    where: RideWhereUniqueInput
    update: XOR<RideUpdateWithoutVehicleInput, RideUncheckedUpdateWithoutVehicleInput>
    create: XOR<RideCreateWithoutVehicleInput, RideUncheckedCreateWithoutVehicleInput>
  }

  export type RideUpdateWithWhereUniqueWithoutVehicleInput = {
    where: RideWhereUniqueInput
    data: XOR<RideUpdateWithoutVehicleInput, RideUncheckedUpdateWithoutVehicleInput>
  }

  export type RideUpdateManyWithWhereWithoutVehicleInput = {
    where: RideScalarWhereInput
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyWithoutVehicleInput>
  }

  export type UserCreateWithoutRidesHostedInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRidesHostedInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    vehicle?: VehicleUncheckedCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRidesHostedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRidesHostedInput, UserUncheckedCreateWithoutRidesHostedInput>
  }

  export type VehicleCreateWithoutRidesInput = {
    vehicle_id?: string
    vehicle_type: string
    user: UserCreateNestedOneWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutRidesInput = {
    vehicle_id?: string
    user_id: string
    vehicle_type: string
  }

  export type VehicleCreateOrConnectWithoutRidesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutRidesInput, VehicleUncheckedCreateWithoutRidesInput>
  }

  export type RideParticipantCreateWithoutRideInput = {
    id?: string
    share_fare?: Decimal | DecimalJsLike | number | string | null
    status?: string
    booking_time?: Date | string
    user: UserCreateNestedOneWithoutRideParticipantsInput
  }

  export type RideParticipantUncheckedCreateWithoutRideInput = {
    id?: string
    user_id: string
    share_fare?: Decimal | DecimalJsLike | number | string | null
    status?: string
    booking_time?: Date | string
  }

  export type RideParticipantCreateOrConnectWithoutRideInput = {
    where: RideParticipantWhereUniqueInput
    create: XOR<RideParticipantCreateWithoutRideInput, RideParticipantUncheckedCreateWithoutRideInput>
  }

  export type RideParticipantCreateManyRideInputEnvelope = {
    data: RideParticipantCreateManyRideInput | RideParticipantCreateManyRideInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutRideInput = {
    payment_id?: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string
    payer: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutRideInput = {
    payment_id?: string
    payer_id: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string
  }

  export type PaymentCreateOrConnectWithoutRideInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRideInput, PaymentUncheckedCreateWithoutRideInput>
  }

  export type PaymentCreateManyRideInputEnvelope = {
    data: PaymentCreateManyRideInput | PaymentCreateManyRideInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutRideInput = {
    feedback_id?: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
    giver: UserCreateNestedOneWithoutFeedbackGivenInput
    receiver: UserCreateNestedOneWithoutFeedbackReceivedInput
  }

  export type FeedbackUncheckedCreateWithoutRideInput = {
    feedback_id?: string
    giver_id: string
    receiver_id: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutRideInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutRideInput, FeedbackUncheckedCreateWithoutRideInput>
  }

  export type FeedbackCreateManyRideInputEnvelope = {
    data: FeedbackCreateManyRideInput | FeedbackCreateManyRideInput[]
    skipDuplicates?: boolean
  }

  export type RideCancellationCreateWithoutRideInput = {
    id?: string
    cancelled_at?: Date | string
    user: UserCreateNestedOneWithoutCancellationsInput
  }

  export type RideCancellationUncheckedCreateWithoutRideInput = {
    id?: string
    user_id: string
    cancelled_at?: Date | string
  }

  export type RideCancellationCreateOrConnectWithoutRideInput = {
    where: RideCancellationWhereUniqueInput
    create: XOR<RideCancellationCreateWithoutRideInput, RideCancellationUncheckedCreateWithoutRideInput>
  }

  export type RideCancellationCreateManyRideInputEnvelope = {
    data: RideCancellationCreateManyRideInput | RideCancellationCreateManyRideInput[]
    skipDuplicates?: boolean
  }

  export type SOS_LogCreateWithoutRideInput = {
    sos_id?: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
    trigger_user: UserCreateNestedOneWithoutSosTriggersInput
    involved_users?: SOS_InvolvedCreateNestedManyWithoutSosInput
  }

  export type SOS_LogUncheckedCreateWithoutRideInput = {
    sos_id?: string
    trigger_user_id: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
    involved_users?: SOS_InvolvedUncheckedCreateNestedManyWithoutSosInput
  }

  export type SOS_LogCreateOrConnectWithoutRideInput = {
    where: SOS_LogWhereUniqueInput
    create: XOR<SOS_LogCreateWithoutRideInput, SOS_LogUncheckedCreateWithoutRideInput>
  }

  export type SOS_LogCreateManyRideInputEnvelope = {
    data: SOS_LogCreateManyRideInput | SOS_LogCreateManyRideInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRidesHostedInput = {
    update: XOR<UserUpdateWithoutRidesHostedInput, UserUncheckedUpdateWithoutRidesHostedInput>
    create: XOR<UserCreateWithoutRidesHostedInput, UserUncheckedCreateWithoutRidesHostedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRidesHostedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRidesHostedInput, UserUncheckedUpdateWithoutRidesHostedInput>
  }

  export type UserUpdateWithoutRidesHostedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRidesHostedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUncheckedUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VehicleUpsertWithoutRidesInput = {
    update: XOR<VehicleUpdateWithoutRidesInput, VehicleUncheckedUpdateWithoutRidesInput>
    create: XOR<VehicleCreateWithoutRidesInput, VehicleUncheckedCreateWithoutRidesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutRidesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutRidesInput, VehicleUncheckedUpdateWithoutRidesInput>
  }

  export type VehicleUpdateWithoutRidesInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutRidesInput = {
    vehicle_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
  }

  export type RideParticipantUpsertWithWhereUniqueWithoutRideInput = {
    where: RideParticipantWhereUniqueInput
    update: XOR<RideParticipantUpdateWithoutRideInput, RideParticipantUncheckedUpdateWithoutRideInput>
    create: XOR<RideParticipantCreateWithoutRideInput, RideParticipantUncheckedCreateWithoutRideInput>
  }

  export type RideParticipantUpdateWithWhereUniqueWithoutRideInput = {
    where: RideParticipantWhereUniqueInput
    data: XOR<RideParticipantUpdateWithoutRideInput, RideParticipantUncheckedUpdateWithoutRideInput>
  }

  export type RideParticipantUpdateManyWithWhereWithoutRideInput = {
    where: RideParticipantScalarWhereInput
    data: XOR<RideParticipantUpdateManyMutationInput, RideParticipantUncheckedUpdateManyWithoutRideInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutRideInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutRideInput, PaymentUncheckedUpdateWithoutRideInput>
    create: XOR<PaymentCreateWithoutRideInput, PaymentUncheckedCreateWithoutRideInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutRideInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutRideInput, PaymentUncheckedUpdateWithoutRideInput>
  }

  export type PaymentUpdateManyWithWhereWithoutRideInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutRideInput>
  }

  export type FeedbackUpsertWithWhereUniqueWithoutRideInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutRideInput, FeedbackUncheckedUpdateWithoutRideInput>
    create: XOR<FeedbackCreateWithoutRideInput, FeedbackUncheckedCreateWithoutRideInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutRideInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutRideInput, FeedbackUncheckedUpdateWithoutRideInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutRideInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutRideInput>
  }

  export type RideCancellationUpsertWithWhereUniqueWithoutRideInput = {
    where: RideCancellationWhereUniqueInput
    update: XOR<RideCancellationUpdateWithoutRideInput, RideCancellationUncheckedUpdateWithoutRideInput>
    create: XOR<RideCancellationCreateWithoutRideInput, RideCancellationUncheckedCreateWithoutRideInput>
  }

  export type RideCancellationUpdateWithWhereUniqueWithoutRideInput = {
    where: RideCancellationWhereUniqueInput
    data: XOR<RideCancellationUpdateWithoutRideInput, RideCancellationUncheckedUpdateWithoutRideInput>
  }

  export type RideCancellationUpdateManyWithWhereWithoutRideInput = {
    where: RideCancellationScalarWhereInput
    data: XOR<RideCancellationUpdateManyMutationInput, RideCancellationUncheckedUpdateManyWithoutRideInput>
  }

  export type SOS_LogUpsertWithWhereUniqueWithoutRideInput = {
    where: SOS_LogWhereUniqueInput
    update: XOR<SOS_LogUpdateWithoutRideInput, SOS_LogUncheckedUpdateWithoutRideInput>
    create: XOR<SOS_LogCreateWithoutRideInput, SOS_LogUncheckedCreateWithoutRideInput>
  }

  export type SOS_LogUpdateWithWhereUniqueWithoutRideInput = {
    where: SOS_LogWhereUniqueInput
    data: XOR<SOS_LogUpdateWithoutRideInput, SOS_LogUncheckedUpdateWithoutRideInput>
  }

  export type SOS_LogUpdateManyWithWhereWithoutRideInput = {
    where: SOS_LogScalarWhereInput
    data: XOR<SOS_LogUpdateManyMutationInput, SOS_LogUncheckedUpdateManyWithoutRideInput>
  }

  export type RideCreateWithoutParticipantsInput = {
    ride_id?: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    driver: UserCreateNestedOneWithoutRidesHostedInput
    vehicle?: VehicleCreateNestedOneWithoutRidesInput
    payments?: PaymentCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateWithoutParticipantsInput = {
    ride_id?: string
    driver_id: string
    vehicle_id?: string | null
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideCreateOrConnectWithoutParticipantsInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutParticipantsInput, RideUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutRideParticipantsInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRideParticipantsInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRideParticipantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRideParticipantsInput, UserUncheckedCreateWithoutRideParticipantsInput>
  }

  export type RideUpsertWithoutParticipantsInput = {
    update: XOR<RideUpdateWithoutParticipantsInput, RideUncheckedUpdateWithoutParticipantsInput>
    create: XOR<RideCreateWithoutParticipantsInput, RideUncheckedCreateWithoutParticipantsInput>
    where?: RideWhereInput
  }

  export type RideUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: RideWhereInput
    data: XOR<RideUpdateWithoutParticipantsInput, RideUncheckedUpdateWithoutParticipantsInput>
  }

  export type RideUpdateWithoutParticipantsInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutRidesHostedNestedInput
    vehicle?: VehicleUpdateOneWithoutRidesNestedInput
    payments?: PaymentUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutParticipantsInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUncheckedUpdateManyWithoutRideNestedInput
  }

  export type UserUpsertWithoutRideParticipantsInput = {
    update: XOR<UserUpdateWithoutRideParticipantsInput, UserUncheckedUpdateWithoutRideParticipantsInput>
    create: XOR<UserCreateWithoutRideParticipantsInput, UserUncheckedCreateWithoutRideParticipantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRideParticipantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRideParticipantsInput, UserUncheckedUpdateWithoutRideParticipantsInput>
  }

  export type UserUpdateWithoutRideParticipantsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRideParticipantsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RideCreateWithoutCancellationsInput = {
    ride_id?: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    driver: UserCreateNestedOneWithoutRidesHostedInput
    vehicle?: VehicleCreateNestedOneWithoutRidesInput
    participants?: RideParticipantCreateNestedManyWithoutRideInput
    payments?: PaymentCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateWithoutCancellationsInput = {
    ride_id?: string
    driver_id: string
    vehicle_id?: string | null
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    participants?: RideParticipantUncheckedCreateNestedManyWithoutRideInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideCreateOrConnectWithoutCancellationsInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutCancellationsInput, RideUncheckedCreateWithoutCancellationsInput>
  }

  export type UserCreateWithoutCancellationsInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackCreateNestedManyWithoutReceiverInput
    sosTriggers?: SOS_LogCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCancellationsInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutReceiverInput
    sosTriggers?: SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCancellationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCancellationsInput, UserUncheckedCreateWithoutCancellationsInput>
  }

  export type RideUpsertWithoutCancellationsInput = {
    update: XOR<RideUpdateWithoutCancellationsInput, RideUncheckedUpdateWithoutCancellationsInput>
    create: XOR<RideCreateWithoutCancellationsInput, RideUncheckedCreateWithoutCancellationsInput>
    where?: RideWhereInput
  }

  export type RideUpdateToOneWithWhereWithoutCancellationsInput = {
    where?: RideWhereInput
    data: XOR<RideUpdateWithoutCancellationsInput, RideUncheckedUpdateWithoutCancellationsInput>
  }

  export type RideUpdateWithoutCancellationsInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutRidesHostedNestedInput
    vehicle?: VehicleUpdateOneWithoutRidesNestedInput
    participants?: RideParticipantUpdateManyWithoutRideNestedInput
    payments?: PaymentUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutCancellationsInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RideParticipantUncheckedUpdateManyWithoutRideNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUncheckedUpdateManyWithoutRideNestedInput
  }

  export type UserUpsertWithoutCancellationsInput = {
    update: XOR<UserUpdateWithoutCancellationsInput, UserUncheckedUpdateWithoutCancellationsInput>
    create: XOR<UserCreateWithoutCancellationsInput, UserUncheckedCreateWithoutCancellationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCancellationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCancellationsInput, UserUncheckedUpdateWithoutCancellationsInput>
  }

  export type UserUpdateWithoutCancellationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUpdateManyWithoutReceiverNestedInput
    sosTriggers?: SOS_LogUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCancellationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutReceiverNestedInput
    sosTriggers?: SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RideCreateWithoutPaymentsInput = {
    ride_id?: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    driver: UserCreateNestedOneWithoutRidesHostedInput
    vehicle?: VehicleCreateNestedOneWithoutRidesInput
    participants?: RideParticipantCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateWithoutPaymentsInput = {
    ride_id?: string
    driver_id: string
    vehicle_id?: string | null
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    participants?: RideParticipantUncheckedCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideCreateOrConnectWithoutPaymentsInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutPaymentsInput, RideUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantCreateNestedManyWithoutUserInput
    feedbackGiven?: FeedbackCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantUncheckedCreateNestedManyWithoutUserInput
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type RideUpsertWithoutPaymentsInput = {
    update: XOR<RideUpdateWithoutPaymentsInput, RideUncheckedUpdateWithoutPaymentsInput>
    create: XOR<RideCreateWithoutPaymentsInput, RideUncheckedCreateWithoutPaymentsInput>
    where?: RideWhereInput
  }

  export type RideUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: RideWhereInput
    data: XOR<RideUpdateWithoutPaymentsInput, RideUncheckedUpdateWithoutPaymentsInput>
  }

  export type RideUpdateWithoutPaymentsInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutRidesHostedNestedInput
    vehicle?: VehicleUpdateOneWithoutRidesNestedInput
    participants?: RideParticipantUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutPaymentsInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RideParticipantUncheckedUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUncheckedUpdateManyWithoutRideNestedInput
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUpdateManyWithoutUserNestedInput
    feedbackGiven?: FeedbackUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUncheckedUpdateManyWithoutUserNestedInput
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RideCreateWithoutFeedbacksInput = {
    ride_id?: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    driver: UserCreateNestedOneWithoutRidesHostedInput
    vehicle?: VehicleCreateNestedOneWithoutRidesInput
    participants?: RideParticipantCreateNestedManyWithoutRideInput
    payments?: PaymentCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateWithoutFeedbacksInput = {
    ride_id?: string
    driver_id: string
    vehicle_id?: string | null
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    participants?: RideParticipantUncheckedCreateNestedManyWithoutRideInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutRideInput
    sos_logs?: SOS_LogUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideCreateOrConnectWithoutFeedbacksInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutFeedbacksInput, RideUncheckedCreateWithoutFeedbacksInput>
  }

  export type UserCreateWithoutFeedbackGivenInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutPayerInput
    feedbackReceived?: FeedbackCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbackGivenInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbackGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackGivenInput, UserUncheckedCreateWithoutFeedbackGivenInput>
  }

  export type UserCreateWithoutFeedbackReceivedInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackCreateNestedManyWithoutGiverInput
    cancellations?: RideCancellationCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbackReceivedInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutGiverInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput
    sosInvolved?: SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbackReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackReceivedInput, UserUncheckedCreateWithoutFeedbackReceivedInput>
  }

  export type RideUpsertWithoutFeedbacksInput = {
    update: XOR<RideUpdateWithoutFeedbacksInput, RideUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<RideCreateWithoutFeedbacksInput, RideUncheckedCreateWithoutFeedbacksInput>
    where?: RideWhereInput
  }

  export type RideUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: RideWhereInput
    data: XOR<RideUpdateWithoutFeedbacksInput, RideUncheckedUpdateWithoutFeedbacksInput>
  }

  export type RideUpdateWithoutFeedbacksInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutRidesHostedNestedInput
    vehicle?: VehicleUpdateOneWithoutRidesNestedInput
    participants?: RideParticipantUpdateManyWithoutRideNestedInput
    payments?: PaymentUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutFeedbacksInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RideParticipantUncheckedUpdateManyWithoutRideNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUncheckedUpdateManyWithoutRideNestedInput
  }

  export type UserUpsertWithoutFeedbackGivenInput = {
    update: XOR<UserUpdateWithoutFeedbackGivenInput, UserUncheckedUpdateWithoutFeedbackGivenInput>
    create: XOR<UserCreateWithoutFeedbackGivenInput, UserUncheckedCreateWithoutFeedbackGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackGivenInput, UserUncheckedUpdateWithoutFeedbackGivenInput>
  }

  export type UserUpdateWithoutFeedbackGivenInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutPayerNestedInput
    feedbackReceived?: FeedbackUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackGivenInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFeedbackReceivedInput = {
    update: XOR<UserUpdateWithoutFeedbackReceivedInput, UserUncheckedUpdateWithoutFeedbackReceivedInput>
    create: XOR<UserCreateWithoutFeedbackReceivedInput, UserUncheckedCreateWithoutFeedbackReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackReceivedInput, UserUncheckedUpdateWithoutFeedbackReceivedInput>
  }

  export type UserUpdateWithoutFeedbackReceivedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUpdateManyWithoutGiverNestedInput
    cancellations?: RideCancellationUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackReceivedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutGiverNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput
    sosInvolved?: SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RideCreateWithoutSos_logsInput = {
    ride_id?: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    driver: UserCreateNestedOneWithoutRidesHostedInput
    vehicle?: VehicleCreateNestedOneWithoutRidesInput
    participants?: RideParticipantCreateNestedManyWithoutRideInput
    payments?: PaymentCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationCreateNestedManyWithoutRideInput
  }

  export type RideUncheckedCreateWithoutSos_logsInput = {
    ride_id?: string
    driver_id: string
    vehicle_id?: string | null
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
    participants?: RideParticipantUncheckedCreateNestedManyWithoutRideInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRideInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutRideInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutRideInput
  }

  export type RideCreateOrConnectWithoutSos_logsInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutSos_logsInput, RideUncheckedCreateWithoutSos_logsInput>
  }

  export type UserCreateWithoutSosTriggersInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationCreateNestedManyWithoutUserInput
    sosInvolved?: SOS_InvolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSosTriggersInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutUserInput
    sosInvolved?: SOS_InvolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSosTriggersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSosTriggersInput, UserUncheckedCreateWithoutSosTriggersInput>
  }

  export type SOS_InvolvedCreateWithoutSosInput = {
    id?: string
    user: UserCreateNestedOneWithoutSosInvolvedInput
  }

  export type SOS_InvolvedUncheckedCreateWithoutSosInput = {
    id?: string
    user_id: string
  }

  export type SOS_InvolvedCreateOrConnectWithoutSosInput = {
    where: SOS_InvolvedWhereUniqueInput
    create: XOR<SOS_InvolvedCreateWithoutSosInput, SOS_InvolvedUncheckedCreateWithoutSosInput>
  }

  export type SOS_InvolvedCreateManySosInputEnvelope = {
    data: SOS_InvolvedCreateManySosInput | SOS_InvolvedCreateManySosInput[]
    skipDuplicates?: boolean
  }

  export type RideUpsertWithoutSos_logsInput = {
    update: XOR<RideUpdateWithoutSos_logsInput, RideUncheckedUpdateWithoutSos_logsInput>
    create: XOR<RideCreateWithoutSos_logsInput, RideUncheckedCreateWithoutSos_logsInput>
    where?: RideWhereInput
  }

  export type RideUpdateToOneWithWhereWithoutSos_logsInput = {
    where?: RideWhereInput
    data: XOR<RideUpdateWithoutSos_logsInput, RideUncheckedUpdateWithoutSos_logsInput>
  }

  export type RideUpdateWithoutSos_logsInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutRidesHostedNestedInput
    vehicle?: VehicleUpdateOneWithoutRidesNestedInput
    participants?: RideParticipantUpdateManyWithoutRideNestedInput
    payments?: PaymentUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutSos_logsInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RideParticipantUncheckedUpdateManyWithoutRideNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutRideNestedInput
  }

  export type UserUpsertWithoutSosTriggersInput = {
    update: XOR<UserUpdateWithoutSosTriggersInput, UserUncheckedUpdateWithoutSosTriggersInput>
    create: XOR<UserCreateWithoutSosTriggersInput, UserUncheckedCreateWithoutSosTriggersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSosTriggersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSosTriggersInput, UserUncheckedUpdateWithoutSosTriggersInput>
  }

  export type UserUpdateWithoutSosTriggersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUpdateManyWithoutUserNestedInput
    sosInvolved?: SOS_InvolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSosTriggersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutUserNestedInput
    sosInvolved?: SOS_InvolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SOS_InvolvedUpsertWithWhereUniqueWithoutSosInput = {
    where: SOS_InvolvedWhereUniqueInput
    update: XOR<SOS_InvolvedUpdateWithoutSosInput, SOS_InvolvedUncheckedUpdateWithoutSosInput>
    create: XOR<SOS_InvolvedCreateWithoutSosInput, SOS_InvolvedUncheckedCreateWithoutSosInput>
  }

  export type SOS_InvolvedUpdateWithWhereUniqueWithoutSosInput = {
    where: SOS_InvolvedWhereUniqueInput
    data: XOR<SOS_InvolvedUpdateWithoutSosInput, SOS_InvolvedUncheckedUpdateWithoutSosInput>
  }

  export type SOS_InvolvedUpdateManyWithWhereWithoutSosInput = {
    where: SOS_InvolvedScalarWhereInput
    data: XOR<SOS_InvolvedUpdateManyMutationInput, SOS_InvolvedUncheckedUpdateManyWithoutSosInput>
  }

  export type SOS_LogCreateWithoutInvolved_usersInput = {
    sos_id?: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
    ride: RideCreateNestedOneWithoutSos_logsInput
    trigger_user: UserCreateNestedOneWithoutSosTriggersInput
  }

  export type SOS_LogUncheckedCreateWithoutInvolved_usersInput = {
    sos_id?: string
    ride_id: string
    trigger_user_id: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
  }

  export type SOS_LogCreateOrConnectWithoutInvolved_usersInput = {
    where: SOS_LogWhereUniqueInput
    create: XOR<SOS_LogCreateWithoutInvolved_usersInput, SOS_LogUncheckedCreateWithoutInvolved_usersInput>
  }

  export type UserCreateWithoutSosInvolvedInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideCreateNestedManyWithoutDriverInput
    vehicle?: VehicleCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogCreateNestedManyWithoutTrigger_userInput
  }

  export type UserUncheckedCreateWithoutSosInvolvedInput = {
    user_id?: string
    name: string
    email: string
    phone?: string | null
    role?: $Enums.UserRole
    credibility_score?: number
    rating?: Decimal | DecimalJsLike | number | string | null
    cancellation_count?: number
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    ridesHosted?: RideUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: VehicleUncheckedCreateNestedOneWithoutUserInput
    rideParticipants?: RideParticipantUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPayerInput
    feedbackGiven?: FeedbackUncheckedCreateNestedManyWithoutGiverInput
    feedbackReceived?: FeedbackUncheckedCreateNestedManyWithoutReceiverInput
    cancellations?: RideCancellationUncheckedCreateNestedManyWithoutUserInput
    sosTriggers?: SOS_LogUncheckedCreateNestedManyWithoutTrigger_userInput
  }

  export type UserCreateOrConnectWithoutSosInvolvedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSosInvolvedInput, UserUncheckedCreateWithoutSosInvolvedInput>
  }

  export type SOS_LogUpsertWithoutInvolved_usersInput = {
    update: XOR<SOS_LogUpdateWithoutInvolved_usersInput, SOS_LogUncheckedUpdateWithoutInvolved_usersInput>
    create: XOR<SOS_LogCreateWithoutInvolved_usersInput, SOS_LogUncheckedCreateWithoutInvolved_usersInput>
    where?: SOS_LogWhereInput
  }

  export type SOS_LogUpdateToOneWithWhereWithoutInvolved_usersInput = {
    where?: SOS_LogWhereInput
    data: XOR<SOS_LogUpdateWithoutInvolved_usersInput, SOS_LogUncheckedUpdateWithoutInvolved_usersInput>
  }

  export type SOS_LogUpdateWithoutInvolved_usersInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutSos_logsNestedInput
    trigger_user?: UserUpdateOneRequiredWithoutSosTriggersNestedInput
  }

  export type SOS_LogUncheckedUpdateWithoutInvolved_usersInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    trigger_user_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSosInvolvedInput = {
    update: XOR<UserUpdateWithoutSosInvolvedInput, UserUncheckedUpdateWithoutSosInvolvedInput>
    create: XOR<UserCreateWithoutSosInvolvedInput, UserUncheckedCreateWithoutSosInvolvedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSosInvolvedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSosInvolvedInput, UserUncheckedUpdateWithoutSosInvolvedInput>
  }

  export type UserUpdateWithoutSosInvolvedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUpdateManyWithoutTrigger_userNestedInput
  }

  export type UserUncheckedUpdateWithoutSosInvolvedInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    credibility_score?: IntFieldUpdateOperationsInput | number
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cancellation_count?: IntFieldUpdateOperationsInput | number
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ridesHosted?: RideUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: VehicleUncheckedUpdateOneWithoutUserNestedInput
    rideParticipants?: RideParticipantUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPayerNestedInput
    feedbackGiven?: FeedbackUncheckedUpdateManyWithoutGiverNestedInput
    feedbackReceived?: FeedbackUncheckedUpdateManyWithoutReceiverNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutUserNestedInput
    sosTriggers?: SOS_LogUncheckedUpdateManyWithoutTrigger_userNestedInput
  }

  export type RideCreateManyDriverInput = {
    ride_id?: string
    vehicle_id?: string | null
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RideParticipantCreateManyUserInput = {
    id?: string
    ride_id: string
    share_fare?: Decimal | DecimalJsLike | number | string | null
    status?: string
    booking_time?: Date | string
  }

  export type PaymentCreateManyPayerInput = {
    payment_id?: string
    ride_id: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string
  }

  export type FeedbackCreateManyGiverInput = {
    feedback_id?: string
    ride_id: string
    receiver_id: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
  }

  export type FeedbackCreateManyReceiverInput = {
    feedback_id?: string
    ride_id: string
    giver_id: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
  }

  export type RideCancellationCreateManyUserInput = {
    id?: string
    ride_id: string
    cancelled_at?: Date | string
  }

  export type SOS_LogCreateManyTrigger_userInput = {
    sos_id?: string
    ride_id: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
  }

  export type SOS_InvolvedCreateManyUserInput = {
    id?: string
    sos_id: string
  }

  export type RideUpdateWithoutDriverInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutRidesNestedInput
    participants?: RideParticipantUpdateManyWithoutRideNestedInput
    payments?: PaymentUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutDriverInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RideParticipantUncheckedUpdateManyWithoutRideNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUncheckedUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateManyWithoutDriverInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type RideParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutPayerInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPayerInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutPayerInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutGiverInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutFeedbacksNestedInput
    receiver?: UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutGiverInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutGiverInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutReceiverInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutFeedbacksNestedInput
    giver?: UserUpdateOneRequiredWithoutFeedbackGivenNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutReceiverInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    giver_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutReceiverInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    giver_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCancellationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutCancellationsNestedInput
  }

  export type RideCancellationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCancellationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOS_LogUpdateWithoutTrigger_userInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: RideUpdateOneRequiredWithoutSos_logsNestedInput
    involved_users?: SOS_InvolvedUpdateManyWithoutSosNestedInput
  }

  export type SOS_LogUncheckedUpdateWithoutTrigger_userInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    involved_users?: SOS_InvolvedUncheckedUpdateManyWithoutSosNestedInput
  }

  export type SOS_LogUncheckedUpdateManyWithoutTrigger_userInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOS_InvolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sos?: SOS_LogUpdateOneRequiredWithoutInvolved_usersNestedInput
  }

  export type SOS_InvolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sos_id?: StringFieldUpdateOperationsInput | string
  }

  export type SOS_InvolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sos_id?: StringFieldUpdateOperationsInput | string
  }

  export type RideCreateManyVehicleInput = {
    ride_id?: string
    driver_id: string
    start_location: string
    end_location: string
    start_date: Date | string
    start_time: Date | string
    total_fare: Decimal | DecimalJsLike | number | string
    max_passengers?: number
    status?: $Enums.RideStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RideUpdateWithoutVehicleInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneRequiredWithoutRidesHostedNestedInput
    participants?: RideParticipantUpdateManyWithoutRideNestedInput
    payments?: PaymentUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutVehicleInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RideParticipantUncheckedUpdateManyWithoutRideNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRideNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutRideNestedInput
    cancellations?: RideCancellationUncheckedUpdateManyWithoutRideNestedInput
    sos_logs?: SOS_LogUncheckedUpdateManyWithoutRideNestedInput
  }

  export type RideUncheckedUpdateManyWithoutVehicleInput = {
    ride_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    start_location?: StringFieldUpdateOperationsInput | string
    end_location?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_fare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    max_passengers?: IntFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideParticipantCreateManyRideInput = {
    id?: string
    user_id: string
    share_fare?: Decimal | DecimalJsLike | number | string | null
    status?: string
    booking_time?: Date | string
  }

  export type PaymentCreateManyRideInput = {
    payment_id?: string
    payer_id: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string
  }

  export type FeedbackCreateManyRideInput = {
    feedback_id?: string
    giver_id: string
    receiver_id: string
    rating: number
    comfort_flag: string
    comments?: string | null
    created_at?: Date | string
  }

  export type RideCancellationCreateManyRideInput = {
    id?: string
    user_id: string
    cancelled_at?: Date | string
  }

  export type SOS_LogCreateManyRideInput = {
    sos_id?: string
    trigger_user_id: string
    location_at_trigger: string
    status?: string
    trigger_time?: Date | string
  }

  export type RideParticipantUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRideParticipantsNestedInput
  }

  export type RideParticipantUncheckedUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideParticipantUncheckedUpdateManyWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    share_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: StringFieldUpdateOperationsInput | string
    booking_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutRideInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payer?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutRideInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutRideInput = {
    payment_id?: StringFieldUpdateOperationsInput | string
    payer_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutRideInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    giver?: UserUpdateOneRequiredWithoutFeedbackGivenNestedInput
    receiver?: UserUpdateOneRequiredWithoutFeedbackReceivedNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutRideInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    giver_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutRideInput = {
    feedback_id?: StringFieldUpdateOperationsInput | string
    giver_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comfort_flag?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCancellationUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCancellationsNestedInput
  }

  export type RideCancellationUncheckedUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCancellationUncheckedUpdateManyWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    cancelled_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOS_LogUpdateWithoutRideInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger_user?: UserUpdateOneRequiredWithoutSosTriggersNestedInput
    involved_users?: SOS_InvolvedUpdateManyWithoutSosNestedInput
  }

  export type SOS_LogUncheckedUpdateWithoutRideInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    trigger_user_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
    involved_users?: SOS_InvolvedUncheckedUpdateManyWithoutSosNestedInput
  }

  export type SOS_LogUncheckedUpdateManyWithoutRideInput = {
    sos_id?: StringFieldUpdateOperationsInput | string
    trigger_user_id?: StringFieldUpdateOperationsInput | string
    location_at_trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trigger_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SOS_InvolvedCreateManySosInput = {
    id?: string
    user_id: string
  }

  export type SOS_InvolvedUpdateWithoutSosInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSosInvolvedNestedInput
  }

  export type SOS_InvolvedUncheckedUpdateWithoutSosInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type SOS_InvolvedUncheckedUpdateManyWithoutSosInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}