import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real implementation, you would use Resend or another service to send the email
    // Example with Resend:
    // const res = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
    //   },
    //   body: JSON.stringify({
    //     from: 'onboarding@resend.dev',
    //     to: 'onlinedevapps@gmail.com',
    //     subject: `New Portfolio Inquiry: ${data.engagementType}`,
    //     html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong> ${data.message}</p>`
    //   })
    // });

    // For now, simulate a successful response
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Contact form submission:", data);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
