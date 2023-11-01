const cookieParser = require("cookie-parser");
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const route = require('./routes');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = process.env.PORT || process.env.APPSETTING_WEBSITES_PORT || 3001;

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at port:${port}`),
);