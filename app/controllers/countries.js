import Controller from '@ember/controller';
import {observer} from '@ember/object';

export default Controller.extend({

  model: null, 

  countries : [{
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
  }],

  // TODO ==> has to move to Country ! and set the model.countryId there ! 
  actions: {
    countryIsSelected(countryId){
      let countries = this.get('countries');
      let model = this.get('model');
      let selectedCountry = this.get('selectedCountry');

      for (let i = 0; i <= countries.length; i++){
        if (countries[i].id === countryId){
          selectedCountry = countries[i];
          model.set('selectedCountry', selectedCountry);
          i = countries.length;
        }
      }

      //kan mss ook gebruik maken van model.objectAt(1);
      // als dit niet werkt is het mss omdat ik javascript objecten gebruik en geen ember objecten 
      // zie voor uitleg bij computed properties and aggregate data (Ember guide)
      this.set('model', model);
      this.set('selectedCountry', selectedCountry );

      this.transitionToRoute('countries.country', selectedCountry.id);
    },
  },

  //_modelObserver: observer('model.selectedCountry', function(){
  //  alert("a new country has been selected = " + this.get('model').selectedCountry);
  //})


});
