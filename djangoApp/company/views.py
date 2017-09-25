from django.shortcuts import render
from django.http import HttpResponse as res
from .models import Country,State,District
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

# Create your views here.

@csrf_exempt
def getstate(req,pk):
    if req.method == 'POST':
        try:
            p = Country.objects.get(pk=pk)
        except Country.DoesNotExist:
            return res('没有数据')
        else:
            s_state = p.state_set.all()
            return res(serializers.serialize('json',s_state,ensure_ascii=False))
    else:
        return res('404')

@csrf_exempt
def getdistrict(req,pk):
    try:
        p = State.objects.get(pk=pk)
    except State.DoesNotExist:
        return res('没有找到数据')
    else:
        s_district = p.district_set.all()
        #获取字段对应verbosename
        exclude_fields = ['user','add_time','id']
        params = [f for in District._meta.fields if f not in exclude_fieldsd]
        return res(serializers.serialize('json',s_district,ensure_ascii=False))


