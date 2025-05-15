"use strict"

const quizData = [
    {
      question: "¿Cuál es el número de Rayo McQueen?",
      options: ["95", "57", "33"],
      answer: "95"
    },
    {
      question: "¿Cómo se llama el camión que transporta a Rayo?",
      options: ["Mack", "Chuck", "Mater"],
      answer: "Mack"
    },
    {
      question: "¿Qué personaje es una grúa oxidada pero amigable?",
      options: ["Sally", "Doc Hudson", "Mate"],
      answer: "Mate"
    },
    {
      question: "¿Quién fue el mentor de Rayo McQueen?",
      options: ["Doc Hudson", "Luigi", "Ramone"],
      answer: "Doc Hudson"
    },
    {
      question: "¿Cuál es el pueblo donde termina Rayo en la primera película?",
      options: ["Radiador Springs", "Motor City", "Pistonville"],
      answer: "Radiador Springs"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionText = document.getElementById("question");
  const optionsBox = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const scoreText = document.getElementById("score");
  
  function loadQuestion() {
    const current = quizData[currentQuestion];
    questionText.textContent = current.question;
    optionsBox.innerHTML = "";
  
    current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-danger", "btn-lg", "m-3");
      btn.textContent = option;
      btn.onclick = () => selectOption(option);
      optionsBox.appendChild(btn);
    });
  }
  
  function selectOption(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) score++;
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("question-box").classList.add("d-none");
    resultBox.classList.remove("d-none");
    scoreText.textContent = `Aciertos: ${score} de ${quizData.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultBox.classList.add("d-none");
    document.getElementById("question-box").classList.remove("d-none");
    loadQuestion();
  }
  
  document.addEventListener("DOMContentLoaded", loadQuestion);
  
// parte de js que hace que los cochesitos vayan desde arriba para abajo

  function createFallingCar() {
    const car = document.createElement("img");
    car.src = "../img/cochesito.png"; // ✅ pon aquí la ruta correcta de tu imagen
    car.classList.add("car");
  
    // Posición horizontal aleatoria
    car.style.left = Math.random() * window.innerWidth + "px";
  
    // Velocidad aleatoria entre 3 y 8 segundos
    const duration = Math.random() * 5 + 3;
    car.style.animationDuration = duration + "s";
  
    document.body.appendChild(car);
  
    // Eliminar el coche después de que cae
    setTimeout(() => {
      car.remove();
    }, duration * 1000);
  }
  
  // Crear coches cada 500ms
  setInterval(createFallingCar, 500);

  // para que se vea el panel.
  document.getElementById('toggleSidebar').addEventListener('click', function() {
    document.getElementById('sidebarMenu').classList.toggle('show');
  });