import axios from 'axios';
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

export const fetchGeminiResponse = async (userMessage) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        contents: [{
          parts: [{
            text: userMessage
          }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.candidates[0].content.parts[0].text;
    
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I am having trouble connecting to my brain right now.";
  }
};