/**
 * Shared utilities for node-commons
 */

export function formatError(err: Error): string {
  return `[${new Date().toISOString()}] ${err.message}`;
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function retry<T>(fn: () => Promise<T>, attempts: number = 3): Promise<T> {
  return fn().catch(err => {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  });
}
