import headerStyles from '../styles/Header.module.css'
const Header=()=>{
    return(
        <div>
            <h1 className={headerStyles.title}>
                <span>有个小院</span>
            </h1>
            <p className={headerStyles.description}>欢迎来到我的小院</p>
        </div>
    )
}
export default Header