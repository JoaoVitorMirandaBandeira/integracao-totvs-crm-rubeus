export const formatContact = (json) => {
    return {
        codigo: json['contato.codigo'],
        nome: json['contato.nome'],
        nomeSocial: json['contato.nomeSocial'],
        dataNascimento: json['contato.dataNascimento'],
        telefonePrincipal: json['contato.telefonePrincipal'],
        emailPrincipal: json['contato.emailPrincipal'],
        telefone: json['contato.telefone'],
        email: json['contato.email'],
        cpf: json['contato.cpf'],
        endereco: json['contato.endereco'],
        cep: json['contato.cep'],
        numero: json['contato.numero'],
        bairro: json['contato.bairro'],
        sexo: json['contato.sexo'],
        imagemUrl: json['contato.imagemUrl'],
        estadoCidade: {
            cidade: json['contato.estadoCidade.cidade'],
            estado: json['contato.estadoCidade.estado'],
        },
        canhoto: json['contato.canhoto'],
        profissao: json['contato.profissao'],
        aluno: json['contato.aluno'],
        exaluno: json['contato.exaluno'],
        escolaOrigem: json['contato.escolaOrigem'],
        anoFormacao: json['contato.anoFormacao'],
        naturalidade: json['contato.naturalidade'],
        nacionalidade: json['contato.nacionalidade'],
        deficiencias: json['contato.deficiencias'],
        estadoCivil: json['contato.estadoCivil'],
        cor: json['contato.cor'],
        grauInstrucao: json['contato.grauInstrucao'],
        tags: json['contato.tags'],
        tagsRemovidas: json['contato.tagsRemovidas'],
        assinaturas: json['contato.assinaturas'],
        origem: json['contato.origem'],
        token: json['contato.token'],
    };
};
