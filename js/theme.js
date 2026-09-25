/* ==========================================================================
   深浅色主题：读取 / 保存 localStorage，并绑定导航栏切换按钮
   本文件在 <head> 中同步加载，先应用主题，避免刷新时出现闪烁。
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-theme";
  var root = document.documentElement;

  function savedTheme() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return v === "dark" || v === "light" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    syncButton(theme);
  }

  function syncButton(theme) {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    var isDark = theme === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.setAttribute("aria-label", isDark ? "切换到浅色主题" : "切换到深色主题");
    btn.setAttribute("title", isDark ? "切换到浅色主题" : "切换到深色主题");
  }

  // 1. 立即应用主题（无保存记录时沿用系统偏好）
  var current =
    savedTheme() ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  applyTheme(current);

  // 2. 绑定切换按钮
  function bind() {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    syncButton(root.getAttribute("data-theme") || current);
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* 隐私模式下 localStorage 不可用，忽略 */
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
