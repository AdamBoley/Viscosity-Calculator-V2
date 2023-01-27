# **Viscosity Calculator V2**

## Scope

This project is conceived as an upgraded version of my second Code Institute Portfolio Project - [Viscosity Calculator](https://github.com/AdamBoley/Viscosity-Calculator)

The original project was developed to showcase the JavaScript skills learnt as part of my studies. I earned a Merit grade for that project. As part of the project, I included some discussion of future work that could be undertaken. One of these was inclusion of a database to hold viscometers and their constants. I subsequently learned to use the Django framework, which allows for a database to be attached to a project. Items from this database may then be injected into the live application for use. This project will combine Django with the JavaScript calculations of the original project to improve the user experience. 

Also, as part of the original project, I attempted to make the application responsive to different screen sizes, since the scope required that the application be fully usable on a mobile device, so that scientists using the application in their laboratories could use their personal mobile devices instead of desktop or laptop computers. At the time of project submission, I thought I had achieved this, though in reality I had not. Subsequent personal testing in my laboratory at work confirmed this - some of the text overlaps with buttons. At the time of project development, I knew of Bootstrap and other front-end libraries that enable easy responsiveness to different screen sizes, but had no education in their use (I had only been coding for about 3 months at this point), so I did not use them. Another aspect of this V2 project will be to implement Bootstrap or some other front-end library to handle responsiveness.

Close to the end of the original project's development, I explored automated testing with the Jest library. As I had no experience with Jest, this quickly withered and I resorted to extensive manual testing. As part of my studies, I did explore Jest, but never implemented it in my subsequent projects. Given that the original project has a great many JavaScript functions for various calculations, it is a prime candidate for more properly exploring Jest and allowing me to become more comfortable with it. The JavaScript files that handle the main logic of the project will also be converted to use jQuery, again with the intent of more properly exploring it.

So, the objectives for this project are:

- Implement the Django framework:
    - Attach a database to hold viscometer information - done via ElephantSQL
    - Enable the admin backend to allow for viscometer management - done, can access admin panel
    - Create models for both Ubbelohde/suspended-flow and Zeitfuchs/cross-arm reverse-flow viscometers - refined to one model for easier use
    - Create a view for each of the 5 different Calculation Articles in the original project - done

- Implement Bootstrap to enable responsiveness:
    - Add a Bootstrap navbar to base.html - done
    - Add Bootstrap elements to templates for each view - done
    - Add Django templating language to inject various database items - done

- Implement automated testing of JavaScript via Jest:
    - pass values to various functions and assert that some value is returned

- Convert vanilla JS to jQuery


## Development

Below are the steps used to add Django to this project

### Set up Django:

- Install Django V3 and Gunicorn web server:
    - `pip3 install 'django<4' gunicorn`

- Install PostgreSQL libraries:
    - `pip3 install dj_database_url psycopg2`

- Install Cloudinary library, to store JS and CSS files:
    - `pip3 install dj3-cloudinary-storage`

- Create requirements.txt file:
    - `pip3 freeze --local > requirements.txt`
    - Or
    - `pip3 freeze -l > requirements.txt`

- Create new Django project:
    - `django-admin startproject viscosity_calculator_v2 .`

- Check Django is installed and that project was started properly:
    - `python3 manage.py runserver`

- End development server with CTRL+C

- Create a Django app to hold views, models, etc:
    - `python3 manage.py startapp calculator`

- Add 'calculator' to INSTALLED_APPS in settings.py

- Make database migrations:
    - `python3 manage.py showmigrations` to show migrations that will be made
    - `python3 manage.py migrate` to commence migrations

- Create Heroku app, connect to Github repository

- Create Cloudinary account, or sign in to extant account

- Create ElephantSQL database instance

- In Heroku app settings, create Config Vars:
    - CLOUDINARY_URL, assign value of API environment variable for Cloudinary account
    - DATABASE_URL, assign value of ElephantSQL postgres database instance
    - PORT, assign value of 8000
    - SECRET_KEY, assign any value, it acts like a password to connect the heroku app with the repository/workspace

- Create `env.py` file in workspace, add to `.gitignore' file if necessary

- In `env.py`:
    - import os module
    - create 3 environment variables:
        - os.environ["DATABASE_URL"]
        - os.environ["SECRET_KEY"]
        - os.environ["CLOUDINARY_URL"]
    - assign each environment variable a value:
        - DATABASE_URL is the URL of the ElephantSQL postgres database instance
        - SECRET_KEY is the same as the SECRET_KEY variable in the Heroku app settings
        - CLOUDINARY_URL is the API environment variable for your Cloudinary account

- In settings.py:
    - import os module
    - import dj_database_url module
    - add `if os.path.isfile('env.py'): import env`
    - replace value of DATABASES dictionary with `'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))`
    - add `TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')` under BASE_DIR
    - replace value of SECRET_KEY with `os.environ.get("SECRET_KEY")`
    - add `SITE_ID = 1`

- Migrate again:
    - `python3 manage.py showmigrations`
    - `python3 manage.py migrate`

- Check ElephantSQL instance to see if migrations have completed properly:
    - Go to Browser tab
    - click Table queries button
    - a number of tables should appear, indicating that the database is wired up properly

- Run `python3 manage.py runserver` again to check that app is still working

- Django should now be set up, and we can move on to creating models, views, templates etc

### Models

I can now create the models that will be created in the database.

One model with type field, same template, two different views and hence two navbar options and urls. Each view constructs the queryset differently. One view builds the queryset from suspended flow viscometers and the other builds the queryset from reverse flow viscometers. The select element then contains the objects from the queryset as its child option elements.

The one model approach's potential problems with messed-up ordering could be tackled by ordering by viscometer type and size order - give suspended flow type an integer value of 0 and reverse flow type an integer value of 1, then all suspended flow viscometers display first and hopefully in size order

The calibration page view builds its queryset from all viscometer objects, ordered by type and size, so that the drop-down menu is populated with all viscometers

This would work for the viscometer recalibration page as well

Later, add functionality that checks current date and checks to see if this is before or after expiry date. If after expiry_date, disable in drop-down menu or update view queryset builder to disclude these viscometers 

Model information:
- class name - Viscometer
- model fields:
    - size, a DecimalField with max_digits 2, decimal_places 1, some validation for admin panel
    - serial_number, a CharField with max_length 10
    - constant, a DecimalField with max_digits 8, decimal_places 7, some validation for admin panel
    - calibration date, a DateField with auto_now_add False
    - expiry_date, a DateField with auto_now_add False
- class methods:
    - Meta with verbose_name and ordering of size and constant (ordering is a list and can accept multiple values)
    - Magic string method to return viscometer name which combines size and serial number, prefixed by L

Once all these are defined:

- Run `python3 manage.py makemigrations --dry-run` to check that Viscometer model will be created properly
- Run `python3 manage.py makemigrations` to create viscometer model
- Run `python3 manage.py migrate` to migrate viscometer model to database

### Superuser

Now I must create a superuser to enable access to the admin panel:

- Run `python3 manage.py createsuperuser`
    - Enter username
    - forgo email
    - Enter password twice

- Run `python3 manage.py runserver` to run development server

- In URL bar, append `/admin/` to access superuser sign-in page

- sign in using superuser credentials

### Views

Now the views can be created

- There will be 6 views:
    - DeterminabilitySuspendedPage
    - DeterminabilityReversePage
    - RepeatabilityPage
    - ReproducibilityPage
    - CalibrationPage
    - RecalibrationPage

- The determinability pages use the same template, and both use a GET method to use a context that triggers templating language in the template file

- DeterminabilitySupendedPage builds its queryset from suspended-flow viscometers

- DeterminabilityReversePage builds its queryset from reverse-flow viscometers

- CalibrationPage builds its queryset from all viscometers

- The other views are simple, and use their respective templates

### URLS

Now that the views have been written, they can be registered in the urls.py file

- Create a urls.py file

- Register each view with a path, including a url extension, the view and a name

### Templates

Now the templates can be created

- Create a templates directory

- Create html files in that directory, with one for each page plus another called base.html

- In base.html, create the head element with all the necessary link tags, meta tags, script tags and so on

- In base.html, create a main element, and place block content and endblock templating language elements in it

- In the other files, extend base.html and load block content

- In settings.py, in TEMPLATES, find DIRS. In the square brackets, add TEMPLATES_DIR, so that Django knows to look in the templates directory for the templates

- To load static files (CSS files, JS files), add `STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]` and `STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')`, as this tells Django to look in the static folder for these files

- Add Bootstrap to templates in standard front-end development

## Notes

`python3 -m http.server` to run a development server if no Django
<br>

`python3 manage.py runserver` if Django being used

Viscometer information page? - list all viscometers, calibration dates, expiry dates, etc