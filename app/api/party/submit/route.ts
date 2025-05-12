import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Log the entire form submission
    console.log('Party form submitted:', data);

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
