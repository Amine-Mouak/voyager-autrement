
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Reveal } from "@/components/site";
import { images } from "@/lib/content";
import { seo } from "@/lib/seo";
import { useI18n, localText } from "@/lib/i18n";

export const Route = createFileRoute("/experiences")({
  head: () =>
    seo(
      "/experiences",
      "Souvenirs de voyage dans le désert marocain — Voyager Autrement",
      "Découvrez une galerie de 11 photos souvenirs d’un voyage dans le désert marocain : paysages, instants de voyage et souvenirs authentiques.",
    ),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const { lang } = useI18n();


  return (
    <>
      <PageHero
        image={images.desertCamp}
        eyebrow={localText(lang, { fr: "Expériences", en: "Experiences", de: "Erlebnisse", it: "Esperienze" })}
        title={localText(lang, { fr: "Instants de voyage, souvenirs du désert.", en: "Travel moments, desert memories.", de: "Reisemomente und Erinnerungen an die Wüste.", it: "Momenti di viaggio, ricordi del deserto." })}
        text={localText(lang, { fr: "Quelques instants capturés au fil d’un voyage dans le désert marocain. Des paysages, des rencontres et des souvenirs qui racontent la beauté du voyage, sans avoir besoin de mots.", en: "A collection of moments captured during a journey through the Moroccan desert. Landscapes, encounters and memories that speak for themselves.", de: "Eine Sammlung besonderer Augenblicke einer Reise durch die marokkanische Wüste. Landschaften, Begegnungen und Erinnerungen, die für sich selbst sprechen.", it: "Una raccolta di momenti vissuti durante un viaggio nel deserto marocchino. Paesaggi, incontri e ricordi che parlano da soli." })}
      />

      <section
        aria-label={localText(lang, { fr: "Galerie de souvenirs de voyage", en: "Travel photo memories", de: "Reisefotogalerie", it: "Galleria di ricordi di viaggio" })}
        className="container-x grid gap-5 py-24 sm:grid-cols-2 lg:grid-cols-3"
      >
        {Array.from({ length: 11 }, (_, index) => {
          const number = index + 1;
          return (
            <Reveal key={number} delay={(index % 3) * 100}>
              <figure className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={`/${number}.jpg`}
                  alt={localText(lang, { fr: `Souvenir de voyage dans le désert marocain, photo ${number}`, en: `Travel memory in the Moroccan desert, photograph ${number}`, de: `Reiseerinnerung aus der marokkanischen Wüste, Foto ${number}`, it: `Ricordo di viaggio nel deserto marocchino, foto ${number}` })}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>
          );
        })}
      </section>

      <CtaBand image={images.gastronomy} />
    </>
  );
}
