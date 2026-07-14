// terminal_btn.js
export function initTerminalBtn() {
  const btn = document.getElementById("terminal-btn");

  if (!btn) {
    console.error("Could not find #terminal-btn");
    return;
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const terminal = document.getElementById("terminal-window");

    if (!terminal) {
      console.error("Could not find #terminal-window");
      return;
    }

    terminal.classList.toggle("open");
  });
}
