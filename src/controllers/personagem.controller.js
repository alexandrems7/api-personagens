const personagensService = require('../services/personagem.service');

const findAllPersonagensController = (req, res) => {
  const personagens = personagensService.findAllPersonagensService();
  res.send(personagens);
};

const findByIdPersonagemController = (req, res) => {

    const personagemId = Number(req.params.id);

    const personagem = personagensService.findByIdPersonagemService(personagemId);
    res.send(personagem);
    
}

const createPersonagemController = (req, res) => {

  const personagem = req.body;
  const novoPersonagem = personagensService.createPersonagemService(personagem);
  res.send(novoPersonagem)
}

const updatePersonagemController = (req, res) => {
const idPersonagem = Number(req.params.id);
const personagemEditado = req.body;
const updatePersonagem = personagensService.updatePersonagemService(idPersonagem, personagemEditado)
res.send(updatePersonagem)
    
}

const deletePersonagemController = (req, res) => {

    const idPersonagem = Number(req.params.id);
    const nome = personagensService.findByIdPersonagemService(idPersonagem).nome;
    personagensService.deletePersonagemService(idPersonagem);
    res.send({message: `"O personagem ${nome} foi deletado com sucesso!"`})
}










module.exports = {
    findAllPersonagensController,
    findByIdPersonagemController,
    createPersonagemController,
    updatePersonagemController,
    deletePersonagemController
    
    


    

}
