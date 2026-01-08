// German bingo items for grandparent activities
export const bingoItems: string[] = [
  "Früher war alles besser",
  "Jemand sucht seine Brille (die er trägt)",
  "Es zieht hier!",
  "Lautes Stöhnen beim Hinsetzen",
  "Jemand fragt nach Eierlikör",
  "Ausführlicher Bericht über Krankheiten",
  "Die Musik ist viel zu laut",
  "Jemand bietet ein Werther’s Echte an",
  "Verwirrung bei Smartphone-Bedienung",
  "Jemand macht kurz die Augen zu (Nickerchen)",
  "Das vertrage ich vom Magen her nicht mehr",
  "Intensives Gespräch über das Wetter",
  "Kind, du bist so dünn geworden! Iss was!",
  "Jemand verwechselt einen Namen",
  "Ein Stofftaschentuch wird benutzt",
  "Blick auf die Uhr vor 22:00 Uhr",
  "Kopfschütteln über die Jugend von heute",
  "Jemand trägt von Kopf bis Fuß Beige",
  "Hä? Sprich mal deutlicher!",
  "Jemand erwähnt die Apotheken Umschau",
  "Diskussion über die Rente",
  "Witz über die Dritten Zähne",
  "Ich brauche jetzt mal einen Stuhl",
  "Sowas gab es zu meiner Zeit nicht",
  "Fotos von Enkeln oder Haustieren werden gezeigt",
  "Man gönnt sich ja sonst nichts",
  "Jemand zupft an den Stützstrümpfen",
  "Handy wird mit gestrecktem Arm gehalten",
  "Jemand schunkelt sitzend zur Musik",
  "So jung kommen wir nicht mehr zusammen"
];

// Shuffle array using Fisher-Yates algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get 16 random items for a bingo card (4x4 grid)
export function getBingoCard(): string[] {
  const shuffled = shuffleArray(bingoItems);
  return shuffled.slice(0, 16);
}

// Generate multiple bingo cards
export function generateBingoCards(count: number): string[][] {
  return Array.from({ length: count }, () => getBingoCard());
}
