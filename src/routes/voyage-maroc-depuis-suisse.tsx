
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Reveal, Btn } from "@/components/site";
import { images } from "@/lib/content";
import { seo } from "@/lib/seo";
import { useI18n, localText } from "@/lib/i18n";

export const Route = createFileRoute("/voyage-maroc-depuis-suisse")({
  head: () =>
    seo(
      "/voyage-maroc-depuis-suisse",
      "Voyage au Maroc depuis la Suisse | Circuits sur mesure",
      "Vous préparez un voyage au Maroc depuis la Suisse ? Découvrez nos circuits dans le désert, l'Atlas et les villes marocaines, avec un accompagnement personnalisé.",
    ),
  component: VoyageMarocDepuisSuissePage,
});

const advantages = [
  {
    fr: "Un voyage adapté à vos envies",
    en: "A journey tailored to your wishes",
    de: "Eine Reise nach Ihren Wünschen",
    it: "Un viaggio su misura per te",
    text: {
      fr: "Un itinéraire pensé selon vos dates, votre rythme, vos centres d'intérêt et votre budget.",
      en: "An itinerary designed around your dates, pace, interests and budget.",
      de: "Eine Reiseroute passend zu Ihren Reisedaten, Ihrem Tempo, Ihren Interessen und Ihrem Budget.",
      it: "Un itinerario pensato in base alle tue date, ai tuoi ritmi, interessi e budget.",
    },
  },
  {
    fr: "Une découverte authentique du Maroc",
    en: "An authentic discovery of Morocco",
    de: "Marokko authentisch entdecken",
    it: "Alla scoperta del Marocco autentico",
    text: {
      fr: "Des montagnes de l'Atlas aux paysages du Sahara, découvrez différentes facettes du pays.",
      en: "From the Atlas Mountains to the Sahara, discover the many sides of the country.",
      de: "Entdecken Sie die Vielfalt des Landes – vom Atlasgebirge bis zur Sahara.",
      it: "Dalle montagne dell'Atlante ai paesaggi del Sahara, scopri le diverse sfaccettature del paese.",
    },
  },
  {
    fr: "Un accompagnement organisé",
    en: "Organised travel support",
    de: "Organisierte Reisebegleitung",
    it: "Un accompagnamento organizzato",
    text: {
      fr: "La préparation de votre projet est accompagnée et les réservations sont assurées par notre partenaire touristique agréé au Maroc.",
      en: "Your travel project is supported, with bookings handled by our licensed tourism partner in Morocco.",
      de: "Ihr Reiseprojekt wird begleitet. Die Buchungen übernimmt unser zugelassener Tourismuspartner in Marokko.",
      it: "Il tuo progetto di viaggio è seguito e le prenotazioni sono gestite dal nostro partner turistico autorizzato in Marocco.",
    },
  },
];

const experiences = [
  {
    title: {
      fr: "Le désert du Sahara",
      en: "The Sahara Desert",
      de: "Die Sahara",
      it: "Il deserto del Sahara",
    },
    text: {
      fr: "Explorez les dunes, les vallées et les paysages du sud marocain.",
      en: "Explore the dunes, valleys and landscapes of southern Morocco.",
      de: "Entdecken Sie Dünen, Täler und Landschaften im Süden Marokkos.",
      it: "Esplora dune, valli e paesaggi del sud del Marocco.",
    },
  },
  {
    title: {
      fr: "Les montagnes de l'Atlas",
      en: "The Atlas Mountains",
      de: "Das Atlasgebirge",
      it: "Le montagne dell'Atlante",
    },
    text: {
      fr: "Partez à la découverte des villages, des sentiers et des grands paysages de montagne.",
      en: "Discover mountain villages, hiking trails and spectacular landscapes.",
      de: "Entdecken Sie Bergdörfer, Wanderwege und beeindruckende Landschaften.",
      it: "Scopri villaggi di montagna, sentieri e paesaggi spettacolari.",
    },
  },
  {
    title: {
      fr: "Les villes marocaines",
      en: "Moroccan Cities",
      de: "Marokkanische Städte",
      it: "Le città marocchine",
    },
    text: {
      fr: "Découvrez les médinas, l'architecture, les marchés et le patrimoine marocain.",
      en: "Discover medinas, architecture, markets and Moroccan heritage.",
      de: "Entdecken Sie Medinas, Architektur, Märkte und das marokkanische Kulturerbe.",
      it: "Scopri medine, architettura, mercati e patrimonio marocchino.",
    },
  },
];

