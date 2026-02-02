import EventNews from '@/components/EventNews';
import EventNewsTeaser from '@/components/EventNewsTeaser';
import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function Home() {
  const { data } = await fetchData();
  
  return (
    <div className='page events'>
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

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/`, {
    starts_with: 'event/',
    version: 'published',
  });
}
