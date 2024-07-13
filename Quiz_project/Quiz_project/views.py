from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponseNotFound, HttpResponseBadRequest
from Quiz_app.models import Quiz, Question, Option, Answer
import random
import string
import logging

def home(request):
    return render(request, 'Landing.html')

def custom_login(request):
    if request.method == 'POST':
        if 'login_form' in request.POST:
            username = request.POST['Login_username']
            password = request.POST['Login_password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
        elif 'register_form' in request.POST:
            username = request.POST['username']
            email = request.POST['email']
            password = request.POST['password']
            user = User.objects.create_user(username=username, email=email, password=password)
            login(request, user)
            return redirect('custom_login')

    return render(request, 'Login.html')

def logout_user(request):
    logout(request)
    return redirect('home')

def quizes(request):
    return render(request, 'Quizes.html')

def ImagebasedQuiz(request):
    return render(request, 'ImagebasedQuiz.html')

def contact(request):
    return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html')

def TextbasedQuiz(request):
    return render(request, 'TextbasedQuiz.html')

def Create(request):
    return render(request, 'Create.html')

def join(request):
    return render(request, 'join.html')

def RandomQuiz(request):
    return render(request, 'RandomQuiz.html')


def save_quiz(request):
    if request.method == 'POST':
        # Retrieve form data
        quiz_title = request.POST.get('quizTitle')
        number_of_questions = int(request.POST.get('numberOfQuestions'))

        # Generate a unique random key for the quiz
        quiz_key = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))

        # Save the quiz with the generated key
        quiz = Quiz.objects.create(title=quiz_title, key=quiz_key)

        # Save questions, options, and answers associated with the quiz key
        for i in range(number_of_questions):
            question_text = request.POST.get(f'question{i}')
            question = Question.objects.create(quiz=quiz, question_text=question_text)

            for j in range(1, 5):
                option_text = request.POST.get(f'option{j}{i}')
                Option.objects.create(question=question, option_text=option_text)

            answer_option_name = request.POST.get(f'answer{i}')
            correct_option_text = request.POST.get(answer_option_name)
            correct_option = Option.objects.get(question=question, option_text=correct_option_text)
            Answer.objects.create(question=question, option=correct_option)

        # Redirect to a success page or any other page
        return redirect('RandomQuiz')

    # Handle GET request or other cases
    return render(request, 'RandomQuiz.html')

def get_quiz_data(request):
    try:
        # Retrieve quiz data from the database
        quiz = Quiz.objects.first()  # Example: Fetching the first quiz, you can modify this query as needed

        if not quiz:
            return HttpResponseNotFound("No quizzes available")

        questions = []
        options = []
        answers = []

        for question in quiz.question_set.all():
            questions.append(question.question_text)
            options.append([option.option_text for option in question.option_set.all()])
            # Retrieve the correct option associated with the question's answer
            correct_option = question.answer.option
            answers.append(correct_option.option_text)

        quiz_data = {
            "key": quiz.key,  # Include the quiz key in the quiz data
            "questions": questions,
            "options": options,
            "answers": answers
        }

        # Return the quiz data as JSON response
        return JsonResponse({'quiz_data': quiz_data})

    except Exception as e:
        # Log any errors that occur
        logging.error("An error occurred while fetching quiz data: %s", str(e))
        return JsonResponse({'error': str(e)}, status=500)


def fetch_quiz_data_by_key(request):
    if request.method == 'GET':
        quiz_key = request.GET.get('quiz_key')  # Assuming the key is sent as a GET parameter
        if quiz_key:
            try:
                quiz = Quiz.objects.get(key=quiz_key)
                questions = [question.question_text for question in quiz.question_set.all()]
                options = [[option.option_text for option in question.option_set.all()] for question in quiz.question_set.all()]
                answers = [question.answer.option.option_text for question in quiz.question_set.all()]

                data = {
                    'key': quiz_key,
                    'questions': questions,
                    'options': options,
                    'answers': answers
                }
                return JsonResponse({'quiz_data': data})
            except Quiz.DoesNotExist:
                return JsonResponse({'error': 'Quiz not found'}, status=404)
        else:
            return JsonResponse({'error': 'Quiz key is required'}, status=400)
    else:
        return JsonResponse({'error': 'Only GET requests are allowed'}, status=405)
