/* function soma(a:number, b:number){
  return a + b;
} 

//types
//interfaces
interface IAnimal{
  nome:string;
  tipo:'terrestre' | 'aquático';
  executarRugido(alturaEmDecibeis:number):void;
  domestico: boolean;
}

 type IAnimal={
  nome:string;
  tipo:'terrestre' | 'aquático';
  executarRugido(alturaEmDecibeis:number):void;
} 

interface IFelino extends IAnimal{
  visaoNotura: boolean;
}

interface ICanino extends IAnimal{
  porte:'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico={
  domestico: true,
  nome: 'Cachorro',
  porte: 'medio',
  tipo: 'terrestre',
  executarRugido:(alturaEmDecibeis)=>(`${alturaEmDecibeis}dB`)
}

animal.executarRugido('')

 const felino: IFelino={
  nome:'Leão',
  tipo:'terrestre',
  visaoNotura: true,
}
const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input',(event)=>{
  const i = event.currentTarget as HTMLInputElement;
   console.log(i.value)
});

//Generic types
function adicionaApendiceALista<T>(array:T[],valor:T){
  return array.map(()=>valor);
}
adicionaApendiceALista(['A','B','C'],1); */

interface IUsuario{
  id:string;
  email: string;
}

interface IAdmin extends IUsuario{
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecionar(usuario:IUsuario|IAdmin){
  if('cargo' in usuario){
    //área admin
  }
  //área user
}