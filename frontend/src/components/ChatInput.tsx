interface ChatInputProps {
  prompt: string;
  isLoading: boolean;
  onPromptChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ChatInput({
  prompt,
  isLoading,
  onPromptChange,
  onSubmit,
}: ChatInputProps) {
  return (
    <div className="border-t border-[#2d2d2d] p-4">
      <form onSubmit={onSubmit} className="max-w-3xl mx-auto">
        <div className="relative flex items-center bg-[#212121] rounded-2xl border border-[#3d3d3d] focus-within:border-[#565656] transition-colors">
          <input
            type="text"
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            placeholder="Message CosmoAI..."
            className="flex-1 bg-transparent px-4 py-4 text-white placeholder-[#8e8e8e] focus:outline-none text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="pr-3 p-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mr-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </button>
        </div>
        <p className="text-center text-xs text-[#8e8e8e] mt-3">
          CosmoAI can make mistakes. Consider checking important information.
        </p>
      </form>
    </div>
  );
}

