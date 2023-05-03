interface IUsuario{
  id:string;
  email: string;
  cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}

function redirecionar(usuario:IUsuario){
  if(usuario.cargo){
    //redirecionar(usuario.cargo);
  }
  //área user
}