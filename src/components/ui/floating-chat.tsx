import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickQuestions = [
    "What documents do I need for a visa?",
    "How long does visa processing take?",
    "Can I change my flight dates?",
    "How do I check flight status?"
  ];

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 max-w-[calc(100vw-2rem)] z-50">
          <Card className="card-travel shadow-elegant">
            {/* Header */}
            <div className="gradient-sky p-4 text-white rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-semibold">Travel + Evans Assistant</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 bg-card">
              <div className="space-y-4">
                {/* Welcome Message */}
                <div className="space-y-2">
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm">
                      👋 Habari! I'm here to help you with your Tanzania travel needs. From visas to flights, how can I assist you today?
                    </p>
                  </div>
                </div>

                {/* Quick Questions */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium">Quick Questions:</p>
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="w-full text-left text-xs p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-smooth"
                      onClick={() => setMessage(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        // Handle send message
                        setMessage('');
                      }
                    }}
                  />
                  <Button size="sm" className="btn-travel px-3">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 btn-travel rounded-full w-14 h-14 shadow-elegant hover:shadow-glow"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </>
  );
};

export default FloatingChat;