import { identity } from '@namespace/pgk2/identity'

export const add = (a: number, b: number): number => identity(a + b);