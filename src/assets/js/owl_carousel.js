import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export default function initOwlCarousel() {
    // eslint-disable-next-line no-undef
    $('.owl-carousel').owlCarousel({
        margin: 15,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    })
}