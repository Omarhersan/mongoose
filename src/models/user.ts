const {Schema, model, SchemaTypes} = require('mongoose');


const userSchema = new Schema({
    firstName: {
        type: SchemaTypes.String,
        required: true
    },
    lastName: {
        type: SchemaTypes.String,
        required: true
    },
    email:{
        type: SchemaTypes.String,
        required: true
    },
    password : {
        type: SchemaTypes.String,
        required: true
    },
    role: {
        type: SchemaTypes.String,
        default: 'user'
    },
    status : {
        type: SchemaTypes.String,
        default: 'new'
        // new, active, blocked, deletec, archived
    }
});

const user = model('User', userSchema);

export default user;


