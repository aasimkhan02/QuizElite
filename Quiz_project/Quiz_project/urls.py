from django.contrib import admin
from django.urls import path
from Quiz_project import views
from .views import custom_login, save_quiz, get_quiz_data, fetch_quiz_data_by_key
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse, HttpResponseNotFound

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', custom_login, name='custom_login'),
    path('', views.home, name='home'),
    path('quizes/', views.quizes, name='quizes'),
    path('logout/', views.logout_user, name='logout_user'),
    path('ImagebasedQuiz.html', views.ImagebasedQuiz, name='ImagebasedQuiz'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('TextbasedQuiz.html', views.TextbasedQuiz, name='TextbasedQuiz'),
    path('Create.html', views.Create, name='Create'),
    path('join.html', views.join, name='join'),
    path('save_quiz/', save_quiz, name='save_quiz'),
    path('get_data/', get_quiz_data, name='get_data'), 
    path('fetch_quiz_data_by_key/', fetch_quiz_data_by_key, name='fetch_quiz_data_by_key'),
    path('RandomQuiz.html', views.RandomQuiz, name='RandomQuiz'),
]

# Serve static files during development
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
