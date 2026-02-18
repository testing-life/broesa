import styles from '@/app/ui/MainTitle.module.css';

export default function MainTitle({ blok }: any) {
  return (
    <header>
      <h1 className={styles.mainTitle}>{blok.title}</h1>
    </header>

  );
}
