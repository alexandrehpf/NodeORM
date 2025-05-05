const Services = require('./Services.js');

class PessoaServices extends Services { 
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id)
        console.log(estudante);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        console.log('aqui 3 '+ listaMatriculas);
        return listaMatriculas;
    }

}


module.exports = PessoaServices;

