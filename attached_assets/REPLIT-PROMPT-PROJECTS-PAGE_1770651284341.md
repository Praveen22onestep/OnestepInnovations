# Replit Prompt: Refactor Projects Page — Content Presentation Only

## Context

This prompt updates ONLY how case study content is presented on the projects/what-we-solve page. Do NOT change the website theme, colour scheme, typography, dark background, cyan/teal accents, or overall site structure. Keep all existing CSS variables, font families, and colour tokens. The changes are content layout and interaction patterns only.

---

## CHANGE 1: Rename the Section

Rename the section from **"Projects"** to **"What We Solve"**.

Update the navigation link text and any heading that says "Projects" to "What We Solve". If there is a subtitle/description under the section heading, set it to:

> "Industry-specific AI solutions for manufacturing, FMCG, and supply chain operations."

---

## CHANGE 2: Add Industry Filter Tabs

Add a horizontal row of filter tabs above the card grid. Use the existing site styling (dark background, border styling consistent with the current card borders, cyan/teal for active state).

Filter tabs:

| Tab Label | Filter Value | Default |
|-----------|-------------|---------|
| All | `all` | Yes (active by default) |
| Manufacturing | `manufacturing` | |
| FMCG | `fmcg` | |
| Supply Chain & Logistics | `supply-chain` | |
| Enterprise | `enterprise` | |

When a filter is selected, only cards matching that industry tag should be visible. Use a smooth fade or simple show/hide — no complex animations. Each card's data attribute should contain its industry tag(s) for filtering.

---

## CHANGE 3: Restructure the Card Format

Replace the current card layout with the following structure. Each card has two states: **collapsed** (grid view) and **expanded** (click-through detail view).

### Collapsed Card (Grid View)

```
┌─────────────────────────────────────────┐
│  [INDUSTRY TAG]              (icon)     │  ← coloured chip, small, uppercase
│                                         │
│  $125K/hr                               │  ← hero stat — large, bold, cyan/teal
│  downtime cost in manufacturing         │  ← stat context — smaller, muted text
│                                         │
│  When Your Best Technician Is a         │  ← card title — bold, white
│  600-Page Manual                        │
│                                         │
│  ┌────────┐ ┌───────┐ ┌──────────────┐ │
│  │ MTTR   │ │ Tribal│ │ Manual search│ │  ← pain point tags (chips)
│  └────────┘ │ know. │ └──────────────┘ │
│             └───────┘                   │
│                                         │
│  Explore →                              │  ← text link, cyan, clickable
└─────────────────────────────────────────┘
```

**Key rules for collapsed cards:**
- The hero stat is the largest text element on the card (use a size comparable to an h2 or larger)
- The stat context line sits directly below the hero stat in smaller, muted/grey text
- The title sits below the stat block
- Pain point tags use the same chip/tag styling as the current site (rounded, bordered, small text)
- Maximum 4 tags visible; if more exist, show 4 + a "+N" indicator
- "Explore →" is a text link, not a button. Uses the cyan/teal accent colour
- **Remove the "THE OUTCOME" box from the collapsed card entirely** — outcomes only appear in the expanded view
- Card hover state: subtle border glow or slight lift (consistent with existing site hover patterns)

### Expanded View (Detail Panel)

When "Explore →" is clicked, show the full case study content. Implementation options (choose whichever fits the current site architecture best):
- **Option A:** Slide-in panel from the right (preferred if the site uses a SPA/React framework)
- **Option B:** Modal/overlay with scroll (acceptable)
- **Option C:** Navigate to a dedicated `/what-we-solve/[slug]` subpage (acceptable for static sites)

The expanded view contains these sections in order:

```
[INDUSTRY TAG]    [TECHNOLOGY TAGS]

HERO STAT (large)
stat context

CARD TITLE (h1 or h2)

─────────────────────────────

THE PROBLEM
[paragraph content]

WHY THIS MATTERS
[paragraph content]

OUR APPROACH
[paragraph content]

WHAT THIS COULD UNLOCK
[bullet list]

─────────────────────────────

[PROBLEM-SPECIFIC CTA — see card data below]

[← Back to all]
```

