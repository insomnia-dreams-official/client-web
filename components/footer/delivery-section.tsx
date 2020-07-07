import React from "react";

export default function () {
    return(
        <div className="footer-section delivery-section">
            <img src="/delivery.png" alt="доставка"/>
            <div className="text">
                В Marinus мы осуществяем бесплатную доставку по Екатеринбургу.
                Ваш заказ будет упакован с осторожностью на нашем складе
                и доставлен прямо к вашей двери нашей дружной командой
            </div>

            <style jsx>{`
                .delivery-section {
                    display: flex;  
                 }
                img {
                    height: 90%;
                }
            `}</style>
        </div>
    )
}
