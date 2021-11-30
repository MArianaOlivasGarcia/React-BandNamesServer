


class Sockets {

    constructor( io ){
        this.io = io

        this.socketEvents()
    }


    socketEvents() {
        this.io.on('connection', (socket) => {

            socket.on('message', ( payload ) => {
                console.log(payload)
        
                this.io.emit('message-from-server', payload)
            }) 

        })
    }




}



module.exports = Sockets;