'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './navigation.module.css';
import clsx from 'clsx';

export default function Navigation() {
  const pathname: string = usePathname();

  return (
    <nav className={css.navigation}>
      <Link href="/" className={clsx(css.link, pathname === '/' && css.isActive)}>
        Home
      </Link>
      <Link href="/catalog" className={clsx(css.link, pathname === '/catalog' && css.isActive)}>
        Catalog
      </Link>
    </nav>
  );
}
