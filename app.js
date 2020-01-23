const TelegramBot = require('node-telegram-bot-api')

const token = "918663108:AAEV92xQVnUBfN8Pzrsp7llhS8VTbK45zHQ"

const bot = new TelegramBot(token, { polling: true })


// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg)

    const answer = `Сообщение от @${msg.from.username}:\n${msg.text}`

    
});


bot.on('callback_query', (callback_query) => {
    const message = callback_query.message
    console.log("Колбек сработал")
    console.log(callback_query.data)
    if(callback_query.data == 'aboutUs'){
        bot.sendMessage(message.chat.id, 'О нас: бла-бла-бла')
    }

    if(callback_query.data == 'sendInfo'){
        const orderText = `Кое-кто записался на прием: ${callback_query.from.username}`
        bot.sendMessage("-393211191", orderText)

    }
})


bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id
    

    bot.sendMessage(chatId, 
                    `Привет! Если хочешь записаться, нажми кнопку "Продолжить". После записи, в ближайшее время с тобой свяжется ассистент.))`,
                    { 
                        reply_markup: {
                            inline_keyboard: [[
                                {
                                    text: 'О нас',
                                    callback_data: 'aboutUs'
                                },
                                {
                                    text: 'Продолжить',
                                    callback_data: 'sendInfo'
                                }
                            ]]
                        }
                    
                    }
    )
})