
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const LANGS = ["fr", "en", "de", "it"] as const;
export type Lang = (typeof LANGS)[number];

const dict = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.trips": "Voyages",
    "nav.destinations": "Destinations",
    "nav.experiences": "Expériences",
    "nav.circuits": "Nos circuits",
    "nav.about": "À propos",
    "nav.contact": "Contact",

    // Actions
    "cta.plan": "Planifier mon voyage",
    "cta.discover": "Découvrir nos voyages",
    "cta.journey": "Découvrir le voyage",
    "cta.contact": "Nous contacter",
    "cta.quote": "Demander un devis",
    "cta.send": "Envoyer",
    "cta.sendRequest": "Envoyer ma demande",
    "cta.sendAnother": "Envoyer une autre demande",
    "cta.back": "Retour",
    "cta.viewAllCircuits": "Voir tous nos circuits",
    "cta.otherCircuits": "Voir les autres circuits",
    "cta.getInformation": "Demander des informations",
    "cta.talkProject": "Parler de votre projet",

    // Hero
    "hero.title": "Découvrir le Maroc, autrement.",
    "hero.text":
      "Des voyages authentiques, pensés avec soin pour des expériences inoubliables au Maroc.",
    "hero.trust": "Voyages au Maroc",

    // Shared content
    "common.home": "Accueil",
    "common.loading": "Chargement…",
    "common.duration": "Durée",
    "common.walking": "Marche",
    "common.level": "Niveau",
    "common.discoverMorocco": "Explorez le Maroc",
    "common.experiences": "Expériences",
    "common.destinations": "Destinations",
    "common.practicalInfo": "Informations pratiques",
    "common.yourJourney": "Votre voyage",
    "common.yourNextAdventure": "Votre prochaine aventure",
    "common.discoverCircuit": "Découvrir le circuit",
    "common.notFound": "Page introuvable",
    "common.circuitNotFound": "Circuit introuvable",
    "common.notFoundDescription":
      "Cette page n’existe pas ou n’est plus disponible.",
    "common.circuitNotFoundDescription":
      "Ce circuit n’est pas disponible ou le lien n’est plus valide.",

    // Homepage
    "home.eyebrow": "Voyager Autrement",
    "home.title": "Le Maroc, autrement.",
    "home.subtitle":
      "Des voyages authentiques, pensés avec soin pour des expériences inoubliables.",
    "home.discoverTitle": "Découvrez le Maroc à votre rythme",
    "home.discoverText":
      "Des paysages grandioses, des rencontres sincères et des expériences qui vous ressemblent.",
    "home.journeysTitle": "Nos voyages",
    "home.journeysText":
      "Découvrez nos itinéraires et imaginons ensemble votre prochaine aventure.",
    "home.destinationsTitle": "Des destinations inspirantes",
    "home.experiencesTitle": "Des expériences authentiques",
    "home.stepsTitle": "Comment préparer votre voyage",
    "home.ctaTitle": "Votre histoire marocaine commence ici.",
    "home.ctaText":
      "Parlez-nous de vos envies et imaginons ensemble une aventure qui vous ressemble.",

    // Journeys
    "trips.eyebrow": "Nos voyages",
    "trips.title": "Des itinéraires pensés pour vous.",
    "trips.text":
      "Inspirez-vous de nos voyages — chacun peut être entièrement adapté à vos envies.",

    // Destinations
    "destinations.eyebrow": "Destinations",
    "destinations.title": "Découvrez les paysages du Maroc.",
    "destinations.text":
      "Des villes impériales aux montagnes et au désert, explorez la diversité du Maroc.",

    // Experiences
    "experiences.eyebrow": "Expériences",
    "experiences.title": "Vivre le Maroc, de l’intérieur.",
    "experiences.text":
      "Des moments qui restent : une nuit dans les dunes, un repas partagé, une rencontre.",

    // Circuits
    "circuits.eyebrow": "Explorez le Maroc",
    "circuits.title": "Nos circuits au Maroc",
    "circuits.text":
      "Des montagnes de l’Atlas aux étendues du Sahara, découvrez nos destinations et imaginons ensemble votre prochaine aventure.",
    "circuits.sectionTitle": "Trouvez votre prochaine aventure",
    "circuits.sectionText":
      "Des sommets de l’Atlas aux paysages du désert, choisissez l’univers qui vous attire et préparons votre voyage ensemble.",
    "circuits.ctaTitle": "Votre histoire marocaine commence ici.",
    "circuits.ctaText":
      "Parlez-nous de vos envies et imaginons ensemble une aventure qui vous ressemble.",
    "circuits.detailLabel": "Voyage au Maroc",
    "circuits.spirit": "L’esprit du voyage",
    "circuits.aboutTitle": "Une aventure au cœur du Maroc",
    "circuits.highlightsLabel": "À découvrir",
    "circuits.highlightsTitle": "Les temps forts du circuit",
    "circuits.adaptTitle": "Un voyage qui s’adapte à vous",
    "circuits.saffronLink": "Découvrir le voyage thématique autour du safran",
    "circuits.totalDuration": "Durée totale",
    "circuits.walkingDuration": "Durée de marche",
    "circuits.bestPeriod": "Période conseillée",
    "circuits.dailyWalking": "Marche quotidienne",
    "circuits.transport": "Portage",
    "circuits.supervision": "Encadrement",
    "circuits.arrival": "Ville d’arrivée",
    "circuits.family": "Possibilité d’adapter le circuit aux familles",
    "circuits.practicalTitle": "Préparez votre aventure",
    "circuits.adaptNote":
      "Les dates, étapes et durée peuvent être étudiées selon votre projet.",
    "circuits.adviceTitle": "Besoin de conseils ?",
    "circuits.adviceText":
      "Contactez-nous pour échanger sur votre expérience de randonnée, vos dates et le type de voyage qui vous correspond.",
    "circuits.bottomTitle": "Et si nous préparions ce voyage ensemble ?",
    "circuits.bottomText":
      "Parlez-nous de vos envies. Nous pourrons échanger sur le parcours, les dates et les possibilités d’adaptation de votre circuit.",

    // About
    "about.eyebrow": "À propos",
    "about.title": "Le Maroc, avec soin et authenticité.",
    "about.ctaTitle": "Imaginons votre prochain voyage.",
    "about.ctaText":
      "Partagez vos envies avec nous pour créer un voyage qui vous ressemble.",

    // Contact and quote
    "contact.eyebrow": "Contact",
    "contact.title": "Parlons de votre prochain voyage.",
    "contact.text":
      "Une question ou un projet de voyage ? Nous serons heureux d’échanger avec vous.",
    "quote.eyebrow": "Demande de devis",
    "quote.title": "Imaginons votre voyage.",
    "quote.text":
      "Quelques informations suffisent. Nous revenons vers vous avec une proposition personnalisée, sans engagement.",

    // Forms
    "form.firstName": "Prénom",
    "form.lastName": "Nom",
    "form.fullName": "Nom complet",
    "form.email": "E-mail",
    "form.phone": "Téléphone",
    "form.country": "Pays",
    "form.dates": "Dates souhaitées",
    "form.travelers": "Nombre de voyageurs",
    "form.tripType": "Type de voyage",
    "form.destinations": "Destinations souhaitées",
    "form.budget": "Budget approximatif",
    "form.message": "Message",
    "form.choose": "Choisir…",
    "form.perPerson": "Par personne…",
    "form.datePlaceholder": "ex. avril 2027, 10 jours",
    "form.destinationsPlaceholder": "Marrakech, désert, Atlas…",
    "form.messagePlaceholder": "Racontez-nous le voyage dont vous rêvez…",
    "form.privacy":
      "J’accepte que mes données soient utilisées pour traiter ma demande, conformément à la politique de confidentialité.",
    "form.budget1": "Moins de CHF 1’500",
    "form.budget2": "CHF 1’500 – 3’000",
    "form.budget3": "CHF 3’000 – 5’000",
    "form.budget4": "Plus de CHF 5’000",
    "form.successQuote":
      "Merci ! Votre demande a bien été envoyée. Nous revenons vers vous rapidement.",
    "form.successContact":
      "Merci pour votre message ! Nous vous répondons rapidement.",

    // Footer
    "footer.tagline":
      "Une agence qui ouvre la porte d’un Maroc authentique.",
    "footer.navigation": "Navigation",
    "footer.quote": "Demande de devis",
    "footer.contact": "Contact",

    // Page metadata / errors
    "error.title": "Une erreur est survenue",
    "error.text":
      "Une erreur inattendue s’est produite. Vous pouvez réessayer.",
    "error.retry": "Réessayer",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.trips": "Journeys",
    "nav.destinations": "Destinations",
    "nav.experiences": "Experiences",
    "nav.circuits": "Our tours",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Actions
    "cta.plan": "Plan my trip",
    "cta.discover": "Discover our journeys",
    "cta.journey": "Discover this journey",
    "cta.contact": "Contact us",
    "cta.quote": "Request a quote",
    "cta.send": "Send",
    "cta.sendRequest": "Send my request",
    "cta.sendAnother": "Send another request",
    "cta.back": "Back",
    "cta.viewAllCircuits": "View all our tours",
    "cta.otherCircuits": "View other tours",
    "cta.getInformation": "Request information",
    "cta.talkProject": "Discuss your trip",

    // Hero
    "hero.title": "Discover Morocco, differently.",
    "hero.text":
      "Authentic journeys, thoughtfully designed for unforgettable experiences in Morocco.",
    "hero.trust": "Travel experiences in Morocco",

    // Shared content
    "common.home": "Home",
    "common.loading": "Loading…",
    "common.duration": "Duration",
    "common.walking": "Walking",
    "common.level": "Difficulty",
    "common.discoverMorocco": "Explore Morocco",
    "common.experiences": "Experiences",
    "common.destinations": "Destinations",
    "common.practicalInfo": "Practical information",
    "common.yourJourney": "Your journey",
    "common.yourNextAdventure": "Your next adventure",
    "common.discoverCircuit": "Discover this tour",
    "common.notFound": "Page not found",
    "common.circuitNotFound": "Tour not found",
    "common.notFoundDescription":
      "This page does not exist or is no longer available.",
    "common.circuitNotFoundDescription":
      "This tour is unavailable or the link is no longer valid.",

    // Homepage
    "home.eyebrow": "Voyager Autrement",
    "home.title": "Discover Morocco, differently.",
    "home.subtitle":
      "Authentic journeys, thoughtfully designed for unforgettable experiences.",
    "home.discoverTitle": "Discover Morocco at your own pace",
    "home.discoverText":
      "Remarkable landscapes, genuine encounters and experiences tailored to you.",
    "home.journeysTitle": "Our journeys",
    "home.journeysText":
      "Explore our itineraries and let’s imagine your next adventure together.",
    "home.destinationsTitle": "Inspiring destinations",
    "home.experiencesTitle": "Authentic experiences",
    "home.stepsTitle": "How to plan your trip",
    "home.ctaTitle": "Your Moroccan story starts here.",
    "home.ctaText":
      "Tell us what you have in mind and let’s create an adventure that feels like you.",

    // Journeys
    "trips.eyebrow": "Our journeys",
    "trips.title": "Journeys designed around you.",
    "trips.text":
      "Get inspired by our journeys — each one can be tailored to your wishes.",

    // Destinations
    "destinations.eyebrow": "Destinations",
    "destinations.title": "Discover Morocco’s landscapes.",
    "destinations.text":
      "From imperial cities to mountains and desert, explore Morocco’s diversity.",

    // Experiences
    "experiences.eyebrow": "Experiences",
    "experiences.title": "Experience Morocco from within.",
    "experiences.text":
      "Moments that stay with you: a night among the dunes, a shared meal, a meaningful encounter.",

    // Circuits
    "circuits.eyebrow": "Explore Morocco",
    "circuits.title": "Our tours in Morocco",
    "circuits.text":
      "From the Atlas Mountains to the vast Sahara, discover our destinations and let’s imagine your next adventure together.",
    "circuits.sectionTitle": "Find your next adventure",
    "circuits.sectionText":
      "From Atlas peaks to desert landscapes, choose what inspires you and let’s plan your journey together.",
    "circuits.ctaTitle": "Your Moroccan story starts here.",
    "circuits.ctaText":
      "Tell us what you have in mind and let’s create an adventure tailored to you.",
    "circuits.detailLabel": "A journey in Morocco",
    "circuits.spirit": "The spirit of the journey",
    "circuits.aboutTitle": "An adventure in the heart of Morocco",
    "circuits.highlightsLabel": "Discover",
    "circuits.highlightsTitle": "Tour highlights",
    "circuits.adaptTitle": "A journey tailored to you",
    "circuits.saffronLink": "Discover our saffron-themed journey",
    "circuits.totalDuration": "Total duration",
    "circuits.walkingDuration": "Walking duration",
    "circuits.bestPeriod": "Best time to travel",
    "circuits.dailyWalking": "Daily walking",
    "circuits.transport": "Luggage transport",
    "circuits.supervision": "Guiding team",
    "circuits.arrival": "Arrival city",
    "circuits.family": "This tour can be adapted for families",
    "circuits.practicalTitle": "Plan your adventure",
    "circuits.adaptNote":
      "Dates, stages and duration can be discussed to suit your plans.",
    "circuits.adviceTitle": "Need advice?",
    "circuits.adviceText":
      "Contact us to discuss your hiking experience, dates and the type of journey that suits you.",
    "circuits.bottomTitle": "Shall we plan this journey together?",
    "circuits.bottomText":
      "Tell us what you have in mind. We can discuss the route, dates and ways to tailor your tour.",

    // About
    "about.eyebrow": "About us",
    "about.title": "Discover Morocco with care and authenticity.",
    "about.ctaTitle": "Let’s plan your next journey.",
    "about.ctaText":
      "Share your wishes with us and we’ll create a journey tailored to you.",

    // Contact and quote
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s talk about your next journey.",
    "contact.text":
      "Have a question or a travel idea? We’d be delighted to hear from you.",
    "quote.eyebrow": "Request a quote",
    "quote.title": "Let’s imagine your journey.",
    "quote.text":
      "A few details are all we need. We’ll get back to you with a personalised, no-obligation proposal.",

    // Forms
    "form.firstName": "First name",
    "form.lastName": "Last name",
    "form.fullName": "Full name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.country": "Country",
    "form.dates": "Preferred dates",
    "form.travelers": "Number of travellers",
    "form.tripType": "Type of journey",
    "form.destinations": "Preferred destinations",
    "form.budget": "Approximate budget",
    "form.message": "Message",
    "form.choose": "Choose…",
    "form.perPerson": "Per person…",
    "form.datePlaceholder": "e.g. April 2027, 10 days",
    "form.destinationsPlaceholder": "Marrakech, desert, Atlas Mountains…",
    "form.messagePlaceholder": "Tell us about the journey you’re dreaming of…",
    "form.privacy":
      "I agree that my data may be used to process my request, in accordance with the privacy policy.",
    "form.budget1": "Under CHF 1,500",
    "form.budget2": "CHF 1,500–3,000",
    "form.budget3": "CHF 3,000–5,000",
    "form.budget4": "Over CHF 5,000",
    "form.successQuote":
      "Thank you! Your request has been received. We’ll get back to you shortly.",
    "form.successContact":
      "Thank you for your message! We’ll get back to you shortly.",

    // Footer
    "footer.tagline":
      "A travel company opening the door to an authentic Morocco.",
    "footer.navigation": "Navigation",
    "footer.quote": "Request a quote",
    "footer.contact": "Contact",

    // Page metadata / errors
    "error.title": "Something went wrong",
    "error.text":
      "An unexpected error occurred. You can try again.",
    "error.retry": "Try again",
  },
} as const;

