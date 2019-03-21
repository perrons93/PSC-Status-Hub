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

check errors with 'heroku logs --tail' in command line

heroku ps:scale (container_name)=1
