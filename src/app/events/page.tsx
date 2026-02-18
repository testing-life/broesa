import EventNewsTeaser from '@/components/EventNewsTeaser';
import { getStoryblokApi } from '@/lib/storyblok';
import styles from '@/app/page.module.css';

export default async function Home() {
  const { data } = await fetchData();
  
  return (
    <div className={styles.page}>
      <main>
        <header>
          <h1>Aktuelles</h1>
        </header>
        <ul className='list'>
          {data?.stories.map((story: any) => (
            <li key={story.uuid}>
              <EventNewsTeaser blok={story} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function fetchData(page = 1, per_page = 10) {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/`, {
    starts_with: 'event/',
    version: 'published',
    page,
    per_page
  });
}
