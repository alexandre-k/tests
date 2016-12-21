from django.http import Http404
from django.shortcuts import redirect
from django.views.generic import TemplateView, UpdateView, View
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.core import send_email
import stripe
from . import models
from . import forms

# Create your views here.


class HomeView(TemplateView):
    template_name = 'birdie/home.html'


class AdminView(TemplateView):
    template_name = 'birdie/admin.html'

    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super(AdminView, self).dispatch(request, *args, **kwargs)


class PostUpdateView(UpdateView):
    model = models.Post
    form_class = forms.PostForm
    template_name = 'birdie/update.html'
    success_url = '/'

    def post(self, request, *args, **kwargs):
        if getattr(request.user, 'first_name', None) == 'Martin':
            raise Http404()
        return super(PostUpdateView, self).post(request, *args, **kwargs)

pytest.set_trace()
class PaymentView(generic.View):
    def post(self, request, *args, **kwargs):
        charge = stripe.Charge.create(
            amount=100,
            currency='sgd',
            description='',
            token=request.POST.get('token')
        )
        send_mail(
            'Payment received',
            'Charge {} succeeded!'.format(charge['id']),
            'server@example',
            ['admin@example.com',],
        )
        return redirect('/')
