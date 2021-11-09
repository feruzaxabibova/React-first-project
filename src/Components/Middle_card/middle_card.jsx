import "./middle_card.css"

function MiddleCard() {
    return (
        <div class="container">
            <div class="main__middle-card" id="team">
                <div class="middle-card">
                    <img class="middle-card-img" src="./images/main-image.svg" alt="people image" width="615" height="463" />
                </div>
                <div class="middle-card__content">
                    <h2 class="middle-card__content-title">Stay productive, wherever you are</h2>
                    <p class="middle-card__content-text">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p class="middle-card__content-text">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <a class="middle-card__content-link" href="#">See how Fylo works</a>
                    <hr class="content-link__hr" />
                </div>
            </div>
        </div>



    )
}

export default MiddleCard;