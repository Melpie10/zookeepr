const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/zookeepers.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/index.html'));
});

module.exports = router;