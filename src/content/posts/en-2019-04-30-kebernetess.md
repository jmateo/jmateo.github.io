---
title: Deploying Vault and Consul on Kubernetes
speaker:
  - vincent_sevel
location: Fusion
locationlink: https://www.fusion.xyz/fintech/
address: 50 Avenue de la Praille 1227 Carouge.
transport:  P+R Etoile
parking: P+R Etoile
locale: en
---
The challenges of Kubernetes go far beyond the quiet framework of deploying stateless 12-factor applications.

Through its versatility, Kubernetes is increasingly establishing itself as the universal deployment platform.

Kubernetes can therefore be used to deploy your application components, but also the infrastructure technologies that support them, including when these technologies were designed before the emergence of Kubernetes.

The exercise of integrating legacy technology into Kubernetes is interesting for 2 reasons:
* The first is purely educational: when confronting the integration of a technology, you are forced to ask the right questions, to understand the concepts and philosophy of the product, to understand the options available and their limitations. You come out of the exercise with some bumps, but above all with increased knowledge of the platform that will be useful for future integrations of legacy applications.

* The second is pragmatic and utilitarian: integrating third-party technology into Kubernetes offers an opportunity to reduce the footprint of custom integrations in the information system and at the same time brings all the advantages of Kubernetes in terms of manageability: infrastructure as code, ‘desired state’, lifecycle, monitoring, etc.

In this presentation, we’ll take the specific example of HashiCorp Vault & Consul technologies and show how they can integrate into a Kubernetes environment. We’ll evaluate several aspects such as stateful, exposure, high availability, security and monitoring. At the end of the exercise, we’ll have a production-ready solution, but above all we’ll have gained experience and knowledge that will be useful to us as we continue on the path of Kubernetes adoption.
