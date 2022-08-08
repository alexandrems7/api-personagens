const personagens = [
  {
    id: 1,
    nome: 'Salsicha',
    sobrenome: 'Rogers',
  },
  {
    id: 2,
    nome: 'Scooby',
    sobrenome: 'Dooby Doo',
  },
  {
    id: 3,
    nome: 'Daphne',
    sobrenome: 'Blake',
  },
  {
    id: 4,
    nome: 'Fred',
    sobrenome: 'Jones',
  },
  {
    id: 5,
    nome: 'Velma',
    sobrenome: 'Dinkley',
  },
];

const findAllPersonagensService = () => {
  return personagens;
};

const findByIdPersonagemService = (personagemId) => {
  return personagens.find((personagem) => personagem.id === personagemId);
};


const createPersonagemService = (novoPersonagem) => {
  const novoId = personagens.length + 1;
  novoPersonagem.id = novoId;
  personagens.push(novoPersonagem);
  return novoPersonagem;

}

const updatePersonagemService = (idPersonagem, personagemEditado) => {
  personagemEditado['id'] = idPersonagem;
  const personagem = personagens.findIndex((personagem) => personagem.id == idPersonagem);
  personagens[personagem] = personagemEditado;
  return personagemEditado;
  
}

const deletePersonagemService = (idPersonagem) => {
  const personagem = personagens.findIndex((personagem) => personagem.id == idPersonagem);
  return personagens.splice(personagem, 1)
  
}

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService
};
