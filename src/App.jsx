import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100 font-sans">
      
      {}
      <header className="bg-blue-600 text-white py-4 px-6 text-xl font-bold shadow-md z-10">
        React AI Chatbot
      </header>

      {}
      <ChatWindow />

      {}
      <ChatInput />
      
    </div>
  )
}

export default App;