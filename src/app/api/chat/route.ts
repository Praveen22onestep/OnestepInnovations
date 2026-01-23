import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name, email, industry, challenges } = await request.json();

        // Construct email content
        const emailSubject = "Chatbot Enquiry";
        const emailBody = `
New Lead from AI Assistant

---

**Contact Details:**
- Name: ${name}
- Email: ${email}

**Industry/Field:** ${industry}

---

**AI-Generated Analysis:**

${challenges || "No analysis generated"}

---

This lead was captured by the One Step Innovations AI Efficiency Analyst chatbot.
    `.trim();

        // For production, integrate with email service (SendGrid, AWS SES, etc.)
        // For now, we'll use a mailto: link approach or log the data

        // Log the inquiry for now (in production, replace with actual email sending)
        console.log("===== NEW ASSISTANT ENQUIRY =====");
        console.log("To: praveensudhakar@onestepinnovations.com.au");
        console.log("Subject:", emailSubject);
        console.log("Body:", emailBody);
        console.log("=================================");

        // In a production environment, you would use an email service like:
        // - SendGrid
        // - AWS SES
        // - Nodemailer with SMTP
        // - Resend

        // Example with fetch to email API:
        // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        //   method: 'POST',
        //   headers: {
        //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     personalizations: [{ to: [{ email: 'praveensudhakar@onestepinnovations.com.au' }] }],
        //     from: { email: 'noreply@onestepinnovations.com.au' },
        //     subject: emailSubject,
        //     content: [{ type: 'text/plain', value: emailBody }]
        //   })
        // });

        return NextResponse.json({
            success: true,
            message: "Inquiry received successfully",
            // Include mailto link for client-side fallback
            mailtoLink: `mailto:praveensudhakar@onestepinnovations.com.au?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
        });
    } catch (error) {
        console.error("Error processing inquiry:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process inquiry" },
            { status: 500 }
        );
    }
}
