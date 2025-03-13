let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Tự động chuyển slide mỗi 5 giây
setInterval(() => {
    changeSlide(1);
}, 8000);

// Hiển thị slide đầu tiên
showSlide(currentSlide);