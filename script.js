// Get the modal and modal content elements
const modal = document.getElementById("birthdayModal");
const modalContent = document.querySelector(".modal-content");

// Function to show the modal
function showModal() {
  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("show");
  document.addEventListener("keydown", handleKeyDown); // Add keydown listener
}

// Function to close the modal
function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  modal.classList.remove("show");
  document.removeEventListener("keydown", handleKeyDown); // Remove keydown listener
}

// Close modal when clicking outside the modal content
modal.addEventListener("click", (event) => {
  if (!modalContent.contains(event.target)) {
    closeModal();
  }
});

// Close modal when pressing the Escape key
function handleKeyDown(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// Show the modal when the page loads
window.onload = showModal;
