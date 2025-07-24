import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// English and Swahili FAQs
const faqs = [
  {
    en: "What documents do I need for a visa?",
    sw: "Ninahitaji nyaraka gani kupata visa?",
    answer_en: "You typically need a valid passport, recent photos, proof of travel, and sometimes an invitation letter.",
    answer_sw: "Kwa kawaida unahitaji pasi halali, picha za hivi karibuni, uthibitisho wa safari, na wakati mwingine barua ya mwaliko."
  },
  {
    en: "How long does visa processing take?",
    sw: "Mchakato wa kupata visa huchukua muda gani?",
    answer_en: "Visa processing times vary by country, but usually range from a few days to several weeks.",
    answer_sw: "Muda wa kuchakata visa hutofautiana kwa nchi, lakini kawaida ni kati ya siku chache hadi wiki kadhaa."
  },
  {
    en: "Can I change my flight dates?",
    sw: "Naweza kubadilisha tarehe za safari yangu?",
    answer_en: "Most airlines allow changes with a fee. Check your ticket rules or contact the airline.",
    answer_sw: "Mashirika mengi ya ndege huruhusu kubadilisha kwa ada. Angalia masharti ya tiketi yako au wasiliana na shirika la ndege."
  },
  {
    en: "How do I check flight status?",
    sw: "Ninawezaje kuangalia hali ya ndege?",
    answer_en: "Visit the airline's website or use our Flight Search feature to check real-time status.",
    answer_sw: "Tembelea tovuti ya shirika la ndege au tumia huduma yetu ya kutafuta safari ili kuona hali ya ndege moja kwa moja."
  }
];

// Detect Swahili (very basic, for MVP)
function isSwahili(text: string) {
  const swahiliWords = ["nini", "kupata", "muda", "tarehe", "safari", "ndege", "visa", "ninawezaje", "mchakato", "kuchakata", "chini", "kwa", "ya", "au", "barua"];
  return swahiliWords.some(word => text.toLowerCase().includes(word));
}

const quickQuestionsEn = faqs.map(q => q.en);
const quickQuestionsSw = faqs.map(q => q.sw);

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<{ from: "user" | "bot", text: string }[]>([]);
  // Language auto-detect or let user choose in future
  function handleSend() {
    if (!message.trim()) return;
    setHistory(h => [...h, { from: "user", text: message }]);
    const sw = isSwahili(message);
    const faq = faqs.find(f =>
      (sw ? f.sw : f.en).toLowerCase() === message.trim().toLowerCase()
    );
    const answer = faq
      ? (sw ? faq.answer_sw : faq.answer_en)
      : sw
        ? "Samahani, sina jibu kwa hilo. Tafadhali angalia ukurasa wa Maswali ya Visa au wasiliana na msaada."
        : "Sorry, I don't have an answer for that. Please check our Visa Info page or contact support.";
    setHistory(h => [...h, { from: "bot", text: answer }]);
    setMessage('');
  }

  // Quick questions auto-switch based on last message language or default to English
  const lastUserMsg = history.reverse().find(msg => msg.from === "user")?.text || "";
  const isLastSwahili = isSwahili(lastUserMsg);

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 max-w-[calc(100vw-2rem)] z-50">
          <Card className="card-travel shadow-elegant">
            <div className="gradient-sky p-4 text-white rounded-t-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Ask Skyways / Uliza Skyways</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-white rounded-b-xl flex flex-col gap-2">
              <div className="flex flex-col gap-2 max-h-48 overflow-y-auto mb-2">
                {history.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`rounded px-2 py-1 text-sm ${msg.from === "user" ? "bg-sky-100 self-end" : "bg-gray-100 self-start"}`}>
                    {msg.text}
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  {(isLastSwahili ? quickQuestionsSw : quickQuestionsEn).map((q, i) => (
                    <button
                      key={i}
                      className="w-full text-left text-xs p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-smooth"
                      onClick={() => { setMessage(q); }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message... / Andika ujumbe wako..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="flex-1"
                  onKeyDown={e => {
                    if (e.key === "Enter") handleSend();
                  }}
                />
                <Button size="sm" className="btn-travel px-3" onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(v => !v)}
        className="fixed bottom-4 right-4 rounded-full size-14 z-50 shadow-lg gradient-sky flex items-center justify-center">
        <MessageCircle className="w-8 h-8 text-white" />
      </Button>
    </>
  );
};

export default FloatingChat;
