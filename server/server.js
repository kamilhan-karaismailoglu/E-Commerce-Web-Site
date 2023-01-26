const express = require('express')
const app = express()
var cors = require('cors')
const port = 3050

app.use(cors());

app.get('/products', (req, res) => {
        var fs = require('fs');
        var path = require('path');
        var filePath = path.join(__dirname, 'db/db.json');
        fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
            if (!err) {
                res.send(JSON.parse(data))
            }
        });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
