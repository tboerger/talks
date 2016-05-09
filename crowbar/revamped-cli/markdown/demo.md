<!-- .slide: data-state="section-break" id="demo" data-timing="10s" -->
# Demo

Note:
* Prepared a ruby docker container
* Install it with `gem install crowbar-client`
* Prepare the `~/.crowbarrc`
  ```
  # vim: set ft=dosini :

  [default]
  server = http://mimir.suse.de:3006
  username = crowbar
  password = crowbar

  [vd1]
  server = http://crowbar.vd1.cloud.suse.de
  username = crowbar
  password = crowbar

  [vd2]
  server = http://crowbar.vd2.cloud.suse.de/
  username = crowbar
  password = crowbar
  ```
* Show `default` alias with `crowbarctl node list`
* Show `vd1` alias with `crowbarctl node list --alias vd1`
* Show `vd2` alias with `crowbarctl node list --alias vd2`
