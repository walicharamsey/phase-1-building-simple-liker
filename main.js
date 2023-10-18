// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const emptyHearts = document.querySelectorAll(".like-glyph");
  
  emptyHearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Change the heart to full
          heart.classList.add("activated-heart");
        })
        .catch(() => {
          // Display the error modal
          errorModal.classList.remove("hidden");
          // Display the error message
          const errorMessage = document.getElementById("modal-message");
          errorMessage.innerText = "Server Error!";
          // Hide the error modal after 3 seconds
          const errorModal = document.getElementById("modal");

          setTimeout(() => {
            
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });

  const fullHearts = document.querySelectorAll(".activated-heart");
  fullHearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      // Change the heart back to empty
      heart.classList.remove("activated-heart");
    });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
