//Atualiza o Resumo no final da pagina
function update() {
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

update();

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
    } else {
      stepCounter = 0;
    }

    if (stepCounter > 3) {
      stepCounter = 3;
    } else if (stepCounter < 1) {
      stepCounter = 1;
    }

    if (stepCounter == 1) {
      // mostra a div do passo 1
      steps.forEach(function (step) {
        step.classList.remove("active");
        if (step.classList.contains("step1")) {
          step.classList.add("active");
        }
      });
    } else if (stepCounter == 2) {
      steps.forEach(function (step) {
        step.classList.remove("active");
        if (step.classList.contains("step2")) {
          step.classList.add("active");
        }
      });
    } else if (stepCounter == 3) {
      steps.forEach(function (step) {
        step.classList.remove("active");
        if (step.classList.contains("step3")) {
          step.classList.add("active");
        }
      });
    }

    currentStepText.textContent = stepCounter;
  });
});
