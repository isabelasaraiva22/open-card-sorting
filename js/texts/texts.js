var texts = {
    appTitle: [ `Novo menu do Portal SAS` ],
    introTitle: [ `Olá%userNameComma! Muito obrigada pela disponibilidade :)` ],
    introText: [
        `Já teve alguma dificuldade em achar algo no menu do portal SAS? Essa atividade é pra você. Queremos reorganizar o menu do portal SAS de acordo com a maneira que <b>você</b> julgar melhor.`,
        `Essa atividade dura em torno de <b>10 a 15 minutos</b> para ser feito. É rapidinho e vai nos ajudar muito a entregar algo incrível pra você!`,
    ],
    introPreAuth: [
        `Para começar, como podemos lhe chamar?`,
    ],
    start: [`Iniciar`],
    nameInputPlaceholder: [`Digite seu nome`],
    // googleConnectPlaceholder: [`Aguarde...`],
    googleAuthConnect: [ `Conectar com Google` ],
    googleAuthConnectAs: [ `Continuar como` ],
    googleAuthDisconnect: [ `Desconectar` ],
    sidebarTitle: [`Abas`],
    sidebarSubtitle: [`%n de %n categorias agrupadas.`],

    newCardGroup: [`Arraste para criar um novo grupo`],
    cardTopDivider: [`<strong>Topo</strong>: mais relevante`],
    cardBottomDivider: [`<strong>Fundo</strong>: menos relevante`],
    cardGroupTitlePlaceholder: [`Dê um nome ao grupo`],

    steps: [
        {
            title: [`Passo 1`],
            text: [
                `%userName, tá vendo os nomes das abas que já existem hoje no menu do portal aqui ao lado?.`,
                `A atividade será <b>organizar essas abas e agrupá-las</b> da forma que você achar <b>mais simples de encontrar o que você quer</b> no nosso menu.`,
                `*Exemplo ilustrativo: Acho que o Banco de questões e o Minhas Avaliações se alinham em um mesmo objetivo, de elaborar uma avaliação. E como uso mais o Minhas Avaliações, ele deve estar no em 1ª posição no grupo que criei.`,
                `Arraste uma das abas para a direita para criar seu primeiro grupo.`
            ]
        },
        {
            title: [`Passo 2`],
            text: [
                `Mova as abas ao lado até que todos estejam agrupadas. Agrupe as abas que você considera relacionadas. Você pode criar quantos grupos quiser, inclusive grupos com apenas 1 aba!`,
                `Lembre-se, %userName: não tem certo ou errado, agora você que escolhe como montar o menu de acordo com o que fizer mais sentido para você!`
            ]
        },
        {
            title: [`Passo 3`],
            text: [
                `Revise os grupos e <strong>dê um nome para cada um</strong> que você criou. Pense em um título que represente as abas contidas nele.`,
            ]
        },
        {
            title: [`Passo 4`],
            text: [
                `Certifique-se de ordenar as abas mais importantes para você para cima e os que você menos usa para baixo em cada grupo.`,
            ]
        },
        {
            title: [`Passo 5`],
            text: [
                `Obrigada, %userName! Se quiser pode dar uma revisada final, e depois é só clicar em “Finalizar” ali em cima para terminar.`,
            ]
        }
    ],
    stepsRemainingTitle: [`Está faltando algum passo para você completar seu teste`],
    stepsRemainingText: [`Verifique se você completou a tarefa abaixo:`],

    endingTitle: [ `Muito obrigada %userNameComma!` ],
    endingText: [
        `Sua participação vai ajudar bastante na construção de uma experiência cada vez melhor no nosso portal.`,
        `Obrigado por ter feito parte do processo!`,
    ],

    infoButton: [ `Instruções` ],
    finishButton: [ `Finalizar` ],
    resetButton: [ `Reiniciar` ],

    anonymousLabel: [ `Anônimo` ],

    alerts: {
        generic: {
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" }
            ]
        },
        steps: {
            title: [`Instruções`],
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" }
            ]
        },
        noKeys: {
            title: [`Código App Script não encontrado`],
            text: [
                'Verifique se você gerou o link corretamente e reinicie a página.'
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" }
            ]
        },
        noSheet: {
            title: [`Falha ao conectar`],
            text: [
                `Não foi possível acessar os dados para iniciar este teste. Verifique o link ou tente novamente atualizando a página.`,
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Tentar novamente`], action: "refresh" },
                { class: [`btn-secondary`], text: [`Fechar`], action: "close" },
            ]
        },
        saveFail: {
            title: [`Falha ao salvar atividade`],
            text: [
                `Não foi possível acessar o servidor.`,
                `Aguarde um pouco e tente novamente atualizando a página.`
            ],
            buttons: [
                { class: [`btn-primary`], text: [`Fechar`], action: "close" },
                { class: [`btn-secondary`], text: [`Reiniciar`], action: "refresh" },
            ]
        },
    },
}
