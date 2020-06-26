
SSH Key fingerprint: SHA256:bNpLxMPT3gq3YjUzVKcwCm0DBxh5HJhM7ZgW5q8gynk vio@imperativedesign.net

## Docker Cheat Sheet
- run a new container and expose the appropriate ports: 
```
# docker run -it -p host_port:container_port <image_id> <command_to_run>
docker run -it -p 80:80 -p 3306:3306 -p 22:22 c3c304cb4f22 /bin/bash
```

- remove a container: `docker rm <container_id>`
- remove all containers: `docker rm $(docker ps -aq)`

1. Remove the preexisting container
2. Create and run a new container and run bash on it
3. Install the necessary packages
4. Configure apache
5. Configure the system user.
6. Setup the ssh keys
7. Start/restart the services

## 2. Run a new docker container, expose the appropriate ports, and start a new bash shell
`docker run -it -p 80:80 -p 3306:3306 -p 22:22 c3c304cb4f22 /bin/bash`

## 3. Install these things
```
apt update && apt install sudo

sudo apt update && apt install -y ssh sshd vim apache2 php mysql-server wordpress libapache2-mod-php php-mysql
```

This installs WordPress to `/var/lib/wordpress`

## 4. Edit the default site: /etc/apache2/000-default.conf
``` 
- edit the Servername
- make sure the serve directory is correct `/var/www` instead of `/var/www/html`
```

## 5. Run these commands to create a new user
useradd -m -s /bin/bash dev
echo "dev:dev" | chpasswd
adduser dev sudo
usermod -aG sudo dev
echo "dev  ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/username

# Switch to the dev user
su dev

## On your mac
# Print the contents of a file to your clipboard
cat ~/.ssh/id_rsa.pub | pbcopy

# Paste what you just copied into the container in:
```
~/.ssh/authorized_keys/id_rsa.pub
```

6. Log into mysql and execute the following query:
sudo mysql -uroot -proot

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```

# Run these commands to start the services
service apache2 restart
service mysql start
service ssh restart

If the above directory doesn't exist, create it with `mkdir /path/to/directory`


# vioswpsite.com


``````
password: UT51N0EN7tNifoJK#!
