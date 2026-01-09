@echo off

REM Create virtual environment
python -m venv estatepro_backend_env

REM Activate the virtual environment
call estatepro_backend_env\Scripts\activate

REM Upgrade pip (recommended)
python -m pip install --upgrade pip

REM Install dependencies
pip install -r requirements.txt

REM Deactivate the virtual environment
deactivate

echo.
echo Virtual environment "estatepro_backend_env" setup completed and deactivated.
pause
