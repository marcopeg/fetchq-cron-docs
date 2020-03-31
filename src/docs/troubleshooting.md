---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

> If there is a wrong way to do something, then someone will do it. <br /><small>Murphy's Law</small>

If you experience any problem running _FetchqCRON_, and you can't find help in this page or with the community, please [open a GitHub issue](https://github.com/marcopeg/fetchq-cron/issues) and describe what are you going through.

## Production

So far, we haven't collect any production related troubleshooting.

## Development

This section collects incidents and solutions related to the GitPod development environment.

### CORS Issues

The development environment comes configured so that the API process is opened to CORS from the client process, using internal GitPod urls.

#### Symptoms:

When running the client app, you see the network error message screen.

#### Solution:

We noticed that a Firefox plugin named **"Access Control Allow Origin"** conflict with this setup.

👉 Disable the plugin.

#### Resources:

- [Access Control Allow Origin plugin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/)
- [related GitHub issue](https://github.com/marcopeg/fetchq-cron/issues/84)

#### Thank you:

- [Amantel](https://github.com/Amantel)
