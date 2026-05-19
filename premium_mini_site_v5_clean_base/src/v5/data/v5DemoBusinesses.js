/**
 * V5 Demo Businesses (Requested Niches)
 * -----------------------------------------
 * These businesses drive completely different structural and visual results.
 */

export const V5_DEMO_BUSINESSES = {
  bridal: {
    id: "bridal",
    name: "Zoya’s Henna Art",
    niche: "mehendi_artist",
    archetype: "cinematic-concierge",
    location: "Kothrud, Pune",
    phone: "919876543210",
    instagram: "https://instagram.com/zoyasmehendi",
    igHandle: "@zoyasmehendi",
    switcherLabel: "Bridal Art",
    theme: { primary: "#450A0A", accent: "#B91C1C" },
    hero: {
      badge: "Bookings Open for 2024-25",
      headline: "Intricate Henna. <br/>Crafted for <span class='text-red-700'>Tradition.</span>",
      subheadline: "Pune's elite bridal mehendi artist specializing in organic henna and heritage motifs.",
      image: "https://images.unsplash.com/photo-1590210350412-21950e394017?q=80&w=800&auto=format&fit=crop"
    },
    signals: ["100% Organic Home-Made Paste", "Intricate Bridal Portraits", "Doorstep Service Across Pune"],
    offers: [
      { id: "b1", title: "Full Bridal Story", price: "Starts ₹5,000", bestFor: "Brides", time: "5-8h", desc: "Full hands and feet with intricate bridal figures and personalized stories." },
      { id: "s1", title: "Sider / Party Mehendi", price: "₹500/hand", bestFor: "Guests", time: "20min", desc: "Elegant floral or mandala patterns for wedding guests." },
      { id: "e1", title: "Engagement Special", price: "Starts ₹2,500", bestFor: "Small Events", time: "2h", desc: "Elbow-length designs with modern arabic-fusion elements." }
    ],
    proof: [
      { id: "p1", type: "result", text: "Verified organic stain – deep mahogany in 24 hours." }
    ],
    faqs: [
      { q: "How early should I book?", a: "For peak wedding season (Nov-Feb), I recommend booking at least 3-4 months in advance." },
      { q: "Do you travel outside Pune?", a: "Yes, I am available for destination weddings with travel and stay provided." }
    ]
  },
  
  photography: {
    id: "photography",
    name: "Lumina Wedding Films",
    niche: "wedding_photographer",
    archetype: "transformation-proof", // Using high-impact visual proof archetype
    location: "Viman Nagar, Pune",
    phone: "919876543211",
    instagram: "https://instagram.com/luminaweddings",
    igHandle: "@luminaweddings",
    switcherLabel: "Films & Photos",
    theme: { primary: "#000000", accent: "#D4AF37" },
    hero: {
      badge: "International Award Winner",
      headline: "Golden Moments. <br/>Timeless <span class='text-amber-500'>Cinematics.</span>",
      subheadline: "Capturing the raw emotion of Maharashtrian weddings with a cinematic contemporary touch.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
    },
    signals: ["4K Cinematic Delivery", "Candid Specialist", "Premium Coffee Table Books"],
    offers: [
      { id: "p1", title: "The Heritage Suite", price: "₹85,000/day", bestFor: "Big Weddings", time: "Full Event", desc: "Full photo + cinematic film + drone + 2 luxury albums." },
      { id: "p2", title: "Candid Core", price: "₹45,000/day", bestFor: "Small Events", time: "8h", desc: "Focus on raw emotions and artistic candid portraiture." }
    ],
    proof: [
      { id: "pr1", type: "count", text: "Covered 200+ weddings across India." }
    ],
    faqs: [
      { q: "When do we get the photos?", a: "Sneak peeks in 48 hours. Full edited gallery in 6-8 weeks." }
    ]
  },

  bakery: {
    id: "bakery",
    name: "Aura Home Kitchen",
    niche: "tiffin_service",
    archetype: "menu-commerce",
    location: "Baner, Pune",
    phone: "919876543212",
    instagram: "https://instagram.com/aurakitchen",
    igHandle: "@aurakitchen",
    switcherLabel: "Meal Service",
    theme: { primary: "#166534", accent: "#22C55E" },
    hero: {
      badge: "Home-Cooked & Healthy",
      headline: "Daily Nutrition. <br/>Ghar ka <span class='text-green-600'>Swad.</span>",
      subheadline: "Premium tiffin service and home-baked treats for working professionals in Baner and Hinjewadi.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop"
    },
    signals: ["No Soda / No Preservatives", "Eco-Friendly Tiffin Boxes", "Flexible Weekly Plans"],
    offers: [
      { id: "m1", title: "Executive Thali", price: "₹180/meal", bestFor: "Lunch", time: "Daily", desc: "2 Veg, Dal, Rice, 3 Chapati, Salad, and Sweet." },
      { id: "m2", title: "The Weekly Pass", price: "₹1,100", bestFor: "Subscription", time: "6 Days", desc: "Standard lunch or dinner tiffin delivered to your desk." },
      { id: "b1", title: "Weekend Treat Box", price: "₹450", bestFor: "Dessert", time: "Sat-Sun", desc: "Assorted home-baked cookies and brownies." }
    ],
    proof: [
      { id: "s1", type: "safety", text: "FSSAI Registered Home Kitchen." }
    ],
    faqs: [
      { q: "What is the delivery time?", a: "Lunch: 12:30 PM - 1:30 PM. Dinner: 7:30 PM - 8:30 PM." }
    ]
  }
};
