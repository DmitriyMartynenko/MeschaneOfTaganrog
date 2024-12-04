from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=12, unique=True)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Excursion(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.title

class ExcursionOrder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='excursion_orders')
    excursion = models.ForeignKey(Excursion, on_delete=models.CASCADE, related_name='orders')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'Order by {self.user.name} for {self.excursion.title}'
