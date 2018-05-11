import Mock from "mockjs"


const users = {
  data:[
	  {ID:33},
	  {ID:35},
	  {ID:37},
	  {ID:39}
  ]
}

Mock.mock("/api/ping",users)

export default Mock;