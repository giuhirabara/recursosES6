const alunos = ['Julia', 'André'];

const retornoDeNotas = alunos.map(function(nome) {
    return {
        Nome: nome,
        Nota: '6'
    }
})

retornoDeNotas.push({
    Nome: 'Felipe',
    Nota: '2'
})

retornoDeNotas.push({
    Nome: 'Juliana',
    Nota: '8'
})

const alunosAprovados = retornoDeNotas.filter(function(nome) {
    return nome.Nota >= '6';
})

console.log(alunosAprovados);