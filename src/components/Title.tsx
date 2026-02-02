import styles from '@/app/ui/Title.module.css';

export default function Title({ blok }) {
  return (
    <div className={styles.title}>
      <h2>{blok.title}</h2>
    </div>
  );
}
