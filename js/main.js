/* ==========================================================================
   主脚本：渲染项目列表 + 导航 / 菜单 / 滚动交互 / Lightbox
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- 1. 渲染项目条目 ---------- */
  var worksList = document.getElementById("worksList");

  function renderProjects() {
    if (!worksList || !window.PROJECTS) return;

    var html = window.PROJECTS.map(function (p) {
      return (
        '<article class="work-item" style="--work-block:' + p.block + '">' +
          '<figure class="work-media" data-full="' + p.img + '">' +
            '<img src="' + p.img + '" alt="' + p.title + ' 项目配图" loading="lazy" />' +
          "</figure>" +
          '<div class="work-body">' +
            '<p class="work-no">' + p.no + "</p>" +
            '<span class="work-cat">' + p.cat + "</span>" +
            "<h3 class=\"work-title\">" + p.title + "</h3>" +
            '<p class="work-desc">' + p.desc + "</p>" +
            '<dl class="work-facts">' +
              '<div class="fact-row"><dt>技术栈</dt><dd>' + p.tech + "</dd></div>" +
              '<div class="fact-row"><dt>完成时间</dt><dd>' + p.date + "</dd></div>" +
            "</dl>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    worksList.innerHTML = html;
  }

  renderProjects();

  /* ---------- 2. 导航滚动底色 ---------- */
  var header = document.getElementById("siteHeader");

  function onScrollHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- 3. 移动端抽屉菜单 ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var drawer = document.getElementById("mobileDrawer");

  function closeMenu() {
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  /* ---------- 4. 当前区域高亮 + 入场动画 ---------- */
  var navLinks = document.querySelectorAll(".nav-link, .drawer-link");
  var revealEls = document.querySelectorAll(".reveal, .work-item");

  if ("IntersectionObserver" in window) {
    // 区域高亮
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.dataset.section === id);
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach(function (sec) {
      sectionObserver.observe(sec);
    });

    // 一次性淡入
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 5. 图片放大 Lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");

  worksList.addEventListener("click", function (e) {
    var media = e.target.closest(".work-media");
    if (!media) return;
    lightboxImg.src = media.dataset.full;
    lightboxImg.alt = media.querySelector("img").alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
  }
  lightboxClose.addEventListener("click", function (e) {
    e.stopPropagation();
    closeLightbox();
  });
  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeLightbox(); closeMenu(); }
  });
})();