**Styling rules for expanded view:**
- Use the same dark background, same typography, same colour tokens as the rest of the site
- Section headers (THE PROBLEM, WHY THIS MATTERS, etc.) should use the same uppercase, muted style as the current "THE CHALLENGE" and "THE OUTCOME" labels
- The CTA at the bottom should be a distinct, bordered box (similar to the current "THE OUTCOME" box styling) with cyan/teal text. It links to the contact/booking page.
- Include a "← Back to all" link to return to the grid

---

## CHANGE 4: Grid Layout

- **Desktop (≥1024px):** 3-column grid
- **Tablet (≥768px, <1024px):** 2-column grid
- **Mobile (<768px):** 1-column stack

Cards should be equal height within each row. The consistent content structure across all 10 cards supports this naturally.

---

## CHANGE 5: Homepage Teaser

On the homepage, show only **3 featured cards** (Card IDs: `voice-ai`, `file-sync`, and `label-compliance`). Below the 3 cards, keep the "View all →" link but update its text to:

> "Explore all solutions →"

This link navigates to the full `/what-we-solve` page.

---

## CARD DATA — All 10 Case Studies

Below is the exact content for each card. Use this data to populate both collapsed and expanded views.

---

### CARD 1

```
id: "quality-inspection"
industry_tags: ["manufacturing"]
industry_label: "MANUFACTURING"
icon: factory (or equivalent from your icon set)

hero_stat: "20–30%"
stat_context: "of defects missed by human inspectors"

title: "The Blind Spot on Your Production Line"
technology: ["Computer Vision", "Image Recognition", "Edge AI"]

pain_point_tags: ["Undetected defects", "COPQ", "Rework & scrap", "Brand risk"]

the_problem: "Human inspectors on fast-moving production lines miss 20–30% of surface defects — scratches, dents, colour inconsistencies, dimensional deviations — even under ideal conditions. As line speeds increase and product variants multiply, inspection accuracy drops further. Sandia National Labs research confirms that even peak-performing inspectors plateau at roughly 80% detection rates.\n\nThe cost is not just defective product reaching the customer. It's the rework, the scrap, the warranty claims, and the erosion of brand trust that follows."

why_it_matters: "Manufacturing companies lose approximately 20% of total sales revenue to cost of poor quality (COPQ). A single defective part that escapes inspection can cost 100× its original production price by the time it triggers a field failure or recall.\n\nFor mid-market manufacturers running 2–3 shifts, this translates to thousands of undetected defects per month — each one a financial and reputational risk sitting in a shipping container."

our_approach: "We treat this as a process problem first. Before deploying any vision system, we map the inspection workflow — what gets checked, where, by whom, under what lighting, at what speed. The technology layer comes second.\n\nOur methodology combines high-resolution image capture at critical control points with AI models trained on your specific product defect taxonomy. Not generic off-the-shelf detection — models tuned to distinguish between a cosmetic mark your customer tolerates and a structural flaw they won't.\n\nThe system integrates with your existing line infrastructure and MES, feeding defect data back into continuous improvement loops rather than sitting as a standalone gadget."

what_this_could_unlock:
  - "Defect detection rates exceeding 95% at full line speed"
  - "Real-time defect classification and automated reject/rework routing"
  - "A living dataset that improves with every production run"
  - "Quantifiable reduction in COPQ within the first 90 days of deployment"

cta_text: "If defects are slipping past your inspection line, we should talk."
cta_link: "/contact"
```

---

### CARD 2

