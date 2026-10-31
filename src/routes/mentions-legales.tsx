import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { seo } from "@/lib/seo";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/mentions-legales")({
  head: () => seo("/mentions-legales", "Mentions légales | Voyager Autrement", "Les informations d’identification de l’exploitant doivent être vérifiées et complétées avant publication."),
  component: Page,
});

function Page() {
  const { lang } = useI18n();
  const english = lang === "en";
  return (
    <LegalPage
      title={english ? "Legal notice" : "Mentions légales"}
      intro={english ? "The operator’s identification details must be verified and completed before publication." : "Les informations d’identification de l’exploitant doivent être vérifiées et complétées avant publication."}
      sections={english ? [{ title: "Website operator", body: "Legal business name: TO BE COMPLETED.\\nLegal form and registration number: TO BE COMPLETED.\\nRegistered address: TO BE COMPLETED.\\nEmail and telephone: TO BE VERIFIED." },
        { title: "Editorial responsibility and hosting", body: "Publication manager: TO BE COMPLETED.\\nWebsite host: Vercel (confirm against the production setup); contact details: to be completed." }] : [{ title: "Éditeur du site", body: "Nom légal de la société ou de l’exploitant : À COMPLÉTER.\\nForme juridique et numéro d’immatriculation : À COMPLÉTER.\\nAdresse officielle : À COMPLÉTER.\\nE-mail et téléphone : À VÉRIFIER." },
        { title: "Responsabilité éditoriale et hébergement", body: "Responsable de publication : À COMPLÉTER.\\nHébergeur du site : Vercel (à confirmer avec la configuration de production), coordonnées : à compléter." }]}
    />
  );
}
