import { auth } from '@/configs/auth';

export default auth((req) => {
  if (!req.auth) {
    const newUrl = new URL('/signin', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ['/profile'],
};
