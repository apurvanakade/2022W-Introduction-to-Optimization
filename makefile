all: clean build

build:
	Rscript -e "bookdown::render_book('index.Rmd', 'bookdown::gitbook')"
	mkdir docs/js
	cp -r js/* docs/js/

clean:
	rm -rf docs/*