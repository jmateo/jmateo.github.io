---
title: "Ingest Node and Beats"
speaker:
  - david_pilato
locale: en
---
When you ingest data into Elasticsearch, you may need to perform some fairly simple transformation operations. Until now, these operations had to be performed outside of Elasticsearch, before the actual indexing.

Welcome to Ingest Node! A new type of node that allows you to do exactly that.
This talk explains the concept of Ingest Node and how to integrate it with the rest of the Elastic software suite.
This talk will also cover the reindexing API which can also benefit from the ingestion pipeline to modify your data on the fly during reindexing.

**And the beats go on!** 
Come discover the new Data Shippers for Elasticsearch:
* Packetbeat: decode network protocols
* Metricbeat: collect your metrics
* Filebeat: analyze your logs in real-time or send them to Logstash for enrichment

And how to contribute to the mix and add your own beats with Libbeat.   
