//terminal.js

import {navigate} from "./routing.js"

export function initTerminal() {
  const input = document.getElementById("command-input");
  const output = document.getElementById("output");

  const projects = {
    "rocket-lander": "2D rocket lander made in Rust/Bevy with manual physics.",
    "circuit-tui": "Terminal circuit simulator built with Rust and Ratatui.",
    "voice-nvim": "Voice-controlled Neovim plugin using Whisper and Ollama."
  };

  function print(text) {
    const p = document.createElement("p");
    p.textContent = text;
    output.appendChild(p);
  }

  input.addEventListener("keydown", async function (event) {
    if (event.key !== "Enter") return;

    const command = input.value.trim();
    print(`ost@ost:~$ ${command}`);
    input.value = "";

    await handleCommand(command);
  });

  async function handleCommand(command) {
    if (command === "help") {
      print("Commands: help, ls, cat <project>, open github, clear");
    } else if (command === "ls") {
      print(Object.keys(projects).join("  "));
    } else if (command.startsWith("cat ")) {
      const name = command.slice(4);
      print(projects[name] || "Project not found.");
    } else if (command === "open github") {
      print("Opening GitHub...");
      window.open("https://github.com/YOUR_USERNAME", "_blank");
    } else if (command === "clear") {
      output.innerHTML = "";
    } else if (command === "cd circuit-tui") {
      // await loadHtml("pages/circuit_tui_page.html", "app");
      navigate("circuit-tui");
    } else if (command === "cd home") {
      // await loadHtml("pages/circuit_tui_page.html", "app");
      navigate("home");
    } else {
      print(`Command not found: ${command}`);
    }
  }
}
