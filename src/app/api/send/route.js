/*import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}*/
// import { NextResponse } from "next/server";

// let currentQuote = 'First, solve the problem. Then, write the code. - John Johnson';

// export async function GET(request) {
//   return NextResponse.json({ quote: currentQuote }, { status: 200 });
// }
// export async function POST(request) {
//   try {
//     const { data } = await request.json();

//     if (typeof data === 'string') {
//       currentQuote = data;
//       return NextResponse.json({ message: 'Quote updated successfully!', newQuote: currentQuote }, { status: 200 });
//     } else {
//       return NextResponse.json({ error: 'Invalid data format. Please provide a string in the "data" field.' }, { status: 400 });
//     }
//   } catch (error) {
//     console.error('Error processing POST request:', error);
//     return NextResponse.json({ error: 'Failed to update quote.' }, { status: 500 });
//   }
// }