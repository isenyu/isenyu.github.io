# En Yu — academic homepage

A responsive static website for GitHub Pages. No build step, external fonts, or JavaScript libraries are required.

## Preview

Open `index.html`, or run `python3 -m http.server 8000` in this directory and visit `http://localhost:8000`.

## Files and maintenance

- `index.html`: About Me, Recent News, Research Interests, and 15 selected publications.
- `publication.html`: the full local archive of 30 papers.
- `service.html`: tutorials, talks, conference organization, and peer review.
- `style.css`: shared desktop/mobile layouts and styles.
- `site.js`: research scroller controls and publication-video playback controls.
- `assets/`: active images, video, favicon, illustration prompts, and 30 BibTeX files.

Update shared paper information in About, Publications, and the matching Bib file together. The sidebar is repeated on all three pages. Google Scholar and GitHub sidebar links open in new tabs.

Recent News has a scrollable region (320px on desktop, 280px on mobile). Research cards scroll horizontally. VGAS uses a muted looping video with a pause/play button and reduced-motion support.

## News dates and sources

Recent News is edited directly in the `news` section of `index.html`. Dates use MM/YYYY. Acceptance news uses the acceptance month: AAAI 2026 (11/2025) and NeurIPS 2025 (09/2025) follow the announcements on https://xiaoyuyoung.github.io/; ICLR 2025 (01/2025) follows the official decision notification schedule at https://iclr.cc/Conferences/2025/Dates. Conference names retain their publication years.

