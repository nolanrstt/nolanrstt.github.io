// On sélectionne les deux parties du curseur
const cursorDot = document.querySelector('.cursor-dot');
const cursorCircle = document.querySelector('.cursor-circle');
// On sélectionne tous les éléments interactifs (liens et boutons)
const links = document.querySelectorAll('a, .btn-pilule');

let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;

// Écoute du mouvement de la souris
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Fonction d'animation pour un suivi fluide (effet de "lag")
function animateCursor() {
    // Le point suit exactement la souris
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';

    // Le cercle suit avec un léger retard (formule mathématique de lissage)
    circleX += (mouseX - circleX) * 0.15; // Le 0.15 gère la vitesse du retard (plus petit = plus lent)
    circleY += (mouseY - circleY) * 0.15;

    cursorCircle.style.left = circleX + 'px';
    cursorCircle.style.top = circleY + 'px';

    requestAnimationFrame(animateCursor); // Boucle d'animation continue
}

animateCursor(); // On lance l'animation

// Gestion des survols (hover) sur les liens
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Le cercle s'agrandit et devient blanc plein
        cursorCircle.style.width = '60px';
        cursorCircle.style.height = '60px';
        cursorCircle.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        cursorCircle.style.borderColor = 'transparent';
        // Le point central disparaît
        cursorDot.style.opacity = '0';
    });
    
    link.addEventListener('mouseleave', () => {
        // Retour à la normale
        cursorCircle.style.width = '40px';
        cursorCircle.style.height = '40px';
        cursorCircle.style.backgroundColor = 'transparent';
        cursorCircle.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        cursorDot.style.opacity = '1';
    });
});