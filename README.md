# Frogmi Earthquake

## Backend Project
## Install

### Clone the repository

```shell
git clone https://github.com/Arkemix30/frogmi-earthquake
cd project
```

### Check your Ruby version

```shell
ruby -v
```

The ouput should start with something like `ruby 2.5.1`

If not, install the right ruby version using [rbenv](https://github.com/rbenv/rbenv) (it could take a while):

```shell
rbenv install 2.5.1
```

### Install dependencies

Using [Bundler](https://github.com/bundler/bundler):

```shell
bundle
```

### Set environment variables

Using [dotenv](https://github.com/bkeepers/dotenv):

### Initialize the database

```shell
rails db:create db:migrate
```

### Seed the database (Task)
``` shell
rails earthquake:fetch_data
```
The `earthquake` rake task fetches earthquake data from a specified source, parses the JSON response, checks if the features already exist in the database, and saves the new features into the database. It uses `Faraday` to make an HTTP GET request to retrieve the earthquake data. The task then processes the data, creates `FeatureApiDTO` objects, validates them using the `feature_valid?` method, and saves new features to the database if they do not already exist. Finally, it handles exceptions if there are any errors during the process.

## Serve

```shell
rails s
```

## Endpoints 

### GET `/api/features`
Retrieves a paginated list of features.

**Parameters**

- `page`: Current page number (default: 1)
- `per_page`: Number of items per page (default: 25)
- `mag_type` (optional): Filter features by magnitude type

**Behaviour**

- Validates pagination parameters (`page` and `per_page`).
- Fetches features based on pagination and optional `mag_type` filter.
- Constructs pagination metadata.
- Maps feature data to a response object using `FeatureDetailDTO`.
- Renders JSON response containing feature data and pagination metadata.

### GET `/api/features/:feature_id`
Retrieves details of a specific feature.

**Parameters**

- `id`: Feature ID

**Behaviour**
- Finds the feature by its ID.
- Renders JSON response containing feature details transformed into a DTO using `FeatureDetailDTO`.

### GET `/api/features/1/comments/`
Retrieves all comments associated with a specific feature.

**Parameters**

- `id`: Feature ID

**Behaviour**
- Fetches comments belonging to the feature identified by feature_id.
- Renders JSON response containing the retrieved comments.


### POST `/api/features/comments`
Creates a new comment associated with a specific feature.

**Parameters**

- `body`: Body text of the comment

**Behaviour**
- Checks if the body parameter is present. If not, returns an error response.
- Creates a new comment associated with the feature identified by feature_id and with the provided body text.
- Renders JSON response containing the newly created comment.


## CURL TESTS

The required curl tests are on the `curl_test` directory with each example response from the API.
(More info on the README file)

## Frontend Project (client)

The required frontend client is under the `client` directory. It was built with [React](https://react.dev/) using the following libraries:

- [Vite](https://vitejs.dev/) - is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Tanstack Query](https://tanstack.com/query/latest) - is a data-fetching library, it makes fetching, caching, synchronizing and updating server state in web applications a breeze.
- [React Router](https://reactrouter.com/en/main) - it enables "client side routing".
- [Shadcn](https://ui.shadcn.com/) - Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source