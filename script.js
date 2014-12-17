var submitButton = document.querySelector("button")
submitButton.addEventListener("click", showListSummary)

function showListSummary() {
  event.preventDefault();
  var list = getUncheckedItems();
  if (list.length == 0) {
    var outputString = "All set for your party!";
  } else {
    var outputString = "You still need " + list[0].toLowerCase();
    for (var i = 1; i < list.length; i++) {
      outputString = outputString + ", " + (list[i]).toLowerCase();
    }
  }
  var outputArea = document.querySelector(".summary");
  outputArea.innerHTML = outputString;
}

function getUncheckedItems() {
  var checkboxes = document.querySelectorAll("input");
  var items = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      items.push(checkboxes[i].value);
    }
  }
  return items;
}
