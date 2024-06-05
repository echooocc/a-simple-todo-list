# Challenge
Hello :wave:

This is our challenge for potential new team members. The code is for a simple real-time TODO app. The challenge here is to fix some bugs, add some features and make some improvements.

When you're finished, you should have a real-time TODO app that two or more people could use to share TODO's with one another. Imagine a TODO list our team could use for office chores, for example.

## Notes
- When a TODO is made, completed or deleted, it should show up the same way on all clients. To test this, we recommend having two browser windows open (one incognito and one not)
- We're evaluating you on the quality and completion of the quest list below. Do you commit often? ? Did you write team friendly code? Is the UI that
you've built easy to use and easy on the eyes? :eyes:
- The challenge should take 3-6 hours
- It should be fun! If you're stuck on a bug or something needs clarification you can [email me](mailto:neil@growsumo.com?subject=Hiring Challenge) for help
- If you prefer a functional style (or some other style of programming) feel free to switch things up to suit how you write best. The codebase is intentionally small to support different styles/complete rewrites. Don't let how we've set things up get in the way of showing us your best work

##  Your Quest
- [ ] Create a repo (ideally on github) and make a `init` commit
- [ ] Commit often, with high quality comments
- [ ] Write readable, performant code
- [ ] Fix all the bugs
- [ ] Add a feature that allows users to complete tasks
- [ ] Add a feature that allows users to delete tasks
- [ ] Add a feature that allows the completion of all tasks
- [ ] Add a feature that allows the deletion of all tasks
- [ ] Add caching to the client app so that when we lose our connection we can still see our TODO's
- [ ] Give it some UX/UI :heart:, our approach is make it easy to use- _then_ make it beautiful

## Set Up
This is a Node app so you'll need Node and NPM to get it up on its feet.

```sh
npm install
npm start
```

Now open `index.html` in your browser. Things won't work at first, but once the server is running, you should see your TODO's under the input.

## Done?
Great job! When you're all finished, send me an email with a link to the repo and I will check it out! 🙌


# Notes from Echo
1. Description of the problem and solution.

Above is all the tasks I need to tackled with solution I provides, compared the files from initial commit to see new added code.

2. How to build/deploy/use your solution. Link to the hosted application if applicable.
```sh
npm install
npm start
```
[demo](https://todo-list-2017.herokuapp.com)

3. Reasoning behind your technical choices, including architectural.

socket.io is great for real time application, and files are seperated into server.js and client.js

4. Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project.

If started new applcation I would prefer to enforce the "use strict" mode, since it was built on existing code and code base is relatively small, didn't use it this time

5. Link to other projects or code you’re particularly proud of.

[link](https://github.com/echooocc)

 Changes made by automated script