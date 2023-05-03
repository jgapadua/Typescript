interface IPessoa{
  nome: string;
  idade: number;
  nacionalidade: string;
}

interface IBrasilerio extends Omit<IPessoa, 'nacionalidade'>{

}

const brasileiro: IBrasilerio ={
  
}