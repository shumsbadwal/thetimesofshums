# Editorial standard — The Times of Shums

Established from a review of the inaugural 18 November 2026 edition (140 stories across 15 desks (historical structure)), and the shortcomings of the 20 November 2026 edition (28 stories).

## Core editorial promise
Publish a substantial, source-led daily newspaper. Story counts respond to newsworthiness, but a reduced issue must not be presented as comprehensive without a documented coverage sweep. Coverage breadth is a target, not an edition-wide publication veto. Each published story must pass factual verification.

## Desk order and required reporting sweep (14 desks from the revised 20 November edition onward)
1. World — security, diplomacy, institutions, humanitarian affairs, investigations and cross-border developments.
2. United Kingdom — Westminster, legislation, government and opposition, elections, courts, civil rights, public services, local and devolved politics.
3. United States — executive, Congress, elections, parties, federal and state governance, courts, civil rights and oversight.
4. South Asia — Bangladesh, Pakistan, Nepal, Sri Lanka, Afghanistan, Bhutan, Maldives; politics, democracy, labour, rights, migration, economics, development and diplomacy. Do not force unnewsworthy country mentions.
5. India — Parliament, Union policy, opposition, elections, campaign finance, states, federalism, courts, rights, institutional accountability and investigations.
6. Mumbai & Maharashtra — state and civic politics, transport, housing, infrastructure, public health, air quality and environment.
7. Entertainment and Pop Culture - Global — cinema, television, OTT, music, gaming, awards, cultural and industry developments.
8. Entertainment and Pop Culture - India — Hindi and regional-language cinema, OTT, music, independent film, culture and industry.
9. Sports — significant Indian and international results, competition stages, records, governance and previews across relevant sports.
10. Business and Finance - Global — growth, labour, inflation, central banks, trade, credit, bonds, equities, currencies, companies and regulation, geographically broad.
11. Business and Finance - India — RBI, fiscal policy, jobs, prices, growth, trade, companies, banks, credit, markets and regulation.
12. Science & Research — medicine, physical and life sciences, space, Earth science and scientific methods.
13. Technology & AI — AI research and deployment, chips, cybersecurity, platforms, regulation, competition and social consequences.
14. Climate & Environment — measured Earth-system change alongside climate policy, finance, ecology and adaptation. Include carbon dioxide removal (CDR), including marine CDR, only when a genuinely significant, independently verified research, deployment, policy or accountability development warrants coverage; do not manufacture daily CDR stories. Distinguish contracted, modelled, measured and verified removal.

## Story quality
- Lead with what happened and when; distinguish event date from publication date and edition cutoff.
- State the factual evidence, figures, units and chronology, explain wider implications and relevant counterarguments, and identify uncertainty and next steps.
- Link original documents and original reporting for consequential claims; use multiple independent sources where needed. Useful independent outlets include Reuters, AP, ThePrint, Newslaundry, Scroll, The Indian Express and Novara Media.
- Separate allegation from finding, draft from law, proposal from implementation, forecast from observation, preliminary result from peer-reviewed evidence, and completed sporting result from fixture.
- Avoid duplication between desks and recycling older items as new; include older context only with clear dating.

## Earth-system observations
Actively check C3S monthly bulletins and Climate Pulse, Copernicus Marine indicators, CAMS fire emissions and air quality, NOAA NCEI and GML, NOAA ENSO updates, NSIDC, NASA Earth Observatory and suitable regional observations. Publish genuinely material new observations, not daily noise. Give variable, value, units, region, period, baseline, publication date, dataset and method, uncertainty and data lag. Distinguish in-situ measurements, satellite retrievals, reanalysis, model estimates, forecasts and attribution. Where relevant connect marine heat, stratification, carbonate chemistry and air-sea exchange to mCDR research.

## Marine CDR integrity
Distinguish planned, contracted, modelled, experimentally measured, delivered and independently verified removal. Discuss system boundaries, counterfactuals, permanence, leakage, additionality, alkalinity fate, air-sea equilibration, ecological impacts, uncertainty, MRV and permitting. Do not equate alkalinity dosing or a credit sale with verified atmospheric CO2 removal.

## Prepublication quality gate
1. Read prior edition and map new developments; perform a theme-by-theme sweep for all 14 desks.
2. Check sources, event dates, records, original links, data and counterclaims; do not invent citations.
3. Review desk breadth, political coverage, business coverage, Earth-system observations and marine CDR depth; explicitly flag missing reporting.
4. Validate structured JSON, story counts, HTML escaping, source URLs, one-story-at-a-time navigation, first/last disabled states, responsive layout, keyboard controls and prev/next desk links.
5. Preserve the original 18 November navigation markup: desktop `reader-arrow` controls and mobile `reader-mobile-controls` / `mobile-story-button` / `mobile-story-status`. Use `body class="desk-page"` and shared `../styles.css` and `../reader.js`; do not introduce an unstyled `reader-controls` substitute.
6. Publish only to root `YYYY-MM-DD/` on main, update root index and archive, never overwrite old editions without an explicit correction record, and read back committed files. Distinguish GitHub commit from live Pages deployment.
7. If reporting breadth is incomplete, publish the verified subset and report omissions in the private publication summary. Never publish an unverified story. Technical integrity failures must be corrected before switching the homepage.

## Editorial judgment
The 18 November counts are a breadth reference, not a daily target. A quiet desk may have no material story after a real reporting sweep; a consequential desk may need many. Depth and evidence outrank numerical quotas.

## Desk consolidation — 20 November 2026
The separate CDR & Marine CDR desk is retired for new and revised editions. The newspaper has **14 desks**. Relevant carbon-removal reporting belongs in Climate & Environment, subject to the same newsworthiness and verification criteria as every other story. Historical editions may retain the original 15-desk layout to preserve their published record.

## Rolling coverage and missed-story recovery — adopted 23 November 2026
- Every new edition must examine the preceding 48–72 hours of reporting, not just stories published on the edition date; extend further for consequential stories missed earlier.
- Compare candidate developments against the previous two to three editions. Prioritise significant stories not previously covered, even if the original event occurred yesterday or earlier.
- Do not repeat a previously published story without a material new development, newly verified evidence, or a substantial correction; explicitly explain what changed.
- Date the event, reporting and current status distinctly. Older news may appear as a clearly labelled catch-up story, never disguised as breaking news.
- Complete a cross-desk missed-story sweep before publication; quality and verifiable evidence matter more than arbitrary same-day freshness or story quotas.

## Daily publication reliability — 25 November 2026
- Publish the verified subset on the actual local date even if some desks are thin or empty. Do not wait for exhaustive coverage or renewed permission; no minimum story count. Keep every desk in the standard order and show accurate counts.
- Search across the rolling 48–72-hour window in manageable batches, prioritising consequential omissions. If a source or desk is unavailable, move on to the next. Never fabricate facts or citations.
- Use available original reporting and primary evidence; record coverage gaps in the chat completion summary, not on the homepage. Add further verified reporting to the current dated issue when appropriate, documenting revisions in commits.
- Preserve technical gates: valid JSON and HTML, source links, matching counts, archive and navigation. A failure to verify an individual story excludes that story, not the entire newspaper.
- If no reliable evidence is accessible at all, or repository writes fail, report the actual blocker. Distinguish commit from live deployment.
