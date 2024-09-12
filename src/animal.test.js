import { Animal } from "./modelos/animal";

describe("Testes para a classe Animal", () => {
  test("Deve acusar erro de animal inválido", () => {
    expect(() => {
      new Animal("UNICORNIO");
    }).toThrow("Animal inválido");
  });

  test("Deve instanciar um objeto Animal com espécie válida", () => {
    const leao = new Animal("LEAO");
    expect(leao).toBeInstanceOf(Animal);
  });

  test("Deve definir o tamanho correto para um Leão", () => {
    const leao = new Animal("LEAO");
    expect(leao.getTamanho()).toBe(3);
  });

  test("Deve definir o bioma correto para um Crocodilo", () => {
    const crocodilo = new Animal("CROCODILO");
    expect(crocodilo.getBioma()).toBe("rio");
  });

  test("Deve definir tamanho e bioma corretos para um Macaco", () => {
    const macaco = new Animal("MACACO");
    expect(macaco.getTamanho()).toBe(1);
    expect(macaco.getBioma()).toEqual(["savana", "floresta"]);
  });

  test("Deve definir tamanho e bioma corretos para um Hipopótamo", () => {
    const hipopotamo = new Animal("HIPOPOTAMO");
    expect(hipopotamo.getTamanho()).toBe(4);
    expect(hipopotamo.getBioma()).toEqual(["savana", "rio"]);
  });

  test("Deve lançar erro se a espécie for undefined", () => {
    expect(() => {
      new Animal(undefined);
    }).toThrow("Animal inválido");
  });

  test("Deve lançar erro se a espécie for null", () => {
    expect(() => {
      new Animal(null);
    }).toThrow("Animal inválido");
  });

  test("Deve lançar erro se a espécie for um número", () => {
    expect(() => {
      new Animal(123);
    }).toThrow("Animal inválido");
  });

  test("Deve lançar erro se a espécie for um objeto", () => {
    expect(() => {
      new Animal({ especie: "LEAO" });
    }).toThrow("Animal inválido");
  });
});
