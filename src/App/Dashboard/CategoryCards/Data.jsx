import personalCard from '../../Images/personalcard.svg';
import edit from '../../Images/edit.svg';
import booksaved from '../../Images/book-saved.svg';
import faq from '../../Images/messages.svg';
import techstack from '../../Images/tech-stack/techstack.svg';

const availableCards = [
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
    icon: <img src={techstack} alt="tech stack" />,
    description: 'stack technologiczny realizowany na kursie',
    link: '/techstack',
  },
  {
    sectionTitle: 'FAQ',
    icon: <img src={faq} alt="business card resume" />,
    description: 'odpowiedzi na najczęstsze pytania',
    link: '/faq',
  },
];

export default availableCards;
