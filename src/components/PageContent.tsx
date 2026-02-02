import { StoryblokRichText } from '@storyblok/react';
import styles from '@/app/ui/PageContent.module.css';

const PageContent = ({ blok }:any) => {
    return (<section className={styles.pageContent}>
        {blok.content && <StoryblokRichText doc={blok.content} />}
    </section>

    )
};

export default PageContent;
