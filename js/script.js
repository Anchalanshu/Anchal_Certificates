document.addEventListener("DOMContentLoaded", () => {
  // Create modal structure
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <img id="modalImage" src="" alt="Full View">
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = document.getElementById("modalImage");
  const closeBtn = modal.querySelector(".close");

  // Open modal on View button click
  document.querySelectorAll('.btn.view-btn').forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      modalImg.src = button.getAttribute("href");
    });
  });

  // Close modal
  closeBtn.onclick = () => modal.style.display = "none";
  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
});
