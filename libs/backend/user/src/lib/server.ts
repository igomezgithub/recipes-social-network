import cors from 'cors';
import express from 'express';

(async () => {

  console.debug("Initialize database connection...");

  const app = express();
  const port = process.env.PORT || 8080;

  // We set the CORS origin to * so that we don't need to
  // worry about the complexities of CORS this lesson. It's
  // something that will be covered in the next course.
  app.use(cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    origin: '*',
  }));

  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );

  // Start the Server
  app.listen( port, () => {
    console.log( `press CTRL+C to stop server` );
  } );
})();
