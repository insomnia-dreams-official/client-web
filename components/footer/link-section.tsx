import React from "react";
import Link from "next/link";
import PhoneLink from '../links/phone'
import theme from "../../styles/theme";

export default function () {
    return (
        <div className="footer-section links-section">
            <div className="column">
                <h3 className="header">Компания</h3>
                <Link href="/company">
                    <a className="link">О нас</a>
                </Link>
                <Link href="/goszakupki">
                    <a className="link">Участие в госзакупках</a>
                </Link>
                <Link href="/news">
                    <a className="link">Новости</a>
                </Link>
                <Link href="/careers">
                    <a className="link">Вакансии</a>
                </Link>
            </div>

            <div className="column">
                <h3 className="header">Помощь</h3>
                <Link href="/how-to-order">
                    <a className="link">Как оформить заказ</a>
                </Link>
                <Link href="/how-to-register">
                    <a className="link">Помощь в регистрации</a>
                </Link>
                <Link href="/pay">
                    <a className="link">Оплата товара</a>
                </Link>
                <Link href="/delivery">
                    <a className="link">Доставка товара</a>
                </Link>
                <Link href="/return">
                    <a className="link">Возврат товара</a>
                </Link>
                <Link href="/privacy-policy">
                    <a className="link">Политика конфиденциальности</a>
                </Link>
            </div>

            <div className="column">
                <h3 className="header">Контакты</h3>
                <Link href="/contacts-warehouse">
                    <a className="link">Оптовый склад</a>
                </Link>
                <Link href="/contacts-shops">
                    <a className="link">Оптово-розничные магазины</a>
                </Link>
                <div>пн-вс &nbsp; 9:00 — 18:00</div>
                <PhoneLink />
            </div>

            <style jsx>{`
                .links-section {
                    display: flex;
                    justify-content: space-between;
                }
                .header {}
                .link {
                    display: block;
                }
            `}</style>
        </div>
    )
}