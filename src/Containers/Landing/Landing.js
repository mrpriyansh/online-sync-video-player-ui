import React from 'react';
import land from '../../Components/elements_1.module.css';
import page from '../../Components/page_format_1.module.css';
import Landing2 from './Landing2';
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
          <img
            src="https://wallpaperaccess.com/full/1087400.jpg"
            alt=""
            className={land.img_card_1}
          />
          <img
            src="https://roguerocket.com/wp-content/uploads/2019/07/NetflixSuicide.jpg"
            alt=""
            className={land.img_card_1}
          />
          <img
            src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702105446.jpg"
            alt=""
            className={land.img_card_1}
          />
          <img
            src="https://wallpapercave.com/wp/wp4423069.jpg"
            alt=""
            className={land.img_card_1}
          />
        </div>
      </div>
      <div>
        <Landing2 />
      </div>
    </div>
  );
}

export default Landing;
