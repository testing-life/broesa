import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import styles from '@/app/ui/BuildingsPage.module.css';

export default async function Buildings() {
  const { data } = await fetchData();
  
  return (
    <div className={styles.wrapper}>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/buildings`, {
    version: 'published',
  });
}
