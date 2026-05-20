import React, { useState, useEffect } from 'react';
import { V5_DEMO_BUSINESSES } from './data/v5DemoBusinesses';

export const V5App = () => {
  const [demoKey, setDemoKey] = useState('tattoo');
  const business = V5_DEMO_BUSINESSES[demoKey];

  useEffect(() => {
    // Apply theme colors to body for smooth transitions
    document.body.style.backgroundColor = business.theme.primary;
    document.body.style.color = business.theme.text;
  }, [business]);

  if (!business) return <div>Business not found</div>;

  const handleWhatsApp = (offerTitle = '') => {
    const message = offerTitle 
      ? `${business.whatsappBaseMessage} I'm specifically interested in ${offerTitle}.`
      : business.whatsappBaseMessage;
    const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      className={`v5-app archetype-${business.archetype}`}
      style={{ 
        '--brand-primary': business.theme.primary,
        '--brand-accent': business.theme.accent,
        '--brand-surface': business.theme.surface,
        '--brand-text': business.theme.text
      }}
    >
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
        <h1 className="v5-headline" dangerouslySetInnerHTML={{ __html: business.headline }} />
        <p className="v5-subheadline">{business.subheadline}</p>
        <div className="v5-location-tag">{business.location}</div>
      </section>

      {/* Intent Selector */}
      <section className="v5-section">
        <h2 className="v5-section-title">Select Interest</h2>
        <div className="v5-intent-grid">
          {business.intents.map((intent, idx) => (
            <button key={idx} className="v5-intent-btn" onClick={() => handleWhatsApp(intent.label)}>
              <span className="v5-intent-icon">{intent.icon}</span>
              <span className="v5-intent-label">{intent.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Offer Cards */}
      <section className="v5-section">
        <h2 className="v5-section-title">Current Packages</h2>
        <div className="v5-offer-list">
          {business.offers.map((offer) => (
            <div key={offer.id} className="v5-offer-card">
              {offer.tag && <span className="v5-offer-tag">{offer.tag}</span>}
              <h3 className="v5-offer-title">{offer.title}</h3>
              <p className="v5-offer-desc">{offer.desc}</p>
              <div className="v5-offer-footer">
                <span className="v5-offer-price">{offer.price}</span>
                <button className="v5-btn-inline" onClick={() => handleWhatsApp(offer.title)}>Select</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proof Section */}
      <section className="v5-section">
        <h2 className="v5-section-title">Verified Proof</h2>
        <div className="v5-proof-row">
          {business.proof.map((item, idx) => (
            <div key={idx} className="v5-proof-item">
              <div className="v5-proof-count">{item.count}</div>
              <div className="v5-proof-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Story */}
      <section className="v5-section">
        <h2 className="v5-section-title">The Process</h2>
        <div className="v5-story-flow">
          {business.visualStory.map((step, idx) => (
            <div key={idx} className="v5-story-step">
              <div className="v5-story-num">{idx + 1}</div>
              <div className="v5-story-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Objections */}
      <section className="v5-section">
        <h2 className="v5-section-title">Common Queries</h2>
        <div className="v5-faq-list">
          {business.objections.map((obj, idx) => (
            <div key={idx} className="v5-faq-item">
              <h4>{obj.q}</h4>
              <p>{obj.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Sticky CTA */}
      <div className="v5-cta-dock">
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}
          className="v5-whatsapp-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.611 5.973L0 24l6.162-1.616a11.83 11.83 0 005.883 1.558h.005c6.637 0 12.045-5.412 12.048-12.05a11.8 11.8 0 00-3.536-8.472z"/>
          </svg>
          {business.finalCta}
        </a>
      </div>

      {/* Footer */}
      <footer className="v5-footer">
        <div className="v5-footer-marker">Premium Mini Site V5 — Niche Engine Build</div>
      </footer>
    </div>
  );
};
