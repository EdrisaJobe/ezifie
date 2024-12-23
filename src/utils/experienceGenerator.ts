import nlp from 'compromise/three';

// Initialize compromise with job-related terms
nlp.extend({
  words: {
    implemented: 'Achievement',
    developed: 'Achievement',
    created: 'Achievement',
    launched: 'Achievement',
    managed: 'Achievement',
    led: 'Achievement',
    improved: 'Achievement',
    reduced: 'Achievement',
    increased: 'Achievement',
    optimized: 'Achievement',
  }
});

const achievementTemplates = [
  "Led development of {feature} resulting in {impact}",
  "Implemented {technology} to {benefit}, improving {metric} by {percentage}%",
  "Developed {solution} that {impact}, resulting in {benefit}",
  "Architected and deployed {feature} leading to {impact}",
  "Spearheaded the adoption of {technology}, resulting in {benefit}",
];

const features = [
  "microservices architecture",
  "cloud-native applications",
  "CI/CD pipelines",
  "automated testing framework",
  "real-time analytics platform",
  "scalable backend services",
];

const technologies = [
  "containerization",
  "serverless architecture",
  "distributed systems",
  "machine learning models",
  "event-driven architecture",
];

const impacts = [
  "reduced deployment time by 40%",
  "increased system performance by 50%",
  "decreased infrastructure costs by 30%",
  "improved user engagement by 25%",
  "enhanced system reliability by 35%",
];

const benefits = [
  "streamlined development workflow",
  "optimized resource utilization",
  "accelerated feature delivery",
  "improved system scalability",
  "enhanced team productivity",
];

const metrics = [
  "response time",
  "system throughput",
  "resource usage",
  "deployment frequency",
  "error rates",
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomPercentage(): number {
  return Math.floor(Math.random() * 30) + 20; // Returns 20-50
}

export function generateWorkDescription(title: string): string {
  try {
    // Generate 2-3 achievements
    const numAchievements = Math.floor(Math.random() * 2) + 2;
    const achievements = Array.from({ length: numAchievements }, () => {
      const template = getRandomItem(achievementTemplates);
      
      return template
        .replace('{feature}', getRandomItem(features))
        .replace('{technology}', getRandomItem(technologies))
        .replace('{impact}', getRandomItem(impacts))
        .replace('{benefit}', getRandomItem(benefits))
        .replace('{metric}', getRandomItem(metrics))
        .replace('{percentage}', getRandomPercentage().toString());
    });

    return achievements.join('\n');
  } catch (error) {
    console.error('Error generating work description:', error);
    return 'Led development of key features and implemented improvements resulting in enhanced system performance and reliability.';
  }
}