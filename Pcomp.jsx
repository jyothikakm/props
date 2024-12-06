import React from 'react';
import Ccomp from './Ccomp';
import img from './assets/img.jpeg'; // Ensure image paths are correct
import rl from './assets/rl.png';
import rr from './assets/rr.png';

const Pcomp = () => {
  return (
    <div>
      <Ccomp
        imgsrc={rl}
        name="The Seasons Latest"
        note="Get the seasons all latest designs in a flick of your hand"
        button="Show More"
        style="style"
        descstyle="desc"
        head="head1"
        para="para"
        butsty="butsty"
        box="shadowbox"
      />
      <Ccomp
        imgsrc={img}
        name="Our New Designs"
        note="Get the designs developed by our in-house team all for yourself"
        button="Show More"
        style="style"
        descstyle="desc"
        head="head2"
        para="para"
        butsty="butsty"
        box="shadowbox"
      />
      <Ccomp
        imgsrc={rr}
        name="Insiders"
        note="Get the top-class products for yourself with extra offers"
        button="Show More"
        style="style"
        descstyle="desc"
        head="head3"
        para="para"
        butsty="butsty"
        box="shadowbox"
      />
    </div>
  );
};

export default Pcomp;




