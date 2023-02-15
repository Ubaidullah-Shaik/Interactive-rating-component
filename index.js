
const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thankyou-container")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate")
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
})

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block"
  thanksContainer.classList.add("hidden")
})