# Feminist-Bible-Phase 1  

To start contributing follow the instructions properly :

1] **Fork the repository :**

*Note: This is only needed if you want to contribute to the project.*

2] **Clone** 

 If you have forked the project, run the following command -

    git clone https://github.com/YOUR_GITHUB_USER_NAME/girlscript/Feminist-Bible-FrontEnd-Phase1

 where **YOUR_GITHUB_USER_NAME** is your GitHub handle.

 After you cloned the repository, get into the  directory by -

    cd girlscript/Feminist-Bible-FrontEnd-Phase1

3] **Add upstream** 

When a repository is cloned, it has a default remote named origin that points to your fork on GitHub, not the original repository it was forked from. To keep track of the original repository, you should add another remote named upstream. For this project it can be done by running the following command -
 
    git remote add upstream https://github.com/girlscript/Feminist-Bible-FrontEnd-Phase1

*You can check that the previous command worked by running -*

    git remote -v

4] **Making a pull request**

After working on an issue, adding relevant documentation and tests, you need to push your changes to your forked repository and make a pull request. You should always push your changes in a different branch (not master).

    git checkout -b <new-branch-name>

*Make the relevant changes and then commit with a proper message:*

    git add -a
    git commit -m "<your-commit-message-here>"

Now push the changes:

    git push origin <new-branch-name>

**Instructions to run development server**

    npm run dev

