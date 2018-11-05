# Asynchronous Server Technologies: TP1

### Introduction

This TP is an introduction to routes in node.js
The goal is to use url queries to detect certain names, or instead detect if the query is not in the url.

We have 3 cases:
If the name is mine, Pierre-Louis, you get a short introduction to myself.
If it is any other name, the program says hello to the entered name.
Otherwise, the programs says there was an 404 not found error.

### Instruction

Start your terminal, and browse to the folder you have save the git to.
(use cd ... , where ... is the folder in which index.js and handles.js are.)

Use node index.js to start the server.
It will be available on port 8080.

TO access the server, open your browser, and type in or paste the url below if you are using localhost, which is the case by default:
http://localhost:8080/hello?name=Pierre-Louis

To test the program, change the value after "name=", or remove parts of the url (leave http://localhost:8080 intact)

## Authors

Pierre-Louis Imbert
