import DeepDiveIntroDroneCI from "./deep-dive-into-droneci/assets/logo.svg?url";
import HijackKubernetesCluster from "./hijack-a-kubernetes-cluster/assets/logo.svg?url";
import InfraWithCrossplane from "./infra-with-crossplane/assets/logo.svg?url";
import KubernetesOnHetzner from "./kubernetes-on-hetzner/assets/logo.svg?url";

export default [
  {
    title: 'Deep dive into Drone CI',
    logo: DeepDiveIntroDroneCI,
    route: '/deep-dive-into-droneci/',
  },
  {
    title: 'Hijack a Kubernetes Cluster',
    logo: HijackKubernetesCluster,
    route: '/hijack-a-kubernetes-cluster/',
  },
  {
    title: 'Infrastructure with Crossplane',
    logo: InfraWithCrossplane,
    route: '/infra-with-crossplane/',
  },
  {
    title: 'Kubernetes on Hetzner',
    logo: KubernetesOnHetzner,
    route: '/kubernetes-on-hetzner/',
  },
].sort((a,b) => (a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0))
