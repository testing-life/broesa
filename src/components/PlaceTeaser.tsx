import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import React from 'react';
import styles from '@/app/ui/PlaceTeaser.module.css';

const PlaceTeaser = ({ blok }) => {
  return (
    <div className={styles.placeTeaser}>
    <Link href={blok.link.cached_url}>
      <div {...storyblokEditable(blok)} className={styles.wrapper}>
        <img src={blok.image.filename} alt='' />
        <span>{blok.name}</span>
      </div>
    </Link>
    </div>
  );
};

export default PlaceTeaser;
