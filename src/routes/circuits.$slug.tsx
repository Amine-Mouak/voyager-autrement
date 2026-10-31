
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  MapPin,
  Mountain,
  Users,
  Backpack,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { useI18n, type Lang } from "@/lib/i18n";
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

type Circuit = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  duration: string;
  walking: string;
  period: string;
  level: string;
  dailyWalking: string;
  transport: string;
  supervision: string;
  arrival: string;
  description: string;
  highlights: string[];
  extra?: string;
  family?: boolean;
  themeLink?: string;
};

const circuits: Circuit[] = [
  {
    slug: "jbel-siroua",
    title: "Jbel Siroua, randonnée au pays du safran",
    tagline: "Dans notre jardin secret, vous êtes accueillis comme à la maison",
    image: jbelSiroua,
    duration: "9 jours",
    walking: "5 jours et demi de marche",
    period: "Printemps et automne",
    level: "Facile",
    dailyWalking: "Environ 5 à 6 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech, Agadir ou Ouarzazate",
    description:
      "Au départ de Taliouine, partez à la découverte du Siroua, un massif volcanique vivant et coloré, ponctué de villages berbères et de terrasses cultivées. Depuis ses hauteurs, le sommet du Siroua, à 3 305 m, ouvre le regard du Haut Atlas jusqu'aux portes du Sahara. Le voyage mêle paysages minéraux, patrimoine, rencontres et traditions rurales. Au printemps, les amandiers en fleurs illuminent les vallées ; en octobre, les familles récoltent le safran, véritable or rouge de la région, célébré lors du festival de Taliouine vers la fin du mois.",
    highlights: [
      "Découvrir les paysages volcaniques et les villages du Siroua",
      "Profiter de panoramas entre Haut Atlas et Sahara",
      "Rencontrer les producteurs et découvrir le safran local",
      "Marcher au printemps parmi les amandiers en fleurs",
      "Atteindre les hauteurs du Siroua à 3 305 m",
    ],
    extra:
      "Les dates, la durée et l'itinéraire peuvent être adaptés à votre projet. Une randonnée thématique consacrée au safran peut également être organisée.",
    family: true,
    themeLink:
      "http://www.zafrani.ch/index.php/voyages-a-theme/le-safran-du-siroua",
  },
  {
    slug: "sahara",
    title: "Sahara, une immersion douce",
    tagline: "Dans le vaste univers de notre dromadaire Zafrani",
    image: sahara,
    duration: "9 à 12 jours",
    walking: "5 à 6 jours de marche",
    period: "D'octobre à la mi-avril",
    level: "Facile",
    dailyWalking: "Environ 5 à 6 h par jour",
    transport: "Dromadaires pour transporter les bagages",
    supervision: "Guide et équipe locale : cuisinier et chameliers",
    arrival: "Ouarzazate ou Marrakech",
    description:
      "Ce voyage associe les balades dans le désert à la découverte du patrimoine de la vallée du Drâa. Ici, l'objectif n'est pas la performance sportive, mais l'immersion dans les grands espaces sahariens. Les dromadaires transportent les bagages pour vous permettre de marcher léger. Au fil des étapes, observez les traces de la faune, découvrez comment la nature et les habitants s'adaptent à l'aridité, puis retrouvez le campement pour savourer un tajine et partager les rythmes paisibles du Sahara sous un ciel étoilé.",
    highlights: [
      "Marcher au rythme tranquille du désert",
      "Observer les traces de la faune et les paysages sahariens",
      "Rencontrer les nomades et découvrir leur mode de vie",
      "Passer des nuits en bivouac sous les étoiles",
      "Explorer également les oasis et le patrimoine du Drâa",
    ],
    extra:
      "Ce circuit peut être combiné avec la découverte des oasis du Drâa ou avec une randonnée au Jbel Saghro pour créer un voyage d'environ 15 jours. Les dates, la ville d'arrivée, la durée et l'itinéraire sont adaptables.",
    family: true,
  },
  {
    slug: "jbel-saghro",
    title: "Jbel Saghro, l'aventure nomade",
    tagline: "Connaissez-vous l'histoire des amoureux Ali et Eto !",
    image: jbelSaghro,
    duration: "8 ou 10 jours",
    walking: "5 jours de marche",
    period: "Octobre à novembre et février à mai",
    level: "Randonnée",
    dailyWalking: "Selon l'étape et l'itinéraire choisi",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Ouarzazate ou Marrakech",
    description:
      "Entre les vallées du Dadès et du Drâa, le massif du Saghro dévoile un univers minéral aux allures lunaires : aiguilles rocheuses, canyons, plateaux et horizons dégagés. C'est aussi un territoire de transhumance pour les Aït Atta, dont les troupeaux et les campements font partie du paysage. Accompagné d'une équipe locale, vous avancez au rythme de la vie nomade, à la recherche de l'eau et des coins d'ombre des palmeraies avant de retrouver les hauts plateaux. L'ascension du mont Kouaouch, à 2 662 m, récompense les marcheurs par une vue qui s'étend du Haut Atlas au Jbel Bani.",
    highlights: [
      "Traverser des paysages rocheux et des plateaux lunaires",
      "Découvrir les traditions de transhumance des Aït Atta",
      "Marcher entre canyons, oasis et reliefs volcaniques",
      "Gravir le mont Kouaouch, à 2 662 m",
      "Profiter de grands espaces propices à la contemplation",
    ],
    extra:
      "Le Saghro peut se combiner avec une randonnée dans le Sahara pour former un voyage d'environ 15 jours. Le programme peut être adapté à vos dates, à la durée souhaitée et au niveau de votre groupe.",
    family: true,
  },
  {
    slug: "jbel-mgoun",
    title: "Jbel Mgoun, traversée du Haut Atlas central",
    tagline:
      "De la vallée heureuse à la vallée des roses : émotions, couleurs et rencontres",
    image: jbelMgoun,
    duration: "12 jours",
    walking: "9 jours de marche",
    period: "De juin à octobre",
    level: "Bon marcheur",
    dailyWalking: "Environ 6 à 7 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech ou Ouarzazate",
    description:
      "Cette traversée du Haut Atlas central vous emmène autour du Jbel Mgoun, dont le sommet atteint 4 068 m, le deuxième plus haut d'Afrique du Nord. Son ascension, facultative, reste accessible aux randonneurs correctement préparés. Le parcours alterne vallées verdoyantes au nord, pâturages d'altitude, roches multicolores et gorges impressionnantes que l'on traverse parfois dans l'eau. Plus au sud, les paysages deviennent minéraux avant de laisser place aux grandes oasis. Les villages et les rencontres le long de l'oued Mgoun donnent à cette traversée toute sa dimension humaine, jusqu'à la vallée du Dadès et ses kasbahs au milieu des palmeraies.",
    highlights: [
      "Explorer les vallées et pâturages du Haut Atlas central",
      "Traverser les gorges spectaculaires du Mgoun",
      "Découvrir les villages berbères et leurs cultures",
      "Envisager l'ascension facultative du Mgoun à 4 068 m",
      "Terminer dans la vallée du Dadès et ses kasbahs",
    ],
    extra:
      "Le Haut Atlas central offre de nombreuses possibilités : Aït Bougmez, Tessaout, Zawyat Ahansal, Imilchil, vallée des Roses, Dadès et Todra. Des itinéraires plus courts, des traversées longues, des programmes familiaux ou des treks plus sportifs peuvent être conçus sur mesure.",
  },
  {
    slug: "tizi-n-test",
    title: "Tizi N'Test, le pays des noyers centenaires",
    tagline:
      "De la mosquée de Tinmal au plateau du Techka, découverte d'une vallée préservée",
    image: tiziNTest,
    duration: "8 à 9 jours",
    walking: "5 jours de marche",
    period: "De la mi-mai à octobre",
    level: "Facile à modéré",
    dailyWalking: "Environ 5 à 7 h par jour",
    transport: "Mules et ânes de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech ou Agadir",
    description:
      "À l'ouest du Haut Atlas, loin des itinéraires les plus fréquentés, le pays du Tizi N'Test domine la plaine du Souss. Les roches ocre et violettes du versant sud contrastent avec les vallées vertes du nord. En chemin, les senteurs de thuya et de genévrier accompagnent les sentiers qui suivent l'oued N'Fiss, traversent des villages berbères en pierre et longent des terrasses agricoles. Noyers centenaires, pistachiers de l'Atlas et pâturages d'été ponctuent la route jusqu'au plateau du Techka. Le parcours permet également de gravir deux sommets dépassant les 3 000 m.",
    highlights: [
      "Découvrir la mosquée historique de Tinmal",
      "Marcher le long de l'oued N'Fiss",
      "Traverser des villages de pierre et des terrasses agricoles",
      "Admirer les noyers et pistachiers de l'Atlas",
      "Rejoindre les pâturages du plateau du Techka",
    ],
    extra:
      "Le circuit peut être complété par un séjour sur la côte atlantique. Les étapes et la durée peuvent être adaptées selon vos envies.",
  },
  {
    slug: "randonnee-cotiere",
    title: "Randonnée côtière au vent de l'Atlantique",
    tagline: "Dans le sillage du faucon d'Éléonore, d'Essaouira à Imsouane",
    image: randonneeCotiere,
    duration: "9 jours",
    walking: "6 jours de marche",
    period: "Octobre à novembre et février à mai",
    level: "Randonnée côtière",
    dailyWalking: "Selon l'étape et l'itinéraire choisi",
    transport: "Dromadaires pour les bagages ; âne de selle possible pour les enfants",
    supervision: "Guide et équipe locale : cuisinier et chameliers",
    arrival: "Marrakech ou Agadir",
    description:
      "Entre Essaouira et Imsouane, suivez le littoral atlantique à travers des villages de pêcheurs, des plages sauvages et des falaises ouvertes sur l'océan. Marchez pieds nus sur le sable parfois lisse comme un miroir, puis partagez un tajine de poisson au bivouac sous les étoiles. Les amateurs de nature pourront observer les oiseaux du rivage et les fous de Bassan ; selon la saison, le faucon d'Éléonore peut également être présent. Au printemps, les fleurs colorent le chemin et les arganiers ponctuent le paysage. À Essaouira, l'ancienne Mogador vous accueille derrière ses remparts blancs. Les échanges avec l'équipe locale Aït Haha ajoutent à ce voyage une belle dimension humaine.",
    highlights: [
      "Marcher entre plages sauvages, criques et falaises",
      "Découvrir les villages de pêcheurs de la côte atlantique",
      "Observer les oiseaux du littoral selon la saison",
      "Visiter Essaouira et ses remparts blancs",
      "Partager les soirées et les repas au bivouac",
    ],
    extra:
      "Cette randonnée peut être associée à un séjour équestre. Les dates et les étapes peuvent être adaptées, et le programme convient aussi aux familles.",
    family: true,
  },
  {
    slug: "tafraoute",
    title: "Anti-Atlas de Tafraoute, le sang du dragon",
    tagline: "Sur les traces des antilopes, de montagne en oasis",
    image: tafraout,
    duration: "9 jours",
    walking: "5 jours et demi de marche en étoile",
    period: "De l'automne au début du printemps, idéalement en janvier-février",
    level: "Facile",
    dailyWalking: "Environ 5 à 7 h par jour",
    transport: "Véhicule d'assistance ; hébergement en gîte",
    supervision: "Guide et équipe locale selon le programme",
    arrival: "Agadir ; Marrakech ou Ouarzazate possibles",
    description:
      "Autour de Tafraoute, l'Anti-Atlas compose une palette de roches roses, vertes et blanches, de blocs de granite arrondis et de reliefs de quartzite. Les randonnées conduisent dans la vallée d'Ameln, au pied du Jbel El Kest, dont on peut rejoindre le point culminant, puis vers des gorges et de magnifiques villages aux maisons traditionnelles roses et blanches. L'oasis d'Aït Mansour offre un contraste luxuriant. Dans un lieu discret pousse le dragonnier ajgal, surnommé « sang du dragon ». Les anciens sentiers et les cultures parfois abandonnées laissent aujourd'hui davantage de place à la nature, dans une région où l'on peut espérer observer une gazelle de Cuvier, un sanglier ou, plus rarement, un mouflon à manchettes.",
    highlights: [
      "Découvrir les rochers de granite et les reliefs colorés",
      "Explorer la vallée d'Ameln et le Jbel El Kest",
      "Marcher dans les gorges et les villages traditionnels",
      "Profiter de l'oasis verdoyante d'Aït Mansour",
      "Découvrir le dragonnier ajgal et la flore locale",
    ],
    extra:
      "Les randonnées peuvent être organisées en étoile et adaptées à votre rythme. Le programme convient également aux familles.",
    family: true,
  },
  {
    slug: "toubkal",
    title: "Tour du Toubkal, vallées berbères du Haut Atlas",
    tagline: "D'une vallée à l'autre, par-delà les cols touchant le ciel",
    image: toubkal,
    duration: "8 à 9 jours",
    walking: "6 à 7 jours de marche",
    period: "De juin à octobre",
    level: "Bon marcheur",
    dailyWalking: "Environ 6 à 7 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech",
    description:
      "Ce trek s'adresse aux marcheurs qui aiment la montagne, les longues journées et les paysages sauvages. D'anciens sentiers muletiers relient les villages berbères et franchissent des cols d'altitude, parfois loin des chemins les plus fréquentés. Le point fort du voyage est l'ascension du Jbel Toubkal, qui culmine à 4 168 m. Tout au long de la traversée, les vallées habitées et les reliefs de haute montagne offrent un contraste saisissant avec l'animation de Marrakech, ses palais et la place Jemaa el-Fna.",
    highlights: [
      "Traverser les vallées berbères du Haut Atlas",
      "Franchir des cols offrant de vastes panoramas",
      "Découvrir les sentiers et villages de montagne",
      "Viser le sommet du Jbel Toubkal, à 4 168 m",
      "Associer paysages sauvages et rencontres locales",
    ],
    extra:
      "Des randonnées plus courtes de 2 à 4 jours sont également possibles dans la région. Selon la saison et les conditions, le secteur se prête aussi au ski de randonnée. Un programme personnalisé peut être élaboré.",
  },
  {
    slug: "yagour-zat",
    title: "Plateau du Yagour & vallée du Zat, cheminement millénaire",
    tagline: "Gravures rupestres du Haut Atlas, un inestimable trésor",
    image: yagouZat,
    duration: "9 jours",
    walking: "Traversée de 7 jours ou boucle de 6 jours",
    period: "Du printemps à l'automne",
    level: "Facile",
    dailyWalking: "Environ 5 à 6 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech",
    description:
      "À proximité de Marrakech, le vaste plateau du Yagour se trouve au pied du Haut Atlas et constitue un ancien territoire pastoral. Il abrite l'un des ensembles d'art rupestre les plus riches du massif, gravé dans le grès rose : bœufs aux cornes recourbées, roues solaires, armes et silhouettes humaines témoignent de pratiques remontant à la fin du Néolithique. Vous pouvez choisir une traversée de sept jours, de Tachdirt au col du Tizi N'Tichka, en passant par les vallées de Tachdirt, de l'Ounila et du Zat, ou une boucle de six jours au départ de la vallée de l'Ounila. Pour les marcheurs qui souhaitent prolonger l'aventure, le sommet sacré du Meltsene, à 3 595 m, peut faire l'objet d'une journée supplémentaire.",
    highlights: [
      "Explorer le plateau pastoral du Yagour",
      "Découvrir les gravures rupestres préhistoriques",
      "Traverser des vallées et villages berbères",
      "Choisir entre une traversée et un itinéraire en boucle",
      "Envisager l'ascension facultative du Meltsene, à 3 595 m",
    ],
    extra:
      "Le plateau du Yagour peut aussi se découvrir sur 3 à 4 jours depuis Marrakech. Les étapes sont adaptables et le circuit peut convenir aux familles.",
    family: true,
  },
  {
    slug: "tessaout-ait-bouli",
    title: "Ounila, Tessaout & Aït Bouli, pays amazighs",
    tagline: "Montagnes multicolores et splendides villages de l'Atlas",
    image: tessaout,
    duration: "9 jours",
    walking: "Traversée de 6 jours",
    period: "Du printemps à l'automne",
    level: "Modéré",
    dailyWalking: "Environ 6 à 7 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech",
    description:
      "Cette randonnée relie la vallée de l'Ounila à la Tessaout, puis à Aït Bouli, au cœur du Haut Atlas. Le parcours traverse des vallées vivantes et verdoyantes, des villages traditionnels comme Megdez et des pâturages d'altitude. Le lac bleu de Tamda se niche sous les montagnes d'Anghomar. Le sentier qui relie la Tessaout à Aït Bouli compte parmi les plus beaux itinéraires du massif : bivouac dans une vallée préservée, chemin en balcon au pied de la crête du Jbel Rat et panoramas changeants accompagnent la marche. À Aït Bouli, les grès rouges contrastent avec les terrasses vertes et les témoignages anciens d'art rupestre.",
    highlights: [
      "Traverser les vallées de l'Ounila, de la Tessaout et d'Aït Bouli",
      "Découvrir les villages traditionnels, dont Megdez",
      "Admirer le lac bleu de Tamda et les montagnes d'Anghomar",
      "Marcher sur un sentier en balcon sous le Jbel Rat",
      "Découvrir les paysages et les traces d'art rupestre d'Aït Bouli",
    ],
    extra:
      "Le Haut Atlas central permet de créer des itinéraires variés autour d'Aït Bougmez, de la Tessaout, de Zawyat Ahansal, de la vallée des Roses et de l'Ounila. Des séjours familiaux, des traversées plus longues et des treks sportifs peuvent être organisés sur mesure.",
  },
  {
    slug: "oued-noun",
    title: "Sahara atlantique, Oued Noun",
    tagline: "Désert, oasis et océan : un voyage dans le monde sahraoui",
    image: ouedNoun,
    duration: "11 jours",
    walking: "4 jours de marche",
    period: "De septembre à avril",
    level: "Facile",
    dailyWalking: "Environ 5 à 6 h par jour",
    transport: "Dromadaires et véhicule d'assistance",
    supervision: "Guide et équipe locale : cuisinier et chameliers",
    arrival: "Agadir ou Marrakech",
    description:
      "Tout au sud du Maroc, ce voyage singulier vous fait découvrir l'univers saharien dans sa rencontre avec l'Atlantique. Désert, oasis, montagnes et océan composent un paysage étonnamment varié, rythmé par la culture hassanie et les chants de la guedra. Au fil du parcours, découvrez la flore et la faune de cette zone de transition, croisez des nomades accompagnés de leurs dromadaires et chèvres, et rencontrez les cultivateurs d'oasis et les artisans. Les étoffes colorées des femmes, le rituel du thé et l'accueil sous les tentes donnent à cette aventure une dimension culturelle forte. La randonnée de quatre jours mène notamment vers l'oasis de Tighermt, près de Guelmim, des sources chaudes et froides et de vastes plateaux bordés par les reliefs minéraux de l'Anti-Atlas. Le voyage s'achève à la grande Plage Blanche, face aux vagues de l'océan.",
    highlights: [
      "Explorer la rencontre entre désert, oasis et océan",
      "Découvrir la culture hassanie et le rituel du thé",
      "Rencontrer les nomades, les cultivateurs et les artisans",
      "Marcher près de l'oasis de Tighermt et des plateaux minéraux",
      "Terminer le voyage face à l'Atlantique, à la Plage Blanche",
    ],
    extra:
      "Une boucle en véhicule 4×4 peut être proposée au retour afin de découvrir davantage l'Anti-Atlas et la région de Tafraoute.",
  },
];

