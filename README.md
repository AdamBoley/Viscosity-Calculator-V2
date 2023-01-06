# **Viscosity Calculator V2**

## Scope

This project is conceived as an upgraded version of my second Code Institute Portfolio Project - [Viscosity Calculator](https://github.com/AdamBoley/Viscosity-Calculator)

The original project was developed to showcase the JavaScript skills learnt as part of my studies. I earned a Merit grade for that project. As part of the project, I included some discussion of future work that could be undertaken. One of these was inclusion of a database to hold viscometers and their constants. I subsequently learned to use the Django framework, which allows for a database to be attached to a project. Items from this database may then be injected into the live application for use. This project will combine Django with the JavaScript calculations of the original project to improve the user experience. 

Also, as part of the original project, I attempted to make the application responsive to different screen sizes, since the scope required that the application be fully usable on a mobile device, so that scientists using the application in their laboratories could use their personal mobile devices instead of desktop or laptop computers. At the time of project submission, I thought I had achieved this, though in reality I had not. Subsequent personal testing in my laboratory at work confirmed this - some of the text overlaps with buttons. At the time of project development, I knew of Bootstrap and other front-end libraries that enable easy responsiveness to different screen sizes, but had no education in their use (I had only been coding for about 3 months at this point), so I did not use them. Another aspect of this V2 project will be to implement Bootstrap or some other front-end library to handle responsiveness.

Close to the end of the original project's development, I explored automated testing with the Jest library. As I had no experience with Jest, this quickly withered and I resorted to extensive manual testing. As part of my studies, I did explore Jest, but never implemented it in my subsequent projects. Given that the original project has a great many JavaScript functions for various calculations, it is a prime candidate for more properly exploring Jest and allowing me to become more comfortable with it.

So, the objectives for this project are:

- Implement the Django framework:
    - Attach a database to hold viscometer information
    - Enable the admin backend to allow for viscometer management
    - Create models for both Ubbelohde/suspended-flow and Zeitfuchs/cross-arm reverse-flow viscometers
    - Create a view for each of the 5 different Calculation Articles in the original project

- Implement Bootstrap to enable responsiveness:
    - Add a Bootstrap navbar to base.html
    - Add Bootstrap elements to templates for each view
    - Add Django templating language to inject various database items

- Implement automated testing of JavaScript via Jest:
    - pass values to various functions and assert that some value is returned


## Development

Below are the steps used to add Django to this project

## Notes

`python3 -m http.server` to run a development server if no Django
<br>

`python3 manage.py runserver` if Django being used

