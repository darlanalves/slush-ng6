test:
	./node_modules/karma/bin/karma start karma.conf.js --single-run

tdd:
	./node_modules/karma/bin/karma start karma.conf.js

coverage:
	./node_modules/karma/bin/karma start karma.coverage.conf.js --single-run

watch:
	./node_modules/.bin/gulp watch

build:
	./node_modules/.bin/gulp build

bundle: build
	./node_modules/.bin/gulp compress

serve:
	node server.js

lint:
	./node_modules/.bin/gulp jshint

setup:
	npm install;\
	./node_modules/.bin/gulp build

docs:
	rm -rf docs;\
	./node_modules/.bin/esdoc -c esdoc.json;

.PHONY: test tdd build bundle serve coverage watch setup docs coverage