import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name, email, company, message } = await request.json();

        const emailSubject = "Enquiry";
        const emailBody = `
New Website Enquiry

---

**Contact Details:**
- Name: ${name}
- Email: ${email}
- Company: ${company || "Not provided"}

---

**Message:**

${message}

---

This enquiry was submitted through the One Step Innovations website contact form.
        `.trim();

        console.log("===== NEW ENQUIRY =====");
        console.log("To: praveensudhakar@onestepinnovations.com.au");
        console.log("Subject:", emailSubject);
        console.log("Body:", emailBody);
        console.log("========================");

        return NextResponse.json({
            success: true,
            message: "Enquiry received successfully",
            mailtoLink: `mailto:praveensudhakar@onestepinnovations.com.au?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
        });
    } catch (error) {
        console.error("Error processing enquiry:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process enquiry" },
            { status: 500 }
        );
    }
}
