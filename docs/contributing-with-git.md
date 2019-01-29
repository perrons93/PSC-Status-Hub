# Git Commands and Setup

## Pull Repo
Open git bash

Go to code folder; for example:
```shell
$ cd C:/_dev/code
```

Copy clone from repo using http option
```shell
$ git clone https://github.com/code-for-canada/project-thundercat.git
```

Login to github when prompted


## Running the application
To run the application
```shell
$ docker-compose up
```

Navigate to "localhost:80/status" to see the status of your application.

## Common git commands

### Adding a new branch

To create a new branch, run the following command
```shell
$ git checkout -b <branch_name>
```

To push the local branch to origin, do one of the following:

Option 1:
```shell
$ git push origin <branch_name>
```

Option 2:
```shell
$ git push --set-upstream origin <branch_name>
```

### Merging a change

Do not merge into master from the command line. Only do so via a merge request on github that is reviewed by another developer