class Contestant {
    constructor(){
      this.index=null;
      this.name=null;
      this.answer=0;

    }
     getCount(){
          var ContestantCountRef = database.ref('ContestantCount');
          ContestantCountRef.on("value",function(data){
            ContestantCount = data.val(); })
                } 
                updateCount(count){ 
                    database.ref('/').update({ ContestantCount: count });
                    } 
                    
                    update(){
                      var contestantIndex="contestant/contestant"+this.index
                      database.ref('contestantIndex').set({
                        name: this.name,
                        answer:this.answer
                      });
                    }



                   static getContestantInfo(){
                      var ContestantInfoRef=database.ref('contestant')
                      ContestantInfoRef.on("value",(data)=>{

                        allContestant=data.val();
                      })
                   }
              }