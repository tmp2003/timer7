module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    // A tua mensagem especial
    context.log('A minha namorada é muito linda! ❤️');
    context.log(`(Mensagem gerada às: ${timeStamp})`);
};