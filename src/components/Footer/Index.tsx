/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import s from "./styled.module.sass";
import Image from "next/image";
import { social } from "./footer.type";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.line}></div>
      <ul className={s.social}>
        <li>Don’t missout on once-in-a-while-deals:</li>
        {social.map((item, id) => (
          <li key={id} className={s.item}>
            <a
              className={s.link}
              target="_blank"
              href={item.link} rel="noreferrer"
            >
              <Image src={item.img} height="16px" width="16px"></Image>
            </a>
          </li>
        ))}
      </ul>
      <div className={s.politics}>
        <div>Support line: +250 788 467 808</div>
        <div>Copyright 2021 © Sneaker City ltd</div>
      </div>
    </div>
  );
};

export default Footer;
