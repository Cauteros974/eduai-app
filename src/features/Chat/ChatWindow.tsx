import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export const ChatWindow = ({ lessonContext }: { lessonContext: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const aiResponse = `This is AI's answer to your question "${userMessage.text}" in the context: "${lessonContext.substring(0, 30)}...".`;
      const aiMessage: Message = { sender: 'ai', text: aiResponse };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
        width: '600%',
        maxWidth: '1000px',
        margin: '0 auto',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        background: '#fff',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '20px',
          borderBottom: '1px solid var(--border-color)',
          fontWeight: 600,
          fontSize: '18px',
          textAlign: 'center',
          background: '#f9fafb',
        }}
      >
        AI-Tutor
      </div>

      {/* Chat messages */}
      <div
        style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                style={{
                  background: msg.sender === 'user' ? 'var(--primary-color, #6366f1)' : '#e5e7eb',
                  color: msg.sender === 'user' ? '#fff' : '#111827',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  maxWidth: '75%',
                  wordBreak: 'break-word',
                  fontSize: '15px',
                  lineHeight: 1.4,
                }}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '14px' }}>
            The tutor is thinking...
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSendMessage}
        style={{
          display: 'flex',
          padding: '10px 15px',
          borderTop: '1px solid var(--border-color)',
          background: '#f9fafb',
          gap: '10px',
        }}
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          style={{
            flex: 1,
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            padding: '10px',
          }}
        />
        <Button
          type="submit"
          style={{
            width: '100px',
            background: 'var(--primary-color, #6366f1)',
            color: '#fff',
            borderRadius: '8px',
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};