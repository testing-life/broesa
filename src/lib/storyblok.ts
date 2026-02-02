import LatestEvents from '@/components/LatestEvents';
import Page from '@/components/Page';
import Title from '@/components/Title';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import EventNews from '@/components/EventNews';
import Paragraph from '@/components/Paragraph';
import ArticleImage from '@/components/ArticleImage';
import HeroImage from '@/components/HeroImage';
import PlaceTeaser from '@/components/PlaceTeaser';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageContent from '@/components/PageContent';
import BuildingPreview from '@/components/BuildingPreview';
import Grid from '@/components/Grid';
import HomeHeroImg from '@/components/HomeHeroImage';
import PlaceTeasers from '@/components/PlaceTeasers';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
  components: {
    page: Page,
    title: Title,
    grid: Grid,    
    paragraph: Paragraph,
    'article-image': ArticleImage,
    'event-news': EventNews,
    'latest-events': LatestEvents,
    'hero-image': HeroImage,
    'place-teaser': PlaceTeaser,
    'place-teasers': PlaceTeasers,
    'main-navigation': Navigation,
    'building-preview': BuildingPreview,
    'page-content': PageContent,
    'home-hero-image': HomeHeroImg,
    footer: Footer,
  },
});
