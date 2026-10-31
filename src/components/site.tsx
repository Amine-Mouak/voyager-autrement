
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { LANGS, useI18n, localText } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", key: "nav.home" },
  { to: "/circuits", key: "nav.circuits" },
  { to: "/experiences", key: "nav.experiences" },
  { to: "/contact", key: "nav.contact" },
] as const;

function NavLabel({ item }: { item: (typeof navItems)[number] }) {
  const { t, lang } = useI18n();

  if (item.to === "/circuits") return <>{t("nav.circuits")}</>;

  return <>{t(item.key)}</>;
}

export function Btn({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: "/devis" | "/voyages" | "/contact" | "/circuits";
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-secondary",
        variant === "ghost" &&
          "border border-on-image/60 text-on-image hover:bg-on-image hover:text-ink",
        variant === "outline" &&
          "border border-foreground/30 text-foreground hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background/95 shadow-soft backdrop-blur"
          : "bg-gradient-to-b from-ink/50 to-transparent",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className={cn(
            "font-serif text-2xl leading-none",
            scrolled || open ? "text-foreground" : "text-on-image",
          )}
          onClick={() => setOpen(false)}
        >
          Voyager <em className="text-primary not-italic">Autrement</em>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                scrolled ? "text-foreground/80" : "text-on-image/90",
              )}
              activeProps={{ className: "!text-primary" }}
            >
              <NavLabel item={n} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div
            className={cn(
              "hidden text-xs font-semibold sm:flex gap-1",
              scrolled || open ? "text-foreground" : "text-on-image",
            )}
          >
            {LANGS.map((l, i) => (
              <span key={l} className="flex gap-1">
                {i > 0 && <span className="opacity-40">|</span>}
                <button
                  onClick={() => setLang(l)}
                  className={cn(
                    "uppercase",
                    lang === l
                      ? "text-primary"
                      : "opacity-70 hover:opacity-100",
                  )}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>

          <Btn
            to="/devis"
            className="hidden md:inline-flex px-5 py-2.5"
          >
            {t("cta.plan")}
          </Btn>

          <button
            aria-label={localText(lang, { fr: "Menu", en: "Menu", de: "Menü", it: "Menu" })}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden",
              scrolled || open ? "text-foreground" : "text-on-image",
            )}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container-x flex flex-col gap-1 pb-8 lg:hidden">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 font-serif text-2xl"
              activeProps={{ className: "!text-primary" }}
            >
              <NavLabel item={n} />
            </Link>
          ))}

          <div className="mt-4 flex gap-3 text-sm font-semibold">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "uppercase",
                  lang === l ? "text-primary" : "opacity-60",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <div onClick={() => setOpen(false)}>
            <Btn to="/devis" className="mt-4 w-full">
              {t("cta.plan")}
            </Btn>
          </div>
        </div>
      )}
    </header>
  );
}

export function MobileCta() {
  const { t } = useI18n();

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <Btn to="/devis" className="w-full shadow-soft">
        {t("cta.plan")}
      </Btn>
    </div>
  );
}

export function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="bg-ink pb-24 pt-20 text-ivory/80 md:pb-10">
      <div className="container-x grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl text-ivory">
            Voyager <span className="text-primary">Autrement</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          <span className="eyebrow mb-2 text-sand">
            {t("footer.navigation")}
          </span>
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-primary">
              <NavLabel item={n} />
            </Link>
          ))}
          <Link to="/devis" className="hover:text-primary">
            {t("footer.quote")}
          </Link>
        </nav>

        <div className="text-sm">
          <span className="eyebrow mb-4 block text-sand">
            {t("footer.contact")}
          </span>
          <p>
            Auberge restaurant Souktana.
            <br />
            Taliouine par taroudant.
          </p>
          <p className="mt-1">contact@voyager-autrement.ch</p>
          <p className="mt-1">+41 779767613</p>
        </div>
      </div>

      <div className="container-x mt-16 border-t border-ivory/10 pt-6 text-xs text-ivory/50">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <span>© {new Date().getFullYear()} Voyager Autrement</span>
          <Link to="/politique-confidentialite" className="hover:text-ivory">
            {lang === "de" ? "Datenschutzerklärung" : lang === "it" ? "Privacy" : lang === "en" ? "Privacy policy" : "Politique de confidentialité"}
          </Link>
          <Link to="/mentions-legales" className="hover:text-ivory">
            {lang === "de" ? "Impressum" : lang === "it" ? "Note legali" : lang === "en" ? "Legal notice" : "Mentions légales"}
          </Link>
          <Link to="/politique-cookies" className="hover:text-ivory">
            {lang === "de" ? "Cookie-Richtlinie" : lang === "it" ? "Informativa sui cookie" : lang === "en" ? "Cookie policy" : "Politique des cookies"}
          </Link>
          <Link to="/conditions-generales" className="hover:text-ivory">
            {lang === "de" ? "Allgemeine Geschäftsbedingungen" : lang === "it" ? "Condizioni generali" : lang === "en" ? "Terms and conditions" : "Conditions générales"}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      {text && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {text}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({
  image,
  eyebrow,
  title,
  text,
}: {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container-x relative pb-16 pt-32 text-on-image">
        <p className="eyebrow text-sand">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1] md:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-on-image/85">{text}</p>
      </div>
    </section>
  );
}

