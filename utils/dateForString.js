    // Função para converter todas as propriedades Date para strings
  function dateForString(objeto) {
    // Percorre todas as propriedades do objeto
    for (const chave in objeto) {
      if (objeto.hasOwnProperty(chave)) {
        const valor = objeto[chave];

        // Se o valor for uma instância de Date, converte para string
        if (valor instanceof Date) {
          objeto[chave] = valor.toString();
        }

        // Se o valor for um objeto, chama a função recursivamente para percorrer as propriedades internas
        if (typeof valor === "object" && valor !== null) {
          dateForString(valor);
        }
      }
    }
  }
module.exports = dateForString
