const schema = {
    type:'object',
    properties:{
        id:{type:"number"},
        title:{type:"string"},
        body:{type:"string"},
        userId:{type:"number"},
        tags:{
            type:"array",
            items:{
                type:"string"
            }
        },
        reaction:{type:'number'}
    }
}

export default schema
