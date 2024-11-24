#!/bin/bash

export PUBLIC_URL="http://jimlindstrom.com/mars_tycoon/"
npm run build
rm -rf build/art/sprites/venv/
rm -f mars_tycoon.tar mars_tycoon.tar.gz
tar -cf mars_tycoon.tar build/
gzip mars_tycoon.tar
scp -i ~/.ssh/jimlindstrom-server.pem mars_tycoon.tar.gz ec2-user@jimlindstrom.com:~/
rm -f mars_tycoon.tar.gz

