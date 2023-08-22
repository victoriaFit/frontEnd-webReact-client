import React, { useState } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/home.module.css";

const Questions = () => {
  const [chatMessage, setChatMessage] = useState(""); 
  const [chatResponse, setChatResponse] = useState(""); 

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
      body: JSON.stringify({ chatMessage }), 
    });

    const data = await response.json();

    if (data.success) {
      setChatResponse(data.data); 
    }
  };

  return (
    <Layout>
      <div className={styles.chat}>
        <div className={styles["chat-header"]}>Assistência Técnica Victória Fitness</div>
        <div className={styles["chat-messages"]}>
          <div className={`${styles["chat-message"]} ${styles["chat-message-bot"]}`}>
            Olá! Como posso ajudar?
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
      <section>
        <h2>Aqui está sua respostaee</h2>
        <p>{chatResponse}</p> 
      </section>
    </Layout>
  );
};

export default Questions;
