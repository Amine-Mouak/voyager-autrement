import {
  Link,
  Outlet,
  createFileRoute,
  useRouterState,
} from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { useI18n } from "@/lib/i18n";
import { seo } from "@/lib/seo";

import heroSahara from "@/assets/hero-sahara.jpg";
import sahara from "@/assets/sahara.png";
import jbelMgoun from "@/assets/jbel mgoun.png";
import jbelSaghro from "@/assets/jbel saghro.png";
import jbelSiroua from "@/assets/jbel siroua.png";
import ouedNoun from "@/assets/oued noun.png";
import randonneeCotiere from "@/assets/randonnee-cotiere.png";
import tafraout from "@/assets/tafraout.png";
import tessaout from "@/assets/tessaout.png";
import tiziNTest from "@/assets/tizi n'test.png";
import toubkal from "@/assets/toubkal.png";
import yagouZat from "@/assets/yagou-zat.png";

export const Route = createFileRoute("/circuits")({
  head: () =>
    seo(
      "/circuits",
      "Circuits et randonnées au Maroc — Voyager Autrement",
      "Explorez nos circuits au Maroc : randonnées dans l’Atlas, Jbel Siroua, Jbel Saghro, Toubkal et découverte du Sahara.",
    ),
  component: CircuitsPage,
});

