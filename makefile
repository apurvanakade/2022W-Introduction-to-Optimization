all: build

build:
	Rscript -e "bookdown::render_book('index.Rmd', 'bookdown::gitbook')"
	mkdir -p docs/js
	\cp -r js/* docs/js/

clean:
	rm -rf docs/*