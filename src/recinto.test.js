import { Recinto } from "./modelos/recinto";
import { Animal } from "./modelos/animal";
import { ErroValidacaoRecinto } from "./erros/erro-validacao-recinto";

describe("Testes para a classe Recinto", () => {
  test("Deve adicionar um animal ao recinto", () => {
    const recinto = new Recinto("savana", 10);
    const leao = new Animal("LEAO", 1);

    recinto.adicionaAnimal(leao, 1);

    expect(recinto.getAnimaisExistentes().length).toBe(1);
    expect(recinto.getAnimaisExistentes()[0].getEspecie()).toBe("LEAO");
  });

  test("Deve aumentar a quantidade de um animal existente no recinto", () => {
    const recinto = new Recinto("savana", 10);
    const leao = new Animal("LEAO", 1);

    recinto.adicionaAnimal(leao, 1);
    recinto.adicionaAnimal(leao, 2);

    expect(recinto.getAnimaisExistentes().length).toBe(1);
    expect(recinto.getAnimaisExistentes()[0].getQtd()).toBe(3);
  });

  test("Deve lançar um erro ao tentar adicionar um animal com quantidade zero ou negativa", () => {
    const recinto = new Recinto("savana", 10);
    const leao = new Animal("LEAO", 1);

    expect(() => recinto.adicionaAnimal(leao, 0)).toThrow(
      new ErroValidacaoRecinto("Quantidade inválida")
    );
    expect(() => recinto.adicionaAnimal(leao, -1)).toThrow(
      new ErroValidacaoRecinto("Quantidade inválida")
    );
  });

  test("Deve lançar um erro ao tentar adicionar um animal que excede a capacidade total do recinto", () => {
    const recinto = new Recinto("savana", 3);
    const leao = new Animal("LEAO", 2);

    expect(() => recinto.adicionaAnimal(leao, 2)).toThrow(
      new ErroValidacaoRecinto("Recinto está cheio!")
    );
  });

  test("Deve adicionar vários animais ao recinto e garantir que o espaço seja ajustado corretamente", () => {
    const recinto = new Recinto("savana", 10);
    const leao = new Animal("LEAO", 1);
    const macaco = new Animal("MACACO", 1);

    recinto.adicionaAnimal(leao, 2); // 6
    recinto.adicionaAnimal(macaco, 2); // 2

    expect(recinto.getAnimaisExistentes().length).toBe(2);
    expect(recinto.getAnimaisExistentes()[0].getQtd()).toBe(2); // LEAO
    expect(recinto.getAnimaisExistentes()[1].getQtd()).toBe(2); // MACACO
    expect(recinto.getTamanhoTotal()).toBe(2); // Espaço restante
  });
});
