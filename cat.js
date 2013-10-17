var Cat =  function(cat_name, furColor){
    this.cat_name =  cat_name;
    this.furColor= furColor;
    this.tiredness= 70;
    this.hunger= 80;
    this.lonliness= 50;
    this.happiness=  15;

    this.sleep = function(numMinutes) {
        for (var i = 0; i < numMinutes; i++){
            console.log('z');
            this.tiredness--;
        }
    };

    this.feed = function(food) {
        this.hunger -= food;
    };

    this.pet = function(pets){
        for (var i = 0; i < pets; i++){
            console.log('purrr');
            this.lonliness--;
            this.happiness++;
        }
    };

    this.levels = function(){
        console.log("On a scale of 1 to 100 "+this.name+" is feeling "+this.tiredness+ "% tired,");
        console.log(this.hunger+ "% hungry.");
        console.log(this.lonliness+ "% lonely.");
        console.log(this.happiness+ "% happy.");
    };


};

var fluffy = new Cat("Fluffy", "tuxedo");
fluffy.levels();
fluffy.pet(20);