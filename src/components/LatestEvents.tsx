import { getStoryblokApi } from '@/lib/storyblok';
import EventNewsTeaser from './EventNewsTeaser';
import styles from '@/app/ui/LatestEvents.module.css';

const LatestEvents = async () => {
  const { data } = await fetchData();  
  return (
    <section className={styles.latest}>      
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
    starts_with: 'event/',
    filter_query: {
      component: { in: 'event-news' }
    },
    sort_by: 'content._meta.first_published_at:desc',
    per_page: 3
  })
}
