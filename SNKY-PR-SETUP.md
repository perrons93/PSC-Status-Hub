# How to setup SNYK Autorun on each PR
Readme to document how to setup SNYK for a given repository

## Give SNYK access to the repo
 * Create/login to a SNYK account
   * https://app.snyk.io
   * [Login] -> GitHub (or other option if relevant)
   * This account must be the repo owner
 * Add relevant project
    * [Add more projects]
    * Select the relvant repo(s)
    * [Add selected repositories]
 * Wait for it to run

From here you can
 * View reports for all the relvant files
 * Create PRs with the suggested fixes
 * Set how often to run the checks
 * Modify settings for each file

## Enable SNYK to automatically run checks on every PR

This will allow SNYK to automatically run tests on every PR if there are changes detected in the given file

This is recommended for each file in each project

 * For each file
   * Click settings (the gear)
   * Scroll down to the **Snyk Test on PRs** section
   * Select the desired settings
   * [Update Snyk Test Settings]

## Enable Automatic PRs

Snyk can be configured to automatically notify developers about new vulnerabilites for a project with an email and the creation of a PR with the recommended fixes on GitHub. This can only be configured for all projects belonging to an orginization, not individual projects.

It is up to the given organization if they want to enable this kind of functionality.

To enable this:
 * Login to Snyk
 * Select the **Settings** tab
 * Select **Integrations**
 * Under **Automatic pull requests**
   * Check **Enable automatic pull requests for all projects in this organization
   * [Update Settings]