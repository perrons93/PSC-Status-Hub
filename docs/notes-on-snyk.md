# Notes on snyk

## How to run snyk test locally

Make sure you have [snyk](https://app.snyk.io) installed and authorized (see SETUP.md)

Snyk seems to find more results when run locally than when run in the web application.

'run-snyk-test.sh' will run snyk against frontend and backend.

There are 2 ways to run snyk locally:

### Running snyk from the root of the project

Navigate to the root of the project directory and build a tagged version of the image

```shell
docker build -t <tag_name_to_test> <directory_of_image>
```

Once the image has built, run snyk test

```shell
snyk test --docker <tag_name_to_test> --file=<path_to_dockerfile>
```

Example:
```shell
docker build -t backend_snyk_test backend/
snyk test --docker backend_snyk_test --file=backend/Dockerfile
```

Snyk will output the results to the terminal

### Running snyk from the image directory

Navigate to the image directory build a tagged version of the image

```shell
cd <directory_of_image>
docker build -t <tag_name_to_test> .
```

Once the image has built, run snyk test

```shell
snyk test --docker <tag_name_to_test> --file=<path_to_dockerfile>
```

Example:
```shell
cd backend/
docker build -t backend_snyk_test .
snyk test --docker backend_snyk_test --file=Dockerfile
```

Snyk will output the results to the terminal