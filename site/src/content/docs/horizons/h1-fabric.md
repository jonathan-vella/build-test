---
title: "Horizon 1 + Fabric"
description: "SQL Managed Instance Mirroring to Microsoft Fabric — analytics without re-architecting"
sidebar:
  order: 3
---

Here is the multiplier on Horizon 1: **without changing a single line of
application code**, you can stream operational data from SQL Managed Instance
into Microsoft Fabric for near-real-time analytics, reporting, and AI.

## SQL MI Mirroring to Fabric

SQL Managed Instance Mirroring creates a continuous, low-latency replication
of your database into Fabric's **OneLake** — the unified data lake that
underpins all Fabric workloads.

```mermaid
graph LR
  SQLMI["**Azure SQL<br/>Managed Instance**"] -->|"Mirroring<br/>(near real-time)"| ONELAKE["**OneLake**<br/>Fabric Data Lake"]
  ONELAKE --> PBI["**Power BI**<br/>Reports & Dashboards"]
  ONELAKE --> ENG["**Data Engineering**<br/>Spark / Notebooks"]
  ONELAKE --> SCI["**Data Science**<br/>ML Models"]
```

## Why This Matters

Traditional approaches to analytics require building ETL pipelines,
maintaining a separate data warehouse, and accepting hours or days
of data latency. SQL MI Mirroring eliminates all of that:

| Traditional Approach              | With Mirroring                      |
| --------------------------------- | ----------------------------------- |
| Build and maintain ETL pipelines  | Zero-ETL — mirroring is built in    |
| Hours or days of data latency     | Near-real-time (seconds to minutes) |
| Separate data warehouse to manage | Data lands directly in OneLake      |
| Additional infrastructure cost    | Included with Fabric capacity       |

## What You Unlock

Once data is in Fabric, the entire Fabric platform is available:

- **Power BI** — Interactive dashboards on live operational data
- **Data Engineering** — Spark-based data transformation and enrichment
- **Data Science** — Machine learning models trained on production data
- **Real-Time Intelligence** — Event-driven analytics and alerting

:::note[Zero disruption to the running application]
The mirrored database in Fabric is a read replica. The production SQL MI
instance continues to serve the application with zero performance impact.
The analytics workload runs entirely in Fabric, on Fabric capacity.
:::

## When to Enable Mirroring

Mirroring makes sense when the customer's strategy includes:

- Business intelligence on operational data (not just historical snapshots)
- Cross-system analytics (combining data from multiple databases)
- AI/ML initiatives that need access to production-quality data
- Reducing the complexity of existing ETL/data warehouse infrastructure

If these are not strategic priorities today, mirroring can be enabled
later — it is a configuration change, not a re-architecture.
