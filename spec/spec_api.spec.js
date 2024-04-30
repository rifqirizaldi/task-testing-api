import * as chai from 'chai'
import schema from '../schema/post_api.js'
import chaiJsonSchemaAjv from 'chai-json-schema-ajv'
import supertest from 'supertest'
import { describe } from 'mocha'

chai.use(chaiJsonSchemaAjv)

const {expect} = chai
const request = supertest('https://dummyjson.com')

describe("Test API", ()=>{
    it("GET ID data number 1", async function () {
       try {
        let res = await request.get("/posts/1")
        expect(res.body).to.be.jsonSchema(schema)
        console.log("GET Data Success",res.body)
       } catch (error) {
        console.log(error)
       }
    
    })

    it("POST New data", async()=>{
        try {
            let res = await request.post("/posts/add")
            .send({
                title: 'His mother and family',
                body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
                userId: 9,
                tags: [ 'history', 'american', 'crime' ],
                reactions: 10
            })
            expect(res.body).to.be.jsonSchema(schema)
            console.log("POST Data Success", res.body)
        } catch (error) {
            console.log(error)
        }
    })

    it("PUT Data with ID number 1", async()=>{
        try {
            let res = await request.post("/posts/1")
            .send({
                title: 'His mother and family',
                body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
                userId: 10,
                tags: [ 'social', 'mexico', 'wholesome' ],
                reactions: 100
            })
            expect(res.body).to.be.jsonSchema(schema)
            console.log("PUT Data Success", res.body)
        } catch (error) {
            console.log(error)
        }
    })

    it("Delete Data with ID number 1", async()=>{
        try {
            let res = await request.delete('/posts/1')
            expect(res.body).to.be.jsonSchema(schema)
            console.log("DELETE Data Success")
        } catch (error) {
            console.log(error)
        }
    })
})
