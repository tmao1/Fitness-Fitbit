var serialNumber = '55555';

var request = require('request');




  // Build the post string from an object
  // var post_data =
  //   {
  //    "latitude": 41.87,
  //    "longitude": 87.62,
  //    "altitude": 600,
  //    "currenttime": "2012-05-21T18:25:43-05:00"
  //   }

  request({
        method: 'POST',
        uri: 'http://localhost:9001/api/positions/55555',
        headers: [
          {
            name: 'content-type',
            value: 'application/x-www-form-urlencoded'
          }
        ],
          mimeType: 'application/x-www-form-urlencoded',
          body: [
            {
              name: 'latitude',
              value: 41.87
            },
            {
              name: 'longitude',
              value: 87.62
            },
            {
              name: 'altitude',
              value: 700
            },
            {
              name: 'currenttime',
              value: '2013-05-21T18:25:43-05:00'
            }
          ]


    }, function(response) {
      console.log("response ", response);
        // Continuously update stream with data
        // var body = '';
        // response.on('data', function(d) {
        //     body += d;
        // });
        // response.on('end', function() {
        //
        //     // Data reception is done, do whatever with it!
        //     var parsed = JSON.parse(body);
        //     callback({
        //         email: parsed.email,
        //         password: parsed.pass
        //     });
        // });
    });
