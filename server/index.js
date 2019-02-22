require('dotenv').config();
const express = require('express');
const massive = require('massive')
const session = require('express-session')

// CONTROLLERS
const ctrl = require('./controller');

// ENV
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('connected to db')
    
    const PORT = SERVER_PORT
    app.listen(PORT, () => 
        console.log(`Port ${PORT} is live!`)
    )
})

// ENDPOINTS
app.get('/api/list', ctrl.getList);

app.post('/api/list', ctrl.addHome);

app.delete('/api/list/:id', ctrl.deleteHome);

app.put('/api/list/:id', ctrl.updateHome);
