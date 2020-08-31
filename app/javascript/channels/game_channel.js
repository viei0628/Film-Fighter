import consumer from "./consumer";

const initGameCable = () => {
  const messagesContainer = document.getElementById('gameInfo');
  if (messagesContainer) {
    const id = messagesContainer.dataset.gameId;
    consumer.subscriptions.create({ channel: "GameChannel", id: id }, {
      received(data) {
        console.log(data)
        const mainbody = document.getElementById("mainbody") // main body
        if (data.winner && data.page2 && data.correct_answer) {
          Array.from(document.getElementsByClassName('btn')).forEach((button) => {
            console.log(button.innerText, data.correct_answer)
            if (button.innerText == data.correct_answer) { button.style.backgroundColor = '#50fa7b'; }
          })
          setTimeout(() => loadNext(data, mainbody), 10000);
        } else if (data.page2){
;          mainbody.innerHTML = "";
          mainbody.innerHTML = data.page2;
        } else {
          mainbody.innerHTML = "";
          mainbody.innerHTML = data;
        }
      },
    });
  }
}
const loadNext = (data, mainbody) => {
      mainbody.innerHTML = "";
      mainbody.innerHTML = data.page2;
      const host_name =  document.getElementById("host-name")
      if(host_name.innerText===data.winner_name){
        host_name.id="winner";
      } else if (player_name.innerText === data.winner_name) {
        const player_name = document.getElementById("player-name")
        player_name.id="winner";
      }
}

const startTimer = (data, mainbody) => {
  mainbody.innerHTML = "";
  mainbody.innerHTML = data.firstStart;
  setTimeout(() => loadNext(data, mainbody), 5000);
}
export { initGameCable };
