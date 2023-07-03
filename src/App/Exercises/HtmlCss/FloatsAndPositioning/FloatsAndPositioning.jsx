// import mountain from './mountains_austria_mountain_top.jpg';
import './style.css';
import togleArrow from '../../../Images/toggle-arrow.svg';
import dogPicture from './images/Frame 2755.png';

const FloatsAndPositioning = () => {
  return (
    <>
      {/* <div className="main">
        <img className="image" src={mountain} alt="" />
        <img className='image2' src={mountain} alt="" />
        <div className="box"></div>
        <div>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            omnis corrupti consequuntur alias fugiat pariatur voluptatibus at
            aperiam vero placeat praesentium, odio, ab cum perferendis
            reprehenderit obcaecati id quo deleniti?
          </p>
        </div>
        
      </div> */}

      <div className="float-and-postition">
        <p className="title">
          <img className="arrow" src={togleArrow} alt="" />
          BLOG <img className="arrow" src={togleArrow} alt="" />
          ĆWICZENIA
        </p>
        <div className="content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="paragraph-margin seond-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="content-box-light-grey">
            <p className="paragraph-margin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              mauris cursus mattis molestiea iaculis at. Dictum varius duis at
              consectetur lorem donec.
            </p>
          </div>
          <div className="content-box-pink">
            <img className="dog-picture" src={dogPicture} alt="" />
            <p className="pin-box-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="content-box-dark-grey">
            <p className="paragraph-margin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              mauris cursus mattis molestiea iaculis at. Dictum varius duis at
              consectetur lorem donec
            </p>
          </div>
          <div className="container-btn">
            <button className="save-for-later-btn">zapisz na później</button>
          </div>
          <div className="container-content-lorem">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              mauris cursus mattis molestie a iaculis at. Dictum varius duis at
              consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
              phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
              etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
              dictum varius duis at consectetur lorem. Massa ultricies mi quis
              hendrerit.
            </p>
            <p>
              Leo vel orci porta non pulvinar neque laoreet. In egestas erat
              imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
              sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida
              quis blandit turpis cursus in. Ornare quam viverra orci sagittis
              eu. Metus dictum at tempor commodo ullamcorper a. Vestibulum
              mattis ullamcorper velit sed ullamcorper morbi. Amet massa vitae
              tortor condimentum lacinia quis. Quis enim lobortis scelerisque
              fermentum dui faucibus in ornare. Auctor elit sed vulputate mi.
            </p>
          </div>
          <div className="box-container">
            <div className="box top"></div>
            <div className="box middle"></div>
            <div className="box bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatsAndPositioning;
