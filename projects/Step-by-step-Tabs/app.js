//Atualiza o Resumo no final da pagina
// se for mudar para mostrar so no ulimo passo: tirar o "onChange" de cada select
// e chamar a funcao update() somente no switch case:4
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
        steps.forEach(function (step) {
          step.classList.remove("active");
          if (step.classList.contains("step2")) {
            step.classList.add("active");
          }
        });
        break;
      case 3:
        steps.forEach(function (step) {
          step.classList.remove("active");
          if (step.classList.contains("step3")) {
            step.classList.add("active");
          }
        });
        break;
      case 4:
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

const stepsTitles = document.getElementById("steps-indicator");
console.log(stepsTitles);
let eachStepTitle = stepsTitles.childNodes;
console.log(eachStepTitle);

function updateTitle(stepCounter) {
  switch (stepCounter) {
    case 0:
      break;
    case 1:
      // stepsTitles.forEach(function (stepTitle) {
      //   // stepTitle.classList.remove("blue");
      //   if (stepTitle.classList.contains("title1")) {
      //     console.log(stepTitle);
      //     stepTitle.classList.add("blue");
      //   }
      // });
      break;
    case 2:
      console.log(oi);
      break;
    case 3:
      break;
    case 4:
      break;
    default:
  }
}
