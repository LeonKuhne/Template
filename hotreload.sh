#!/bin/bash
./build.sh
fswatch -o *.pug | xargs -n1 -I{} ./build.sh
