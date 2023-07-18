from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('payment-status/<str:status>/<str:tx_ref>/<str:transaction_id>/', views.payment_status, name="payment-status"),
    path('form-to-checkout', views.form_to_checkout, name='form-to-checkout')
]