```
id: "label-compliance"
industry_tags: ["fmcg"]
industry_label: "FMCG"
icon: tag (or label/barcode equivalent)
featured: true (show on homepage)

hero_stat: "45.5%"
stat_context: "of food recalls caused by label errors"

title: "The $10 Million Typo on the Packing Line"
technology: ["OCR", "Vision AI", "Automated Validation"]

pain_point_tags: ["Allergen errors", "Date code mismatch", "Recall exposure", "Spot-check gaps"]

the_problem: "In 2024, 45.5% of all food recalls — 192 out of 422 events — were triggered by labelling errors. Not contamination. Not foreign objects. Labels. Wrong allergen declarations, incorrect expiry dates, mismatched batch codes, missing regulatory text. The most preventable category of recall is also the most frequent.\n\nMost packing lines still rely on periodic manual spot-checks — an operator pulling one unit every few minutes and eyeballing the print. Between checks, hundreds of non-compliant units can ship undetected."

why_it_matters: "The average food recall costs $10 million in direct expenses — and that figure doesn't account for lost retailer confidence, shelf space penalties, or consumer trust damage. Research from the Food Marketing Institute shows that 80% of total recall costs are incurred long after the initial event, in the form of lost contracts and brand rehabilitation.\n\nFor mid-market FMCG producers competing on thin margins, a single label recall can wipe out an entire quarter's profit."

our_approach: "We approach label compliance as a 100% inline verification problem, not a sampling problem. Every unit, every label, every line — checked in real time.\n\nThe system captures high-speed images of labels at the point of application and runs them through OCR and validation logic calibrated to your specific SKU library and regulatory requirements — TGA, FSANZ, FDA, and equivalent regional mandates included. Mismatches trigger immediate line alerts before non-compliant product advances to case packing.\n\nThis isn't about replacing your quality team. It's about giving them a system that never blinks, never fatigues, and catches the errors that happen between spot-checks."

what_this_could_unlock:
  - "100% label inspection coverage with zero manual sampling dependency"
  - "Sub-second detection of allergen declaration errors, date code mismatches, and missing regulatory text"
  - "Automated compliance audit trails for retailer and regulatory review"
  - "A measurable reduction in recall exposure from labelling root causes"

cta_text: "If label errors keep you up at night, there's a way to inspect every unit."
cta_link: "/contact"
```

---

### CARD 3

```
id: "freight-documents"
industry_tags: ["supply-chain"]
industry_label: "SUPPLY CHAIN & LOGISTICS"
icon: file-text (or document equivalent)

hero_stat: "80%"
stat_context: "of freight invoices contain discrepancies"

title: "100 Document Types, Zero Margin for Error"
technology: ["Document AI", "Intelligent Extraction", "Workflow Automation"]

pain_point_tags: ["Manual data entry", "Invoice errors", "Customs delays", "Reconciliation backlog"]

the_problem: "The freight industry operates across more than 100 distinct document types — bills of lading, commercial invoices, packing lists, certificates of origin, customs declarations, delivery receipts, phytosanitary certificates, dangerous goods declarations. A single international shipment can require 20 or more of these, varying by route, mode, and jurisdiction. Most still arrive as PDFs, scanned images, or handwritten notes. And most are still processed by a human keying data into a TMS or ERP — field by field.\n\nManual data entry carries a 1–3% error rate per field. Across a document with 40 fields, that's a near-certainty of at least one mistake per document. One in three freight delays is directly caused by incorrect or missing documentation."

why_it_matters: "Industry research indicates that up to 80% of freight invoices contain discrepancies — overcharges, duplicate billing, incorrect tariff codes, weight mismatches — driving significant cost leakage across the logistics chain. But invoicing is only the visible layer. The real cost is downstream — demurrage charges from port delays, customs holds from mismatched declarations, and the invisible tax of operations staff spending 40+ minutes per document on data entry and reconciliation instead of exception management.\n\nFor 3PLs and freight forwarders operating on tight margins, document processing inefficiency directly compresses profitability."

our_approach: "We build document intelligence pipelines that read, extract, validate, and route freight documentation — regardless of format, language, or layout.\n\nThe approach starts with your actual document flow. We identify the highest-volume, highest-error document types and build extraction models tuned to those specific layouts. Not generic template matching — adaptive extraction that handles the variability real-world logistics documents throw at you.\n\nExtracted data feeds directly into your existing TMS, ERP, or customs brokerage systems through integration layers built on platforms like n8n and Make.com — eliminating re-keying and enabling automated cross-document validation before a human ever touches it."

what_this_could_unlock:
  - "Document processing time reduced from 40+ minutes to under 5 minutes per shipment set"
  - "Automated cross-referencing between BOL, invoice, and packing list for discrepancy flagging"
  - "Near-elimination of data entry errors on high-volume document types"
  - "Operations teams redirected from data entry to exception management and client service"

cta_text: "If your team is drowning in freight paperwork, there's a faster way."
cta_link: "/contact"
```

