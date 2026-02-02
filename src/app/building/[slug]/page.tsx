import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import styles from '@/app/ui/BuildingsPage.module.css';

export default async function Building({ params }) {
  const { slug } = await params;
  const { data } = await fetchData(slug);
  
  return (
    <div className='page'>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData(slug: string) {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/building/${slug}`, {
    version: 'published',
  });
}
