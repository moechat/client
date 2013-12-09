#!/bin/bash

cd /srv/chat/js
java -jar $1 \
	--js vendor/bigint.js \
	--js vendor/crypto.js \
	--js vendor/eventemitter.js \
	--js vendor/otr.js \
	--create_source_map ./vendor.min.map \
	--source_map_format V3 \
	--warning_level QUIET \
	--js_output_file vendor.min.js
echo "//@ sourceMappingURL=/js/vendor.min.map" >> vendor.min.js

java -jar $1 \
	--js util.js \
	--js md5.js \
	--js options.js \
	--js connection.js \
	--js imgupload.js \
	--js client.js \
	--externs externs.js \
	--create_source_map ./moechat.min.map \
	--source_map_format V3 \
	--js_output_file moechat.min.js
echo "//@ sourceMappingURL=/js/moechat.min.map" >> moechat.min.js
