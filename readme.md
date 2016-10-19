# Plucky-shell

Will run shell commands

# Usage

Plucky-shell will either run a single shell command (change later to run multiple) or run a single bash script.  

If everything passes then it will return a code of 0 and an object with property "result" which is what stdout of the command.  

If it fails then plucky-shell will return a code of 1 and an object with property "status" which is a string of the stdout command.  