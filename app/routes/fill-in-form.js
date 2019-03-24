import Route from '@ember/routing/route';

export default Route.extend({
    // didUserFillInAllField: null
    // Het is niet mogelijk om variabelen te declareren in de routes
    // Dit gebeurd in de controller !


    // Actions: 
    // Deze actions zijn de mogelijk events
    // willTransition, activate, deactivate, didtransition, loading, error
    actions:{
        willTransition(transition){ 
            if (this.controller.get('didUserFillInAllField') == true){
                transition.abort();
            }
        },
    }
});