export type TKey = keyof (typeof dict)["fr"];

export function localText(lang: Lang, values: { fr: string; en: string; de: string; it: string }) {
  return values[lang];
}

// German and Italian interface copy. Long-form editorial text on some pages
// remains in the source language until reviewed by a native speaker.
const extraTranslations: Partial<Record<Lang, Partial<Record<TKey, string>>>> = {
  de: {
    "nav.home": "Startseite", "nav.trips": "Reisen", "nav.destinations": "Reiseziele", "nav.experiences": "Erlebnisse", "nav.circuits": "Unsere Rundreisen", "nav.about": "Über uns", "nav.contact": "Kontakt",
    "cta.plan": "Meine Reise planen", "cta.discover": "Unsere Reisen entdecken", "cta.journey": "Reise entdecken", "cta.contact": "Kontaktieren Sie uns", "cta.quote": "Angebot anfragen", "cta.send": "Senden", "cta.sendRequest": "Anfrage senden", "cta.sendAnother": "Weitere Anfrage senden", "cta.back": "Zurück", "cta.viewAllCircuits": "Alle Rundreisen ansehen", "cta.otherCircuits": "Weitere Rundreisen ansehen", "cta.getInformation": "Informationen anfragen", "cta.talkProject": "Über Ihre Reise sprechen",
    "hero.title": "Marokko einmal anders entdecken.", "hero.text": "Authentische Reisen, sorgfältig gestaltet für unvergessliche Erlebnisse in Marokko.", "hero.trust": "Reiseerlebnisse in Marokko",
    "common.home": "Startseite", "common.loading": "Wird geladen …", "common.duration": "Dauer", "common.walking": "Wanderung", "common.level": "Schwierigkeitsgrad", "common.discoverMorocco": "Marokko entdecken", "common.experiences": "Erlebnisse", "common.destinations": "Reiseziele", "common.practicalInfo": "Praktische Informationen", "common.yourJourney": "Ihre Reise", "common.yourNextAdventure": "Ihr nächstes Abenteuer", "common.discoverCircuit": "Rundreise entdecken", "common.notFound": "Seite nicht gefunden", "common.circuitNotFound": "Rundreise nicht gefunden", "common.notFoundDescription": "Diese Seite existiert nicht oder ist nicht mehr verfügbar.", "common.circuitNotFoundDescription": "Diese Rundreise ist nicht verfügbar oder der Link ist ungültig.",
    "home.eyebrow": "Voyager Autrement", "home.title": "Marokko, einmal anders.", "home.subtitle": "Authentische Reisen, sorgfältig gestaltet für unvergessliche Erlebnisse.", "home.discoverTitle": "Entdecken Sie Marokko in Ihrem eigenen Tempo", "home.discoverText": "Großartige Landschaften, echte Begegnungen und Erlebnisse, die zu Ihnen passen.", "home.journeysTitle": "Unsere Reisen", "home.journeysText": "Entdecken Sie unsere Routen und planen wir gemeinsam Ihr nächstes Abenteuer.", "home.destinationsTitle": "Inspirierende Reiseziele", "home.experiencesTitle": "Authentische Erlebnisse", "home.stepsTitle": "So planen Sie Ihre Reise", "home.ctaTitle": "Ihre marokkanische Geschichte beginnt hier.", "home.ctaText": "Erzählen Sie uns von Ihren Wünschen und gestalten wir gemeinsam Ihr persönliches Abenteuer.",
    "trips.eyebrow": "Unsere Reisen", "trips.title": "Reiserouten, die zu Ihnen passen.", "trips.text": "Lassen Sie sich inspirieren – jede Reise kann ganz nach Ihren Wünschen angepasst werden.", "destinations.eyebrow": "Reiseziele", "destinations.title": "Entdecken Sie die Landschaften Marokkos.", "destinations.text": "Von den Königsstädten über die Berge bis zur Wüste: Entdecken Sie Marokkos Vielfalt.",
    "experiences.eyebrow": "Erlebnisse", "experiences.title": "Marokko hautnah erleben.", "experiences.text": "Unvergessliche Momente: eine Nacht in den Dünen, ein gemeinsames Essen, eine Begegnung.",
    "circuits.eyebrow": "Marokko entdecken", "circuits.title": "Unsere Rundreisen in Marokko", "circuits.text": "Vom Atlasgebirge bis zur Sahara: Entdecken Sie Marokkos Landschaften und planen Sie Ihr nächstes Abenteuer.", "circuits.sectionTitle": "Finden Sie Ihr nächstes Abenteuer", "circuits.sectionText": "Von den Gipfeln des Atlas bis zu den Wüstenlandschaften: Wählen Sie Ihre Traumkulisse.", "circuits.ctaTitle": "Ihre marokkanische Geschichte beginnt hier.", "circuits.ctaText": "Erzählen Sie uns von Ihren Wünschen und gestalten wir gemeinsam Ihr persönliches Abenteuer.", "circuits.detailLabel": "Reise in Marokko", "circuits.spirit": "Die Idee der Reise", "circuits.aboutTitle": "Ein Abenteuer im Herzen Marokkos", "circuits.highlightsLabel": "Zu entdecken", "circuits.highlightsTitle": "Höhepunkte der Rundreise", "circuits.adaptTitle": "Eine Reise, die sich Ihnen anpasst", "circuits.saffronLink": "Thematische Safranreise entdecken", "circuits.totalDuration": "Gesamtdauer", "circuits.walkingDuration": "Wanderzeit", "circuits.bestPeriod": "Beste Reisezeit", "circuits.dailyWalking": "Tägliche Gehzeit", "circuits.transport": "Gepäcktransport", "circuits.supervision": "Betreuung", "circuits.arrival": "Ankunftsstadt", "circuits.family": "Anpassung der Rundreise für Familien möglich", "circuits.practicalTitle": "Bereiten Sie Ihr Abenteuer vor", "circuits.adaptNote": "Termine, Etappen und Dauer können an Ihr Vorhaben angepasst werden.", "circuits.adviceTitle": "Sie wünschen eine Beratung?", "circuits.adviceText": "Kontaktieren Sie uns, um über Ihre Wandererfahrung, Ihre Termine und Ihre Reisevorstellungen zu sprechen.", "circuits.bottomTitle": "Planen wir diese Reise gemeinsam?", "circuits.bottomText": "Sprechen Sie mit uns über Ihre Wünsche. Gemeinsam besprechen wir Route, Termine und Anpassungsmöglichkeiten.",
    "about.eyebrow": "Über uns", "about.title": "Marokko – authentisch und mit Sorgfalt.", "about.ctaTitle": "Planen wir Ihre nächste Reise.", "about.ctaText": "Teilen Sie Ihre Wünsche mit uns und wir gestalten eine Reise, die zu Ihnen passt.", "contact.eyebrow": "Kontakt", "contact.title": "Sprechen wir über Ihre nächste Reise.", "contact.text": "Eine Frage oder eine Reiseidee? Wir freuen uns auf den Austausch mit Ihnen.", "quote.eyebrow": "Angebotsanfrage", "quote.title": "Gestalten wir Ihre Reise.", "quote.text": "Ein paar Angaben genügen. Wir senden Ihnen unverbindlich einen persönlichen Vorschlag.",
    "form.firstName": "Vorname", "form.lastName": "Nachname", "form.fullName": "Vollständiger Name", "form.email": "E-Mail", "form.phone": "Telefon", "form.country": "Land", "form.dates": "Gewünschte Reisedaten", "form.travelers": "Anzahl Reisende", "form.tripType": "Reiseart", "form.destinations": "Gewünschte Reiseziele", "form.budget": "Ungefähres Budget", "form.message": "Nachricht", "form.choose": "Auswählen …", "form.perPerson": "Pro Person …", "form.datePlaceholder": "z. B. April 2027, 10 Tage", "form.destinationsPlaceholder": "Marrakesch, Wüste, Atlas …", "form.messagePlaceholder": "Erzählen Sie uns von Ihrer Traumreise …", "form.privacy": "Ich stimme zu, dass meine Daten gemäß der Datenschutzerklärung zur Bearbeitung meiner Anfrage verwendet werden.", "form.budget1": "Unter CHF 1’500", "form.budget2": "CHF 1’500–3’000", "form.budget3": "CHF 3’000–5’000", "form.budget4": "Über CHF 5’000", "form.successQuote": "Vielen Dank! Ihre Anfrage wurde übermittelt. Wir melden uns in Kürze.", "form.successContact": "Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze.",
    "footer.tagline": "Ein Reiseunternehmen, das Ihnen die Tür zu einem authentischen Marokko öffnet.", "footer.navigation": "Navigation", "footer.quote": "Angebot anfragen", "footer.contact": "Kontakt", "error.title": "Ein Fehler ist aufgetreten", "error.text": "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.", "error.retry": "Erneut versuchen"
  },
  it: {
    "nav.home": "Home", "nav.trips": "Viaggi", "nav.destinations": "Destinazioni", "nav.experiences": "Esperienze", "nav.circuits": "I nostri itinerari", "nav.about": "Chi siamo", "nav.contact": "Contatti",
    "cta.plan": "Pianifica il mio viaggio", "cta.discover": "Scopri i nostri viaggi", "cta.journey": "Scopri il viaggio", "cta.contact": "Contattaci", "cta.quote": "Richiedi un preventivo", "cta.send": "Invia", "cta.sendRequest": "Invia la mia richiesta", "cta.sendAnother": "Invia un’altra richiesta", "cta.back": "Indietro", "cta.viewAllCircuits": "Vedi tutti gli itinerari", "cta.otherCircuits": "Vedi altri itinerari", "cta.getInformation": "Richiedi informazioni", "cta.talkProject": "Parliamo del tuo viaggio",
    "hero.title": "Scopri il Marocco, in modo diverso.", "hero.text": "Viaggi autentici, curati nei dettagli per vivere esperienze indimenticabili in Marocco.", "hero.trust": "Esperienze di viaggio in Marocco",
    "common.home": "Home", "common.loading": "Caricamento…", "common.duration": "Durata", "common.walking": "Trekking", "common.level": "Difficoltà", "common.discoverMorocco": "Esplora il Marocco", "common.experiences": "Esperienze", "common.destinations": "Destinazioni", "common.practicalInfo": "Informazioni pratiche", "common.yourJourney": "Il tuo viaggio", "common.yourNextAdventure": "La tua prossima avventura", "common.discoverCircuit": "Scopri l’itinerario", "common.notFound": "Pagina non trovata", "common.circuitNotFound": "Itinerario non trovato", "common.notFoundDescription": "Questa pagina non esiste o non è più disponibile.", "common.circuitNotFoundDescription": "Questo itinerario non è disponibile o il link non è più valido.",
    "home.eyebrow": "Voyager Autrement", "home.title": "Il Marocco, in modo diverso.", "home.subtitle": "Viaggi autentici, pensati con cura per esperienze indimenticabili.", "home.discoverTitle": "Scopri il Marocco al tuo ritmo", "home.discoverText": "Paesaggi straordinari, incontri sinceri ed esperienze su misura.", "home.journeysTitle": "I nostri viaggi", "home.journeysText": "Scopri i nostri itinerari e immaginiamo insieme la tua prossima avventura.", "home.destinationsTitle": "Destinazioni da sogno", "home.experiencesTitle": "Esperienze autentiche", "home.stepsTitle": "Come preparare il tuo viaggio", "home.ctaTitle": "La tua storia marocchina inizia qui.", "home.ctaText": "Raccontaci i tuoi desideri e creiamo insieme un’avventura su misura.",
    "trips.eyebrow": "I nostri viaggi", "trips.title": "Itinerari pensati per te.", "trips.text": "Lasciati ispirare: ogni viaggio può essere adattato ai tuoi desideri.", "destinations.eyebrow": "Destinazioni", "destinations.title": "Scopri i paesaggi del Marocco.", "destinations.text": "Dalle città imperiali alle montagne e al deserto, esplora la varietà del Marocco.",
    "experiences.eyebrow": "Esperienze", "experiences.title": "Vivere il Marocco da vicino.", "experiences.text": "Momenti che restano: una notte tra le dune, un pasto condiviso, un incontro.",
    "circuits.eyebrow": "Esplora il Marocco", "circuits.title": "I nostri itinerari in Marocco", "circuits.text": "Dalle montagne dell’Atlante alle distese del Sahara, scopri i paesaggi del Marocco e prepara la tua prossima avventura.", "circuits.sectionTitle": "Trova la tua prossima avventura", "circuits.sectionText": "Dalle cime dell’Atlante ai paesaggi del deserto, scegli l’esperienza che ti ispira.", "circuits.ctaTitle": "La tua storia marocchina inizia qui.", "circuits.ctaText": "Raccontaci i tuoi desideri e creiamo insieme un’avventura su misura.", "circuits.detailLabel": "Viaggio in Marocco", "circuits.spirit": "Lo spirito del viaggio", "circuits.aboutTitle": "Un’avventura nel cuore del Marocco", "circuits.highlightsLabel": "Da scoprire", "circuits.highlightsTitle": "I momenti più belli dell’itinerario", "circuits.adaptTitle": "Un viaggio su misura per te", "circuits.saffronLink": "Scopri il viaggio tematico dedicato allo zafferano", "circuits.totalDuration": "Durata totale", "circuits.walkingDuration": "Durata delle escursioni", "circuits.bestPeriod": "Periodo consigliato", "circuits.dailyWalking": "Cammino quotidiano", "circuits.transport": "Trasporto bagagli", "circuits.supervision": "Accompagnamento", "circuits.arrival": "Città di arrivo", "circuits.family": "Possibilità di adattare l’itinerario alle famiglie", "circuits.practicalTitle": "Prepara la tua avventura", "circuits.adaptNote": "Date, tappe e durata possono essere adattate al tuo progetto.", "circuits.adviceTitle": "Hai bisogno di un consiglio?", "circuits.adviceText": "Contattaci per parlare della tua esperienza di trekking, delle date e del viaggio più adatto a te.", "circuits.bottomTitle": "Prepariamo questo viaggio insieme?", "circuits.bottomText": "Raccontaci i tuoi desideri: parleremo del percorso, delle date e delle possibilità di personalizzazione.",
    "about.eyebrow": "Chi siamo", "about.title": "Il Marocco, con cura e autenticità.", "about.ctaTitle": "Immaginiamo il tuo prossimo viaggio.", "about.ctaText": "Condividi i tuoi desideri e creeremo un viaggio che ti somiglia.", "contact.eyebrow": "Contatti", "contact.title": "Parliamo del tuo prossimo viaggio.", "contact.text": "Hai una domanda o un progetto di viaggio? Saremo felici di parlarne con te.", "quote.eyebrow": "Richiesta di preventivo", "quote.title": "Immaginiamo il tuo viaggio.", "quote.text": "Bastano poche informazioni. Ti invieremo una proposta personalizzata senza impegno.",
    "form.firstName": "Nome", "form.lastName": "Cognome", "form.fullName": "Nome completo", "form.email": "E-mail", "form.phone": "Telefono", "form.country": "Paese", "form.dates": "Date desiderate", "form.travelers": "Numero di viaggiatori", "form.tripType": "Tipo di viaggio", "form.destinations": "Destinazioni desiderate", "form.budget": "Budget indicativo", "form.message": "Messaggio", "form.choose": "Scegli…", "form.perPerson": "A persona…", "form.datePlaceholder": "es. aprile 2027, 10 giorni", "form.destinationsPlaceholder": "Marrakech, deserto, Atlante…", "form.messagePlaceholder": "Raccontaci il viaggio che sogni…", "form.privacy": "Acconsento all’utilizzo dei miei dati per gestire la richiesta, secondo l’informativa sulla privacy.", "form.budget1": "Meno di CHF 1’500", "form.budget2": "CHF 1’500–3’000", "form.budget3": "CHF 3’000–5’000", "form.budget4": "Oltre CHF 5’000", "form.successQuote": "Grazie! La tua richiesta è stata inviata. Ti ricontatteremo al più presto.", "form.successContact": "Grazie per il messaggio! Ti risponderemo al più presto.",
    "footer.tagline": "Un’agenzia che apre le porte a un Marocco autentico.", "footer.navigation": "Navigazione", "footer.quote": "Richiedi un preventivo", "footer.contact": "Contatti", "error.title": "Si è verificato un errore", "error.text": "Si è verificato un errore imprevisto. Puoi riprovare.", "error.retry": "Riprova"
  }
};

