// These headers work correctly on netlify dev and deployed on Netlify.

exports.handler = function(event, context, callback) {
  const headers = {
    'Content-Type': 'application/json',
    'My-Custom-Header': 'header123'
  }

  const response = {
    body: JSON.stringify({
      message: 'My headers work correctly on netlify dev and deployed on Netlify',
      headers
    }),
    statusCode: 200,
    headers
  }
  callback(null, response)
}
