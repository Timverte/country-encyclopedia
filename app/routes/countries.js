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

        willTransition(){
            alert("will transition")
        }
    },

    // simple redirect when 4 countries are in the list, already redirect to the first country
    // !!! normaly the willTransition should be called after any transitionTo , but not here ????
    // Maybe because of redirect => also calls it with {{#link-to}} 
    redirect(model){
        if (model.get('length') === 5){

            model.set('selectedCountry', )
            this.transitionTo("countries.country", model.get('firstObject').id);
        }
    }
});
