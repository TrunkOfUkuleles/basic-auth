
'use strict';

class OverClass {
    constructor(Smodel){
        this.model = Smodel;
        }

        signUp(obj){
            let newUser= this.model(obj)
            return newUser.save();
        }

        signIn(obj){
            let get = this.model.findOne( {username: obj.username})
            return get
        }

}

module.exports = OverClass