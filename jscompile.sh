#!/bin/bash

cd /srv/chat/js
java -jar $1 \
	--js vendor/jquery.js \
	--js vendor/foundation.min.js \
	--js vendor/jquery.md5.js \
	--js vendor/bigint.js \
	--js vendor/crypto.js \
	--js vendor/eventemitter.js \
	--js vendor/otr.js \
	--js imgupload.js \
	--js options.js \
	--js client.js \
	--js vendor/modernizr.js \
	--create_source_map ./moechat.min.map \
	--source_map_format V3 \
	--warning_level QUIET \
	--js_output_file moechat.min.js
echo "//@ sourceMappingURL=/js/moechat.min.map" >> moechat.min.js
