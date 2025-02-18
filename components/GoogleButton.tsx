'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const GoogleButton = () => {
  const searchParams = useSearchParams();
  console.log('params=', searchParams);
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  console.log('callbackurl=', callbackUrl);
  return (
    <button onClick={() => signIn('google', { redirectTo: callbackUrl })}>
      Sign in with Google
    </button>
  );
};

export { GoogleButton };
