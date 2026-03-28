export type ProjectTypeProps =
    | "Développement de Site Web"
    | "Développement d'Application Mobile"
    | "Design Graphique"
    | "Optimisation SEO"
    | "Gestion de Projet Digital"
    | "Marketing Digital"
    | "Création de Contenu"
    | "Refonte de Site Web"
    | "Gestion de Présence en Ligne"
    | "Développement de Solutions sur Mesure"
    | "Support et Maintenance Technique"
    | "Création de Newsletter et Emailing"
    | "Campagne Publicitaire en Ligne"
    | "Intégration d'Outils de Gestion"
    | "Automatisation des Tâches Administratives";

export type ProjectMetaData = {
    charset: "utf-8";
    contentType: "text/html";
    description: string;
    favicons: string[];
    images: string[];
    mediaType: "website";
    siteName?: string; // Peut être `undefined`, donc optionnel
    title: string;
    url: string;
    videos: string[];
};