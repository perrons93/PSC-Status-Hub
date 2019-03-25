# Heroku

(insert summary about heroku)

See [SETUP.md](../SETUP.md) for sets on installing Heroku

## Add Heroku to a git project

(add online steps here)

- Open a terminal with Heroku installed
- Navigate into the repo
- Run 'heroku create (insert-project-name) -> this creates a git remote called heroku
- Create and add a heroku.yml file see tutorial [here](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml#getting-started-existing-app)
- Run 'heroku stack:set container'
- Run 'git push heroku (branch name)'

## .....

'git push heroku master'

'heroku buildpacks:add heroku/nodejs'
'heroku buildpacks:add heroku/python'

Connect to github via heroku web ui

#check errors with
heroku logs --tail

#Start a dyno/webservice: (I dont think you really need this one)
heroku ps:scale (container_name)=1

#This didn't really work, but a way to build and tag:
docker build -t heroku_frontend frontend/
docker build -t heroku_backend backend/
docker run --rm -it -p 8080:8080 testing

#Should be able to build/push images with:
docker-compose up -d
heroku container:push frontend

# How to cancel a build

heroku plugins:install heroku-builds

## Specific id

heroku builds:cancel <id> -a example-app

## Cancel All

heroku builds:cancel
