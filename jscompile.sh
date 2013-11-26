#!/bin/bash

java -jar $1 --js /srv/chat/js/vendor/jquery.js --js /srv/chat/js/vendor/jquery.md5.js --js /srv/chat/js/vendor/bigint.js --js /srv/chat/js/vendor/crypto.js --js /srv/chat/js/vendor/eventemitter.js --js /srv/chat/js/vendor/otr.js --js /srv/chat/js/client.js --js /srv/chat/js/vendor/custom.modernizr.js --js_output_file /srv/chat/js/moechat.min.js --create_source_map /srv/chat/js/moechat.min.map --warning_level QUIET
