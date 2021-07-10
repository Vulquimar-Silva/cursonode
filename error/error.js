//throw new Error('Ah não mano, deu erro! Na minha máquina funciona!')

// executando alguma coisa caso ocorra o erro, nesse caso irei executar o catch automaticamente

function execute() {
  executeTo()
}

function executeTo() {
  throw new Error('Ah não, deu erro! Não é possível, na minha máquina funciona!')
}

function init(){
  try {
    execute()
  } catch (error) {
    console.log(`Temos um problema! ${error}`)
  }
}

init()
console.log('Depois do erro')