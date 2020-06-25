window.addEventListener("load", preload());

function preload() {
  load = document.getElementById("loader");
  load.classList.add("loaded");

  function move() {
    line = document.querySelector(".line");
    pos = 0;
    moving = setInterval(frame, 0.9);
    function frame() {
      if (pos == 900) {
        clearInterval(moving);
      } else {
        pos++;
        line.style.marginTop = pos + "px";
      }
    }
  }
  move();
}

function home() {
  Header = document.getElementById("header");
  Body = document.getElementById("body");

  /*header.style.height = "270px";
  body.style.height = "397px";*/

  Hi = document.createElement("h1");
  Hi.textContent = "QUIZ GENIUS";
  icon = document.createElement("img");
  icon.src = "think.png";

  const Butt = document.createElement("div");
  Butt.id = "butt";
  Butt.classList.add("butt");

  startButton = document.createElement("input");
  startButton.type = "button";
  startButton.value = "start quiz";
  startButton.classList.add("buttb");
  startButton.addEventListener("click", (e) => {
    if (e.target.classList == "buttb") {
      swipe();
      setTimeout(quiz1, 550);
    }
  });

  scoreButton = document.createElement("input");
  scoreButton.type = "button";
  scoreButton.value = "high score";
  scoreButton.classList.add("buttb");

  Header.appendChild(Hi);
  Hi.appendChild(icon);

  Body.appendChild(Butt);
  Butt.appendChild(startButton);
  Butt.appendChild(scoreButton);
}
home();
function swipe() {
  Header.innerHTML = "";

  header.classList.add("hswipe");
  body.classList.add("bswipe");
  Butt = document.getElementById("butt");
  Butt.remove();
}

function quiz1() {
  Header = document.getElementById("header");
  Body = document.getElementById("body");
  snhButton = document.getElementById("butt");

  Timer = document.createElement("div");
  Timer.id = "timer";
  Timer.innerHTML = "00:10";
  Timer.classList.add("timer");

  qDiv = document.createElement("div");
  qDiv.id = "qdiv";

  Question = document.createElement("div");
  Question.classList.add("question");
  qp = document.createElement("p");
  qp.innerHTML = "who is the founder of under armour ?";

  correctAns = document.createElement("div");
  Ans = document.createElement("h4");

  Ans.textContent = "correct answer is";
  correctAns.classList.add("question", "correctans");
  ansP = document.createElement("h1");
  ansP.classList.add("answer");

  nextButton = document.createElement("input");
  nextButton.id = "next";
  nextButton.type = "button";
  nextButton.value = "next";
  nextButton.classList.add("qdivb");

  Options = document.createElement("div");
  Options.id = "options";
  Options.classList.add("options");

  optionA = document.createElement("input");
  optionA.type = "button";
  optionA.value = "justin beiber";
  optionA.classList.add("optionsb");

  optionB = document.createElement("input");
  optionB.type = "button";
  optionB.value = "kevin plank";
  optionB.classList.add("optionsb");

  optionB.id = "correct";
  const corr = optionB;
  ansP.textContent = corr.value;

  optionC = document.createElement("input");
  optionC.type = "button";
  optionC.value = "dwayne johnson";
  optionC.classList.add("optionsb");
  optionC.setAttribute("class", "optionsb");

  optionD = document.createElement("input");
  optionD.type = "button";
  optionD.value = "andy hubbard";
  optionD.classList.add("optionsb");

  homeButton = document.createElement("input");
  homeButton.id = "home";
  homeButton.type = "button";
  homeButton.value = "home";
  homeButton.classList.add("homeb");

  Options.addEventListener("click", (e) => {
    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;
    if (e.target.id == "correct") {
      e.target.style.color = "green";
    } else {
      e.target.style.color = "red";

      correctAns.style.display = "list-item";
      qp.style.display = "none";
    }
  });

  homeButton.addEventListener("click", (e) => {
    if (e.target.classList == "homeb") {
      header.classList.remove("hswipe");
      body.classList.remove("bswipe");
      document.getElementById("timer").remove();
      document.getElementById("next").remove();
      document.getElementById("qdiv").remove();
      document.getElementById("options").remove();
      document.getElementById("home").remove();

      home();
    }
  });

  Body.appendChild(qDiv);
  Body.appendChild(Options);
  Body.appendChild(homeButton);

  Options.appendChild(optionA);
  Options.appendChild(optionB);
  Options.appendChild(optionC);
  Options.appendChild(optionD);
  qDiv.appendChild(nextButton);
  qDiv.appendChild(Question);
  qDiv.appendChild(correctAns);
  correctAns.appendChild(Ans);
  correctAns.appendChild(ansP);
  Question.appendChild(qp);
  Header.appendChild(Timer);
}
