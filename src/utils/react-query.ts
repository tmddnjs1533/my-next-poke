import { cache } from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  QueryState,
  QueryKey
} from '@tanstack/react-query';

export const getQueryClient = cache(() => new QueryClient());