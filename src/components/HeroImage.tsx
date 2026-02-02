'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import React, { useEffect, useRef } from 'react';
import styles from '@/app/ui/HeroImage.module.css';

const HeroImage = ({ blok }:any) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      (heroRef.current as HTMLElement).style.setProperty('--hero-bg', `url(${blok.image.filename})`);
    }
  }, [heroRef])

  return (
    <header className={styles.heroImage} ref={heroRef} {...storyblokEditable(blok)}>      
      <h1>{blok.title}</h1>
    </header>
  );
};

export default HeroImage;
