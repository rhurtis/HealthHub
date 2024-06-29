import os, sys

currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)

from flask import Flask
from routes.hello_world import *

from app import app


def test_hello_world_route():

    client = app.test_client()

    url = "/hello_world"

    response = client.get(url)

    assert "Hello, world!" in response.get_data().decode('utf-8')
    assert response.status_code == 200
