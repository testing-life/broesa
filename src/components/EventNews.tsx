import { StoryblokComponent } from '@storyblok/react';

const EventNews = ({ blok }:any) => {
  return (
    <main>
      {blok.content?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default EventNews;
