const { EventEmitter } = require('events');
const emitter = new EventEmitter()

const validaObjeto = (a) => {
  if (typeof a !== 'object') {
    return emitter.emit('error', new Error('Tipo informado é inválido'))
  }
  console.log('Objeto válido!')
}

emitter.addListener('error', (err) => {
  console.log('Evento: ' + err.message)
})

let dados = { name: 'Infinite', course: 'NodeJS' }
let idade = 15;
let nome = 'Vulquimar'
let array = ['Deus', 'Vulquimar', 'Nayara'] //O array é um objeto no JavaScript

validaObjeto(nome)