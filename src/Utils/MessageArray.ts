
export interface MessageItem {
  id: string | number
  text?: string
  image?: string
  time: string
  isMy: boolean 
  type: 'text' | 'image'
}

export interface ChatDay {
  date: string
  messages: MessageItem[]
}


export const messagesData: ChatDay[] = [
  {
    date: '19 июня 2025',
    messages: [
      {
        id: 1,
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '11:55',
        isMy: false,
        type: 'text',
      },
      {
        id: 2,
        image: '../src/assets/imgforexample.png',
        time: '11:56',
        isMy: false,
        type: 'image',
      },
      {
        id: 3,
        text: 'Круто!',
        time: '11:57',
        isMy: true,
        type: 'text',
      },
      {
        id: 4,
        text: 'А еще есть интересные факты?',
        time: '11:58',
        isMy: true,
        type: 'text',
      },
      {
        id: 5,
        text: 'Конечно! Например, знаешь ли ты, что первая фотография Земли с Луны была сделана именно на Hasselblad?',
        time: '12:01',
        isMy: false,
        type: 'text',
      },
    ],
  },
]
