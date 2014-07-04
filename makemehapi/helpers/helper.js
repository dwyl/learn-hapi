module.exports = function(context) {
  // console.log('context', context);
  return context.data.root.query.name + context.data.root.query.suffix;
}
