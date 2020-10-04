export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    if (stringArrayOrObject === '') return true;
    if (stringArrayOrObject.length > 0) return false;
    //return stringArrayOrObject === ''
  } else if (type === 'object') {
    if (Object.keys(stringArrayOrObject).length < 1) return true;
    if (Object.keys(stringArrayOrObject).length > 0) return false;

  } else if (type === 'array') {
    if (stringArrayOrObject.length > 0) return false;
    if (stringArrayOrObject.length < 1) return true;
  }

  return false
}