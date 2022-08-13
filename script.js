document.addEventListener("DOMContentLoaded", () => {
  starSelected = "0";
  submit = document.getElementsByClassName("submit")
  rating = document.getElementsByClassName("rating")
  thankyou = document.getElementsByClassName("thankyou")
  submit = document.getElementsByClassName("submit")
  stars = document.getElementsByClassName("inter-star");
  starChange = document.getElementsByClassName("star-change");
  for (i = 0; i < stars.length; i++) {
    stars[i].onclick = (star) => {
      starSelected = star.target.innerHTML;
    };
  }
  submit[0].onclick = () =>{
    rating[0].classList.add("none")
    thankyou[0].classList.add("show")
    console.log(starChange)
    starChange[0].innerText= starSelected
    
  }
});
