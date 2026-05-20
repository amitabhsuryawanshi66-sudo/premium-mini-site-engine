import { useState } from 'react';
import { V5_DEMO_BUSINESSES } from './data/v5DemoBusinesses';

const buildWhatsAppLink = (business, message) => {
  const phone = business.whatsappNumber || '919999999999';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const V5App = () => {
  const [demoKey, setDemoKey] = useState('tattoo');
  const [selectedIntent, setSelectedIntent] = useState(null);

  const business = V5_DEMO_BUSINESSES[demoKey];

  if (!business) {
    return (
      <main className="v5-app">
        <section className="v5-hero">
          <p className="v5-badge">V5 Engine Error</p>
          <h1 className="v5-headline">Demo not found.</h1>
        </section>
      </main>
    );
  }

  const intents = business.intents || [];
  const offers = business.offers || [];
  const proof = business.proof || [];
  const story = business.visualStory || [];
  const objections = business.objections || [];
  const activeIntent = selectedIntent || intents[0];

  const baseMessage = `Hi, I want to enquire about ${business.businessName} in ${business.location}.`;
  const intentMessage = activeIntent
    ? `${baseMessage} I am interested in: ${activeIntent}.`
    : baseMessage;

  return (
    <main className="v5-app">
      <div className="v5-demo-switcher" aria-label="Demo switcher">
        {Object.entries(V5_DEMO_BUSINESSES).map(([key, demo]) => (
          <button
            key={key}
            type="button"
            className={demoKey === key ? 'v5-switcher-chip is-active' : 'v5-switcher-chip'}
            onClick={() => {
              setDemoKey(key);
              setSelectedIntent(null);
            }}
          >
            {demo.switcherLabel || key}
          </button>
        ))}
      </div>

      <section className="v5-hero">
        <p className="v5-badge">{business.badge}</p>
        <h1 className="v5-headline">{business.headline}</h1>
        <p className="v5-subheadline">{business.subheadline}</p>
        <p className="v5-location">
          {business.location} — {business.businessName}
        </p>

        <div className="v5-hero-ctas">
          <a className="v5-btn-primary" href={buildWhatsAppLink(business, intentMessage)}>
            {business.primaryCta}
          </a>
          <a className="v5-btn-secondary" href="#offers">
            {business.secondaryCta || 'View options'}
          </a>
        </div>
      </section>

      <section className="v5-section">
        <h2 className="v5-section-title">What are you looking for?</h2>
        <div className="v5-intent-grid">
          {intents.map((intent) => (
            <button
              key={intent}
              type="button"
              className={
                activeIntent === intent ? 'v5-intent-btn is-active' : 'v5-intent-btn'
              }
              onClick={() => setSelectedIntent(intent)}
            >
              {intent}
            </button>
          ))}
        </div>
      </section>

      <section id="offers" className="v5-section">
        <h2 className="v5-section-title">Decision board</h2>
        <div className="v5-card-grid">
          {offers.map((offer) => (
            <article className="v5-card" key={offer.id || offer.title}>
              <h3>{offer.title}</h3>
              <p>{offer.desc || offer.description}</p>
              <a
                className="v5-btn-secondary"
                href={buildWhatsAppLink(
                  business,
                  `${baseMessage} I want to ask about ${offer.title}.`
                )}
              >
                Ask on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="v5-section">
        <h2 className="v5-section-title">Why trust this?</h2>
        <div className="v5-proof-grid">
          {proof.map((item) => (
            <div className="v5-proof-card" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="v5-section">
        <h2 className="v5-section-title">Process</h2>
        <div className="v5-story-grid">
          {story.map((step, index) => (
            <article className="v5-story-card" key={step}>
              <span className="v5-step-num">{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v5-section">
        <h2 className="v5-section-title">Common questions</h2>
        <div className="v5-objection-grid">
          {objections.map((obj) => (
            <article className="v5-objection-card" key={obj.q}>
              <h4>{obj.q}</h4>
              <p>{obj.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v5-section">
        <h2 className="v5-section-title">Ready to enquire?</h2>
        <a className="v5-btn-primary" href={buildWhatsAppLink(business, intentMessage)}>
          {business.finalCta || business.primaryCta}
        </a>
      </section>

      <div className="v5-final-cta-section">
        <a className="v5-sticky-whatsapp" href={buildWhatsAppLink(business, intentMessage)}>
          {business.finalCta || business.primaryCta}
        </a>
      </div>

      <footer className="v5-footer">
        Premium Mini Site V5 — Niche Engine Build
        <a href={business.instagramUrl} target="_blank" rel="noreferrer">
          Follow us on Instagram
        </a>
      </footer>
    </main>
  );
};
