

export const getList= (url)=> {
  return fetch(url)
      .then(res => res.json())
      .then(data => data)
}