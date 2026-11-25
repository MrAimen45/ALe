export type ProductId = 'ysl-libre' | 'montale-arabians-tonka';

export interface ProductVariant {
  id: string;
  label: string;
  priceLabel: string;
  availabilityLabel: string;
}

export interface ProductGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface FragranceProduct {
  id: ProductId;
  brand: string;
  name: string;
  concentration: string;
  theme: 'champagne' | 'obsidian';
  headline: string;
  description: string;
  emotionalMessage: string;
  ctaLabel: string;
  storyLead: string;
  olfactoryFamily: string;
  highlights: string[];
  images: ProductGalleryImage[];
  variants: ProductVariant[];
  shippingPlaceholder: string;
  returnsPlaceholder: string;
  checkoutTrustNote: string;
}

export const PRODUCTS: FragranceProduct[] = [
  {
    id: 'ysl-libre',
    brand: 'Yves Saint Laurent',
    name: 'Libre Eau de Parfum',
    concentration: 'Eau de Parfum',
    theme: 'champagne',
    headline: 'LIBERA DI ESSERE TE STESSA.',
    description:
      'Audace, elegante, inconfondibile. Una fragranza che celebra la libertà di esprimere la propria personalità, senza compromessi.',
    emotionalMessage: 'Per chi non ha paura di brillare.',
    ctaLabel: 'SCOPRI LIBRE',
    storyLead:
      'Un incontro luminoso tra l’architettura dorata del flacone e la freschezza avvolgente di una scia couture pensata per lasciare un segno indelebile.',
    olfactoryFamily: 'Floreale Ambrato · Luminoso',
    highlights: [
      'Flacone iconico con monogramma dorato avvolto nel vetro trasparente',
      'Equilibrio raffinato tra calore dorato ed eleganza contemporanea',
      'Confezione originale Yves Saint Laurent inclusa'
    ],
    images: [
      {
        src: '/assets/aistudio/1__1__f189c807.jpg',
        alt: 'Yves Saint Laurent Libre Eau de Parfum con astuccio originale su marmo nero venato oro in luce calda architettonica',
        caption: 'Luce architettonica e vetro sfaccettato'
      },
      {
        src: '/assets/aistudio/Gemini_Generated_Image_s7jdvss7jdvss7jd_e0bdadca.jpg',
        alt: 'Dettaglio ravvicinato del monogramma dorato sul flacone Yves Saint Laurent Libre Eau de Parfum',
        caption: 'Dettaglio gioiello dorato sul flacone'
      },
      {
        src: '/assets/aistudio/Gemini_Generated_Image_m5w282m5w282m5w2_accbb996.jpg',
        alt: 'Yves Saint Laurent Libre Eau de Parfum e confezione su marmo nero e oro con scia di vapore ambrato',
        caption: 'Scia calda e riflessi ambrati'
      }
    ],
    variants: [
      {
        id: 'ysl-format-1',
        label: 'Formato 1 (ml da definire)',
        priceLabel: '€ [Prezzo da inserire]',
        availabilityLabel: '[Disponibilità da verificare]'
      },
      {
        id: 'ysl-format-2',
        label: 'Formato 2 (ml da definire)',
        priceLabel: '€ [Prezzo da inserire]',
        availabilityLabel: '[Disponibilità da verificare]'
      }
    ],
    shippingPlaceholder:
      'Tempi, corrieri e tariffe di spedizione da definire prima della pubblicazione commerciale.',
    returnsPlaceholder:
      'Condizioni di reso, sigillo di integrità e tempistiche di rimborso da inserire a catalogo.',
    checkoutTrustNote:
      'Ordine protetto da protocollo SSL. Nessun addebito reale viene elaborato in questa anteprima con listino da definire.'
  },
  {
    id: 'montale-arabians-tonka',
    brand: 'Montale Paris',
    name: 'Arabians Tonka Eau de Parfum',
    concentration: 'Eau de Parfum',
    theme: 'obsidian',
    headline: 'UNA PRESENZA CHE NON PASSA INOSSERVATA.',
    description:
      'Intenso, avvolgente e magnetico. Una fragranza dal carattere deciso, pensata per chi ama distinguersi e lasciare un ricordo.',
    emotionalMessage: 'Il fascino di essere indimenticabili.',
    ctaLabel: 'SCOPRI ARABIANS TONKA',
    storyLead:
      'Un omaggio magnetico alle atmosfere d’Oriente: metallo nero lucido, dettagli dorati e una persistenza calda che cattura ogni sguardo.',
    olfactoryFamily: 'Orientale Speziato · Ambrato Intenso',
    highlights: [
      'Flacone iconico Montale in alluminio nero lucido con ciondolo dorato',
      'Composizione intensa, avvolgente e dalla scia memorabile',
      'Astuccio dorato originale Montale Paris incluso'
    ],
    images: [
      {
        src: '/assets/aistudio/1__3__b15c750c.jpg',
        alt: 'Montale Paris Arabians Tonka Eau de Parfum con astuccio dorato su marmo scuro tra volute di fumo dorato',
        caption: 'Atmosfera notturna e bagliori d’ambra'
      },
      {
        src: '/assets/aistudio/Gemini_Generated_Image_ubyx5zubyx5zubyx_929cc752.jpg',
        alt: 'Dettaglio ravvicinato del flacone Montale Paris Arabians Tonka con emblema dorato',
        caption: 'Emblema dorato su flacone nero'
      },
      {
        src: '/assets/aistudio/Gemini_Generated_Image_wdfq8nwdfq8nwdfq_14458430.jpg',
        alt: 'Montale Paris Arabians Tonka Eau de Parfum e confezione oro su marmo nero venato',
        caption: 'Confezione dorata ed essenza magnetica'
      }
    ],
    variants: [
      {
        id: 'montale-format-1',
        label: '100 ml · 3.4 Fl.oz (conferma da listino)',
        priceLabel: '€ [Prezzo da inserire]',
        availabilityLabel: '[Disponibilità da verificare]'
      },
      {
        id: 'montale-format-2',
        label: 'Formato alternativo (ml da definire)',
        priceLabel: '€ [Prezzo da inserire]',
        availabilityLabel: '[Disponibilità da verificare]'
      }
    ],
    shippingPlaceholder:
      'Tempi, corrieri e tariffe di spedizione da definire prima della pubblicazione commerciale.',
    returnsPlaceholder:
      'Condizioni di reso, sigillo di integrità e tempistiche di rimborso da inserire a catalogo.',
    checkoutTrustNote:
      'Ordine protetto da protocollo SSL. Nessun addebito reale viene elaborato in questa anteprima con listino da definire.'
  }
];

