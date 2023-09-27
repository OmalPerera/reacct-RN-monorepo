#!/bin/bash

source_dir="./shared"
destination_dir="./apps/mobile/src"
cp -r "$source_dir" "$destination_dir"
echo "Shared content copied from $source_dir to $destination_dir"