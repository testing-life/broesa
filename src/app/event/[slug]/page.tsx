import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function NewsEvents({ params }) {
  const { slug } = await params;
  const { data } = await fetchData(slug);
  console.log(data)
  return (
    <div className='page'>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData(slug: string) {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/event/${slug}`, {
    version: 'published',
  });
}
