//Atualiza o Resumo no final da pagina
// se for mudar para mostrar so no ulimo passo: tirar o "onChange" de cada select
// e chamar a funcao update() somente no switch case:4
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

    if (stepCounter > 4) {
      stepCounter = 4;
    } else if (stepCounter < 0) {
      stepCounter = 0;
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
        steps.forEach(function (step) {
          step.classList.remove("active");
          if (step.classList.contains("step4")) {
            step.classList.add("active");
          }
        });
        break;
    }

    currentStepText.textContent = stepCounter;
  });
});

// usando if - pensei assim antes mas estava com muitos if- troquei para um swtich case
// if (stepCounter == 1) {
//             steps.forEach(function (step) {
//               // esconde todas as outras divs
//               step.classList.remove("active");
//               if (step.classList.contains("step1")) {
//                 // mostra a div do passo 1
//                 step.classList.add("active");
//               }
//             });
//     } else if (stepCounter == 2) {
//             steps.forEach(function (step) {
//               step.classList.remove("active");
//               if (step.classList.contains("step2")) {
//                 step.classList.add("active");
//               }
//             });
//     } else if (stepCounter == 3) {
//       steps.forEach(function (step) {
//         step.classList.remove("active");
//         if (step.classList.contains("step3")) {
//           step.classList.add("active");
//         }
//       });
//     }
