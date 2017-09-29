# -*- coding:UTF-8 -*-
from django.core.cache import cache
import requests
import xml.etree.ElementTree as ET
import time,random,hashlib,string

AppID = 'wx123456'
AppSecret = '1234567890'


def getToken():
    baseUrl = 'https://api.weixin.qq.com/cgi-bin/token'
    params = {
        'grant_type':'client_credential',
        'appid':AppID,
        'secret':AppSecret,
    }

    token = cache.get('access_token')

    if token:
        str1 = token
        return str1
    else:
        r = requests.get(baseUrl,params=params)
        data = r.json()
        if data['access_token']:
            cache.set('access_token',data['access_token'],7000)
            str1 = data['access_token']
            return str1
        else:
            str1 = ''
            return str1

def getTicket():
    token = getToken()
    print('token=',token)
    baseUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket'

    if token:

        pramas = {
            'access_token':token,
            'type':'jsapi',
        }

        ticket = cache.get('ticket')

        if ticket:
            return ticket
        else:
            r = requests.get(baseUrl,params=pramas)
            data = r.json()
            if data['ticket']:
                cache.set('ticket',data['ticket'],7000)
                return data['ticket']
            else:
                str1 = ''
                return str1
    else:
        str1 = ''
        return str1

def wxconf(url):
    timestamp = str(int(time.time()))
    nonceStr = ''.join(random.sample(string.ascii_letters + string.digits, 13))
    appId = AppID

    ticket = getTicket()
    print('ticket=',ticket)
    if ticket:
        str1 = 'jsapi_ticket='+ ticket +'&noncestr='+nonceStr+'&timestamp='+timestamp+'&url='+url
        hash = hashlib.sha1()
        hash.update(str1.encode('utf-8'))
        signature = hash.hexdigest()
        print('signature=',signature)
        data = {
            'timestamp':timestamp,
            'nonceStr':nonceStr,
            'appId':appId,
            'signature':signature,
        }
        return data
    else:
        data = ''
        return data


