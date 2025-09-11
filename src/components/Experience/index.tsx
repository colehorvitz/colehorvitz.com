import styles from "./Experience.module.css";
import type { Project } from "../../types";

export default function Experience(props: { project: Project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imgWrap}>
        <img src={props.project.img} alt={props.project.name} />
      </div>
      <div className={styles.info}>
        {props.project.url != null ? (
          <a href={props.project.url} target="_blank" rel="noopener noreferrer">
            <h3>{props.project.name}</h3>
          </a>
        ) : (
          <h3>{props.project.name}</h3>
        )}
        <p>{props.project.desc}</p>
        <div className={styles.tagWrap}>
          {props.project.tags.map((tag) => (
            <div className={styles.tag}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
