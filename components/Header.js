import headerStyles from '../styles/Header.module.css'

const Header = ({abc}) => {
    return (
        <div>
            <h1 className={headerStyles.title}><span>{abc}</span></h1>
        </div>
    );
};

export default Header