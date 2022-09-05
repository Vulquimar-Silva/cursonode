require('../subdirectory/sub')
console.log('---------------------------------')
console.log(`Nome do arquivo: `, __filename)
console.log(`Diretório do Arquivo: `, __dirname)
console.log(`Sistema Operacional: `, process.env.OS)
console.log(`Usuário Logado: `, process.env.USERNAME)
console.log(`Idioma do Sistema: `, process.env.LANG)
console.log(`Nome do Server/Hostname: `, process.env.COMPUTERNAME)
console.log(`Caminho do Usuário: `, process.env.USERPROFILE)
console.log(`Em qual disco está: `, process.env.HOMEDRIVE)
console.log(`Caminho do CMD: `, process.env.ComSpec)
console.log(`Program Files: `, process.env.ProgramFiles)
console.log(`Program Files: `, process.env.ProgramW6432)
console.log(`Program Files 32 bits: `, process.env['programfiles(x86)'])
console.log(`Caminho Publico: `, process.env.PUBLIC)

switch (process.argv[2]) {
  case '-a':
    console.log('Execute rotina principal');
    break;
  case '-i':
    console.log('Execute Instalação')
    break;
  case '-q':
    console.log('Encerrando Aplicação')
    process.exit(); //interrompe imediatamente o código
    break;
  default:
    console.log('Parâmetro Inválido')
}

console.log(`Ambiente do Servidor: `, process.platform)