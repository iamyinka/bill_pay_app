import uuid
from django.db import models
import datetime
from django.contrib.auth.models import User

class Bill(models.Model):
    CATEGORY_WASTE = 'waste'
    CATEGORY_SECURITY = 'security'
    CATEGORY_ELECTRICITY = 'electricity'
    CATEGORY_OTHERS = 'others'

    CATEGORY = (
        (CATEGORY_SECURITY, "Security"),
        (CATEGORY_WASTE, "Waste"),
        (CATEGORY_ELECTRICITY, "Electricity"),
        (CATEGORY_OTHERS, "Others"),
    )

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bills')
    description = models.TextField(max_length=500, blank=True, null=True)
    category = models.CharField(max_length=15, choices=CATEGORY, default=CATEGORY_SECURITY)
    tx_ref = models.CharField(max_length=200, unique=True)
    tx_id = models.CharField(max_length=250, blank=True, null=True)
    status = models.CharField(max_length=50, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user} - NGN{self.amount}"
