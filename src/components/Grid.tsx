import { StoryblokServerComponent } from '@storyblok/react/rsc'
import styles from '@/app/ui/Grid.module.css';

export default function Grid({ blok }) {
  console.log(blok, 'grid')
  return (
    <div className={styles.grid}>
      {blok.columns?.map((nestedBlok) => (
        <div key={nestedBlok._uid}>
          <StoryblokServerComponent blok={nestedBlok}  />
        </div>

      ))}
    </div>
  );
};
