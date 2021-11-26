#HOOOOOLA

Estas son las instrucciones

Primero: La base de datos se encuentra en https://github.com/Veliz97N/login_flask_token 
Luego se deben modificar las lineas presentes en la componente Login (23), Signup (20) y Private (10)
Si la base de datos presenta errores con example.user o example como tal entonces debes seguir los siguientes pasos
1. Eliminar carpeta migrate
2. mysql -u root -e "DROP DATABASE example";
3. mysql -u root -e "CREATE DATABASE example";
4. pipenv run init
5. pipenv run migrate
6. pipenv run upgrade