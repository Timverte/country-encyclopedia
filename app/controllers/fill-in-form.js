import Controller from '@ember/controller';

export default Controller.extend({
    // Deze controller is apart gemaakt ==> losstaand van de template en route
    // Deze controller is gemaakt om extra actions toe te voegen aan de pagina 
    // en om variabelen te gebruiken die mee kunnen gegeven worden aan de childs !!!!!

    didUserFillInAllField: false,


    // Actions: defined in the controller
    // Deze actions voorzien extra functionaliteit of berekeningen
    actions:{
        btnClicked(){
            this.transitionToRoute("index");
        }
    }
});