const circuitTranslations: Record<string, Partial<Circuit>> = {
  "jbel-siroua": {
    title: "Jbel Siroua, Hiking in the Land of Saffron",
    tagline: "Discover our hidden gem, where you are welcomed like family",
    duration: "9 days",
    walking: "5.5 days of hiking",
    period: "Spring and autumn",
    level: "Easy",
    dailyWalking: "Around 5–6 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech, Agadir or Ouarzazate",
    description:
      "Starting from Taliouine, discover Siroua, a colourful volcanic mountain range dotted with Amazigh villages and cultivated terraces. From its heights, the 3,305-metre summit offers views stretching from the High Atlas towards the Sahara. This journey combines striking landscapes, heritage, encounters and rural traditions. In spring, almond blossoms brighten the valleys; in October, families harvest saffron, the region’s precious red gold, celebrated at the Taliouine festival towards the end of the month.",
    highlights: [
      "Discover Siroua’s volcanic landscapes and villages",
      "Enjoy panoramic views between the High Atlas and Sahara",
      "Meet local producers and discover saffron",
      "Hike among almond blossoms in spring",
      "Reach the heights of Siroua at 3,305 metres",
    ],
    extra:
      "Dates, duration and itinerary can be tailored to your plans. A themed hiking trip focused on saffron can also be arranged.",
  },
  sahara: {
    title: "Sahara, a Gentle Immersion",
    tagline: "Discover the vast desert world of our camel, Zafrani",
    duration: "9–12 days",
    walking: "5–6 days of hiking",
    period: "October to mid-April",
    level: "Easy",
    dailyWalking: "Around 5–6 hours per day",
    transport: "Camels carry the luggage",
    supervision: "Guide and local team, including a cook and camel handlers",
    arrival: "Ouarzazate or Marrakech",
    description:
      "This journey combines desert walks with the heritage of the Drâa Valley. The aim is not athletic performance, but an immersive experience in the vast Saharan landscapes. Camels carry your luggage so you can walk light. Along the way, discover wildlife tracks and learn how nature and local communities adapt to the arid environment. At the end of each day, return to camp to enjoy a tagine and the peaceful rhythms of the Sahara beneath a star-filled sky.",
    highlights: [
      "Walk at the peaceful rhythm of the desert",
      "Discover wildlife tracks and Saharan landscapes",
      "Meet nomadic communities and learn about their way of life",
      "Spend nights camping beneath the stars",
      "Explore the Drâa oases and their heritage",
    ],
    extra:
      "Combine this trip with a visit to the Drâa oases or a hike in Jbel Saghro for a journey of around 15 days. Dates, arrival city, duration and itinerary can be adapted.",
  },
  "jbel-saghro": {
    title: "Jbel Saghro, a Nomadic Adventure",
    tagline: "Discover the story of Ali and Eto, the two lovers",
    duration: "8 or 10 days",
    walking: "5 days of hiking",
    period: "October–November and February–May",
    level: "Hiking",
    dailyWalking: "Depending on the stage and chosen itinerary",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Ouarzazate or Marrakech",
    description:
      "Between the Dadès and Drâa valleys, the Saghro massif reveals a lunar world of rocky spires, canyons, plateaus and wide-open horizons. It is also a seasonal migration area for the Aït Atta, whose herds and camps are part of the landscape. Accompanied by a local team, travel at the pace of nomadic life, discovering water sources and shaded palm groves before reaching the high plateaus. The ascent of Mount Kouaouch, at 2,662 metres, rewards hikers with views stretching from the High Atlas to Jbel Bani.",
    highlights: [
      "Cross rocky landscapes and lunar-like plateaus",
      "Discover the seasonal migration traditions of the Aït Atta",
      "Hike through canyons, oases and volcanic terrain",
      "Climb Mount Kouaouch at 2,662 metres",
      "Enjoy vast landscapes made for quiet contemplation",
    ],
    extra:
      "Combine Saghro with a Sahara trek for a journey of around 15 days. The programme can be adapted to your dates, preferred duration and group’s experience.",
  },
  "jbel-mgoun": {
    title: "Jbel Mgoun, Crossing the Central High Atlas",
    tagline:
      "From the Happy Valley to the Valley of Roses: colour, emotion and encounters",
    duration: "12 days",
    walking: "9 days of hiking",
    period: "June to October",
    level: "Experienced hiker",
    dailyWalking: "Around 6–7 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech or Ouarzazate",
    description:
      "This trek through the Central High Atlas takes you around Jbel Mgoun, whose summit reaches 4,068 metres, making it the second-highest peak in North Africa. The optional ascent is suitable for properly prepared hikers. The route alternates between green northern valleys, high-altitude pastures, colourful rock formations and impressive gorges, some of which are crossed through the water. Further south, mineral landscapes give way to vast oases. Villages and encounters along the Mgoun River add a human dimension to the journey, which ends in the Dadès Valley among kasbahs and palm groves.",
    highlights: [
      "Explore the valleys and high pastures of the Central High Atlas",
      "Cross the spectacular Mgoun Gorges",
      "Discover Amazigh villages and their cultivated lands",
      "Consider the optional ascent of Mgoun at 4,068 metres",
      "Finish in the Dadès Valley among its kasbahs",
    ],
    extra:
      "The Central High Atlas offers many possibilities, including Aït Bougmez, Tessaout, Zawyat Ahansal, Imilchil, the Valley of Roses, Dadès and Todra. Shorter walks, longer crossings, family trips and more challenging treks can all be designed to suit you.",
  },
  "tizi-n-test": {
    title: "Tizi N’Test, Land of Centuries-Old Walnut Trees",
    tagline:
      "From Tinmal Mosque to the Techka Plateau, discover a preserved valley",
    duration: "8–9 days",
    walking: "5 days of hiking",
    period: "Mid-May to October",
    level: "Easy to moderate",
    dailyWalking: "Around 5–7 hours per day",
    transport: "Pack mules and donkeys",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech or Agadir",
    description:
      "West of the High Atlas, away from the busiest routes, the Tizi N’Test region overlooks the Souss Plain. The ochre and purple rocks of the southern slopes contrast with the green northern valleys. Trails follow the N’Fiss River through the scents of thuya and juniper, past stone-built Amazigh villages and agricultural terraces. Centuries-old walnut trees, Atlas pistachio trees and summer pastures mark the way towards the Techka Plateau. The route also offers the opportunity to climb two peaks above 3,000 metres.",
    highlights: [
      "Discover the historic Tinmal Mosque",
      "Walk along the N’Fiss River",
      "Cross stone-built villages and agricultural terraces",
      "Admire walnut trees and Atlas pistachio trees",
      "Reach the pastures of the Techka Plateau",
    ],
    extra:
      "This trip can be extended with a stay on the Atlantic coast. Stages and duration can be adapted to your preferences.",
  },
  "randonnee-cotiere": {
    title: "Atlantic Coastal Hiking",
    tagline: "Following Eleonora’s falcon, from Essaouira to Imsouane",
    duration: "9 days",
    walking: "6 days of hiking",
    period: "October–November and February–May",
    level: "Coastal hiking",
    dailyWalking: "Depending on the stage and chosen itinerary",
    transport: "Camels carry luggage; a riding donkey may be available for children",
    supervision: "Guide and local team, including a cook and camel handlers",
    arrival: "Marrakech or Agadir",
    description:
      "Between Essaouira and Imsouane, follow the Atlantic coast through fishing villages, wild beaches and cliffs overlooking the ocean. Walk barefoot across smooth sand, then share a fish tagine at camp beneath the stars. Nature lovers can observe shorebirds and gannets; depending on the season, Eleonora’s falcon may also be present. In spring, flowers brighten the trail and argan trees dot the landscape. In Essaouira, historic Mogador welcomes you behind its white ramparts. Encounters with the local Aït Haha team add a warm human dimension to the journey.",
    highlights: [
      "Walk between wild beaches, coves and cliffs",
      "Discover fishing villages along the Atlantic coast",
      "Observe coastal birds, depending on the season",
      "Visit Essaouira and its white ramparts",
      "Share evenings and meals at the campsite",
    ],
    extra:
      "This coastal trek can be combined with a horse-riding stay. Dates and stages can be adapted, and the programme is also suitable for families.",
  },
  tafraoute: {
    title: "Tafraoute Anti-Atlas, the Dragon’s Blood",
    tagline: "Following the antelopes, from mountains to oases",
    duration: "9 days",
    walking: "5.5 days of circular day hikes",
    period: "Autumn to early spring, ideally January–February",
    level: "Easy",
    dailyWalking: "Around 5–7 hours per day",
    transport: "Support vehicle; accommodation in a guesthouse",
    supervision: "Guide and local team, depending on the programme",
    arrival: "Agadir; Marrakech or Ouarzazate also possible",
    description:
      "Around Tafraoute, the Anti-Atlas displays pink, green and white rocks, rounded granite boulders and quartzite ridges. Hikes lead through the Ameln Valley, at the foot of Jbel El Kest, and towards gorges and villages with traditional pink and white houses. The Aït Mansour oasis offers a lush contrast. In a secluded spot grows the ajgal dragon tree, nicknamed the “dragon’s blood” tree. Old paths and abandoned fields are gradually giving way to nature in a region where Cuvier’s gazelles, wild boar and, more rarely, Barbary sheep may be spotted.",
    highlights: [
      "Discover granite boulders and colourful rock formations",
      "Explore the Ameln Valley and Jbel El Kest",
      "Walk through gorges and traditional villages",
      "Enjoy the green oasis of Aït Mansour",
      "Discover the ajgal dragon tree and local flora",
    ],
    extra:
      "Hikes can be organised as day trips from one base and adapted to your pace. The programme is also suitable for families.",
  },
  toubkal: {
    title: "Toubkal Circuit, Amazigh Valleys of the High Atlas",
    tagline: "From valley to valley, across sky-high mountain passes",
    duration: "8–9 days",
    walking: "6–7 days of hiking",
    period: "June to October",
    level: "Experienced hiker",
    dailyWalking: "Around 6–7 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech",
    description:
      "This trek is for hikers who love mountains, long days on foot and wild landscapes. Ancient mule tracks connect Amazigh villages and cross high mountain passes, sometimes far from the busiest trails. The highlight is the ascent of Jbel Toubkal, reaching 4,168 metres. Throughout the journey, inhabited valleys and high-mountain scenery create a striking contrast with the lively atmosphere of Marrakech, its palaces and Jemaa el-Fna square.",
    highlights: [
      "Cross the Amazigh valleys of the High Atlas",
      "Cross mountain passes with sweeping views",
      "Discover mountain trails and villages",
      "Aim for the summit of Jbel Toubkal at 4,168 metres",
      "Combine wild landscapes with local encounters",
    ],
    extra:
      "Shorter 2–4 day hikes are also possible in the region. Depending on the season and conditions, the area is suitable for ski touring. A personalised programme can be arranged.",
  },
  "yagour-zat": {
    title: "Yagour Plateau & Zat Valley, an Ancient Journey",
    tagline: "High Atlas rock carvings, an invaluable treasure",
    duration: "9 days",
    walking: "7-day crossing or 6-day circular route",
    period: "Spring to autumn",
    level: "Easy",
    dailyWalking: "Around 5–6 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech",
    description:
      "Close to Marrakech, the vast Yagour Plateau lies at the foot of the High Atlas and has long been used as pastoral land. It contains one of the massif’s richest collections of rock art, carved into pink sandstone: curved-horned cattle, solar wheels, weapons and human figures reveal practices dating back to the late Neolithic period. Choose a seven-day crossing from Tachdirt to the Tizi N’Tichka Pass via the Tachdirt, Ounila and Zat valleys, or a six-day loop starting in the Ounila Valley. Hikers wishing to extend the adventure can add a day to climb the sacred summit of Meltsene at 3,595 metres.",
    highlights: [
      "Explore the pastoral Yagour Plateau",
      "Discover prehistoric rock carvings",
      "Cross valleys and Amazigh villages",
      "Choose between a crossing and a circular route",
      "Consider the optional ascent of Meltsene at 3,595 metres",
    ],
    extra:
      "The Yagour Plateau can also be explored on a 3–4 day trip from Marrakech. Stages can be adapted, and the route may suit families.",
  },
  "tessaout-ait-bouli": {
    title: "Ounila, Tessaout & Aït Bouli, Amazigh Lands",
    tagline: "Colourful mountains and remarkable Atlas villages",
    duration: "9 days",
    walking: "6-day crossing",
    period: "Spring to autumn",
    level: "Moderate",
    dailyWalking: "Around 6–7 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech",
    description:
      "This hike links the Ounila Valley with Tessaout and then Aït Bouli, in the heart of the High Atlas. The route crosses green valleys, traditional villages such as Megdez and high-altitude pastures. The blue lake of Tamda lies beneath the Anghomar mountains. The trail linking Tessaout to Aït Bouli is among the massif’s most beautiful routes, with camping in a preserved valley, a balcony path below the Jbel Rat ridge and ever-changing panoramas. In Aït Bouli, red sandstone contrasts with green terraces and traces of ancient rock art.",
    highlights: [
      "Cross the Ounila, Tessaout and Aït Bouli valleys",
      "Discover traditional villages, including Megdez",
      "Admire Tamda’s blue lake and the Anghomar mountains",
      "Walk along a balcony trail beneath Jbel Rat",
      "Discover Aït Bouli’s landscapes and traces of rock art",
    ],
    extra:
      "The Central High Atlas offers varied routes around Aït Bougmez, Tessaout, Zawyat Ahansal, the Valley of Roses and Ounila. Family holidays, longer crossings and more challenging treks can be arranged to suit your plans.",
  },
  "oued-noun": {
    title: "Atlantic Sahara, Oued Noun",
    tagline: "Desert, oases and ocean: a journey into the Sahrawi world",
    duration: "11 days",
    walking: "4 days of hiking",
    period: "September to April",
    level: "Easy",
    dailyWalking: "Around 5–6 hours per day",
    transport: "Camels and support vehicle",
    supervision: "Guide and local team, including a cook and camel handlers",
    arrival: "Agadir or Marrakech",
    description:
      "In Morocco’s far south, this unique journey explores the Saharan world where it meets the Atlantic. Desert, oases, mountains and ocean create a varied landscape shaped by Hassani culture and guedra songs. Along the way, discover local flora and fauna, meet nomads travelling with camels and goats, and encounter oasis farmers and artisans. Colourful fabrics, the tea ritual and a warm welcome beneath tents give the journey a rich cultural dimension. The four-day trek includes the Tighermt oasis near Guelmim, hot and cold springs, and vast plateaus bordered by the mineral landscapes of the Anti-Atlas. The journey ends at Plage Blanche, facing the Atlantic waves.",
    highlights: [
      "Explore the meeting point of desert, oases and ocean",
      "Discover Hassani culture and the tea ritual",
      "Meet nomads, farmers and artisans",
      "Walk near the Tighermt oasis and mineral plateaus",
      "Finish facing the Atlantic at Plage Blanche",
    ],
    extra:
      "A 4×4 vehicle loop can be arranged on the return journey to explore more of the Anti-Atlas and the Tafraoute region.",
  },
};


