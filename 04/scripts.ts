type Produtos = {
    produto: string;
    lote: number;
    ano: number;
    qtd: number;
};

function gerarEtiquetas(dados: Produtos): string[] {
    const etiquetas = [];

    for (let i = 1; i <= dados.qtd; i++) {
        const numeroEtiqueta = String(i).padStart(3, '0');
        const etiqueta = `${dados.lote}-${dados.ano}-${numeroEtiqueta}`;
        etiquetas.push(etiqueta);
    }

    return etiquetas;
}

const produto: Produtos = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
};

const resultados = gerarEtiquetas(produto);
console.log(resultados);