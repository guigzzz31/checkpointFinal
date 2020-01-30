const express = require('express');
const router = express.Router();
// const app = express();
const connection = require('../conf');
// const bodyParser = require('body-parser');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

router.post('/', (req, res) => {
  console.log(req.body);
  const formData = req.body;
  connection.query(`INSERT INTO player SET ?`, formData, err => {
    if(err) {
      console.log(err);
      res.status(500).send('Error trying insert player');
    } else {
      res.json(formData);
    }
  });
});

router.get(`/listplayer`, (req, res) => {
  const request = 'SELECT * FROM player';
  connection.query(request, (err, results) => {
    if(err) {
      res.status(500).send('Error retrieving players');
    } else {
      res.json(results);
    }
  });
});

router.delete(`/listplayer/:id`, (req, res) => {
  const idPlayer = req.params.id;
  connection.query('DELETE FROM player WHERE idPlayer = ?', [idPlayer], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Error when trying delete player");
    } else {
      res.sendStatus(200);
    }
  })
})

module.exports = router;