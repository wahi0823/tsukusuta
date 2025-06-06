// スマホ用メニュー　クラス追加
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-globalnav");
const Main = document.querySelector("#js-main");

ham.addEventListener("click", function () {
 ham.classList.toggle("_active");
 nav.classList.toggle("_active");
 Main.classList.toggle("_darker");
});

// 子メニュー表示
const parentMenu = document.querySelectorAll("._has-child > a");
for (let i = 0; i < parentMenu.length; i++) {
 parentMenu[i].addEventListener("click", function(e){
  e.preventDefault();
  this.nextElementSibling.classList.toggle("active");
 })
}

// スクロールしたら背景ぼかし＆メニュー表示（PC）

const mainImg = document.querySelector(".index #mainImg");
const indexNav = document.querySelector(".index #js-globalnav");

window.addEventListener("scroll", () =>  {
 mainImg?.classList.toggle("scroll-on", window.scrollY > 400);
 indexNav?.classList.toggle("scroll-on", window.scrollY > 400);
});


// ページUP
const PageUpBtn = document.getElementById('js-pageup');

window.addEventListener("scroll", () =>  {
 PageUpBtn?.classList.toggle("_active", window.scrollY > 700);
});

PageUpBtn?.addEventListener('click', () => {
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 });
});


// キャラクター紹介タブ
// ボタン
const nameList = document.querySelectorAll(".charanamelist__item");
// コンテンツ
const charaContent = document.querySelectorAll(".charalist__item");

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < nameList.length; i++) {
    nameList[i].addEventListener("click", charaSwitch);
  }
  function charaSwitch() {
    document.querySelectorAll(".active")[0]?.classList.remove("active");
    this?.classList.add("active");
    document.querySelectorAll(".show")[0].classList.remove("show");
    const aryList = Array.prototype.slice.call(nameList);
    const index = aryList.indexOf(this);
    charaContent[index].classList.add("show");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (let anchor of anchorLinks) {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        // ハンバーガーメニューが開いていたら閉じる
        ham.classList.remove("_active");
        nav.classList.remove("_active");
        Main.classList.remove("_darker");
      }
    });
  }
});

const loading = document.getElementById('loading');
window.onload = function() {
  loading.classList.add('loaded');
  setTimeout(() => {
    loading.style.display = 'none';
  }, 500); // アニメーションの時間に合わせて調整
}