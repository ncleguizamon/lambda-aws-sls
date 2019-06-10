'use strict';
const queryString = require('querystring');
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hola ${event.pathParameters.name}`,
      input: event.name,
    }, null, 2),
  };
};

module.exports.showUser = async (event) => {
  const body = queryString.parse(event['body']);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `peticion post`,
      input: `hola ${body.name} y ${body.latsname}`
    }, null, 2),
  };
  
 
};