const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

// Route de test pour vérifier que l'API fonctionne
app.get('/', (req, res) => {
    res.send('API fonctionne!');
});

// Route pour récupérer les tâches
app.get('/tasks', (req, res) => {
    const tasks = [
        { id: 1, title: 'Tâche 1', description: 'Description de la tâche 1', status: 'pending' },
        { id: 2, title: 'Tâche 2', description: 'Description de la tâche 2', status: 'completed' },
    ];
    res.json(tasks);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
