import React from 'react';
import styles from '@/app/ui/BuildingPreview.module.css';
import { storyblokEditable } from '@storyblok/react/rsc';

const BuildingPreview = async ({ blok }: any) => {  
  return <div {...storyblokEditable(blok)} className={styles.buildingPreview}>
    <figure>
      <img src={blok.image.filename} alt={blok.image.alt} />
    </figure>
    <a className={styles.link} href={blok.link.cached_url}>{blok.name}</a>
  </div>;
};

export default BuildingPreview;
