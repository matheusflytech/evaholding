import { motion } from "framer-motion";
import evaLogo from "@/assets/eva-logo.jpeg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("chatbot-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[hsl(210_80%_55%/0.08)] blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[hsl(210_100%_80%/0.06)] blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[hsl(210_80%_55%/0.03)] blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(210 80% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 55%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <motion.img
            src={evaLogo}
            alt="Eva Holding"
            className="w-28 h-28 md:w-36 md:h-36 rounded-2xl shadow-glow object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          
          <div className="text-sm tracking-[0.3em] uppercase text-[hsl(215_20%_70%)]">
            Eva Holding
          </div>
<div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-primary-foreground leading-[1.1]">
              Automatize.{" "}
              <span className="text-gradient">Escale.</span>{" "}
              Domine.
            </h1>
            <p className="text-lg md:text-xl text-[hsl(215_20%_70%)] max-w-2xl mx-auto leading-relaxed">
              Transformamos processos manuais em máquinas de crescimento. 
              Automação inteligente para empresas que querem liderar.
            </p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button
              onClick={scrollToForm}
              className="px-8 py-4 rounded-xl font-semibold text-base bg-[hsl(210_80%_55%)] text-white hover:bg-[hsl(210_80%_50%)] transition-all duration-300 shadow-glow hover:shadow-glow-sm hover:-translate-y-0.5"
            >
              Quero Automatizar Meu Negócio
            </button>
            <a
              href="#servicos"
              className="px-8 py-4 rounded-xl font-semibold text-base border border-[hsl(215_20%_30%)] text-[hsl(215_20%_70%)] hover:border-[hsl(210_80%_55%)] hover:text-white transition-all duration-300"
            >
              Conhecer Serviços
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[hsl(215_20%_30%)] flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-[hsl(210_80%_55%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
