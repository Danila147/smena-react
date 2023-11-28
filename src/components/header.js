import logo from '../img/header-logo.svg';

function Header() {
  return (
    <header className='header header-position'>
      <div className='logo-container'>
        <img src={logo} alt='logo' className='header__logo' />
      </div>
      <nav className='header__navigation'>
        <ul className='header__links'>
          <li>
            <a className='header__link'>О нас</a>
          </li>
          <li>
            <a className='header__link'>Местоположение</a>
          </li>
          <li>
            <a className='header__link'>Меню</a>
          </li>
          <li>
            <a className='header__link'>Вакансии</a>
          </li>
          <li>
            <a className='header__link'>Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
