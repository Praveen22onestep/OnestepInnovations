import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, industry, challenges } = await request.json();

        const emailSubject = "Chatbot Enquiry";
        const emailBody = `
New Lead from AI Assistant

---

Contact Details:
- Name: ${name}
- Email: ${email}

Industry/Field: ${industry}

---

AI-Generated Analysis:

${challenges || "No analysis generated"}

---

This lead was captured by the One Step Innovations AI Efficiency Analyst chatbot.
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
            message: "Inquiry sent successfully",
        });
    } catch (error) {
        console.error("Error processing inquiry:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process inquiry" },
            { status: 500 }
        );
    }
}
