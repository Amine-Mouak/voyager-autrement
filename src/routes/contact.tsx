
import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/forms";
import { Btn } from "@/components/site";
import { seo } from "@/lib/seo";
import { useI18n, localText } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "/contact",
      "Contact — Voyager Autrement, voyages au Maroc depuis la Suisse",
      "Une question sur un voyage au Maroc ? Contactez notre équipe basée en Suisse.",
    ),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useI18n();


  return (
    <section className="container-x grid gap-16 pb-24 pt-36 md:grid-cols-[1fr_1.4fr] md:pt-44">
      <div>
        <p className="eyebrow text-primary">Contact</p>

        <h1 className="mt-4 text-5xl leading-[1] md:text-7xl">
          {localText(lang, { fr: "Parlons de votre voyage.", en: "Let's talk about your trip.", de: "Sprechen wir über Ihre Reise.", it: "Parliamo del tuo viaggio." })}
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          {localText(lang, { fr: "Une question, une idée, une envie ? Écrivez-nous, nous vous répondons personnellement.", en: "A question, an idea, a travel dream? Write to us and we'll reply personally.", de: "Eine Frage, eine Idee oder ein Reisetraum? Schreiben Sie uns – wir antworten persönlich.", it: "Una domanda, un’idea o un sogno di viaggio? Scrivici, ti risponderemo personalmente." })}
        </p>

        {/* Placeholder contact details — replace with real information */}
        <dl className="mt-10 space-y-5 text-sm">
          <div>
            <dt className="eyebrow text-muted-foreground">E-mail</dt>
            <dd className="mt-1 font-serif text-2xl">
              contact@voyager-autrement.ch
            </dd>
          </div>

          <div>
            <dt className="eyebrow text-muted-foreground">
              {localText(lang, { fr: "Téléphone", en: "Phone", de: "Telefon", it: "Telefono" })}
            </dt>
            <dd className="mt-1 font-serif text-2xl">
              +41 779767613
            </dd>
          </div>

          <div>
            <dt className="eyebrow text-muted-foreground">
              {localText(lang, { fr: "Adresse", en: "Address", de: "Adresse", it: "Indirizzo" })}
            </dt>
            <dd className="mt-1 font-serif text-2xl">
              "Auberge restaurant Souktana, Taliouine, province de Taroudant."
            </dd>
          </div>
        </dl>

        <Btn to="/devis" variant="outline" className="mt-10">
          {localText(lang, { fr: "Demander un devis détaillé", en: "Request a detailed quote", de: "Detailliertes Angebot anfragen", it: "Richiedi un preventivo dettagliato" })}
        </Btn>
      </div>

      <div className="rounded-sm bg-card p-6 shadow-soft md:p-10">
        <ContactForm />
      </div>
    </section>
  );
}
