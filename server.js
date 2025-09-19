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

//GET végpont egy szöveges üzener visszaküldésére
app.get('/hello', (req, res ) => {
    res.send(' sziaaaaaa');
})


app.get('/api/courses', (req, res) => {
    res.json(courses);
})
//GET végpont egy kiválasztott kurzus lekérésére
app.get('/api/courses/:id' , (req, res) => {
    //Kurzus adatok keresése a courses tömbben
    const course = courses.find(c => c.id === parseInt(req.params.id));

    res.json(course);
})

app.listen(port,() => console.log(`A webszerver figyel a ${port} számú porton`))
