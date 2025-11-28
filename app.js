const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Масив для зберігання даних (простий приклад)
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// GET ендпоінт
app.get('/api/data', (req, res) => {
  res.json(data);
});

// POST ендпоінт
app.post('/api/data', (req, res) => {
  const newItem = req.body;
  newItem.id = data.length + 1;
  data.push(newItem);
  res.json({ message: 'Дані успішно додані', newItem });
});

// PUT ендпоінт
app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;

  data = data.map(item => (item.id === id ? { ...item, ...updatedItem } : item));

  res.json({ message: `Дані для ID ${id} успішно оновлені`, updatedItem });
});

// DELETE ендпоінт
app.delete('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data = data.filter(item => item.id !== id);
  res.json({ message: `Дані для ID ${id} успішно видалені` });
});

app.listen(port, () => {
  console.log(`Сервер слухає на порту ${port}`);
});