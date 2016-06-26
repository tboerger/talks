<!-- .slide: data-state="section-break" data-menu-title="Matrix builds" id="matrix" -->
# Matrix builds


<!-- .slide: data-state="normal" id="matrix1" -->
## Matrix builds

```
pipeline:
  build:
    image: golang:${GO_VERSION}
    commands:
      - go get
      - go build
      - go test
matrix:
  GO_VERSION:
    - 1.5
    - 1.6
```
