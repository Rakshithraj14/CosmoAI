import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const chatApi = {
  sendMessage: async (prompt: string) => {
    const res = await axios.post(`${API_BASE_URL}/api/chat`, { prompt });
    return res.data.reply;
  },

  generateImage: async (prompt: string) => {
    const res = await axios.post(`${API_BASE_URL}/api/image`, { prompt });
    return `data:image/png;base64,${res.data.image}`;
  },
};

// Keywords that trigger image generation
const imageKeywords = [
  "generate image",
  "create image",
  "make image",
  "draw",
  "generate picture",
  "create picture",
  "generate art",
  "create art",
  "generate a image",
  "create a image",
  "generate an image",
  "create an image",
];

export const isImageRequest = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return imageKeywords.some((keyword) => lowerText.includes(keyword));
};

