#!/bin/bash

cd /srv/chat/js
java -jar $1 --js vendor/jquery.js --js vendor/foundation.min.js --js vendor/jquery.md5.js --js vendor/bigint.js --js vendor/crypto.js --js vendor/eventemitter.js --js vendor/otr.js --js client.js --js imgupload.js --js vendor/modernizr.js --js_output_file moechat.min.js --create_source_map moechat.min.map --warning_level QUIET