Media news links point to the original Synced (机器之心) WeChat articles, also linked from the coauthor homepage above. WeChat article bodies were unavailable during verification; reporting months are based on dated republications: APO, May 14, 2026 (https://www.aitntnews.com/newDetail.html?newId=25059), and CAMEL, January 5, 2026 (https://finance.sina.cn/stock/jdts/2026-01-05/detail-inhfffrx8274964.d.html).

Tutorial and special-session news uses event months, not invitation dates (which were not supplied). Official conference dates: DICTA, December 2–4, 2026 (https://dicta2026.dictaconference.org/); BESC, October 26–28, 2026 (https://besc-conf.org/); FLINS–ISKE, July 15–19, 2026 (https://2026.flins.cc/). DICTA is marked upcoming as of November 10, 2026; update its wording after the tutorial. Titles and roles match the Services page, with the tutorial invitation supplied by En Yu.

VGAS acceptance news uses April 2026 based on the [official notification schedule](https://2026.ijcai.org/important-dates/). AAMAS acceptance news uses December 2025 based on the [main-track notification schedule](https://cyprusconferences.org/aamas2026/important-dates/), not an individual acceptance email.

ICML 2026 Gold Reviewer news uses the letter supplied by En Yu, dated May 19, 2026. The CBA invited-talk title follows the invitation poster: “Drift Learning: Building adaptive intelligence for a dynamic world”.

## Publication links and bibliography

Paper rows on About and Publications show only available resources, in this order: Paper, Code (when confirmed), Project Page (when confirmed), and Bib. Unavailable Code controls are omitted entirely. Paper opens the publication or preprint; Code opens the author-provided repository. Bib downloads a static BibTeX file from `assets/bib/`, so it also works when the site is opened locally without JavaScript.

BibTeX files use the title, author list, publication year, venue, and URL already recorded in the archive; DOI and arXiv identifiers are included where available. These are minimal citations, not claimed to be complete publisher exports. Keep these files in sync when editing paper metadata.

Code links were sourced from the [coauthor homepage](https://xiaoyuyoung.github.io/), [VGAS paper](https://arxiv.org/abs/2602.07399), [See-and-Reach paper](https://arxiv.org/abs/2606.20045), and [DBFly project page](https://xuefanfu.github.io/DBFly-Page/). FreKoo's paper links to `https://github.com/isenyu/FreKoo`, which returned 404 when checked on 2026-11-10, so its Code control is omitted.

Year/version notes from the November 10, 2026 review:

- FreKoo and Walking the Tightrope are placed in 2025 using the NeurIPS conference year; Scholar dates both records to 2026.
- Turning Drift into Constraint and Bandwidth-constrained Variational Message Encoding are placed in 2026 using ICML and AAMAS publication years; Scholar dates their preprints to 2025.
- TongueReenact is included as a 2026 arXiv preprint. Scholar lists WACV 2027 as its venue; no 2027 proceedings record was verified in this update.
- Scholar's “Rolling with the Punches: Resilient Contrastive Pre-training under Non-Stationary Drift” corresponds to arXiv:2502.07620. The archive uses the current arXiv title, “Resilient Contrastive Pre-training under Non-Stationary Drift,” and its current four-author list, including Wei Duan.
- For MIAN and VGAS, author lists follow the official IJCAI 2025 and 2026 proceedings respectively.

## Paper image and video sources

Paper figures belong to their respective authors and illustrate En Yu's coauthored research. The Publications archive remains a plain text list.

- `assets/portrait.jpg`: optimized copy of the original `EnYu.JPG`.
- `assets/camel.png`: https://xiaoyuyoung.github.io/assets/img/camel.png
- `assets/frekoo.png`: https://xiaoyuyoung.github.io/assets/img/yuNeurIPS25.png
- `assets/mllm.png`: https://raw.githubusercontent.com/XiaoyuYoung/ConceptDriftMLLMs/main/figures/framework.png
- `assets/obal.png`: https://arxiv.org/html/2312.10841v2/framework_update.png
- `assets/apo.png`: https://xiaoyuyoung.github.io/APO/workflow.png
- `assets/cpo.png`: https://github.com/XiaoyuYoung/XiaoyuYoung.github.io/raw/main/assets/img/yang2025NeurIPS.png
- `assets/omug.png`: https://xiaoyuyoung.github.io/assets/img/fuzzy_2026.png
- `assets/bvme.jpg`: https://arxiv.org/html/2512.11179v1/Fig/XIB.jpg
- `assets/gilcd.png`: https://arxiv.org/html/2506.05736v2/setting.png
- `assets/dstt.jpg`: publisher Figure 2, https://ars.els-cdn.com/content/image/1-s2.0-S0031320325007356-gr2_lrg.jpg
- `assets/mian.png`: https://arxiv.org/html/2502.01699v2/overview-1-17.png (matches the MIAN framework in Figure 2 of the IJCAI paper).
- `assets/asfs.svg`: a locally created typographic title card, not a paper figure. The IEEE page/PDF could not be retrieved, so this card preserves the image-column layout without inventing a framework illustration. Replace it with the original figure when available.
- `assets/fsrl.png`: Figure 4.1 from [En Yu's UTS thesis](https://opus.lib.uts.edu.au/bitstream/10453/186198/1/thesis.pdf), PDF page 106 / printed page 80.
- `assets/fdch.png`: Figure 1, page 2, of the [FDCH preprint](https://arxiv.org/abs/1904.11171).
- `assets/vgas-demo.mp4`: the VGAS (not VGAS+) successful “put the bowl on top of the cabinet” [project demonstration](https://jyugo-15.github.io/VGAS/assets/videos/goal_bowl_cabinet/vgas.mp4). 512×512, 8.667 seconds; `assets/vgas-demo-poster.jpg` is its first frame.

## Research illustrations

The Research Interests cards now use three original illustrations generated with the built-in `image_gen` tool. Cards contain plain images with no image hyperlinks or source captions. 

- `assets/research-trustworthy-editorial.jpg`: an independent, text-free conceptual sculpture of a coherent neural lattice amid changing particle currents, expressing robust adaptive intelligence. Prompt recorded in `assets/research-trustworthy-editorial-prompt.json`.
- `assets/research-multimodal-capabilities.jpg`: image, video, audio and text inputs feeding MLLMs with three labeled capabilities: Robust Representation, Trustworthy Reasoning, and Continual Adaptation, followed by an answer card. Edited from the approved reasoning illustration; its prompt is recorded in `assets/research-multimodal-capabilities-prompt.json`.
- `assets/research-embodied-generated.jpg`: robotic arm and research quadcopter in a bright studio.

The current first two image prompts are recorded in `assets/research-trustworthy-editorial-prompt.json` and `assets/research-multimodal-capabilities-prompt.json`; the unchanged embodied-AI prompt and initial versions are in `assets/research-image-prompts.json`. Web images are JPEGs optimized to 1200 pixels wide; original PNGs remain in the image generator's output directory. These are conceptual illustrations, not photographs of actual lab equipment.

## Verification and pending checks

On November 10, 2026, About, Publications, and Services were rendered in Chrome at 390, 768, and 1440 CSS pixels without horizontal page overflow or broken images. News/research scrolling, video playback/pause and reduced-motion behavior were checked. The selected-paper author lists, contribution markers, Oral labels and Bib links matched the archive.

The external-link check returned 42 HTTP 200 responses from 55 URLs; other responses were publisher access restrictions or timeouts, not confirmed broken links. The old DDCH Google Drive link was replaced with its [publisher DOI](https://doi.org/10.1016/j.neucom.2021.11.035).

Peer-review years should be confirmed against actual reviewing records. News dates use different stated bases as documented above. ASFS currently uses a title card rather than a paper figure. Generated illustrations are conceptual, not empirical results or photographs of the author's laboratory.

## Cleanup — November 11, 2026

Removed 24 unreferenced legacy files, including the old contact page, superseded illustrations, and unused original photos. Recoverable copies and the previous README are archived outside this repository. Active pages, assets, illustration prompts, and Git history were retained. No upload or deployment was performed during cleanup.
