import React from "react";
import s from "./styled.module.sass";
import Image from "next/image";
import twitter from "../../../public/img/twitter.svg";
import instagram from "../../../public/img/instagram.svg";
import facebook from "../../../public/img/facebook.svg";

const Footer = () => {
  return (
      <div className={s.wrapper}>
          <div className={s.line}></div>
          <ul className={s.social}>
            <li>
            Don’t missout on once-in-a-while-deals:
            </li>
            <li className={s.item}>
              <a className={s.link} target="_blank" href="https://twitter.com/?lang=ru">
                <Image src={twitter} height="16px" width="16px"></Image>
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} target="_blank" href="https://www.instagram.com/">
                <Image src={instagram} height="16px" width="16px"></Image>
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} target="_blank" href="https://ru-ru.facebook.com/">
                <Image src={facebook} height="16px" width="16px"></Image>
              </a>
            </li>
          </ul>
          <div className={s.politics}>
            <div>Support line: +250 788 467 808</div>
            <div>Copyright  2021 © Sneaker City ltd</div>
          </div>
      </div>
  );
};

export default Footer;
