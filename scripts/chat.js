firebase.initializeApp({
    // Your Firebase configuration
  });
const db=firebase.firestore();

class Chatroom {
    constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    }
    async addChat(message){

        const now= new Date();
        const chat={
            message,
            username: this.username,
            room:this.room,
            created_at:firebase.firestore.Timestamp.fromDate(now)
        };

        const response = await this.chats.add(chat);
        return response;
    }
}

const chatroom = new Chatroom('gaming','shaun');
chatroom.addChat('hello everyone')
.then(()=>console.log('chat added'))
.catch(err=>console.log(err));
console.log(chatroom);