export default function LoadingIndicator() {
  return (
    <div className="flex gap-4 mb-6">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex-shrink-0 flex items-center justify-center text-white text-sm font-medium">
        C
      </div>
      <div className="bg-[#1a1a1a] px-4 py-3 rounded-2xl">
        <div className="flex gap-1">
          <span
            className="w-2 h-2 bg-[#8e8e8e] rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="w-2 h-2 bg-[#8e8e8e] rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="w-2 h-2 bg-[#8e8e8e] rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
}

