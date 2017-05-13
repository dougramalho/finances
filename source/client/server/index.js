const express = require('express');
const inputs = require('./inputs.json');
const outputs = require('./outputs.json');
const caixa = require('./caixa.json');
const { port=3333, delay=0 } = require('minimist')(process.argv);
const cors = require('cors');


const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'))
    .get('/inputs', (req, res) =>
        res.status(200).json(inputs)
    )
    .get('/outputs', (req, res) =>
        res.status(200).json(outputs)
    ).get('/caixa', (req, res) =>
        res.status(200).json(caixa)
    );

app.listen(port, () => console.log('Finances server' + port + ' with a ' + delay/1000 + ' second delay'))