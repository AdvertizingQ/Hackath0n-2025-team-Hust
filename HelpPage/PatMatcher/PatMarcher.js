function toggleLike(element) {
    const heart = element.querySelector('svg');
    heart.classList.toggle('liked');
}