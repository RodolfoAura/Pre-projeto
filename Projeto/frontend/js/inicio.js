let barra = document.querySelector(".barra-lateral");
let barraBtn = document.querySelector(".barra-lateralBtn");
barraBtn.onclick = function () {
  barra.classList.toggle("active");
  if (barra.classList.contains("active")) {
    barraBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else
    barraBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

function trocarTela() {

  var link = document.querySelectorAll(".link")
  var model = document.querySelectorAll(".Tela")

  link.forEach((e) => {

    e.addEventListener("click", function (event) {
      event.preventDefault();

      if (e.id == 'h') {
        link[0].classList.add('active')

        link[1].classList.remove('active')
        link[2].classList.remove('active')
        link[3].classList.remove('active')
        link[4].classList.remove('active')


        model[0].classList.remove('model')

        model[1].classList.add('model')
        model[2].classList.add('model')
        model[3].classList.add('model')
        model[4].classList.add('model')
      }

      if (e.id == 'f') {
        link[1].classList.add('active')

        link[0].classList.remove('active')
        link[2].classList.remove('active')
        link[3].classList.remove('active')
        link[4].classList.remove('active')

        model[1].classList.remove('model')

        model[0].classList.add('model')
        model[2].classList.add('model')
        model[3].classList.add('model')
        model[4].classList.add('model')
      }

      if (e.id == 'd') {
        link[2].classList.add('active')

        
        link[0].classList.remove('active')
        link[1].classList.remove('active')
        link[3].classList.remove('active')
        link[4].classList.remove('active')

        model[2].classList.remove('model')
        
        model[0].classList.add('model')
        model[1].classList.add('model')
        model[3].classList.add('model')
        model[4].classList.add('model')
      }

      if (e.id == 'mo') {
        link[3].classList.add('active')

        link[0].classList.remove('active')
        link[1].classList.remove('active')
        link[2].classList.remove('active')
        link[4].classList.remove('active')

        model[3].classList.remove('model')
        
        model[0].classList.add('model')
        model[1].classList.add('model')
        model[2].classList.add('model')
        model[4].classList.add('model')
      }

      if (e.id == 'ma') {
        link[4].classList.add('active')

        link[0].classList.remove('active')
        link[1].classList.remove('active')
        link[2].classList.remove('active')
        link[3].classList.remove('active')

        model[4].classList.remove('model')
        
        model[0].classList.add('model')
        model[1].classList.add('model')
        model[3].classList.add('model')
        model[2].classList.add('model')
      }
    })



  })
}

trocarTela() 