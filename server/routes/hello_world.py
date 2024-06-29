from app import app
from flask import request, jsonify
import random
import string

@app.route('/hello_world', methods=['GET'])
def hello_world():
    if request.method == "GET":
        random_string = ''.join(random.choices(string.ascii_letters + string.digits, k=12))
        return_string = "Hello, world! Here is a randomly generated string from the Flask server: {}".format(random_string)
        return jsonify(return_string), 200