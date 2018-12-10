const changeObjKeys = (array, additionalProp) => {
  return array.map(obj => {
    const keyValues = Object.keys(obj).map(key => {
      const newKey = additionalProp + key;
      return { [newKey.replace(/_/g, '')]: obj[key] };
    })
    return Object.assign({}, ...keyValues);
  });
};

module.exports = {
  changeObjKeys
}
