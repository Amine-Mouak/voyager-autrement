
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { tripTypes } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const field =
  "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";

function F({
  label,
  children,
  full,
}: {
  label: string;
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <label className={full ? "sm:col-span-2" : ""}>
      <span className="eyebrow mb-2 block text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function useSubmit(msg: string) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Connect to email/backend to actually deliver requests.
    setSent(true);
    toast.success(msg);
    e.currentTarget.reset();
  };

  return { sent, onSubmit };
}

function Privacy() {
  const { t } = useI18n();

  return (
    <label className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2">
      <input type="checkbox" required className="mt-1 accent-primary" />
      {t("form.privacy")}
    </label>
  );
}

const tripTypeLabels: Record<string, { fr: string; en: string; de: string; it: string }> = {
  Couple: { fr: "Couple", en: "Couple", de: "Paar", it: "Coppia" },
  Famille: { fr: "Famille", en: "Family", de: "Familie", it: "Famiglia" },
  Amis: { fr: "Amis", en: "Friends", de: "Freunde", it: "Amici" },
  "Voyage privé": { fr: "Voyage privé", en: "Private trip", de: "Privatreise", it: "Viaggio privato" },
  Groupe: { fr: "Groupe", en: "Group", de: "Gruppe", it: "Gruppo" },
  "Voyage sur mesure": { fr: "Voyage sur mesure", en: "Tailor-made trip", de: "Individuell gestaltete Reise", it: "Viaggio su misura" },
};

export function QuoteForm() {
  const { t, lang } = useI18n();
  const { sent, onSubmit } = useSubmit(t("form.successQuote"));

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <F label={t("form.firstName")}>
        <input required name="firstName" className={field} />
      </F>

      <F label={t("form.lastName")}>
        <input required name="lastName" className={field} />
      </F>

      <F label={t("form.email")}>
        <input required type="email" name="email" className={field} />
      </F>

      <F label={t("form.phone")}>
        <input type="tel" name="phone" className={field} />
      </F>

      <F label={t("form.country")}>
        <input
          name="country"
          defaultValue={lang === "fr" ? "Suisse" : lang === "it" ? "Svizzera" : lang === "de" ? "Schweiz" : "Switzerland"}
          className={field}
        />
      </F>

      <F label={t("form.dates")}>
        <input
          name="dates"
          placeholder={t("form.datePlaceholder")}
          className={field}
        />
      </F>

      <F label={t("form.travelers")}>
        <input
          type="number"
          min={1}
          name="travelers"
          defaultValue={2}
          className={field}
        />
      </F>

      <F label={t("form.tripType")}>
        <select name="type" className={field} defaultValue="">
          <option value="" disabled>
            {t("form.choose")}
          </option>
          {tripTypes.map((type) => (
            <option key={type} value={type}>
              {tripTypeLabels[type]?.[lang] ?? type}
            </option>
          ))}
        </select>
      </F>

      <F label={t("form.destinations")}>
        <input
          name="destinations"
          placeholder={t("form.destinationsPlaceholder")}
          className={field}
        />
      </F>

      <F label={t("form.budget")}>
        <select name="budget" className={field} defaultValue="">
          <option value="" disabled>
            {t("form.perPerson")}
          </option>
          <option value="under-1500">{t("form.budget1")}</option>
          <option value="1500-3000">{t("form.budget2")}</option>
          <option value="3000-5000">{t("form.budget3")}</option>
          <option value="over-5000">{t("form.budget4")}</option>
        </select>
      </F>

      <F label={t("form.message")} full>
        <textarea
          name="message"
          rows={5}
          placeholder={t("form.messagePlaceholder")}
          className={field}
        />
      </F>

      <Privacy />

      <button
        className="rounded-sm bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-secondary sm:col-span-2 sm:justify-self-start"
      >
        {sent ? t("cta.sendAnother") : t("cta.sendRequest")}
      </button>
    </form>
  );
}

export function ContactForm() {
  const { t } = useI18n();
  const { onSubmit } = useSubmit(t("form.successContact"));

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <F label={t("form.fullName")}>
        <input required name="fullName" className={field} />
      </F>

      <F label={t("form.email")}>
        <input required type="email" name="email" className={field} />
      </F>

      <F label={t("form.message")} full>
        <textarea
          required
          name="message"
          rows={6}
          placeholder={t("form.messagePlaceholder")}
          className={field}
        />
      </F>

      <Privacy />

      <button className="rounded-sm bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-secondary sm:justify-self-start">
        {t("cta.send")}
      </button>
    </form>
  );
}
