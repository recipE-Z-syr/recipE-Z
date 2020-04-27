# recipE-Z
we put the E-Z in recipE-Z

## Understanding the Repo

First install Node.js and expo-cli.
- Node.js: https://nodejs.org/en/download/
- expo-cli: `npm install expo-cli --global`

Then clone this repository to your local machine.

To install dependencies, navigate to the recipeE-Z folder. Run `ls` and make sure you see App.js. If you don't, do `cd recipe-z` again. 
Once you're in the folder with App.js, run `npm install` to install from package.json. Then run `expo start`. A website should open up with a QR code, it might take a second to load. 

## To preview the app:

Install Expo Client on your iPhone: https://itunes.apple.com/app/apple-store/id982107779

Scan the QR code printed by expo start with Expo Client, either in the terminal or the web UI. You may have to wait a minute while the project bundles and loads for the first time.

This app was developed for iPhones. While React Native is cross-platform, we mainly tested on iPhones, so we cannot guarantee the look and feel of the app on an Android. We will be fine-tuning Android features in the future.

If you have XCode, you may be able to run the app on an iPhone emulator by pressing `o` in the terminal after expo-start finishes loading. 

Expo comes with an SDK that provides tools for apps at https://docs.expo.io/versions/latest/sdk/overview/