const circuits = [
  {
    slug: "jbel-siroua",
    title: { fr: "Jbel Siroua", en: "Jbel Siroua", de: "Jbel Siroua", it: "Jbel Siroua" },
    place: { fr: "Anti-Atlas", en: "Anti-Atlas Mountains", de: "Anti-Atlas-Gebirge", it: "Montagne dell’Anti-Atlante" },
    text: {
      fr: "Découvrez les paysages volcaniques du Siroua, ses reliefs sauvages et l’authenticité des villages de montagne.",
      en: "Discover Siroua's volcanic landscapes, rugged mountains and authentic mountain villages.",
      de: "Entdecken Sie die vulkanischen Landschaften des Siroua, seine wilde Bergwelt und authentische Bergdörfer.",
      it: "Scopri i paesaggi vulcanici del Siroua, i suoi rilievi selvaggi e i villaggi di montagna autentici.",
    },
    image: jbelSiroua,
  },
  {
    slug: "sahara",
    title: { fr: "Sahara", en: "The Sahara", de: "Die Sahara", it: "Il Sahara" },
    place: { fr: "Sud marocain", en: "Southern Morocco", de: "Südmarokko", it: "Marocco meridionale" },
    text: {
      fr: "Partez à la découverte des grands espaces désertiques et des paysages fascinants du Sahara marocain.",
      en: "Explore vast desert spaces and the fascinating landscapes of the Moroccan Sahara.",
      de: "Erkunden Sie die weiten Wüstenlandschaften und die faszinierende Natur der marokkanischen Sahara.",
      it: "Esplora gli immensi spazi desertici e i paesaggi affascinanti del Sahara marocchino.",
    },
    image: sahara,
  },
  {
    slug: "jbel-saghro",
    title: { fr: "Jbel Saghro", en: "Jbel Saghro", de: "Jbel Saghro", it: "Jbel Saghro" },
    place: { fr: "Montagnes du Sud", en: "Southern Mountains", de: "Gebirge des Südens", it: "Montagne del sud" },
    text: {
      fr: "Explorez les reliefs rocheux du Saghro et les paysages grandioses du sud marocain.",
      en: "Explore Saghro's rocky terrain and the spectacular landscapes of southern Morocco.",
      de: "Erkunden Sie die Felslandschaften des Saghro und die beeindruckenden Weiten Südmarokkos.",
      it: "Esplora i rilievi rocciosi del Saghro e gli spettacolari paesaggi del Marocco meridionale.",
    },
    image: jbelSaghro,
  },
  {
    slug: "jbel-mgoun",
    title: { fr: "Jbel Mgoun", en: "Jbel Mgoun", de: "Jbel Mgoun", it: "Jbel Mgoun" },
    place: { fr: "Haut Atlas", en: "High Atlas", de: "Hoher Atlas", it: "Alto Atlante" },
    text: {
      fr: "Découvrez les montagnes du Haut Atlas, leurs vallées et leurs villages au caractère authentique.",
      en: "Discover the High Atlas Mountains, their valleys and their traditional villages.",
      de: "Entdecken Sie das Hohe Atlasgebirge mit seinen Tälern und ursprünglichen Dörfern.",
      it: "Scopri le montagne dell’Alto Atlante, le loro valli e i villaggi ricchi di autenticità.",
    },
    image: jbelMgoun,
  },
  {
    slug: "tizi-n-test",
    title: { fr: "Tizi N’Test", en: "Tizi N'Test", de: "Tizi N’Test", it: "Tizi N’Test" },
    place: { fr: "Haut Atlas", en: "High Atlas", de: "Hoher Atlas", it: "Alto Atlante" },
    text: {
      fr: "Parcourez une région montagneuse aux paysages variés, entre cols, vallées et villages traditionnels.",
      en: "Explore a varied mountain region of high passes, valleys and traditional villages.",
      de: "Durchqueren Sie eine abwechslungsreiche Bergregion mit Pässen, Tälern und traditionellen Dörfern.",
      it: "Attraversa una regione montuosa dai paesaggi vari, tra passi, valli e villaggi tradizionali.",
    },
    image: tiziNTest,
  },
  {
    slug: "randonnee-cotiere",
    title: { fr: "Randonnée côtière", en: "Coastal Hiking", de: "Küstenwanderung", it: "Trekking costiero" },
    place: { fr: "Littoral marocain", en: "Moroccan Coast", de: "Marokkanische Küste", it: "Costa marocchina" },
    text: {
      fr: "Découvrez les sentiers du littoral, les paysages marins et le charme de la côte marocaine.",
      en: "Discover coastal trails, seascapes and the charm of Morocco's Atlantic coastline.",
      de: "Entdecken Sie Küstenpfade, Meereslandschaften und den besonderen Charme der marokkanischen Atlantikküste.",
      it: "Scopri i sentieri costieri, i paesaggi marini e il fascino della costa atlantica marocchina.",
    },
    image: randonneeCotiere,
  },
  {
    slug: "tafraoute",
    title: { fr: "Tafraoute", en: "Tafraoute", de: "Tafraoute", it: "Tafraoute" },
    place: { fr: "Anti-Atlas", en: "Anti-Atlas Mountains", de: "Anti-Atlas-Gebirge", it: "Montagne dell’Anti-Atlante" },
    text: {
      fr: "Laissez-vous séduire par les paysages minéraux, les villages et les couleurs de la région de Tafraoute.",
      en: "Discover the rocky landscapes, traditional villages and striking colours of the Tafraoute region.",
      de: "Lassen Sie sich von den Felslandschaften, traditionellen Dörfern und Farben der Region Tafraoute begeistern.",
      it: "Lasciati conquistare dai paesaggi rocciosi, dai villaggi tradizionali e dai colori della regione di Tafraoute.",
    },
    image: tafraout,
  },
  {
    slug: "toubkal",
    title: { fr: "Toubkal", en: "Toubkal", de: "Toubkal", it: "Toubkal" },
    place: { fr: "Haut Atlas", en: "High Atlas", de: "Hoher Atlas", it: "Alto Atlante" },
    text: {
      fr: "Partez à la rencontre des paysages de haute montagne et des villages nichés au pied du massif du Toubkal.",
      en: "Explore high-mountain landscapes and villages nestled at the foot of the Toubkal massif.",
      de: "Entdecken Sie alpine Landschaften und Dörfer am Fuß des Toubkal-Massivs.",
      it: "Scopri i paesaggi d’alta montagna e i villaggi ai piedi del massiccio del Toubkal.",
    },
    image: toubkal,
  },
  {
    slug: "yagour-zat",
    title: { fr: "Yagour & Zat", en: "Yagour & Zat", de: "Yagour & Zat", it: "Yagour & Zat" },
    place: { fr: "Haut Atlas central", en: "Central High Atlas", de: "Zentraler Hoher Atlas", it: "Alto Atlante centrale" },
    text: {
      fr: "Explorez les plateaux d’altitude, les vallées et le patrimoine rural de cette région de l’Atlas.",
      en: "Explore high-altitude plateaus, valleys and the rural heritage of this Atlas region.",
      de: "Erkunden Sie Hochplateaus, Täler und das ländliche Kulturerbe dieser Atlasregion.",
      it: "Esplora gli altopiani, le valli e il patrimonio rurale di questa regione dell’Atlante.",
    },
    image: yagouZat,
  },
  {
    slug: "tessaout-ait-bouli",
    title: { fr: "Tessaout & Aït Bouli", en: "Tessaout & Aït Bouli", de: "Tessaout & Aït Bouli", it: "Tessaout & Aït Bouli" },
    place: { fr: "Haut Atlas", en: "High Atlas", de: "Hoher Atlas", it: "Alto Atlante" },
    text: {
      fr: "Découvrez les vallées de l’Atlas, leurs paysages préservés et l’architecture traditionnelle des villages.",
      en: "Discover the Atlas valleys, their unspoilt landscapes and the traditional architecture of their villages.",
      de: "Entdecken Sie die Täler des Atlas, ihre unberührten Landschaften und die traditionelle Architektur ihrer Dörfer.",
      it: "Scopri le valli dell’Atlante, i paesaggi incontaminati e l’architettura tradizionale dei villaggi.",
    },
    image: tessaout,
  },
  {
    slug: "oued-noun",
    title: { fr: "Oued Noun", en: "Oued Noun", de: "Oued Noun", it: "Oued Noun" },
    place: { fr: "Sud marocain", en: "Southern Morocco", de: "Südmarokko", it: "Marocco meridionale" },
    text: {
      fr: "Explorez les paysages du sud du Maroc, entre espaces ouverts, nature et patrimoine local.",
      en: "Explore southern Morocco's wide-open landscapes, natural beauty and local heritage.",
      de: "Entdecken Sie die weiten Landschaften Südmarokkos, seine Natur und sein lokales Kulturerbe.",
      it: "Esplora gli ampi paesaggi del Marocco meridionale, la natura e il patrimonio locale.",
    },
    image: ouedNoun,
  },
];

