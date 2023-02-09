import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
const Nav=()=>{
    return(
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>首页</Link>
                </li>
                <li>
                    <Link href='/about'>关于</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav