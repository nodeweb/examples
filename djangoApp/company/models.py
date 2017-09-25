from django.db import models

# Create your models here.

class Country(models.Model):
    country = models.CharField('省份',max_length=50)
    def __str__(self):
        return self.country
    class Meta:
        verbose_name = '省份'
        verbose_name_plural = '省份'

class State(models.Model):
    country = models.ForeignKey(Country,verbose_name='省份')
    state = models.CharField('地市',max_length=50)
    def __str__(self):
        return self.state
    class Meta:
        verbose_name = '地市'
        verbose_name_plural = '地市'

class District(models.Model):
    country = models.ForeignKey(Country, verbose_name='省份')
    state = models.ForeignKey(State,verbose_name='地市')
    district = models.CharField('区域',max_length=50)
    def __str__(self):
        return self.district
    class Meta:
        verbose_name = '区域'
        verbose_name_plural = '区域'


class Company(models.Model):
    name = models.CharField('名称', max_length=200)
    country = models.ForeignKey(Country,verbose_name='省份')
    state = models.ForeignKey(State,verbose_name='地市')
    district = models.ForeignKey(District,verbose_name='区域')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '公司'
        verbose_name_plural = '公司'
