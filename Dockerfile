
FROM ubuntu:18.04

RUN apt update && apt install -y curl sudo vim wget

RUN useradd -m dev-user -s /bin/bash &&\
    echo "dev-user:dev-user" | chpasswd && adduser dev-user sudo
RUN echo "dev-user:password" | sudo chpasswd &&\
    usermod -aG sudo dev-user
RUN echo "dev-user  ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/username

# Add the node source to APT
RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

RUN sudo apt-get install -y gcc g++ make &&\
    sudo apt-get install -y nodejs libgtk2.0-0 libgtk-3-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

RUN mkdir -p /var/www/

COPY ./startup.sh /startup.sh
CMD ["/startup.sh"]