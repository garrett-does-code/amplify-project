# Amplify Project

## Summary
This project will utilize the built in functionality of AWS Amplify to bootstrap a fullstack application quickly and at scale.

## Components
* [AWS Amplify](https://aws.amazon.com/amplify/)
* [Amplify Studio](https://docs.amplify.aws/console/)
* [Figma](https://www.figma.com/) collaborative design suite

## Languages
* [React](https://react.dev/)

Amplify Studio recently came out with a Design UI Library feature. This allows users to sync Figma components
with their Amplify project. After defining your data model (if using GraphQL, it requires using DataStore), you can
even configure Figma component attributes directly to your exported model! The UI Library does a ton of heavy lifting
including auto-creating Create and Update forms.

I created a simple Todo app that displays various todo widgets just to play with the studio (forgive how awful my Figma component looks).
After playing around I can say that Amplify Studio is incredible for small teams of maybe one dev and a couple designers
to go from concept to deployment in minutes.