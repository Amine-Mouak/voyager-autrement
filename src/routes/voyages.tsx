
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, JourneyCard, PageHero } from "@/components/site";
import { images, journeys } from "@/lib/content";
import { seo } from "@/lib/seo";
import { useI18n, localText } from "@/lib/i18n";

export const Route = createFileRoute("/voyages")({
  head: () =>
    seo(
      "/voyages",
      "Circuits et voyages organisés au Maroc — Voyager Autrement",
      "Marrakech & Atlas, désert du Sahara, villes impériales, côte atlantique ou voyage sur mesure : découvrez nos circuits au Maroc.",
    ),
  component: VoyagesPage,
});

function VoyagesPage() {
  const { lang } = useI18n();


  return (
    <>
      <PageHero
        image={images.marrakech}
        eyebrow={localText(lang, { fr: "Nos voyages", en: "Our journeys", de: "Unsere Reisen", it: "I nostri viaggi" })}
        title={localText(lang, { fr: "Des itinéraires pensés pour vous.", en: "Journeys designed around you.", de: "Reiserouten ganz nach Ihren Wünschen.", it: "Itinerari pensati per te." })}
        text={localText(lang, { fr: "Inspirez-vous de nos voyages — chacun peut être entièrement adapté à vos envies.", en: "Find inspiration in our journeys — each one can be tailored to your preferences.", de: "Lassen Sie sich von unseren Reisen inspirieren – jede Route lässt sich an Ihre Wünsche anpassen.", it: "Lasciati ispirare dai nostri viaggi: ogni itinerario può essere adattato ai tuoi desideri." })}
      />

      <section className="container-x py-24">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {journeys.map((j, i) => (
            <JourneyCard key={j.slug} j={j} i={i} />
          ))}
        </div>
      </section>

      <CtaBand image={images.heroSahara} />
    </>
  );
}
