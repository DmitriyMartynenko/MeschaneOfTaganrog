# Generated by Django 4.2.16 on 2024-11-29 11:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('excursions', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='excursionorder',
            old_name='order_date',
            new_name='created_at',
        ),
    ]