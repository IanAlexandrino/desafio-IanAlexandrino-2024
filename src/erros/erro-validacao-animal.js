class ErroValidacaoAnimal extends Error {
  constructor(msg, campo) {
    super(msg);
    this.campo = campo;
    this.name = "ErroValidacaoAnimal";
  }
}

export { ErroValidacaoAnimal };
