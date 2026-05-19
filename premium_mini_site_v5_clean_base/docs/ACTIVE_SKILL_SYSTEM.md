# Active Skill System (V5)

The V5 engine implements the design skill stack as active project criteria.

## 1. Emil Kowalski: Motion Gate
Every section and interaction must use:
- **Cubic Bezier:** `[0.16, 1, 0.3, 1]` for all entrance reveals.
- **Physics Springs:** For tactile micro-interactions (e.g., `DecisionDock` taps).
- **Sequencing:** Elements must unfold in logical order (Stagger Children).

## 2. Impeccable: Polish Gate
- **Typography Scale:** Massive display vs. clean body (4x ratio minimum).
- **Tinted Neutrals:** No #000 or pure gray. Every surface is brand-tinted.
- **Fluid Spacing:** All layout variables derive from `--v5-container` and `--v5-section-py`.

## 3. Taste Skill: Aesthetic Gate
- **REJECT:** Standard grid cards.
- **REQUIRE:** Asymmetric compositions and intent-driven layouts.
- **Art Direction:** Demos must feel niche-native (Cinematic Ink vs. Warm Menu).

## 4. UI UX Pro Max: Conversion Gate
- **5-Second Clarity:** Location, Niche, and primary CTA above the fold.
- **Objection Resolving:** Anxiety-reduction content placed adjacent to enquiry points.
- **Thumb-Zone:** Fixed/sticky elements optimized for Android small viewports.

## 5. 21st.dev: Workflow Gate
- Before implementation, components are conceptualized in 3 variations (Minimal, Bold, Editorial).
- The strongest variant is implemented in the master component library.
