import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { SparklesIcon, SendIcon } from './Icons';

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

const promptStarters = [
    "How does NFC technology work?",
    "What can I customize on my cards?",
    "What is the minimum order quantity?",
    "How long does shipping take?",
];

const FAQ: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    
    // Initialize Gemini AI
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const systemInstruction = "You are a helpful AI assistant for Streammi, a company specializing in custom NFC cards for musicians and businesses. Your purpose is to answer questions about Streammi's products (NFC cards, desk stands), services, NFC technology, card customization options, and the ordering process. Be friendly, concise, and professional. Do not answer questions that are not related to Streammi or its business. If a question is off-topic, politely decline to answer.";

    useEffect(() => {
        // Scroll to the bottom of the chat container when new messages are added
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSend = async (question: string) => {
        if (!question.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: question };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: question,
                config: {
                    systemInstruction,
                },
            });
            
            const aiMessage: Message = { role: 'assistant', content: response.text };
            setMessages(prev => [...prev, aiMessage]);

        } catch (err) {
            console.error("AI Error:", err);
            setError("Sorry, I'm having trouble connecting. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSend(input);
    };

    return (
        <section id="faq" className="py-20 bg-brand-primary-base px-4 sm:px-6"> {/* Added px-4 for mobile, sm:px-6 for larger */}
            <div className="container mx-auto"> {/* Removed px-6 here as it's now on section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4 flex items-center justify-center gap-3">
                        <SparklesIcon className="w-8 h-8 text-brand-secondary" />
                        Ask Our AI Assistant
                    </h2>
                    <p className="text-foreground max-w-2xl mx-auto">
                        Have a question? Get an instant answer from our AI-powered assistant.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-brand-primary-base/50 rounded-2xl shadow-2xl p-4 sm:p-6 border border-brand-secondary">
                    <div ref={chatContainerRef} className="h-96 overflow-y-auto pr-4 space-y-4 mb-4">
                        {messages.length === 0 && (
                            <div className="text-center text-foreground h-full flex flex-col justify-center">
                                <p className="mb-4">Ask anything about our products or services!</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {promptStarters.map((prompt) => (
                                        <button 
                                            key={prompt}
                                            onClick={() => handleSend(prompt)}
                                            className="bg-brand-primary-base p-3 rounded-lg text-sm text-foreground hover:bg-brand-secondary/30 transition-colors text-left"
                                        >
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-md p-3 rounded-xl ${msg.role === 'user' ? 'bg-brand-accent text-white' : 'bg-brand-primary-base text-foreground'}`}>
                                    <p className="whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="max-w-md p-3 rounded-xl bg-brand-primary-base text-foreground">
                                    <span className="animate-pulse">Typing...</span>
                                </div>
                            </div>
                        )}
                        {error && <p className="text-red-400 text-center">{error}</p>}
                    </div>

                    <form onSubmit={handleSubmit} className="flex items-center gap-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                            className="w-full bg-brand-primary-base border border-brand-secondary focus:ring-2 focus:ring-brand-accent focus:border-brand-accent rounded-lg py-3 px-4 text-white placeholder-foreground transition-colors"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="bg-brand-accent p-3 rounded-lg text-white hover:bg-brand-secondary disabled:bg-brand-primary-base disabled:cursor-not-allowed transition-colors flex-shrink-0">
                           <SendIcon className="w-6 h-6" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
