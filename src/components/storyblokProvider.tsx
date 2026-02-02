'use client';

import { getStoryblokApi } from '@/lib/storyblok';
interface Props {
  children: React.ReactNode;
}
export default function StoryblokProvider({ children }: Props) {
  getStoryblokApi();
  return children;
}
