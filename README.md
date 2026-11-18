# The Times of Shums

A daily newspaper with 11 desks, one story per card, original-reporting links and permanent dated archives.

## GitHub Pages (no OpenAI API key)

The repository has a no-API Pages deployment workflow at `.github/workflows/pages.yml`. It deploys the static HTML contained in `site/` on every push.

**Initial installation:** Copy the `site/` directory from the website package into this repository root, preserving the folder itself. Do not upload the old API-based research workflow. Then open **Settings → Pages → Build and deployment → Source: GitHub Actions**. Go to **Actions → Deploy The Times of Shums → Run workflow** if automatic deployment did not run.

Once deployed, the site should appear at:
https://shumsbadwal.github.io/thetimesofshums/

## Daily editions without an API key

The existing ChatGPT automation **The Times of Shums** is scheduled for 7:00 AM Asia/Kolkata. It has instructions to research the morning edition, deliver it in chat, and attempt to commit its dated HTML/JSON to this repository using the connected GitHub tool. Changes to `site/` trigger a GitHub Pages deployment. Previous dated editions should be preserved.

**Important:** This publication path depends on the scheduled task retaining GitHub tool access and successfully completing a multi-file publish. It is not yet proven end-to-end; the first scheduled run needs to be checked. GitHub Actions deployment may also take additional time, so 7:00 AM is the task trigger, not a guaranteed site-ready timestamp. In case of failure, the task should deliver the edition in chat and report that the site was not updated. No separate OpenAI API key is required.

## Editorial

World · UK · US · South Asia · India · Mumbai & Maharashtra · Business & Economy · Science & Research · Technology & AI · Climate & Environment · CDR & Marine CDR.

Climate integrates measurements and assessments from Copernicus, NOAA, NSIDC, NASA and other observational sources. The CDR desk emphasises mCDR, scientific uncertainty and distinctions between contracted and verified removal.

**Source integrity:** Original article links do not guarantee the accuracy of every summary. The inaugural 18 November 2026 edition was assembled from earlier reporting and has not been completely re-audited.

The repository and its GitHub Pages website are public.
