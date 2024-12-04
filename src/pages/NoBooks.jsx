import React from 'react';

const NoBooks = () => {
  return (
    <div className="no-books">
      <h1>Ветеринарные книжки</h1>
      <p>Похоже, что у вашего любимца ещё нет цифровой ветеринарной книжки :(</p>
      <button className="create-book-button">Создать новую книжку</button>
    </div>
  );
};

export default NoBooks;
