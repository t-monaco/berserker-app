import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      if (req.nextUrl.pathname.startsWith('/admin')) {
        // TODO: Need to augment JWT token type. Not is typing to unknown
        // @ts-ignore
        return token?.user.role === 'ADMIN';
      }
      return Boolean(token);
    },
  },
});

export const config = { matcher: ['/', '/admin/:path*'] };
