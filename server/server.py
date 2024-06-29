import os
from app import app
from routes.hello_world import *


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)


