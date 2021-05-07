export function devEnv(): boolean {
  return process.env.NODE_ENV === 'development';
}
