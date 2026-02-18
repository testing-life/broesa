import { StoryblokServerComponent } from '@storyblok/react/rsc'

export default function Column({ blok }:any) {  
  return (
    <div className='column'>      
      {blok.content?.map((nestedBlok:any) => (
        <div key={nestedBlok._uid}>
          <StoryblokServerComponent blok={nestedBlok}  />
        </div>
      ))}
    </div>
  );
};
