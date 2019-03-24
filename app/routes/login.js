import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        willTransition(transition){
            if (this.controller.get('username') == "admin" 
              && this.controller.get('password') == "admin"){
                alert("You are now logged in!");
            } else {
              transition.abort();
            }
        }
    }
});
