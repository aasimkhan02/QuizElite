from django.db import models
import random
import string

class Quiz(models.Model):
    title = models.CharField(max_length=100)
    key = models.CharField(max_length=10, unique=True, default='')

    def save(self, *args, **kwargs):
        # Generate a random key
        self.key = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text

class Option(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    option_text = models.CharField(max_length=200)

    def __str__(self):
        return self.option_text

class Answer(models.Model):
    question = models.OneToOneField(Question, on_delete=models.CASCADE)
    option = models.OneToOneField(Option, on_delete=models.CASCADE)

    def __str__(self):
        return f"Question: {self.question}, Option: {self.option}"