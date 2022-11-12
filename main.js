import "./styles.scss";

const generateStars = (n) => {
    const field = document.querySelector(".field");

    for (let i = 0; i < n; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
        star.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;

        field.appendChild(star);
    }
};

generateStars(100);
setInterval(() => generateStars(70), 2000);

const animate = () => {
    const stars = Array.from(document.querySelectorAll(".star"));
    const speed = 3;

    stars.forEach((star) => {
        const pos = parseInt(star.style.left) + speed;

        star.style.left = `${pos}px`;
    });
};

setInterval(animate, 20);

const audio = new Audio("/interstellar.mp3");
audio.play();
