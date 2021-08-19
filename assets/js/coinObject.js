function bodyOrganization () {
  const body = document.querySelector('body')
  const section = document.createElement('section')
  const divRight = document.createElement('div')
  const divLeft = document.createElement('div')
  divRight.setAttribute('id', 'divRight')
  divLeft.setAttribute('id', 'divLeft')
  section.appendChild(divRight)
  section.appendChild(divLeft)
  body.appendChild(section)

} bodyOrganization()

const coin = {
    state: 0,
  
    flip: function () {
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
      return this.state = Math.round(Math.random())
    },
  
    toString: function () {
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
      if (this.state === 0) {
        return "Heads"
      }
      if (this.state === 1) {
        return "Tails"
      }
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      // Colocar uma imagem correspondente a essa valor.
      // image.src = ".././img/coroa.png"
      // image.alt = "Heads/Tails"
      if (this.state === 0) {
        image.src = "./assets/img/cara.png"
        image.alt = "Heads"
      }
      if (this.state === 1) {
        image.src = "./assets/img/coroa.png"
        image.alt = "Tails"
      }
      return image;
    },
};

function display20Flips() {
  const results = [];
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
  const divRight = document.querySelector('#divRight')

  for (let i = 0; i < 20; i++) {
    coin.flip()
    results.push(coin.toString())

    const p = document.createElement('p')
    p.innerText = `${coin.toString()}`
    divRight.appendChild(p)
  }
  return results
} display20Flips()

function display20Images() {
  const results = [];
  // Use um loop para arremessar a moeda 20 vezes.
  // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
  // Além de exibir os resultados na página, não esqueça
  // de retornar o valor de "results".
  // Caso esqueça de retornar "results", sua função não
  // irá passar nos testes.
  for (let i = 0; i < 20; i++) {
    coin.flip()
    results.push(coin.toHTML())

    const divLeft = document.querySelector('#divLeft')
    divLeft.appendChild(results[i])
  }
  return results
} display20Images()