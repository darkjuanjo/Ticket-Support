const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./controller');
// const dotenv = require('dotenv');
const passport = require('passport');
const flash = require('connect-flash');
const initializePassport = require('./config/passport-config');
const sequelize = require('./config/connection');
const helpers = require('./utils/helper');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const sess = {
    secret: 'secret',
    cookie: { expires: 20 * 60000 },
    resave: false,
    saveUninitialized: true,
}

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(router);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});