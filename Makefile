install:
	npm install

build:
	docker build -t charlesxiong/node-hello .

run:
	node index.js

run-container:
	docker run -p 49160:8080 -d charlesxiong/node-hello

test:
	curl localhost

clean:
	rm -rf node_modules

.PHONY: install build run test clean