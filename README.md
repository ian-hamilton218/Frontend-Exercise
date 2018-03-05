## Hapara frontend coding challenge

You'll be building a simple header with a drop down menu interaction. Spend a couple of hours on this we don't want you to be losing sleep but it would be nice to finish all the points in the code spec.

### Design and behavior:

Login to invision here to see and inspect the design: https://projects.invisionapp.com/d/main#/projects/prototypes/13483555

User: dev_candidate@hapara.com

Password: feTest

To get the fonts we have used copy this code into the `<head>` of your html document:

`<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">`

### Code Spec:

Use any modern JS framework (Angular, React, Vue) to create something that follows the supplied design.
Try to include two reusable components using your framework. Examples of these might be the navigation menu on the top left and the dropdown menu on the top right.

When clicking the `student@school.org` option in the drop down the UI should change as per the design to the student view. Then when clicking the `teacher@school.org` option it should change back to it's original state.

A unit test to prove some functionality works.

### Bonus points if you provide any of the following: 

A responsive layout which adjusts to various screen sizes. The design does not include a mobile version so it is up to
the developer to use thier own judgement to present this.

OR

Integrate something cool you have seen recently in the frontend space. It's up to you it's a blank canvas.

OR

Extra special bonus points if you show us a way to take an AngularJS 1.x app and integrate a newer framework for the purpose of upgrading in the future.

### How to send it to us:

Please fork this repository or create your own git repository and provide us access to clone it when you are finished, with instructions to build and run the application.


## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

### To Install Git
```bash
sudo apt-get update
sudo apt-get install git
```

### To Install Node.js on Ubuntu

```bash
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
```

Run the script under sudo:
```bash
$ sudo bash nodesource_setup.sh
```

Install Node.js
```bash
$ sudo apt-get install nodejs
$ sudo apt-get install build-essential
```
Note: npm package come with Node.js

Check if nodejs and npm install
```bash
$ node -v
$ npm -v
```
Install MongoDB Step
Verify GPG Key
```bash
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
```

Create list file for MongoDB
``bash
$ echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
```

Update the packages list
```bash
$ sudo apt-get update
```
Install Mongodb package
```bash
$ sudo apt-get install -y mongodb-org
```
Start Mongodb
```bash
$ sudo systemctl start mongod
```

Check service status
```bash
$ sudo systemctl status mongod
```
Enable automatic start
```bash
$ sudo systemctl enable mongod
```

Enable port 27017 and 3000
```bash
$ sudo ufw allow 27017
$ sudo ufw allow 3000
```

## Downloading MEAN.JS
```bash
$ git clone https://github.com/meanjs/mean.git meanjs
```

```bash
$ npm install -g bower
```

* Gulp - Gulp is used to build the project and automate project tasks.

```bash
$ npm install gulp -g
```

Install all require package
```bash
$ npm install
```
## Run Application with gulp / npm start
```bash
$ gulp / npm start
```

Note: Make sure when you do project npm install you are normal user not root user. Google Api user integration doesn't allow to use ip address. need to use Domain Name