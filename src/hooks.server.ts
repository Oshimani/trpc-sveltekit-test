import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';
import {handle as handleAuth} from './auth'

const handleTrpc: Handle = createTRPCHandle({ router, createContext });

export const handle = sequence(handleAuth,handleTrpc)