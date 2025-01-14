var config = {
    salvarDados: true,
    debug: false,
    waterMark: false,
    language: 'pt-br',
    video: 'default',
    lms: {
        name: 'default'
    },
    acessibility: {
        tools: true,
        outlines: false,
        vlibras: false,
        customLibras: false
    },
    behaviors: {
        adaptive: false,
        width: 1920,
        height: 1080,
        fontSize: 30
    },
    modalVoltar: {
        active: false,
        msg: 'Você quer continuar de onde parou ou reiniciar o curso?',
        yes: 'CONTINUAR',
        no: 'REINICIAR',
        color: '#0a698d'
    },
    pages: [{
            uid: 'pag01',
            src: 'pag01/index.html'
        },
        {
            uid: 'pag02',
            src: 'pag02/index.html'
        },
        {
            uid: 'pag03',
            src: 'pag03/index.html'
        },
        {
            uid: 'pag04',
            src: 'pag04/index.html'
        },
        {
            uid: 'pag05',
            src: 'pag05/index.html'
        },
        {
            uid: 'trilha1-01',
            src: 'trilha1-01/index.html'
        },
        {
            uid: 'trilha2-01',
            src: 'trilha2-01/index.html'
        },
        {
            uid: 'trilha3-01',
            src: 'trilha3-01/index.html'
        }
    ]
};
try {
    module.exports = config;
} catch (e) {}