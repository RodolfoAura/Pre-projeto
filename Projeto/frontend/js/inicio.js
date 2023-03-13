let barra = document.querySelector(".barra-lateral");
let barraBtn = document.querySelector(".barra-lateralBtn");
barraBtn.onclick = function () {
  barra.classList.toggle("active");
  if (barra.classList.contains("active")) {
    barraBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else
    barraBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

let user = JSON.parse(localStorage.getItem("User"));

document.querySelector(".admin_name").innerHTML = user.nome

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
var manutenção = 0

function listaFrota() {

  let frota = document.querySelector('.veiculos')
  let frotaDispo = document.querySelector('.frota-disponivel')
  let alocacao = document.querySelector('.alocacaoVeiculo')
  let tudo = document.querySelector('.Content-detalhes')
  let tableFrota = document.querySelector('.table-frota')
  let itensFrota = document.querySelector('.itensFrota')
 

  const options = { method: 'GET' };

  fetch('http://localhost:3000/readVeiculo', options)
    .then(response => response.json())
    .then(res => {
      frota.innerHTML = res.length

    var dis = 0
    var serviço=0
  
      res.forEach((e) => {
        
        if ((e.Servico === 'Disponivel' && e.Manutencao === 'Disponivel') === true) {
          dis++
          frotaDispo.innerHTML = dis
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
          serviço=e.Servico.length
          lista.querySelector('#situacao').innerHTML = 'em serviço'
        }
        tudo.appendChild(lista)



        let lista2 = itensFrota.cloneNode(true)
        lista2.classList.remove('model')

        lista2.querySelector('.modeloCar').innerHTML = e.modelo
        lista2.querySelector('.marcaCar').innerHTML = e.marca
        lista2.querySelector('.placaCar').innerHTML = e.placa

        // if (e.Manutencao.length == 1) {
        //   lista2.querySelector('.statusCar').innerHTML = 'em manutenção'
        // } else if (e.Servico.length == 1) {
        //   lista2.querySelector('.statusCar').innerHTML = 'em serviço'
        // } else if (e.Manutencao.length > 1 && e.Servico.length > 1 ) {
        //   lista2.querySelector('.statusCar').innerHTML = 'disponivel'
        // }


        tableFrota.appendChild(lista2)

       


      })
      var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: ['Em Manutenção', 'Disponivel', 'Em serviço'],
				datasets: [{
					label: 'Veiculos',
					data: [manutenção,dis,serviço],
					backgroundColor: [
						'#f7d4d7',
						'#C0F2D8',
						'#ffe8b3'
            
					],
				}]
			},
			options: {
        legend: {
          labels: {
            Fontcolor: 'white'
          }
        },
        responsive: true,
			}
		});
    })

}

function listaMotorista() {
  let tableMoto = document.querySelector('.table-Motorista')
  let itensMoto = document.querySelector('.itensMotorista')

  let motorista = document.querySelector('.motoristas')
  const options = { method: 'GET' };

  fetch('http://localhost:3000/readMotorista', options)
    .then(response => response.json())
    .then(res => {
      motorista.innerHTML = res.length
      res.forEach((e)=>{
        console.log(e)

        let lista = itensMoto.cloneNode(true)
        lista.classList.remove('model')

        lista.querySelector('.motoNome').innerHTML = e.nome
        lista.querySelector('.motoCpf').innerHTML = e.cpf
        lista.querySelector('.motoCnh').innerHTML = e.cnh
        //lista.querySelector('.motoStatus').innerHTML = e

        tableMoto.appendChild(lista)

      })
    })
}



function listaManutencao() {
  let frotaManutencao = document.querySelector('.frotaManutencao')

  const options = { method: 'GET' };

  fetch('http://localhost:3000/readManutencao', options)
    .then(response => response.json())
    .then(res => {
      manutenção= res.length
      frotaManutencao.innerHTML = res.length
    })

}

function listarDisponibilidade() {

}



function listar() {
  listaManutencao()
  trocarTela()
  listaFrota()
  listaMotorista()
  
}

listar() 


