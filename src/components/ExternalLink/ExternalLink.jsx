/**
 * Used to link to stuff
 * @param {{
 * href: string
 * }} properties
 * @returns {}
 */

export function ExternalLink(properties) {
  return (
    <a target="_blank" rel="noreferrer" href={properties.href}>
      {properties.children}
    </a>
  );
}
