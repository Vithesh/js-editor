import path from 'path';
import { importSchema } from 'graphql-import';
import resolvers from './editor.resolvers';
import model from './editor.model';

export default {
  model,
  resolvers,
  typeDefs: importSchema(path.join(__dirname, './editor.graphql')),
};
