function soma(a:number, b:number){
  return a + b;
}

//types
//interfaces
interface IAnimal{
  nome:string;
  tipo:'terrestre' | 'aquático';
  executarRugido(alturaEmDecibeis:number):void;
}
interface IFelino extends IAnimal{
  visaoNotura: boolean;
}
const animal: IAnimal={
  nome: 'Elefante',
  tipo: 'terrestre',
  executarRugido:(alturaEmDecibeis)=>(`${alturaEmDecibeis}dB`)
}
animal.executarRugido('')
const felino: IFelino={
  nome:'Leão',
  tipo:'terrestre',
  visaoNotura: true,
}