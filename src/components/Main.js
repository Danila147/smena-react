import React from 'react';

function Main() {
  return (
    <main className='content'>
      <section className='lead'>
        <h1 className='lead__title'>
          делаем то, что <span className='text_color_yellow'> любим</span>
        </h1>
        <p className='lead__subtitle'>кафе на переулке Баскова в Петербурге</p>
        <button className='button'>смотреть меню</button>
        <div className='lead__image'></div>
        <div className='lead__image_thumb'></div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}

export default Main;
