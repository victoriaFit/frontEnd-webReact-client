
import React, { useState } from "react";
import styles from "../../styles/home.module.css";

const Questions = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([{ message: "Olá! Como posso ajudar?", type: "bot" }]);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleChatChange = (event) => {
    setChatMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setChatHistory([...chatHistory, { message: chatMessage, type: "user" }]);

    const response = await fetch("http://localhost:8080/openai/generateinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe: chatMessage }),
    });

    const data = await response.json();

    if (data.success) {
      setChatHistory([...chatHistory, { message: chatMessage, type: "user" }, { message: data.data, type: "bot" }]);
    }
    setChatMessage("");
  };

  return (
    <div className={styles.fixedButtonContainer}>
      {!isChatVisible && (
        <button className={styles.fixedButton} onClick={() => setIsChatVisible(!isChatVisible)}>
          <img src="https://cdn.discordapp.com/attachments/1091506792900595863/1146496985793306794/chat_1.png" alt="Chat Icon" width="24" height="24" />
        </button>
      )}
      {isChatVisible && (
        <div className={styles.fixedChatModal}>
          <div className={styles.closeChat} onClick={() => setIsChatVisible(!isChatVisible)}>X</div>
          <div className={styles.chat}>
            <div className={styles["chatHeader"]}>Assistência Técnica Victória Fitness</div>
            <div className={styles["chatMessages"]}>
              {chatHistory.map((msg, index) => (
                <div key={index} className={`${styles["chat-message"]} ${msg.type === "bot" ? styles["chatMessageBot"] : styles["chatMessageUser"]}`}>
                  {msg.message}
                </div>
              ))}
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles["formContainer"]}>
                <textarea
                  className={styles["formTextarea"]}
                  name="chatMessage"
                  id="chatMessage"
                  cols="30"
                  rows="2"
                  onChange={handleChatChange}
                  value={chatMessage}
                ></textarea>
                <button className={styles["formButton"]} type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
