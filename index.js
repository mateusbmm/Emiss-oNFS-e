
const DadosEmpresa = {
    "inscricaoMun": "9999999",
    "nome": "Empresa Fictícia",
    "cnpj": "00.000.000/0000-00",
    "endereco": {
        "cep": "11111-111",
        "estado": "gg",
        "cidade": "cidade",
        "rua": "rua fictícia",
        "numero": "00",
        "complemeto": "fffffffff"
    },
    "email": "ficticia@email.com",
    "telefone": "00 000 0000 00000000"
}


function getValues() {

    let nota = new Object();

    // Obter valores do formulário
    let valorServico = parseFloat(document.getElementById('valorServico').value);
    let percentualImposto = parseFloat(document.getElementById('imposto').value);

    // Calcular imposto e valor total
    let valorImposto = (percentualImposto / 100) * valorServico;
    let valorTotal = valorServico + valorImposto;

    //dados do destinatário
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;

    let cep = document.getElementById('cep').value;
    let cidade = document.getElementById('cpf').value;
    let estado = document.getElementById('estado').value;

    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value

    let descricao = document.getElementById('descricao').value

    nota.valorServico = valorServico;
    nota.percentualImposto = percentualImposto;
    nota.valorImposto = valorImposto;
    nota.valorTotal = valorTotal
    nota.nome = nome;
    nota.cpf = cpf;
    nota.cep = cep;
    nota.cidade = cidade;
    nota.estado = estado;
    nota.rua = rua;
    nota.numero = numero
    nota.complemento = complemento;
    nota.descricao = descricao

    nota.DadosEmpresa = DadosEmpresa

    console.log(nota)
    return nota;
}

function calcularNotaFiscal() {

    nota = getValues();



    // Exibir resultados na página
    document.getElementById('resultadoValorTotal').textContent = nota.valorServico.toLocaleString();
    document.getElementById('resultadoValorTotal1').textContent = nota.valorTotal


    //colocando dados da empresa
    document.getElementById('nomePrestadorNota').textContent = DadosEmpresa.nome;
    document.getElementById('cpfPrestadorNota').textContent = DadosEmpresa.cnpj;
    document.getElementById('IM').textContent = DadosEmpresa.inscricaoMun;
    document.getElementById('enderecoPrestadorNota').textContent = DadosEmpresa.endereco.rua + ', ' + DadosEmpresa.endereco.numero + ', ' + DadosEmpresa.endereco.complemeto + ', CEP: ' + DadosEmpresa.endereco.cep
    document.getElementById('cidadePrestadorNota').textContent = DadosEmpresa.endereco.cidade
    document.getElementById('UFPrestadorNota').textContent = DadosEmpresa.endereco.estado


    //dados tomardor do servico
    document.getElementById('nomereceptorNota').textContent = nota.nome
    document.getElementById('cpfrecptorNota').textContent = nota.cpf
    document.getElementById('enderecoReceptorNota').textContent = nota.rua + ', ' + nota.numero + ', ' + nota.complemeto + ', CEP: ' + nota.cep.cep

    document.getElementById('cidadeReceptorNota').textContent = nota.cidade
    document.getElementById('UFreceptorNota').textContent = nota.estado



    document.getElementById('resultadoImposto').textContent = nota.percentualImposto + '%';
    document.getElementById('resultadoValorImposto').textContent = nota.valorImposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('resultadoValorTotal').textContent = nota.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('descricaoServico').textContent = nota.descricao




}


