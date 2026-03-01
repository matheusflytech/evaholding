import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import italoImg from "@/assets/italo-marsili.webp";
import joseImg from "@/assets/jose-roberto.jpg";
import vitorImg from "@/assets/vitor-becker.jpg";

const clients = [
  {
    name: "Italo Marsili",
    role: "Médico & Escritor",
    image: italoImg,
    quote: "FMA - Faculdade Mar Atlântico"
  },
  {
    name: "José Roberto Mello Porto",
    role: "Defensor Público & Empresário",
    image: joseImg,
    quote: "EAA - Escola Até a Aprovação"
  },
  {
    name: "Vitor Becker",
    role: "Delegado & Empresário",
    image: vitorImg,
    quote: "EAAD - Escola Até a Aprovação Delta"
  },
];

const PortfolioSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(210_80%_55%)] mb-3">Portfólio</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Quem confia na Eva</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {clients.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-border bg-card p-8 text-center hover:border-[hsl(210_80%_55%/0.3)] hover:shadow-glow-sm transition-all duration-300"
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-[hsl(210_80%_55%/0.3)]"
              loading="lazy"
            />
            <h3 className="font-bold text-foreground">{c.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{c.role}</p>
            <Quote className="w-6 h-6 text-[hsl(210_80%_55%/0.2)] mx-auto mt-4 mb-2" />
            <p className="text-muted-foreground text-sm leading-relaxed font-semibold">{c.quote}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
