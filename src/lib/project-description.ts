export function splitLinkedDescription(description: string, linkText: string) {
  const linkStart = description.indexOf(linkText);

  if (linkStart === -1) return null;

  return {
    before: description.slice(0, linkStart),
    linkText,
    after: description.slice(linkStart + linkText.length),
  };
}
