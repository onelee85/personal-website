import { getCollection } from 'astro:content';

export async function getFeaturedProjects() {
  const projects = await getCollection('projects', ({ data }) => data.featured);
  return projects.sort((a, b) => a.data.order - b.data.order);
}
