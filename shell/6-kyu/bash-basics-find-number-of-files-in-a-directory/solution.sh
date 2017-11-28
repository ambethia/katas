#!/bin/bash

if [ $1 ]; then
  if [ -d $1 ]; then
    cd $1
    echo "There are $(find . -maxdepth 1 -type f | wc -l) files in $(pwd)"
  else
    echo "Directory not found"
  fi
else
  echo "Nothing to find"
fi
