# HealthHub

## Running the Local Development Environment
1. Navigate to the `docker` folder:
    ```sh
    cd docker
    ```

2. Start the database (Postgres):
    ```sh
    docker-compose up database
    ```
    - Runs on port `5555` on the host machine but on port `5432` on the Docker network.

3. Start the server (Flask app):
    ```sh
    docker-compose up server
    ```
    - Runs on port `5005`.

4. Start the client (React app):
    ```sh
    docker-compose up client
    ```
    - Runs on port `5173`.

5. (Optional) Start pgAdmin4:
    ```sh
    docker-compose up pgadmin
    ```
    - Runs on port `5050`.

## Running the Test Suite
### Cypress (End-to-End Testing)
1. Navigate to the `docker` folder:
    ```sh
    cd docker
    ```
2. Start the Cypress test suite:
    ```sh
    docker-compose up e2e
    ```

### Vitest (Frontend Unit Testing)
1. Ensure the client Docker container is running.
2. Execute the following command within the client Docker terminal:
    ```sh
    yarn test
    ```

### Pytest (Backend Unit Testing)
1. Ensure the server Docker container is running.
2. Execute the following command within the server Docker terminal:
    ```sh
    pytest
    ```
