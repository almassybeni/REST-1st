const express = require('express');

const app = express();

const port = 3000;

//Middleware - köztes alkalmazások
app.use(express.json());

const courses = [
    {id: 1,name: 'course1',},
    {id: 2,name: 'course2',},
    {id: 3,name: 'course3',}
]

app.get('/hello', (req, res ) => {
    res.send(' sziaaaaaa');
})

app.listen(port,() => console.log(`A webszerver figyel a ${port} számú porton`))

app.get('/api/courses', (req, res) => {
    res.json(courses);
})