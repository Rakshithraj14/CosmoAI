import {
  Header,
  WelcomeScreen,
  ChatMessage,
  ChatInput,
  LoadingIndicator,
} from "./components";
import { useChat } from "./hooks/useChat";

export default function App() {
  const { prompt, setPrompt, messages, isLoading, messagesEndRef, handleSubmit } =
    useChat();

  return (
    <div className="flex h-screen bg-[#0d0d0d]">
      <main className="flex-1 flex flex-col">
        <Header />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <WelcomeScreen />
          ) : (
            <div className="max-w-3xl mx-auto py-6 px-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isLoading && <LoadingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <ChatInput
          prompt={prompt}
          isLoading={isLoading}
          onPromptChange={setPrompt}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
