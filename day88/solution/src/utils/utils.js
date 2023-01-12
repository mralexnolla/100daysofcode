// This file should be ignored. It is used to mock data in this project. You don't have to know how any of this works.

// Helper function that generates some random todos.
export const generateRandomTodos = (count) => {
  return Array.from(new Array(count)).map((_) => {
    return {
      id: Math.random().toString(36).substring(2),
      text: getRandomSentence(),
      done: Math.floor(Math.random() * 2) === 1,
      user: {
        name: RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)],
        icon: RANDOM_ICONS[Math.floor(Math.random() * RANDOM_ICONS.length)],
      },
    };
  });
};

const RANDOM_ICONS = ["✈️", "🌸", "🐿", "🍣", "🐤", "🍩"];

const RANDOM_NAMES = ["Lou", "Cecelia", "John", "Maria", "Sabine"];

const nouns = [
  "bird",
  "clock",
  "boy",
  "plastic",
  "duck",
  "teacher",
  "old lady",
  "professor",
  "hamster",
  "dog",
];
const verbs = [
  "kicked",
  "ran",
  "flew",
  "dodged",
  "sliced",
  "rolled",
  "died",
  "breathed",
  "slept",
  "killed",
];
const adjectives = [
  "beautiful",
  "lazy",
  "professional",
  "lovely",
  "dumb",
  "rough",
  "soft",
  "hot",
  "vibrating",
  "slimy",
];
const adverbs = [
  "slowly",
  "elegantly",
  "precisely",
  "quickly",
  "sadly",
  "humbly",
  "proudly",
  "shockingly",
  "calmly",
  "passionately",
];
const preposition = [
  "down",
  "into",
  "up",
  "on",
  "upon",
  "below",
  "above",
  "through",
  "across",
  "towards",
];

const getRandomSentence = () => {
  const rand1 = Math.floor(Math.random() * 10);
  const rand2 = Math.floor(Math.random() * 10);
  const rand3 = Math.floor(Math.random() * 10);
  const rand4 = Math.floor(Math.random() * 10);
  const rand5 = Math.floor(Math.random() * 10);
  const rand6 = Math.floor(Math.random() * 10);
  const content =
    "The " +
    adjectives[rand1] +
    " " +
    nouns[rand2] +
    " " +
    adverbs[rand3] +
    " " +
    verbs[rand4] +
    " because some " +
    nouns[rand1] +
    " " +
    adverbs[rand1] +
    " " +
    verbs[rand1] +
    " " +
    preposition[rand1] +
    " a " +
    adjectives[rand2] +
    " " +
    nouns[rand5] +
    " which, became a " +
    adjectives[rand3] +
    ", " +
    adjectives[rand4] +
    " " +
    nouns[rand6] +
    ".";

  return content;
};
