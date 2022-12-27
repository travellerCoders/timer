import './App.css';
function App() {
  const box = document.querySelector("#flame_box");

  function addFlame() {
    var f = document.createElement("div");
    f.className = "flame";
    f.style.left = Math.random() * 100 + "%";
    f.style.animationDuration = Math.random() < 0.5 ? "3s" : "1.5s";
    f.onanimationend = function () {
      this.remove();
    };
    box.appendChild(f);
  }

  setInterval(function () {

    addFlame();

    var toDate = new Date();
    var tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    var diffMS = tomorrow.getTime() / 1000 - toDate.getTime() / 1000;
    var diffHr = Math.floor(diffMS / 3600);
    diffMS = diffMS - diffHr * 3600;
    var diffMi = Math.floor(diffMS / 60);
    diffMS = diffMS - diffMi * 60;
    var diffS = Math.floor(diffMS);
    var result = diffHr < 10 ? "0" + diffHr : diffHr;
    result += ":" + (diffMi < 10 ? "0" + diffMi : diffMi);
    result += ":" + (diffS < 10 ? "0" + diffS : diffS);
    result += ":" + Math.round(Math.random() * 89 + 10);
    document.querySelector(
        "#time"
    ).innerHTML = `<span>TIME REMAINING</span>${result}<span>FOCUS</span>`;
  }, 1000 / 30);


  return (
      <div id='bomb'>
        <div id='flame_box'></div>
        <div id='time'></div>
      </div>

  );
}
export default App;
