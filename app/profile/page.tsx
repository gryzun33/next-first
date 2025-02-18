import { auth } from '@/configs/auth';

export default async function Profile() {
  const session = await auth();
  console.log('session2=', session);
  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="photo" />}
    </div>
  );
}
