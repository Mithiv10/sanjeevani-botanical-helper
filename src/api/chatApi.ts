
import { ChatMessage } from "@/types/chat";

// This is where we would normally use an environment variable
const API_KEY = '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'; // Demo key - this would be replaced by actual key in production

// System prompt to tune the model for Sanjeevani
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
    // Format the messages for the OpenAI API
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    // Add the system message if it's not already there
    if (!formattedMessages.some(msg => msg.role === 'system')) {
      formattedMessages.unshift({
        role: 'system',
        content: SYSTEM_PROMPT
      });
    }

    // In a real production app, this would be a call to your backend API
    // which would then make the OpenAI call to protect your API key
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get response from API');
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    return {
      id: crypto.randomUUID(),
      content: assistantMessage,
      role: 'assistant',
      timestamp: new Date()
    };
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}
