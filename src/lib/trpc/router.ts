import type { Context } from '$lib/trpc/context';
import { TRPCError, initTRPC } from '@trpc/server';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
  greeting: t.procedure.query(async (opts) => {
    if (!opts.ctx.user)
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    return `Hello ${opts.ctx.user.name} @ ${new Date().toLocaleTimeString()}`;
  })
});

export type Router = typeof router;