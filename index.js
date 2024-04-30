import * as chai from 'chai'
import supertest from 'supertest'
import schema from './schema/post_api.js'

const request = supertest('https://dummyjson.com')

let res1

// request.get('/posts/1').end((err,res)=>{
//     if(err) return console.log(err)

//     console.log(res.body)
// })

async function main() {
    //GET METHOD
    res1 = await request.get('/posts/1')
    console.log(res1.body)
    console.log("GET METHOD BERHASIL")

    //POST METHOD
    res1 = await request.post('/posts/add')
    .send({
        title: 'His mother and her family',
        body: "His mother had always taught him not to ever think of himself as better than others.",
        userId: 9,
        tags: [ 'history', 'american', 'crime' ],
        reactions: 10
      })
    console.log(res1.body)
    console.log("POST METHOD BERHASIL")

    //PUT METHOD
    res1 = await request.put('/posts/1').send({title:"Ada perubahan title dari sebelumnya"})
    console.log(res1.body)
    console.log("PUT METHOD BERHASIL")

    //DELETE METHOD
    res1 = await request.delete('/posts/1')
    console.log(res1.body)
    console.log("DELETE METHOD BERHASIL")
}

main()