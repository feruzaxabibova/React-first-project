import "./bottom_card.css"

function BottomCard() {
    return (
        <div class="container">
            <ul class="main__card-bottom">
                <img class="main__card-bottom__img" src="./images/copy.svg" alt="" width="70" height="60" />
                <li class ="card__bottom-item">
                    <p class ="item-text">Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine.</p>

                    <div class ="item-content">
                        <img class ="item-img" src="./images/avatar1.png" alt="people image" width="24" height="24" />
                        <div>
                            <p class ="content-name">Bruce McKenzie</p>
                            <p class ="content-text">Founder CEO, Huddle</p>
                        </div>
                    </div>
                </li>
                <li class ="card__bottom-item">
                    <p class ="item-text">Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div class ="item-content">
                        <img class ="item-img" src="./images/avatar2.png" alt="people image" width="24" height="24" />
                        <div>
                            <p class ="content-name">Iva Boyd</p>
                            <p class ="content-text">Founder CEO, Huddle</p>
                        </div>
                    </div>
                </li>
                <li class ="card__bottom-item">
                    <p class ="item-text">Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div class ="item-content">
                        <img class ="item-img" src="./images/avatar3.png" alt="people image" width="24" height="24" />
                        <div>
                            <p class ="content-name">Satish Patel</p>
                            <p class ="content-text">Founder CEO, Huddle</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default BottomCard;