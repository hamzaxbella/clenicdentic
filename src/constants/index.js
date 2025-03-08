import {
  dan1,
  dan2,
  dan3,
  dan4,
  facebook,
  google,
  phone,
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  instagram,
  telegram,
  facebookico,
  twitter,
  envolope,
  city,
} from "../assets/icons";

import {
  dr1,
  dr2,
  dr3,
  test1,
  test2,
  test3,
  test4,
  sa,
  sb,
  sc,
  sd,
  se,
  sf,
  sg,
  ex1s1,
  ex2s1,
  ex3s1,
  ex4s1,
  ex1s2,
  ex2s2,
  ex3s2,
  ex4s2,
  ex1s3,
  ex2s3,
  ex3s3,
  ex1s4,
  ex2s4,
  ex3s4,
  ex4s4,
  ex1s5,
  ex2s5,
  ex3s5,
  ex4s5,
} from "../assets/images";

// nav links constants including drop down menu for services
export const navLinks = [
  { name: "Accuile", path: "/" },
  { name: "A propos", path: "/about" },
  {
    name: "Services",
    dropdownItems: [
      { name: "Médecine des dents", path: "/médecineDesDents" },
      { name: "Implants dentaires", path: "/ImplantsDentaires" },
      { name: "Rémunération et installation", path: "/RémunérationEtInstallation" },
      { name: "Orthodontique", path: "/Orthodontique" },
      { name: "Sourire hollywoodien", path: "/SourireHollywoodien" },
      { name: "Consultation dentaire", path: "/ConsultationDentaire" },
    ],
  },
  { name: "Contacter", path: "/contact" },
];

export const contactSimple = [
  { icon: phone, label: "(+112) 6 35 39 00 *5" },
  { icon: envolope, label: "info@denticleanic.com" },
];

export const contactFull = [
  { icon: phone, label: "(+112) 6 35 39 00 *5" },
  { icon: envolope, label: "info@denticleanic.com" },
  { icon: city , label : '124 Avenue Mohammed V, Marrakech, Morocco'}
];

export const trustCards = [
  { icon: google, rating: "5.0", stars: 5, reviews: 106 },
  { icon: facebook, rating: "4.8", stars: 4, reviews: 11 },
];

export const confidentials = [
  { number: "+15", label: "Ans d'experience" },
  { number: "+270", label: "Clients satisfés" },
  { number: "+636", label: "Operations Succées" },
];

export const services = [
  {
    icon: service1,
    title: "Médecine des dents",
    description: "Soins complete pour une santé dentaire optimale",
    path : "/médecineDesDents"
  },
  {
    icon: service3,
    title: "Implants dentaires",
    description: "Restauration durable et narurelle de votre sourire",
    path : "/ImplantsDentaires"
  },
  {
    icon: service5,
    title: "Rémunération et installation",
    description: "Confortables solutions pour un sourire harmonieux",
    path : "/RémunérationEtInstallation"
  },
  {
    icon: service4,
    title: "Orthodontique",
    description: "Correction précise et esthétique des irrégularités dentaires.",
    path : "/Orthodontique"
  },
  {
    icon: service2,
    title: "Sourire hollywoodien",
    description: "transformer votre sourire en éclatante perfection",
    path : "/SourireHollywoodien"
  },
  {
    icon: service6,
    title: "Consultation dentaire",
    description:
      "Evaluation approfondie pour des conseils personnalisés et précis",
    path : "/ConsultationDentaire"
  },
];

export const testimonials = [
  {
    imgURL: test1,
    name: "Raya abdelkarim",
    status: "Renouveau souriant",
    label:
      "Grâce au Dr.[name], mon sourire retrouve éclat. Son professionnalisme m'impressionne, Je le recommande vivement.",
  },
  {
    imgURL: test4,
    name: "Ismail Ilmasrawi",
    status: "Expertise remarquable",
    label:
      "Dr.[name] allie expertise et dévouement Approche holistique remarquable. Je recommande vivement pour des résultats.",
  },
  {
    imgURL: test3,
    name: "Mohammade Bannani",
    status: "Soin exemplaire",
    label:
      "Expérience exceptionnelle chez Denticleanic. Dr.[name] et équipe dévoués, proffessionnels. Service de qualité, recommande vivement.",
  },
  {
    imgURL: test2,
    name: "Yahya Izakan",
    status: "patient satisfé",
    label:
      "مشكورين بزاف على الخدمة. الدكتور وفريقهم متفانين في خدمة المرضى. شكرا على الإهتمام والخدمة الممتازة",
    rtl: true,
  },
];

export const BaseFooterLinks = [
  {label : "accuiel", ref : "/"},
  {label : "à propos", ref : "/about"},
  {label : "médecine des dents", ref : "/médecineDesDents"},
  {label : "implants dentaires", ref : "/ImplantsDentaires"},
  {label : "rémunération et installation", ref : "/RémunérationEtInstallation"},
  {label : "orthodonique", ref : "/Orthodontique"},
  {label : "sourire Hollywoodien", ref : "/SourireHollywoodien"},
  {label : "consultation dentaire", ref : "/ConsultationDentaire"},
  {label : "contacter", ref : "/contact"},
];

export const SecondaryPages = [
  {label : "conditions d'utilisation", ref : "/terms"},
  {label : "politique de confidentialité", ref : "/privacy"},
  {label : "plan du site", ref : "/map"},
];

export const socialMedia = [
  { icon: instagram, href: "#" },
  { icon: telegram, href: "#" },
  { icon: facebookico, href: "#" },
  { icon: twitter, href: "#" },
];

