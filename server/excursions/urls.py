from django.urls import path

from .views import UserView, ExcursionView, ExcursionOrderView

urlpatterns = [
    path('users/', UserView.as_view(), name='user'),
    path('excursions/', ExcursionView.as_view(), name='excursion'),
    path('excursions/order/', ExcursionOrderView.as_view(), name='excursion-order')
]
