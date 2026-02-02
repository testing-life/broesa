import { storyblokEditable } from '@storyblok/react/rsc';
import React from 'react';

const Paragraph = ({ blok }:any) => {  
  return <p {...storyblokEditable(blok)}>{blok.paragraph}</p>;
};

export default Paragraph;
