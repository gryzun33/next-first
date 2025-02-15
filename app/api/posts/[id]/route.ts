import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';
import { headers, cookies } from 'next/headers';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headerList = await headers();
  const type = headerList.get('Content-Type');

  const cookiesList = await cookies();
  const coo2 = cookiesList.get('Cookie_2')?.value;

  // redirect('/blog');
  return NextResponse.json({ id, coo2 });
}
