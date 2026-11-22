# Portfolio redesign preservation checklist

Source audit completed before editing on 2026-11-21; local React site run and captured at 1440px. Source is authoritative; no factual copy is being updated. Existing uncommitted Photo Vault work is included.

## Content mapping

- [x] Header → oversized name hero: exact university introduction; `me.jpg`; VP `logo.jpeg`; résumé PDF; GitHub and LinkedIn destinations.
- [x] Eleven interests → rotating hero text: Computer Vision., Java., Python., Robotics., Data Science., Javascript., Swift., React., Mobile App Development, Software, Machine Learning.
- [x] About → spacious lead and motive columns: heading, full sophomore biography, all three motive paragraphs preserved verbatim.
- [x] Hobbies → interactive emoji field: soccer ⚽, camera 📷, airplane ✈️, F1 🏎️, coding 💻, gaming 🎮, headphones 🎧, running 🏃🏽‍♂️‍➡️. Preserve cursor attraction/repulsion; add mobile/touch and reduced-motion access.
- [x] Professional history → five typographic rows. Preserve exact role, company, dates, location and logo for U.S. Bank, Soil Sensing & Monitoring Lab, ISACA, Computational Optics Group, Mathnasium.
- [x] Leadership → five separate typographic rows. Preserve exact role, company, dates, location and logo for Cardinal Trading Group, FiPet, Data Science For Sustainable Development, Indian Students Association, CompSci Kids.
- [x] Projects → seven editorial articles with complete descriptions and every existing action. Data remains in source arrays.
  - Modern AOI System for Plexus: PCBA_demo.mp4; live deployment; presentation.
  - FocusAI: FocusAI_demo.mp4; CV_productivity GitHub.
  - Raspberry Pi OCR Summarizer: sample-image presentation.
  - FiPet: FiPet_Demo.MP4; fipet.dev; App Store + badge; LinkedIn + logo; full waitlist/user/team metrics.
  - Webscrapers: webscrapers.org.
  - Impulse Workout App: GitHub; presentation.
  - Rube Goldberg Physics Simulation: YouTube demo.
- [x] Footer → oversized contact composition: original thanks, logo2.jpeg, vppatel3@wisc.edu, (815)-416-5778, original GitHub/LinkedIn. Add mailto/tel actions.
- [x] Photo Vault → preserve hash navigation, selected control, starter screen and home return; restyle with the same palette.

## Interaction and asset audit

Existing active animations: typing/deleting interests; hobby float, cursor attraction, repulsion and dismissing hobby box; scroll-dependent burgundy-to-charcoal background; scroll-path travelling marker; button/card hover states; three autoplay/muted/loop/playsInline videos. Preserve functional behavior; decorative background/color motion can be adapted to the redesign. ScrollPhysicsScene is unused in the rendered app; retain its source. No expandable experience details exist in the current implementation.

All source assets retained, including unused portraits/branding variants (me1.jpg, logo1.jpeg), organization logos and résumé. No new photography or achievement claims. External actions retain exact URLs and new-tab behavior. Fix mislabeled LinkedIn and blank icon-only links. Add native video controls and reduced-motion handling.

## Validation

- [x] Production build and relevant tests.
- [x] Mobile, tablet, desktop rendered checks; no horizontal overflow.
- [x] Compare all external URLs, seven descriptions, ten roles/dates/locations and three media sources against the pre-edit audit.
- [x] Verify résumé/asset responses, videos, typing, hobby interaction, keyboard focus, hash navigation and browser Back.
- [x] Reduced-motion and animation-failure readability.

## Completed verification

### Quotvero spotlight and dedicated project archive (latest)

Quotvero replaces the AOI homepage spotlight, using the supplied root
The supplied favicon (now `asset-sources/originals/quotvero-favicon.svg`) is used as
`src/assets/logos/quotvero.svg`. The only new
description is the user's positioning: “A B2B platform offering agentic services.”
Its website action points to `https://quotvero.com/` (confirmed to redirect to
the live www site). FiPet remains the second spotlight.

“Browse other projects” now opens the separate GitHub Pages-compatible
`#/projects` screen rather than a homepage anchor. All seven original full
project records remain there, including AOI and FiPet's complete description,
media and additional links. They are no longer rendered inline on the home page.
The new page uses cream dot paper, a subtle red margin rule, monospace notebook
labels and the site's existing serif/Badger-red visual language.

