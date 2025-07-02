document.addEventListener("DOMContentLoaded", () => {
  const data = {
    instagramFollowers: "12.3K",
    tiktokFollowers: "45K"
  };

  document.getElementById("ig-followers").textContent = data.instagramFollowers;
  document.getElementById("tt-followers").textContent = data.tiktokFollowers;

  // Particelle fluttuanti
  const container = document.getElementById("floating-particles");
  const createParticle = () => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = 8 + Math.random() * 5 + "s";
    particle.style.opacity = 0.2 + Math.random() * 0.3;
    container.appendChild(particle);

    setTimeout(() => {
      container.removeChild(particle);
    }, 13000);
  };

  setInterval(createParticle, 500); // Crea una particella ogni 0.5s
});
