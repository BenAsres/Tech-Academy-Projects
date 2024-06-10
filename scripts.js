document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.gallery-image').forEach(image => {
        image.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
        });
    });

    close.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
