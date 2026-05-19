/**
 * V5 Skill Critics - Emil Kowalski (Motion)
 */
export const emilMotionCritic = (props) => {
  const issues = [];
  if (!props.easing || props.easing !== '[0.16, 1, 0.3, 1]') issues.push("Weak motion: Missing Pro Max cubic-bezier easing.");
  if (!props.stagger) issues.push("Sequencing error: Children must be staggered.");
  return issues;
};

/**
 * V5 Skill Critics - Impeccable (Polish)
 */
export const impeccablePolishCritic = (props) => {
  const issues = [];
  if (props.fontSizeRatio < 4) issues.push("Typography failure: Heading-to-body ratio is too low.");
  if (props.hasPureGray) issues.push("Color failure: Pure gray or black detected. Use brand tints.");
  return issues;
};