const journeyTranslations: Record<
  string,
  { title: string; place: string; duration: string; text: string }
> = {
  "Marrakech & Atlas": {
    title: "Marrakech & the Atlas",
    place: "Marrakech · High Atlas",
    duration: "7 days",
    text: "Explore the gardens and riads of the Red City, then enjoy the calm of Berber villages at the foot of the mountains.",
  },
  "Échappée dans le désert": {
    title: "Desert Escape",
    place: "Merzouga · Sahara",
    duration: "5 days",
    text: "Watch the Erg Chebbi dunes glow at sunset and spend a night beneath the stars in a desert camp.",
  },
  "Villes impériales": {
    title: "Imperial Cities",
    place: "Fez · Meknes · Rabat",
    duration: "9 days",
    text: "Explore ancient medinas, artisans and palaces on a journey through Morocco's history.",
  },
  "Côte atlantique": {
    title: "Atlantic Coast",
    place: "Essaouira · Agadir",
    duration: "6 days",
    text: "Discover wind-swept ramparts, a blue fishing port and the Atlantic's long beaches.",
  },
  "Aventure en famille": {
    title: "Family Adventure",
    place: "Marrakech · Atlas · Desert",
    duration: "8 days",
    text: "A child-friendly pace with encounters, walks and memories to share.",
  },
  "Voyage sur mesure": {
    title: "Tailor-made Journey",
    place: "A Morocco that feels like you",
    duration: "Flexible duration",
    text: "Tell us what you dream of and we'll design a unique itinerary together.",
  },
};