The navbar Projects destination, document title, heading focus, main return
controls and hash navigation handle the new screen. Direct refresh, browser
Back/Forward, keyboard entry, navigation to About and Photo Vault, and overflow
checks pass at 320, 390, 768 and 1440px. The supplied logo loads, all seven project
articles and three original videos remain available, and no runtime errors were
observed. Build and three tests pass. The experience fields already edited by
the user in `portfolio.js` were retained; preservation checks now compare their
rendered facts against the current canonical data rather than stale dates in the
initial audit.

### Résumé spread and page switch (current layout)

The folder layout below has been superseded by the user's new reference:
forest-green and cream sections, serif editorial headings, and a Badger-red
experience panel offset across the section boundary. Four recent professional
roles appear on the left; sixteen source-supported technologies and two project
spotlights (AOI and FiPet) appear on the right. Each featured role has its original
logo and a website link. FiPet uses its supplied logo; AOI has an editable
monogram slot because no separate project logo was supplied. The remaining
professional role and five club/leadership records remain in a native expandable
archive, with their original logos, roles, dates and locations. All seven full
projects, descriptions, actions and media remain in the project section below.

Skills are grouped from the site's existing interests and project descriptions,
without proficiency ratings or added achievement claims. Featured project slots,
skills and website destinations are maintained in `src/data/portfolio.js`.
Company destinations were verified against the official
[U.S. Bank](https://www.usbank.com/),
[Soil Sensing & Monitoring Lab](https://soilsensingmonitoring.soilenvsci.wisc.edu/),
[ISACA](https://www.isaca.org/) and
[Computational Optics Group](https://www.compoptics.wisc.edu/) sites.

The explicit navigation changes add a centered rounded Main / Photo Vault
segmented control with a moving red selected indicator, pressed/current states,
keyboard focus and responsive labels. The requested “Explore the portfolio”
hero link is removed. Other hero content, About, portrait, contact and Photo
Vault content/rendering are unchanged. Layout-specific styling is confined to
the work/project sections and the requested navigation controls.

Browser checks at 320, 390, 768 and 1440px verify exact horizontal centering,
keyboard switching, four featured roles, two spotlights, all ten accessible
experience records, all seven project entries, working logo loads and no
horizontal overflow or runtime errors. Build, navigation/active-state checks
and the original content-preservation tests pass.

### Folder-style experience update

The experience rows have been replaced by overlapping, alternating folder flaps inspired by the supplied reference. Each company and role remains visible on its tab; native disclosures reveal the unchanged logo, dates and location. Both professional history and leadership retain all five entries. The section introduction now reads “Learning by building. Growing through the work.” The navigation was not changed. Browser checks at 320, 390, 768 and 1440px verify all ten labels fit, all folders expand/collapse with Enter, logos load, metadata remains available, and there is no horizontal overflow or runtime error. Production build, preservation tests and whitespace checks pass.

- Production build and two Jest tests pass. Preservation regression test covers seven complete project descriptions/actions, ten complete experience records, eleven interests, and all original long-form copy.
- Chrome render inspected at 390 × 844, 768 × 1024, and 1440 × 1000; additional overflow/bounds checks at 320 × 740. Main content, portrait, project copy and experience rows fit each viewport.
- All original external destination URLs match the pre-edit snapshot exactly. Availability of third-party services was not asserted; local images and résumé return/load successfully.
- All three original media URLs preserved; playback advances with native controls, looping, muted and inline behavior. Reduced motion pauses automatic playback while retaining manual controls.
- Tested eleven-interest typing progression, hobby scattering, Photo Vault selected state and focused heading, browser Back, visible keyboard focus, and reduced-motion static hobbies/disabled entrances. Zero browser runtime errors.
- Hero and major headings now use oversized sans-serif typography; fine dividers and alternating project layouts replace cards. Decorative scroll-color interpolation is replaced by the paper/ink/burgundy section palette; the scroll-path marker remains subtle. All original assets and unused physics source remain.
- Existing React/Cra stack, /personalsite/ base, package dependencies and GitHub Pages deploy command unchanged. Build output regenerated; no deployment performed.
