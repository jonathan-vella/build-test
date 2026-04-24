---
title: "Horizon 2 + Fabric"
description: "Azure SQL Database in Microsoft Fabric — unified data estate for AI and analytics"
sidebar:
  order: 5
---

:::tip[TL;DR]
Modernized H2 apps produce richer data. Azure SQL DB mirroring to Fabric
combines cloud-native data models with ML, real-time intelligence, and
unified analytics — the full strategic payoff of modernization.
:::

Horizon 2 applications produce richer, more granular data than their
legacy predecessors. With **Azure SQL Database mirroring to Fabric**,
that data flows directly into the unified data platform — ready for
analytics, AI, and cross-system insights.

## Azure SQL DB in Fabric

Like SQL MI Mirroring, Azure SQL Database can mirror its data into
Fabric's OneLake. But because H2 applications are typically more
modern in their data patterns, the Fabric integration unlocks
additional capabilities.

```mermaid
graph LR
  SQLDB["**Azure SQL Database**<br/>Cloud-Native"] -->|"Mirroring<br/>(near real-time)"| ONELAKE["**OneLake**<br/>Fabric Data Lake"]
  ONELAKE --> PBI["**Power BI**<br/>Reports & Dashboards"]
  ONELAKE --> ENG["**Data Engineering**<br/>Spark / Notebooks"]
  ONELAKE --> SCI["**Data Science**<br/>ML Models"]
  ONELAKE --> RTI["**Real-Time<br/>Intelligence**"]
```

## Why H2 + Fabric is More Powerful

Modernized applications produce better data. Combined with Fabric,
this creates a compounding advantage:

| H1 + Fabric                              | H2 + Fabric                            |
| ---------------------------------------- | -------------------------------------- |
| Mirrors existing database schemas as-is  | Modern schemas optimized for analytics |
| Batch-oriented application data patterns | Event-driven, real-time data streams   |
| Analytics on legacy data structures      | Analytics on cloud-native data models  |
| BI dashboards and reports                | BI + ML + real-time intelligence       |

## The Unified Data Estate

Whether a customer follows Horizon 1, Horizon 2, or both — Fabric
becomes the single destination for all operational data:

```mermaid
graph TB
  subgraph "Horizon 1"
    SQLMI["SQL Managed<br/>Instance"]
  end
  subgraph "Horizon 2"
    SQLDB["Azure SQL<br/>Database"]
  end
  SQLMI -->|"Mirroring"| OL["**OneLake**"]
  SQLDB -->|"Mirroring"| OL
  OL --> ANALYTICS["Unified Analytics<br/>BI · ML · Real-Time"]
```

:::note[Fabric is the destination, not the detour]
This is why Fabric is central to the modernization story — not an
optional add-on. Regardless of which horizon a workload follows,
the data converges in Fabric. The customer builds one analytics
platform, not two.
:::

## The Strategic Payoff

For the customer, this means:

- **One data platform** — No more separate data warehouses, ETL pipelines,
  or analytics silos per application
- **AI-ready by default** — Data in OneLake is immediately available for
  machine learning, Copilot integrations, and advanced analytics
- **Incremental value** — H1 workloads contribute data to Fabric today;
  as they evolve to H2, the data gets richer — but the platform is already
  in place

[← Back to H2 Modernize](/dc2fabric/horizons/h2-modernize/) · [Continue to Execution →](/dc2fabric/execution/)
