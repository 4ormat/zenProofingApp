# Zen Proofing

## Demo

#### If you don't want to download the code
Download the Expo App on your phone:
- [Expo for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pl)
- [Expo for iOS](https://itunes.apple.com/pl/app/expo-client/id982107779?l=pl&mt=8)
Once you have the app go to the [Project's Expo page](https://expo.io/@aleksformat/format-proofing-app). If you have an Android phone you will be able to scan the QR code and run the app. There's only one caveat: if you are using an iPhone you can thank Tim Cook for taking care of your privacy so much that Apple blocked the possibility of running apps through third-party apps like Expo :(
There's always a workaround though, right? ;) Last I checked, if you log in to the account that owns the project you will be able to preview it. Here are the credentials:
email: aleksandra@format.com
password: format

#### If you want to run the project on your computer, here's how:

Start off by running this command (that you might find familiar :) ) in the project root:
```
yarn start
```

On a simulator:
- iPhone - you need a Mac and Xcode. Open up Xcode, go to the top menu, choose ` Xcode -> Open Developer Tool -> Simulator`
- Android - you need [Android Studio](https://developer.android.com/studio) or you may try an app like [Genymotion](https://www.genymotion.com/). Android Studio is probably best, but it can be a hassle to install (sometimes).

Once you have your simulators fired up go to the terminal where you are running `yarn start` and choose one of the options suggested by Expo (for example `i` will run your app in the iOS simulator, `a` will run in an Android simulator);

On a real phone:
Download the Expo App on your phone:
- [Expo for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pl)
- [Expo for iOS](https://itunes.apple.com/pl/app/expo-client/id982107779?l=pl&mt=8)
Once you ran `yarn start` you will be able to see the FormatProofing app inside Expo on any phone connected to the same Wifi as you.


## What is this all about?

This here is a React Native only app built using the tools provided by [Expo](https://expo.io/).

#### What is Expo? 
Expo is a tool to get you up and running with ReactNative development very quickly without having to touch any native stuff. It's *kind of* like if Docker had a baby with Yeoman. You have to run one command (`expo init`) and you're set up with a project that you can run on your Phone or in a simulator.

Apps built with Expo can be shipped to App/Play Store, at which point end users no longer need the Expo app to see our app :)

#### What is included here?
This app is a pretty mask on top of fake data. But it's inspired by Format Proofing.

## Why proofing?

When I started planning this project I was naive and hopeful. I thought: "the webApp is written in React, I can probably re-use most of it in a React Native App!'. But after spending half a day on trying to figure out how to get Rails to play nicely with my weird requests, I remembered, 'hey! I'm NOT a back end developer! I have no idea what I'm doing!'. So I decided to focus on what I do know: a pretty frontend. And so the Zen Proofing experience came to life!
Plus, I only had 2 days, so I had to choose *something*

## The goal

The goal of this project is to make you realize we can have a BEAUTIFUL app!
