import Route from '@ember/routing/route';

export default Route.extend({
    // Het is ook mogelijk om buiten gewone action events 
    // verschillende methodes te plaatsen (typerend voor een route)
    
    //beforeModel, model, addObserver, controllerFor, get, set, serialize, 
    // setupController, toString, transitionTo,... 
    beforeModel(){
        alert("beforeModel hook - Countries !");
    },

    model(){
        return [{
            id: 1,
            name: 'Afghanistan',
            part: 'Middle East'
        },{
            id: 2,
            name: 'Belgium',
            part: 'Europe'
        },{
            id: 3,
            name: 'Holland',
            part: 'Europe'
        },{
            id: 4,
            name: 'Germany',
            part: 'Europe'
        }]
    },

    actions:{
        didTransition(){
        },

        goToCountryWithId(id){
            this.transitionTo("countries.country" , id);
        },
    }
});
