const {writeFile} = require('fs');

writeFile("arquivo.txt", 'Criando arquivo de texto com WriteFile', err => {
  if (err) throw err;
  
  console.log("Arquivo criado com sucesso!")
})