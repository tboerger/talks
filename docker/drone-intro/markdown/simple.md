<!-- .slide: data-state="section-break" data-menu-title="Simple builds" id="simple" -->
# Simple builds


<!-- .slide: data-state="normal" id="simple1" -->
## Simple builds

```
pipeline:
  build:
    image: golang:1.6
    commands:
      - go get
      - go build
      - go test
services:
  database:
    image: postgres:9.6
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=mysecretpassword
```
