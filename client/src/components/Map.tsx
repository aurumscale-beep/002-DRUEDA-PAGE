/*
  Versão portátil: usa incorporação pública do Google Maps, sem chave de API
  nem proxy Manus. Funciona em hospedagens estáticas como Cloudflare Pages,
  Netlify, Vercel e GitHub Pages.
*/

interface MapViewProps {
  className?: string;
}

export function MapView({ className = "" }: MapViewProps) {
  return (
    <iframe
      title="Localização da clínica UEDA Odontologia Integrada"
      src="https://www.google.com/maps?q=Avenida%20Benedito%20de%20Andrade%2C%2054A%2C%20Pirituba%2C%20S%C3%A3o%20Paulo&output=embed"
      className={`h-[500px] w-full border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
