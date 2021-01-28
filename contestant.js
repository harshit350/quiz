class Contestant {
    constructor(){}
     getCount(){
          var ContestantCountRef = database.ref('ContestantCount');
          ContestantCountRef.on("value",function(data){
            ContestantCount = data.val(); })
                } 
                updateCount(count){ 
                    database.ref('/').update({ ContestantCount: count });
                    } 
                    




                   static getContestantInfo(){
                      var ContestantInfoRef=database.ref('contestant')
                      ContestantInfoRef.on("value",(data)=>{

                        allContestant=data.val();
                      })
                   }
              }