import { ErroValidacaoAnimal } from "../erros/erro-validacao-animal";

class Animal {
  #especie;
  #tamanho;
  #bioma;

  constructor(especie) {
    this.validaEspecieAnimal(especie);
    this.defineTamanho(especie);
    this.defineBioma(especie);
  }

  getEspecie() {
    return this.#especie;
  }

  getTamanho() {
    return this.#tamanho;
  }

  getBioma(){
    return this.#bioma
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
}

export { Animal };
