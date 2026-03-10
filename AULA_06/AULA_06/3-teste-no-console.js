// ==================================================
// Exemplo de consumo de api com fetch( promise)
// API usada: https://dog.ceo/api/breeds/imagem/radom
// Essa API retorna uma imagem aleatória de cachoro
// ==================================================

//Teste 1: fetch  basíco usando .then()

//fetch() faz uma requisição HTTP para uma API externa

fetch('https://dog.ceo/api/breeds/image/random')
   //fetch retorna uma PROMISE (Algo que vai chegar depois)
   .then(resposta => resposta.json())
   // reposta.json converte a resposta da API para JSON
   // JSON é o formado padrão de dados usados em APIs

   .then(dados => {
        //dados agora contem o objeto retornado pela API

        //mostra no console o objeto completo retornado
        console.log('✅Dados completo da API', dados)  
        
        //mostrar a  URL da imagem
        console.log('🗺️URL da imagem', dados.message)
   })

// ==================================================
// Teste 2: usando async / await
// É uma forma mais moderna e mais fácil de ler
// ==================================================

// vamos criar uma função assíncrona
// Funções async permitem usar "await"
async function testarAPI() {

    //await significa:
    const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
    
    //Precisamos converter a resposta em JSON
    const dados = await resposta.json()

    console.log('📦 Resposta da API:', dados)

    console.log('🐩 Imagem do Cachorro:', dados.message)
    
}

//chamamos a função para executar o teste
testarAPI()