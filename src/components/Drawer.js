import React from 'react';

const Drawer = () => {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">Корзина <img className="remove-btn cu-p"
                                                                          src="/img/remove.svg" alt="remove"/></h2>

                <div className="items">
                    <div className="cart-item d-flex align-center mb-20">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="img"/>
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="remove-btn" src="/img/remove.svg" alt="remove"/>
                    </div>
                    <div className="cart-item d-flex align-center mb-20">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="img"/>
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="remove-btn" src="/img/remove.svg" alt="remove"/>
                    </div>
                    <div className="cart-item d-flex align-center mb-20">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="img"/>
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="remove-btn" src="/img/remove.svg" alt="remove"/>
                    </div>
                </div>

                <div className="cart-total-block">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"/></button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;