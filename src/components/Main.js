import React from 'react';
import drinks from '../img/menu-drinks.jpg';
import food from '../img/menu-food.jpg';

function Main() {
  return (
    <main className='content'>
      <section className='lead'>
        <div className='text-container lead__text-lead'>
          <h1 className='lead__title'>
            делаем то, что <span className='text_color_yellow'> любим</span>
          </h1>
          <p className='lead__subtitle'>
            кафе на переулке Баскова в Петербурге
          </p>
          <button className='button'>смотреть меню</button>
          <div className='star lead__star'></div>
        </div>
        <div className='lead__image'></div>
      </section>

      <section className='info'>
        <div className='info__image'></div>
        <div className='text-container info__text-info'>
          <span className='info__span text_color_yellow text_size_large'>
            СМЕНА -{' '}
          </span>
          <p className='info__text'>
            это прежде всего про людей, которые наполняют это место. Мы любим
            людей, любим друг друга и конечно же мы делаем то, что любим.
          </p>
          <p className='info__text'>
            Наш проект появился в 2017 году благодаря людям, горящим общей идеей
            создания места, где мы сможем найти таких же как мы-разных и крутых
            ребят, которые будут с нами на одной волне. И вот уже 6 лет мы
            продолжаем заводить друзей, вместе радоваться и грустить, пить
            отличный кофе и есть вкусную еду.
          </p>
          <p className='info__text'>
            Мы хотим что бы каждый, кто к нам приходит-чувствовал себя
            комфортно, по этому с радостью расскажем вам больше, когда вы
            придете к нам в гости ;)
          </p>
          <p className='info__text info__text_add'>
            * столы не бронируем, но попробуем найти для вас местечко
          </p>
          <div className='star info__star'></div>
        </div>
      </section>
      <section className='menu'>
        <h2 className='menu__title'>наше меню</h2>
        <div className='menu__cards'>
          <article className='card'>
            <p className='card__title'>НАПИТКИ</p>
            <img src={drinks} className='card__img' />
          </article>
          <article className='card'>
            <p className='card__title'>ЕДА</p>
            <img src={food} className='card__img' />
          </article>
        </div>
        <div className='elipse menu__elipse'></div>
        <div className='star menu__star_first'></div>
        <div className='star menu__star_second'></div>
      </section>
      <section className='join'>
        <p className='join__title'>СТАТЬ ЧАСТЬЮ СМЕНЫ</p>
        <div className='join__text-container'>
          <p className='join__text'>
            Предлагаем вам заполнить форму, возможно, ты-именно тот, кого мы
            сейчас ищем :)
          </p>
          <button className='button'>заполнить форму</button>
        </div>
        <div className='elipse join__elipse'></div>
      </section>
      <section></section>
    </main>
  );
}

export default Main;
