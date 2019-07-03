
class NegociacaoService{

    constructor(){
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana(){        
        //return new Promise((resolve, reject)=>{            
        return this._http
                .get('negociacoes/semana')
                .then(negociacoes=>{
                    //return resolve(negociacoes.map(objeto=> new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));                            
                    return negociacoes.map(objeto=> new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));                            
                    })                
                .catch(erro=>{
                    console.log(erro);                    
                    //return reject('Não foi possível obter as negociações da semana');
                    throw new Error('Não foi possível obter as negociações da semana');
                });
        //});    
    }

    obterNegociacoesDaSemanaAnterior(){
//       return new Promise((resolve, reject)=>{            
        return this._http
                .get('negociacoes/anterior')
                .then(negociacoes=>{
                    //return resolve(negociacoes.map(objeto=> new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));                            
                    return negociacoes.map(objeto=> new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));                            
                    })                
                .catch(erro=>{
                    console.log(erro);
                    //return reject('Não foi possível obter as negociações da semana');
                    throw new Error('Não foi possível obter as negociações da semana');
                });
//        });        
    }

    obterNegociacoesDaSemanaRetrasada(){
//        return new Promise((resolve, reject)=>{            
        return this._http
                .get('negociacoes/retrasada')
                .then(negociacoes=>{
                    //return resolve(negociacoes.map(objeto=> new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));                            
                    return negociacoes.map(objeto=> new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));                            
                    })                
                .catch(erro=>{
                    console.log(erro);
                    //return reject('Não foi possível obter as negociações da semana');
                    throw new Error('Não foi possível obter as negociações da semana');
                });

//        });        
    }
}

