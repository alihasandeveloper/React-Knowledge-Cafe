import Profle from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header
            className="md:flex justify-between items-center">
            <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
            <img src={Profle} alt="Profle"/>
        </header>
    );
};

export default Header;