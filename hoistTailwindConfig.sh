#!/bin/bash

source_file="./tailwind.config.ts"
destination_file="./apps/mobile"
cp -f "$source_file" "$destination_file"

if [ $? -eq 0 ]; then
  echo "TailWindCSS config overwritten successfully."
else
  echo "TailWindCSS config Failed to overwrite the file."
fi