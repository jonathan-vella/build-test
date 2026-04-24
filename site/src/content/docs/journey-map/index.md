---
title: "MCEM Journey Map"
description: "The complete modernization journey mapped across all five MCEM stages"
sidebar:
  order: 1
---

:::tip[TL;DR]
The five official MCEM stages — Listen & Consult, Inspire & Design,
Empower & Achieve, Realize Value, Manage & Optimize — map to the
dc2fabric journey. H1 and H2 run in overlapping phases across Stages 2–4,
with Fabric going live as mirroring is enabled. Stage 5 is ongoing.
:::

This page maps the entire dc2fabric journey across the five stages of the
Microsoft Customer Engagement Methodology (MCEM). Each stage builds on
the previous one, with clear activities, outcomes, and decision points.

## The Full Journey

```mermaid
graph LR
  S1["**Stage 1**<br/>Listen &<br/>Consult"] --> S2["**Stage 2**<br/>Inspire &<br/>Design"]
  S2 --> S3["**Stage 3**<br/>Empower &<br/>Achieve"]
  S3 --> S4["**Stage 4**<br/>Realize<br/>Value"]
  S4 --> S5["**Stage 5**<br/>Manage &<br/>Optimize"]
```

## Stage-by-Stage Breakdown

### Stage 1 — Listen and Consult

**Focus:** Understand the customer's business, not their technology.

| Activity                                             | Outcome                                     |
| ---------------------------------------------------- | ------------------------------------------- |
| Discovery conversations with business and IT leaders | Shared understanding of business pressures  |
| Cloud Adoption Framework — Strategy phase            | Documented motivations and desired outcomes |
| Cloud Adoption Framework — Plan phase                | Prioritized workload list                   |
| Stakeholder alignment workshops                      | Executive sponsorship and shared vision     |

**Decision gate:** Does cloud modernization align with the customer's
strategic priorities? If yes, proceed to assessment.

### Stage 2 — Inspire and Design

**Focus:** Show what is possible with evidence, and design the roadmap.

| Activity                               | Outcome                                        |
| -------------------------------------- | ---------------------------------------------- |
| Azure Migrate discovery and assessment | Complete inventory of VMs, apps, databases     |
| Infrastructure readiness analysis      | Migration readiness scores per workload        |
| Application compatibility analysis     | .NET version map and modernization complexity  |
| Database compatibility analysis        | SQL feature usage and Azure SQL target mapping |
| Horizons classification workshop       | Workloads assigned to H1 or H2                 |
| Architecture design per horizon        | Target architecture diagrams                   |
| Fabric integration planning            | Data mirroring strategy                        |
| Migration wave planning                | Phased execution roadmap                       |

**Decision gate:** Does the assessment confirm the estate is suitable for
migration? Is the horizons roadmap approved by the customer?

### Stage 3 — Empower and Achieve

**Focus:** Execute the migration and build customer capability.

| Activity                                 | Outcome                             |
| ---------------------------------------- | ----------------------------------- |
| H1: VM migration waves via Azure Migrate | Workloads running on Azure VMs      |
| H1: SQL MI migration via MI Link / DMS   | Databases on SQL Managed Instance   |
| H2: .NET upgrade and containerization    | Apps on Azure Container Apps        |
| H2: Azure SQL DB migration               | Databases on Azure SQL Database     |
| Fabric mirroring configuration           | Operational data flowing to OneLake |

**Decision gate:** Are all workloads validated and performing as expected
in Azure? Is the on-premises environment ready for decommission?

### Stage 4 — Realize Value

**Focus:** Measure outcomes against the original business strategy.

| Activity                          | Outcome                                        |
| --------------------------------- | ---------------------------------------------- |
| Cost optimization review          | Validated TCO reduction                        |
| Operational efficiency assessment | Reduced manual effort, faster deployments      |
| Analytics platform review         | Fabric dashboards delivering business insights |
| Skills assessment                 | Customer team operating independently          |

### Stage 5 — Manage and Optimize

**Focus:** Continuously improve and expand the Azure and Fabric estate.

| Activity                           | Outcome                                         |
| ---------------------------------- | ----------------------------------------------- |
| Ongoing cost optimization          | Azure Advisor reviews, reservation adjustments  |
| Operational maturity advancement   | Proactive monitoring, automated remediation     |
| Fabric workload expansion          | New data sources, new dashboards, AI/ML models  |
| H1 → H2 evolution assessment       | Periodic review of H1 workloads for H2 readiness|
| Continuous improvement planning    | Roadmap for next engagement cycle               |

## Horizons Across MCEM

The following shows when each horizon activates across the MCEM stages:

```mermaid
gantt
  title Horizons Across MCEM Stages
  dateFormat YYYY-MM
  axisFormat %b
  section MCEM Stages
    Stage 1 - Listen & Consult    :s1, 2026-01, 1M
    Stage 2 - Inspire & Design    :s2, after s1, 2M
    Stage 3 - Empower & Achieve   :s3, after s2, 4M
    Stage 4 - Realize Value       :s4, after s3, 1M
    Stage 5 - Manage & Optimize   :s5, after s4, 2M
  section Horizon 1
    Assessment & planning :h1a, 2026-02, 2M
    Migration execution   :h1b, 2026-04, 2M
    Fabric mirroring      :h1c, 2026-06, 1M
  section Horizon 2
    Assessment & planning     :h2a, 2026-02, 2M
    Modernization execution   :h2b, 2026-04, 3M
    Fabric mirroring          :h2c, 2026-07, 1M
  section Fabric
    OneLake + Power BI live   :fab, 2026-06, 3M
```

:::note[Every organization's timeline is different]
The Gantt chart above is illustrative. A small estate might complete in
3 months. A large enterprise might take 12-18 months. The structure is
the same — the timeline scales with the estate size and complexity.
:::
