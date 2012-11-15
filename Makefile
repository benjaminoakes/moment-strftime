all: dependences release

dependences:
	npm install

clean:
	rm -rf build

cleanmodules:
	rm -rf node_modules

cleanall: clean cleanmodules

release: dependences version
	mkdir -p build
	echo ${VERSION}
	node_modules/.bin/uglifyjs --output build/moment-tokens-${VERSION}.min.js lib/moment-tokens.js
	cp lib/moment-tokens.js build/moment-tokens-${VERSION}.js

test: dependences
	node_modules/.bin/jasmine-node  spec

version:
	$(eval VERSION = $(shell cat package.json |grep version |cut -d ":" -f 2 |tr -d " ,\""))
	@echo Version: $(VERSION)

