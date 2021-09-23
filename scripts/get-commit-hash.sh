#!/bin/bash

function get_hash() {
  git describe --always --dirty | tr -ds "\n" ""
}

function update_hash() {
  echo "const hash = \"$(get_hash)\";\n\nexport default hash;" > src/hash.ts
}