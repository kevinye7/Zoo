// Zoo Navigation JavaScript
// Enhanced navigation functionality for the zoo project

function navigateToZoo(zooName) {
    // Add some visual feedback
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        if (zooName === 'david') {
            window.location.href = 'david-zoo.html';
        } else if (zooName === 'kevin') {
            window.location.href = 'kevin-zoo.html';
        }
    }, 150);
}

function goHome() {
    window.location.href = 'index.html';
}

function navigateToAnimal(animalPage) {
    window.location.href = animalPage;
}

// Add smooth scrolling and enhanced interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to zoo cards
    const zooCards = document.querySelectorAll('.zoo-card');
    zooCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to animal cards
    const animalCards = document.querySelectorAll('.animal-card');
    animalCards.forEach(card => {
        card.addEventListener('click', function() {
            const animalPage = this.dataset.animal;
            if (animalPage) {
                navigateToAnimal(animalPage);
            }
        });
    });
});

// Back navigation helper
function goBack() {
    window.history.back();
}
