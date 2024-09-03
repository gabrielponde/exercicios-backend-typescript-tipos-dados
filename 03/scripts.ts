function gerarTabuada(numeros: number[]) {
    numeros.forEach(numero => {
        console.log(`Tabuada de ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        console.log('');
    });
}

gerarTabuada([1, 5, 2])