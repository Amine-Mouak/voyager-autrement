import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { seo } from "@/lib/seo";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/politique-cookies")({
  head: () => seo("/politique-cookies", "Politique des cookies | Voyager Autrement", "Les cookies et technologies similaires doivent être décrits selon les outils réellement installés sur le site. Cette page ne présume pas que des outils d’analyse ou de publicité sont activés."),
  component: Page,
});

function Page() {
  const { lang } = useI18n();
  const english = lang === "en";
  return (
    <LegalPage
      title={english ? "Cookie policy" : "Politique des cookies"}
      intro={english ? "Cookies and similar technologies must be described according to the tools actually installed on the website. This page does not assume analytics or advertising tools are enabled." : "Les cookies et technologies similaires doivent être décrits selon les outils réellement installés sur le site. Cette page ne présume pas que des outils d’analyse ou de publicité sont activés."}
      sections={english ? [{ title: "How the website works", body: "The website may use technical elements required for its operation. The operator must check cookies and storage actually set by the site, hosting provider, forms, analytics and third-party services." },
        { title: "Your choices and cookie management", body: "If non-essential cookies are used, describe their purpose, duration, providers and how consent is managed under applicable rules. Do not treat this page as proof of compliance before completing that audit." }] : [{ title: "Fonctionnement du site", body: "Le site peut utiliser des éléments techniques nécessaires à son fonctionnement. L’exploitant doit vérifier les cookies et stockages réellement déposés par le site, son hébergeur, les formulaires, les outils statistiques et les services tiers." },
        { title: "Choix et gestion", body: "Si des cookies non essentiels sont utilisés, préciser leur finalité, leur durée, les fournisseurs concernés et la manière de gérer le consentement conformément aux règles applicables. Ne pas publier cette page comme preuve de conformité avant cet audit." }]}
    />
  );
}
