const axios = require("axios");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { name, email, phone, message } = JSON.parse(event.body);

  const TELEGRAM_TOKEN = "7552474479:AAE2N5q-YtiQrlNbW1ru5fQf6MRqyT3dfVU";
  const CHAT_ID = "-1002369711049"; // replace with your real group ID

  const text = `
📬 New Contact Message:

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone || "N/A"}
📝 Message: ${message}
`;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
