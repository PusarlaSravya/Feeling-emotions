const moodSelector = document.getElementById("moodSelector");

const moodColors = {
  happy: "#ffe066",
  sad: "#74c0fc",
  energetic: "#ff6b6b",
  calm: "#a5d8ff"
};

moodSelector.addEventListener("change", () => {
  const selectedMood = moodSelector.value;
  document.body.style.backgroundColor = moodColors[selectedMood] || "#ffffff";
});
