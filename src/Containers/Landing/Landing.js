import React from 'react';
import land from '../../Components/elements_1.module.css';
import page from '../../Components/page_format_1.module.css';
import Landing2 from './Landing2';
import Poster1 from '../../assets/Poster1.jpg';
import Poster2 from '../../assets/Poster2.jpg';
import Poster3 from '../../assets/Poster3.jpg';
import Poster4 from '../../assets/Poster4.jpg';
import './Landing.css';

function Landing() {
  return (
    <div className={page.page_whole}>
      <div className={page.page_fraction}>
        <div className="text_1">
          <h1 className={land.heading_1}>Watch Netflix with your friends</h1>
          <p className={land.textarea_1}>
            Create Netflix parties in seconds right on the Netflix.com website
            <br />
            to watch thousands of great Netflix shows together
            <br />
            with friends.
          </p>
        </div>
        <div className="posters">
          <img src={Poster2} alt="" className={land.img_card_1} />
          <img src={Poster1} alt="" className={land.img_card_1} />
          <img src={Poster3} alt="" className={land.img_card_1} />
          <img src={Poster4} alt="" className={land.img_card_1} />
        </div>
      </div>
      <div>
        <Landing2 />
      </div>
    </div>
  );
}

export default Landing;
