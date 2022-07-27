var content = document.getElementById("thank");
let text = `<div class="thankb slide-in-elliptic-top-fwd">
  <img src="/illustration-thank-you.svg" alt="" class="thanku">
  <span><p>You Selected 4 out 5</p></span>
  <h1>Thank You</h1>
  <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in
    touch!</p>
</div>`;

function myfun() {
  console.log("updating")
  // content.classList.add("bounce-out-top")
  content.innerHTML = text;
}
