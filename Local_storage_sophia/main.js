const addButton = document.getElementById("add-button");
    const scoreTable = document.getElementById("score-table");

    addButton.addEventListener("click", addScore);

    // Récupérer les scores à partir du localStorage
    const scores = JSON.parse(localStorage.getItem("scores")) || [];

    // Afficher les scores existants
    scores.forEach(score => {
      const { pseudo, scoreValue } = score;
      addScoreToTable(pseudo, scoreValue);
    });

    function addScore() {
      const pseudoInput = document.getElementById("pseudo-input");
      const scoreInput = document.getElementById("score-input");
      const pseudo = pseudoInput.value;
      const score = scoreInput.value;

      const scoreObject = { pseudo, scoreValue: score };

      // Ajouter le score à la liste des scores
      scores.push(scoreObject);

      // Sauvegarder les scores dans le localStorage
      localStorage.setItem("scores", JSON.stringify(scores));

      // Ajouter le score au tableau
      addScoreToTable(pseudo, score);

      pseudoInput.value = "";
      scoreInput.value = "";
    }

    function addScoreToTable(pseudo, score) {
      const row = document.createElement("tr");
      const pseudoCell = document.createElement("td");
      const scoreCell = document.createElement("td");

      pseudoCell.textContent = pseudo;
      scoreCell.textContent = score;

      row.appendChild(pseudoCell);
      row.appendChild(scoreCell);
      scoreTable.appendChild(row);
    }