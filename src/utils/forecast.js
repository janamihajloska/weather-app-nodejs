const request = require('request')

const forecast = (latitude,longitude ,callback) => {
    const weatherurl = ' http://api.weatherstack.com/current?access_key=7006af811ba7b3a2cce976c0c4a6299a&query= '+latitude+','+ longitude +'&units=m'
      request({url:weatherurl, json:true}, (error,{body}) => {
          if(error){
              callback('Unable to connect to server!',undefined)
          }
          else if(body.error){
              callback('Wrong coordinates, try again', undefined)
          }else{
              callback(undefined, body.current.weather_descriptions[0]+'. It is currently ' + body.current.temperature+ ' degrees out. It feels like '+ body.current.feelslike +' degrees out'          
              )
          }
      })
}

module.exports = forecast
