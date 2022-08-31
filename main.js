var votesValue = document.getElementById("value");
document.getElementById("add").addEventListener("click", addVote);
document.getElementById("substract").addEventListener("click", substractVote);

function addVote() {
  votesValue.innerHTML = parseInt(votesValue.innerHTML) + 1;
  if (votesValue.innerHTML < 0) {
    votesValue.style.color = "red";
  } else {
    votesValue.style.color = "hsl(238, 40%, 52%)";
  }
}

function substractVote() {
  votesValue.innerHTML = parseInt(votesValue.innerHTML) - 1;
  if (votesValue.innerHTML < 0) {
    votesValue.style.color = "red";
  } else {
    votesValue.style.color = "hsl(238, 40%, 52%)";
  }
}
