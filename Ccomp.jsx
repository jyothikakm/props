import React from 'react';

function Ccomp(props) {
  return (
    <div className={props.box}>
      <div className="img">
        <img src={props.imgsrc} alt="Product" />
      </div>
      <div className={props.descstyle}>
        <h1 className={props.head}>{props.name}</h1>
        <p className={props.para}>{props.note}</p>
        <button className={props.butsty}>{props.button}</button>
      </div>
    </div>
  );
}

export default Ccomp;
