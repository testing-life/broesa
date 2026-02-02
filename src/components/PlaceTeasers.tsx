import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';
import styles from '@/app/ui/PlaceTeasers.module.css';

const PlaceTeasers = ({ blok }:any) => {
    return (
    <ul className={styles.placeTeasers}>
      {blok.place_teasers?.map((nestedBlok:any) => (
        <li key={nestedBlok._uid}>
          <StoryblokServerComponent blok={nestedBlok} />
        </li>
      ))}
    </ul>
  );
};

export default PlaceTeasers;
