import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import ArrowButton from './components/ArrowButton';
import Reviews from './components/Reviews';
import 'animate.css';

const places = [
  {
    title: 'Гринвич',
    description: 'Крупнейший ТЦ Екатеринбурга.',
    address: 'ул. 8 Марта, 46',
    image: '/images/place1.jpg'
  },
  {
    title: 'ЦПКиО им. В.В. Маяковского ',
    description: 'Один из самых популярных парков в Екатеринбурге',
    address: 'ул. Мичурина, 230',
    image: '/images/place2.jpg'
  },
  {
    title: 'Гостиница Высоцкий',
    description: 'Красивый вид, открывается весь Екатеринбург',
    address: 'ул. Малышева, 51',
    image: '/images/place3.jpg'
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [newPlaceData, setNewPlaceData] = useState({
    title: '',
    description: '',
    name: ''
  });

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? places.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === places.length - 1 ? 0 : prevIndex + 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNewPlaceChange = (e) => {
    const { name, value } = e.target;
    setNewPlaceData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Обратная связь принята, спасибо!\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleNewPlaceSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reviews', newPlaceData);
      console.log(response.data); // Вывод ответа сервера в консоль
      alert(`Отзыв успешно отправлен!\nНазвание места: ${newPlaceData.title}\nВпечатления: ${newPlaceData.description}\nИмя: ${newPlaceData.name}`);
    } catch (error) {
      console.error('Ошибка при отправке отзыва:', error);
      alert('Произошла ошибка при отправке отзыва.');
    }
    setNewPlaceData({
      title: '',
      description: '',
      name: ''
    });
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="navbar">
            <img src="/images/logo.png" alt="Логотип" className="logo animate__heartBeat" onClick={handleLogoClick} />
            <ul className="nav-links">
              <li><a href="#places" role="button">Места</a></li>
              <li><a href="#suggest" role="button">Оставить отзыв</a></li>
              <li><a href="#feedback" role="button">Обратная связь</a></li>
            </ul>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <section className="section" id="places">
                <h2>Интересные места Екатеринбурга</h2>
                <div className="card-slider">
                  <ArrowButton direction="left" onClick={handlePrevClick} />
                  <Card place={places[currentIndex]} />
                  <ArrowButton direction="right" onClick={handleNextClick} />
                </div>
              </section>

              <section className="section" id="suggest">
                <h2>Оставить свой отзыв на место</h2>
                <form onSubmit={handleNewPlaceSubmit}>
                  <input type="text" name="title" placeholder="Название места" required value={newPlaceData.title} onChange={handleNewPlaceChange} />
                  <input type="text" name="description" placeholder="Впечатления" required value={newPlaceData.description} onChange={handleNewPlaceChange} />
                  <input type="text" name="name" placeholder="Имя" required value={newPlaceData.name} onChange={handleNewPlaceChange} />
                  <button type="submit">Отправить</button>
                </form>
              </section>

              <section className="section" id="feedback">
                <h2>Обратная связь</h2>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Ваше имя" required value={formData.name} onChange={handleChange} />
                  <input type="email" name="email" placeholder="Ваш email" required value={formData.email} onChange={handleChange} />
                  <textarea name="message" placeholder="Ваше сообщение" required value={formData.message} onChange={handleChange}></textarea>
                  <button type="submit">Отправить</button>
                </form>
              </section>
            </>
          } />
          <Route path="/reviews/:placeTitle" element={<Reviews />} /> {/* Маршрут для отображения отзывов */}
        </Routes>

        <footer className="footer">
          <small><a href="#!">Политика конфиденциальности</a> / <a href="#!">Условия использования</a></small>
        </footer>
      </div>
    </Router>
  );
}

export default App; // Экспортируем компонент для использования в других частях приложения
