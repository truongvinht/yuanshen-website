import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'><a>Aktuell</a></Link>
                </li>
                <li>
                    <Link href='/character'><a>Figuren</a></Link>
                </li>
                <li>
                    <Link href='/about'><a>Über uns</a></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav