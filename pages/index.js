import React, { useState } from "react";
import Link from 'next/link';
import styles from "../styles/home.module.css";


import Home from './Home/index';
import About from './About/index';
import Services from './Services/index';
import Questions from './Questions/index';

const RecipeInfo = () => {
  const [recipe, setRecipe] = useState("");
  const [nutritionInfo, setNutritionInfo] = useState("");

  const handleRecipeChange = (event) => {
    setRecipe(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/openai/generateinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe }),
    });

    const data = await response.json();

    if (data.success) {
      setNutritionInfo(data.data);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles["header-link"]}>Início</Link>
        <Link href="/About" className={styles["header-link"]}>Sobre Nós</Link>
        <Link href="/Services" className={styles["header-link"]}>Serviços</Link>
        <Link href="/Questions" className={styles["header-link"]}>Dúvidas e FAQ</Link>
      </header>
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
            name="recipe"
            id="recipe"
            cols="30"
            rows="10"
            onChange={handleRecipeChange}
          ></textarea>
          <button className={styles["form-button"]} type="submit">
            Enviar
          </button>
        </form>
      </div>
      <section>
        <h2>Aqui está sua respostaee</h2>
        <p>{nutritionInfo}</p>
      </section>
    </div>
  );
};

export default RecipeInfo;
