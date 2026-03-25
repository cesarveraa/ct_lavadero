/**
 * Configuración central del sitio — Victoria Lavadero
 * Edita los valores marcados con [...] para completar la información real del negocio.
 */

export const siteConfig = {
  businessName: "Victoria Lavadero",
  tagline: "Lavado automotriz con atención al detalle",
  city: "El Alto",
  zone: "El Alto",
  address: "El Alto",
  whatsapp: "76037650",
  phone: "76037650",
  hours: "Lunes a Domingo, de 08:00 a 18:00",
  mapsUrl: "https://www.google.com/maps?q=-16.5164328,-68.1765895&z=17&hl=es",
  googleMapsEmbed: '<iframe src="https://maps.google.com/maps?q=-16.5164328,-68.1765895&t=&z=17&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>',
  instagram: "",
  facebook: "",
  tiktok: "",
  priceRange: "",
  siteUrl: "https://victorialavadero.com",

  seo: {
    title: "Victoria Lavadero — El Mejor Lavado Automotriz y Car Wash en El Alto",
    description:
      "El mejor servicio de lavado automotriz en El Alto. Aspirado, lavado de chasis, fumigado, limpieza de motor y detalle de interiores. ¡Agenda por WhatsApp al 76037650! Resultados visibles y atención al detalle.",
    ogImage: "/og-image.png",
  },

  hero: {
    badge: "Lavado automotriz con atención al detalle",
    title: "Hacemos que tu vehículo vuelva a verse impecable",
    subtitle:
      "🎁 Reservá tu lavado online y obtené un 10% de descuento inmediato. En Victoria Lavadero realizamos servicios de estética y cuidado automotriz con absoluta atención al detalle.",
    ctaPrimary: "Cotizar por WhatsApp",
    ctaSecondary: "Ver servicios",
  },

  benefits: [
    {
      icon: "detail",
      title: "Atención al detalle",
      description:
        "Cada servicio se realiza con cuidado y dedicación, asegurándonos de que cada rincón de tu vehículo reciba la atención que merece.",
    },
    {
      icon: "camera",
      title: "Resultados visibles",
      description:
        "Documentamos nuestro trabajo con imágenes reales que muestran la calidad del servicio antes, durante y después.",
    },
    {
      icon: "shield",
      title: "Servicio profesional",
      description:
        "Identidad visual moderna, procesos ordenados y un enfoque automotriz que transmite confianza desde el primer contacto.",
    },
    {
      icon: "eye",
      title: "Proceso transparente",
      description:
        "Sabés exactamente qué servicio se realiza en tu vehículo. Sin sorpresas, sin costos ocultos.",
    },
  ],

  services: [
    {
      id: "motor",
      name: "Motor con químico",
      description:
        "Limpieza profunda del motor utilizando productos químicos especializados que eliminan grasa y suciedad acumulada, mejorando la presentación y facilitando la detección de fugas.",
      icon: "engine",
    },
    {
      id: "aspirado",
      name: "Aspirado",
      description:
        "Aspirado completo de alfombras, tapizados, asientos y todos los rincones del habitáculo para eliminar polvo, arena y residuos acumulados.",
      icon: "vacuum",
    },
    {
      id: "chasis",
      name: "Lavado de chasis",
      description:
        "Limpieza de la parte inferior del vehículo para eliminar barro, sal y suciedad que pueden acelerar la corrosión y afectar componentes mecánicos.",
      icon: "chassis",
    },
    {
      id: "fumigado",
      name: "Fumigado",
      description:
        "Tratamiento de fumigación interior que elimina bacterias, ácaros y malos olores, dejando un ambiente fresco y saludable dentro del vehículo.",
      icon: "spray",
    },
    {
      id: "interiores",
      name: "Detalle de interiores",
      description:
        "Limpieza minuciosa de tablero, consola, paneles de puertas, plásticos interiores y todos los detalles del habitáculo para una presentación impecable.",
      icon: "interior",
    },
  ],

  process: [
    {
      step: 1,
      title: "Recibimos tu vehículo",
      description: "Recepción del vehículo con una revisión inicial del estado general.",
    },
    {
      step: 2,
      title: "Evaluamos el servicio",
      description: "Determinamos el tipo de limpieza requerida según las necesidades del vehículo.",
    },
    {
      step: 3,
      title: "Realizamos la limpieza",
      description: "Ejecutamos el servicio con productos adecuados y atención al detalle.",
    },
    {
      step: 4,
      title: "Entrega con mejor presentación",
      description: "Entregamos el vehículo limpio, cuidado y con una presentación visiblemente superior.",
    },
  ],

  faq: [
    {
      question: "¿Qué servicios realiza Victoria Lavadero?",
      answer:
        "Realizamos aspirado, lavado de chasis, limpieza de motor con químico, fumigado y detalle de interiores. Cada servicio está enfocado en ofrecer un resultado visible y profesional.",
    },
    {
      question: "¿Cómo puedo solicitar una cotización?",
      answer:
        "Podés escribirnos directamente por WhatsApp y te responderemos a la brevedad con información sobre el servicio que necesitás.",
    },
    {
      question: "¿Atienden por orden de llegada o con reserva?",
      answer: "Recomendamos fuertemente asegurar tu turno por WhatsApp para evitar demoras y garantizar que le dediquemos el tiempo adecuado a tu vehículo. También atendemos sin reserva sujeto a disponibilidad.",
    },
    {
      question: "¿Realizan limpieza interior completa?",
      answer:
        "Sí, nuestro servicio de detalle de interiores incluye limpieza de tablero, consola, paneles de puertas, plásticos y aspirado completo del habitáculo.",
    },
    {
      question: "¿Puedo consultar disponibilidad por WhatsApp?",
      answer:
        "Por supuesto. WhatsApp es nuestro canal principal de atención. Escribinos y coordinamos el servicio.",
    },
    {
      question: "¿Dónde están ubicados?",
      answer: "Estamos ubicados en El Alto. Podés ver nuestra ubicación exacta en el mapa de la sección de contacto.",
    },
    {
      question: "¿Cuál es el horario de atención?",
      answer: "Atendemos de Lunes a Domingo, de 08:00 a 18:00 horas.",
    },
  ],

  finalCta: {
    title: "¿Listo para darle una mejor imagen a tu vehículo?",
    subtitle: "Escribinos por WhatsApp y coordinamos el servicio que necesitás.",
    button: "Escribinos por WhatsApp",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Victoria Lavadero. Todos los derechos reservados.`,
  },
} as const;

export type SiteConfig = typeof siteConfig;