export function JourneyCard({
  j,
  i = 0,
}: {
  j: {
    title: string;
    place: string;
    duration: string;
    image: string;
    text: string;
  };
  i?: number;
}) {
  const { t, lang } = useI18n();
  const translated = lang === "en" ? journeyTranslations[j.title] : undefined;
  const title = translated?.title ?? j.title;
  const place = translated?.place ?? j.place;
  const duration = translated?.duration ?? j.duration;
  const text = translated?.text ?? j.text;

  return (
    <Reveal delay={(i % 3) * 120}>
      <article className="group">
        <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-sm">
          <img
            src={j.image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-4 top-4 rounded-sm bg-background/90 px-3 py-1 text-xs font-semibold">
            {duration}
          </span>
        </div>
        <p className="eyebrow mt-5 text-muted-foreground">{place}</p>
        <h3 className="mt-2 text-3xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {text}
        </p>
        <Link
          to="/devis"
          className="mt-4 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-primary transition-all group-hover:gap-4"
        >
          {t("cta.journey")} →
        </Link>
      </article>
    </Reveal>
  );
}

const tileTranslations: Record<string, { title: string; text: string }> = {
  "Nuits dans le désert": {
    title: "Desert Nights",
    text: "Lanterns, campfires and an endless sky.",
  },
  "Gastronomie marocaine": {
    title: "Moroccan Cuisine",
    text: "Tagines, mint tea and cooking classes.",
  },
  "Villages berbères": {
    title: "Berber Villages",
    text: "Encounters and hospitality in the Atlas.",
  },
  "Riads d’exception": {
    title: "Exceptional Riads",
    text: "Find calm among courtyards and fountains.",
  },
  "Souks & médinas": {
    title: "Souks & Medinas",
    text: "Artisans, colours and hidden alleyways.",
  },
  "Océan & plages": {
    title: "Ocean & Beaches",
    text: "Wind, waves and grilled fish by the harbour.",
  },
  Marrakech: {
    title: "Marrakech",
    text: "Medina, gardens, riads and souks: the energy of the Red City.",
  },
  "Merzouga & Sahara": {
    title: "Merzouga & Sahara",
    text: "Golden dunes, silence and starry nights.",
  },
  "Haut Atlas": {
    title: "High Atlas",
    text: "Green valleys and traditional earthen villages.",
  },
  Essaouira: {
    title: "Essaouira",
    text: "Atlantic charm and historic ramparts.",
  },
  Fès: {
    title: "Fez",
    text: "One of the oldest medinas in the Arab world.",
  },
  Ouarzazate: {
    title: "Ouarzazate",
    text: "Gateway to the desert, kasbahs and cinematic landscapes.",
  },
  Agadir: {
    title: "Agadir",
    text: "Beaches and sunshine throughout the year.",
  },
  Chefchaouen: {
    title: "Chefchaouen",
    text: "Blue-painted streets in the heart of the Rif Mountains.",
  },
};

export function ImageTile({
  title,
  text,
  image,
  tall,
}: {
  title: string;
  text: string;
  image: string;
  tall?: boolean;
}) {
  const { lang } = useI18n();
  const translated = lang === "en" ? tileTranslations[title] : undefined;
  const displayTitle = translated?.title ?? title;
  const displayText = translated?.text ?? text;

  return (
    <div
      className={cn(
        "img-zoom relative overflow-hidden rounded-sm",
        tall ? "aspect-[3/4]" : "aspect-[4/3]",
      )}
    >
      <img
        src={image}
        alt={displayTitle}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-card-overlay" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-on-image">
        <h3 className="text-3xl">{displayTitle}</h3>
        <p className="mt-1 text-sm text-on-image/80">{displayText}</p>
      </div>
    </div>
  );
}

export function CtaBand({ image }: { image: string }) {
  const { t, lang } = useI18n();

  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <Reveal className="container-x relative text-center text-on-image">
        <p className="eyebrow text-sand">
          {localText(lang, { fr: "Votre voyage", en: "Your journey", de: "Ihre Reise", it: "Il tuo viaggio" })}
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-5xl leading-[1] md:text-7xl">
          {localText(lang, { fr: "Votre histoire marocaine commence ici.", en: "Your Moroccan story begins here.", de: "Ihre marokkanische Geschichte beginnt hier.", it: "La tua storia marocchina inizia qui." })}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-on-image/85">
          {localText(lang, { fr: "Dites-nous ce que vous recherchez, et imaginons ensemble votre voyage.", en: "Tell us what you're looking for, and let's imagine your journey together.", de: "Erzählen Sie uns, wonach Sie suchen, und planen wir Ihre Reise gemeinsam.", it: "Raccontaci cosa cerchi e immaginiamo insieme il tuo viaggio." })}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Btn to="/devis">{t("cta.plan")}</Btn>
          <Btn to="/contact" variant="ghost">
            {t("cta.contact")}
          </Btn>
        </div>
      </Reveal>
    </section>
  );
}

export function Testimonials() {
  const { lang } = useI18n();

  const items =
    lang === "en"
      ? [
          "“Space reserved for a client testimonial. Replace this text with feedback from a real traveller.”",
          "“Space reserved for a client testimonial. Add a couple's or family's feedback here.”",
          "“Example content to be replaced with a genuine traveller testimonial.”",
        ]
      : [
          "« Emplacement réservé à un témoignage client. Remplacez ce texte par un retour réel de voyageur. »",
          "« Emplacement réservé à un témoignage client. Ajoutez ici les mots d’un couple ou d’une famille. »",
          "« Emplacement réservé à un témoignage client. Ce contenu est un exemple à remplacer. »",
        ];

  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          eyebrow={
            lang === "en"
              ? "They travelled with us"
              : "Ils ont voyagé avec nous"
          }
          title={lang === "en" ? "Testimonials" : "Témoignages"}
          text={
            lang === "en"
              ? "Example content — genuine feedback from our travellers will be added soon."
              : "Contenu d’exemple — les vrais témoignages de nos voyageurs seront ajoutés prochainement."
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((q, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="h-full rounded-sm bg-card p-8 shadow-soft">
                <blockquote className="font-serif text-2xl leading-snug">
                  {q}
                </blockquote>
                <figcaption className="eyebrow mt-6 text-muted-foreground">
                  {lang === "en"
                    ? "First name — City (example)"
                    : "Prénom — Ville (exemple)"}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
