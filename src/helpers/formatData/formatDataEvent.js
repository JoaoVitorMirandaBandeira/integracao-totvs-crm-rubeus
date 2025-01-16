export const formatEvent = (json) => {
    const camposPersonalizados = {};
    // Itera sobre as chaves do objeto JSON
    for (const chave in json) {
        if (json.hasOwnProperty(chave)) {
            // Verifica se a chave termina com 'compl_proc'
            if (chave.endsWith('compl_proc')) {
                // Adiciona o campo ao objeto camposPersonalizados
                const newChave = chave.split('.')[1];
                camposPersonalizados[newChave] = json[chave];
            }
        }
    }
    console.log(json);
    return {
        codigo: json['evento.codigo'],
        tipo: json['evento.tipo'],
        codTipo: json['evento.codTipo'],
        descricao: json['evento.descricao'],
        pessoa: { codigo: json['evento.pessoa'] },
        pessoasSecundarias: json['evento.pessoasSecundarias'],
        codOferta: json['evento.codOferta'],
        codCurso: json['evento.codCurso'],
        curso: json['evento.curso'],
        codRegistro: json['evento.codRegistro'],
        novoCodRegistro: json['evento.novoCodRegistro'],
        cursosSecundarios: json['evento.cursosSecundarios'],
        codLocalOferta: json['evento.codLocalOferta'],
        data: json['evento.data'],
        tipoData: json['evento.tipoData'],
        momento: json['evento.momento'],
        notaEnem: json['evento.notaEnem'],
        compareceuAtividade: json['evento.compareceuAtividade'],
        formaIngresso: json['evento.formaIngresso'],
        dataVencimento: json['evento.dataVencimento'],
        camposPersonalizados: camposPersonalizados,
        dadosOportunidade: json['evento.dadosOportunidade'],
    };
};
