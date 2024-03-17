var acc = document.getElementsByClassName("btn");
window.onload = function() {
  acc[0].click();
};
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.classList.contains('showInfo')) {
      panel.classList.remove('showInfo')
    } else {
      panel.classList.add('showInfo')
    }
  });
}



document.addEventListener('DOMContentLoaded', function () {
  const titles = document.querySelectorAll('.btn');

  titles.forEach((title, index) => {
    title.addEventListener('keydown', function (event) {
          if (event.key === 'Tab' && !event.shiftKey) {
              event.preventDefault();
              const nextTitle = titles[index + 1];
              if (nextTitle) {
                  nextTitle.focus();
              } else {
                titles[0].focus();
              }
          } else if (event.key === 'Tab' && event.shiftKey) {
              const prevTitle = titles[index - 1];
              if (prevTitle) {
                prevTitle.focus();
              } else {
                titles[titles.length - 1].focus();
              }
          }
      });
  });
});











/*
woff2 woff web fonts

web fonts
woff
woff2
preload
add custom fonts
search for web fonts based on my font family
//* https://www.youtube.com/live/fs8UmztUg0s?si=I3zo6DRmfX2tbuwW
*/ 




/*
let btn = document.querySelectorAll('.btn');
let info = document.querySelectorAll('.info');
btn.forEach(el => {
  el.onclick = function () {
    let isActive = this.classList.contains('active');

    btn.forEach(ele => ele.classList.remove('active'));
    info.forEach(ele => ele.classList.remove('showInfo'));

    if (!isActive) {
      this.classList.add('active');
      let nextEle = this.nextElementSibling;
      if (nextEle) {
        nextEle.classList.add('showInfo');
      }
    }
  };
});
*/ 






