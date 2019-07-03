class ListaNegociacoes {

    constructor() {
        
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }

    esvazia() {
        
        this._negociacoes = [];
    }
    
    ordena(criterio) {
        console.log('ordena()');
        this._negociacoes.sort(criterio);
    }
    
    inverteOrdem(criterio) {
        this._negociacoes.reverse();
    }
}