import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css"; 

const App = () => (
<header>
  <div className="nav">
<button className="mainbutton">Главная</button>
<button className="navbutton">Каталог</button>
<button className="navbutton">Распродажа</button>
<button className="navbutton">Помощь покупателям</button>
<button className="navbutton">Контакты</button>
  </div>
</header>
);

export default App;
