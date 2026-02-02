'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import styles from '@/app/ui/HomeHeroImage.module.css';
import { useEffect, useRef } from 'react';

const HomeHeroImg = ({ blok }: { blok: any }) => {
const heroRef = useRef(null);
useEffect(() => {
  if(heroRef.current){
    (heroRef.current as HTMLElement).style.setProperty('--hero-bg', `url(${blok.image.filename})`);
  }
},[heroRef])

  return (
    <header ref={heroRef} className={`my-4 ${styles.heroImage}`} {...storyblokEditable(blok)}>      
      <div className={styles.content}>
        <h1>{blok.heading}</h1>
        <p>{blok.intro}</p>
      </div>
    </header>
  );
};

export default HomeHeroImg;
