import { storyblokEditable } from '@storyblok/react/rsc';
import styles from '@/app/ui/EventNews.module.css';

const EventNewsTeaser = ({ blok }:any) => {
  const imagePreview = blok.content?.preview_image?.filename;
  const textPreview = blok.content?.preview_text;
  
  return (
    <article {...storyblokEditable(blok)} className={`${styles.eventNews} ${blok.content?.type === 'event' ? styles.altBg : ''}`}>
      <div className={styles.metaData}>
        <span>{blok.content?.type}</span>
        <time>{blok.content?.added}</time>
      </div>
      <div className={styles.eventNewsContent}>
        {imagePreview && <figure>
          <img src={blok.content?.preview_image.filename} alt='' />
        </figure>}
        <div>
          <a href={blok.full_slug} className={styles.link}>{blok.content.title}</a>
          {textPreview && <p>{textPreview}</p>}
        </div>
      </div>
    </article>
  );
};

export default EventNewsTeaser;
