// accordeon
document.addEventListener("DOMContentLoaded", () => {
  const accordeons = document.querySelectorAll(".accordeon__item");
  const accordeonBtn = document.querySelectorAll(".accordeon__title");
  const navLink = document.querySelectorAll(".menu__item");
  const pathname = window.location.pathname; // возвращает путь до текущей страницы
  const href = window.location.href; // возвращает полный адрес страницы
  const hrefLink = localStorage.getItem("hrefLink"); // записываем хеш в localStorage

  // переключение табов
  accordeonBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      // console.log(el);
      const self = e.currentTarget;
      // el.classList.remove("active");
      // const title = self.querySelector(".accordeon__name");
      // const content = self.querySelector(".accordeon__decription");

      for (let i = 0, parent; (parent = accordeons[i]); i++) {
        // console.log(parent);
        parent.classList.remove("active");
        parent.onclick = function (e) {
            // console.log(e);
          // console.log(e.target.className + "--");
          if ((e.target.className == "accordeon__title") || (e.target.className == "btn") || (e.target.className == "accordeon__head")) {
            this.classList.toggle("active");
          //   // alert(this.className);
            if (this.classList.contains('active')) {
              // секция всегда начинается с верха экрана
              this.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        };
      }

      // .self.classList.toggle("active");
    });
  });
  // END переключение табов

  // закрытие мобильного меню
  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      // let url = item.baseURI;
      let hash = item.childNodes[1].innerText;
      // console.log(hash);
      // console.log(hash.toLowerCase());

      accordeons.forEach((el) => {
        el.classList.remove("active"); // получают элементы меню
        const isCob = el.classList.contains(hash.toLowerCase());

        if (pathname != '/index.html') {
          localStorage.setItem("hrefLink", hash.toLowerCase());
          // alert(ркуа);
        } else {
          while (isCob) {
            el.classList.add("active");
            break;
          }
          localStorage.removeItem('hrefLink');
        }
      });
    });
  });
  // END закрытие мобильного меню

  // проверка если мы перешли с другой страницы с хешем и открываем нужную секцию
  if (href.includes('#')) { // если мы на главной с хешем
      for (let i = 0, parent; (parent = accordeons[i]); i++) {
        parent.classList.remove("active");
        if (parent.classList.contains(hrefLink)) {
          parent.classList.add('active');
        }
      }
  } else {
    localStorage.removeItem('hrefLink');
  }
  // END проверки на хэш

});
// ----- END
