import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    name: "MediCircle",
    desc: "Driving down prescription drug costs by reclaiming unused medications.",
    tags: ["full-stack", "infra", "compliance"],
    img: "icons/medicircle-icon.png",
    url: "https://medicirclerx.com/",
    thubmnailBaseColor: "#e8f2ff",
  },
  {
    name: "Google Chrome",
    desc: "Developed features for Google Chrome’s WebUI team as a software engineer.",
    tags: ["polymer", "css", "typescript", "html"],
    img: "icons/chrome-icon.png",
    url: "https://chromium-review.googlesource.com/q/owner:colehorvitz@chromium.org",
    thubmnailBaseColor: "#f8d6d2",
  },
  {
    name: "Google Assistant",
    desc: "Developed features for Assistant and Android Auto as a Google intern.",
    tags: ["java", "android"],
    img: "icons/google-icon.webp",
    url: "https://assistant.google.com/",
    thubmnailBaseColor: "#d2f8e2",
  },
  {
    name: "Brown University Bear Dens",
    desc: "A web application that has helped over 4000 Brown students discover on-campus housing.",
    tags: ["react", "css", "sparql"],
    img: "icons/brown-icon.png",
    url: "https://www.brownbeardens.com",
    thubmnailBaseColor: "#fff4c2",
  },
];
