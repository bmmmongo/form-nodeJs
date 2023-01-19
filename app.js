const express = require("express");

const app = express();

app.use(express.urlencoded());

app.get("/", function(request, response, next){
    response.send(`
    <form method="POST" action="/">
        <div>
            <label>First Name</label>
            <input type="text" name="first_name" id="first_name"  />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" name="last_name" id="last_name"/>
        </div>
        <div>
            <input type="submit" name="submit_button"/>
        </div>
    </form>
    `);
})

app.post('/', function(request, response, next){

    const formData = request.body
	response.send(`
        <div>
            <h3>Welcome ${formData.first_name} ${formData.last_name} </h3>
        </div>
    `);
    // console.log(request.body);


});

app.listen(3000);