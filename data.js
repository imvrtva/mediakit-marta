document.addEventListener("DOMContentLoaded", () => {
  const data = {
    instagramFollowers: "12.3K",
    tiktokFollowers: "45K"
  };

  document.getElementById("ig-followers").textContent = data.instagramFollowers;
  document.getElementById("tt-followers").textContent = data.tiktokFollowers;
});
