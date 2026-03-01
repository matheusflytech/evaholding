import { motion } from "framer-motion";
import { MessageSquare, Bot, Target, BarChart3, Megaphone, Rocket } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "Automação de WhatsApp", desc: "Respostas automáticas, funis de vendas e atendimento que nunca para." },
  { icon: Bot, title: "Agente de Atendimento IA", desc: "Atendimento 24/7 inteligente que resolve sem intervenção humana." },
  { icon: Target, title: "Segmentação de Leads", desc: "Os leads certos, no momento certo, com a mensagem certa." },
  { icon: BarChart3, title: "Dashboards Interativos", desc: "Métricas em tempo real para decisões baseadas em dados." },
  { icon: Megaphone, title: "Automação de Marketing", desc: "Campanhas no piloto automático com personalização em escala." },
  { icon: Rocket, title: "Automação para Infoprodutos", desc: "Funis, lançamentos e recuperação de carrinho automatizados." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 md:py-32 bg-background relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(210_80%_55%)] mb-3">O que fazemos</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Soluções que geram resultado</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative p-6 rounded-2xl border border-border bg-card hover:border-[hsl(210_80%_55%/0.4)] hover:shadow-glow-sm transition-all duration-300 cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-[hsl(210_80%_55%/0.1)] flex items-center justify-center mb-4 group-hover:bg-[hsl(210_80%_55%/0.2)] transition-colors">
              <s.icon className="w-6 h-6 text-[hsl(210_80%_55%)]" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
