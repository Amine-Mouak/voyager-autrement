import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { seo } from "@/lib/seo";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => seo("/politique-confidentialite", "Politique de confidentialité | Voyager Autrement", "Cette page explique comment les informations transmises via les formulaires du site sont utilisées. Elle doit être complétée et validée par l’exploitant avant la mise en ligne."),
  component: Page,
});

function Page() {
  const { lang } = useI18n();
  const english = lang === "en";
  return (
    <LegalPage
      title={english ? "Privacy policy" : "Politique de confidentialité"}
      intro={english ? "This page explains how information submitted through this website’s forms is used. The operator must complete and approve it before publication." : "Cette page explique comment les informations transmises via les formulaires du site sont utilisées. Elle doit être complétée et validée par l’exploitant avant la mise en ligne."}
      sections={english ? [{ title: "Data collected", body: "Data submitted may include your name, email address, phone number, country, travel dates, number of travellers, preferences and message. Please provide only information needed to handle your enquiry." },
        { title: "Purposes and recipients", body: "Information is used to respond to enquiries and prepare travel proposals. Before publication, the operator must identify who can access the data, any form or hosting providers used, and any transfers outside Switzerland or the European Economic Area." },
        { title: "Data retention and your rights", body: "The operator must specify retention periods and how people can request access, correction or deletion under applicable law. Add a verified contact address here." }] : [{ title: "Données collectées", body: "Les formulaires peuvent demander notamment votre nom, votre adresse e-mail, votre téléphone, votre pays, vos dates de voyage, le nombre de voyageurs, vos préférences et le contenu de votre message. Ne transmettez que les informations nécessaires à votre demande." },
        { title: "Finalités et destinataires", body: "Les informations sont utilisées pour répondre aux demandes et préparer une proposition de voyage. Avant publication, l’exploitant doit préciser les personnes ou prestataires qui peuvent accéder aux données, les éventuels outils de formulaire ou d’hébergement utilisés et les éventuels transferts hors de Suisse ou de l’Espace économique européen." },
        { title: "Durée de conservation et droits", body: "L’exploitant doit préciser les durées de conservation applicables et les modalités permettant de demander l’accès, la rectification ou l’effacement des données, selon le droit applicable. Ajouter ici une adresse de contact dédiée et vérifiée." }]}
    />
  );
}
