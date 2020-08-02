# Recap
- imperative programming: series of discrete stps focusing more on how its done.
- declarative programming: tells the computer what it should do
- reactive programming: is the programming of event streams that happens in time

# Single Responsibility Pattern
> Means that a Class should do one and only one thing.

*A unit of code should do one and only one thing.*

SRP is not limited to classes though. Functions, Config files.

- All of your node code should flow around the SRP Principle.
    * What Does App.js do? Runs that app. Should it be responsible
    for setting up the DB? 
    * What about config.js? What should it be responsible for?

- How do you know when your code is doing too much? The and smell. 
- In a banking application, should an AccountController handle a Deposit? Why have a desposit at all? You can just have a transaction pojo and it can have a type ( debit, credit )
- How about validation above? Shoudl the AccountController have validation logic in it? 