// Complete editorial translations for every published circuit. Keeping these
// records separate from the French source prevents partial-language fallbacks.
const circuitTranslationsByLang: Partial<Record<Lang, Record<string, Partial<Circuit>>>> = {
  de: {
    "jbel-siroua": {
      title: "Jbel Siroua – Wandern im Land des Safrans",
      tagline: "Unser verborgenes Bergparadies empfängt Sie wie zu Hause",
      duration: "9 Tage", walking: "5,5 Wandertage", period: "Frühling und Herbst", level: "Leicht",
      dailyWalking: "Etwa 5 bis 6 Stunden pro Tag", transport: "Lastmaultiere", supervision: "Marokkanischer Bergführer, Koch und Maultiertreiber", arrival: "Marrakesch, Agadir oder Ouarzazate",
      description: "Von Taliouine aus entdecken Sie das Siroua-Massiv, eine farbenprächtige Vulkanlandschaft mit Amazigh-Dörfern und bewirtschafteten Terrassen. Vom Gipfel auf 3.305 Metern reicht der Blick vom Hohen Atlas bis zu den Toren der Sahara. Diese Reise verbindet eindrucksvolle Landschaften, Kulturerbe, Begegnungen und ländliche Traditionen. Im Frühling erblühen die Mandelbäume in den Tälern; im Oktober ernten die Familien Safran, das kostbare rote Gold der Region, das Ende des Monats beim Festival von Taliouine gefeiert wird.",
      highlights: ["Die Vulkanlandschaften und Dörfer des Siroua entdecken", "Panoramablicke zwischen Hohem Atlas und Sahara genießen", "Safranproduzenten treffen und den lokalen Safran kennenlernen", "Im Frühling zwischen blühenden Mandelbäumen wandern", "Die Höhen des Siroua auf 3.305 Metern erreichen"],
      extra: "Reisedaten, Dauer und Route können an Ihre Wünsche angepasst werden. Auch eine Themenwanderung rund um den Safran ist möglich."
    },
    sahara: {
      title: "Sahara – Eine sanfte Wüstenauszeit", tagline: "Entdecken Sie die weite Wüstenwelt unseres Kamels Zafrani",
      duration: "9 bis 12 Tage", walking: "5 bis 6 Wandertage", period: "Oktober bis Mitte April", level: "Leicht", dailyWalking: "Etwa 5 bis 6 Stunden pro Tag", transport: "Kamele transportieren das Gepäck", supervision: "Reiseleitung und lokales Team mit Koch und Kameltreibern", arrival: "Ouarzazate oder Marrakesch",
      description: "Diese Reise verbindet Wanderungen in der Wüste mit der Entdeckung des Kulturerbes im Drâa-Tal. Nicht sportliche Leistung steht im Mittelpunkt, sondern das intensive Erleben der weiten Sahara. Kamele tragen Ihr Gepäck, damit Sie unbeschwert wandern können. Unterwegs entdecken Sie Tierspuren und erfahren, wie sich Natur und Menschen an die Trockenheit angepasst haben. Am Abend kehren Sie zum Lager zurück, genießen eine Tajine und erleben die ruhige Atmosphäre der Sahara unter einem Sternenhimmel.",
      highlights: ["Im ruhigen Rhythmus der Wüste wandern", "Tierspuren und die Landschaften der Sahara entdecken", "Nomadische Gemeinschaften und ihre Lebensweise kennenlernen", "Unter dem Sternenhimmel im Biwak übernachten", "Die Oasen und das Kulturerbe des Drâa-Tals erkunden"],
      extra: "Diese Reise lässt sich mit einem Besuch der Drâa-Oasen oder einer Wanderung im Jbel Saghro zu einer etwa 15-tägigen Tour verbinden. Termine, Ankunftsort, Dauer und Route sind anpassbar."
    },
    "jbel-saghro": {
      title: "Jbel Saghro – Ein nomadisches Abenteuer", tagline: "Kennen Sie die Geschichte der Liebenden Ali und Eto?",
      duration: "8 oder 10 Tage", walking: "5 Wandertage", period: "Oktober bis November sowie Februar bis Mai", level: "Wanderreise", dailyWalking: "Je nach Etappe und gewählter Route", transport: "Lastmaultiere", supervision: "Marokkanischer Bergführer, Koch und Maultiertreiber", arrival: "Ouarzazate oder Marrakesch",
      description: "Zwischen den Tälern des Dadès und des Drâa zeigt das Saghro-Massiv eine fast mondartige Welt aus Felstürmen, Schluchten, Hochebenen und weiten Horizonten. Die Region ist auch ein Gebiet der saisonalen Wanderweidewirtschaft der Aït Atta; ihre Herden und Lager gehören zum Landschaftsbild. Mit einem lokalen Team folgen Sie dem Rhythmus des nomadischen Lebens, entdecken Wasserstellen und schattige Palmenhaine und erreichen schließlich die Hochplateaus. Der Aufstieg zum Berg Kouaouch auf 2.662 Metern belohnt mit einem Blick vom Hohen Atlas bis zum Jbel Bani.",
      highlights: ["Felslandschaften und mondähnliche Hochebenen durchqueren", "Die Traditionen der saisonalen Wanderweidewirtschaft der Aït Atta kennenlernen", "Durch Schluchten, Oasen und vulkanisch geprägte Landschaften wandern", "Den Berg Kouaouch auf 2.662 Metern besteigen", "Weite Landschaften in aller Ruhe genießen"],
      extra: "Der Saghro lässt sich mit einer Wanderung in der Sahara zu einer etwa 15-tägigen Reise verbinden. Route, Termine, Dauer und Schwierigkeitsgrad können an Ihre Gruppe angepasst werden."
    },
    "jbel-mgoun": {
      title: "Jbel Mgoun – Durchquerung des Zentralen Hohen Atlas", tagline: "Vom glücklichen Tal ins Tal der Rosen: Farben, Begegnungen und Emotionen",
      duration: "12 Tage", walking: "9 Wandertage", period: "Juni bis Oktober", level: "Für erfahrene Wanderer", dailyWalking: "Etwa 6 bis 7 Stunden pro Tag", transport: "Lastmaultiere", supervision: "Marokkanischer Bergführer, Koch und Maultiertreiber", arrival: "Marrakesch oder Ouarzazate",
      description: "Diese Trekkingtour führt durch den Zentralen Hohen Atlas rund um den Jbel Mgoun, dessen Gipfel 4.068 Meter erreicht und damit der zweithöchste Nordafrikas ist. Der optionale Gipfelaufstieg ist für gut vorbereitete Wanderer geeignet. Die Route wechselt zwischen grünen Tälern im Norden, hoch gelegenen Weiden, farbigen Felsformationen und beeindruckenden Schluchten, die teilweise durch das Wasser durchquert werden. Weiter südlich weichen die Felslandschaften großen Oasen. Dörfer und Begegnungen entlang des Mgoun-Flusses verleihen der Tour eine menschliche Dimension; sie endet im Dadès-Tal zwischen Kasbahs und Palmenhainen.",
      highlights: ["Täler und Hochweiden des Zentralen Hohen Atlas erkunden", "Die spektakulären Mgoun-Schluchten durchqueren", "Amazigh-Dörfer und ihre Anbauflächen entdecken", "Den optionalen Aufstieg zum Mgoun auf 4.068 Metern unternehmen", "Die Reise im Dadès-Tal zwischen Kasbahs ausklingen lassen"],
      extra: "Der Zentrale Hohe Atlas bietet viele Möglichkeiten: Aït Bougmez, Tessaout, Zawyat Ahansal, Imilchil, das Tal der Rosen, Dadès und Todra. Kürzere Wanderungen, längere Durchquerungen, Familienreisen oder anspruchsvolle Treks lassen sich individuell planen."
    },
    "tizi-n-test": {
      title: "Tizi N’Test – Im Land der jahrhundertealten Walnussbäume", tagline: "Von der Moschee von Tinmal zum Techka-Plateau: ein ursprüngliches Tal entdecken",
      duration: "8 bis 9 Tage", walking: "5 Wandertage", period: "Mitte Mai bis Oktober", level: "Leicht bis mittelschwer", dailyWalking: "Etwa 5 bis 7 Stunden pro Tag", transport: "Lastmaultiere und Esel", supervision: "Marokkanischer Bergführer, Koch und Maultiertreiber", arrival: "Marrakesch oder Agadir",
      description: "Im Westen des Hohen Atlas, abseits der meistbesuchten Routen, überragt die Region Tizi N’Test die Souss-Ebene. Ockerfarbene und violette Felsen an den Südhängen bilden einen Kontrast zu den grünen Tälern im Norden. Die Wege folgen dem Fluss N’Fiss, führen durch den Duft von Thuja und Wacholder, vorbei an steinernen Amazigh-Dörfern und landwirtschaftlichen Terrassen. Jahrhundertealte Walnussbäume, Atlas-Pistazien und Sommerweiden säumen den Weg zum Techka-Plateau. Unterwegs können auch zwei Gipfel über 3.000 Meter bestiegen werden.",
      highlights: ["Die historische Moschee von Tinmal entdecken", "Entlang des Flusses N’Fiss wandern", "Steindörfer und landwirtschaftliche Terrassen durchqueren", "Walnussbäume und Atlas-Pistazien bewundern", "Die Weiden des Techka-Plateaus erreichen"],
      extra: "Die Reise kann durch einen Aufenthalt an der Atlantikküste ergänzt werden. Etappen und Dauer lassen sich an Ihre Wünsche anpassen."
    },
    "randonnee-cotiere": {
      title: "Küstenwanderung entlang des Atlantiks", tagline: "Auf den Spuren des Eleonorenfalken von Essaouira nach Imsouane",
      duration: "9 Tage", walking: "6 Wandertage", period: "Oktober bis November sowie Februar bis Mai", level: "Küstenwanderung", dailyWalking: "Je nach Etappe und gewählter Route", transport: "Kamele für das Gepäck; ein Reitesel für Kinder ist möglich", supervision: "Reiseleitung und lokales Team mit Koch und Kameltreibern", arrival: "Marrakesch oder Agadir",
      description: "Zwischen Essaouira und Imsouane folgen Sie der Atlantikküste durch Fischerdörfer, wilde Strände und Klippen mit weitem Blick auf den Ozean. Gehen Sie barfuß über den Sand und genießen Sie am Lagerplatz eine Fisch-Tajine unter dem Sternenhimmel. Naturfreunde können Küstenvögel und Basstölpel beobachten; je nach Jahreszeit ist auch der Eleonorenfalke zu sehen. Im Frühling färben Blumen den Weg, während Arganbäume die Landschaft prägen. In Essaouira empfängt Sie das alte Mogador hinter seinen weißen Stadtmauern. Die Begegnungen mit dem lokalen Team der Aït Haha verleihen der Reise eine besondere menschliche Note.",
      highlights: ["Zwischen wilden Stränden, Buchten und Klippen wandern", "Fischerdörfer an der Atlantikküste entdecken", "Je nach Jahreszeit Küstenvögel beobachten", "Essaouira und seine weißen Stadtmauern besuchen", "Abende und Mahlzeiten im Biwak teilen"],
      extra: "Diese Wanderung lässt sich mit einem Reiturlaub verbinden. Termine und Etappen können angepasst werden; die Reise eignet sich auch für Familien."
    },
    tafraoute: {
      title: "Anti-Atlas bei Tafraoute – Das Blut des Drachen", tagline: "Auf den Spuren der Antilopen von den Bergen bis zu den Oasen",
      duration: "9 Tage", walking: "5,5 Wandertage mit festem Standort", period: "Herbst bis Frühlingsbeginn, idealerweise Januar und Februar", level: "Leicht", dailyWalking: "Etwa 5 bis 7 Stunden pro Tag", transport: "Begleitfahrzeug; Unterkunft in einer Herberge", supervision: "Reiseleitung und lokales Team je nach Programm", arrival: "Agadir; auch Marrakesch oder Ouarzazate möglich",
      description: "Rund um Tafraoute zeigt der Anti-Atlas eine Palette aus rosa, grünen und weißen Felsen, abgerundeten Granitblöcken und Quarzitbergen. Die Wanderungen führen ins Ameln-Tal am Fuß des Jbel El Kest, dessen Gipfel erreicht werden kann, und weiter zu Schluchten und schönen Dörfern mit traditionellen rosa-weißen Häusern. Die Oase Aït Mansour bildet einen üppig grünen Kontrast. An einem versteckten Ort wächst der Ajgal-Drachenbaum, auch „Drachenblut“ genannt. Alte Wege und teilweise aufgegebene Felder überlassen der Natur zunehmend Raum. Mit etwas Glück lassen sich Cuvier-Gazellen, Wildschweine oder seltener Mähnenschafe beobachten.",
      highlights: ["Granitfelsen und farbige Landschaften entdecken", "Das Ameln-Tal und den Jbel El Kest erkunden", "Durch Schluchten und traditionelle Dörfer wandern", "Die grüne Oase Aït Mansour genießen", "Den Ajgal-Drachenbaum und die lokale Pflanzenwelt kennenlernen"],
      extra: "Die Wanderungen können sternförmig von einem festen Standort aus organisiert und an Ihr Tempo angepasst werden. Die Reise eignet sich auch für Familien."
    },
    toubkal: {
      title: "Toubkal-Rundtour – Amazigh-Täler des Hohen Atlas", tagline: "Von Tal zu Tal über Pässe, die den Himmel berühren",
      duration: "8 bis 9 Tage", walking: "6 bis 7 Wandertage", period: "Juni bis Oktober", level: "Für erfahrene Wanderer", dailyWalking: "Etwa 6 bis 7 Stunden pro Tag", transport: "Lastmaultiere", supervision: "Marokkanischer Bergführer, Koch und Maultiertreiber", arrival: "Marrakesch",
      description: "Diese Trekkingtour richtet sich an Wanderer, die Berge, lange Wandertage und wilde Landschaften lieben. Alte Maultierpfade verbinden Amazigh-Dörfer und überqueren hoch gelegene Pässe, oft fernab der meistbegangenen Wege. Höhepunkt ist die Besteigung des Jbel Toubkal mit 4.168 Metern. Während der gesamten Durchquerung bilden bewohnte Täler und alpine Landschaften einen eindrucksvollen Kontrast zum lebhaften Marrakesch mit seinen Palästen und dem Platz Jemaa el-Fna.",
      highlights: ["Die Amazigh-Täler des Hohen Atlas durchqueren", "Pässe mit weiten Panoramablicken überschreiten", "Bergpfade und Bergdörfer entdecken", "Den Gipfel des Jbel Toubkal auf 4.168 Metern anstreben", "Wilde Landschaften und lokale Begegnungen verbinden"],
      extra: "In der Region sind auch kürzere Wanderungen von 2 bis 4 Tagen möglich. Je nach Jahreszeit und Bedingungen eignet sich das Gebiet zum Skitourengehen. Ein individuelles Programm kann erstellt werden."
    },
    "yagour-zat": {
      title: "Yagour-Plateau und Zat-Tal – Ein jahrtausendealter Weg", tagline: "Felsgravuren des Hohen Atlas: ein unschätzbarer Schatz",
      duration: "9 Tage", walking: "7-tägige Durchquerung oder 6-tägige Rundtour", period: "Frühling bis Herbst", level: "Leicht", dailyWalking: "Etwa 5 bis 6 Stunden pro Tag", transport: "Lastmaultiere", supervision: "Marokkanischer Bergführer, Koch und Maultiertreiber", arrival: "Marrakesch",
      description: "In der Nähe von Marrakesch liegt das weite Yagour-Plateau am Fuß des Hohen Atlas, seit jeher ein Gebiet der Weidewirtschaft. Hier befindet sich eine der bedeutendsten Sammlungen von Felskunst des Massivs: In den rosa Sandstein gravierte Rinder mit gebogenen Hörnern, Sonnenräder, Waffen und menschliche Figuren zeugen von Praktiken aus der späten Jungsteinzeit. Sie können eine siebentägige Durchquerung von Tachdirt zum Tizi-N’Tichka-Pass über die Täler von Tachdirt, Ounila und Zat wählen oder eine sechstägige Rundtour ab dem Ounila-Tal. Wer die Reise verlängern möchte, kann einen zusätzlichen Tag für den heiligen Gipfel Meltsene auf 3.595 Metern einplanen.",
      highlights: ["Das Weideplateau von Yagour erkunden", "Prähistorische Felsgravuren entdecken", "Täler und Amazigh-Dörfer durchqueren", "Zwischen Durchquerung und Rundtour wählen", "Optional den Meltsene auf 3.595 Metern besteigen"],
      extra: "Das Yagour-Plateau lässt sich auch auf einer 3- bis 4-tägigen Reise ab Marrakesch entdecken. Die Etappen sind anpassbar; die Tour kann auch für Familien geeignet sein."
    },
    "tessaout-ait-bouli": {
      title: "Ounila, Tessaout und Aït Bouli – Amazigh-Landschaften", tagline: "Bunte Berge und herrliche Dörfer des Atlas",
      duration: "9 Tage", walking: "6-tägige Durchquerung", period: "Frühling bis Herbst", level: "Mittelschwer", dailyWalking: "Etwa 6 bis 7 Stunden pro Tag", transport: "Lastmaultiere", supervision: "Marokkanischer Bergführer, Koch und Maultiertreiber", arrival: "Marrakesch",
      description: "Diese Wanderung verbindet das Ounila-Tal mit Tessaout und anschließend Aït Bouli im Herzen des Hohen Atlas. Die Route führt durch lebendige grüne Täler, traditionelle Dörfer wie Megdez und hoch gelegene Weideflächen. Der blaue Tamda-See liegt unter den Bergen von Anghomar. Der Weg von Tessaout nach Aït Bouli zählt zu den schönsten Routen des Massivs: Ein Lager in einem unberührten Tal, ein Panoramaweg unterhalb des Jbel-Rat-Kamms und ständig wechselnde Ausblicke begleiten die Wanderung. In Aït Bouli bilden roter Sandstein, grüne Terrassen und Spuren alter Felskunst einen eindrucksvollen Kontrast.",
      highlights: ["Die Täler von Ounila, Tessaout und Aït Bouli durchqueren", "Traditionelle Dörfer wie Megdez entdecken", "Den blauen Tamda-See und die Anghomar-Berge bewundern", "Auf einem Panoramaweg unterhalb des Jbel Rat wandern", "Landschaften und Felskunstspuren von Aït Bouli entdecken"],
      extra: "Im Zentralen Hohen Atlas lassen sich abwechslungsreiche Routen rund um Aït Bougmez, Tessaout, Zawyat Ahansal, das Tal der Rosen und Ounila gestalten. Familienreisen, längere Durchquerungen und anspruchsvolle Treks sind individuell planbar."
    },
    "oued-noun": {
      title: "Atlantische Sahara – Oued Noun", tagline: "Wüste, Oasen und Ozean: eine Reise in die saharauische Welt",
      duration: "11 Tage", walking: "4 Wandertage", period: "September bis April", level: "Leicht", dailyWalking: "Etwa 5 bis 6 Stunden pro Tag", transport: "Kamele und Begleitfahrzeug", supervision: "Reiseleitung und lokales Team mit Koch und Kameltreibern", arrival: "Agadir oder Marrakesch",
      description: "Im äußersten Süden Marokkos entdecken Sie auf dieser besonderen Reise die saharische Welt dort, wo sie auf den Atlantik trifft. Wüste, Oasen, Berge und Ozean bilden eine überraschend vielfältige Landschaft, geprägt von der Hassani-Kultur und den Gesängen der Guedra. Unterwegs lernen Sie die Pflanzen- und Tierwelt dieser Übergangsregion kennen, begegnen Nomaden mit Kamelen und Ziegen sowie Oasenbauern und Kunsthandwerkern. Farbenfrohe Stoffe, das Teeritual und die Gastfreundschaft unter Zelten verleihen der Reise eine starke kulturelle Dimension. Die viertägige Wanderung führt unter anderem zur Oase Tighermt bei Guelmim, zu warmen und kalten Quellen und über weite Hochebenen am mineralischen Anti-Atlas. Zum Abschluss erwartet Sie die große Plage Blanche am Atlantik.",
      highlights: ["Das Zusammentreffen von Wüste, Oasen und Ozean erleben", "Die Hassani-Kultur und das Teeritual entdecken", "Nomaden, Bauern und Kunsthandwerker treffen", "In der Nähe der Oase Tighermt und mineralischer Hochebenen wandern", "Die Reise am Atlantik an der Plage Blanche beenden"],
      extra: "Auf der Rückfahrt kann eine Rundfahrt mit dem Geländewagen organisiert werden, um den Anti-Atlas und die Region Tafraoute weiter zu erkunden."
    }
  },
  it: {
    "jbel-siroua": {
      title: "Jbel Siroua, trekking nella terra dello zafferano", tagline: "Nel nostro angolo segreto di montagna sarete accolti come a casa",
      duration: "9 giorni", walking: "5 giorni e mezzo di trekking", period: "Primavera e autunno", level: "Facile", dailyWalking: "Circa 5–6 ore al giorno", transport: "Muli da soma", supervision: "Guida marocchina, cuoco e mulattieri", arrival: "Marrakech, Agadir o Ouarzazate",
      description: "Partendo da Taliouine, scopri il massiccio del Siroua, una catena vulcanica dai colori intensi, punteggiata di villaggi amazigh e terrazzamenti coltivati. Dalle sue alture, la vetta del Siroua, a 3.305 metri, apre lo sguardo dall’Alto Atlante fino alle porte del Sahara. Il viaggio unisce paesaggi sorprendenti, patrimonio, incontri e tradizioni rurali. In primavera i mandorli in fiore illuminano le vallate; a ottobre le famiglie raccolgono lo zafferano, il prezioso oro rosso della regione, celebrato durante il festival di Taliouine verso la fine del mese.",
      highlights: ["Scoprire i paesaggi vulcanici e i villaggi del Siroua", "Ammirare panorami tra Alto Atlante e Sahara", "Incontrare i produttori e conoscere lo zafferano locale", "Camminare tra i mandorli in fiore in primavera", "Raggiungere le alture del Siroua a 3.305 metri"],
      extra: "Date, durata e itinerario possono essere adattati al tuo progetto. È possibile organizzare anche un trekking tematico dedicato allo zafferano."
    },
    sahara: {
      title: "Sahara, un’immersione dolce", tagline: "Scopri il vasto mondo del deserto insieme al nostro dromedario Zafrani",
      duration: "Da 9 a 12 giorni", walking: "5–6 giorni di cammino", period: "Da ottobre a metà aprile", level: "Facile", dailyWalking: "Circa 5–6 ore al giorno", transport: "I dromedari trasportano i bagagli", supervision: "Guida e squadra locale con cuoco e cammellieri", arrival: "Ouarzazate o Marrakech",
      description: "Questo viaggio unisce le passeggiate nel deserto alla scoperta del patrimonio della valle del Drâa. L’obiettivo non è la prestazione sportiva, ma vivere pienamente i grandi spazi sahariani. I dromedari trasportano i bagagli, così potrai camminare leggero. Lungo il percorso osserverai le tracce degli animali e scoprirai come la natura e gli abitanti si adattano all’aridità. Alla fine della giornata si rientra al campo per gustare un tajine e condividere i ritmi tranquilli del Sahara sotto un cielo stellato.",
      highlights: ["Camminare al ritmo tranquillo del deserto", "Osservare le tracce della fauna e i paesaggi sahariani", "Incontrare le comunità nomadi e conoscere il loro stile di vita", "Dormire in bivacco sotto le stelle", "Esplorare le oasi e il patrimonio della valle del Drâa"],
      extra: "Il viaggio può essere abbinato alla visita delle oasi del Drâa o a un trekking sul Jbel Saghro, per creare un itinerario di circa 15 giorni. Date, città di arrivo, durata e percorso sono personalizzabili."
    },
    "jbel-saghro": {
      title: "Jbel Saghro, un’avventura nomade", tagline: "Conosci la storia dei due innamorati Ali ed Eto?",
      duration: "8 o 10 giorni", walking: "5 giorni di cammino", period: "Ottobre–novembre e febbraio–maggio", level: "Trekking", dailyWalking: "In base alla tappa e all’itinerario scelto", transport: "Muli da soma", supervision: "Guida marocchina, cuoco e mulattieri", arrival: "Ouarzazate o Marrakech",
      description: "Tra le valli del Dadès e del Drâa, il massiccio del Saghro rivela un mondo quasi lunare fatto di guglie rocciose, canyon, altopiani e orizzonti aperti. È anche un territorio di transumanza per gli Aït Atta, le cui greggi e i cui accampamenti fanno parte del paesaggio. Accompagnato da una squadra locale, seguirai il ritmo della vita nomade, cercando sorgenti e angoli ombreggiati tra le palme prima di raggiungere gli altopiani. La salita al monte Kouaouch, a 2.662 metri, regala una vista che spazia dall’Alto Atlante al Jbel Bani.",
      highlights: ["Attraversare paesaggi rocciosi e altopiani lunari", "Scoprire le tradizioni di transumanza degli Aït Atta", "Camminare tra canyon, oasi e rilievi vulcanici", "Salire sul monte Kouaouch a 2.662 metri", "Godersi grandi spazi e paesaggi contemplativi"],
      extra: "Il Saghro può essere abbinato a un trekking nel Sahara per un viaggio di circa 15 giorni. Date, durata, percorso e livello possono essere adattati al gruppo."
    },
    "jbel-mgoun": {
      title: "Jbel Mgoun, attraversata dell’Alto Atlante centrale", tagline: "Dalla Valle Felice alla Valle delle Rose: emozioni, colori e incontri",
      duration: "12 giorni", walking: "9 giorni di trekking", period: "Da giugno a ottobre", level: "Per escursionisti esperti", dailyWalking: "Circa 6–7 ore al giorno", transport: "Muli da soma", supervision: "Guida marocchina, cuoco e mulattieri", arrival: "Marrakech o Ouarzazate",
      description: "Questo trekking attraversa l’Alto Atlante centrale intorno al Jbel Mgoun, la cui vetta raggiunge i 4.068 metri, la seconda più alta del Nord Africa. La salita, facoltativa, è adatta a escursionisti ben preparati. Il percorso alterna vallate verdi a nord, pascoli d’alta quota, rocce dai colori vivaci e gole spettacolari, alcune delle quali si attraversano nell’acqua. Più a sud, i paesaggi minerali lasciano spazio a grandi oasi. I villaggi e gli incontri lungo l’oued Mgoun danno al viaggio una forte dimensione umana, fino alla valle del Dadès, tra kasbah e palmeti.",
      highlights: ["Esplorare le valli e i pascoli dell’Alto Atlante centrale", "Attraversare le spettacolari gole del Mgoun", "Scoprire i villaggi amazigh e le loro coltivazioni", "Valutare la salita facoltativa al Mgoun, a 4.068 metri", "Concludere nella valle del Dadès tra le kasbah"],
      extra: "L’Alto Atlante centrale offre molte possibilità: Aït Bougmez, Tessaout, Zawyat Ahansal, Imilchil, Valle delle Rose, Dadès e Todra. Si possono creare itinerari brevi, attraversate più lunghe, viaggi per famiglie o trekking più impegnativi."
    },
    "tizi-n-test": {
      title: "Tizi N’Test, la terra dei noci secolari", tagline: "Dalla moschea di Tinmal all’altopiano del Techka, alla scoperta di una valle preservata",
      duration: "8–9 giorni", walking: "5 giorni di cammino", period: "Da metà maggio a ottobre", level: "Da facile a moderato", dailyWalking: "Circa 5–7 ore al giorno", transport: "Muli e asini da soma", supervision: "Guida marocchina, cuoco e mulattieri", arrival: "Marrakech o Agadir",
      description: "A ovest dell’Alto Atlante, lontano dagli itinerari più frequentati, la regione del Tizi N’Test domina la pianura del Souss. Le rocce ocra e viola del versante meridionale contrastano con le verdi vallate del nord. I sentieri seguono l’oued N’Fiss, tra i profumi di tuia e ginepro, attraversano villaggi amazigh in pietra e costeggiano terrazzamenti agricoli. Noci secolari, pistacchi dell’Atlante e pascoli estivi accompagnano il cammino fino all’altopiano del Techka. L’itinerario permette anche di salire su due cime oltre i 3.000 metri.",
      highlights: ["Scoprire la storica moschea di Tinmal", "Camminare lungo l’oued N’Fiss", "Attraversare villaggi in pietra e terrazzamenti agricoli", "Ammirare noci e pistacchi dell’Atlante", "Raggiungere i pascoli dell’altopiano del Techka"],
      extra: "Il circuito può essere completato con un soggiorno sulla costa atlantica. Le tappe e la durata possono essere adattate ai tuoi desideri."
    },
    "randonnee-cotiere": {
      title: "Trekking costiero lungo il vento dell’Atlantico", tagline: "Sulle tracce del falco della Regina, da Essaouira a Imsouane",
      duration: "9 giorni", walking: "6 giorni di cammino", period: "Ottobre–novembre e febbraio–maggio", level: "Trekking costiero", dailyWalking: "In base alla tappa e all’itinerario scelto", transport: "Dromedari per i bagagli; possibile un asino da sella per i bambini", supervision: "Guida e squadra locale con cuoco e cammellieri", arrival: "Marrakech o Agadir",
      description: "Tra Essaouira e Imsouane, segui la costa atlantica attraverso villaggi di pescatori, spiagge selvagge e scogliere aperte sull’oceano. Cammina a piedi nudi sulla sabbia e condividi un tajine di pesce al bivacco sotto le stelle. Gli amanti della natura potranno osservare gli uccelli costieri e le sule; secondo la stagione è possibile avvistare anche il falco della Regina. In primavera i fiori colorano il sentiero e gli alberi di argan punteggiano il paesaggio. A Essaouira, l’antica Mogador ti accoglie dietro le sue mura bianche. Gli incontri con la squadra locale Aït Haha rendono il viaggio ancora più umano.",
      highlights: ["Camminare tra spiagge selvagge, calette e scogliere", "Scoprire i villaggi di pescatori della costa atlantica", "Osservare gli uccelli del litorale secondo la stagione", "Visitare Essaouira e le sue mura bianche", "Condividere serate e pasti al bivacco"],
      extra: "Questo trekking può essere abbinato a un soggiorno a cavallo. Date e tappe sono adattabili e il programma è adatto anche alle famiglie."
    },
    tafraoute: {
      title: "Anti-Atlante di Tafraoute, il sangue del drago", tagline: "Sulle tracce delle antilopi, dalle montagne alle oasi",
      duration: "9 giorni", walking: "5 giorni e mezzo di trekking con base fissa", period: "Dall’autunno all’inizio della primavera, idealmente a gennaio e febbraio", level: "Facile", dailyWalking: "Circa 5–7 ore al giorno", transport: "Veicolo di assistenza; pernottamento in struttura locale", supervision: "Guida e squadra locale secondo il programma", arrival: "Agadir; possibili anche Marrakech o Ouarzazate",
      description: "Intorno a Tafraoute, l’Anti-Atlante offre una tavolozza di rocce rosa, verdi e bianche, blocchi di granito arrotondati e rilievi di quarzite. Le escursioni conducono nella valle di Ameln, ai piedi del Jbel El Kest, e poi verso gole e splendidi villaggi dalle case tradizionali rosa e bianche. L’oasi di Aït Mansour offre un contrasto verde e rigoglioso. In un luogo appartato cresce il drago ajgal, chiamato anche “sangue del drago”. Gli antichi sentieri e i campi in parte abbandonati lasciano sempre più spazio alla natura; nella regione si possono talvolta osservare la gazzella di Cuvier, il cinghiale o, più raramente, il muflone a criniera.",
      highlights: ["Scoprire i blocchi di granito e i rilievi colorati", "Esplorare la valle di Ameln e il Jbel El Kest", "Camminare tra gole e villaggi tradizionali", "Godersi la verde oasi di Aït Mansour", "Conoscere il drago ajgal e la flora locale"],
      extra: "Le escursioni possono essere organizzate a raggiera e adattate al tuo ritmo. Il programma è adatto anche alle famiglie."
    },
    toubkal: {
      title: "Anello del Toubkal, valli amazigh dell’Alto Atlante", tagline: "Da una valle all’altra, oltre i passi che sfiorano il cielo",
      duration: "8–9 giorni", walking: "6–7 giorni di cammino", period: "Da giugno a ottobre", level: "Per escursionisti esperti", dailyWalking: "Circa 6–7 ore al giorno", transport: "Muli da soma", supervision: "Guida marocchina, cuoco e mulattieri", arrival: "Marrakech",
      description: "Questo trekking è pensato per chi ama la montagna, le lunghe giornate a piedi e i paesaggi selvaggi. Antichi sentieri per muli collegano i villaggi amazigh e superano passi d’alta quota, spesso lontani dai percorsi più frequentati. Il momento culminante è la salita al Jbel Toubkal, che raggiunge i 4.168 metri. Durante il viaggio, le valli abitate e i paesaggi d’alta montagna creano un contrasto suggestivo con l’energia di Marrakech, i suoi palazzi e piazza Jemaa el-Fna.",
      highlights: ["Attraversare le valli amazigh dell’Alto Atlante", "Superare passi con ampi panorami", "Scoprire sentieri e villaggi di montagna", "Puntare alla vetta del Jbel Toubkal, a 4.168 metri", "Unire paesaggi selvaggi e incontri locali"],
      extra: "Nella regione sono possibili anche trekking più brevi di 2–4 giorni. In base alla stagione e alle condizioni, la zona si presta anche allo sci alpinismo. È possibile preparare un programma personalizzato."
    },
    "yagour-zat": {
      title: "Altopiano dello Yagour e valle dello Zat, un cammino millenario", tagline: "Le incisioni rupestri dell’Alto Atlante, un tesoro inestimabile",
      duration: "9 giorni", walking: "Attraversata di 7 giorni o anello di 6 giorni", period: "Dalla primavera all’autunno", level: "Facile", dailyWalking: "Circa 5–6 ore al giorno", transport: "Muli da soma", supervision: "Guida marocchina, cuoco e mulattieri", arrival: "Marrakech",
      description: "Vicino a Marrakech, il vasto altopiano dello Yagour si trova ai piedi dell’Alto Atlante ed è da sempre un territorio pastorale. Ospita uno dei complessi di arte rupestre più ricchi del massiccio, inciso nell’arenaria rosa: bovini dalle corna ricurve, ruote solari, armi e figure umane testimoniano pratiche risalenti alla fine del Neolitico. Puoi scegliere un’attraversata di sette giorni da Tachdirt al passo del Tizi N’Tichka, passando per le valli di Tachdirt, Ounila e Zat, oppure un anello di sei giorni con partenza dalla valle dell’Ounila. Per prolungare l’avventura è possibile aggiungere una giornata per salire sulla vetta sacra del Meltsene, a 3.595 metri.",
      highlights: ["Esplorare l’altopiano pastorale dello Yagour", "Scoprire le incisioni rupestri preistoriche", "Attraversare valli e villaggi amazigh", "Scegliere tra attraversata e itinerario ad anello", "Valutare la salita facoltativa al Meltsene, a 3.595 metri"],
      extra: "L’altopiano dello Yagour può essere visitato anche con un viaggio di 3–4 giorni da Marrakech. Le tappe sono adattabili e il percorso può essere adatto alle famiglie."
    },
    "tessaout-ait-bouli": {
      title: "Ounila, Tessaout e Aït Bouli, terre amazigh", tagline: "Montagne multicolori e splendidi villaggi dell’Atlante",
      duration: "9 giorni", walking: "Attraversata di 6 giorni", period: "Dalla primavera all’autunno", level: "Moderato", dailyWalking: "Circa 6–7 ore al giorno", transport: "Muli da soma", supervision: "Guida marocchina, cuoco e mulattieri", arrival: "Marrakech",
      description: "Questo trekking collega la valle dell’Ounila alla Tessaout e poi ad Aït Bouli, nel cuore dell’Alto Atlante. Il percorso attraversa vallate verdi e vivaci, villaggi tradizionali come Megdez e pascoli d’alta quota. Il lago blu di Tamda si trova ai piedi delle montagne di Anghomar. Il sentiero tra Tessaout e Aït Bouli è uno dei più belli del massiccio: bivacchi in una valle preservata, un percorso panoramico sotto la cresta del Jbel Rat e vedute sempre diverse accompagnano il cammino. Ad Aït Bouli, le arenarie rosse contrastano con le terrazze verdi e le antiche tracce di arte rupestre.",
      highlights: ["Attraversare le valli dell’Ounila, della Tessaout e di Aït Bouli", "Scoprire villaggi tradizionali come Megdez", "Ammirare il lago blu di Tamda e le montagne di Anghomar", "Camminare sul sentiero panoramico sotto il Jbel Rat", "Scoprire i paesaggi e le tracce di arte rupestre di Aït Bouli"],
      extra: "L’Alto Atlante centrale offre itinerari vari intorno ad Aït Bougmez, Tessaout, Zawyat Ahansal, Valle delle Rose e Ounila. Si possono organizzare viaggi per famiglie, attraversate più lunghe e trekking sportivi su misura."
    },
    "oued-noun": {
      title: "Sahara atlantico, Oued Noun", tagline: "Deserto, oasi e oceano: un viaggio nel mondo saharawi",
      duration: "11 giorni", walking: "4 giorni di cammino", period: "Da settembre ad aprile", level: "Facile", dailyWalking: "Circa 5–6 ore al giorno", transport: "Dromedari e veicolo di assistenza", supervision: "Guida e squadra locale con cuoco e cammellieri", arrival: "Agadir o Marrakech",
      description: "Nell’estremo sud del Marocco, questo viaggio speciale fa scoprire il mondo sahariano nel punto in cui incontra l’Atlantico. Deserto, oasi, montagne e oceano compongono un paesaggio sorprendentemente vario, animato dalla cultura hassani e dai canti della guedra. Lungo il percorso scoprirai flora e fauna della zona di transizione, incontrerai nomadi con dromedari e capre, coltivatori delle oasi e artigiani. Tessuti colorati, il rituale del tè e l’accoglienza sotto le tende danno al viaggio una forte dimensione culturale. Il trekking di quattro giorni conduce all’oasi di Tighermt, vicino a Guelmim, a sorgenti calde e fredde e a vasti altopiani delimitati dai rilievi minerali dell’Anti-Atlante. Il viaggio termina sulla grande Plage Blanche, davanti alle onde dell’oceano.",
      highlights: ["Scoprire l’incontro tra deserto, oasi e oceano", "Conoscere la cultura hassani e il rituale del tè", "Incontrare nomadi, coltivatori e artigiani", "Camminare vicino all’oasi di Tighermt e agli altopiani minerali", "Concludere il viaggio sull’Atlantico, alla Plage Blanche"],
      extra: "Al ritorno è possibile organizzare un percorso in fuoristrada 4×4 per scoprire meglio l’Anti-Atlante e la regione di Tafraoute."
    }
  }
};

