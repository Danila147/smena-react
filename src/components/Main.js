import React from 'react';

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
          <div className='image_thumb lead__image_thumb'></div>
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
          <div className='image_thumb info__image_thumb'></div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}

export default Main;