export const team = [
  { name: "Dr. [Doctor 1]", imageURL: dr1 },
  { name: "Dr. [Doctor 2]", imageURL: dr2 },
  { name: "Dr. [Doctor 3]", imageURL: dr3 },
];

export const collaborations = [dan1, dan2, dan3, dan4];

export const servicesContent = {
  médecineDesDents: {
    title: "Restauration durable et naturell de votre sourire",
    nom: "médecine des dents",
    description:
      "Notre service de médecine dentaire englobe un large éventail de soins visant à maintenir la santé et la fonctionnalité de vos dents tout au long de votre vie. De la prévention des caries à la gestion des affections bucco-dentaires complexes, notre équipe de professionnels dévoués met l'accent sur la promotion d'une santé bucco-dentaire optimale. Grâce à des examens réguliers, des nettoyages professionnels et des conseils personnalisés en matière d'hygiène bucco-dentaire, nous travaillons en partenariat avec vous pour préserver votre sourire et votre bien-être général.",
    beforeAfter: [ex1s1, ex2s1, ex3s1, ex4s1],
    bannerURL : sc
  },

  ImplantsDentaires: {
    title: "Réhabilitation dentaire durable et esthétique.",
    nom: "Implants dentaires",
    description:
      "Les implants dentaires représentent une solution révolutionnaire pour remplacer les dents manquantes de manière durable et esthétique. Notre équipe expérimentée de chirurgiens et de prothésistes dentaires utilise des techniques avancées et des matériaux de haute qualité pour restaurer la fonctionnalité et l'apparence de votre sourire. Que ce soit pour remplacer une seule dent ou plusieurs dents, nos implants offrent une solution à long terme qui ressemble et fonctionne comme des dents naturelles, vous permettant de retrouver confiance et confort dans votre quotidien.",
    beforeAfter: [ex1s2, ex2s2, ex3s2, ex4s2],
    bannerURL : sa
  },

  RémunérationEtInstallation: {
    title: "Des solutions sur mesure pour votre sourire.",
    nom: "Rémunération et installation",
    description:
      "Notre service de rémunération et d'installation s'adresse à ceux qui recherchent des solutions sur mesure pour corriger les imperfections esthétiques et fonctionnelles de leur sourire. Grâce à une approche holistique, nous évaluons attentivement chaque aspect de votre structure buccale et de votre esthétique faciale pour concevoir un plan de traitement personnalisé. De la rémunération des dents ébréchées à l'installation d'implants dentaires, notre équipe experte utilise des techniques de pointe pour vous offrir un sourire harmonieux et fonctionnel qui reflète votre personnalité unique.      ",
    beforeAfter: [ex1s3, ex2s3, ex3s3],
    bannerURL : sd
  },

  Orthodontique: {
    title: "Alignement parfait, sourire radieux.",
    nom: "Orthodontique",
    description:
      "L'orthodontie est bien plus qu'un simple alignement des dents; c'est une opportunité de transformer votre sourire et votre confiance en vous. Notre service orthodontique propose une gamme complète de traitements pour corriger les malocclusions, les espaces entre les dents et les problèmes de morsure. Des appareils traditionnels aux aligneurs transparents, nous offrons des solutions adaptées à tous les âges et tous les besoins. En travaillant en étroite collaboration avec vous, nous visons à créer un sourire équilibré, esthétique et fonctionnel qui vous accompagnera tout au long de votre vie.",
    beforeAfter: [ex1s4, ex2s4, ex3s4, ex4s4],
    bannerURL : se
  },

  SourireHollywoodien: {
    title: "Transformez votre sourire en éclatante perfection.",
    nom: "Sourire hollywoodien",
    description:
      "Notre service de sourire hollywoodien vous offre la possibilité de transformer votre sourire en une œuvre d'art dentaire digne des stars hollywoodiennes. Grâce à une combinaison de techniques de blanchiment avancées, de remodelage esthétique et de restauration dentaire, nous visons à créer un sourire qui respire la confiance et le charisme. Que vous recherchiez un éclat plus blanc, des dents plus uniformes ou une réparation des imperfections mineures, notre équipe de professionnels expérimentés est là pour vous offrir un résultat spectaculaire et naturel qui illuminera votre visage et votre vie.",
    beforeAfter: [ex1s5, ex2s5, ex3s5, ex4s5],
    bannerURL : sg
  },

  ConsultationDentaire: {
    title: "Un diagnostic précis, des conseils personnalisés.",
    nom: "Consultation dentaire",
    description:
      "Notre service de consultation dentaire représente votre première étape vers une santé bucco-dentaire optimale. Lors de votre consultation, notre équipe de professionnels compétents prendra le temps de vous écouter attentivement, d'évaluer votre santé bucco-dentaire actuelle et de discuter de vos préoccupations et de vos objectifs. Grâce à des examens approfondis, des radiographies numériques et des discussions ouvertes, nous élaborerons un plan de traitement personnalisé qui répond à vos besoins spécifiques. Notre objectif est de vous fournir les informations et les conseils nécessaires pour prendre des décisions éclairées concernant votre santé bucco-dentaire, dans un environnement accueillant et confortable.",
    bannerURL : sb
  },
};

export const weekDays = [
  { day: "Lun", isActive: true },
  { day: "Mar", isActive: true },
  { day: "Mer", isActive: true },
  { day: "Jeu", isActive: true },
  { day: "Ven", isActive: true },
  { day: "sam", isActive: false },
  { day: "Dim", isActive: false },
];
