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
    async pegaPessoasEscpoTodos () {
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
        return listaPessoas;
    }

}


module.exports = PessoaServices;

