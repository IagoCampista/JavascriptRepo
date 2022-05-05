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
