import type { Message } from "../types";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 mb-6 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-medium bg-gradient-to-br from-violet-500 to-cyan-500">
          C
        </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl ${
          isUser ? "bg-[#303030] text-white" : "bg-[#1a1a1a] text-[#ececec]"
        }`}
      >
        <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
        {message.image && (
          <img
            src={message.image}
            alt="Generated"
            className="mt-3 rounded-xl max-w-full h-auto"
          />
        )}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-medium bg-gradient-to-br from-purple-500 to-pink-500">
          U
        </div>
      )}
    </div>
  );
}

