document.addEventListener("DOMContentLoaded", () => {

  /* フェードイン */
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "0.6s";
    document.body.style.opacity = 1;
  }, 80);

  /* ハンバーガー */
  const ham = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  if(ham){
    ham.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  /* スクロールでヘッダー縮小 */
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if(window.scrollY > 60){
      header.classList.add("small");
    } else {
      header.classList.remove("small");
    }
  });

});
