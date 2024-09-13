import { ErroValidacaoAnimal } from "../erros/erro-validacao-animal";

class Animal {
  #especie;
  #tamanho;
  #bioma;
  #qtd;

  constructor(especie, qtd) {
    this.validaEspecieAnimal(especie);
    this.defineTamanho(especie);
    this.defineBioma(especie);
    this.#qtd = qtd;
  }

  getEspecie() {
    return this.#especie;
  }

  getTamanho() {
    return this.#tamanho;
  }

  getBioma() {
    return this.#bioma;
  }

  getQtd() {
    return this.#qtd;
  }

  validaEspecieAnimal(especie) {
    const especiesValidas = [
      "LEAO",
      "LEOPARDO",
      "CROCODILO",
      "MACACO",
      "GAZELA",
      "HIPOPOTAMO",
    ];
    if (!especiesValidas.includes(especie)) {
      throw new ErroValidacaoAnimal("Animal inválido");
    }
    this.#especie = especie;
  }

  defineTamanho(especie) {
    if (especie === "LEAO" || especie === "CROCODILO") {
      this.#tamanho = 3;
    } else if (especie === "LEOPARDO" || especie === "GAZELA") {
      this.#tamanho = 2;
    } else if (especie === "MACACO") {
      this.#tamanho = 1;
    } else if (especie === "HIPOPOTAMO") {
      this.#tamanho = 4;
    }
  }

  defineBioma(especie) {
    if (especie === "LEAO" || especie === "LEOPARDO" || especie === "GAZELA") {
      this.#bioma = "savana";
    } else if (especie === "CROCODILO") {
      this.#bioma = "rio";
    } else if (especie === "MACACO") {
      this.#bioma = ["savana", "floresta"];
    } else if (especie === "HIPOPOTAMO") {
      this.#bioma = ["savana", "rio"];
    }
  }

  aumentaQuantidade(qtd) {
    this.#qtd += qtd;
  }
}

export { Animal };