export const EDITORIAL_MEDIA = {
  heroBackdrop: '/src/assets/images/hero_luxury_atmosphere_1795605529667.jpg',
  emotionalAtelier: '/src/assets/images/emotional_story_atelier_1795605529630.jpg',
  christmasGifting: '/src/assets/images/christmas_luxury_gifting_1795605529571.jpg'
};

export type InfoModalKey =
  | 'contatti'
  | 'chi-siamo'
  | 'spedizioni'
  | 'privacy'
  | 'termini'
  | 'instagram';

export interface InfoModalContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export const INFO_MODALS: Record<InfoModalKey, InfoModalContent> = {
  contatti: {
    title: 'Contatti',
    subtitle: 'Servizio Clienti Ale Studio',
    paragraphs: [
      'Il nostro servizio di consulenza olfattiva è a tua disposizione per accompagnarti nella scelta della fragranza ideale o nella preparazione di un regalo personalizzato.',
      'Email concierge: [indirizzo email boutique da inserire]',
      'Orari di assistenza: [giorni e orari di apertura da definire]'
    ]
  },
  'chi-siamo': {
    title: 'Chi siamo',
    subtitle: 'La visione di Ale Studio',
    paragraphs: [
      'Ale Studio nasce come boutique italiana dedicata all’alta profumeria selettiva, guidata dalla convinzione che un profumo non sia un semplice accessorio, ma una dichiarazione intima di identità.',
      'La nostra selezione privilegia creazioni iconiche capaci di evocare emozioni autentiche, presentate con cura artigianale e attenzione a ogni dettaglio.'
    ]
  },
  spedizioni: {
    title: 'Spedizioni e resi',
    subtitle: 'Informazioni logistiche da definire',
    paragraphs: [
      'Costi e tempistiche di spedizione: [dati logistici e soglie di spedizione gratuita da inserire prima del lancio].',
      'Politica di reso: [termini per il diritto di recesso e istruzioni sul sigillo di garanzia da completare in base alle condizioni commerciali].',
      'Ogni ordine può essere arricchito con la Confezione Regalo Natalizia Ale Studio.'
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Tutela dei dati personali',
    paragraphs: [
      'Ale Studio rispetta la riservatezza dei propri clienti. I dati inseriti durante la simulazione d’acquisto o la richiesta di informazioni vengono trattati esclusivamente per la gestione dell’ordine.',
      'Titolare del trattamento e informativa GDPR completa: [ragione sociale, sede legale e P.IVA da inserire].'
    ]
  },
  termini: {
    title: 'Termini e condizioni',
    subtitle: 'Condizioni generali di vendita',
    paragraphs: [
      'Prezzi, disponibilità e formati esposti nella presente vetrina sono predisposti come segnaposto in attesa di conferma ufficiale del listino commerciale.',
      'Condizioni contrattuali definitive, foro competente e garanzie legali: [testo legale completo da inserire].'
    ]
  },
  instagram: {
    title: 'Instagram · Ale Studio',
    subtitle: 'Ispirazioni olfattive e campagne',
    paragraphs: [
      'Segui il racconto visivo della boutique, gli scatti editoriali di Yves Saint Laurent Libre e Montale Paris Arabians Tonka e le edizioni regalo delle feste.',
      'Profilo ufficiale: [@alestudio.profumeria — link profilo da collegare]'
    ]
  }
};
