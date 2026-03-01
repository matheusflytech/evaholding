import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowRight, Loader2, MessageCircle } from "lucide-react";
import { z } from "zod";

const questions = [
  { key: "nome", label: "Qual seu nome?", placeholder: "Seu nome completo" },
  { key: "empresa", label: "Qual o nome da sua empresa?", placeholder: "Nome da empresa" },
  { key: "nicho", label: "Qual seu nicho de atuação?", placeholder: "Ex: Clínica, Advocacia, Marketing..." },
  { key: "desafio", label: "Qual seu maior desafio hoje?", placeholder: "Descreva brevemente" },
  { key: "faturamento", label: "Qual seu faturamento mensal aproximado?", placeholder: "Ex: R$ 50.000" },
];

const formSchema = z.object({
  nome: z.string().trim().min(1).max(100),
  empresa: z.string().trim().min(1).max(100),
  nicho: z.string().trim().min(1).max(100),
  desafio: z.string().trim().min(1).max(500),
  faturamento: z.string().trim().min(1).max(50),
});

const WEBHOOK_URL = "https://matheusintegrations.app.n8n.cloud/webhook/formseva";
const WHATSAPP_URL = "https://wa.me/5521969156116?text=";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Acabei de preencher o formulário no site da Eva Holding e gostaria de saber mais sobre como a automação pode ajudar meu negócio. Pode me ajudar?"
);

const ChatbotForm = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentInput, setCurrentInput] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleNext = async () => {
    const value = currentInput.trim();
    if (!value) return;

    const newAnswers = { ...answers, [questions[step].key]: value };
    setAnswers(newAnswers);
    setCurrentInput("");

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Submit
      const result = formSchema.safeParse(newAnswers);
      if (!result.success) {
        setError("Por favor, preencha todos os campos corretamente.");
        return;
      }
      setSending(true);
      setError("");
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(result.data),
        });
        setDone(true);
      } catch {
        setError("Erro ao enviar. Tente novamente.");
      } finally {
        setSending(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleNext();
  };

  return (
    <section id="chatbot-form" className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-[hsl(210_80%_55%/0.05)] blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(210_80%_55%)] mb-3">Vamos conversar</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Pronto para automatizar?</h2>
          <p className="text-[hsl(215_20%_60%)] mt-4 max-w-lg mx-auto">Responda algumas perguntas rápidas e entraremos em contato.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="rounded-2xl border border-[hsl(215_20%_25%)] bg-[hsl(220_50%_10%/0.8)] backdrop-blur p-6 md:p-8">
            {/* Progress */}
            {!done && (
              <div className="flex gap-1.5 mb-8">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i <= step ? "bg-[hsl(210_80%_55%)]" : "bg-[hsl(215_20%_25%)]"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Chat messages */}
            <div className="min-h-[200px] flex flex-col justify-end">
              <AnimatePresence mode="wait">
                {!done ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Previous answers */}
                    {Object.entries(answers).map(([key, val]) => (
                      <div key={key} className="flex flex-col gap-2">
                        <div className="flex items-start gap-2">
                          <MessageCircle className="w-4 h-4 text-[hsl(210_80%_55%)] mt-1 shrink-0" />
                          <p className="text-sm text-[hsl(215_20%_60%)]">
                            {questions.find(q => q.key === key)?.label}
                          </p>
                        </div>
                        <p className="text-sm text-primary-foreground pl-6 font-medium">{val}</p>
                      </div>
                    ))}

                    {/* Current question */}
                    <div className="flex items-start gap-2">
                      <MessageCircle className="w-4 h-4 text-[hsl(210_80%_55%)] mt-1 shrink-0" />
                      <p className="text-sm text-primary-foreground font-medium">{questions[step].label}</p>
                    </div>

                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={questions[step].placeholder}
                        maxLength={500}
                        className="flex-1 bg-[hsl(220_50%_14%)] border border-[hsl(215_20%_25%)] rounded-xl px-4 py-3 text-sm text-primary-foreground placeholder:text-[hsl(215_20%_40%)] focus:outline-none focus:border-[hsl(210_80%_55%)] transition-colors"
                        autoFocus
                      />
                      <button
                        onClick={handleNext}
                        disabled={!currentInput.trim() || sending}
                        className="w-12 h-12 rounded-xl bg-[hsl(210_80%_55%)] text-white flex items-center justify-center hover:bg-[hsl(210_80%_50%)] disabled:opacity-40 transition-all shrink-0"
                      >
                        {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : step < questions.length - 1 ? <ArrowRight className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                      </button>
                    </div>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[hsl(140_60%_45%/0.15)] flex items-center justify-center mx-auto">
                      <Send className="w-7 h-7 text-[hsl(140_60%_45%)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-2">Enviado com sucesso!</h3>
                      <p className="text-sm text-[hsl(215_20%_60%)]">Agora converse diretamente com nossa equipe no WhatsApp.</p>
                    </div>
                    <a
                      href={`${WHATSAPP_URL}${WHATSAPP_MSG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-[hsl(140_60%_40%)] text-white hover:bg-[hsl(140_60%_35%)] transition-all shadow-lg"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Chamar no WhatsApp
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatbotForm;
