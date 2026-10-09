let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;
btn.onclick = function () {
  if (inp.value != "") {
    boxs[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
    inp.value = "";
  }
  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });
    boxs.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.style.background = "green";
        box.style.color = "#FFF";
      });
      box.addEventListener("dragleave", function () {
        box.style.background = "#FFF";
        box.style.color = "#000";
      });
      box.addEventListener("drop", function () {
        box.append(drag);
        box.style.background = "#FFF";
        box.style.color = "#000";
      });
    });
  });
}
