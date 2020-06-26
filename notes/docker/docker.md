# Docker


## Q & A's

- **Q: What are Docker's two main types of config files?:**
A: docker-compose.yml & Dockerfile

- **Q: What is the difference between these two files?:**
A: docker-compose is how you compose multiple containers, their networking, settings, image info so that they work together. It will even pull and build images if they dont exists, expose ports, ect.. A Dockerfile is a set of instructions to build one image.


## Homework
- What is the signature for invoking  `docker build` in the cli look like?

    docker build [OPTIONS] PATH | URL | -

- What is the diffrence between `docker-compose up` and `docker-compose up --build`?

    'docker-compose up' builds the images if the images do not exist and starts the containers.
     if you add the --build option, it is forced to build the images even when not needed.

- Why is it important or a good practice to Dockerize an application?

    Because containers encapsulate everything an application needs to run, and they allow applications to be used and modified easily between environments.
    Dockerizing an application is the process of converting an application to run within a Docker container.


- What does the CMD command do at the end of a Dockerfile?

    CMD instruction allows you to set a default command, which will be executed only when you run containers without specifying a command.

- How is an entry point and CMD different?

    CMD defines default commands and/or parameters for a container.
    The CMD instruction is only utilized if there is no argument added to the run command when starting a container. Therefore, if you add an argument to the command, you override the CMD.

    ENTRYPOINT is preferred when you want to define a container with a specific executable.
    ENTRYPOINT doesn't allow you to override the command.

- What is the *context* in a Dockerfile?

    A context is a combination of several properties. These include:
    -Name
    -Endpoint configuration
    -TLS info
    -Orchestrator

- Why do you need `sleep infinite` with Docker?

    The 'sleep infinite' is useful when used within a bash shell script, for example, when retrying a failed operation or inside a loop.

- What is a YAML file?

    YAML is a superset of JSON (JavaScript Object Notation) and it can be used in conjunction with all programming languages and is often used to write configuration files.

- What is the important highlights of .yml syntax?

    YAML is case sensitive.
    YAML does not allow the use of tabs. 
    Spaces are used instead as tabs are not universally supported.


- How do you make a shell script executable?

   1. Open the terminal, Go to the directory where you want to create your script.
   2. Create a file with .sh extension.
   3. Write the script in the file using an editor. (vim?)
   4. Make the script executable with command chmod +x <fileName>.
   5. Run the script using ./<fileName>.
   (In step 5, you have to mention the path of the script if your script is in other directory.)

- What is JSON vs Javascript? 

   JS is a programming language that is used in web browsers whereas JSON is a way to format or serialize data such that it can be stored or used in network communication between a server and an application.

    The JSON values can only be one of the six datatypes 
    (strings, numbers, objects, arrays, Boolean, null). 
    JavaScript values on the other hand can be any valid JavaScript Structure.

- Whats the difference between `npm run` and `npx` 

    npx is mostly used to run scripts located in ./node_modules/.bin, but it has a few other uses, including running commands from a specific version of a package, whereas npm is for installing packages themselves.

## Resources
- https://stackoverflow.com/questions/53088634/why-is-it-that-when-i-install-a-new-npm-package-i-have-to-run-docker-compose-do