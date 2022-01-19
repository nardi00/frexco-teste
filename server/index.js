const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')

app.listen(3001)

app.use(cors())

app.get('/api', async(req, res) => {

    /* axios.get('https://www.fruityvice.com/api/fruit/all')
    .then(result => {
        console.log(result.data)
    }).catch(error => {
        if(error){
            console.log(error)
        }
    }) */

    const { data } = await axios('https://www.fruityvice.com/api/fruit/all')
    return res.json(data)

})