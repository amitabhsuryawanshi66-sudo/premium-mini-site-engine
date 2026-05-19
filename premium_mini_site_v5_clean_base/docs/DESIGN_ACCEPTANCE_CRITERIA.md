# Design Acceptance Criteria (V5)

Every section in the V5 engine must pass these "Pro Max" criteria before it is considered production-ready.

## ⚖️ Visual Tension & Layout
- [ ] **Asymmetric Balance:** The hero and at least one other section must use an offset or split-editorial composition.
- [ ] **Typography Contrast:** Heading-to-body font size ratio must be at least 5:1.
- [ ] **Intent-Aware:** Component state must change based on the user's selected intent in the `DecisionDock`.

## 🛡️ Trust & Proof
- [ ] **Anxiety Reduction:** Proof points must be adjacent to CTAs.
- [ ] **Niche-Native:** Proof types must match niche anxieties (e.g., sterility for tattoo, delivery for bakery).

## 📱 Mobile-First Ergonomics
- [ ] **Thumb-Zone:** Primary conversion buttons must be in the lower 40% of the viewport or sticky.
- [ ] **Android QA:** Zero horizontal overflow at 360px width.
- [ ] **Tap Targets:** Minimum 56px height for all primary actions.

## 🎬 Motion Engineering
- [ ] **Sequenced Reveals:** Elements must enter using a staggered child pattern.
- [ ] **Physical Springs:** Button taps must use a physics-based spring `whileTap` scale.
- [ ] **Reduced Motion:** Components must verify `useReducedMotion` and simplify animations if true.
