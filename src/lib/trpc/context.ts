import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

// we're not using the event parameter is this example,
export async function createContext(event: RequestEvent) {
  return {
    // context information
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;