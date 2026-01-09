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
  "... dem Geburtstagskind",
  "... einem Gast im grauen Cardigan",
  "... jemandem mit Hosenträgern",
  "... der Person mit dem buntesten Outfit",
  "... der Person mit dem ältesten Outfit",
  "... einer Person mit cooler Brille",
  "... jemandem mit einem Gehstock",
  "... jemandem mit Schiebermütze oder Hut",
  "... einer Person komplett in Beige",
  "... jemandem im Blumenmuster",
  "... einer Person mit Perlenkette",
  "... jemandem mit sichtbaren Kniestrümpfen",
  "... einem Gast in Pantoffeln",
  "... jemandem mit Fliege oder Krawatte",
  "... einer Person mit grauen Haaren",
  "... jemandem mit Schnauzer",
  "... einer Person mit Handtasche am Arm",
  "... jemandem, der eine Weste trägt",
  "... einer Person im Cord-Outfit",
  "... jemandem mit Shot",
  "... angestoßenen Gläsern auf die 'gute alte Zeit'",
  "... der Pose 'Rücken halten'",
  "... einem Gast mit skeptischem Blick",
  "... einem Duo im Kaffeekränzchen-Modus",
  "... jemandem beim Fake-Nickerchen",
  "... einer Person mit Zeitung oder Buch",
  "... der Pose 'Kleingedrucktes lesen'",
  "... dir selbst aus der Froschperspektive",
  "... einer neuen Bekanntschaft",
  "... jemandem mit einem leckeren Drink",
  "... dem Moment einer Bonbon-Übergabe",
  "... einer Bingo-Runde (3+ Leute)",
  "... der Pose 'Rollator-Rennen'",
  "... einer Person, die größer ist als du",
  "... einer Person, die kleiner ist als du",
  "... jemandem mit gleicher Augenfarbe",
  "... jemandem im Partnerlook",
  "... einer Person, die laut lacht",
  "... der Pose 'Senioren-Sportübung'",
  "... der Pose 'Hä? Was?'",
  "... einem mahnenden Zeigefinger",
  "... einer Brille an einer Kette oder Kordel",
  "... jemandem beim Pillen-Sortieren",
  "... jemandem, der ein Werthers lutscht",
  "... jemandem mit sehr hoch gezogener Hose",
  "... jemandem, der auf die Armbanduhr tippt",
  "... jemandem, der Bartstoppeln hat",
  "... jemandem, der älter ist als 30",
  "... der Pose 'Keine Zähne mehr'",
  "... einer Person, die gerne strickt",
  "... ein*er Waldorfschüler*in",
]

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
