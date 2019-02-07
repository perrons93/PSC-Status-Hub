# Back-end

This back-end API is a Django application that connects to the PostgreSQL DB and exposes an API to the front-end.

This project was bootstrapped with `django-admin startproject mysite`. Details for startproject available in [this tutorial](https://docs.djangoproject.com/en/2.1/intro/tutorial01/).

## Available Scripts

In the project directory, you can run the following commands.

To get to the project directory, login to the docker conatainer with the following command: `docker exec -it container_id /bin/bash` where `container_id` is the id of the docker backend container. This id can be found by running `docker ps`.

### Tests:

### `./manage.py test`

Launches the test runner in the interactive watch mode.<br>
See the section about [Running tests](https://docs.djangoproject.com/en/2.1/topics/testing/overview/) for more information.

### Migrations:

### `python manage.py makemigrations backend`

Creates new migrations based on the changes you've made to your models.<br><br>

### `python manage.py migrate backend`

Applies migrations that haven't been migrated yet.<br><br>

### `python manage.py showmigrations backend`

Lists project's migrations and their status.<br><br>

### `python manage.py migrate <migration_name> backend`

Migrates to a previous specified version.<br><br>

See [Django Migrations](https://docs.djangoproject.com/en/2.1/topics/migrations/) for more information.