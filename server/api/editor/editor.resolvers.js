//---------------------------------------------------------------
// get editor
//---------------------------------------------------------------
const editor = async (_, args, ctx) => {
  const editor = await ctx.models.editor.findOne();
  if (!editor) {
    return await createEditor(_, { input: { code: '' } }, ctx);
  }
  return editor;
};

//---------------------------------------------------------------
// create editor
//---------------------------------------------------------------
const createEditor = async (_, args, ctx) => {
  return await ctx.models.editor.create(args.input)
};

//---------------------------------------------------------------
// update editor
//---------------------------------------------------------------
const updateEditor = async (_, args, ctx) => {
  const editor = await ctx.models.editor.findById(args.input.id);
  if (!editor) {
    throw new Error('Editor not found');
  }
  const merged = { ...editor.toObject(), ...args.input };
  await ctx.models.editor.findByIdAndUpdate(args.input.id, { $set: merged });
  return merged;
};

//---------------------------------------------------------------
// resolvers : editor queries and mutations
//---------------------------------------------------------------
export default {
  Query: {
    editor,
  },
  Mutation: {
    updateEditor
  },
};
