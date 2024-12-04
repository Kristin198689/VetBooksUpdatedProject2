import React from 'react';

const VetBooks = () => {
  return (
    <div className="vetbooks">
      <h1>Ветеринарные книжки</h1>
      <section className="my-animals">
        <h2>Мои животные</h2>
        <div className="animal-card">
          <img src="/src/assets/images/persik.jpg" alt="Персик" />
          <div>
            <h3>Персик</h3>
            <p>Кошка, 1 год, Самец</p>
            <span className="warning">Истекает срок вакцинации</span>
          </div>
        </div>
        <div className="animal-card">
          <img src="/src/assets/images/ryzhik.jpg" alt="Рыжик" />
          <div>
            <h3>Рыжик</h3>
            <p>Кошка, 1 год, Самец</p>
          </div>
        </div>
      </section>
      <section className="homeless-animals">
        <h2>Бездомные животные</h2>
        <div className="animal-card">
          <img src="/src/assets/images/afrodita.jpg" alt="Афродита" />
          <div>
            <h3>Афродита</h3>
            <p>Кошка, 1 год, Самка</p>
            <span className="notice">Запись на стерилизацию 09.09.2024</span>
          </div>
        </div>
      </section>
      <button className="create-book-button">Создать новую книжку</button>
    </div>
  );
};

export default VetBooks;
