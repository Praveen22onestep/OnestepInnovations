import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, company, message } = await request.json();

        const emailSubject = "Enquiry";
        const emailBody = `
New Website Enquiry

---

Contact Details:
- Name: ${name}
- Email: ${email}
- Company: ${company || "Not provided"}

---

Message:

${message}

---

This enquiry was submitted through the One Step Innovations website contact form.
        `.trim();

        const { data, error } = await resend.emails.send({
            from: "One Step Innovations Pty Ltd <noreply@onestepinnovations.com.au>",
            to: ["praveensudhakar@onestepinnovations.com.au"],
            replyTo: email,
            subject: emailSubject,
            text: emailBody,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { success: false, message: "Failed to send email" },
                { status: 500 }
            );
        }

        console.log("Email sent successfully:", data);

        return NextResponse.json({
            success: true,
            message: "Enquiry sent successfully",
        });
    } catch (error) {
        console.error("Error processing enquiry:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process enquiry" },
            { status: 500 }
        );
    }
}
