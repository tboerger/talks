// Import React
import React from "react";

// Import Spectacle
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import preloaded
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Define images
const images = {
  traefik: require("../assets/traefik.logo.svg"),
  huh: require("../assets/huh.gif"),
  microservices: require("../assets/microservices.png"),

  docker: require("../assets/docker-logo.png"),
  rkt: require("../assets/rkt.png"),
  mesos: require("../assets/mesos-logo.png"),
  swarm: require("../assets/swarm.png"),
  k8s: require("../assets/kubernetes-logo.png"),
  rancher: require("../assets/rancher-logo.png"),
  consul: require("../assets/consul-logo.png"),
  etcd: require("../assets/etcd-logo.png"),
  reverse: require("../assets/traditionnalArchitecture.png"),
  reverseConfig: require("../assets/traditionnalArchitecture.config.png"),
  stop: require("../assets/stop.gif"),
  traefikArchitecture: require("../assets/traefikArchitecture.png"),
  priere: require("../assets/priere.jpg"),
  greatBut: require("../assets/greatBut.gif"),
  letsEncrypt: require("../assets/letsencrypt-logo.svg"),
  dockerImage: require("../assets/docker.image.png"),
  reblochon: require("../assets/reblochon.png"),
  mantl: require("../assets/mantl-logo.png"),
  mantlBack: require("../assets/mantl.back.svg"),
  cisco: require("../assets/cisco-logo.png"),
  traefikSticker: require("../assets/traefik.sticker.png"),
  camembert: require("../assets/camembert.png")
};

// Preload images
preloader(images);

// Define theme
const theme = createTheme({
  primary: "#37ABC8",
  white: "#e2e2e2"
});

