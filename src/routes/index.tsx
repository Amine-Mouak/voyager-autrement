import { createFileRoute } from "@tanstack/react-router";
import { Compass, Mountain, MapPin, ShieldCheck } from "lucide-react";
import { Btn, CtaBand, Reveal, SectionHead } from "@/components/site";
import { images } from "@/lib/content";
import { useI18n, localText } from "@/lib/i18n";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "/",
      "Voyages au Maroc sur mesure | Voyager Autrement",
      "Découvrez le Maroc autrement avec Voyager Autrement : voyages sur mesure, randonnées dans l’Atlas, désert du Sahara, rencontres locales et expériences authentiques.",
    ),
  component: Home,
});

function Home() {
  const { t, lang } = useI18n();
  const isEnglish = lang === "en";

  const pillars = [
    {
      icon: Compass,
      title: localText(lang, { fr: "Voyages personnalisés", en: "Tailor-made journeys", de: "Individuell gestaltete Reisen", it: "Viaggi su misura" }),
      text: localText(lang, { fr: "Chaque itinéraire est construit autour de vos envies, de votre rythme et de votre budget.", en: "Every itinerary is designed around your wishes, your pace and your budget.", de: "Jede Route wird nach Ihren Wünschen, Ihrem Tempo und Ihrem Budget gestaltet.", it: "Ogni itinerario è creato secondo i tuoi desideri, i tuoi ritmi e il tuo budget." }),
    },
    {
      icon: Mountain,
      title: localText(lang, { fr: "Expériences authentiques", en: "Authentic experiences", de: "Authentische Erlebnisse", it: "Esperienze autentiche" }),
      text: localText(lang, { fr: "Loin du tourisme de masse : rencontres, riads, villages et paysages vrais.", en: "Beyond mass tourism: meaningful encounters, riads, villages and unspoilt landscapes.", de: "Abseits des Massentourismus: echte Begegnungen, Riads, Dörfer und unberührte Landschaften.", it: "Lontano dal turismo di massa: incontri autentici, riad, villaggi e paesaggi incontaminati." }),
    },
    {
      icon: MapPin,
      title: localText(lang, { fr: "Connaissance du terrain", en: "Local knowledge", de: "Ortskenntnis", it: "Conoscenza del territorio" }),
      text: localText(lang, { fr: "Une connaissance du Maroc pour vous emmener là où il faut, au bon moment.", en: "In-depth knowledge of Morocco to take you to the right places at the right time.", de: "Dank unserer Marokko-Kenntnisse entdecken Sie zur richtigen Zeit die passenden Orte.", it: "La profonda conoscenza del Marocco ci permette di portarti nei luoghi giusti al momento giusto." }),
    },
    {
      icon: ShieldCheck,
      title: localText(lang, { fr: "Accompagnement attentif", en: "Personal support", de: "Persönliche Betreuung", it: "Assistenza personale" }),
      text: localText(lang, { fr: "Une communication claire et un suivi attentif avant et pendant votre voyage.", en: "Clear communication and attentive support before and during your journey.", de: "Klare Kommunikation und persönliche Betreuung vor und während Ihrer Reise.", it: "Comunicazione chiara e assistenza attenta prima e durante il viaggio." }),
    },
  ];

  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={images.heroSahara}
          alt={localText(lang, { fr: "Dunes du Sahara au Maroc au coucher du soleil", en: "Sahara dunes in Morocco at sunset", de: "Saharadünen in Marokko bei Sonnenuntergang", it: "Dune del Sahara in Marocco al tramonto" })}
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-x relative pb-20 pt-40 text-on-image md:pb-28">
          <p className="eyebrow text-sand">{localText(lang, { fr: "Voyages au Maroc", en: "Journeys in Morocco", de: "Reisen in Marokko", it: "Viaggi in Marocco" })}</p>
          <h1 className="mt-5 max-w-4xl text-6xl leading-[0.95] md:text-8xl lg:text-[8.5rem]">{t("hero.title")}</h1>
          <p className="mt-6 max-w-xl text-lg text-on-image/85 md:text-xl">{t("hero.text")}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Btn to="/devis">{t("cta.plan")}</Btn>
            <Btn to="/circuits" variant="ghost">{localText(lang, { fr: "Découvrir nos circuits", en: "Explore our tours", de: "Unsere Rundreisen entdecken", it: "Scopri i nostri itinerari" })}</Btn>
          </div>
          <p className="eyebrow mt-10 text-on-image/70">{t("hero.trust")}</p>
        </div>
      </section>

      <section className="container-x py-24 md:py-36">
        <SectionHead
          eyebrow={localText(lang, { fr: "Pourquoi Voyager Autrement", en: "Why Voyager Autrement", de: "Warum Voyager Autrement", it: "Perché Voyager Autrement" })}
          title={localText(lang, { fr: "Le Maroc, avec soin et authenticité.", en: "Morocco, with care and authenticity.", de: "Marokko – authentisch und mit Sorgfalt.", it: "Il Marocco, con cura e autenticità." })}
          text={localText(lang, { fr: "Nous réunissons la chaleur et l’authenticité du Maroc avec une organisation attentive et des voyages pensés avant tout autour des personnes.", en: "We bring together the warmth and authenticity of Morocco with thoughtful organisation and journeys shaped around people.", de: "Wir verbinden die Herzlichkeit und Authentizität Marokkos mit sorgfältiger Organisation und Reisen, bei denen Menschen im Mittelpunkt stehen.", it: "Uniamo il calore e l’autenticità del Marocco a un’organizzazione attenta e a viaggi pensati prima di tutto intorno alle persone." })}
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="bg-background p-8">
              <p.icon className="h-7 w-7 text-secondary" strokeWidth={1.25} />
              <h3 className="mt-6 text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <p className="eyebrow text-primary">{localText(lang, { fr: "À propos de nous", en: "Our story", de: "Unsere Geschichte", it: "La nostra storia" })}</p>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
            {localText(lang, { fr: "Voyager autrement, c’est découvrir le Maroc avec le cœur.", en: "Travelling differently means discovering Morocco with your heart.", de: "Anders zu reisen bedeutet, Marokko mit dem Herzen zu entdecken.", it: "Viaggiare in modo diverso significa scoprire il Marocco con il cuore." })}
          </h2>
          <img src={images.fes} alt={localText(lang, { fr: "Architecture traditionnelle à Fès, au Maroc", en: "Traditional architecture in Fez, Morocco", de: "Traditionelle Architektur in Fès, Marokko", it: "Architettura tradizionale a Fès, in Marocco" })} loading="lazy" className="mt-10 aspect-[5/4] w-full object-cover" />
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-base leading-relaxed text-muted-foreground md:pt-12">
          <p>{localText(lang, { fr: "Voyager autrement, c’est découvrir le Maroc avec le cœur, au rythme de ses paysages, de ses peuples et de ses traditions.", en: "Travelling differently means discovering Morocco with your heart, at the pace of its landscapes, its people and its traditions.", de: "Anders zu reisen heißt, Marokko mit dem Herzen zu entdecken – im Rhythmus seiner Landschaften, Menschen und Traditionen.", it: "Viaggiare in modo diverso significa scoprire il Marocco con il cuore, seguendo il ritmo dei suoi paesaggi, delle persone e delle tradizioni." })}</p>
          <p>{localText(lang, { fr: "Mohammed Ali et son équipe vous invitent à vivre une expérience authentique, loin des sentiers battus, à la rencontre d’un Maroc généreux, mystérieux et profondément humain.", en: "Mohammed Ali and his team invite you to enjoy an authentic experience, away from the beaten track, discovering a generous, mysterious and deeply human Morocco.", de: "Mohammed Ali und sein Team laden Sie ein, abseits der üblichen Wege ein authentisches Erlebnis zu genießen und ein gastfreundliches, geheimnisvolles und zutiefst menschliches Marokko kennenzulernen.", it: "Mohammed Ali e il suo team ti invitano a vivere un’esperienza autentica, lontano dai percorsi più battuti, alla scoperta di un Marocco generoso, misterioso e profondamente umano." })}</p>
          <p>{localText(lang, { fr: "Issu d’une tribu nomade du sud du Maroc et d’une famille de poètes, Mohammed Ali porte en lui une histoire de voyage et de partage transmise de génération en génération. Le Maroc, il ne se contente pas de le connaître : il le porte dans son cœur.", en: "Born into a nomadic tribe in southern Morocco and a family of poets, Mohammed Ali carries a legacy of travel and sharing passed down from generation to generation. He does not simply know Morocco: he carries it in his heart.", de: "Mohammed Ali stammt aus einem Nomadenstamm im Süden Marokkos und einer Dichterfamilie. Er trägt ein über Generationen weitergegebenes Erbe des Reisens und Teilens in sich. Marokko kennt er nicht nur – er trägt es im Herzen.", it: "Nato in una tribù nomade del sud del Marocco e in una famiglia di poeti, Mohammed Ali custodisce un’eredità di viaggio e condivisione tramandata di generazione in generazione. Il Marocco non si limita a conoscerlo: lo porta nel cuore." })}</p>
          <p>{localText(lang, { fr: "Avec une équipe soudée et des guides professionnels passionnés, nous organisons des voyages sur mesure, adaptés à vos envies et à votre rythme. Du Sahara aux montagnes de l’Atlas, des côtes sauvages aux sentiers de randonnée, de l’escalade au ski, nous vous invitons à découvrir la richesse des paysages, des cultures et des écosystèmes marocains.", en: "With a close-knit team and passionate professional guides, we organise tailor-made trips adapted to your interests and pace. From the Sahara to the Atlas Mountains, from wild coastlines to hiking trails, from climbing to skiing, we invite you to discover the richness of Morocco’s landscapes, cultures and ecosystems.", de: "Gemeinsam mit unserem eingespielten Team und erfahrenen, leidenschaftlichen Guides organisieren wir maßgeschneiderte Reisen, die zu Ihren Interessen und Ihrem Tempo passen. Von der Sahara bis zum Atlas, von wilden Küsten über Wanderwege bis hin zu Kletter- und Skigebieten entdecken Sie mit uns die Vielfalt der marokkanischen Landschaften, Kulturen und Ökosysteme.", it: "Con un team affiatato e guide professioniste appassionate organizziamo viaggi su misura, in base ai tuoi interessi e ai tuoi ritmi. Dal Sahara alle montagne dell’Atlante, dalle coste selvagge ai sentieri escursionistici, dall’arrampicata allo sci: ti invitiamo a scoprire la ricchezza dei paesaggi, delle culture e degli ecosistemi marocchini." })}</p>
          <p>{localText(lang, { fr: "Nous privilégions les produits locaux et frais, les rencontres sincères et le respect des traditions. Les familles et les enfants sont les bienvenus, car pour nous, le voyage est avant tout une aventure humaine à partager.", en: "We prioritise fresh, locally sourced products, genuine encounters and respect for traditions. Families and children are welcome because, for us, travel is above all a human adventure to be shared.", de: "Wir legen Wert auf frische Produkte aus der Region, echte Begegnungen und den Respekt vor Traditionen. Familien und Kinder sind herzlich willkommen, denn Reisen ist für uns vor allem ein gemeinsames menschliches Abenteuer.", it: "Diamo valore ai prodotti freschi e locali, agli incontri sinceri e al rispetto delle tradizioni. Le famiglie e i bambini sono i benvenuti: per noi il viaggio è soprattutto un’avventura umana da condividere." })}</p>
          <p>{localText(lang, { fr: "Parce que voyager, c’est aussi donner du sens à ses pas, une partie de nos bénéfices est destinée à soutenir des associations qui accompagnent les enfants en situation de handicap.", en: "Because travelling is also about making a difference, part of our profits goes towards supporting associations that help children with disabilities.", de: "Reisen bedeutet für uns auch, etwas zu bewirken. Deshalb kommt ein Teil unseres Gewinns Vereinen zugute, die Kinder mit Behinderungen unterstützen.", it: "Viaggiare significa anche lasciare un segno positivo: una parte dei nostri profitti è destinata a sostenere associazioni che aiutano i bambini con disabilità." })}</p>
          <p>{localText(lang, { fr: "Notre philosophie : aller plus loin que les paysages, découvrir ce qui rapproche les êtres humains et repartir avec bien plus que des souvenirs.", en: "Our philosophy is to go beyond the landscapes, discover what brings people together and return home with far more than just memories.", de: "Unsere Philosophie: mehr als nur Landschaften entdecken, erfahren, was Menschen verbindet, und mit weit mehr als Erinnerungen nach Hause zurückkehren.", it: "La nostra filosofia è andare oltre i paesaggi, scoprire ciò che unisce le persone e tornare a casa con molto più che semplici ricordi." })}</p>
          <p>{localText(lang, { fr: "Avec Mohammed Ali et son équipe, chaque voyage est une rencontre, chaque chemin raconte une histoire et chaque voyageur devient un peu de la famille.", en: "With Mohammed Ali and his team, every journey is a meeting, every path tells a story, and every traveller becomes part of the family.", de: "Mit Mohammed Ali und seinem Team wird jede Reise zu einer Begegnung, jeder Weg erzählt eine Geschichte und jeder Gast wird ein Stück weit Teil der Familie.", it: "Con Mohammed Ali e il suo team, ogni viaggio è un incontro, ogni sentiero racconta una storia e ogni viaggiatore entra a far parte della famiglia." })}</p>
          <p>{localText(lang, { fr: "Voyager autrement, c’est découvrir le Maroc… et peut-être aussi une autre façon de voir le monde.", en: "Travelling differently means discovering Morocco… and perhaps discovering a different way of seeing the world.", de: "Anders zu reisen bedeutet, Marokko zu entdecken … und vielleicht auch eine neue Sicht auf die Welt zu gewinnen.", it: "Viaggiare in modo diverso significa scoprire il Marocco… e forse anche un nuovo modo di guardare il mondo." })}</p>
          <Btn to="/devis">{localText(lang, { fr: "Imaginons votre voyage", en: "Plan your journey", de: "Planen Sie Ihre Reise", it: "Pianifica il tuo viaggio" })}</Btn>
        </Reveal>
      </section>
      <CtaBand image={images.atlas} />
    </>
  );
}
