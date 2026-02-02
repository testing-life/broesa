import { storyblokEditable } from '@storyblok/react/rsc';

const ArticleImage = ({ blok }: { blok: any }) => {
  return (
    <div className='my-4' {...storyblokEditable(blok)}>
      <img
        src={blok.image.filename}
        alt={blok.image.alt || 'Event image'}
        className='w-full h-auto rounded-lg'
      />
    </div>
  );
};

export default ArticleImage;
