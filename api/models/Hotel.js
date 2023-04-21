import mongoose from "mongoose";
 const {Schema}=mongoose;

const HotelSchema=new mongoose.Schema(
    {
        name:{
        type:String,
        required:true

             },
        email:{
            type:String,
            required:true
    
            },
        message:{
                type:String,
                required:true
        
             },
        verified:{
                    type:Boolean,
                    default:false
            
                },
    //     distance:{
    //                     type:String,
    //                     required:true
                
    //              },
    //     photos:{
    //                 type:[String]
                    
            
    //          },

    //      disc:{
    //             type:String,
    //             required:true
        
    //      },

    //      rating:{
    //         type:Number,
    //         min:0,
    //         max:5
    //     },

    //     rooms:{
    //         type:[String],
    //         min:0,
    //         max:5
    //     },

    //     cheapestPrice:{
    //         type:Number,
    //         required:true
    //     },
    //     featured:{
    //         type:Boolean,
    //        default:false
    //     }
    
     
     }


);

export default mongoose.model("Hotel",HotelSchema)
