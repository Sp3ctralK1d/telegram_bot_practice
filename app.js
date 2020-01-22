const TelegramBot = require('node-telegram-bot-api')

const token = "918663108:AAEV92xQVnUBfN8Pzrsp7llhS8VTbK45zHQ"

const bot = new TelegramBot(token, { polling: true })

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
// 'msg' is the received Message from Telegram
// 'match' is the result of executing the regexp above on the text content
// of the message

const chatId = msg.chat.id;
const resp = match[1]; // the captured "whatever"

// send back the matched "whatever" to the chat
bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
const chatId = msg.chat.id;
console.log(msg)

const answer = `Сообщение от @${msg.from.username}:\n${msg.text}`


bot.sendMessage("-393211191", answer)

// send a message to the chat acknowledging receipt of their message
// bot.sendMessage(chatId, 'Received your message');
});


bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id
    

    bot.sendMessage(chatId, 
                    `Привет! Если хочешь записаться, нажми кнопку "Продолжить". 
                     После записи, в ближайшее время с тобой свяжется ассистент.))`,
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