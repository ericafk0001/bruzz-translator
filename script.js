document.addEventListener("DOMContentLoaded", (event) => {
  console.log("page loaded");

  const inputText = document.getElementById("input-text");
  const outputText = document.getElementById("output-text");

  const huzz = "uzz";

  inputText.addEventListener("input", () => {
    const words = inputText.value.split(" ");

    const newWords = words.map((word) => {
      if (word.length > 2) {
        // Remove the last 2 characters and append "uzz"
        return word.slice(0, -1) + huzz;
      } else {
        return word;
      }
    });
    outputText.value = newWords.join(" ");
  });
});
