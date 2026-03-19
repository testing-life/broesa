"use client";
import EventNewsTeaser from '@/components/EventNewsTeaser';
import { getStoryblokApi } from '@/lib/storyblok';
import styles from '@/app/page.module.css';
import { useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import HeroImage from '@/components/HeroImage';

type TotalPages = {
  totalPages?: number
}

interface DataResult {
  data: { stories: any[] };
  perPage: number;
  total: number;
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState<DataResult & TotalPages>();
  const [pageHeaderData, setPageHeaderData] = useState();

  useEffect(() => {
    const fetchDataInHook = async () => {
      try {
        const { data, perPage, total } = await fetchData(currentPage);
        const { data: headerData } = await fetchHeaderData();

        setPageHeaderData(headerData);
        setPageData({ data, perPage, total, totalPages: Math.ceil(total / perPage) });
      } catch (error) {
        console.log(error);
      }
    }
    fetchDataInHook();
  }, [currentPage]);

  return (
    <div className={styles.page}>
      <main>
      {pageHeaderData && <HeroImage blok={pageHeaderData?.story.content.body[0]} />}
      <ul className='list'>
        {pageData?.data?.stories.map((story: any) => (
          <li key={story.uuid}>
            <EventNewsTeaser blok={story} />
          </li>
        ))}
      </ul>
      <Pagination nextPageHandler={() => setCurrentPage(currentPage + 1)} pageChangeHandler={(page: number) => setCurrentPage(page)} prevPageHandler={() => setCurrentPage(currentPage - 1)} currentPage={currentPage} totalPages={pageData?.totalPages} />
</main>
    </div>
  );
}

export async function fetchData(page = 1, per_page = 8): Promise<DataResult> {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/`, {
    starts_with: 'event/',
    version: 'published',
    page,
    per_page
  });
}

export async function fetchHeaderData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/events`, {
    version: 'published',
  });
}

