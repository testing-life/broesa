import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokComponent } from '@storyblok/react';
import React from 'react';
import EventNews from './EventNews';
import EventNewsTeaser from './EventNewsTeaser';
import styles from '@/app/ui/LatestEvents.module.css';

const LatestEvents = async ({ blok }) => {
  const { data } = await fetchData();
  console.log(data.stories, data, 'latest events')
  return (
    <section className={styles.latest}>
      <h2>Aktuelles</h2>
      <ul className={styles.list}> {data.stories?.map((nestedBlok: any) => (
        
        <li key={nestedBlok.uuid}><EventNewsTeaser blok={nestedBlok} /></li>
      ))}</ul>
    </section>);
};

export default LatestEvents;

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/`, {
    version: 'published',
    starts_with: 'event/', // optional: if your events are in a folder
    filter_query: {
      component: { in: 'event-news' } // Filter by content type
    },
    sort_by: 'content._meta.first_published_at:desc', // Sort by date
    per_page: 3 // Limit to latest 5 events;
  })
}
