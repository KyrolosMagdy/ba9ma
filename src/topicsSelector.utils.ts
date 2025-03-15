import { Topic } from "./Topic";

import topicsData from "./data.json";

// Type assertion to ensure the JSON data is treated as an array of Topic
const topics = topicsData as Topic[];

/**
 * Returns a randomly selected topic from the topics list
 */
export function getRandomTopic(): Topic {
  const randomIndex = Math.floor(Math.random() * topics.length);
  return topics[randomIndex];
}
