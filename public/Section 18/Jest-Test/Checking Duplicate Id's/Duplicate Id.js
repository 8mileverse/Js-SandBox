function duplicateIds(root, idSet = new Set()) {
  if (!root) return false;

  if (idSet.has(root.id)) {
    return true;
  }

  root.id && idSet.add(root.id);

  if (root.hasChildNodes()) {
    for (let child of root.children) {
      const result = duplicateIds(child, idSet);
      if (result) {
        return true;
      }
    }
  }
  return false;
}


module.exports = duplicateIds;