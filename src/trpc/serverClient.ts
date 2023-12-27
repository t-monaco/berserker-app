import { appRouter } from '@/server';
import { httpBatchLink } from '@trpc/client';

export const serverTrpc = appRouter.createCaller({
  links: [
    httpBatchLink({
      // TODO: use .env URL?
      url: '/api/trpc',
    }),
  ],
});
