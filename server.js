const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'Frontpage.html'));
});

app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/shop', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'shop.html'));
});

app.get('/careguide', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'careguide.html'));
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
