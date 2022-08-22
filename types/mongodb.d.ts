/* Diable ESLint for no use of var */
/* as here it is needed for scope */
/* Only applies to dev environment */
/* eslint-disable no-var */
import {MongoClient} from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}