---

### CARD 4

```
id: "equipment-knowledge"
industry_tags: ["manufacturing"]
industry_label: "MANUFACTURING"
icon: wrench (or tool/maintenance equivalent)

hero_stat: "$125K/hr"
stat_context: "average cost of unplanned manufacturing downtime"

title: "When Your Best Technician Is a 600-Page Manual"
technology: ["RAG", "Voice AI", "Knowledge Systems"]

pain_point_tags: ["Downtime cost", "Tribal knowledge", "Manual search", "Night shift gaps"]

the_problem: "When a CNC machine throws a fault code at 2 AM, the maintenance technician's options are limited: flip through a 600-page OEM manual, call a senior tech who may not answer, or escalate to a contractor who'll arrive in 12 hours. The knowledge exists — buried in technical manuals, SOPs, past work orders, and the heads of experienced operators approaching retirement.\n\nMost manufacturing plants sit on decades of accumulated equipment knowledge that is effectively inaccessible when it's needed most: during an unplanned breakdown, on the night shift, or when the person who 'just knows' isn't available."

why_it_matters: "Unplanned downtime costs manufacturing plants an average of $125,000 per hour — and that figure climbs to $2.3 million per hour in automotive. Siemens' 2024 research found that unscheduled downtime saps 11% of annual revenues from the world's 500 largest companies, totalling $1.4 trillion globally.\n\nA significant portion of this downtime is not caused by the complexity of the repair, but by the time it takes to find the right information to begin."

our_approach: "We build equipment knowledge systems that consolidate OEM manuals, internal SOPs, historical work orders, and tribal knowledge into a single, searchable intelligence layer — accessible through natural language queries and, critically, through voice interface so technicians can interact hands-free while working on the machine.\n\nThe underlying architecture uses Retrieval-Augmented Generation (RAG) to deliver precise, contextual answers grounded in your actual documentation — not generic chatbot responses. Ask it a fault code, get the specific troubleshooting sequence from your manual. Ask it a symptom, get the three most relevant past work orders where your team solved the same issue.\n\nThis approach converts static documents and departing expertise into a living, queryable knowledge base that gets smarter with every interaction."

what_this_could_unlock:
  - "Technicians resolving faults without leaving the machine to search manuals or make calls"
  - "Measurable reduction in Mean Time to Repair (MTTR) across critical equipment"
  - "Preservation of institutional knowledge independent of individual staff tenure"
  - "A 24/7 technical support layer that doesn't require shift coverage or contractor callouts"

cta_text: "If downtime is costing you more than the repair, we should talk about access to knowledge."
cta_link: "/contact"
```

---

### CARD 5

