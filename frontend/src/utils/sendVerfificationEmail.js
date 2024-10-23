import emailjs from "emailjs-com";

export const sendVerificationEmail = async (email) => {
  let verifyCode = Math.floor(1000 + Math.random() * 9000);
  const templateParams = {
    from_name: "Freudia India Pvt. Ltd",
    to_name: email.slice(0, email.indexOf("@")),
    verification_code: verifyCode,
    to_email: email,
  };

  try {
    const response = await emailjs.send(
      "service_8etm28c",
      "template_02mj8e7",
      templateParams
    );
    console.log(
      "Verification email sent successfully!",
      response.status,
      response.text
    );
    return verifyCode;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send verification email.");
  }
};
