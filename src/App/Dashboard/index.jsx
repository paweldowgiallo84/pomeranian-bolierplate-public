import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';
import personalCard from '../Images/personalcard.svg';
import edit from '../Images/edit.svg';
import booksaved from '../Images/book-saved.svg';
import code from '../Images/code.svg';
import faq from '../Images/messages.svg';
import hand from '../Images/waving-hand-sign.png';
import user from '../Images/user-image.png';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <img src={personalCard} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <img src={edit} alt="business card resume" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/exercises',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={booksaved} alt="business card resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={code} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={faq} alt="business card resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <div className="dashboard-hello">
          <img className="hand-img" src={hand} alt="waving hand img" />
          <h1 className="dashboard-title">Hej, tu Paweł</h1>
        </div>
        <p className="dashboard-description">
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności
        </p>
        <div className="dashboard-content">
          {availableCards.map((card) => {
            return (
              <DashboardCard
                sectionTitle={card.sectionTitle}
                description={card.description}
                link={card.link}
                icon={card.icon}
              />
            );
          })}
        </div>
      </div>
      <div className="user-info">
        <img className="user-image" src={user} alt="" />
        <h3 className="user-name">Paweł Dowgiałło</h3>
        <p className="user-location">Gdańsk</p>
        <div className="user-email">
          <p>e-mail:</p>
          <p>dowgiallo.pawel@gmail.com</p>
        </div>
        <div className="user-phone-number">
          <p>telefon: 512236361</p>
        </div>
      </div>
    </div>
  );
};