```
id: "delivery-damage"
industry_tags: ["supply-chain"]
industry_label: "SUPPLY CHAIN & LOGISTICS"
icon: package (or shipping/box equivalent)

hero_stat: "65 days"
stat_context: "average time to resolve a freight damage claim"

title: "Prove It or Lose It: Why Most Damage Claims Never Get Paid"
technology: ["Vision AI", "Image Classification", "Automated Reporting"]

pain_point_tags: ["Damage at dock", "Missing evidence", "Carrier disputes", "Claim cycle time"]

the_problem: "11% of goods arriving at distribution centres show visible damage. Yet most receiving docks still document damage the same way they did twenty years ago — a driver and a dock worker scribbling notes on a delivery receipt, maybe snapping a few photos on a personal phone that never get attached to the right record.\n\nWhen the claim finally gets filed — often days later — the evidence is incomplete, inconsistent, or missing entirely. Carriers dispute. Insurers delay. And the cost quietly absorbs into the P&L.\n\nThe average freight damage claim takes 65 days to resolve. The longer the cycle, the lower the recovery rate."

why_it_matters: "Freight damage claims cost logistics operations up to 2% of annual revenue in unrecovered losses. For a mid-market distributor moving $50 million in goods annually, that's $1 million walking out the door — not because the damage didn't happen, but because the documentation didn't hold up.\n\nThe problem compounds at scale. As shipment volumes increase, the gap between actual damage events and properly documented claims widens."

our_approach: "We approach damage documentation as a capture-at-the-moment problem — structured image capture at the point of receipt, processed through vision AI that classifies damage type, severity, and affected items before the truck leaves the dock.\n\nThe system guides dock workers through a standardised photo capture workflow, automatically tags images to the corresponding PO, shipment, and carrier, and generates a preliminary damage report in the format your claims process requires. No manual write-ups. No chasing photos from someone's camera roll three days later.\n\nIntegration with your WMS and carrier management systems means the claim lifecycle begins the moment damage is identified — not when someone remembers to file it."

what_this_could_unlock:
  - "Damage documentation completed at the dock, in real time, before the driver departs"
  - "Automated claim package generation with timestamped, geotagged photographic evidence"
  - "Significant reduction in claim cycle time from 65 days toward single-digit weeks"
  - "Higher claim recovery rates through consistent, defensible documentation"

cta_text: "If damage claims are leaking revenue, the fix starts at the dock."
cta_link: "/contact"
```

---

### CARD 6

```
id: "shelf-compliance"
industry_tags: ["fmcg"]
industry_label: "FMCG"
icon: shopping-cart (or shelf/retail equivalent)

hero_stat: "$1M–$30M"
stat_context: "lost per retailer annually from shelf non-compliance"

title: "The Invisible Revenue Leak: What's Not on the Shelf Doesn't Sell"
technology: ["Computer Vision", "Image Recognition", "Analytics"]

pain_point_tags: ["Planogram drift", "Phantom OOS", "Trade spend waste", "Manual audits"]

the_problem: "Planograms go out of compliance at a rate of 10% per week. Products get placed in the wrong position, competitor SKUs creep into allocated space, promotional displays don't match the agreed layout, and shelf stock doesn't reflect what's sitting in the back room. Field reps visit stores, take photos, fill out audit forms — but by the time the data is compiled and analysed, the compliance window has already passed.\n\n25% of out-of-stock incidents aren't supply chain failures at all. The product is in the store — it's just not on the shelf."

why_it_matters: "Poor retail execution and planogram non-compliance costs manufacturers between $1 million and $30 million per retailer in lost sales annually. Brands that have measured compliance impact report significant results — in documented cases, stores with verified planogram compliance saw out-of-stock reductions exceeding 20% compared to non-compliant locations. In FMCG, where every shelf position has a direct revenue line, those reductions translate to substantial recovered volume.\n\nFor brands investing heavily in trade spend and promotional agreements, non-compliance doesn't just lose sales — it means paying for shelf placement you're not actually getting."

our_approach: "We turn the field rep's existing photo capture into an automated compliance engine. Images taken during store visits are processed through vision AI trained on your specific planogram layouts, packaging artwork, and promotional display specifications.\n\nRather than asking field teams to fill out compliance checklists manually — a process prone to subjectivity and inconsistency — the system identifies non-compliant placements, missing facings, and out-of-stock positions directly from the shelf image. Results feed into dashboards that highlight compliance trends by store, region, and SKU category.\n\nThe goal is not to replace the field team's judgment, but to give them objective, real-time data to act on while they're still standing in the aisle."

what_this_could_unlock:
  - "Automated planogram compliance scoring from standard field visit photos"
  - "Real-time identification of out-of-stock, misplaced, and missing SKUs"
  - "Data-driven trade spend verification — proof of execution against promotional agreements"
  - "Compliance trend analytics that inform category management and field team routing"

cta_text: "If you're paying for shelf space you're not getting, let's fix the visibility gap."
cta_link: "/contact"
```

