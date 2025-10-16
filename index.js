class Atleta{
  constructor(nome,idade,peso,altura,notas){
      this.nome=nome
      this.idade=idade
      this.peso=peso
      this.altura=altura
      this.notas =notas
  }
  calculaCategoria(){
    if(this.peso <=9 && this.peso <=11){
      console.log('Infatil')
    }
    
    else if(this.idade >=12 && this.idade==13){
      return 'juvenil'
    }
   
    else if(this.idade >=14 && this.idade==15){
      return 'Intermediário'
    }
    else if(this.idade >=16 && this.idade<=30){
      return'Adulto'
    }
    else{
      return "Demais Idade"
    }
  }
  calculaIMC(){
    let imc =this.peso / (this.altura * this.altura)
    return imc
  }
  calculaMediaValida(){
let  soma = 0
this.notas.forEach(nota =>{
  soma += nota
})
let media = soma / this.notas.length
return media
  }
  obtemNomeAtleta(){
    console.log("Nome: ",this.nome)
  }
  obtemIdadeAtleta(){
  console.log("Idade: ",this.idade)
  }
  obtemPesoAtleta(){
  console.log("Peso: ",this.peso)
  }
    obtemalturaAtleta(){
  console.log("Altura: ",this.altura)
  }
  obtemNotasAtleta(){
  console.log("Notas: ",this.notas)
  }

  obtemCategoria(){
let categoria = this.calculaCategoria();
console.log("Categoria:",categoria)
return categoria
  }
  obtemIMC(){
let obterimc=this.calculaIMC()
console.log("IMC:", obterimc)
return obterimc
  }
  obtemMediaValida(){
let obterMedia=this.calculaMediaValida()
console.log("Media Válida :", obterMedia)
return obterMedia
  }
}

let atleta = new Atleta("Cesar Abascal",30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]);
atleta.obtemNomeAtleta()
atleta.obtemIdadeAtleta()
atleta.obtemPesoAtleta()
atleta.obtemalturaAtleta()
atleta.obtemNotasAtleta()
atleta.obtemCategoria()
atleta.obtemIMC()
atleta.obtemMediaValida()
