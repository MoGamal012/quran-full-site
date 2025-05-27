let quran, tafsir;
async function loadData() {
  quran = await fetch("quran.json").then(r => r.json());
  tafsir = await fetch("tafsir.json").then(r => r.json());
  const list = document.getElementById("surah-list");
  quran.forEach((surah, i) => {
    const btn = document.createElement("button");
    btn.innerText = surah.name;
    btn.className = "button";
    btn.onclick = () => showSurah(i);
    list.appendChild(btn);
  });
}
function showSurah(i) {
  const ayahsDiv = document.getElementById("ayahs");
  ayahsDiv.innerHTML = "";
  quran[i].ayahs.forEach((ayah, j) => {
    const span = document.createElement("span");
    span.className = "ayah";
    span.innerText = ayah;
    span.onclick = () => showTafsir(i, j);
    ayahsDiv.appendChild(span);
  });
}
function showTafsir(surahIndex, ayahIndex) {
  const tafsirBox = document.getElementById("tafsir");
  tafsirBox.style.display = "block";
  tafsirBox.innerText = tafsir[surahIndex].ayahs[ayahIndex];
}
function showAyahOfDay() {
  alert("آية اليوم: وَقُلْ رَبِّ زِدْنِي عِلْمًا");
}
function showDuaOfDay() {
  alert("دعاء اليوم: اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي");
}
loadData();