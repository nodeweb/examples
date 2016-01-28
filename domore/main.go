package main

import (
  "fmt"
  "crypto/tls"
  "net/http/cookiejar"
  "log"
  "net/http"
//  "io/ioutil"
  "net/url"
  "github.com/PuerkitoBio/goquery"
)


func ExampleScrape(sum int) {
 
  tr := &http.Transport{
     TLSClientConfig:    &tls.Config{InsecureSkipVerify: true},
     DisableCompression: true,
  }

  client := &http.Client{Transport: tr}
  
  client.Jar, _ = cookiejar.New(nil)
  
  resp, err := client.Get("https://jinshuju.net/f/PrYMxP")

  if err != nil {
     log.Fatal(err)
  }
  
  if err != nil {
     log.Fatal(err)
  }
  doc,_ := goquery.NewDocumentFromResponse(resp);
  utf8,_ := doc.Find("#new_entry input[name='utf8']").Attr("value");
  token,_ := doc.Find("#new_entry input[name='authenticity_token']").Attr("value");
  fmt.Printf("utf8=%s,token=%s\n",utf8,token)

  targetUrl := "https://jinshuju.net/f/PrYMxP"
  targetData := url.Values{"utf8":{utf8},
                          "authenticity_token":{token},
                          "entry[field_10]":{"3rVd"},
                          "embedded":{""},
                          "banner":{""},
                          "background":{""}}

   resp, err = client.PostForm(targetUrl, targetData)

  if err != nil {
     log.Fatal(err)
  }
  defer resp.Body.Close()
  
  doc2,_ := goquery.NewDocumentFromResponse(resp);
  msg := doc2.Find(".message").Text()
  fmt.Printf("投票第%d次，%s\n",sum,string(msg));
}

func main() {
  sum := 0
  for i := 0; i < 5; i++ {
    sum++
    ExampleScrape(sum)
  }
  fmt.Printf("你为詹少玲新投了%d票!\n",sum)
}

