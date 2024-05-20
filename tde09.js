const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let usuarios = [];
let eventos = [];
let notas = [];

app.use(bodyParser.json());

function authenticate(req, res, next) {
    const isUserLoggedIn = true;
    if (isUserLoggedIn) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

app.post('/v1/login', (req, res) => {
    const { email, password } = req.body;
    const user = usuarios.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.post('/v1/register', (req, res) => {
    const { email, password } = req.body;
    const userExists = usuarios.some(u => u.email === email);
    if (userExists) {
        res.status(409).json({ message: 'User already exists' });
    } else {
        const newUser = { id: usuarios.length + 1, email, password };
        usuarios.push(newUser);
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    }
});

app.get('/v1/eventos', authenticate, (req, res) => {
    res.status(200).json(eventos);
});

app.post('/v1/evento', authenticate, (req, res) => {
    const { nome, data, descricao } = req.body;
    const novoEvento = { id: eventos.length + 1, nome, data, descricao };
    eventos.push(novoEvento);
    res.status(201).json({ message: 'Evento adicionado com sucesso', evento: novoEvento });
});

app.put('/v1/evento/:id', authenticate, (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, data, descricao } = req.body;
    const index = eventos.findIndex(evento => evento.id === id);
    if (index !== -1) {
        eventos[index] = { id, nome, data, descricao };
        res.status(200).json({ message: 'Evento atualizado com sucesso', evento: eventos[index] });
    } else {
        res.status(404).json({ message: 'Evento não encontrado' });
    }
});

app.delete('/v1/evento/:id', authenticate, (req, res) => {
    const id = parseInt(req.params.id);
    const index = eventos.findIndex(evento => evento.id === id);
    if (index !== -1) {
        eventos.splice(index, 1);
        res.status(200).json({ message: 'Evento deletado com sucesso' });
    } else {
        res.status(404).json({ message: 'Evento não encontrado' });
    }
});

app.post('/v1/notas', authenticate, (req, res) => {
    const { content } = req.body;
    const novaNota = { id: notas.length + 1, content };
    notas.push(novaNota);
    res.status(201).json({ message: 'Nota criada com sucesso', nota: novaNota });
});

app.get('/v1/notas', authenticate, (req, res) => {
    res.status(200).json(notas);
});

app.get('/v1/eventos/:eventId/notas', authenticate, (req, res) => {
    const eventId = parseInt(req.params.eventId);
    const notasDoEvento = notas.filter(nota => nota.eventId === eventId);
    res.status(200).json(notasDoEvento);
});

app.put('/v1/notas/:id', authenticate, (req, res) => {
    const id = parseInt(req.params.id);
    const { content } = req.body;
    const index = notas.findIndex(nota => nota.id === id);
    if (index !== -1) {
        notas[index].content = content;
        res.status(200).json({ message: 'Nota atualizada com sucesso', nota: notas[index] });
    } else {
        res.status(404).json({ message: 'Nota não encontrada' });
    }
});

app.delete('/v1/notas/:id', authenticate, (req, res) => {
    const id = parseInt(req.params.id);
    const index = notas.findIndex(nota => nota.id === id);
    if (index !== -1) {
        notas.splice(index, 1);
        res.status(200).json({ message: 'Nota deletada com sucesso' });
    } else {
        res.status(404).json({ message: 'Nota não encontrada' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