function CircuitsPage() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const { lang, t } = useI18n();

  if (pathname.startsWith("/circuits/")) {
    return <Outlet />;
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <img
          src={heroSahara}
          alt={lang === "fr" ? "" : lang === "en" ? "The Sahara desert in Morocco" : lang === "de" ? "Die Sahara in Marokko" : "Il deserto del Sahara in Marocco"}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="container-x relative pb-16 pt-32 text-on-image md:pb-20">
          <p className="eyebrow text-sand">
            {lang === "fr" ? "Voyager " : lang === "en" ? "Travel " : lang === "de" ? "Anders reisen " : "Viaggiare "}
            <span className="text-primary">Autrement</span>
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1] md:text-7xl">
            {t("circuits.title")}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-image/85">
            {t("circuits.text")}
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow text-primary">
              {t("circuits.eyebrow")}
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {t("circuits.sectionTitle")}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("circuits.sectionText")}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {circuits.map((circuit, index) => (
            <Reveal key={circuit.slug} delay={(index % 3) * 120}>
              <article className="group">
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={circuit.image}
                    alt={circuit.title[lang]}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <p className="eyebrow mt-5 text-muted-foreground">
                  {circuit.place[lang]}
                </p>

                <h3 className="mt-2 font-serif text-3xl">
                  {circuit.title[lang]}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {circuit.text[lang]}
                </p>

                <Link
                  to="/circuits/$slug"
                  params={{ slug: circuit.slug }}
                  className="mt-5 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-4"
                >
                  {lang === "fr" ? "Découvrir le circuit" : lang === "en" ? "Discover this tour" : lang === "de" ? "Rundreise entdecken" : "Scopri l’itinerario"}{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <img
          src={heroSahara}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-ink/65" />

        <Reveal className="container-x relative text-center text-on-image">
          <p className="eyebrow text-sand">
            {lang === "fr" ? "Votre voyage" : lang === "en" ? "Your journey" : lang === "de" ? "Ihre Reise" : "Il tuo viaggio"}
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            {t("circuits.ctaTitle")}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-on-image/85 md:text-lg">
            {t("circuits.ctaText")}
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              to="/devis"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:bg-secondary"
            >
              {t("cta.quote")}
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
