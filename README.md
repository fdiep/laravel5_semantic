# Laravel / AngularJS / Semantic UI Boilerplate
---
[![Build Status](https://travis-ci.org/fdiep/laravel5_semantic.svg?branch=master)](https://travis-ci.org/fdiep/laravel5_semantic)

[AngularJS]/[Semantic UI] web app backed by the powerful [Laravel5] PHP Framework

## Pre Requisites

Install the following:

- [VirtualBox]
- [Vagrant]
- [Ansible]

## Installation

The vagrant directory stores the Vagrant file to create the VM and provision it with Ansible. Navigate to directory and install VM.

```sh
$ cd vagrant && vagrant up
```

Vagrant machine will take some time to download, install and provision itself.

The vagrant machine runs under ip **192.168.33.32**. This can be changed in the Vagrantfile in vagrant directory.

Add the following to the host machine's *hosts* file

```sh
192.168.33.32	local.laravel5_semantic.com
```

This will allow you to reach the application from the host machine by visiting *local.laravel5_semantic.com*

### Gulp Tasks

The following commands need to be run inside the vagrant machine. Unless you *npm install* inside your host machine.

Build (Need to run 2 tasks in order to build all assets)

```sh
$ gulp build
$ gulp buildVersion
```

You can pass the *--production* flag in order to build assets for production (No sourcemaps and minified)

```sh
$ gulp build --production
$ gulp buildVersion --production
```

Watch

```sh
$ gulp watch
```

### Semantic UI

Semantic UI allows you to completely customize the CSS components. Follow the [Semantic UI instructions] for more information.

The configurable Semantic UI files can be found in */project/app/resources/assets/semantic*

When you are done making the desired changes re-run the build commands.

```sh
$ gulp build
$ gulp buildVersion
```

License
----

MIT

[AngularJS]: <https://angularjs.org/>
[Semantic UI]: <http://semantic-ui.com/>
[Laravel5]: <https://laravel.com/>
[Vagrant]: <https://www.vagrantup.com/>
[Ansible]: <http://docs.ansible.com/ansible/intro_installation.html>
[VirtualBox]: <https://www.virtualbox.org/>
[Semantic UI instructions]: <http://semantic-ui.com/usage/theming.html>
