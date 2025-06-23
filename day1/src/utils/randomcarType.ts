export function randomCarType<T extends object>(enumeration: T): T[keyof T] {
  const values=  Object.values(enumeration) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}