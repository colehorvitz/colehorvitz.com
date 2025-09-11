import styles from "./App.module.css";
import { useEffect } from "react";
import Console from "./components/Console";
import Experience from "./components/Experience";
import { PROJECTS } from "./constants";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function App() {
  useEffect(() => {
    document.title = "Cole Horvitz";
  }, []);

  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.introHeader}>
              <h1 className={styles.title}>cole horvitz</h1>
              <div className={styles.nav}>
                <a
                  href="https://github.com/colehorvitz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className={styles.icon} />
                </a>
                <a
                  href="https://www.linkedin.com/in/cole-horvitz-37a58a19a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className={styles.icon} />
                </a>
              </div>
            </div>
            <Console />
          </div>
          <h2>experience</h2>
          <div className={styles.projectsWrap} id="projects">
            <div className={styles.projectsGrid}>
              {PROJECTS.map((proj) => {
                return <Experience project={proj} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/cole-horvitz-37a58a19a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className={styles.icon} />
          </a>
          <a
            href="mailto:colehorvitz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className={styles.icon} />
          </a>
          <a
            href="https://github.com/colehorvitz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}
