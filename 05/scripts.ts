function soletrar(nome: string) {
    return nome.split('').join('-');
}

const result = soletrar('programador');
console.log(result);