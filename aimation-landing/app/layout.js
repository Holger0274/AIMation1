import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'KI-Beratung für KMUs | AI.mation - Transparent & ROI-fokussiert',
  description:
    'KI-Transformation für KMUs in 2-4 Wochen. Von AI Audit bis Multi-Agent-Systeme. ROI-fokussiert, transparent, agil. Jetzt kostenloses Erstgespräch!',
  keywords: [
    'KI-Beratung für KMUs',
    'AI-Transformation Mittelstand',
    'Microsoft Copilot Training',
    'Multi-Agent-Systeme',
    'KI-Automatisierung',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
