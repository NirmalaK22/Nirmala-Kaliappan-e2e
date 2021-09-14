prerequistes:
-node.js
-cypress

steps to be followed:
1.Install node.js according to your computer OS(if you dont have it in your computer) by using the link-https://nodejs.org/en/download/  
   -To check if it's installed or not use "node -v" in cmd. It will show you the version of node.js

2. Installation by following any one of the method:
  
   A) Install cypress using the cmd via npm(it's nothing but a package)
   2.1 Go to your directory using cd command
           RESULT: for example,in my case default is C:\Users\kaliappan>
   2.2 Type npm install cypress --save-dev -This will install Cypress 
           RESULT: Cypress installed.
   
   B) Install Cypress using cmd via yarn( it's a package)
   2.3 Go to your directory using cd command
           RESULT: for example,in my case default is C:\Users\kaliappan>
   2.4 Type yarn add cypress --dev  -This will install Cypress 
           RESULT: Cypress installed.
   
   C) Direct installation method by using this link https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download
           RESULT: direct download contains all packages,binaries,etc. so no need to worry about other things.

(NOTE: I installed using direct download)

3. Open Cypress
    RESULT: 1. Press windows key->type cmd,Go to the folder(where cypress installed-step 2.1 )
            2. Type npx cypress open  or yarn run cypress open  -This will open cypress

4. There you might see some default examples to go through the working procedures of Cypress Test.
