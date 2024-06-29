from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models.models import db


# Factory Pattern
def create_app():
    app = Flask(__name__)   
    return app


app = create_app()
CORS(app)


# Configure the database
#<protocol/database type>://<username>:<password>@<host>:<port>/<database name>
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@host.docker.internal:5555/postgres' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the Flask app with the Flask-SQLAlchemy extension.
db.init_app(app)

# Create the Flask-Migrate object.
migrate = Migrate(app, db)
