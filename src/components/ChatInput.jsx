import { useState } from 'react';

export default function ChatInput() {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    
    console.log("Ready to send:", text); 
    setText(''); 
  }

  return (
    <div className="p-4 bg-white border-t flex gap-2">
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type a message to the AI..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
      />
      <button 
        onClick={handleSend}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
      >
        Send
      </button>
    </div>
  );
}