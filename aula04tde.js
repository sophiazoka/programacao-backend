function somaComCallbacks(a, b, callbackSucesso, callbackErro) {
    const soma = a + b;
    if (soma % 2 === 0) {
        callbackSucesso(soma);
    } else {
        callbackErro(soma);
    }
}

function callbackSucesso(resultado) {
    console.log(`Sucesso: A operação foi concluída com sucesso e o número ${resultado} é par.`);
}

function callbackErro(resultado) {
    console.log(`Erro: A operação falhou e o número ${resultado} é ímpar.`);
}


somaComCallbacks(5, 3, callbackSucesso, callbackErro);
somaComCallbacks(2, 4, callbackSucesso, callbackErro);


//2

function somaComPromise(a, b) {
    return new Promise((resolve, reject) => {
        const soma = a + b;
        if (soma % 2 === 0) {
            resolve(soma);
        } else {
            reject(soma);
        }
    });
}

somaComPromise(5, 3)
    .then(resultado => console.log(`Sucesso: A operação foi concluída com sucesso e o número ${resultado} é par.`))
    .catch(resultado => console.log(`Erro: A operação possui erro e o número ${resultado} é ímpar.`));

somaComPromise(2, 4)
    .then(resultado => console.log(`Sucesso: A operação foi concluída com sucesso e o número ${resultado} é par.`))
    .catch(resultado => console.log(`Erro: A operação possui erro e o número ${resultado} é ímpar.`));
