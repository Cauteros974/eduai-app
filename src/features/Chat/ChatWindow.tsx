import { useState } from "react";
import {motion, AnimatePresence } from 'framer-motion';
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

export const ChatWindow = ({ lessonContext }: { lessonContext: string }) => {
    const [ message, setMessage ] = useState<Message[]>([]);
    const [ input, setInput ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { sender: 'user', text: 'input'};
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        setTimeout(() => {
            const aiResponse = `This is AI's answer to your question "${userMessage.text}" in the context: "${lessonContext.substring(0, 30)}...".`;
            const aiMessage: Message = { sender: 'ai', text: aiResponse};
            setMessages((prev) => [..prev, aiMessage]);
            setLoading(false);
        }, 1500);
    };
}