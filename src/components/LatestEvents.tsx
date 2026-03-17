import { getStoryblokApi } from '@/lib/storyblok';
import EventNewsTeaser from './EventNewsTeaser';
import styles from '@/app/ui/LatestEvents.module.css';

const LatestEvents = async () => {
  const { data } = await fetchData();
  const { data: pinnedData } = await fetchPinnedData();
  console.log(pinnedData); // Debugging informati
  return (
    <section className={styles.latest}>
      <ul className={styles.list}>
        {pinnedData.stories?.map((nestedBlok: any) => (
          <li key={nestedBlok.uuid}><EventNewsTeaser blok={nestedBlok} /></li>
        ))}
        {data.stories?.map((nestedBlok: any) => (
          <li key={nestedBlok.uuid}><EventNewsTeaser blok={nestedBlok} /></li>
        ))}</ul>
    </section>);
};

export default LatestEvents;

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/`, {
    version: 'published',
    starts_with: 'event/',
    filter_query: {
      component: { in: 'event-news' },
    },
    sort_by: 'content._meta.first_published_at:desc',
    per_page: 3
  })
}

export async function fetchPinnedData() {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/`, {
    version: 'published',
    starts_with: 'event/',
    filter_query: {
      and: [
        { tags: { in_array: 'angeheftet' } },
        { component: { in: 'event-news' } }
      ]
    },
    sort_by: 'content._meta.first_published_at:desc',
  })
  const filteredStories = response.data.stories.filter((story: any) => story.tag_list && story.tag_list.length > 0);
  return { ...response, data: { ...response.data, stories: filteredStories } };
}
