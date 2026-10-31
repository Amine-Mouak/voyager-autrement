import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
}) {
  const { lang } = useI18n();
  return (
    <main className="container-x min-h-[65vh] py-32 md:py-40">
      <p className="eyebrow text-primary">Voyager Autrement</p>
      <h1 className="mt-4 max-w-4xl text-5xl leading-tight md:text-7xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
      <div className="mt-12 max-w-4xl space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl">{section.title}</h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-muted-foreground">{section.body}</p>
          </section>
        ))}
      </div>
      <p className="mt-14 border-t border-border pt-6 text-sm text-muted-foreground">
        {lang === "en" ? "Questions? " : "Une question ? "}
        <Link to="/contact" className="text-primary underline underline-offset-4">
          {lang === "en" ? "Contact us" : "Contactez-nous"}
        </Link>
      </p>
    </main>
  );
}
