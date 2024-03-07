const express = require('express');
const router = express.Router();

const Book = require('../../models/Couch');

router.get('/test', (req, res) => res.send('couch route testing'));

router.get('/', (req, res) => {
  Couch.find()
    .then(couches => res.json(couches))
    .catch(err => res.status(404).json({ nocouchesfound: 'No couch found' }));
});

router.post('/', (req, res) => {
  Couch.create(req.body)
    .then(couch => res.json({ msg: 'Couch added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this couch' }));
});

router.put('/:id', (req, res) => {
  Couch.findByIdAndUpdate(req.params.id, req.body)
    .then(couch => res.json({ msg: 'Updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update the Database' }));
});

router.delete('/:id', (req, res) => {
  Couch.findByIdAndDelete(req.params.id)
    .then(couch => res.json({ msg: 'COuch entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a couch' }));
});

module.exports = router;
