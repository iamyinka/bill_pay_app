from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from bills.models import Bill
from django.contrib.auth.models import User
from bills.forms import BillForm
from django.urls import reverse


import os
import random
import string
import requests

uniq_ids = set()

def gen_trx_ref():
    allowed_chars = "".join(string.digits)
    uniq_id = "".join(random.choice(allowed_chars) for _ in range(12))
    if not int(uniq_id) in uniq_ids:
        uniq_ids.add(uniq_id)
        return uniq_id
    else:
        new_id = int(uniq_id) + random.randint(1, 10000)
        uniq_ids.add(new_id)
        return str(new_id)
    
@login_required()   
def form_to_checkout(request):
    return render(request, 'pages/form_to_checkout.html')

@login_required()
def dashboard(request):
    location = request.geo_data
    user_bills = Bill.objects.filter(user=request.user)
    user_form = PasswordChangeForm(user=request.user)
    bill_form = BillForm()
    trx_ref = gen_trx_ref()
    public_key = os.getenv('PUBLIC_KEY')
    # site_url = request.build_absolute_uri() + "payment-status/"
    site_url = request.build_absolute_uri("payment-status/")

    # print(site_url)
    
    # bill_form.amount = int(bill_form.cleaned_data['amount'])
    # bill_form.user = request.user
    # bill_form.tx_id = trx_ref
    # bill_form.save()
    # print(user_form.fields)
    if request.method == 'POST':
        bill_form = BillForm(request.POST)
        if bill_form.is_valid():
            form = bill_form.save(commit=False)
            form.user = request.user
            amount = str(form.amount).lstrip("0")
            form.tx_ref = trx_ref
            form.save()
            # process the data in form.cleaned_data as required
            # get parameters from the form
            params = {
                'public_key': public_key,
                "c_email": request.user.email,
                "c_name": request.user.get_full_name(),
                "redirect_url" : site_url,
                "tx_ref": form.tx_ref,
                "amount": int(amount),
            }
            
            return render(request, 'pages/form_to_checkout.html', params)

        user_form = PasswordChangeForm(request.user, request.POST)
        if user_form.is_valid():
            user = user_form.save()
            update_session_auth_hash(request, user)  # Important!
            #  messages.success(request, 'Your password was successfully updated!')
            return redirect('dashboard')
        else:
            return render(request, 'pages/dashboard.html', data)


            # redirect_url = request.build_absolute_uri()

            # return redirect(reverse('form-to-checkout'), params)
        # return HttpResponseRedirect('https://checkout.flutterwave.com/v3/hosted/pay')

    data = {
        'form': bill_form,
        'tx_ref': trx_ref,
        'public_key': public_key,
        'site_url': site_url,
        "user_bills": user_bills,
        'user_form': user_form,
        'location': location
    }
    return render(request, 'pages/dashboard.html', data)


def payment_status(request):
    tx_ref = request.GET.tx_ref
    status = request.GET.status

    if request.GET.tx_ref is not None and request.GET.status is not None:
        tx = Bill.objects.get(tx_ref=request.GET.tx_ref)
        tx.status = request.GET.status
        tx.tx_id = request.GET.transaction_id
        tx.save()
    else:
        return redirect('dashboard')

    data = {
        'tx': tx
    }
    return render(request, "pages/payment_status.html", data)