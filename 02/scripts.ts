type TabelaUsuario = { nome: string; idade: number; status: boolean };

const tabelaUsuarios: TabelaUsuario[] = [
    { nome: "Guido", idade: 32, status: true },
    { nome: "Dani", idade: 30, status: true },
    { nome: "João", idade: 40, status: false },
    { nome: "Guilherme", idade: 29, status: true },
    { nome: "Ana", idade: 18, status: false },
    { nome: "José", idade: 28, status: false },
];

const filtrarUsuariosPorNome = (lista: TabelaUsuario[], nomeBusca: string): TabelaUsuario[] => {
    return lista.filter(usuario =>
        usuario.nome.toLowerCase().includes(nomeBusca.toLowerCase())
    );
};

const resultado = filtrarUsuariosPorNome(tabelaUsuarios, 'jo');
console.log(resultado);