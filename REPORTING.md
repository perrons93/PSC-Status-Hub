# How to generate Snyk and Accessibility reports

## Snyk:

This script will generate both backend and frontend snyk reports

In gitbash:

```shell
./run-snyk-tests.sh
```

In powershell:

```shell
.\run-snyk-tests.sh
```

These reports will be created and saved in _reports_ folder under _./project-thundercat/_.

---

## Accessibility Tool (pa11y):

This script will generate all the accessibility reports, meaning one for each URL in the application

**Note that the frontend container must be running to be able to execute the following commands properly:**

In gitbash:

```shell
./run-accessibility-check.sh
```

In powershell:

```shell
.\run-accessibility-check.sh
```

These reports will be created and saved in _reports_ folder under _./project-thundercat/_.
