import nlp from 'compromise/three';

// Initialize compromise
nlp.extend({
  words: {
    senior: 'Title',
    lead: 'Title', 
    principal: 'Title',
    junior: 'Title',
    software: 'Noun',
    engineer: 'Noun',
    developer: 'Noun',
    architect: 'Noun',
    manager: 'Noun'
  }
});

const templates = [
  "Experienced {title} with {years}+ years of expertise in {skills}. Proven track record of {achievements} and {focus}.",
  "Results-driven {title} specializing in {skills}. Demonstrated success in {achievements} with a focus on {focus}.",
  "Innovative {title} with strong background in {skills}. Passionate about {focus} and proven ability to {achievements}.",
];

const skillPhrases = [
  "full-stack development",
  "cloud architecture",
  "system design",
  "agile methodologies",
  "software engineering",
  "web development",
  "mobile development",
  "DevOps practices",
];

const achievementPhrases = [
  "delivering high-impact solutions",
  "optimizing system performance",
  "leading cross-functional teams",
  "implementing best practices",
  "driving technical innovation",
  "improving development processes",
];

const focusPhrases = [
  "building scalable applications",
  "creating efficient solutions",
  "mentoring team members",
  "adopting emerging technologies",
  "enhancing user experience",
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function generateProfessionalSummary(title: string): string {
  try {
    const template = getRandomItem(templates);
    
    // Process the job title
    const doc = nlp(title || 'software engineer');
    const processedTitle = doc.match('(#Title|senior|lead|principal|junior)? (#Noun|developer|engineer|architect|manager)+').text().toLowerCase() || 'software engineer';

    return template
      .replace('{title}', processedTitle)
      .replace('{years}', Math.floor(Math.random() * 5 + 3).toString())
      .replace('{skills}', getRandomItem(skillPhrases))
      .replace('{achievements}', getRandomItem(achievementPhrases))
      .replace('{focus}', getRandomItem(focusPhrases));
  } catch (error) {
    console.error('Error generating summary:', error);
    return 'Experienced professional with a proven track record of delivering high-quality solutions and driving innovation.';
  }
}