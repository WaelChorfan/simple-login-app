var User = require('./models/user');

module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index.ejs', { message: '' })
    });

    //open signup page
    app.get('/signup', (req, res) => {
        console.log("ok");
        res.render('signup.ejs', { message: 'Victory' });

    });

    //enter user details 
    app.post('/signup', (req, res) => {

        console.log("-in sign up now-");
        var newUser = new User();

        var em = req.body.email;
        var pass = req.body.password;

        User.count({
            local: {
                username: em,
                password: pass
            }
        }).then(
            (count) => {
                if (count > 0) {
                    res.render( 'signup.ejs',{message : em+"already exists,chose a new one"})
                } else {
                    newUser.local.username=em;
                    newUser.local.password=pass;
                    newUser.save(function  (err) {   if(err) throw err;});
                    res.render('index.ejs',{message : em+"registred successfully"})
  
                }
            }
        )



    });



    //go to login page 
    app.get('/login', (req, res) => {
        res.render('login.ejs',{message:''});

    });


    //verify user  login
    app.post('/login', (req, res) => {
        var newUser = new User();

        var em = req.body.email;
        var pass = req.body.password;
       
        User.count({
            local: {
                username: em,
                password: pass
            }
        }).then(
            (count) => {
                if (count > 0) {
                    res.render( 'index.ejs',{message : "welcome "+em})
                } else {
                    res.render('login.ejs',{message :"user not found"})
  
                }
            }
        )
    });






}