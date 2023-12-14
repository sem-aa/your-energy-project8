export function updateRating(value) {
  const stars = document.querySelectorAll(
    '#rating .modal-exercises__rating-star'
  );
  stars.forEach(star => {
    const starValue = parseInt(star.dataset.value, 10);
    let percentFilled = 0;

    if (starValue <= value) {
      percentFilled = 100;
    } else if (starValue - value < 1) {
      percentFilled = (value - starValue + 1) * 100;
    }

    star.style.background = `linear-gradient(to right, gold ${percentFilled}%, gray ${percentFilled}%)`;
    star.style.webkitBackgroundClip = 'text';
    star.style.color = 'transparent';
  });
}
