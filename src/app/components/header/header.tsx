// import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Link from 'next/link';
import css from './header.module.css';
import { raleway } from '../../styles/fonts';
import clsx from 'clsx';

export default function Header() {
    return (
        <header className={css.head}>
            <Link
                href="/"
                lang="en"
                className={clsx(raleway.className, css.logoType)}
                title="До головної сторінки"
            >
                <span className={css.logo}>Bag</span>Charm
            </Link>
            <Navigation />
            <ul className={css.contact}>
                <li className={css.contactItem}>
                    <Link href="mailto:maria.horog.89@gmail.com">maria.horog.89@gmail.com</Link>
                </li>
                <li className={css.contactItem}>
                    <Link href="tel:+380961050086">+38 096 105 00 86</Link>
                </li>
            </ul>
        </header>
    );
}
