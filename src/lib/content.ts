import heroSahara from "@/assets/hero-sahara.jpg";
import marrakech from "@/assets/marrakech.jpg";
import atlas from "@/assets/atlas.jpg";
import essaouira from "@/assets/essaouira.jpg";
import riad from "@/assets/riad.jpg";
import desertCamp from "@/assets/desert-camp.jpg";
import fes from "@/assets/fes.jpg";
import gastronomy from "@/assets/gastronomy.jpg";

export const images = { heroSahara, marrakech, atlas, essaouira, riad, desertCamp, fes, gastronomy };

// Durations and descriptions are editable placeholders.
export const journeys = [
  { slug: "marrakech-atlas", title: "Marrakech & Atlas", place: "Marrakech · Haut Atlas", duration: "7 jours", image: marrakech, text: "Les jardins et les riads de la ville ocre, puis le calme des villages berbères au pied des sommets." },
  { slug: "desert", title: "Échappée dans le désert", place: "Merzouga · Sahara", duration: "5 jours", image: heroSahara, text: "Les dunes de l’Erg Chebbi au coucher du soleil, une nuit sous les étoiles en campement." },
  { slug: "villes-imperiales", title: "Villes impériales", place: "Fès · Meknès · Rabat", duration: "9 jours", image: fes, text: "Médinas millénaires, artisans et palais : un voyage au cœur de l’histoire du Maroc." },
  { slug: "cote-atlantique", title: "Côte atlantique", place: "Essaouira · Agadir", duration: "6 jours", image: essaouira, text: "Remparts battus par le vent, port de pêche bleu et longues plages de l’océan." },
  { slug: "famille", title: "Aventure en famille", place: "Marrakech · Atlas · Désert", duration: "8 jours", image: atlas, text: "Un rythme adapté aux enfants, des rencontres, des balades et des souvenirs partagés." },
  { slug: "sur-mesure", title: "Voyage sur mesure", place: "Le Maroc qui vous ressemble", duration: "Durée libre", image: riad, text: "Vous nous dites ce dont vous rêvez, nous dessinons ensemble un itinéraire unique." },
];

export const destinations = [
  { name: "Marrakech", image: marrakech, text: "Médina, jardins, riads et souks : l’énergie de la ville ocre." },
  { name: "Merzouga & Sahara", image: heroSahara, text: "Dunes dorées, silence et nuits étoilées." },
  { name: "Haut Atlas", image: atlas, text: "Vallées verdoyantes et villages en pisé." },
  { name: "Essaouira", image: essaouira, text: "La douceur atlantique et ses remparts." },
  { name: "Fès", image: fes, text: "La plus ancienne médina du monde arabe." },
  { name: "Ouarzazate", image: desertCamp, text: "Porte du désert, kasbahs et paysages de cinéma." },
  { name: "Agadir", image: essaouira, text: "Plages et soleil toute l’année." },
  { name: "Chefchaouen", image: riad, text: "Ruelles bleues au cœur du Rif." },
];

export const experiences = [
  { title: "Nuits dans le désert", image: desertCamp, text: "Lanternes, feu de camp et ciel infini." },
  { title: "Gastronomie marocaine", image: gastronomy, text: "Tajines, thé à la menthe, cours de cuisine." },
  { title: "Villages berbères", image: atlas, text: "Rencontres et hospitalité dans l’Atlas." },
  { title: "Riads d’exception", image: riad, text: "Dormir au calme, entre patio et fontaine." },
  { title: "Souks & médinas", image: fes, text: "Artisans, couleurs et ruelles secrètes." },
  { title: "Océan & plages", image: essaouira, text: "Vent, vagues et poisson grillé au port." },
];

export const tripTypes = ["Couple", "Famille", "Amis", "Voyage privé", "Groupe", "Voyage sur mesure"];
