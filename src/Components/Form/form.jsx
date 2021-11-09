import "./form.css";

function form() {
    return (
        <div class="container">
            <div class="main__form" id="signin">
                <h3 class="main__form-title">Get early access today</h3>
                <p class="main__form-text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

                <form action="https://echo.htmlacademy.ru" method="POST">
                    <input class="main__form-input" type="email" name="email" placeholder="email@example.com" />
                    <button class="main__form-btn" type="submit">Get Started For Free</button>
                </form>
            </div>
        </div>
    )
}

export default form;