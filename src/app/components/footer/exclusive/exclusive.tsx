import Link from 'next/link';
import css from './exclusive.module.css';

export default function Exclusive() {
    return (
        <div>
            <h3 className={css.title}>Ексклюзивні пропозиції</h3>
            <ul>
                <li>
                    <Link className={css.link} href={'/payment'}>
                        Подарунковi сертифiкати
                    </Link>
                </li>

                <li>
                    <Link className={css.link} href={'/actions'}>
                        Товари iз знижкою
                    </Link>
                </li>
                <li>
                    <Link className={css.link} href={'/actions'}>
                        Акції
                    </Link>
                </li>
            </ul>
        </div>
    );
}
