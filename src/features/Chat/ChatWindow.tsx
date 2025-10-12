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
    }
}