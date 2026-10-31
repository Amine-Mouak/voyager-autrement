import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { seo } from "@/lib/seo";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/conditions-generales")({
  head: () => seo("/conditions-generales", "Conditions générales | Voyager Autrement", "Les conditions de réservation et de vente doivent refléter exactement les pratiques de l’organisateur. Ce document est une trame à compléter et à faire vérifier avant toute réservation."),
  component: Page,
});

function Page() {
  const { lang } = useI18n();
  const english = lang === "en";
  return (
    <LegalPage
      title={english ? "Terms and conditions" : "Conditions générales"}
      intro={english ? "Booking and sales terms must accurately reflect the organiser’s practices. This is a draft framework to complete and review before accepting bookings." : "Les conditions de réservation et de vente doivent refléter exactement les pratiques de l’organisateur. Ce document est une trame à compléter et à faire vérifier avant toute réservation."}
      sections={english ? [{ title: "Booking and payment", body: "To complete: booking steps, confirmation, deposit, payment deadlines, payment methods, currency and documents supplied to travellers." },
        { title: "Changes and cancellations", body: "To complete: changes, cancellation by the traveller or organiser, applicable fees, refunds and exceptional circumstances." },
        { title: "Services and responsibilities", body: "To complete: included and excluded services, role of guides and local providers, physical requirements, insurance, safety, complaints and applicable law." }] : [{ title: "Réservation et paiement", body: "À compléter : étapes de réservation, confirmation, acompte, échéances, moyens de paiement, devise et documents remis au voyageur." },
        { title: "Modification et annulation", body: "À compléter : conditions de modification, annulation par le voyageur ou l’organisateur, frais éventuels, remboursements et conséquences des événements exceptionnels." },
        { title: "Prestations et responsabilités", body: "À compléter : prestations incluses et exclues, rôle des guides et prestataires locaux, exigences physiques, assurances, sécurité, réclamations et droit applicable." }]}
    />
  );
}
