"use client";
import { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User } from 'lucide-react';

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ prompt: userMsg }),
      });
      const data = await res.text();
      setMessages(prev => [...prev, { role: 'assistant', content: data }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Beeee-rror de conexión. Intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">

      {isOpen && (
        <div className="w-[450px] h-[650px] mb-2 flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-200 animate-in slide-in-from-bottom-5">

          <div className="p-5 bg-slate-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🐐</span>
              <div>
                <h3 className="font-bold text-base">Kodi AI</h3>
                <span className="text-xs text-green-400 block">● En línea</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full"><X size={24} /></button>
          </div>

 
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50 text-black">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full opacity-30 text-center">
                <Bot size={48} className="mb-2" />
                <p className="text-sm font-medium">Beeee-nvenido. ¿En qué te ayudo?</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-slate-900 text-white' : 'bg-blue-100 text-blue-600'}`}>
                    {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-white border text-slate-800 rounded-tl-none shadow-sm'}`}>
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 p-4 bg-white border w-fit rounded-2xl animate-pulse">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>


          <form onSubmit={handleSend} className="p-4 bg-white border-t">
            <div className="relative">
              <input 
                className="w-full pl-4 pr-12 py-4 bg-slate-100 rounded-xl outline-none text-black focus:ring-2 focus:ring-slate-200 transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu duda aquí..."
              />
              <button 
                type="submit" 
                disabled={isLoading} 
                className="absolute right-2 top-2 p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors disabled:bg-slate-300"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}


      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-white border-4 border-slate-900'
        }`}
      >
        {isOpen ? "✕" : "🐐"}
      </button>
    </div>
  );
}