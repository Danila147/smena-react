import logo from '../img/header-logo.svg';

function Header() {
  return (
    <header className='header header-position'>
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo header__logo' />
      </div>
      <nav className='header__navigation'>
        <ul className='header__links'>
          <li>
            <a className='header__link'>о нас</a>
          </li>
          <li>
            <a className='header__link'>местоположение</a>
          </li>
          <li>
            <a className='header__link'>меню</a>
          </li>
          <li>
            <a className='header__link'>вакансии</a>
          </li>
          <li>
            <a className='header__link'>контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
