import editor from './editor'

export default {
  typeDefs: editor.typeDefs,
  resolvers: editor.resolvers,
  context: {
    models: {
      editor: editor.model
    }
  }
}