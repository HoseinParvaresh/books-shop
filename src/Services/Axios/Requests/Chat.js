import apiRequests from "../Configs/Configs"

async function addChat(userId,userName,bookId,createdId,createdName,title,image) {

    apiRequests.get("/chats").then(res => {
        const valid = res.data.some((chat) => {
        return chat.id === `${userId}-${bookId}`
    })
        if(!valid) {
            const newChat = {
                id: `${userId}-${bookId}`,
                participants: [{id:userId, name:userName}, {id:createdId, name:createdName}],
                book: {title,image},
                messages: []
            }
            try {
                apiRequests.post('/chats',newChat).then(res => {
                    window.location.reload()      
                })
            } catch (error) {
                console.log(error);             
            }  
        }  
    })
}

export default addChat