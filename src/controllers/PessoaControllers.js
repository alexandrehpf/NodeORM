const Controller = require('./Controller.js')
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculasAtivas (req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasAtivasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

    async pegaTodasMatriculas (req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaTodasMatriculasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async pegaTodasAsPessoas (req, res) {
    try {
      const listaPessoas =  await pessoaServices.pegaPessoasEscpoTodos();
      console.log('aqui: ');
      return res.status(200).json(listaPessoas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

}

module.exports = PessoaController;  