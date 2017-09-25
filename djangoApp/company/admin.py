from django.contrib import admin
from django import forms


from .models import Company,State,Country,District

# Register your models here.



class CompanyAdminForm(forms.ModelForm):

    state =  forms.ModelChoiceField(label='地市',queryset=State.objects.none())
    district = forms.ModelChoiceField(label='区域',queryset=State.objects.none())

    def __init__(self, *args, **kwargs):
        ins = kwargs.get('instance')
        super(CompanyAdminForm, self).__init__(*args, **kwargs)

        if ins and ins.country:
            self.fields['state'].queryset = State.objects.filter(country=ins.country)
        if ins and ins.district:
            self.fields['district'].queryset = District.objects.filter(state=ins.state)

        if 'state' in self.data and self.data['country']:
            self.fields['state'].queryset = State.objects.filter(country=self.data['country'])
        if 'district' in self.data and self.data['state']:
            self.fields['district'].queryset = District.objects.filter(state=self.data['state'])



    class Meta:
        model = Company
        fields = '__all__'
        #exclude=['state']


class CompanyAdmin(admin.ModelAdmin):
    form = CompanyAdminForm


admin.site.register(Company,CompanyAdmin)
admin.site.register(Country)
admin.site.register(State)
admin.site.register(District)
