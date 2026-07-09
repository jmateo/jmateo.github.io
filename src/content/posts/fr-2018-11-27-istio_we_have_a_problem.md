---
title: Istio, nous avons un problème ! Comprendre et corriger les bugs avec un service-mesh
speaker:
  - david_gageot
locale: fr
---

Istio, nous avons un problème ! Nous venons de déployer un bel ensemble de micro-services et il se comporte de manière étrange. Difficile de dire pourquoi avec autant de pièces en mouvement...

Tirons parti du service mesh fraîchement installé pour comprendre ce que nous avons déployé, trouver le problème racine, le corriger avec un pansement et ensuite faire un vrai déploiement bleu-vert non trivial d'une v2.

Cela impliquera le graphique des services, la surveillance Prometheus, les tableaux de bord Grafana, le miroir de trafic, tous orchestrés de manière simple par Istio.
