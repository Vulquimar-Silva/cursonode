function sum(x) {
  return new Promise((resolve, reject) => {
    if (Number(x) == NaN || Number(x) == undefined || typeof x == 'number') {
      reject('Tá de brincadeira?')
    }
    setTimeout(() => {
      resolve(x + 5000)
    }, 3000);
  })
  
}

async function main() {
  try {
    const resultado = await sum('#');
    console.log(`Resultado com Async/Await: ${resultado}`)
  } catch (error) {
    console.log(`Temos alguns problemas: ${error}`)
    }
}
  
main()