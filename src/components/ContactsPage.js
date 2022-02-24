import React from "react";

import Banner from "./common/Banner";
import Footer from "./common/Footer";
import twitter from "../img/twitter.png";
import vk from "../img/vk.png";

export default function ContactsPage() {
  return (
    <>
      <Banner/>
      <div className="contacts">

        <div className="info">
          <div className="title-info">Режим работы магазина - Кирова 25в:</div>
          <div className="data-info">С 09:00 до 21:00 ежедневно</div>
        </div>

        <div className="delivery">
          <div className="title-info">Доставка по Москве ежедневно: </div>
          <div className="data-info">C 9:00 до 13:00</div>
          <div className="data-info">C 20:00  до 23:00</div>
        </div>

        <div className="send">
          <div className="title-info">Отправка по России: </div>
          <div className="data-info">СДЭК, Boxberry, Почта России</div>
        </div>

        <div className="call-number">
          <a className="telephone-info" href="tel:+7-495-790-35-03">Тел: +7(495) 790-35-03</a>
          <div className="data-info">Приём звонков с 09:00 до 21:00</div>
        </div>

        <div className="contact-email">
          <div className="title-info">Электронная почта:</div>
          <div className="data-info">
            <a className="link-info" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
          </div>
        </div>

        <div className="social-links">
          <div className="footer-social-link footer-social-link-twitter">
            <a href="https://twitter.com/"><img src={twitter} /></a>
          </div>

          <div className="footer-social-link footer-social-link-vk">
            <a href="https://vk.com/"><img src={vk} /></a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
