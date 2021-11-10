let unit = document.querySelector(".container__units");

unit.addEventListener("click", (e) => {
  if ((e.target && e.target.id == "unitOne") || e.target.id == 1) {
    icon(1);
    watchClass("one");
  } else if ((e.target && e.target.id == "unitTwo") || e.target.id == 2) {
    icon(2);
    watchClass("two");
  } else if ((e.target && e.target.id == "unitThree") || e.target.id == 3) {
    icon(3);
    watchClass("three");
  } else if ((e.target && e.target.id == "unitFour") || e.target.id == 4) {
    icon(4);
    watchClass("four");
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
