import Controller from '@ember/controller';

export default Controller.extend({
  username: null,
  password: null,

  actions:{
    authenthicate(){
        if (this.get('username') == null && this.get('password') == null)
          return false;
    },

    login(user, pass){
      // somehow place user and pass into the defined username and password

      if (authenthicate()){

      } else {

      }
    }
  }
});
