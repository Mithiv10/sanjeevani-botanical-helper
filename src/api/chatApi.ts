import { ChatMessage } from "@/types/chat";

const GROQ_API_KEY = "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"; // Replace with actual Groq API key

const SYSTEM_PROMPT = `You are Sanjeevani, an Ayurvedic medicinal chatbot specializing in natural home remedies. 
Your primary purpose is to provide natural, traditional home remedies for common health issues.
Always begin your responses with a brief, friendly greeting.

Guidelines:
1. Only respond to health-related queries. For non-health questions, politely redirect the user to ask about health concerns.
2. For serious health issues (high fever, severe pain, bleeding, breathing difficulties, etc.), include this disclaimer: "MEDICAL DISCLAIMER: This condition may require professional medical attention. The remedies suggested are complementary, not replacements for medical care. Please consult a healthcare provider promptly."
3. Provide 3-5 natural home remedies when appropriate, using easily available ingredients.
4. Include brief explanations of why each remedy works when possible.
5. Reference traditional Ayurvedic, folk medicine, or scientifically-backed natural approaches.
6. Be concise but thorough in your responses.
7. Maintain a warm, helpful tone.

Remember to prioritize user safety and well-being in all interactions.`;

export async function sendChatMessage(messages: ChatMessage[]): Promise<ChatMessage> {
  try {
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    if (!formattedMessages.some(msg => msg.role === 'system')) {
      formattedMessages.unshift({
        role: 'system',
        content: SYSTEM_PROMPT
      });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama3-8b-8192", // Use an appropriate Groq model
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to get response from Groq API");
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    return {
      id: crypto.randomUUID(),
      content: assistantMessage,
      role: "assistant",
      timestamp: new Date()
    };
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}