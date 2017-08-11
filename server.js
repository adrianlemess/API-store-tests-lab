//server.js
import bodyParser from 'body-parser';
import app from './src/app';

const port = 8090;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
