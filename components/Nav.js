import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='/character'><a>Character</a></Link>
                </li>
                <li>
                    <Link href='/about'><a>About</a></Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav