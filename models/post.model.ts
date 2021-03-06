import {Schema, Document, model} from 'mongoose';

const postSchema = new Schema({

    created: {
        type:Date
    },
    mensaje:{
        type:String
    },
    imgs:[{
        type:String
    }],
    coords:{
        type:String //Latitud,Longitus
    },
    usuario:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:[true,'Debe de existir una referencia a un usuario']
    }

});



postSchema.pre<IPost>('save',function(next){
    this.created=new Date();
    next();
});

interface IPost extends Document{

    created: Date;
    mensaje: String;
    imgs: String;
    coords: String;
    usuario: String;

}


export const Post = model<IPost>('Post',postSchema);