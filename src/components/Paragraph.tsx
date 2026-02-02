import { storyblokEditable } from '@storyblok/react/rsc';
import React from 'react';

const Paragraph = ({ blok }) => {  
  return <p {...storyblokEditable(blok)}>{blok.paragraph}</p>;
};

export default Paragraph;