const Ctx = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TKey) => string;
}>({
  lang: "fr",
  setLang: () => {},
  t: (key) => dict.fr[key],
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("va-lang") as Lang | null;
    const queryLang = new URLSearchParams(window.location.search).get("lang") as Lang | null;
    const browserLang = navigator.languages.map((value) => value.slice(0, 2)).find((value): value is Lang => LANGS.includes(value as Lang));
    const initial = queryLang && LANGS.includes(queryLang) ? queryLang : saved && LANGS.includes(saved) ? saved : browserLang ?? "fr";
    setLangState(initial);
    document.documentElement.lang = initial;
    if (!saved || !LANGS.includes(saved)) localStorage.setItem("va-lang", initial);
  }, []);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    localStorage.setItem("va-lang", nextLang);
    document.documentElement.lang = nextLang;
    const url = new URL(window.location.href);
    if (nextLang === "fr") url.searchParams.delete("lang");
    else url.searchParams.set("lang", nextLang);
    window.history.replaceState({}, "", url);
  };

  const t = (key: TKey) => extraTranslations[lang]?.[key] ?? (lang === "fr" ? dict.fr[key] : dict.en[key]);

  return (
    <Ctx.Provider value={{ lang, setLang, t }}>
      {children}
    </Ctx.Provider>
  );
}

export const useI18n = () => useContext(Ctx);