// Build slides
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={200}>
          <Slide bgColor="white">
            <Image src={images.traefik.replace("/", "")} margin="0px auto 20px" fit height="200px" />

            <Heading size={1} caps textColor="primary">
              Traefik
            </Heading>

            <Heading size={6} caps textColor="primary">
              A modern reverse proxy
            </Heading>

            <Text margin="40px 0 10px 0">
              Thomas Boerger - tboerger@suse.com
            </Text>

            <Text margin="10px 0 40px 0" textColor="grey">
              Copied from <Link href="https://github.com/emilevauge">@emilevauge</Link>!
            </Text>
          </Slide>

          <Slide>
            <Heading size={1} textColor="white">
              $ whoami
            </Heading>

            <List fit textColor="white">
              <Appear><ListItem>Docker Developer @ SUSE Linux</ListItem></Appear>
              <Appear><ListItem>Proud to be a Webhippie!</ListItem></Appear>
              <Appear><ListItem>I ❤ Docker</ListItem></Appear>
              <Appear><ListItem>I ❤ Golang</ListItem></Appear>
              <Appear><ListItem>OSS contributor: Drone CI, Traefik, Caddy, Gin...</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Heading size={2} caps textColor="white">
              But why another
            </Heading>

            <Image src={images.huh.replace("/", "")} margin="20px auto 20px" height="300px"/>

            <Heading size={2} caps textColor="white">
              reverse-proxy?
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Heading size={3} fit textColor="black">
              Microservices
            </Heading>

            <Image src={images.microservices.replace("/", "")} margin="20px auto 40px" fit/>
          </Slide>

          <Slide bgColor="white">
            <Heading size={3} fit textColor="primary" >
              Containers
            </Heading>

            <Image src={images.docker.replace("/", "")} margin="40px auto 10px" height="150px" />
            <Image src={images.rkt.replace("/", "")} margin="10px auto 10px" height="130px" />
          </Slide>

          <Slide bgColor="white">
            <Heading size={3} fit textColor="black" >
              Orchestration
            </Heading>

            <Image src={images.swarm.replace("/", "")} height="200px" padding="10px"/>
            <Image src={images.mesos.replace("/", "")} height="200px"padding="10px"/>
            <Image src={images.k8s.replace("/", "")} height="200px" padding="10px"/>
            <Image src={images.rancher.replace("/", "")} width="200px" padding="10px"/>
          </Slide>

          <Slide bgColor="white">
            <Heading size={3} fit textColor="primary" >
              Service Discovery
            </Heading>

            <Image src={images.consul.replace("/", "")} height="250px" padding="20px"/>
            <Image src={images.etcd.replace("/", "")} height="250px" padding="20px"/>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={2} fit caps textColor="black">
              And now
            </Heading>

            <Heading size={2} fit caps textColor="white">
              let's add a
            </Heading>

            <Heading size={2} fit caps textColor="black">
              reverse proxy
            </Heading>
          </Slide>

          <Slide bgColor="white" >
              <Image src={images.reverse.replace("/", "")} height="550px"/>
          </Slide>

          <Slide bgColor="white" >
              <Image src={images.reverseConfig.replace("/", "")} height="550px"/>
          </Slide>

          <Slide bgColor="black">
              <Image src={images.stop.replace("/", "")} margin="20px auto 20px" height="400px"/>
          </Slide>

          <Slide bgColor="white">
            <Image src={images.traefik.replace("/", "")} margin="20px auto 20px" height="400px"/>
          </Slide>

          <Slide bgColor="white">
              <Image src={images.traefikArchitecture.replace("/", "")} height="550"/>
          </Slide>

          <Slide>
            <Heading textColor="white">
              Features
            </Heading>

            <List fit textColor="white">
              <Appear><ListItem>Single binary deployment</ListItem></Appear>
              <Appear><ListItem>Config via Docker, Swarm, K8s, Mesos, Etcd, Consul...</ListItem></Appear>
              <Appear><ListItem>Hot reloading</ListItem></Appear>
              <Appear><ListItem>Load-balancing via WRR or DRR</ListItem></Appear>
              <Appear><ListItem>Circuit breakers</ListItem></Appear>
              <Appear><ListItem>HTTP2</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Heading size={1} textColor="white">
              Demo
            </Heading>

            <Image fit src={images.priere.replace("/", "")} height="500px" padding="20px"/>
          </Slide>

          <Slide>
            <Heading size={1}>
              Great!
            </Heading>

            <Image fit src={images.greatBut.replace("/", "")} height="400px" padding="20px"/>

            <Text textColor="white" fit>
              But wait, how do you manage SSL certs?
            </Text>
          </Slide>

          <Slide bgColor="white">
            <Heading size={1} caps fit textColor="primary">
              Free, Automated
            </Heading>

            <Image src={images.letsEncrypt.replace("/", "")} width="800px"/>

            <Heading size={1} caps fit textColor="primary">
              Certificate Authority
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1}>
              Official image
            </Heading>

            <Text textColor="white">
              $ docker pull traefik
            </Text>

            <Image fit src={images.dockerImage.replace("/", "")} height="400px" padding="20px"/>
          </Slide>

          <Slide bgColor="white">
            <Heading size={1} caps textColor="primary">
              Traefik v1.0
            </Heading>

            <Image src={images.reblochon.replace("/", "")} height="300px"/>

            <Heading size={1} caps textColor="primary" >
              reblochon
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps>
              4700+ ★
            </Heading>

            <Heading size={2} fit caps>
              500k+ downloads
            </Heading>

            <Heading size={1} fit caps>
              165+ releases
            </Heading>

            <Heading size={2} fit caps>
              292 LGTM, 64 Contributors
            </Heading>
          </Slide>

          <Slide bgColor="white">
            <Heading size={3} fit>
              What's next?
            </Heading>

            <Heading size={1} fit caps textColor="primary">
              Cluster mode,
              Swarm mode
            </Heading>

            <Heading size={2} fit caps>
              Generic Mesos,
              Basic Auth
            </Heading>

            <Heading size={1} fit caps textColor="primary">
              Session affinity
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} caps>
              Traefik v1.1 RC1
            </Heading>

            <Image src={images.camembert.replace("/", "")} height="300px"/>

            <Heading size={1} caps>
              camembert
            </Heading>
          </Slide>

          <Slide bgImage={images.mantlBack.replace("/", "")}>
            <Heading size={1} caps>
              Now Part of
            </Heading>

            <Image fit src={images.mantl.replace("/", "")} height="200px" padding="20px"/>
            <Image fit src={images.cisco.replace("/", "")} height="200px" padding="20px"/>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
              <Quote>It's 2016, and I really wish I had a Load Balancer, that works across cloud providers, with a real API for managing dynamic configuration.</Quote>
              <Cite>Kelsey Hightower (@kelseyhightower) <Link href="https://twitter.com/kelseyhightower/status/739860449949155329">June 6, 2016</Link></Cite>
            </BlockQuote>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
              <Quote>It's 2016, and I may have found a Load Balancer with a real API and support for dynamic configuration! https://traefik.io</Quote>
              <Cite>Kelsey Hightower (@kelseyhightower) <Link href="https://twitter.com/kelseyhightower/status/739866697075548161">June 6, 2016</Link></Cite>
            </BlockQuote>
          </Slide>

          <Slide bgColor="white">
            <Heading size={1} caps textColor="primary" textSize="170px">
              I have
            </Heading>

            <Image src={images.traefik.replace("/", "")} height="200px"/>

            <Heading size={1} caps textColor="primary">
              Stickers!
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} caps>
              Thank you!
            </Heading>
            <Text>
              <Link href="https://github.com/containous/traefik">github.com/containous/traefik</Link>
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
