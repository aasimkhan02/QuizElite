# Generated by Django 5.0.2 on 2024-04-24 12:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Quiz_app', '0002_quiz_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='option',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Quiz_app.option'),
        ),
        migrations.AlterField(
            model_name='answer',
            name='question',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Quiz_app.question'),
        ),
    ]
