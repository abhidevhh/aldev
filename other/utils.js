export async function postRefreshCache({ http, options, postData }) {
  const body = JSON.stringify(postData)
  const requestOptions = {
    hostname: options.hostname,
    port: options.port,
    path: '/__refresh-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body, 'utf8'),
    },
  }

  return new Promise((resolve, reject) => {
    const req = http.request(requestOptions, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve({
          ok: res.statusCode >= 200 && res.statusCode < 300,
          status: res.statusCode,
          statusText: res.statusMessage,
          body: data,
        })
      })
    })

    req.on('error', reject)
    req.write(body)
    req.end()
  })
}
