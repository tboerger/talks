<!-- .slide: data-state="section-break" data-menu-title="Architecture" id="architecture" -->
# Architecture


<!-- .slide: data-state="normal" id="general" -->
## General

* Written in Golang
* Built around Docker
* VCS-based configuration
* Damn lightweight (<10 MB memory consumption)
* Server and Agent model
* Single binary
* A CI and CD server


<!-- .slide: data-state="normal" id="server" -->
## Server

* Single remote config
  * GitHub
  * Bitbucket/Stash
  * Gitlab
  * Gogs
* Database access
* Queue in memory


<!-- .slide: data-state="normal" id="remote" -->
## Remote

* User management
* Webhook execution on commit
* Pull request management


<!-- .slide: data-state="normal" id="agents" -->
## Agents

* Websocket communication to Server
* Token authentication
* Configurable concurrency
* Connects to docker socket
* Logs streaming


<!-- .slide: data-state="normal" id="client" -->
## CLI client

* Used to build locally
* Sign `.drone.yml` for verification
* Manage repositories


<!-- .slide: data-state="normal" id="plugins" -->
## Plugins

* Standalone Docker containers
* Single purpose
* Clone/Publish/Notify/Cache
* Currently ~56 plugins available
* Mostly written in Go
* Plugin libs in multiple languages
  * Go
  * Ruby
  * Node
  * Python
