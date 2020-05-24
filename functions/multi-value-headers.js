// These headers will only be present in netlify dev, but not when deployed on
// Netlify.

exports.handler = function(event, context, callback) {
  const multiValueHeaders = {
    'Content-Type': [ 'application/json' ],
    'My-Custom-Header': [ 'header123' ]
  }

  const response = {
    body: JSON.stringify({
      message: 'My multiValueHeaders only work in netlify dev, but not when deployed on Netlify',
      multiValueHeaders
    }),
    statusCode: 200,
    multiValueHeaders
  }
  callback(null, response)
}
