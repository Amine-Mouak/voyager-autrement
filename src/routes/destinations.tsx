
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, ImageTile, PageHero, Reveal } from "@/components/site";
import { destinations, images } from "@/lib/content";
import { seo } from "@/lib/seo";
import { useI18n, localText } from "@/lib/i18n";

export const Route = createFileRoute("/destinations")({
  head: () =>
    seo(
      "/destinations",
      "Destinations au Maroc — Voyager Autrement",
      "Découvrez Marrakech, le Sahara, le Haut Atlas, Essaouira et les plus belles destinations du Maroc.",
    ),
  component: DestinationsPage,
});

function DestinationsPage() {
  const { lang } = useI18n();


  return (
    <>
      <PageHero
        image={images.atlas}
        eyebrow={localText(lang, { fr: "Destinations", en: "Destinations", de: "Reiseziele", it: "Destinazioni" })}
        title={localText(lang, { fr: "Le Maroc, mille lieux à découvrir.", en: "Morocco, a thousand places to discover.", de: "Marokko – tausend Orte zum Entdecken.", it: "Il Marocco, mille luoghi da scoprire." })}
        text={localText(lang, { fr: "Des médinas animées au silence du désert, découvrez les multiples visages du Maroc.", en: "From vibrant medinas to the silence of the desert, discover the many faces of Morocco.", de: "Von lebhaften Medinas bis zur Stille der Wüste: Entdecken Sie die vielen Facetten Marokkos.", it: "Dalle vivaci medine al silenzio del deserto, scopri i mille volti del Marocco." })}
      />

      <section className="container-x grid gap-5 py-24 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination, i) => (
          <Reveal key={destination.name} delay={(i % 3) * 100}>
            <ImageTile
              title={destination.name}
              text={destination.text}
              image={destination.image}
            />
          </Reveal>
        ))}
      </section>

      <CtaBand image={images.essaouira} />
    </>
  );
}
