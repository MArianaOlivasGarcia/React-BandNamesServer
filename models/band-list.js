const Band = require("./band");



class BandList {

    constructor(){
        this.bands = [
            new Band('Metallica'),
            new Band('Héroes del silencio'),
            new Band('Bon Jovi'),
            new Band('One Direction'),
        ]
    }


    addBand( name ){
        const nameBand = new Band( name );
        this.bands.push( nameBand )

        return this.bands;
    }


    removeBand( id ) {
        this.bands = this.bands.filter( band => band.id !== id );
    }


    getBands(){
        return this.bands;
    }


    increaseVotes( id ) {
        this.bands = this.bands.map( band => {

            if ( band.id === id) {
                band.votes += 1;
            }
            return band

        })
    }


    changeName( id, newName ) {
        this.bands = this.bands.map( band => {

            if ( band.id === id) {
                band.name = newName
            }
            return band

        })
    }

}


module.exports = BandList