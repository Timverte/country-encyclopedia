import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(){
        // this.replace ==> will replace the URL in the browsers history
        alert("beforeModel hook - Index !");
        //this.replaceWith("countries");
        this.transitionTo("countries");
        //this.transitionTo doesn't change the url , will just add the new URL to history
    },

    actions:{
        willTransition(transition){
            alert("willTransition from index");
        },

        didTransition(){
            alert("didTransition to index");
        }
    }
});
