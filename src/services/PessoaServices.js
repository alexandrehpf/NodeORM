const Services = require('./Services.js');

class PessoaServices extends Services { 
    constructor() {
        super('Pessoa');
        this.matricula = new Services('Matricula');
    }

    async pegaMatriculasAtivasPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id)
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }

    async pegaTodasMatriculasPorEstudante(id) {
        const estudante = await super.pegaUmRegistroPorId(id)
        const listaMatriculas = await estudante.getTodasAsMatriculadas();
        return listaMatriculas;
    }

    async pegaPessoasEscpoTodos () {
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
        return listaPessoas;
    }

    async cancelaPessoaEMatriculas (estudanteId) {
        await super.atualizaRegistro({ativo: false}, {id: estudanteId});
        await this.matricula.atualizaRegistro({status: 'cancelada'}, {estudante_id: estudanteId});
    }

}


module.exports = PessoaServices;

