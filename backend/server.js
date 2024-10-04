const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/places', (req, res) => {

  const places = [
    { id: 1, name: 'Gothic Manor', description: 'A spooky old house', image: 'manor.jpg' },
    { id: 2, name: 'Haunted Forest', description: 'A dark and misty wood', image: 'forest.jpg' },
  ];
  res.json(places);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));