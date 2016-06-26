<!-- .slide: data-state="section-break" data-menu-title="Deployments" id="deployments" -->
# Deployments


<!-- .slide: data-state="normal" id="deployments1" -->
## Deployments

```
pipeline:
  build:
    image: golang:1.6
    commands:
      - go get
      - go build
      - go test
  heroku:
    app: hipster
    when:
      branch: master
      event: push
```
