document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️';
        } else {
            darkModeToggle.textContent = '🌙';
        }
    });

    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const counter = button.nextElementSibling;
            let currentLikes = parseInt(counter.textContent, 10);
            currentLikes++;
            counter.textContent = currentLikes;
        });
    });

    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const articleCards = document.querySelectorAll('.article-card');

    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        articleCards.forEach(card => {
            const title = card.querySelector('.article-title, .side-title');
            const cardText = title ? title.textContent.toLowerCase() : '';

            if (cardText.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    };

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    const galleryImage = document.getElementById('galleryImage');
    const seeAllLink = document.getElementById('seeAll');

    const galleryImages = [
        'https://i.pinimg.com/736x/4d/e2/47/4de2473026574acd32b4b76455f366f1.jpg',
        'https://i.pinimg.com/1200x/4c/49/75/4c497530e4aaca38ef7da0855cb3f58c.jpg',
        'https://i.pinimg.com/1200x/dd/dc/bd/dddcbd6ff67c39cf9d44d0d171af1b3e.jpg'
    ];

    let imageInterval;
    let currentImageIndex = 0;

    const startImageCycle = () => {
        if (!imageInterval) {
            imageInterval = setInterval(() => {
                currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
                galleryImage.src = galleryImages[currentImageIndex];
            }, 2000);
        }
    };

    const stopImageCycle = () => {
        clearInterval(imageInterval);
        imageInterval = null;
    };

    seeAllLink.addEventListener('mouseover', startImageCycle);
    seeAllLink.addEventListener('mouseout', stopImageCycle);
});