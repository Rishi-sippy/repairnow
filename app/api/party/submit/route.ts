import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      phone,
      email,
      city,
      houseNo,
      food,
      drinks,
    } = data;

    // Here, you could:
    // - Save to a database
    // - Send an email
    // - Call another API
    // For now, just log it and return success
    console.log('Party form submitted:', data);

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
