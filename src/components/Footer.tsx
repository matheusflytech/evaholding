import evaLogo from "@/assets/eva-logo.jpeg";

const Footer = () => (
  <footer className="bg-[hsl(220_60%_8%)] border-t border-[hsl(215_20%_18%)] py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={evaLogo} alt="Eva Holding" className="w-10 h-10 rounded-lg object-cover" />
          <span className="font-bold text-primary-foreground text-lg">Eva Holding</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#servicos" className="text-sm text-[hsl(215_20%_60%)] hover:text-white transition-colors">Serviços</a>
          <a href="#chatbot-form" className="text-sm text-[hsl(215_20%_60%)] hover:text-white transition-colors">Contato</a>
          <a
            href="https://wa.me/5521969156116?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Eva%20Holding!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[hsl(210_80%_55%)] hover:text-[hsl(210_80%_65%)] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-[hsl(215_20%_15%)] text-center">
        <p className="text-xs text-[hsl(215_20%_40%)]">© 2025 Eva Holding. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
