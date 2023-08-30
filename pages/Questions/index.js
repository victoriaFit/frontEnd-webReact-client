
import React, { useState } from "react";
import styles from "../../styles/home.module.css";

const Questions = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleChatChange = (event) => {
    setChatMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/openai/generateinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe: chatMessage }),
    });

    const data = await response.json();

    if (data.success) {
      setChatResponse(data.data);
    }
  };

  return (
    <div className={styles.fixedButtonContainer}>
      <button className={styles.fixedButton} onClick={() => setIsChatVisible(!isChatVisible)}>
        <img src="https://cdn.discordapp.com/attachments/1091506792900595863/1146488941617369180/chat.png" alt="Chat Icon" width="24" height="24" />
      </button>

      {isChatVisible && (
        <div className={styles.fixedChatModal}>
          <div className={styles.chat}>
            <div className={styles["chat-header"]}>Assistência Técnica Victória Fitness</div>
            <div className={styles["chat-messages"]}>
              <div className={`${styles["chat-message"]} ${styles["chat-message-bot"]}`}>
                Olá! Como posso ajudar?
              </div>
              <div className={`${styles["chat-message"]} ${styles["chat-message-bot"]}`}>
                {chatResponse}
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles["form-header"]}>Tire suas dúvidas</div>
              <div className={styles["form-label"]}>Digite sua pergunta:</div>
              <textarea
                className={styles["form-textarea"]}
                name="chatMessage"
                id="chatMessage"
                cols="30"
                rows="10"
                onChange={handleChatChange}
              ></textarea>
              <button className={styles["form-button"]} type="submit">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;