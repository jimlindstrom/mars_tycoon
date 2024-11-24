#!/bin/bash

# to be run on server

cd /var/www/html
sudo rm -rf mars_tycoon
sudo tar zxvf ~ec2-user/mars_tycoon.tar.gz
sudo mv build mars_tycoon
sudo chmod a+r mars_tycoon

