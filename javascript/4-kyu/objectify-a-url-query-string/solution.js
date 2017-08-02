const convertQueryToMap = (query) => {
  const set = (obj, path, value) => {
    const key = path.pop()
    if (path.length > 0) {  
      if (!obj.hasOwnProperty(key)) obj[key] = {}
      set(obj[key], path, value)
    } else {
      obj[key] = value
    }
  }
  const retObj = {}
  query.split('&').forEach(pair => {
    let [path, value] = pair.split('=')
    if (path) set(retObj, path.split('.').reverse(), decodeURIComponent(value))
  })
  return retObj
}