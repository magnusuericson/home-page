//routing.js

export function navigate(route) {
  window.location.hash = route;
}

export function getCurrentRoute() {
  return window.location.hash.slice(1) || "home";
}

export function initRouter(render) {
  window.addEventListener("hashchange", () => {
    render(getCurrentRoute());
  });

  render(getCurrentRoute());
}
