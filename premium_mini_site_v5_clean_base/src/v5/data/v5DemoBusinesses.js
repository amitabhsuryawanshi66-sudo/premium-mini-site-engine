export const V5_DEMO_BUSINESSES = {
  tattoo: {
    id: "tattoo",
    archetype: "cinematic",
    switcherLabel: "Ink Studio",
    businessName: "Obsidian Ink Studio",
    niche: "High-End Blackwork & Fine Line",
    location: "Koregaon Park, Pune",
    headline: "Wear Your Story. <br/><span class='accent'>Forever.</span>",
    subheadline: "Pune’s premier destination for custom blackwork. Where fine-art meets skin.",
    badge: "Limited Slots for March",
    primaryCta: "Reserve Consultation",
    secondaryCta: "Explore Gallery",
    whatsappNumber: "919876543210",
    whatsappBaseMessage: "Hi Obsidian Ink, I'm interested in booking a consultation for a custom tattoo. My idea is: ",
    instagramUrl: "https://instagram.com/obsidianink",
    intents: [
      { label: "First Tattoo", icon: "✨" },
      { label: "Sleeve Project", icon: "🎨" },
      { label: "Cover-up", icon: "🔄" }
    ],
    offers: [
      { 
        id: "o1", 
        title: "The Visionary Session", 
        desc: "1-on-1 design consultation + custom moodboard + placement study.",
        price: "₹1,500",
        tag: "Recommended"
      },
      { 
        id: "o2", 
        title: "Full Day Immersion", 
        desc: "8-hour session for large scale pieces. Lunch and aftercare kit included.",
        price: "₹15,000",
        tag: "Expert Only"
      }
    ],
    proof: [
      { label: "Healed Results", count: "2,000+" },
      { label: "Google Rating", count: "4.9/5" },
      { label: "Years in Art", count: "12+" }
    ],
    visualStory: [
      { title: "Consult", desc: "Digital sketching and skin mapping." },
      { title: "Precision", desc: "Single-needle fine line execution." },
      { title: "Aftercare", desc: "Medical grade healing protocols." }
    ],
    objections: [
      { q: "How do you ensure safety?", a: "We use 100% disposable single-use equipment and hospital-grade sterilization." },
      { q: "Can I bring my own design?", a: "Absolutely. We'll refine it to ensure it ages perfectly on skin." }
    ],
    finalCta: "Claim Your Slot",
    theme: {
      primary: "#0A0A0A",
      accent: "#E53E3E",
      surface: "#111111",
      text: "#FFFFFF"
    }
  },
  bakery: {
    id: "bakery",
    archetype: "artisanal",
    switcherLabel: "Bake Room",
    businessName: "Mira’s Bake Room",
    niche: "Small-Batch Sourdough & Pastry",
    location: "Baner, Pune",
    headline: "Slow Fermented. <br/><span class='accent'>Deeply Flavored.</span>",
    subheadline: "Traditional French techniques meet organic Indian grains. Baked at dawn, gone by noon.",
    badge: "Fresh Batch Out Now",
    primaryCta: "Order for Delivery",
    secondaryCta: "View Menu",
    whatsappNumber: "919876543211",
    whatsappBaseMessage: "Hi Mira, I'd like to order from today's fresh batch. Do you have sourdough available?",
    instagramUrl: "https://instagram.com/mirasbakeroom",
    intents: [
      { label: "Today's Special", icon: "🥖" },
      { label: "Custom Cake", icon: "🎂" },
      { label: "Baking Class", icon: "👩‍🍳" }
    ],
    offers: [
      { 
        id: "b1", 
        title: "The Weekend Basket", 
        desc: "1 Sourdough Loaf + 2 Croissants + 1 Seasonal Jam.",
        price: "₹850",
        tag: "Best Seller"
      },
      { 
        id: "b2", 
        title: "Sourdough Masterclass", 
        desc: "3-hour hands-on workshop. Take home your own starter culture.",
        price: "₹2,500",
        tag: "Workshop"
      }
    ],
    proof: [
      { label: "Natural Starter", count: "5 Years Old" },
      { label: "Local Grains", count: "100% Organic" },
      { label: "Happy Mornings", count: "500+ Daily" }
    ],
    visualStory: [
      { title: "Ferment", desc: "48-hour slow cold fermentation." },
      { title: "Score", desc: "Hand-carved artistic crust patterns." },
      { title: "Bloom", desc: "Stone-deck oven for the perfect ear." }
    ],
    objections: [
      { q: "Do you use preservatives?", a: "Never. Only flour, water, salt, and time." },
      { q: "Is it suitable for vegans?", a: "All our sourdough loaves are 100% vegan." }
    ],
    finalCta: "Taste Real Bread",
    theme: {
      primary: "#FFFAF0",
      accent: "#8B4513",
      surface: "#FFF5E6",
      text: "#2D1B0D"
    }
  },
  detailing: {
    id: "detailing",
    archetype: "precision",
    switcherLabel: "Detail Lab",
    businessName: "Axis Auto Detail Lab",
    niche: "Luxury Surface Protection",
    location: "Wakad, Pune",
    headline: "Mirror Finish. <br/><span class='accent'>Zero Compromise.</span>",
    subheadline: "Professional Ceramic Coating and Graphene Protection for those who demand perfection.",
    badge: "Certified IGL Coatings",
    primaryCta: "Book Inspection",
    secondaryCta: "View Results",
    whatsappNumber: "919876543212",
    whatsappBaseMessage: "Hi Axis, I want to get a quote for ceramic coating for my car. Model: ",
    instagramUrl: "https://instagram.com/axisautodetail",
    intents: [
      { label: "Ceramic Coating", icon: "🛡️" },
      { label: "Paint Correction", icon: "✨" },
      { label: "Interior Spa", icon: "🧼" }
    ],
    offers: [
      { 
        id: "d1", 
        title: "The Graphene Shield", 
        desc: "10H Hardness + 5 Year Warranty + 2 Stage Paint Correction.",
        price: "₹35,000",
        tag: "Ultimate"
      },
      { 
        id: "d2", 
        title: "The Gloss Revival", 
        desc: "Single stage polish + Premium Carnauba Wax + Engine Bay Clean.",
        price: "₹8,000",
        tag: "Essential"
      }
    ],
    proof: [
      { label: "Cars Protected", count: "1,200+" },
      { label: "Certified Labs", count: "3 Centers" },
      { label: "Gloss Meter", count: "95+ GU" }
    ],
    visualStory: [
      { title: "Decon", desc: "Chemical & Clay bar decontamination." },
      { title: "Correct", desc: "Eliminating 99% of swirl marks." },
      { title: "Protect", desc: "Infrared-cured ceramic bonding." }
    ],
    objections: [
      { q: "How long does it last?", a: "Our coatings are warranted for 3-5 years with proper maintenance." },
      { q: "Does it protect from scratches?", a: "It protects against swirl marks and bird droppings, not deep scratches." }
    ],
    finalCta: "Secure the Shine",
    theme: {
      primary: "#000000",
      accent: "#007AFF",
      surface: "#0A0A0A",
      text: "#F5F5F7"
    }
  }
};
