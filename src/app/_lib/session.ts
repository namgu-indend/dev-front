'use server';
import { headers } from 'next/headers';

export async function getIPAddress() {
    const header = await headers();
    const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
    return ip;
}
