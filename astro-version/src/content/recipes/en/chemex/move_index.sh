#!/bin/bash

# Find all index.md files recursively
find . -type f -name 'index.md' | while read -r filepath; do
    # Extract the directory name
    directory=$(dirname "$filepath")
    # Extract the parent directory name
    parent_directory=$(dirname "$directory")
    # Extract the base name of the directory
    base_directory=$(basename "$parent_directory")
    # Construct the new filename
    new_filename="$directory.md"
    # Move the index.md file to the parent directory and rename it
    mv "$filepath" "$new_filename"
#     echo "$filepath" "$new_filename"
done

echo "Operation completed."
