import os
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models.models import db
from dotenv import load_dotenv

load_dotenv()

# Factory Pattern
def create_app():
    app = Flask(__name__)   
    return app


app = create_app()
CORS(app)


# Configure the database
#<protocol/database type>://<username>:<password>@<host>:<port>/<database name>
sqlalchemy_database_uri = 'postgresql://' + os.environ["POSTGRES_USERNAME"] + ":" + os.environ['POSTGRES_PASSWORD'] + "@" + os.environ['POSTGRES_HOST'] + ":" + os.environ['POSTGRES_PORT'] + "/" + os.environ['POSTGRES_DATABASE_NAME']
app.config['SQLALCHEMY_DATABASE_URI'] = sqlalchemy_database_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the Flask app with the Flask-SQLAlchemy extension.
db.init_app(app)

# Create the Flask-Migrate object.
migrate = Migrate(app, db)
