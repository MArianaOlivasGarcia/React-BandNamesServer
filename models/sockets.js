
const BandList = require('./band-list')

class Sockets {

    constructor( io ){
        this.io = io

        this.bandList = new BandList();

        this.socketEvents()
    }


    socketEvents() {
        this.io.on('connection', (socket) => {

            console.log('Cliente conectado')

            //Emitir todas las bandas
            socket.emit('current-bands', this.bandList.getBands() );

            /* VOTAR POR LA BANDA */
            socket.on('votar-band', ( id ) => {
                this.bandList.increaseVotes( id )
                this.io.emit('current-bands', this.bandList.getBands() );
            })


            /* BORRAR BANDA */
            socket.on('remove-band', ( id ) => {
                this.bandList.removeBand( id )
                this.io.emit('current-bands', this.bandList.getBands() );
            })


            /* CAMBIAR NOMBRE BANDA */
            socket.on('cambiar-nombre', ( {id, name} ) => {
                this.bandList.changeName( id, name )
                this.io.emit('current-bands', this.bandList.getBands() );
            })


            /* CREAR NOMBRE BANDA */
            socket.on('create-band', ( { name } ) => {
                this.bandList.addBand( name )
                this.io.emit('current-bands', this.bandList.getBands() );
            })

        })
    }




}



module.exports = Sockets;