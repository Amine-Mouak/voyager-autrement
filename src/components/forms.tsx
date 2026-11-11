
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { tripTypes } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import {
  sendContactMessage,
  sendQuoteRequest,
} from "@/lib/email.functions";

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

function Privacy() {
  const { t } = useI18n();

  return (
    <label className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2">
      <input type="checkbox" required className="mt-1 accent-primary" />
      {t("form.privacy")}
    </label>
  );
}

const tripTypeLabels: Record<
  string,
  { fr: string; en: string; de: string; it: string }
> = {
  Couple: { fr: "Couple", en: "Couple", de: "Paar", it: "Coppia" },
  Famille: { fr: "Famille", en: "Family", de: "Familie", it: "Famiglia" },
  Amis: { fr: "Amis", en: "Friends", de: "Freunde", it: "Amici" },
  "Voyage privé": {
    fr: "Voyage privé",
    en: "Private trip",
    de: "Privatreise",
    it: "Viaggio privato",
  },
  Groupe: { fr: "Groupe", en: "Group", de: "Gruppe", it: "Gruppo" },
  "Voyage sur mesure": {
    fr: "Voyage sur mesure",
    en: "Tailor-made trip",
    de: "Individuell gestaltete Reise",
    it: "Viaggio su misura",
  },
};

export function QuoteForm() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const values = new FormData(form);

    setSending(true);

    try {
      await sendQuoteRequest({
        data: {
          firstName: String(values.get("firstName") ?? ""),
          lastName: String(values.get("lastName") ?? ""),
          email: String(values.get("email") ?? ""),
          phone: String(values.get("phone") ?? ""),
          country: String(values.get("country") ?? ""),
          dates: String(values.get("dates") ?? ""),
          travelers: Number(values.get("travelers") || 2),
          type: String(values.get("type") ?? ""),
          destinations: String(values.get("destinations") ?? ""),
          budget: String(values.get("budget") ?? ""),
          message: String(values.get("message") ?? ""),
          lang,
        },
      });

      setSent(true);
      toast.success(t("form.successQuote"));
      form.reset();
    } catch (error) {
      console.error("Quote submission failed:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

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
          defaultValue={
            lang === "fr"
              ? "Suisse"
              : lang === "it"
                ? "Svizzera"
                : lang === "de"
                  ? "Schweiz"
                  : "Switzerland"
          }
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
          max={30}
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
        type="submit"
        disabled={sending}
        className="rounded-sm bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
      >
        {sending
          ? "..."
          : sent
            ? t("cta.sendAnother")
            : t("cta.sendRequest")}
      </button>
    </form>
  );
}

export function ContactForm() {
  const { t, lang } = useI18n();
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const values = new FormData(form);

    setSending(true);

    try {
      await sendContactMessage({
        data: {
          fullName: String(values.get("fullName") ?? ""),
          email: String(values.get("email") ?? ""),
          message: String(values.get("message") ?? ""),
          lang,
        },
      });

      toast.success(t("form.successContact"));
      form.reset();
    } catch (error) {
      console.error("Contact submission failed:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

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

      <button
        type="submit"
        disabled={sending}
        className="rounded-sm bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60 sm:justify-self-start"
      >
        {sending ? "..." : t("cta.send")}
      </button>
    </form>
  );
}
