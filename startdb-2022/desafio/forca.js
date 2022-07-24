class Forca {

  constructor(palavra) {
    this.palavra = palavra.split("");
    this.vidas = 6;
    this.letrasChutadas = [];
    this.acertos = new Array(palavra.length).fill("");
  }

  chutar(letra) {

    letra = letra.toLowerCase(); 

    if(letra.length > 1 ) return  

    let letrasChutadas = this.palavra.includes(letra);

    if(this.letrasChutadas.includes(letra)) return 

    this.letrasChutadas.push(letra) 

    if(!letrasChutadas ) return this.perderVida();


    for(let i = 0; i < this.palavra.length;i++){
      if(this.palavra[i].includes(letra)){
        this.acertos[i] = letra;
      }
    }
   }

  buscarEstado() {                
    if(this.vidas === 0)
      return "perdeu"

    if(this.vidas > 0 && this.validarVitoria())
      return "ganhou"

    return "aguardando chute";
   } 

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas,          
          vidas: this.vidas,                           
          palavra: this.acertos,                     
      }
  }

  validarVitoria() {
    const palavraSurpresa = JSON.stringify(this.palavra)
    const palavraAcertos = JSON.stringify(this.acertos)
    return palavraSurpresa === palavraAcertos
  }

  perderVida(){ 
    this.vidas--
  }
}

module.exports = Forca;