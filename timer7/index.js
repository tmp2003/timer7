module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('A minha namorada é muito linda! ❤️');
    context.log(`(Mensagem gerada às: ${timeStamp})`);
};