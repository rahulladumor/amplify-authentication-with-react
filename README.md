What Is AWS Amplify?
AWS Amplify was announced in November 2017 as an open-source library for developers looking to build cloud-connected applications with JavaScript on the web or mobile platforms.
Have you ever heard of Google’s Firebase? It’s a very similar concept, but running in AWS.
AWS Amplify allows you to build apps incredibly fast, leveraging services provided by Amazon without managing any infrastructure.
AWS Amplify is a development platform for building secure, scalable mobile and web applications.
Amplify provides a set of features such as auth, analytics, API (GraphQL and REST), interactions, predictions, PubSub, storage, push notifications, and XR that enable you to build feature-rich serverless applications powered by AWS services.
Amplify covers the complete mobile application development workflow from version control and code testing to production deployment, and it easily scales with your business from thousands of users to tens of millions.
The Amplify libraries and CLI, part of the Amplify framework, are open source and offer a pluggable interface that enables you to customize and create your own plugins.

from AWS Amplify
Sounds great, so let’s see how this works!
In this first post on AWS Amplify, I will walk through the process of installing, configuring Amplify, and creating a React application with complete authentication in simple steps.

Basic Setup
First, if you don’t have Node yet, download and install it.
https:nodejs.org

You will also need an AWS account to run Amplify. Create your AWS account if you don’t have one yet.

Install the Amplify CLI
The Amplify Command Line Interface (CLI) is a unified toolchain to create, integrate, and manage the AWS cloud services for your app.

`$ sudo npm install -g @aws-amplify/cli`

Configure Amplify
Sign in to your AWS account and run:

`$ amplify configure`

Press Enter, specify the AWS region, username, and Enter again.

`amplify configure
Scanning for plugins...
Plugin scan successful
Follow these steps to set up access to your AWS account:
Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue
Specify the AWS Region
? region:  eu-west-2
Specify the username of the new IAM user:
? user name:  amplify-7T7mt
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=undefined#/users$new?step=final&accessKey&userNames=amplify-7T7mt&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess
Press Enter to continue`


Complete the AWS Amplify user creation, download the credentials, and add the remaining information in the terminal:
