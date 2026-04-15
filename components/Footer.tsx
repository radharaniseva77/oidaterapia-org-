import Link from "next/link";
import { Compass } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v7a10 10 0 0 0 8.44-9.9c0-5.54-4.5-10.02-10-10.02Z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07m0-2.16c-3.26 0-3.67.01-4.95.07-4.4.2-5.91 1.7-6.11 6.11-.06 1.28-.07 1.69-.07 4.95s.01 3.67.07 4.95c.2 4.4 1.7 5.91 6.11 6.11 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.4-.2 5.91-1.7 6.11-6.11.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.4-1.7-5.91-6.11-6.11-1.28-.06-1.69-.07-4.95-.07"/>
    <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84m0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4"/>
    <circle cx="18.41" cy="5.59" r="1.44"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.5 6.18A3.02 3.02 0 0 0 21.36 4C19.46 3.5 12 3.5 12 3.5s-7.46 0-9.36.5A3.02 3.02 0 0 0 .5 6.18C0 8.07 0 12 0 12s0 3.93.5 5.82a3.02 3.02 0 0 0 2.14 2.18C4.54 20.5 12 20.5 12 20.5s7.46 0 9.36-.5a3.02 3.02 0 0 0 2.14-2.18C24 15.93 24 12 24 12s0-3.93-.5-5.82M9.54 15.57V8.43L15.82 12l-6.28 3.57z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A192F] text-white py-12 px-6 lg:px-8 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <div className="flex items-center gap-3">
            <Compass className="w-8 h-8 text-cielo" />
            <h3 className="font-heading font-bold text-2xl tracking-wide">Oida Terapia</h3>
          </div>
          <p className="text-white/70 font-sans text-sm max-w-xs leading-relaxed">
            Integrando la sabiduría milenaria y la fe sanadora para tu camino de evolución.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="font-heading font-bold text-lg mb-2 border-b border-cielo inline-block">Navegación</h4>
          <Link href="/" className="text-white/80 hover:text-cielo transition-colors font-sans text-sm">Inicio</Link>
          <Link href="/cuestionarios" className="text-white/80 hover:text-cielo transition-colors font-sans text-sm">Cuestionarios</Link>
          <Link href="/blog" className="text-white/80 hover:text-cielo transition-colors font-sans text-sm">Blog</Link>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="font-heading font-bold text-lg border-b border-cielo inline-block">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cielo hover:text-[#0A192F] transition-all hover:scale-110">
              <FacebookIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cielo hover:text-[#0A192F] transition-all hover:scale-110">
              <InstagramIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-cielo hover:text-[#0A192F] transition-all hover:scale-110">
              <YoutubeIcon />
            </a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-xs font-sans">
        &copy; {new Date().getFullYear()} Oida Terapia | Todos los derechos reservados.
      </div>
    </footer>
  );
}
