## Running frontend only

```
npm start
```

## Running with Django

```
npm run build; python manage.py collectstatic --no-input; python manage.py runserver
```

## Deploying to Heroku

Add heroku remote

```
heroku git:remote -a shea-meyers-personal-website
```

and then push

```
git push heroku master
```
