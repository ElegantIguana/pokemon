// "const" cannot be updated
const express = require("express");
const bodyParser = require("body-parser");
const handleBars = require("express-handlebars");
const api = require("./routes/apiRoutes");
const views = require("./routes/viewsRoutes");
const app = express();
const PORT = process.env.PORT || 8000;

/*we're setting up our express server to handle to types of requests
  URL Encoded: this is the standard request created when you fill out a form 
  parameters are in the URL sample Name=John+Smith&Age=23

  extended: he "extended" syntax allows for rich 
  objects and arrays to be encoded into the urlencoded format, 

  https://stackoverflow.com/questions/6323338/jquery-ajax-posting-json-to-webservice
  JSONL { Name : 'John Smith', Age: 23}
*/
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/public'));

app.engine('handlebars', handleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

views(app);
api(app);

app.listen(PORT, ()=>{
    // Use tildes instead of quotes
    //This is called a template string
    //Lets you use variables without escaping strings
    console.log(`Listening at port ${PORT}`);

})