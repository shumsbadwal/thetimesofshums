# The Times of Shums

A source-led daily newspaper published as static HTML, with each edition preserved under its ISO-date directory and today's edition linked from the repository-root `index.html`.

## Editorial desk order

1. World
2. United Kingdom
3. United States
4. South Asia
5. India
6. Mumbai & Maharashtra
7. Entertainment and Pop Culture - Global
8. Entertainment and Pop Culture - India
9. Sports
10. Business and Finance - Global
11. Business and Finance - India
12. Science & Research
13. Technology & AI
14. Climate & Environment
15. CDR & Marine CDR

The first completed edition is **18 November 2026**. Keep the 15-desk sequence for subsequent editions unless editorial direction changes.

## Reporting principles

- Cover significant developments, not just high-volume headlines. Provide concise reporting plus an explanation of why each development matters.
- Include meaningful **political** coverage across India, the United Kingdom and the United States, covering parliamentary/congressional action, government policy, the opposition, institutions and accountability.
- Treat **Sports** as a broad desk: Indian and international events, cricket, football, tennis, badminton, hockey, chess, motorsport, basketball and other significant competitions as the news warrants. Separate completed results from fixtures and previews.
- Cover cultural news on both entertainment desks, including film, series, streaming, music, the creative industries, awards and pop culture; include regional-language Indian industries, not only Hindi cinema.
- Report business and finance separately for the **world** and **India**. Follow macro data, central banks, capital markets, companies, banks, trade, currencies and policy; distinguish results from estimates, plans and projections.
- In **Climate & Environment**, integrate substantive Earth-system research and operational observations from sources such as Copernicus, NOAA, NASA, WMO, national meteorological agencies and peer-reviewed literature alongside climate policy, conservation and environmental news. Do not isolate Earth-system updates in a separate desk or standalone markdown page.
- Prioritise directly linked, original sources: official statistics and disclosures, court and parliamentary documents, scientific research, governing bodies, and credible original reporting. Cross-check consequential claims; include multiple sources when they add independent confirmation, primary evidence or relevant contesting views.
- Attribute contested allegations, avoid premature claims, check event/publication dates and cutoffs, and do not portray scheduled events, forecasts or early estimates as completed outcomes.
- Each story in `edition.json` includes a title, topical tag, explanatory body paragraphs and explicit `sources` with named labels and URLs. Avoid fabricated links or unsupported numerical precision.

## Site architecture

For each day, create `YYYY-MM-DD/edition.json`, `YYYY-MM-DD/index.html` and one page per desk in the same directory. The repository root `index.html` displays the latest edition and `archive.html` links historical dates. Shared `styles.css` and `reader.js` drive the accessible story-by-story reading experience. Verify story counts, desk order, source links and previous/next links before publishing.
