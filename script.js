document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners to like buttons
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
          btn.textContent = btn.textContent === "Like" ? "Liked" : "Like";
      });
  });

  // Attach event listeners to comment buttons
  const commentButtons = document.querySelectorAll(".comment-btn");
  commentButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
          const input = btn.previousElementSibling;
          const comment = input.value.trim();
          if (comment) {
              const commentsDiv = btn.parentElement.nextElementSibling;
              const newComment = document.createElement("p");
              newComment.innerHTML = '<strong>MyUsername:</strong> ${comment}';
              commentsDiv.appendChild(newComment);
              input.value = ""; // Clear input
          }
      });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts-container");
  if (!postsContainer) {
    console.error("Posts container not found");
    return;
  }

  const commentButtons = document.querySelectorAll(".comment-btn");
  commentButtons.forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", () => {
        const input = btn.previousElementSibling;
        const comment = input.value.trim();
        if (comment && comment !== "") {
          const commentsDiv = btn.parentElement.nextElementSibling;
          const newComment = document.createElement("p");
          newComment.textContent = 'MyUsername: ${comment}';
          commentsDiv.appendChild(newComment);
          input.value = "";
        }
      });
    }
  });
});
document.getElementById('mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function showNotification() {
document.getElementById('notification').style.display = 'block';
}

function closeNotification() {
document.getElementById('notification').style.display = 'none';
console.log('Notification closed');
}