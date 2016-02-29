#!/bin/bash

$NAME='xdayschallenge'

if [ "which psql" ]; then

  sudo -u postgres createuser $NAME
  sudo -u postgres -c "ALTER USER $NAME WITH PASSWORD '$NAME'"

  bundle exec rake db:create
  bundle exec rake db:migrate

fi
