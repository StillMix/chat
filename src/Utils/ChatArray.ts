// Типы данных
export interface ChatItem {
  id: string | number
  name: string
  lastMessage: string
  time: string
  unreadCount?: number
  isActive?: boolean
  avatar?: string
  isYourMessage?: boolean // для сообщений "Вы: ..."
}

// Массив с данными чатов
export const chatList: ChatItem[] = [
  {
    id: 1,
    name: 'Андрей',
    lastMessage: 'Изображение',
    time: '10:49',
    unreadCount: 2,
    isActive: false,
  },
  {
    id: 2,
    name: 'Киноклуб',
    lastMessage: 'стикер',
    time: '12:00',
    isYourMessage: true,
  },
  {
    id: 3,
    name: 'Илья',
    lastMessage: 'Друзья, у меня для вас особенный выпуск новостей!...',
    time: '15:12',
    unreadCount: 4,
  },
  {
    id: 4,
    name: 'Вадим',
    lastMessage: 'Круто!',
    time: 'Пт',
    isActive: true,
    isYourMessage: true,
  },
  {
    id: 5,
    name: 'тет-а-теты',
    lastMessage: 'И Human Interface Guidelines и Material Design рекомендуют...',
    time: 'Ср',
  },
  {
    id: 6,
    name: '1, 2, 3',
    lastMessage: 'Миллионы россиян ежедневно проводят десятки часов свое...',
    time: 'Пн',
  },
  {
    id: 7,
    name: 'Design Destroyer',
    lastMessage: 'В 2008 году художник Jon Rafman начал собирать...',
    time: 'Пн',
  },
  {
    id: 8,
    name: 'Pay.',
    lastMessage: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
    time: '1 Мая 2020',
  },
  {
    id: 9,
    name: 'Стас Рогозин',
    lastMessage: 'Можно ли сегодня или завтра',
    time: '12 Апр 2020',
  },
]
