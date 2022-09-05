function soma(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 5000)
    }, 3000);
  })
  
}

soma(200)
  .then((resultado) => {
    console.log(`Resolvido, veja o resultado: ${resultado}`);
  })
  .catch((reject) => {
    console.log(`Xiii, deu ruim: ${reject}`)
  })
  