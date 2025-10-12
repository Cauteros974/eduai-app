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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)', background: '#fff' }}>
      <div style={{ padding: '10px', borderBottom: '1px solid var(--border-color)', fontWeight: 500 }}>AI-Тьютор</div>
      <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '10px',
              }}
            >
              <div style={{
                background: msg.sender === 'user' ? 'var(--primary-color)' : '#e5e7eb',
                color: msg.sender === 'user' ? '#fff' : '#111827',
                padding: '8px 12px',
                borderRadius: '12px',
                maxWidth: '80%',
              }}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && <div style={{textAlign: 'center', color: '#6b7280'}}>Тьютор думает...</div>}
      </div>
      <form onSubmit={handleSendMessage} style={{ display: 'flex', padding: '10px', gap: '10px' }}>
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
        <div style={{width: '120px'}}>
         <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};