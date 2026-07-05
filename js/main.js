//main.js

import { initRouter } from "./routing.js";
import { initTerminal } from "./terminal.js";

async function loadHtml(path, targetId) {
  const target = document.getElementById(targetId);

  if (!target) {
    throw new Error(`No element found with id="${targetId}" while loading ${path}`);
  }

  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }

  const html = await response.text();
  target.innerHTML = html;
}

async function render(route) {
  console.log("Loading:", route);

  switch (route) {
    // case "projects":
    //   await loadHtml("pages/projects.html", "app");
    //   break;
    //
    // case "about":
    //   await loadHtml("pages/about.html", "app");
    //   break;
    
    case "circuit-tui":
      await loadHtml("pages/circuit_tui_page.html", "app");
      await loadHtml("./components/terminal.html", "terminal-container");
      initTerminal();
      break;

    case "home":
    default:
      await loadHtml("pages/home_page.html", "app");
      await loadHtml("./components/terminal.html", "terminal-container");
      initTerminal();
      // await loadHtml("./components/terminal.html", "terminal-container");
      break;
  }
}

initRouter(render);

// async function init() {
//   console.log("init start");
//
//   await loadHtml("pages/home_page.html", "app");
//   console.log("home loaded");
//
//   await loadHtml("./components/terminal.html", "terminal-container");
//   console.log("terminal loaded");
//
//   initTerminal();
//   console.log("terminal initialized");
//
//   // initRouter(render);
// }
//
// init();
//