const faqs = [
  {
    q: {
      fr: "Peut-on organiser un voyage au Maroc depuis la Suisse ?",
      en: "Can I organise a trip to Morocco from Switzerland?",
      de: "Kann ich eine Marokkoreise von der Schweiz aus organisieren?",
      it: "È possibile organizzare un viaggio in Marocco dalla Svizzera?",
    },
    a: {
      fr: "Oui. Vous pouvez nous présenter votre projet, vos dates et vos envies. Nous vous accompagnons dans sa préparation avec notre partenaire touristique au Maroc.",
      en: "Yes. Tell us about your plans, dates and interests. We help prepare your trip with our tourism partner in Morocco.",
      de: "Ja. Teilen Sie uns Ihre Pläne, Reisedaten und Wünsche mit. Wir begleiten die Vorbereitung gemeinsam mit unserem Tourismuspartner in Marokko.",
      it: "Sì. Raccontaci il tuo progetto, le date e i tuoi interessi. Ti accompagniamo nella preparazione con il nostro partner turistico in Marocco.",
    },
  },
  {
    q: {
      fr: "Les circuits peuvent-ils être personnalisés ?",
      en: "Can the tours be customised?",
      de: "Können die Rundreisen individuell angepasst werden?",
      it: "I circuiti possono essere personalizzati?",
    },
    a: {
      fr: "Oui. La durée, les étapes et les activités peuvent être adaptées à votre projet, sous réserve de faisabilité.",
      en: "Yes. Duration, stops and activities can be adapted to your plans, subject to feasibility.",
      de: "Ja. Dauer, Etappen und Aktivitäten können im Rahmen der Möglichkeiten angepasst werden.",
      it: "Sì. Durata, tappe e attività possono essere adattate al tuo progetto, compatibilmente con la fattibilità.",
    },
  },
  {
    q: {
      fr: "Qui s'occupe des réservations et du contrat ?",
      en: "Who handles bookings and the contract?",
      de: "Wer kümmert sich um Buchungen und Vertrag?",
      it: "Chi gestisce le prenotazioni e il contratto?",
    },
    a: {
      fr: "Les réservations, les contrats et les paiements sont pris en charge par notre partenaire touristique agréé au Maroc, selon les conditions communiquées pour votre voyage.",
      en: "Bookings, contracts and payments are handled by our licensed tourism partner in Morocco, under the conditions provided for your trip.",
      de: "Buchungen, Verträge und Zahlungen werden gemäß den mitgeteilten Reisebedingungen von unserem zugelassenen Tourismuspartner in Marokko abgewickelt.",
      it: "Prenotazioni, contratti e pagamenti sono gestiti dal nostro partner turistico autorizzato in Marocco, secondo le condizioni comunicate per il viaggio.",
    },
  },
  {
    q: {
      fr: "Comment demander un devis ?",
      en: "How can I request a quote?",
      de: "Wie kann ich ein Angebot anfordern?",
      it: "Come posso richiedere un preventivo?",
    },
    a: {
      fr: "Remplissez notre formulaire de demande de devis en indiquant vos dates, le nombre de voyageurs et le type de séjour souhaité.",
      en: "Complete our quote request form with your dates, number of travellers and preferred type of trip.",
      de: "Füllen Sie unser Angebotsformular mit Ihren Reisedaten, der Anzahl der Reisenden und der gewünschten Reiseart aus.",
      it: "Compila il modulo di richiesta preventivo indicando le date, il numero di viaggiatori e il tipo di soggiorno desiderato.",
    },
  },
];

