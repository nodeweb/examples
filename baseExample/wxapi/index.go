package wxapi

import (
	"net/http"
	"io/ioutil"
	"encoding/json"
	"fmt"
	"baseExample/redisConf"
	"github.com/go-redis/redis"
	"time"
)

const appid  = "wx7d5d25b9e902ea6c"
const appsecret  = "4e24bdeb2276cf1b3136033e9d03eaa8"

type AccessJson struct {
	Access_token string `json:"access_token"`
	Expires_in int64 `json:"expires_in"`
	Refresh_token string `json:"REFRESH_TOKEN"`
	Openid string `json:"openid"`
	Scope string `json:"scope"`
}

type TokenJson struct {
	Access_token string `json:"access_token"`
	Expires_in int64 `json:"expires_in"`
}

type UserInfo struct {
	Openid string `json:"openid"`
	Nickname string `json:"nickname"`
	Headimgurl string `json:"headimgurl"`
}


func CodeUrl(redirect_uri,scope,state string) string {
	Base := "https://open.weixin.qq.com/connect/oauth2/authorize?"
	Appid := "appid=" + appid
	Redirect_uri := "&redirect_uri=" + redirect_uri
	Response_type := "&response_type=code"
	Scope := "&scope=" + scope
	State := "&state=" + state
	Wechat_redirect := "#wechat_redirect"

	url := Base + Appid + Redirect_uri + Response_type + Scope + State + Wechat_redirect

	return url
}

func BaseToken() TokenJson {
	client := redisConf.Client
	v,err := client.Get("access_token").Result()
	if err == redis.Nil {

		Base := "https://api.weixin.qq.com/cgi-bin/token?"
		grant_type := "grant_type=client_credential"
		Appid := "&appid=" + appid
		Secret := "&secret=" + appsecret

		url := Base + grant_type + Appid + Secret

		res, err := http.Get(url)

		if err != nil {
			panic(err)
		}

		body, _ := ioutil.ReadAll(res.Body)

		res.Body.Close()

		fmt.Println("base_token=", string(body))

		err5 := client.Set("access_token",string(body),7100*time.Second).Err()

		if err5 != nil {
			panic(err5)
		}

		var token TokenJson
		if err := json.Unmarshal(body, &token); err != nil {
			panic(err)
		}
		return token
	} else if err != nil {
		panic(err)
	} else {
		var token2 TokenJson
		if err := json.Unmarshal([]byte(v),&token2);err != nil {
			panic(err)
		}
		return  token2
	}
}

func AccessToken(code string) AccessJson {
	Base := "https://api.weixin.qq.com/sns/oauth2/access_token?"
	Appid := "appid=" + appid
	Secret := "&secret=" + appsecret
	Code := "&code=" + code
	grant_type := "&grant_type=authorization_code"

	url := Base + Appid + Secret + Code + grant_type

	res,err := http.Get(url)
	if err != nil {
		panic(err)
	}

	body,_ := ioutil.ReadAll(res.Body)

	res.Body.Close()
	var accessjson AccessJson

	if err:= json.Unmarshal(body,&accessjson); err !=nil {
		panic(err)
	}
	return  accessjson
}


func GetInfo(token, openid string) UserInfo {
	Base := "https://api.weixin.qq.com/cgi-bin/user/info?"
	Atoken := "access_token=" + token
	Oid := "&openid=" + openid
	Lang := "&lang=zh_CN"

	url := Base + Atoken + Oid + Lang

	res,err := http.Get(url)

	if err != nil {
		panic(err)
	}

	body,_ := ioutil.ReadAll(res.Body)

	res.Body.Close()

	fmt.Println("wx_back=",string(body))

	var user UserInfo
	if err := json.Unmarshal(body,&user);err != nil {
		panic(err)
	}
	return user
}
