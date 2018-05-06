import axios from "axios"

export const getList= (url)=> {
  return axios.get(url)
      .then(res => {
        console.log("res=",res)
        return res.data
      })
      .catch( error => {
        console.log("error=",error)
        return {err:"4044"}
      })
}