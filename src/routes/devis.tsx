
import { createFileRoute } from "@tanstack/react-router";
import { QuoteForm } from "@/components/forms";
import { images } from "@/lib/content";
import { seo } from "@/lib/seo";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/devis")({
  head: () =>
    seo(
      "/devis",
      "Demander un devis — Voyage sur mesure au Maroc | Voyager Autrement",
      "Décrivez votre voyage idéal au Maroc et recevez une proposition personnalisée de notre équipe.",
    ),
  component: DevisPage,
});

function DevisPage() {
  const { t, lang } = useI18n();

  return (
    <section className="grid lg:grid-cols-[1fr_1.3fr]">
      <div className="relative hidden min-h-screen lg:block">
        <img
          src={images.riad}
          alt={lang === "en" ? "Moroccan riad" : "Riad marocain"}
          className="sticky top-0 h-screen w-full object-cover"
        />
      </div>

      <div className="px-5 pb-24 pt-32 md:px-12 lg:px-16 lg:pt-36">
        <p className="eyebrow text-primary">{t("quote.eyebrow")}</p>

        <h1 className="mt-4 text-5xl leading-[1] md:text-6xl">
          {t("quote.title")}
        </h1>

        <p className="mt-5 max-w-lg text-muted-foreground">
          {t("quote.text")}
        </p>

        <div className="mt-12">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
