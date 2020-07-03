import React, { useState, useRef } from 'react';
import Style from './Accordion.module.css';
import Chevron from './Chevron';

function Accordion(props) {
  const [setActive, setActivestate] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion_icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActivestate(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setRotateState(setActive === 'active' ? 'accordion_icon' : 'accordion_icon rotate');
  }
  return (
    <div className={Style.accordion__section}>
      <button className={Style.accordion} onClick={toggleAccordion}>
        <p className={Style.accordion__title}>{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={'#777'} />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className={Style.accordion__content}>
        <div
          className={Style.accordion__text}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
