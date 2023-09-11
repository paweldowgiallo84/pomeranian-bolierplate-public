import './styles.css';
import LogoImg from './../../Images/start-it-logo.svg';
import LogoImgSmall from './../../Images/start-it-logo-small.svg';

export const Logo = () => {
  return (
    <>
      {' '}
      <img
        className="Logo__Pomeranian--big"
        src={LogoImg}
        alt="Logo Pomeranian Start IT"
      />
      <img
        className="Logo__Pomeranian--small"
        src={LogoImgSmall}
        alt="Logo Pomeranian Start IT"
      />
    </>
  );
};
