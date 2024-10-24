async function visualizarInformacoesGlobais() {
    const resposta = await fetch(url)
    const dados = await resposta.jason()
    console.log(dados)
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `De ${dados.total_pessoas_mundo} bilhões de pessoas no planeta, existem aproximadamente ${dados.total_de_pessoas_com_acesso_a_educacao} bilhões de pessoas com acesso à educação, onde o tempo médio de estudo é de 4 horas por dia. Como Maria sempre pensou em estudar porém assim como 1,88 bilhão de pessoas sem acesso a educação, enfrentava muitas dificuldades. Para isso ela começou a se dedicar estudando diariamente e se tornou parte da parcela de ${dados.total_pessoas_com_educacao_superior} bilhão de pessoas que conseguem concluir o ensino superior.`
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
    }
    
    visualizarInformacoesGlobais()