import { motion } from "framer-motion";
import { Stethoscope, Scale, Building2, Megaphone, GraduationCap } from "lucide-react";

const niches = [
  { icon: Stethoscope, title: "Clínicas e Saúde", desc: "Agendamento, confirmação e follow-up automatizados." },
  { icon: Scale, title: "Advocacia", desc: "Captação de clientes e gestão de processos com IA." },
  { icon: Building2, title: "Pequenos e Médios Empresários", desc: "Automatize o operacional e foque no estratégico." },
  { icon: Megaphone, title: "Empresas de Marketing", desc: "Escale a entrega com automações white-label." },
  { icon: GraduationCap, title: "Infoprodutores", desc: "Lançamentos, funis e suporte no piloto automático." },
];

const NichesSection = () => (
  <section className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: "radial-gradient(hsl(210 80% 55%) 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }} />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(210_80%_55%)] mb-3">Nichos</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Quem a Eva atende</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {niches.map((n, i) => (
          <motion.div
            key={n.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-col items-center text-center p-8 rounded-2xl bg-[hsl(220_50%_12%/0.6)] border border-[hsl(215_20%_25%)] backdrop-blur hover:border-[hsl(210_80%_55%/0.5)] hover:shadow-glow-sm transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-[hsl(210_80%_55%/0.1)] flex items-center justify-center mb-5 group-hover:bg-[hsl(210_80%_55%/0.2)] transition-colors">
              <n.icon className="w-7 h-7 text-[hsl(210_80%_55%)]" />
            </div>
            <h3 className="text-base font-bold text-primary-foreground mb-2">{n.title}</h3>
            <p className="text-sm text-[hsl(215_20%_60%)] leading-relaxed">{n.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NichesSection;
