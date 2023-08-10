import { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  );
}

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
    <div className="container">
      <div className="chat">
        <div className="chat-header">Assistência Técnica Victória Fitness</div>
        <div className="chat-messages">
          <div className="chat-message chat-message-bot">
            Olá! Como posso ajudar?
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-header">Tire suas dúvidas</div>
          <div className="form-label">Digite sua pergunta:</div>
          <textarea
            className="form-textarea"
            name="recipe"
            id="recipe"
            cols="30"
            rows="10"
            onChange={handleRecipeChange}
          ></textarea>
          <button className="form-button" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <section>
        <h2>Aqui está sua resposta</h2>
        <p>{nutritionInfo}</p>
      </section>
    </div>
  );
};

export default RecipeInfo;