import React, { useState } from 'react';
import { V5_DEMO_BUSINESSES } from './data/v5DemoBusinesses';

export const V5App = () => {
  const [demoKey, setDemoKey] = useState('tattoo');
  const business = V5_DEMO_BUSINESSES[demoKey];

  if (!business) return <div>Business not found</div>;

  return (
    <div className="v5-app">
      {/* Demo Switcher */}
      <div className="v5-demo-switcher">
        {Object.keys(V5_DEMO_BUSINESSES).map((key) => (
          <button
            key={key}
            onClick={() => setDemoKey(key)}
            className={`v5-switcher-chip ${demoKey === key ? 'is-active' : ''}`}
          >
            {V5_DEMO_BUSINESSES[key].switcherLabel}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="v5-hero">
        <span className="v5-badge">{business.badge}</span>
        <h1 className="v5-headline">{business.headline}</h1>
        <p className="v5-subheadline">{business.subheadline}</p>
        <p className="v5-location">{business.location} — {business.businessName}</p>
        <div className="v5-hero-ctas">
          <button className="v5-btn-primary">{business.primaryCta}</button>
          <button className="v5-btn-secondary">{business.secondaryCta}</button>
        </div>
      </section>

      {/* Intent Buttons */}
      <section className="v5-section">
        <h2 className="v5-section-title">What are you looking for?</h2>
        <div className="v5-intent-grid">
          {business.intents.map((intent, idx) => (
            <button key={idx} className="v5-intent-btn">{intent}</button>
          ))}
        </div>
      </section>

      {/* Offer Cards */}
      <section className="v5-section">
        <h2 className="v5-section-title">Exclusive Offers</h2>
        <div className="v5-card-grid">
          {business.offers.map((offer) => (
            <div key={offer.id} className="v5-card">
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof Cards */}
      <section className="v5-section">
        <h2 className="v5-section-title">Why Trust Us?</h2>
        <div className="v5-proof-grid">
          {business.proof.map((item, idx) => (
            <div key={idx} className="v5-proof-card">{item}</div>
          ))}
        </div>
      </section>

      {/* Visual/Story Cards */}
      <section className="v5-section">
        <h2 className="v5-section-title">Our Process</h2>
        <div className="v5-story-grid">
          {business.visualStory.map((step, idx) => (
            <div key={idx} className="v5-story-card">
              <span className="v5-step-num">{idx + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objection Cards */}
      <section className="v5-section">
        <h2 className="v5-section-title">Common Questions</h2>
        <div className="v5-objection-grid">
          {business.objections.map((obj, idx) => (
            <div key={idx} className="v5-objection-card">
              <h4>{obj.q}</h4>
              <p>{obj.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final WhatsApp CTA */}
      <section className="v5-final-cta-section">
        <a
          href={`https://wa.me/${business.whatsappNumber}`}
          className="v5-sticky-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {business.finalCta}
        </a>
      </section>

      {/* Footer */}
      <footer className="v5-footer">
        <p>Premium Mini Site V5 — Niche Engine Build</p>
        <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">Follow us on Instagram</a>
      </footer>
    </div>
  );
};
