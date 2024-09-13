class ErroValidacaoRecinto extends Error {
  constructor(msg, campo) {
    super(msg);
    this.campo = campo;
    this.name = "ErroValidacaoRecinto";
  }
}

export { ErroValidacaoRecinto };