function VoyageMarocDepuisSuissePage() {
  const { lang } = useI18n();

  return (
    <>
      <PageHero
        image={images.atlas}
        eyebrow={localText(lang, {
          fr: "Depuis la Suisse vers le Maroc",
          en: "From Switzerland to Morocco",
          de: "Von der Schweiz nach Marokko",
          it: "Dalla Svizzera al Marocco",
        })}
        title={localText(lang, {
          fr: "Votre voyage au Maroc commence ici.",
          en: "Your journey to Morocco starts here.",
          de: "Ihre Reise nach Marokko beginnt hier.",
          it: "Il tuo viaggio in Marocco inizia qui.",
        })}
        text={localText(lang, {
          fr: "Imaginez un voyage au Maroc qui vous ressemble, entre désert, montagnes, culture et rencontres.",
          en: "Imagine a journey that reflects your interests, from deserts and mountains to culture and local encounters.",
          de: "Gestalten Sie eine Reise nach Ihren Vorstellungen – zwischen Wüste, Bergen, Kultur und Begegnungen.",
          it: "Immagina un viaggio su misura tra deserto, montagne, cultura e incontri.",
        })}
      />

      <section className="container-x py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">
            {localText(lang, {
              fr: "Voyager depuis la Suisse",
              en: "Travelling from Switzerland",
              de: "Reisen ab der Schweiz",
              it: "Viaggiare dalla Svizzera",
            })}
          </p>
          <h2 className="mt-5 text-3xl leading-tight md:text-5xl">
            {localText(lang, {
              fr: "Le Maroc, à votre rythme et selon vos envies.",
              en: "Morocco, at your pace and on your terms.",
              de: "Marokko – in Ihrem Tempo und nach Ihren Wünschen.",
              it: "Il Marocco, secondo i tuoi ritmi e desideri.",
            })}
          </h2>
          <p className="mt-6 text-muted-foreground leading-8">
            {localText(lang, {
              fr: "Vous habitez en Suisse et souhaitez découvrir le Maroc ? Que vous envisagiez un circuit dans le désert, une randonnée dans l'Atlas ou un séjour culturel, nous vous aidons à préparer votre projet. Les détails de votre voyage sont étudiés avec notre partenaire touristique agréé au Maroc, qui prend en charge les réservations et les aspects contractuels.",
              en: "Living in Switzerland and planning to discover Morocco? Whether you are considering a desert tour, an Atlas hike or a cultural stay, we help you prepare your project. Your travel arrangements are coordinated with our licensed tourism partner in Morocco, who handles bookings and contractual matters.",
              de: "Sie leben in der Schweiz und möchten Marokko entdecken? Ob Wüstenreise, Wanderung im Atlas oder Kulturaufenthalt – wir helfen Ihnen bei der Vorbereitung. Die Reiseorganisation erfolgt gemeinsam mit unserem zugelassenen Tourismuspartner in Marokko, der Buchungen und vertragliche Angelegenheiten übernimmt.",
              it: "Vivi in Svizzera e desideri scoprire il Marocco? Che tu stia pensando a un tour nel deserto, a un'escursione nell'Atlante o a un soggiorno culturale, ti aiutiamo a preparare il progetto. L'organizzazione viene coordinata con il nostro partner turistico autorizzato in Marocco, che gestisce prenotazioni e aspetti contrattuali.",
            })}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {advantages.map((item, i) => (
            <Reveal key={item.fr} delay={i * 100}>
              <div className="h-full border border-border/60 p-7">
                <h3 className="text-xl leading-snug">
                  {localText(lang, item)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {localText(lang, item.text)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow">
              {localText(lang, {
                fr: "Nos inspirations",
                en: "Travel inspiration",
                de: "Reiseinspiration",
                it: "Ispirazioni di viaggio",
              })}
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              {localText(lang, {
                fr: "Quel Maroc souhaitez-vous découvrir ?",
                en: "Which Morocco would you like to discover?",
                de: "Welches Marokko möchten Sie entdecken?",
                it: "Quale Marocco desideri scoprire?",
              })}
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {experiences.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="h-full border border-border/60 bg-background p-7">
                  <h3 className="text-2xl">
                    {localText(lang, item.title)}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {localText(lang, item.text)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Btn to="/circuits">
              {localText(lang, {
                fr: "Découvrir nos circuits",
                en: "Explore our tours",
                de: "Unsere Rundreisen entdecken",
                it: "Scopri i nostri circuiti",
              })}
            </Btn>
            <Btn to="/devis" variant="outline">
              {localText(lang, {
                fr: "Personnaliser mon voyage",
                en: "Customise my trip",
                de: "Meine Reise gestalten",
                it: "Personalizza il mio viaggio",
              })}
            </Btn>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <p className="eyebrow text-center">
            {localText(lang, {
              fr: "Questions fréquentes",
              en: "Frequently asked questions",
              de: "Häufige Fragen",
              it: "Domande frequenti",
            })}
          </p>
          <h2 className="mt-4 text-center text-3xl md:text-5xl">
            {localText(lang, {
              fr: "Préparer votre voyage",
              en: "Planning your journey",
              de: "Ihre Reise planen",
              it: "Preparare il tuo viaggio",
            })}
          </h2>

          <div className="mt-12 divide-y divide-border">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium">
                  {localText(lang, faq.q)}
                  <span className="text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                  {localText(lang, faq.a)}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand image={images.heroSahara} />
    </>
  );
}
