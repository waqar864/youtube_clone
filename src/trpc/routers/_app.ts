import { categoryRouter } from '@/modules/categories/server/procedure';
import {  createTRPCRouter } from '../init';
// import { auth } from '@clerk/nextjs/server';
// import { TRPCError } from '@trpc/server';
export const appRouter = createTRPCRouter({
  categories: categoryRouter,

});
// export type definition of API
export type AppRouter = typeof appRouter;