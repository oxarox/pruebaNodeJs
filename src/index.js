import app from '../src/app.js';

app.listen(app.get('port'))

console.log('server on port', app.get('port'));