import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';

export default function ChatWindow() {
    const messages = useSelector((state) => state.chat.messages);
    const isLoading = useSelector((state) => state.chat.isLoading);

    const endOfMessagesRef = useRef(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    return (
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`max-w-[85%] p-4 rounded-lg shadow-sm ${msg.role === 'user'
                        ? 'bg-blue-600 text-white self-end rounded-br-none'
                        : 'bg-white text-gray-800 border border-gray-200 self-start rounded-bl-none'
                        }`}
                >
                    { }
                    {msg.role === 'user' ? (
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                        <div className="prose prose-sm max-w-none">
                            <ReactMarkdown>
                                {msg.text}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            ))}

            {isLoading && (
                <div className="bg-white text-gray-800 border border-gray-200 self-start p-4 rounded-lg rounded-bl-none animate-pulse shadow-sm">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            )}

            { }
            <div ref={endOfMessagesRef} />
        </div>
    );
}