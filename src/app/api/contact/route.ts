import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { name, phone, email, service, amount, message } = payload;

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { error: "Name, Phone, Email, and Service are required fields." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.NOTIFICATION_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API key is not configured on the server. Please add RESEND_API_KEY to the env file." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    if (!recipientEmail) {
      return NextResponse.json(
        { error: "Notification email is not configured on the server. Please add NOTIFICATION_EMAIL to the env file." },
        { status: 500 }
      );
    }

    // Format currency amount for display
    const formattedAmount = amount 
      ? new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(Number(amount))
      : "Not Specified";

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: "Capital Growth Finance <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `New Financial Inquiry from ${name} (${service})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #d4af37; border-radius: 12px; background-color: #081225; color: #fcfcfd;">
          <h2 style="color: #d4af37; border-bottom: 1px solid rgba(212, 175, 55, 0.2); padding-bottom: 15px; margin-top: 0; text-align: center; text-transform: uppercase; letter-spacing: 2px;">
            New Service Inquiry
          </h2>
          <p style="font-size: 14px; line-height: 1.6; text-align: center; color: rgba(252,252,253,0.8); margin-bottom: 25px;">
            A new contact/application request has been submitted through the Capital Growth Finance portal.
          </p>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 25px;">
            <tr style="border-bottom: 1px solid rgba(212, 175, 55, 0.15);">
              <td style="padding: 12px 8px; font-weight: bold; color: #d4af37; width: 150px; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Name</td>
              <td style="padding: 12px 8px; color: #fcfcfd;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(212, 175, 55, 0.15);">
              <td style="padding: 12px 8px; font-weight: bold; color: #d4af37; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Phone</td>
              <td style="padding: 12px 8px; color: #fcfcfd;"><a href="tel:${phone}" style="color: #fcfcfd; text-decoration: none; border-bottom: 1px dotted #d4af37;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(212, 175, 55, 0.15);">
              <td style="padding: 12px 8px; font-weight: bold; color: #d4af37; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 8px; color: #fcfcfd;"><a href="mailto:${email}" style="color: #fcfcfd; text-decoration: none; border-bottom: 1px dotted #d4af37;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(212, 175, 55, 0.15);">
              <td style="padding: 12px 8px; font-weight: bold; color: #d4af37; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Service Requested</td>
              <td style="padding: 12px 8px; color: #fcfcfd;">${service}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(212, 175, 55, 0.15);">
              <td style="padding: 12px 8px; font-weight: bold; color: #d4af37; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Loan Amount Required</td>
              <td style="padding: 12px 8px; color: #fcfcfd; font-weight: bold;">${formattedAmount}</td>
            </tr>
          </table>

          <div style="padding: 20px; border: 1px solid rgba(212, 175, 55, 0.2); border-radius: 8px; background-color: rgba(15, 37, 71, 0.4); margin-bottom: 25px;">
            <h4 style="margin-top: 0; margin-bottom: 10px; color: #d4af37; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Client Notes / Message</h4>
            <p style="margin: 0; font-style: italic; line-height: 1.6; font-size: 13px; color: rgba(252,252,253,0.9);">
              "${message || "No additional comments provided."}"
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid rgba(212, 175, 55, 0.2); margin: 30px 0 15px 0;" />
          <p style="font-size: 10px; text-align: center; color: rgba(252,252,253,0.5); text-transform: uppercase; letter-spacing: 1px; margin: 0;">
            Capital Growth Finance • Benz Circle, Vijayawada, Andhra Pradesh
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("API contact error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error occurred." },
      { status: 500 }
    );
  }
}
