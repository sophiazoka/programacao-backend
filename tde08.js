const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.get('/tasks', async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
});


app.post('/tasks', async (req, res) => {
    const { name, description, isDone } = req.body;
    const task = await prisma.task.create({
        data: { name, description, isDone },
    });
    res.status(201).json(task);
});


app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, isDone } = req.body;
    try {
        const task = await prisma.task.update({
            where: { id: parseInt(id) },
            data: { name, description, isDone },
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(404).send('Task not found');
    }
});


app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.task.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(404).send('Task not found');
    }
});

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});
