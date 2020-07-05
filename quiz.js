var question = [
  {
    q: "who is the founder of under armour ?",
    opt: ["justin beiber", "kevin plank", "dwayne johnson", "andy hubbard"],
    ans: "kevin plank",
  },
  {
    q: "What's the biggest animal in the world?",
    opt: ["whale shark", "the african elephant", "the blue whale", "ostrich"],
    ans: "the blue whale",
  },
  {
    q: "What is the capital of Iceland?",
    opt: ["Reykjavík", "tirana", "zagreb", "budapest"],
    ans: "Reykjavík",
  },
  {
    q: "Who painted the Mona Lisa?",
    opt: ["andy warhol", "pablo picasso", "mercury", "leonardo da vinci"],
    ans: "leonardo da vinci",
  },
  {
    q: "What is the largest country in the world?",
    opt: ["spain", "russia", "china", "netherland"],
    ans: "russia",
  },
  {
    q: "How many valves does the heart have?",
    opt: ["one", "two", "three", "four"],
    ans: "four",
  },
  {
    q: "What's a baby rabbit called?",
    opt: ["chick", "rabbin", "A kit", "puppy"],
    ans: "A kit",
  },
];
var highscore = [{ score: "" }];
var no = 0;
var score = 0;

window.addEventListener("load", preload());
window.addEventListener("load", () => {
  highscore[0].score = JSON.parse(localStorage.getItem("highest score"))});
});

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
  scoreButton.addEventListener("click", () => {
    Header.innerHTML = "";
    header.classList.add("hsswipe");
    body.style.height = "1013px";
    setTimeout(highscoreslide, 550);
  });

  Header.appendChild(Hi);
  Hi.appendChild(icon);

  Body.appendChild(Butt);
  Butt.appendChild(startButton);
  Butt.appendChild(scoreButton);
}
home();
function highscoreslide() {
  Butt = document.getElementById("butt");
  Butt.remove();
  highb1 = document.createElement("input");
  highb1.type = "button";
  highb1.classList.add("high1");

  highb2 = document.createElement("input");
  highb2.type = "button";
  highb2.classList.add("high2");

  highscorediv = document.createElement("div");
  highscorediv.classList.add("highscorediv");

  hightext = document.createElement("h1");

  hightext.textContent = "High Score :  " + highscore[0].score;
  hightext.classList.add("hightext");

  homeButton = document.createElement("input");
  homeButton.id = "home";
  homeButton.type = "button";
  homeButton.value = "home";
  homeButton.classList.add("hhomeb");

  Body.appendChild(highb1);
  Body.appendChild(highb2);
  Body.appendChild(highscorediv);
  highscorediv.appendChild(hightext);
  Body.appendChild(homeButton);
  homeButton.addEventListener("click", () => {
    highb1.style.animationName = "high1re";
    highb2.style.animationName = "high2re";

    hightext.remove();
    homeButton.remove();
    setTimeout(remhighswipe, 940);
  });
}
function remhighswipe() {
  highb1.remove();
  highb2.remove();

  header.classList.remove("hsswipe");
  body.style.height = "";

  home();
}
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

  var sec = 10;
  var time = setInterval(timer, 1000);
  function timer() {
    Timer.textContent = "00" + ":" + sec;
    sec--;

    if (sec == -1) {
      clearInterval(time);
      correctAns.style.display = "list-item";
      qp.style.display = "none";
      nextButton.style.display = "";
      optionA.disabled = true;
      optionB.disabled = true;
      optionC.disabled = true;
      optionD.disabled = true;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
  }

  Timer.classList.add("timer");

  qDiv = document.createElement("div");
  qDiv.id = "qdiv";

  Question = document.createElement("div");
  Question.classList.add("question");
  qp = document.createElement("p");
  qp.innerHTML = question[no].q;

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
  nextButton.style.display = "none";

  nextButton.addEventListener("click", quiz2);

  Options = document.createElement("div");
  Options.id = "options";
  Options.classList.add("options");

  optionA = document.createElement("input");
  optionA.type = "button";
  optionA.value = question[no].opt[0];
  optionA.classList.add("optionsb");

  optionB = document.createElement("input");
  optionB.type = "button";
  optionB.value = question[no].opt[1];
  optionB.classList.add("optionsb");

  ansP.textContent = question[no].ans;

  optionC = document.createElement("input");
  optionC.type = "button";
  optionC.value = question[no].opt[2];
  optionC.classList.add("optionsb");
  optionC.setAttribute("class", "optionsb");

  optionD = document.createElement("input");
  optionD.type = "button";
  optionD.value = question[no].opt[3];
  optionD.classList.add("optionsb");

  homeButton = document.createElement("input");
  homeButton.id = "home";
  homeButton.type = "button";
  homeButton.value = "home";
  homeButton.classList.add("homeb");

  var ans = question[no].ans;

  Options.addEventListener("click", (e) => {
    clearInterval(time);
    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
    optionD.disabled = true;

    nextButton.style.display = "";

    if (e.target.value == ans) {
      const selected = e.target;
      selected.classList.add("green");
      score++;
    } else {
      const selected = e.target;
      selected.classList.add("red");

      correctAns.style.display = "list-item";
      qp.style.display = "none";
    }
  });

  function quiz2() {
    function gameover() {
      Body.removeChild(qDiv);
      Body.removeChild(Options);
      Body.appendChild(homeButton);
      homeButton.addEventListener("click", () => {
        Header.style.height = "";
        Body.style.height = "";
        Body.removeChild(homeButton);
        overb.remove();
        no = 0;

        home();
      });
      Header.removeChild(Timer);
      Header.style.height = "10px";
      Body.style.height = "813px";

      overbody = document.createElement("div");
      overbody.classList.add("overpage");
      overb = document.createElement("div");
      overb.classList.add("overb");
      gameovertext = document.createElement("h1");
      gameovertext.classList.add("gamet");
      gameovertext.textContent = "Game Over";
      scoretext = document.createElement("h2");
      scoretext.classList.add("scoret");
      scoretext.textContent = "score : " + score;
      if (score > highscore[0].score) {
        localStorage.setItem("highest score", score);
        console.log(localStorage);
        highscore[0].score = JSON.parse(localStorage.getItem("highest score"));
        console.log(highscore[0].score);
      }

      Body.appendChild(overbody);
      overbody.appendChild(overb);
      overb.appendChild(gameovertext);
      overb.appendChild(scoretext);
    }

    //quiz2
    if (no < question.length - 1) {
      clearInterval(time);

      var sec = 10;
      var time = setInterval(timer, 1000);
      function timer() {
        Timer.textContent = "00" + ":" + sec;
        sec--;

        if (sec == -1) {
          clearInterval(time);
          correctAns.style.display = "list-item";
          qp.style.display = "none";
          nextButton.style.display = "";
          optionA.disabled = true;
          optionB.disabled = true;
          optionC.disabled = true;
          optionD.disabled = true;
        }
        if (sec < 10) {
          sec = "0" + sec;
        }
      }

      Body.appendChild(Options);
      homeButton.addEventListener("click", () => {
        clearInterval(time);
        no = 0;
        score = 0;
      });

      nextButton.style.display = "none";

      correctAns.style.display = "none";
      qp.style.display = "";
      Options.addEventListener("click", () => {
        clearInterval(time);
      });
      optionA.classList.remove("red", "green");
      optionB.classList.remove("red", "green");
      optionC.classList.remove("red", "green");
      optionD.classList.remove("red", "green");

      optionA.disabled = !true;
      optionB.disabled = !true;
      optionC.disabled = !true;
      optionD.disabled = !true;

      no++;

      qp.innerHTML = question[no].q;
      optionA.value = question[no].opt[0];
      optionB.value = question[no].opt[1];
      optionC.value = question[no].opt[2];
      optionD.value = question[no].opt[3];
      ansP.textContent = question[no].ans;
      ans = question[no].ans;
    } else {
      score;
      gameover();
    }
  }

  homeButton.addEventListener("click", (e) => {
    if (e.target.classList == "homeb") {
      clearInterval(time);
      header.classList.remove("hswipe");
      body.classList.remove("bswipe");
      document.getElementById("timer").remove();
      document.getElementById("next").remove();
      document.getElementById("qdiv").remove();
      document.getElementById("options").remove();
      document.getElementById("home").remove();
      no = 0;
      score = 0;
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
