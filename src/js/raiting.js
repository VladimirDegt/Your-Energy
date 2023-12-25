export function createInteractiveRaiting() {
    const ratingContainer = document.querySelector('.rating-container-js');
    const stars = ratingContainer.querySelectorAll('.exercises_btn_start_icon_rating');
    let userRating = ratingContainer.querySelector('.user-rating-js')

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => highlightStars(index));
        star.addEventListener('mouseout', resetStars);
        star.addEventListener('click', () => setRating(index + 1));
    });

    function highlightStars(selectedIndex) {
        resetStars();
        for (let i = 0; i <= selectedIndex; i++) {
            stars[i].classList.add('hovered');
            userRating.textContent = `${i+1}`
        }
    }

    function resetStars() {
        stars.forEach(star => {
            const ratinFromUser = ratingContainer.dataset.rating
            star.classList.remove('hovered');
            userRating.textContent = `${ratinFromUser || 0}`
        });
    }

    function setRating(selectedRating) {
        ratingContainer.setAttribute('data-rating', selectedRating);

        // Закрасити обрану та всі попередні зірки
        stars.forEach((star, index) => {
            if (index + 1 <= selectedRating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
}