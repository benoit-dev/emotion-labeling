export default {
  async fetch(request, env) {
    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "https://emotion-labeling.pages.dev",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Only allow POST requests
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const { feedback, timestamp, url } = await request.json();

      // Send email via Postmark
      const response = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": env.POSTMARK_API_KEY,
        },
        body: JSON.stringify({
          "From": "feedback@emotion-labeling.pages.dev",
          "To": "benoit.devilliers888+emotionlabeling@gmail.com",
          "Subject": "Emotion Identifier Feedback",
          "HtmlBody": `
            <h2>New Feedback Received</h2>
            <p><strong>Feedback:</strong> ${feedback}</p>
            <p><strong>Time:</strong> ${timestamp}</p>
            <p><strong>URL:</strong> ${url}</p>
          `,
          "MessageStream": "outbound"
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://emotion-labeling.pages.dev",
        },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to process feedback" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://emotion-labeling.pages.dev",
          },
        }
      );
    }
  },
};
