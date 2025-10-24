import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "bharatenamel@gmail.com",
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #4F46E5; margin-bottom: 20px;">New Newsletter Subscription</h2>
            <p style="font-size: 16px; color: #333; margin-bottom: 15px;">
              A new user has subscribed to your newsletter!
            </p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; color: #666;">
                <strong>Email:</strong> ${email}
              </p>
              <p style="margin: 10px 0 0 0; color: #666;">
                <strong>Date:</strong> ${new Date().toLocaleString()}
              </p>
            </div>
            <p style="font-size: 14px; color: #666; margin-top: 20px;">
              This email was sent from BharatEnamel website newsletter subscription form.
            </p>
          </div>
        </div>
      `,
      text: `New Newsletter Subscription\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to process subscription" });
  }
}