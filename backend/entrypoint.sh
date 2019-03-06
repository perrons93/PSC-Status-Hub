#!bin/bash
pip install -r requirements.txt
python manage.py makemigrations backend
python manage.py migrate backend
python manage.py runserver 0.0.0.0:8000