---

### CARD 7

```
id: "safety-near-miss"
industry_tags: ["manufacturing"]
industry_label: "MANUFACTURING"
icon: alert-triangle (or safety/shield equivalent)

hero_stat: "600"
stat_context: "near-misses per recordable safety incident"

title: "The Reports That Never Get Written"
technology: ["Voice AI", "NLP", "Automated Reporting"]

pain_point_tags: ["Unreported hazards", "Reporting friction", "Reactive safety", "Compliance burden"]

the_problem: "For every recordable safety incident on a manufacturing floor, approximately 600 near-misses occur — and the vast majority are never reported. Not because workers don't care, but because the reporting process is a friction point: leave the work area, find a computer, log into the system, fill out a form, describe what happened in writing, submit, return to the task.\n\nResearch from the National Safety Council indicates that 78% of serious workplace incidents were preceded by one or more unreported near-misses. The warning signals were there. The reporting mechanism wasn't."

why_it_matters: "OSHA mandates incident reporting within 8–24 hours, but regulatory compliance is the floor, not the ceiling. The real value of near-miss data is predictive — it reveals the conditions, locations, and behaviours that precede serious injury before that injury occurs.\n\nPlants that capture and analyse near-miss data at scale can shift from reactive incident response to proactive hazard elimination. But that requires a reporting mechanism that operators will actually use — in the moment, on the floor, without breaking their workflow."

our_approach: "We apply Voice AI to remove the friction from safety reporting entirely. Workers report near-misses and hazard observations by speaking — on the floor, in the moment, hands-free. No forms. No computers. No waiting until the end of shift.\n\nThe spoken report is captured, processed through natural language understanding to extract structured data — location, hazard type, equipment involved, suggested action — and routed into your existing safety management system (whether that's an EHS platform, a shared database, or even a structured spreadsheet for smaller operations).\n\nThe approach prioritises capture rate over report perfection. A brief spoken observation filed immediately is worth infinitely more than a detailed form that never gets completed."

what_this_could_unlock:
  - "10× or greater increase in near-miss reporting rates through friction-free voice capture"
  - "Structured safety data generated automatically from natural speech"
  - "Pattern recognition across reported events to identify systemic hazard conditions"
  - "A safety culture shift from compliance-driven documentation to continuous hazard intelligence"

cta_text: "If near-misses are going unreported, the fix isn't a better form — it's no form at all."
cta_link: "/contact"
```

---

### CARD 8

