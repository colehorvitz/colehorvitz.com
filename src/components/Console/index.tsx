import styles from "./Console.module.css";
import { useState } from "react";
import Typist from "react-typist-component";

export default function Console() {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className={styles.console}>
      <div className={styles.commandLine}>
        <span className={styles.consoleMarker}>{">"}</span>
        <Typist
          startDelay={500}
          cursor={<div></div>}
          onTypingDone={() => setShowBio(true)}
        >
          whois cole
        </Typist>
      </div>
      <div
        style={{ color: showBio ? "white" : "#212121" }}
        className={styles.bio}
      >
        <p>Name: Cole Horvitz</p>
        <p>Education: Brown University</p>
        <p>Location: New York City</p>
        <p>Skills: app, software, full-stack development</p>
        <p>Contact: colehorvitz@gmail.com</p>
      </div>
    </div>
  );
}
