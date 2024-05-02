const arrayToTree = (arr: Array<any>, parentId: string | null = null): Array<any> =>
    arr
      .filter(item => item.parentId === parentId)
      .map(child => ({ ...child, children: arrayToTree(arr, child.id) }));
export default {arrayToTree};