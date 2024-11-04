import NextAuth from 'next-auth';
import { authOptions } from '@/app/_lib/auth_option';
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
