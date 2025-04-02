import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, systemPrompt = "" } = req.body;

    // Get the latest user message
    const latestMessage = messages[messages.length - 1];

    // Create the prompt with conversation history
    let prompt = systemPrompt + "\n\n";
    
    // Add conversation history
    messages.slice(0, -1).forEach(msg => {
      prompt += `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}\n`;
    });
    
    // Add the current message
    prompt += `User: ${latestMessage.content}\nAssistant:`;

    // Get the model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();

    res.json({ content: responseText });
  } catch (error) {
    console.error("Error in chat API:", error);
    res.status(500).json({
      error: "Failed to process request",
      details: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 