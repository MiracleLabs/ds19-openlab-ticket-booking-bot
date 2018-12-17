var express = require('express'); // requiring express module

var app = express(); //Creating reference

var bodyParser = require('body-parser'); // body-parser for post http calls

var port = process.env.PORT || 8000;  //server is listening at port 8000

//using body-parser middleware

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.post('/test', function(req, res) {
	if(req.body.queryResult.action == "Book"){
		if(req.body.queryResult.parameters.fromCity == "Detroit" && req.body.queryResult.parameters.toCity == "Atlanta"){
		res.json({
"fulfillmentMessages": [
      {
        "text": {
          "text": [
            "Sure you have below flight on that respective date,"
          ]
        },
        "platform": "FACEBOOK"
      },
      {
        "card": {
          "title": "Airline Information",
          "subtitle": 'Airlines: Delta 852,'+' '+'From: Detroit,' +' '+ 'To: Atlanta,'+' and '+'Cost: Rs 13,495'
        },
        "platform": "FACEBOOK"
      },
      {
        "quickReplies": {
          "title": "Do you want me to book this flight?",
          "quickReplies": [
            "Yes",
            "No"
          ]
        },
        "platform": "FACEBOOK"
      }
    ]
		})
	}
	else if(req.body.queryResult.parameters.fromCity == "Visakhapatnam" && req.body.queryResult.parameters.toCity == "Delhi"){
		res.json({
"fulfillmentMessages": [
      {
        "text": {
          "text": [
            "Sure you have below flight on that respective date,"
          ]
        },
        "platform": "FACEBOOK"
      },
      {
        "card": {
          "title": "Airline Information",
          "subtitle": 'Airlines: Air India 452,'+' '+'From: Visakhapatnam(VTZ),' +' '+ 'To: Delhi(DEL),'+' and '+'Cost: Rs 6508'
        },
        "platform": "FACEBOOK"
      },
      {
        "quickReplies": {
          "title": "Do you want me to book this flight?",
          "quickReplies": [
            "Yes",
            "No"
          ]
        },
        "platform": "FACEBOOK"
      }
    ]
		})
	}
	
	else if(req.body.queryResult.parameters.fromCity == "Dallas" && req.body.queryResult.parameters.toCity == "San francisco"){
		res.json({
			"fulfillmentMessages": [
      {
        "text": {
          "text": [
            "Sure, here is the available flight,"
          ]
        },
        "platform": "FACEBOOK"
      },
      {
        "card": {
          "title": "Airline Information",
          "subtitle": 'Airlines: American Airlines 152,'+' '+'From: Dallas(DFW),' +' '+ 'To: San francisco(SFO),'+' and'+' '+'Cost: Rs 24071'
        },
        "platform": "FACEBOOK"
      },
      {
        "quickReplies": {
          "title": "Do you want me to book this flight?",
          "quickReplies": [
            "Yes",
            "No"
          ]
        },
        "platform": "FACEBOOK"
      }
    ]
		})
	}
	else{
		res.json({
			"fulfillmentTex":"Sorry! we don't have any flights now"
		})
	}
}
else if(req.body.queryResult.action == "Status"){
	if(req.body.queryResult.parameters.Fnumber == "852"){
		res.json({
			"fulfillmentText":'Your flight '+ req.body.queryResult.parameters.Fnumber + ' will departs at 20:30 PM EST at Detroit Metropolitan Wayne County and boarding starts from 19:00 PM EST'
		})
	}
	else if(req.body.queryResult.parameters.Fnumber == "5646"){
		res.json({
			"fulfillmentText":'Your flight '+ req.body.queryResult.parameters.Fnumber + ' will departs at 12:15 PM EST at Las Vagas and boarding starts from 10:45 AM EST'
		})		
	}
	else if(req.body.queryResult.parameters.Fnumber == "152"){
		res.json({
			"fulfillmentText":'Your flight '+ req.body.queryResult.parameters.Fnumber + ' will departs at 7:15 AM EST at Las Vagas and boarding starts from 5:45 AM EST'
		})		
	}
}
else{
		res.json({
			"fulfillmentText":'Something went wrong!'
		})	
}	


});
app.listen(port, function() {
  console.log('running on 8000');
});