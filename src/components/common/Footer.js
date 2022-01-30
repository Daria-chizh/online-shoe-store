import React from 'react';

import FooterLinks from "./FooterLinks";
import payPal from "../../img/payPal.png";
import masterCard from "../../img/masterCard.png";
import visa from "../../img/visa.png";
import yandexMoney from "../../img/yandexMoney.png";
import webMoney from "../../img/webMoney.png";
import qiwi from "../../img/qiwi.png";
import twitter from "../../img/twitter.png";
import vk from "../../img/vk.png";


export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-menu">
        <h5>Информация</h5>
        <FooterLinks/>
      </div>

      <div className="pay">
        <h3>Принимаем к оплате:</h3>
        <div className="footer-pay">
          <img src={payPal} className="footer-pay-systems footer-pay-systems-paypal"/>
          <img src={masterCard} className="footer-pay-systems footer-pay-systems-master-card"/>
          <img src={visa} className="footer-pay-systems footer-pay-systems-visa"/>
          <img src={yandexMoney} className="footer-pay-systems footer-pay-systems-yandex"/>
          <img src={webMoney} className="footer-pay-systems footer-pay-systems-webmoney"/>
          <img src={qiwi}  className="footer-pay-systems footer-pay-systems-qiwi"/>
        </div>
        <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.Все права защищены.<br/>Доставка по всей России!</div>
      </div>

      <div className="footer-contacts">
        <div className="contacts">
          <h3>Контакты:</h3>
          <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
          <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
          <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
          <div className="footer-social-links">
            <div className="footer-social-link footer-social-link-twitter">
              <img src={twitter} />
            </div>
            <div className="footer-social-link footer-social-link-vk"><img src={vk}/></div>
          </div>
        </div>
      </div>

    </div>
  );
}
