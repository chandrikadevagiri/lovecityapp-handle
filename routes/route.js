exports.home=function(req,res){
    res.render('home',{title:'iLoveMyCity',
                        headline:'We Believe that every city has something to say'});
}
exports.city=function(req,res){
    var cityName=req.params.city;
    var title,headline;
    var imageArray=[1,2,3,4];
    
    if(cityName==='london'){
                            title="London";
                           headline="London is city of dreams";
    }
   else if(cityName==='us'){
                            title="us";
                           headline="Us is land of  opportunity";
    }
    else if(cityName==='india'){
                              title="india";
                           headline="It is republic of india";
    }
    res.render('city',{
        title:title,
        headline:headline,
        city:cityName,
        imageArray:imageArray});
   
}