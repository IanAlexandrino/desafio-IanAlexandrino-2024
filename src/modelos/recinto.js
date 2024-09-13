import { ErroValidacaoRecinto } from "../erros/erro-validacao-recinto";

class Recinto {
  #numero = 0;
  #bioma;
  #tamanhoTotal;
  #animaisExistentes = [];

  constructor(bioma, tamanhoTotal) {
    this.#numero++;
    this.#bioma = bioma;
    this.#tamanhoTotal = tamanhoTotal;
  }

  getNumero() {
    return this.#numero;
  }

  getBioma() {
    return this.#bioma;
  }

  getTamanhoTotal() {
    return this.#tamanhoTotal;
  }

  getAnimaisExistentes() {
    return this.#animaisExistentes;
  }

  adicionaAnimal(animal, qtd) {
    if (qtd <= 0) {
      throw new ErroValidacaoRecinto("Quantidade inválida");
    }

    const tamanhoNecessario = animal.getTamanho() * qtd;

    if (this.#tamanhoTotal >= animal.getTamanho() * qtd) {
      for (let animalArray of this.#animaisExistentes) {
        if (animalArray.getEspecie() === animal.getEspecie()) {
          animalArray.aumentaQuantidade(qtd);
          this.#tamanhoTotal -= tamanhoNecessario;
          return;
        }
      }
      animal.aumentaQuantidade(qtd - 1);
      this.#animaisExistentes.push(animal);
      this.#tamanhoTotal -= tamanhoNecessario;
    } else {
      throw new ErroValidacaoRecinto("Recinto está cheio!");
    }
  }
}

export { Recinto };
