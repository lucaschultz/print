// Grandparent Bullshit Bingo items
export const grandparentBullshitItems: string[] = [
  "Gast mit schicker Fliege",
  "Kleidungsstück mit Blümchenmuster",
  "Jemand trägt Hosenträger",
  "Hose aus Kordstoff",
  "Perlenkette als Accessoire",
  "Coole Schiebermütze gesichtet",
  "Strickjacke über der Schulter",
  "Jemand trägt einen Pullunder",
  "Brille an einer Kette",
  "Outfit komplett in Beige",
  "Weste wird zugeknöpft",
  "Handtasche hängt am Arm",
  "Jemand lobt die Zimmerpflanzen",
  "Die Küche ist voller Leute",
  "Gesicht verzieht sich beim Shot",
  "Jemand trinkt eine Zwiwa",
  "Werthers Original wird angeboten",
  "Ein Gähnen wird versteckt",
  "Jemand dehnt den Rücken",
  "Reiben der schmerzenden Knie",
  "Große Freude über Sitzplatz",
  "Ich muss morgen früh raus",
  "Gespräch über Elotrans",
  "Klagen über hohe Mieten",
  "Bewertung der Party Snacks",
  "Ich trinke heute nur ein Bier",
  "Blick auf die Uhrzeit",
  "Ein Glas fällt um",
  "Lautes Lachen in der Ecke",
  "Tanzen mit Drink in der Hand",
  "Jemand singt falsch mit",
  "Versuch eines Gruppenfotos",
  "Jemand sucht seine Jacke",
  "Klagen über drückende Schuhe",
  "Jemand lehnt Schnaps ab",
  "Müde aber glücklich",
  "Handy Taschenlampe wird genutzt",
  '"Das Tanzbein schwingen" wird erwähnt',
  "Lippenstift wird nachgezogen",
  "Graues Haarspray im Haar",
  "Jemand trägt Hausschuhe",
  "Gespräch über die Arbeit",
  "Was trinkst du?",
  "Texthänger beim (Mit-)Singen",
  "Frage wo das Essen steht",
  "Check der Öffi App",
  "Jemand nimmt die letzte Bahn",
  "Fenster wird auf Kipp gestellt",
  "Diskussion über Heizkosten",
  "Satz über gute alte Zeiten",
  "Jemand bringt selbstgemachten Kuchen mit",
  "Jemand erzählt einen Witz",
  "Lob für die Gastgeberin",
  "Jemand bringt einen Salat mit",
  "Jemand trägt bunte Wollsocken",
];

// Picture Challenge Bingo items
export const pictureChallengeItems: string[] = [
  "Dem Geburtstagskind",
  "Grauem Cardigan",
  "Hosenträgern",
  "Cooler Brille",
  "Gehstock",
  "Lockenwicklern oder Kopftuch",
  "Schiebermütze oder Hut",
  "Outfit komplett in Beige",
  "Blumenmuster",
  "Perlenkette",
  "Kniestrümpfen",
  "Pantoffeln",
  "Fliege oder Krawatte",
  "Grauen Haaren (echt oder fake)",
  "Schnauzer oder Bart",
  "Handtasche am Arm",
  "Weste",
  "Outfit aus Cord",
  "Eierlikör oder Shot",
  "Anstoßen: 'Gute alte Zeit'",
  "Pose: 'Rücken halten' (Aua!)",
  "Skeptischem Blick",
  "Kaffeekränzchen-Vibe",
  "Tanzbein schwingen",
  "Breitem Grinsen",
  "Fake-Nickerchen",
  "Zeitung oder Buch",
  "Pose: Kleingedrucktes lesen",
  "Klassischem Kussmund",
  "Froschperspektive (Technik-Fail)",
  "Total verwackelt (Ups!)",
  "Neuer Bekanntschaft",
  "DJ oder Musikbox",
  "Leckerstem Drink",
  "Deko-Zahl 30",
  "Bonbon tauschen",
  "Zähne zeigen",
  "Ganzer Gang (3+ Leute)",
  "Bingo-Runde (3+ Leute)",
  "Pose: Rollator-Rennen",
  "Person größer als du",
  "Person kleiner als du",
  "Gleicher Augenfarbe",
  "Partnerlook",
  "Lautem Lachen",
  "Pose: Senioren-Sport",
  "Pose: 'Hä? Was?' (Hand am Ohr)",
  "Mahnendem Zeigefinger",
  "Gruppenkuscheln (4+ Leute)",
  "JOKER: Lieblingsmensch",
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
export function getBingoCard(items: string[]): string[] {
  const shuffled = shuffleArray(items);
  return shuffled.slice(0, 16);
}

// Generate multiple bingo cards from a specific item set
export function generateBingoCards(items: string[], count: number): string[][] {
  return Array.from({ length: count }, () => getBingoCard(items));
}
