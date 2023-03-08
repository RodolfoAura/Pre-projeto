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

function listaFrota() {

  let frota = document.querySelector('.veiculos')
  let frotaDispo = document.querySelector('.frota-disponivel')
  let alocacao = document.querySelector('.alocacaoVeiculo')
  let tudo = document.querySelector('.Content-detalhes')

  const options = { method: 'GET' };

  fetch('http://localhost:3000/readVeiculo', options)
    .then(response => response.json())
    .then(res => {
      frota.innerHTML = res.length
      res.forEach((e) => {
        if ((e.Servico === 'Disponivel') === true) {
          frotaDispo.innerHTML = res.length
        }
        let lista = alocacao.cloneNode(true)
        lista.classList.remove('model')

        lista.querySelector('#modelo').innerHTML = e.modelo
        lista.querySelector('#placa').innerHTML = e.placa
        if (e.Manutencao.length == 1) {
          lista.querySelector('#situacao').innerHTML = 'em manutenção'
        } else if (e.Manutencao.length > 1) {
          lista.querySelector('#situacao').innerHTML = e.Manutencao
        }
        if (e.Servico.length == 1) {
          lista.querySelector('#situacao').innerHTML = 'em serviço'
        }
        tudo.appendChild(lista)
        console.log(e)
      })
    })

}

function listaMotorista() {

  let motorista = document.querySelector('.motoristas')
  const options = { method: 'GET' };

  fetch('http://localhost:3000/readMotorista', options)
    .then(response => response.json())
    .then(res => {
      motorista.innerHTML = res.length

    })
}

function listaManutencao() {
  let frotaManutencao = document.querySelector('.frotaManutencao')

  const options = { method: 'GET' };

  fetch('http://localhost:3000/readManutencao', options)
    .then(response => response.json())
    .then(res => {
      frotaManutencao.innerHTML = res.length
    })

}

function listarDisponibilidade() {

}



function listar() {
  trocarTela()
  listaFrota()
  listaMotorista()
  listaManutencao()
}

listar() 
