export interface Product {
    _id : string ;
    title : string ;
    price : number ;
    description? : string ;
    productImage? : {
       asset : {
        _ref : string ;
        _type : "image" ; 
       }
    };
    tags : string ;
    dicountPercentage? : number ;
    isNew : boolean ;
    isAvailable : boolean ;
    slug : {
        _type : "slug" ;
        current : string ;
    }


}


