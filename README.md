# Internet Security - Stress Testing Tool 

[![](https://img.shields.io/badge/author-Ora%20Lind%20Lum-red.svg)](https://github.com/lindkrasniqi/Internet_Security_Stress_Testing)
[![](https://img.shields.io/github/license/460N1/IS_Stress-Test.svg)](https://github.com/lindkrasniqi/Internet_Security_Stress_Testing/blob/main/LICENSE)
[![](https://img.shields.io/github/release/460N1/IS_Stress-Test.svg?kill_cache=1)](https://github.com/lindkrasniqi/Internet_Security_Stress_Testing/releases)

This is an assignment in Internet Security for creating a tool which allows site stress testing.

You can do anything you want with these files, but MIT license applies.

## Technology used
  * NodeJS

## First steps to do

To be able to run the script you will need to download and install NodeJS which can be found here: https://nodejs.org/en/

The script uses modules so these have to be downloaded and installed as well.
You may use the following commands in your terminal/cmd:
```
npm install async
npm install request
npm install prompt-sync

```
### Running the application

Clone the repo:
```
git clone https://github.com/lindkrasniqi/Internet_Security_Stress_Testing.git
```
Open the cloned folder:
```
cd Internet_Security_Stress_Testing
```
If you want to stress test localhost server type the following command to run the server. (--max-old-space-size=10 is a parameter that specifies the memory heap size of server) 
```
node --max-old-space-size=10 server.js
```
Then run the appication:
```
node stress-test.js 
```