```
id: "inventory-accuracy"
industry_tags: ["supply-chain"]
industry_label: "SUPPLY CHAIN & LOGISTICS"
icon: box (or warehouse/inventory equivalent)

hero_stat: "65–70%"
stat_context: "typical accuracy of manual inventory counting"

title: "The 65% Problem: Why Your Inventory Numbers Don't Match Reality"
technology: ["Vision AI", "System Integration", "Workflow Automation"]

pain_point_tags: ["Count errors", "Stockout surprises", "Safety stock bloat", "ERP mismatch"]

the_problem: "Manual inventory counting — the foundation of most warehouse accuracy programs — typically achieves only 65–70% accuracy. Cycle counts get skipped during peak periods. Staff transpose numbers. Partial pallets get counted as full. Locations get scanned but not verified. The ERP says 200 units. The shelf has 140. Nobody knows until a customer order fails to ship.\n\nAn estimated 60% of retail SKUs carry inaccurate inventory records at any given time. The problem isn't that companies don't count — it's that the counting method itself is inherently unreliable."

why_it_matters: "Inventory inaccuracy costs the global retail and distribution sector $1.77 trillion annually — driven by overstocking that ties up working capital, understocking that loses sales, and expedited shipping to cover gaps that shouldn't exist. Research indicates that a 1% improvement in inventory accuracy can recover $500,000+ in revenue and protect 3–8% of margin.\n\nFor mid-market warehouses and distribution centres, inaccurate inventory is the root cause of a cascade of operational failures: missed shipments, wrong picks, inflated safety stock, and eroded customer confidence."

our_approach: "We approach inventory accuracy as an information integrity problem — not a counting problem. The question isn't 'how do we count faster?' but 'how do we maintain a continuously accurate view of what's actually in the warehouse?'\n\nOur methodology combines vision-based verification at key transaction points — receiving, putaway, picking, and shipping — with intelligent reconciliation logic that flags discrepancies in near real-time rather than waiting for the next scheduled count.\n\nThe system integrates with your existing WMS through automation platforms like n8n or Make.com, creating a verification layer that operates alongside your current processes rather than replacing them. Discrepancies surface as prioritised exceptions, not as surprises during year-end stocktake."

what_this_could_unlock:
  - "Continuous inventory accuracy monitoring that replaces periodic count-and-correct cycles"
  - "Real-time discrepancy flagging at the point of error — not days or weeks later"
  - "Reduction in safety stock buffers driven by confidence in inventory data"
  - "A measurable improvement in order fulfilment accuracy and working capital efficiency"

cta_text: "If your inventory numbers can't be trusted, the problem isn't counting — it's visibility."
cta_link: "/contact"
```

---

### CARD 9

```
id: "voice-ai"
industry_tags: ["manufacturing"]
industry_label: "HEAVY EQUIPMENT & OPERATIONS"
icon: mic (or headset/voice equivalent)
featured: true (show on homepage)

hero_stat: "$220K/hr"
stat_context: "cost of unplanned downtime in oil & gas"

title: "24×7 Enterprise Voice AI: Transforming Field Operations Support"
technology: ["Voice AI", "Conversational Agents", "Knowledge Retrieval"]

pain_point_tags: ["Extended fault diagnosis", "Inconsistent procedures", "Manual documentation", "Safety compliance gaps"]

the_problem: "A hydraulic fault alarm triggers on a haul truck at a remote mine site — 2 AM, skeleton crew, the nearest specialist is 400 kilometres away. The operator pages the on-call technician. Forty minutes pass before anyone begins troubleshooting.\n\nThis is the default for distributed field operations. Sites run around the clock across geographies with limited on-site expertise, and the knowledge gap is widening. 62% of firms already struggle to fill skilled trade positions, and the industry needs 73,500 heavy equipment technicians over the next five years just to keep pace with retirements. Nearly 60% of the current maintenance workforce lacks training for optimum equipment functioning.\n\nThe knowledge to resolve most faults exists — locked in OEM manuals, tribal experience, and the heads of people approaching retirement."

why_it_matters: "Unplanned equipment downtime costs $187,500 per hour in mining and $220,000 per hour in oil and gas — with facilities averaging 32 hours of unplanned downtime per month. The cost isn't just idle iron. It's cascading production losses, safety exposure from improvised workarounds, and contractor callout fees that compound with every hour of delay."

our_approach: "We build Voice AI agents purpose-built for field operations — accessible 24/7, hands-free, grounded in your actual technical documentation and historical fault resolution data.\n\nWhen a technician describes a symptom or reads a fault code, the voice agent retrieves the specific troubleshooting sequence from your OEM manuals and internal knowledge base. It walks the operator through diagnostic steps conversationally and escalates with a structured incident summary when human intervention is needed.\n\nThis directly targets the pain points that cost the most: extended fault diagnosis time, inconsistent procedure adherence across shifts, manual documentation that should capture itself, and safety compliance gaps that emerge when operators improvise without guidance.\n\nVoice is deliberate — in the field, hands hold tools, not keyboards."

what_this_could_unlock:
  - "Round-the-clock expert guidance without shift coverage or contractor dependency"
  - "Measurable reduction in Mean Time to Repair across distributed sites"
  - "Automated incident documentation generated from the voice interaction — no separate write-up"
  - "Consistent procedure adherence regardless of operator experience level"
  - "Institutional knowledge preserved independent of staff tenure"

cta_text: "If your field teams are waiting for answers at 2 AM, there's a voice that never sleeps."
cta_link: "/contact"
```

