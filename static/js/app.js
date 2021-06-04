function ScrollToTop() {
  document.getElementById("earth").scrollIntoView({
    behavior: 'smooth'
  });
}

q_a = [
    {
      question: "1",
      answer: "he comido"
    },
    {
      question: "2",
      answer: "voy a comer"
    },
    {
      question: "3",
      answer: "como"
    },
    {
      question: "4",
      answer: "me gusta comer las patatas"
    },
    {
      question: "5",
      answer: "he comido una pizza l las once y media de la semana pasada"
    },
    {
      question: "6",
      answer: "les gusta jugar videojuegos todo el tiempo"
    }
  ]
  
  // Show current question
  //document.getElementById("question").innerHTML = data[0].question
  
  // Check answer
  function check_answer_1() {
  
    var userAnswer = document.getElementById("user_answer").value.toLowerCase();
    var result = document.getElementById("result_text")
    var input = document.getElementById("user_answer")
  
    if (userAnswer == q_a[0].answer) {
        input.style.border = "solid 4px rgb(168, 227, 173)"
        input.style.color = "rgb(168, 227, 173)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Correct!😜"
        //result.style.display = "block"
    } else {
        input.style.border = "solid 4px rgb(237, 122, 114)"
        input.style.color = "rgb(237, 122, 114)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Incorrect😯"
        //result.style.display = "block"
    }
  
  }

  function check_answer_2() {
  
    var userAnswer = document.getElementById("user_answer").value.toLowerCase();
    var result = document.getElementById("result_text")
    var input = document.getElementById("user_answer")
  
    if (userAnswer == q_a[1].answer) {
        input.style.border = "solid 4px rgb(168, 227, 173)"
        input.style.color = "rgb(168, 227, 173)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Correct!😜"
        //result.style.display = "block"
    } else {
        input.style.border = "solid 4px rgb(237, 122, 114)"
        input.style.color = "rgb(237, 122, 114)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Incorrect😯"
        //result.style.display = "block"
    }
  }

  function check_answer_3() {
  
    var userAnswer = document.getElementById("user_answer").value.toLowerCase();
    var result = document.getElementById("result_text")
    var input = document.getElementById("user_answer")
  
    if (userAnswer == q_a[2].answer) {
        input.style.border = "solid 4px rgb(168, 227, 173)"
        input.style.color = "rgb(168, 227, 173)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Correct!😜"
        //result.style.display = "block"
    } else {
        input.style.border = "solid 4px rgb(237, 122, 114)"
        input.style.color = "rgb(237, 122, 114)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Incorrect😯"
        //result.style.display = "block"
    }
  }

  function check_answer_4() {
  
    var userAnswer = document.getElementById("user_answer").value.toLowerCase();
    var result = document.getElementById("result_text")
    var input = document.getElementById("user_answer")
  
    if (userAnswer == q_a[3].answer) {
        input.style.border = "solid 4px rgb(168, 227, 173)"
        input.style.color = "rgb(168, 227, 173)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Correct!😜"
        //result.style.display = "block"
    } else {
        input.style.border = "solid 4px rgb(237, 122, 114)"
        input.style.color = "rgb(237, 122, 114)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Incorrect😯"
        //result.style.display = "block"
    }
  }

  function check_answer_5() {
  
    var userAnswer = document.getElementById("user_answer").value.toLowerCase();
    var result = document.getElementById("result_text")
    var input = document.getElementById("user_answer")
  
    if (userAnswer == q_a[4].answer) {
        input.style.border = "solid 4px rgb(168, 227, 173)"
        input.style.color = "rgb(168, 227, 173)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Correct!😜"
        //result.style.display = "block"
    } else {
        input.style.border = "solid 4px rgb(237, 122, 114)"
        input.style.color = "rgb(237, 122, 114)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Incorrect😯"
        //result.style.display = "block"
    }
  }

  function check_answer_6() {
  
    var userAnswer = document.getElementById("user_answer").value.toLowerCase();
    var result = document.getElementById("result_text")
    var input = document.getElementById("user_answer")
  
    if (userAnswer == q_a[5].answer) {
        input.style.border = "solid 4px rgb(168, 227, 173)"
        input.style.color = "rgb(168, 227, 173)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Correct!😜"
        //result.style.display = "block"
    } else {
        input.style.border = "solid 4px rgb(237, 122, 114)"
        input.style.color = "rgb(237, 122, 114)"
        input.style.backgroundColor = "var(--main-bg-color)"
        input.style.borderRadius = '.5em'
        result.innerHTML = "Incorrect😯"
        //result.style.display = "block"
    }
  }