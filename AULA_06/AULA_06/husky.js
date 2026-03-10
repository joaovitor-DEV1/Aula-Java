async function aplicarAPI() {

    
    const resposta = await fetch('https://dog.ceo/api/breed/husky/images/random')
    
    
    const dados = await resposta.json()

    console.log('📦 Resposta da API:', dados)

    console.log('🐺 Husky:', dados.message)
    
}

aplicarAPI()