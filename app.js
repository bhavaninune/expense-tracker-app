const express = require('express');
const cors = require('cors');
const sequelize = require('./util/database'); // Import Sequelize from your database configuration file
const router = require('./routes/user');
const User = require('./models/user');

const app = express();

app.use(cors());
app.use(express.json());

//app.use('/', router);
app.use('/user', router)

sequelize.sync().then(() => {
    app.listen(4002, () => {
        console.log('Server is running on port 4002');
    });
}).catch(err => console.log(err));