type InfoItemProps = {
  label: string;
  value?: string | null;
};

function InfoItem({ label, value }: InfoItemProps) {
  if (!value) return null;

  return (
    <div className="flex flex-col gap-1 border-b border-border/60 py-3 last:border-b-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium leading-relaxed text-foreground">
        {value}
      </span>
    </div>
  );
}

function CircuitDetailPage() {
  const { slug } = Route.useParams();
  const { lang, t } = useI18n();
  const isEnglish = lang === "en";

  const originalCircuit = circuits.find((item) => item.slug === slug);

  const circuit = originalCircuit
    ? {
        ...originalCircuit,
        ...(circuitTranslationsByLang[lang]?.[originalCircuit.slug] ?? (isEnglish ? circuitTranslations[originalCircuit.slug] : {})),
      }
    : undefined;

  if (!circuit) {
    return (
      <main className="min-h-[70vh] bg-background px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Mountain className="mx-auto mb-5 h-12 w-12 text-primary" />
          <h1 className="mb-4 text-3xl font-bold">
            {t("common.circuitNotFound")}
          </h1>
          <p className="mb-8 text-muted-foreground">
            {t("common.circuitNotFoundDescription")}
          </p>
          <Link
            to="/circuits"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("cta.viewAllCircuits")}
          </Link>
        </div>
      </main>
    );
  }



  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate flex min-h-[460px] items-end overflow-hidden md:min-h-[560px]">
        <img
          src={circuit.image || heroSahara}
          alt={circuit.title}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-28 md:px-8 md:pb-16">
          <Link
            to="/circuits"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-black/40"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("cta.viewAllCircuits")}
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Mountain className="h-4 w-4" />
              {t("circuits.detailLabel")}
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {circuit.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
              {circuit.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-14">
          <div>
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                  {t("circuits.spirit")}
                </span>
              </div>

              <h2 className="mb-5 text-2xl font-bold md:text-3xl">
                {t("circuits.aboutTitle")}
              </h2>

              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                {circuit.description}
              </p>
            </div>

            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Mountain className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                  {t("circuits.highlightsLabel")}
                </span>
              </div>

              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {t("circuits.highlightsTitle")}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {circuit.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-6">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {circuit.extra && (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-7">
                <div className="mb-3 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">
                    {t("circuits.adaptTitle")}
                  </h2>
                </div>

                <p className="leading-7 text-muted-foreground">
                  {circuit.extra}
                </p>

                {circuit.themeLink && (
                  <a
                    href={circuit.themeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {t("circuits.saffronLink")}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="bg-primary px-6 py-5 text-primary-foreground">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    {t("common.practicalInfo")}
                  </span>
                </div>
                <h2 className="text-xl font-bold">
                  {t("circuits.practicalTitle")}
                </h2>
              </div>

              <div className="px-6 py-2">
                <InfoItem
                  label={t("circuits.totalDuration")}
                  value={circuit.duration}
                />
                <InfoItem
                  label={t("circuits.walkingDuration")}
                  value={circuit.walking}
                />
                <InfoItem
                  label={t("circuits.bestPeriod")}
                  value={circuit.period}
                />
                <InfoItem
                  label={t("common.level")}
                  value={circuit.level}
                />
                <InfoItem
                  label={t("circuits.dailyWalking")}
                  value={circuit.dailyWalking}
                />
                <InfoItem
                  label={t("circuits.transport")}
                  value={circuit.transport}
                />
                <InfoItem
                  label={t("circuits.supervision")}
                  value={circuit.supervision}
                />
                <InfoItem
                  label={t("circuits.arrival")}
                  value={circuit.arrival}
                />
              </div>

              {circuit.family && (
                <div className="mx-6 mb-4 flex items-center gap-2 rounded-xl bg-primary/5 p-3 text-sm">
                  <Users className="h-5 w-5 shrink-0 text-primary" />
                  <span>
                    {t("circuits.family")}
                  </span>
                </div>
              )}

              <div className="p-6 pt-2">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-center font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  {t("cta.talkProject")}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                  {t("circuits.adaptNote")}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-card p-5">
              <div className="mb-2 flex items-center gap-2">
                <Backpack className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">
                  {t("circuits.adviceTitle")}
                </h3>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                {t("circuits.adviceText")}
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                {t("cta.contact")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 md:py-20">
        <img
          src={heroSahara}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/65" />

        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
            {t("common.yourNextAdventure")}
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t("circuits.bottomTitle")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/85">
            {t("circuits.bottomText")}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {t("cta.getInformation")}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/circuits"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              {t("cta.otherCircuits")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export const Route = createFileRoute("/circuits/$slug")({
  head: ({ params }) => {
    const name = params.slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
    return seo(
      `/circuits/${params.slug}`,
      `${name} — Circuit et randonnée au Maroc | Voyager Autrement`,
      `Découvrez notre circuit ${name} au Maroc : paysages, étapes et informations pour préparer votre voyage avec Voyager Autrement.`,
    );
  },
  component: CircuitDetailPage,
});
