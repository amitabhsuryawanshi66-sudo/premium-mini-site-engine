export const V5_DEMO_BUSINESSES = {
  tattoo: {
    switcherLabel: 'Tattoo',
    businessName: 'Obsidian Ink Studio',
    niche: 'tattoo',
    badge: 'Appointment-only tattoo studio',
    headline: 'Custom tattoos designed before they touch skin.',
    subheadline:
      'Fine-line, script, realism, symbolic tattoos, and cover-up consultations in Koregaon Park.',
    location: 'Koregaon Park, Pune',
    primaryCta: 'Send My Tattoo Idea',
    secondaryCta: 'View Tattoo Styles',
    whatsappNumber: '919876543210',
    instagramUrl: 'https://instagram.com/obsidianinkstudio',
    defaultWhatsAppMessage:
      'Hi, I want to discuss a custom tattoo idea with Obsidian Ink Studio.',
    intents: ['Fine-line', 'Script', 'Realism', 'Cover-up', 'Pricing'],
    offers: [
      {
        title: 'Fine-line concept',
        meta: 'From ₹2,500',
        description: 'Minimal symbols, delicate linework, small custom concepts.',
        cta: 'Ask Fine-Line Price',
        whatsappMessage: 'Hi, I want to ask about a fine-line tattoo concept.',
      },
      {
        title: 'Script placement',
        meta: 'Consult required',
        description: 'Names, phrases, dates, and custom placement planning.',
        cta: 'Ask Script Tattoo Price',
        whatsappMessage: 'Hi, I want to discuss a script tattoo placement.',
      },
      {
        title: 'Cover-up review',
        meta: 'Photo review first',
        description: 'Send a photo of the old tattoo and get cover-up direction.',
        cta: 'Ask Cover-Up Question',
        whatsappMessage: 'Hi, I want to ask about a tattoo cover-up consultation.',
      },
    ],
    proof: [
      { title: 'Sterile setup', description: 'Single-use needles and clean workstation protocol.' },
      { title: 'Custom sketch', description: 'Your design is discussed before the session.' },
      { title: 'Aftercare guidance', description: 'Clear aftercare instructions after your tattoo.' },
    ],
    visualStory: [
      { title: 'Fine-line concept', type: 'Style board', description: 'Small symbols and delicate marks.' },
      { title: 'Script placement', type: 'Placement', description: 'Readable script designed for the body area.' },
      { title: 'Cover-up planning', type: 'Consult', description: 'Old tattoo reviewed before final suggestion.' },
    ],
    objections: [
      { question: 'How much will it cost?', answer: 'Pricing depends on size, placement, detail, and time.' },
      { question: 'Can I bring a reference?', answer: 'Yes. Send references on WhatsApp before consultation.' },
      { question: 'Is it safe?', answer: 'The studio follows sterile setup and single-use material practices.' },
    ],
    finalCta: {
      headline: 'Your idea deserves a custom mark.',
      subheadline: 'Send your idea, placement, and reference image on WhatsApp.',
      buttonLabel: 'Send My Tattoo Idea',
    },
  },

  bakery: {
    switcherLabel: 'Bakery',
    businessName: 'Mira’s Bake Room',
    niche: 'bakery',
    badge: 'Home-baked custom orders',
    headline: 'Custom cakes and dessert boxes made for your date.',
    subheadline:
      'Birthday cakes, brownies, dessert boxes, and weekend treats from Baner.',
    location: 'Baner, Pune',
    primaryCta: 'Ask Custom Cake Price',
    secondaryCta: 'View Menu Ideas',
    whatsappNumber: '919876543211',
    instagramUrl: 'https://instagram.com/mirasbakeroom',
    defaultWhatsAppMessage:
      'Hi, I want to ask about a custom cake order from Mira’s Bake Room.',
    intents: ['Cake price', 'Menu', 'Delivery area', 'Bulk order', 'Date availability'],
    offers: [
      {
        title: 'Custom birthday cake',
        meta: 'From ₹899',
        description: 'Flavour, theme, weight, and date discussed before quote.',
        cta: 'Ask Cake Price',
        whatsappMessage: 'Hi, I want to ask about a custom birthday cake.',
      },
      {
        title: 'Dessert box',
        meta: 'From ₹450',
        description: 'Brownies, cookies, cupcakes, and weekend gifting boxes.',
        cta: 'Ask Dessert Box Menu',
        whatsappMessage: 'Hi, please send the dessert box menu.',
      },
      {
        title: 'Bulk party order',
        meta: 'Custom quote',
        description: 'Cupcakes, jars, brownies, and party dessert planning.',
        cta: 'Ask Bulk Order Price',
        whatsappMessage: 'Hi, I want to ask about a bulk dessert order.',
      },
    ],
    proof: [
      { title: 'Fresh batches', description: 'Made close to order date for better freshness.' },
      { title: 'Baner delivery', description: 'Delivery areas confirmed before order.' },
      { title: 'Custom flavours', description: 'Chocolate, vanilla, fruit, and theme options.' },
    ],
    visualStory: [
      { title: 'Cake menu', type: 'Menu', description: 'Choose flavour, weight, and theme.' },
      { title: 'Dessert box', type: 'Gifting', description: 'Weekend boxes for small celebrations.' },
      { title: 'Party order', type: 'Bulk', description: 'Plan quantity and delivery slot.' },
    ],
    objections: [
      { question: 'How early should I order?', answer: 'Custom cakes are best booked 2–3 days in advance.' },
      { question: 'Do you deliver?', answer: 'Delivery depends on area and timing.' },
      { question: 'Can I share a reference?', answer: 'Yes. Send reference photos on WhatsApp.' },
    ],
    finalCta: {
      headline: 'Tell us the date, flavour, and people count.',
      subheadline: 'Get a clear quote before confirming your order.',
      buttonLabel: 'Ask for Cake Availability',
    },
  },

  detailing: {
    switcherLabel: 'Car Detailing',
    businessName: 'Axis Auto Detail Lab',
    niche: 'detailing',
    badge: 'Premium detailing lab',
    headline: 'Make your car look newly delivered again.',
    subheadline:
      'Interior deep cleaning, polishing, ceramic coating, and paint protection in Wakad.',
    location: 'Wakad, Pune',
    primaryCta: 'Ask Detailing Price',
    secondaryCta: 'View Services',
    whatsappNumber: '919876543212',
    instagramUrl: 'https://instagram.com/axisautodetaillab',
    defaultWhatsAppMessage:
      'Hi, I want to ask about car detailing prices at Axis Auto Detail Lab.',
    intents: ['Interior clean', 'Ceramic coating', 'Polishing', 'Send car photos', 'Check slot'],
    offers: [
      {
        title: 'Interior deep clean',
        meta: 'From ₹2,499',
        description: 'Seats, dashboard, carpets, vents, and odor treatment.',
        cta: 'Ask Interior Cleaning Price',
        whatsappMessage: 'Hi, I want to ask about interior deep cleaning.',
      },
      {
        title: 'Ceramic coating',
        meta: 'Quote after inspection',
        description: 'Paint protection with gloss, hydrophobic finish, and durability options.',
        cta: 'Ask Ceramic Coating Price',
        whatsappMessage: 'Hi, I want to ask about ceramic coating for my car.',
      },
      {
        title: 'Polish and gloss restore',
        meta: 'Inspection needed',
        description: 'Swirl reduction, gloss improvement, and exterior finish correction.',
        cta: 'Send Car Photos',
        whatsappMessage: 'Hi, I want to send car photos for polish/detailing advice.',
      },
    ],
    proof: [
      { title: 'Before/after proof', description: 'Visible transformation after inspection and service.' },
      { title: 'Product process', description: 'Service is suggested based on car condition.' },
      { title: 'Slot-based work', description: 'Appointments help avoid rushed detailing.' },
    ],
    visualStory: [
      { title: 'Interior reset', type: 'Before/after', description: 'Deep cleaning for seats and cabin.' },
      { title: 'Gloss restore', type: 'Paint', description: 'Exterior correction and shine.' },
      { title: 'Coating prep', type: 'Protection', description: 'Surface preparation before coating.' },
    ],
    objections: [
      { question: 'Do I need ceramic coating?', answer: 'It depends on paint condition, parking, and usage.' },
      { question: 'Can I send photos first?', answer: 'Yes. Send car photos on WhatsApp for first advice.' },
      { question: 'How long does detailing take?', answer: 'Most services require a few hours to a full day.' },
    ],
    finalCta: {
      headline: 'Show us your car. We’ll suggest the right treatment.',
      subheadline: 'Send photos and get a practical service recommendation.',
      buttonLabel: 'Ask for Detailing Price',
    },
  },
};
