"use client"
import Link from 'next/link';
import styles from '@/app/ui/Navigation.module.css'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navigation = ({ blok }: any) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(width < 50rem)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <nav className={`${styles.navigation} ${isOpen ? styles.isOpen : ''}`} >
      {isMobile && isOpen && <div className={styles.backdrop}></div>}
      <div>
        <Link className={styles.logo} href='/'>
          <img src='https://s1.qwant.com/thumbr/128x128/3/6/41e424a7584f24f045d4d8fc34ef848a33ade521e26f67baad76bc7731ccac/OIP.WSGS5oHda5jzK_WkvkJUjwAAAA.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.WSGS5oHda5jzK_WkvkJUjwAAAA%3Fpid%3DApi&q=0&b=1&p=0&a=0' alt='' />
        </Link>
        {isMobile && <li><button className={styles.iconBtn} onClick={() => setIsOpen(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
              fill="currentColor"
            />
            <path
              d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
              fill="currentColor"
            />
            <path
              d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
              fill="currentColor"
            />
          </svg></button></li>}
        <ul>
          {isMobile && <li><button className={styles.iconBtn} onClick={() => setIsOpen(false)}><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
              fill="currentColor"
            />
          </svg></button></li>}
          {blok.map((item: any) => {
            const current = `/${item.link.cached_url}` === pathname || (item.link.cached_url === 'home' && pathname === '/');
            return (
              <li key={item._uid}>
                <Link onNavigate={() => setIsOpen(false)}
                  className={current ? styles['current-link'] : ''} href={item.link.cached_url === 'home' ? '/' : `/${item.link.cached_url}`}>{item.label}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
