import "./footer.css"

function footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="site-logo">
                    <a href="#">
                        <svg class="site-logo__img" width="176" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.016l29.754 13.59L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.57 8.57 0 00-.612-3.252 8.501 8.501 0 00-1.673-2.64 7.669 7.669 0 00-2.473-1.768 7.256 7.256 0 00-3.015-.636 7.256 7.256 0 00-3.015.636 7.669 7.669 0 00-2.473 1.768 8.501 8.501 0 00-1.673 2.64 8.57 8.57 0 00-.612 3.253 8.57 8.57 0 00.612 3.253 8.5 8.5 0 001.673 2.64 7.67 7.67 0 002.473 1.767 7.256 7.256 0 003.015.637 7.256 7.256 0 003.015-.637 7.67 7.67 0 002.473-1.767 8.5 8.5 0 001.673-2.64 8.57 8.57 0 00.612-3.253zm6.784 0c0 2.044-.377 3.937-1.131 5.681a13.837 13.837 0 01-3.109 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.656 14.656 0 01-4.617-3.04 14.121 14.121 0 01-3.109-4.55c-.754-1.744-1.131-3.622-1.131-5.633 0-1.98.385-3.842 1.154-5.587a14.729 14.729 0 013.133-4.572 14.454 14.454 0 014.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.319 1.273 2.356 2.789 3.109 4.549.754 1.76 1.131 3.645 1.131 5.657zm-31.422 13.483a9.098 9.098 0 01-1.814.613 9.213 9.213 0 01-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.352 6.352 0 01-2.426-1.297c-.691-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.539-.236 2.262-.707v5.562zM130.021 12.55l-12.249 32.386c-.911 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603-.314 0-.659-.024-1.036-.071a7.76 7.76 0 01-1.083-.212l-2.262-6.317a8.986 8.986 0 001.649.59 6.609 6.609 0 001.602.211c1.068 0 2.041-.243 2.921-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z" fill="#fff" />
                        </svg>
                    </a>
                </div>
                <div class="footer__content">
                    <div class="footer__content-address">
                        <img src="./images/local.svg" alt="location icon" width="13" height="18" />
                        <address class ="content-address">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </address>
                    </div>

                    <div class="footer__content-connection">
                        <a class="footer__content-tel" href="tel:+1-543-123-4567">
                            <img class="footer__content-img" src="./images/phone.svg" alt="phone image" width="18" height="18" />
                            <span>+1-543-123-4567</span>
                        </a>
                        <a class="footer__content-tel" href="mailto:example@fylo.com">
                            <img class="footer__content-img" src="./images/email.svg" alt="email image" width="18" height="18" />
                            <span>example @fylo.com</span>
                        </a>
                    </div>

                    <ul class="footer-list">
                        <li class="footer-list__item">
                            <a class="item-link" href="#">About Us</a>
                        </li>
                        <li class="footer-list__item">
                            <a class="item-link" href="#">Jobs</a>
                        </li>
                        <li class="footer-list__item">
                            <a class="item-link" href="#">Press</a>
                        </li>
                        <li class="footer-list__item">
                            <a class="item-link" href="#">Blog</a>
                        </li>
                    </ul>
                    <ul class="footer-list">
                        <li class="footer-list__item">
                            <a class="item-link" href="#">Contact Us</a>
                        </li>
                        <li class="footer-list__item">
                            <a class="item-link" href="#">Terms</a>
                        </li>
                        <li class="footer-list__item">
                            <a class="item-link" href="#">Privacy</a>
                        </li>
                    </ul>
                    <ul class="footer-list-icon">
                        <li class="footer-list__link">
                            <a class="link-icon" href="#" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="footer-list__link">
                            <a class="link-icon" href="#" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="footer-list__link">
                            <a class="link-icon" href="#" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default footer;