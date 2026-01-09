@echo off

REM Activate the virtual environment
call estatepro_backend_env\Scripts\activate

REM Run Django development server
python manage.py runserver

REM Deactivate after server stops (Ctrl+C)
deactivate