---

### CARD 10

```
id: "file-sync"
industry_tags: ["enterprise"]
industry_label: "ENTERPRISE SOFTWARE"
icon: folder (or file-search equivalent)
featured: true (show on homepage)

hero_stat: "1.8 hrs/day"
stat_context: "spent by knowledge workers just searching for files"

title: "Intelligent File Sync: Enterprise Data Management Without the Chaos"
technology: ["Vector Search", "RAG", "Intelligent Indexing", "Workflow Automation"]

pain_point_tags: ["Multiple file versions", "Redundant storage", "Wasted search time", "Compliance risks", "Team friction"]

the_problem: "Three people are working from three different versions of the same document — one in OneDrive, one emailed last Tuesday, one buried in a Teams channel half the team doesn't check. Nobody knows which is current. Nobody will until the discrepancy surfaces in a client deliverable or a compliance audit.\n\nKnowledge workers spend 1.8 hours every day — nearly 25% of their working week — just searching for information. 48% of employees regularly struggle to find documents they know exist. The files aren't gone. They're buried in a growing mass of redundant copies, outdated versions, and orphaned folders nobody owns."

why_it_matters: "Poor document management costs organisations an estimated $19,732 per knowledge worker annually. For a 200-person operation, that's nearly $4 million a year in people unable to find what they need.\n\n33% of enterprise data is duplicated, inflating storage costs and creating compliance exposure every time a sensitive document exists in an uncontrolled location. PwC estimates it costs $125 to misfile a single document and up to $700 to reconstruct a lost one. Organisations with poor data governance face breach costs averaging $4.62 million per incident."

our_approach: "We treat file management as an intelligence problem, not a storage problem. The goal isn't another folder structure — it's a system that understands what your files contain, knows where the authoritative version lives, and surfaces the right document when someone needs it.\n\nOur methodology connects your existing storage — OneDrive, SharePoint, network drives — into an intelligent search layer powered by vector-based retrieval. Users describe what they're looking for in natural language and get the precise document or section they need. The system flags version conflicts, surfaces duplicates for consolidation, and maintains a living map of your document landscape.\n\nIntegration runs on automation platforms like n8n and Make.com — working alongside your existing tools, not replacing them."

what_this_could_unlock:
  - "Natural language document search that eliminates folder-diving and keyword guesswork"
  - "Automated detection of duplicate files, version conflicts, and orphaned content"
  - "Reduced storage costs through intelligent deduplication and archival"
  - "Compliance-ready audit trails showing document lineage and access history"
  - "A single source of truth distributed teams can trust, regardless of location"

cta_text: "If your team spends more time finding files than using them, there's a smarter way."
cta_link: "/contact"
```

---

## Implementation Notes

1. **Do not change** the site theme, dark background, cyan/teal accent colour, font families, or overall page layout/navigation structure.
2. **Do not change** any other pages — this prompt applies only to the projects/what-we-solve section and its homepage teaser.
3. The `featured: true` flag on Cards 2, 9, and 10 determines which appear on the homepage. The other 7 appear only on the full `/what-we-solve` page.
4. All text content is final and fact-checked — do not paraphrase, summarise, or rewrite any of the paragraph content.
5. Pain point tags should render identically to the current tag/chip styling on the site.
6. The hero stat should be the most visually prominent element on each collapsed card — larger than the title, in the cyan/teal accent colour.
7. If the site uses a component framework (React, Vue, Svelte, etc.), build the card as a reusable component that accepts the data object above as props.
8. The CTA link (`/contact`) should be updated to match whatever the actual contact/booking page URL is on the site.
