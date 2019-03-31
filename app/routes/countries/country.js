import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        const model = this.modelFor('countries');
        if (params.country_id === "1")
            return [{
                id: 1,
                name: 'Afghanistan',
                part: 'Middle East',
                pic: "http://flagpedia.net/data/flags/mini/af.png"
            }];
        else if (params.country_id === "2")
            return [{
                id: 2,
                name: 'Belgium',
                part: 'Europe',
                pic: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/0/5/1/4/9200000064944150.jpg"
            }];
        else if (params.country_id === "3")
            return [{
                id: 3,
                name: 'Holland',
                part: 'Europe',
                pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/2560px-Flag_of_the_Netherlands.svg.png"
        }];
    },

    actions: { /* TODO ==> MAKE CHANGES !!! not correct 
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
          }, */
    }

    // Add something to catch the full object when sending the complete object as a param !
    
});
