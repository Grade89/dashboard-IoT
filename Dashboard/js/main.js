var control;
let salaTvStatus;
let salaLampStatus;
// Function to change image and update control
function changeModeLamp() {
const salaLamp = document.getElementById("salaLamp");
  if (salaLamp.src.includes("lamp_ON")) {
    lamp_OFF();
    salaLamp.src = "img/lamp/lamp_OFF.png";
  } else {
    lamp_ON();
    salaLamp.src = "img/lamp/lamp_ON.png";
  }
}
function changeModeTv() {
const salaTv = document.getElementById("salaTv");
  if (salaTv.src.includes("Tv_OFF")) {
    Tv_ON();
    salaTv.src = "img/tv/Tv_ON.png";
  } else {
    Tv_OFF();
    salaTv.src = "img/tv/Tv_OFF.png";
  }
}

function notificationLamp(){
    const liveToastBtnLamp = document.getElementById('liveToastBtnLamp')
    const liveToastLamp = document.getElementById('liveToastLamp')

    if (liveToastBtnLamp) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToastLamp)
      liveToastBtnLamp.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
}

function notificationTv(){
    const liveToastBtnTv = document.getElementById('liveToastBtnTv')
    const liveToastTv = document.getElementById('liveToastTv')

    if (liveToastBtnTv) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToastTv)
      liveToastBtnTv.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
}


//Settings

//firebase.database().ref("Sala_Principal/TvPrincipal/estado").on("value", snapshot => {
//      control = snapshot.val();
//    });
//Sala Principal - Tv Principal Estado
firebase.database().ref("Sala_Principal/TvPrincipal/estado").on("value", snapshot => {
         salaTvStatus = snapshot.val();
  console.log("Estado changed to:", salaTvStatus);
        if (salaTvStatus == "LIGADA") {
          // Turn on TV icon in the UI
          const salaTv = document.getElementById("salaTv");
                  salaTv.src = "img/tv/Tv_ON.png";
        } else if (salaTvStatus == "DESLIGADA") {
          // Turn off TV icon in the UI
           const salaTv = document.getElementById("salaTv");
                  salaTv.src = "img/tv/Tv_OFF.png";
        } else {
        }
});


    function lamp_ON() {
      firebase.database().ref("Sala_Principal/lampadaPrincipal").set({
        estado: "LIGADA"
      });
    }
    function lamp_OFF() {
      firebase.database().ref("Sala_Principal/lampadaPrincipal").set({
        estado: "DESLIGADA"
      });
    }

        function Tv_ON() {
          firebase.database().ref("Sala_Principal/TvPrincipal").set({
            estado: "LIGADA"
          });
        }
        function Tv_OFF() {
          firebase.database().ref("Sala_Principal/TvPrincipal").set({
            estado: "DESLIGADA"
          });
        }