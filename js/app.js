let unit = document.querySelector(".container__units");

unit.addEventListener("click", (e) => {
  if (e.target && e.target.id == "unitOne") {
    icon(1);
    watchClass("one");
  } else if (e.target && e.target.id == "unitTwo") {
    icon(2);
    watchClass("two");
  } else if (e.target && e.target.id == "unitThree") {
    icon(3);
    watchClass("three");
  }
});

function icon(id) {
  let icon = document.getElementById(id);
  icon.classList.toggle("activo");
}

function watchClass(id) {
  let season = document.getElementById(id);
  season.classList.toggle("activo-class");
}
