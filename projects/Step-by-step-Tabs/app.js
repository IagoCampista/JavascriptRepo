//Atualiza o Resumo no último passo
function updateSummary() {
  // size
  const size = document.getElementById("size");
  let selectedSizeText = size.options[size.selectedIndex].text;

  const sizePreview = document.getElementById("selected-size");
  sizePreview.textContent = selectedSizeText;

  //paper type
  const paperType = document.getElementById("paper-type");
  let selectedPaperTypeText = paperType.options[paperType.selectedIndex].text;

  const paperTypePreview = document.getElementById("selected-paper-type");
  paperTypePreview.textContent = selectedPaperTypeText;

  //cover color
  const coverColor = document.getElementById("cover-color");
  let selectedCoverColorText =
    coverColor.options[coverColor.selectedIndex].text;

  const coverColorPreview = document.getElementById("selected-cover-color");
  coverColorPreview.textContent = selectedCoverColorText;
}

// Cria controle de Etapas
let stepCounter = 0;
const currentStepText = document.getElementById("currentStepText");

//selecionas as divs dos passos
const steps = document.querySelectorAll(".steps");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const buttonType = e.currentTarget.classList;
    if (buttonType.contains("previous")) {
      stepCounter--;
    } else if (buttonType.contains("next")) {
      stepCounter++;
    }

    switch (stepCounter) {
      case 0:
        updateTitle(stepCounter);

        steps.forEach(function (step) {
          // esconde todas as outras divs
          step.classList.remove("active");
          if (step.classList.contains("step0")) {
            // mostra a div do passo 1
            step.classList.add("active");
          }
        });
        break;
      case 1:
        updateTitle(stepCounter);

        steps.forEach(function (step) {
          // esconde todas as outras divs
          step.classList.remove("active");
          if (step.classList.contains("step1")) {
            // mostra a div do passo 1
            step.classList.add("active");
          }
        });
        break;
      case 2:
        updateTitle(stepCounter);

        steps.forEach(function (step) {
          step.classList.remove("active");
          if (step.classList.contains("step2")) {
            step.classList.add("active");
          }
        });
        break;
      case 3:
        updateTitle(stepCounter);

        steps.forEach(function (step) {
          step.classList.remove("active");
          if (step.classList.contains("step3")) {
            step.classList.add("active");
          }
        });
        break;
      case 4:
        updateTitle(stepCounter);

        updateSummary();

        steps.forEach(function (step) {
          step.classList.remove("active");
          if (step.classList.contains("step4")) {
            step.classList.add("active");
          }
        });
        break;
      default:
        // nao deixa o step counter sair do range [0-4]
        if (stepCounter < 1) stepCounter = 0;
        else if (stepCounter > 4) stepCounter = 4;
    }

    currentStepText.textContent = stepCounter;
  });
});

const stepsTitles = document.querySelectorAll(".stepTitle");

console.log(document.querySelector(".btn.previous"));
console.log(buttons);

function updateTitle(stepCounter) {
  switch (stepCounter) {
    case 0:
      stepsTitles.forEach(function (step) {
        step.classList.remove("blue");
      });
      // esconde o botao de voltar se estiver no primeiro passo
      document.querySelector(".btn.previous").classList.add("content");
      break;
    case 1:
      document
        .querySelector(".stepTitle:nth-child(2)")
        .classList.remove("blue");
      document.querySelector(".stepTitle:nth-child(1)").classList.add("blue");

      // mostra novamente o botao de voltar neste passo
      document.querySelector(".btn.previous").classList.remove("content");
      break;
    case 2:
      document
        .querySelector(".stepTitle:nth-child(3)")
        .classList.remove("blue");
      document
        .querySelector(".stepTitle:nth-child(1)")
        .classList.remove("blue");
      document.querySelector(".stepTitle:nth-child(2)").classList.add("blue");
      break;
    case 3:
      document
        .querySelector(".stepTitle:nth-child(2)")
        .classList.remove("blue");
      document
        .querySelector(".stepTitle:nth-child(4)")
        .classList.remove("blue");
      document.querySelector(".stepTitle:nth-child(3)").classList.add("blue");
      break;
    case 4:
      document
        .querySelector(".stepTitle:nth-child(3)")
        .classList.remove("blue");
      document.querySelector(".stepTitle:nth-child(4)").classList.add("blue");
      break;
    default:
  }
}

// updateTitle usando forEach em todas as ocasiões
// usei assim copiando do video mas do modo acima com  "nth-child" fica melhor na minha opinião

// function updateTitle(stepCounter) {
//   switch (stepCounter) {
//     case 0:
//       stepsTitles.forEach(function (step) {
//         step.classList.remove("blue");
//       });
//       // esconde o botao de voltar se estiver no primeiro passo
//       document.querySelector(".btn.previous").classList.add("content");
//       break;
//     case 1:
//       // mostra novamente o botao de voltar neste passo
//       document.querySelector(".btn.previous").classList.remove("content");

//       //muda as cores do indicador
//       stepsTitles.forEach(function (step) {
//         step.classList.remove("blue");
//         if (step.classList.contains("title1")) {
//           step.classList.add("blue");
//         }
//       });
//       break;
//     case 2:
//       stepsTitles.forEach(function (step) {
//         step.classList.remove("blue");
//         if (step.classList.contains("title2")) {
//           step.classList.add("blue");
//         }
//       });
//       break;
//     case 3:
//       stepsTitles.forEach(function (step) {
//         step.classList.remove("blue");
//         if (step.classList.contains("title3")) {
//           step.classList.add("blue");
//         }
//       });
//       break;
//     case 4:
//       stepsTitles.forEach(function (step) {
//         step.classList.remove("blue");
//         if (step.classList.contains("title4")) {
//           step.classList.add("blue");
//         }
//       });
//       break;
//     default:
//   }
// }
