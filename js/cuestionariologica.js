"use strict"; 
//  quiz: cada objeto contiene una pregunta, sus opciones y la respuesta correcta
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

// Variables para rastrear la pregunta actual y la puntuación del jugador
let currentQuestion = 0;
let score = 0;

// Obtener elementos del DOM
const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");

// Función para cargar la pregunta actual y sus opciones en pantalla
function loadQuestion() {
  const current = quizData[currentQuestion]; // Obtener la pregunta actual
  questionText.textContent = current.question; // Mostrar el texto de la pregunta
  optionsBox.innerHTML = ""; // Limpiar opciones anteriores

  // Crear un botón para cada opción de respuesta
  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-danger", "btn-lg", "m-3");
    btn.textContent = option;
    btn.onclick = () => selectOption(option); // Asignar evento al hacer clic
    optionsBox.appendChild(btn); // Agregar botón al contenedor
  });
}

// Función que se ejecuta al seleccionar una opción
function selectOption(selected) {
  const correct = quizData[currentQuestion].answer; // Respuesta correcta
  if (selected === correct) score++; // Aumentar puntuación si es correcta

  currentQuestion++; // Avanzar a la siguiente pregunta

  // Si quedan preguntas, cargarlas; si no, mostrar resultado
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Función para mostrar el resultado final al terminar el quiz
function showResult() {
  document.getElementById("question-box").classList.add("d-none"); // Ocultar preguntas
  resultBox.classList.remove("d-none"); // Mostrar resultado final
  scoreText.textContent = `Aciertos: ${score} de ${quizData.length}`; // Mostrar puntuación
}

// Reiniciar el quiz desde el principio
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("d-none");
  document.getElementById("question-box").classList.remove("d-none");
  loadQuestion(); // Volver a cargar la primera pregunta
}

// Iniciar el quiz automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", loadQuestion);

/////////////////////////////////////////////////////////
// ANIMACIÓN: Coches cayendo desde la parte superior
/////////////////////////////////////////////////////////

// Crear un coche animado que cae desde arriba
function createFallingCar() {
  const car = document.createElement("img");
  car.src = "../img/cochesito.png"; // Ruta de la imagen del coche
  car.classList.add("car");

  // Posición horizontal aleatoria en la ventana
  car.style.left = Math.random() * window.innerWidth + "px";

  // Duración de la animación entre 3 y 8 segundos
  const duration = Math.random() * 5 + 3;
  car.style.animationDuration = duration + "s";

  // Agregar coche al DOM
  document.body.appendChild(car);

  // Eliminar el coche después de que termina su animación
  setTimeout(() => {
    car.remove();
  }, duration * 1000);
}

// Crear un nuevo coche cada 1000 ms (1 segundo)
setInterval(createFallingCar, 1000);

/////////////////////////////////////////////////////////
// BOTÓN PARA MOSTRAR OCULTAR EL PANEL (SIDEBAR)
/////////////////////////////////////////////////////////

// Mostrar u ocultar el menú lateral al hacer clic
document.getElementById('toggleSidebar').addEventListener('click', function() {
  document.getElementById('sidebarMenu').classList.toggle('show');
});

// Configurar botón del sidebar con sonido de McQueen
function setupSidebarToggle() {
  const toggleButton = document.getElementById('toggleSidebar');
  const audio = document.getElementById('mcqueenaudio'); // Sonido
  const sidebar = document.getElementById('sidebar'); // Panel lateral

  // Evento al hacer clic: reproducir sonido y mostrar/ocultar sidebar
  toggleButton.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
    sidebar.classList.toggle('visible');
  });
}

// Inicializar el sidebar al cargar la página
document.addEventListener('DOMContentLoaded', setupSidebarToggle);
