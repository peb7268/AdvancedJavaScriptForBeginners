
FROM ubuntu:18.04

RUN apt update && apt install -y curl sudo vim wget

# Add the node source to APT
RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

RUN sudo apt-get install -y gcc g++ make &&\
    sudo apt-get install -y nodejs libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

RUN mkdir -p /var/www/

# Where are we and what's there?
RUN pwd
RUN ls -al

# Is our stuff created?
RUN ls -al /var/www

# Copy in config files
WORKDIR /var/www

COPY ./config/docker/startup.sh /
CMD ["/startup.sh"]