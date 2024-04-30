import * as chai from 'chai'
import schema from '../schema/post_api.js'
import chaiJsonSchemaAjv from 'chai-json-schema-ajv'
import supertest from 'supertest'

chai.use(chaiJsonSchemaAjv)

const {expect} = chai
const request = supertest('https://dummyjson.com')
let res

it("Testing API untuk ID data number 1", async function () {
    res = await request.get("/posts/1")

    expect(res.body).to.be.jsonSchema(schema)
    expect(res.body.title).to.equal('His mother had always taught him')
})
