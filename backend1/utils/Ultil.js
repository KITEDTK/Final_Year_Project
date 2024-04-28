const arrayToTree = (arr, parentId = null) =>
  arr
    .filter((item) => item.parentId === parentId)
    .map((child) => ({ ...child, children: arrayToTree(arr, child.id) }));

module.exports = {
    arrayToTree
}