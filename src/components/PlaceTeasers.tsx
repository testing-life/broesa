import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';
import styles from '@/app/ui/PlaceTeasers.module.css';

const PlaceTeasers = ({ blok }) => {
    return (
    <ul className={styles.placeTeasers}>
      {blok.place_teasers?.map((nestedBlok) => (
        <li key={nestedBlok._uid}>
          <StoryblokServerComponent blok={nestedBlok} />
        </li>
      ))}
    </ul>
  );
};

export default PlaceTeasers;
