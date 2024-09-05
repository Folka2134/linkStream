export const currentUser = {
  id: "10",
  name: "Folka",
  image: "https://via.placeholder.com/30",
  status: "online",
};

export const groups = [
  {
    id: 5,
    name: "Direct Messages",
    image: "https://via.placeholder.com/50",
    muted: false,
  },
  {
    id: 1,
    name: "Social",
    image: "https://via.placeholder.com/50",
    muted: false,
  },
  {
    id: 2,
    name: "News",
    image: "https://via.placeholder.com/50",
    muted: false,
  },
  {
    id: 3,
    name: "Gamers",
    image: "https://via.placeholder.com/50",
    muted: false,
  },
  {
    id: 4,
    name: "Development",
    image: "https://via.placeholder.com/50",
    muted: false,
  },
];

export const users = [
  {
    id: "1",
    userName: "John Doe",
    userImage: "https://via.placeholder.com/30",
    status: "online",
  },
  {
    id: "2",
    userName: "Jane Doe",
    userImage: "https://via.placeholder.com/30",
    status: "offline",
  },
  {
    id: "3",
    userName: "Jack Smith",
    userImage: "https://via.placeholder.com/30",
    status: "online",
  },
  {
    id: "4",
    userName: "Tricks",
    userImage: "https://via.placeholder.com/30",
    status: "offline",
  },
  {
    id: "10",
    userName: "Folka",
    userImage: "https://via.placeholder.com/30",
    status: "online",
  },
];

export const chats = [
  {
    id: "1",
    chatId: "123",
    members: ["1", "10"],
    senderImage: "https://via.placeholder.com/30",
    lastMessage: "That's great to hear!",
    timestamp: "12:02",
  },
  {
    id: "2",
    chatId: "523",
    members: ["2", "10"],
    senderImage: "https://via.placeholder.com/30",
    lastMessage: "That's good to hear.",
    timestamp: "12:05",
  },
  {
    id: "3",
    chatId: "623",
    members: ["3", "10"],
    senderImage: "https://via.placeholder.com/30",
    lastMessage: "I have to go now, talk to you later.",
    timestamp: "12:06",
  },
  {
    id: "4",
    chatId: "711",
    members: ["4", "10"],
    senderImage: "https://via.placeholder.com/30",
    lastMessage: "Yo!",
    timestamp: "12:08",
  },
];

export const messages = [
  {
    id: "1",
    chatId: "123",
    userId: "1",
    recipientId: "10",
    content: "Hello, how are you?",
    timestamp: new Date("2021-09-01T12:00:00"),
  },
  {
    id: "10",
    chatId: "123",
    userId: "10",
    recipientId: "1",
    content: "I'm good, thank you.",
    timestamp: new Date("2021-09-01T12:01:00"),
  },
  {
    id: "3",
    chatId: "123",
    userId: "1",
    recipientId: "10",
    content: "That's great to hear!",
    timestamp: new Date("2021-09-01T12:02:00"),
  },
  {
    id: "11",
    chatId: "123",
    userId: "10",
    recipientId: "1",
    content: "What about you?",
    timestamp: new Date("2021-09-01T12:03:00"),
  },
  {
    id: "5",
    chatId: "123",
    userId: "1",
    recipientId: "10",
    content: "I'm doing well, thanks for asking.",
    timestamp: new Date("2021-09-01T12:04:00"),
  },
  {
    id: "2",
    chatId: "523",
    userId: "2",
    recipientId: "10",
    content: "I'm good, thank you.",
    timestamp: new Date("2021-09-01T12:01:00"),
  },
  {
    id: "4",
    chatId: "523",
    userId: "2",
    recipientId: "10",
    content: "How about you?",
    timestamp: new Date("2021-09-01T12:02:00"),
  },

  {
    id: "6",
    chatId: "523",
    userId: "2",
    recipientId: "10",
    content: "That's good to hear.",
    timestamp: new Date("2021-09-01T12:05:00"),
  },
  {
    id: "7",
    chatId: "623",
    userId: "3",
    recipientId: "10",
    content: "I have to go now, talk to you later.",
    timestamp: new Date("2021-09-01T12:06:00"),
  },
  {
    id: "8",
    chatId: "523",
    userId: "2",
    recipientId: "10",
    content: "Bye!",
    timestamp: new Date("2021-09-01T12:07:00"),
  },
  {
    id: "9",
    chatId: "711",
    userId: "4",
    recipientId: "10",
    content: "Yo!",
    timestamp: new Date("2021-09-01T12:08:00"),
  },
];
