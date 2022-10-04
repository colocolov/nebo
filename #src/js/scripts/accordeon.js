// accordeon
document.addEventListener("DOMContentLoaded", () => {
  const accordeons = document.querySelectorAll(".accordeon__item");
  const accordeonBtn = document.querySelectorAll(".accordeon__btn");
  const navLink = document.querySelectorAll(".menu__item");

  accordeonBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      // console.log(el);
      const self = e.currentTarget;
      // el.classList.remove("active");
      // const title = self.querySelector(".accordeon__name");
      // const content = self.querySelector(".accordeon__decription");

      for (let i = 0, parent; (parent = accordeons[i]); i++) {
        parent.classList.remove("active");
        parent.onclick = function (e) {
          // console.log(e.target.className + "--");
          if (e.target.className == "btn") {
            // alert(this.className);
            // console.log(this);
            this.classList.toggle("active");
          }
        };
      }

      // .self.classList.toggle("active");
    });
  });

  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      // let url = item.baseURI;
      let hash = item.childNodes[1].innerText;
      // console.log(hash);
      // console.log(hash.toLowerCase());

      accordeons.forEach((el) => {
        el.classList.remove("active");
        // console.log(el);
        const isCob = el.classList.contains(hash.toLowerCase());
        // console.log(isCob);
        while (isCob) {
          el.classList.add("active");
          break;
        }
      });
      // console.dir(item);
    });
  });
});
// ----- END
