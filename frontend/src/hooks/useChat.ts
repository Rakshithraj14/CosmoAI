import { useState, useRef, useEffect } from "react";
import type { Message } from "../types";
import { chatApi, isImageRequest } from "../utils/api";

export function useChat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    const currentPrompt = prompt;
    setPrompt("");
    setIsLoading(true);

    // Check if it's an image generation request
    if (isImageRequest(currentPrompt)) {
      try {
        const image = await chatApi.generateImage(currentPrompt);
        const assistantMessage: Message = {
          role: "assistant",
          content: "Here's your generated image:",
          image,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch {
        const errorMessage: Message = {
          role: "assistant",
          content: "Sorry, image generation failed. Please try again.",
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // Regular chat request
    try {
      const reply = await chatApi.sendMessage(currentPrompt);
      const assistantMessage: Message = {
        role: "assistant",
        content: reply,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    prompt,
    setPrompt,
    messages,
    isLoading,
    messagesEndRef,
    handleSubmit,
  };
}

