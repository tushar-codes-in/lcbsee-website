# ICBSEE 2026 — Visual Fidelity Specification

## Ground-Truth Reference

This is a **recreation task, not a redesign task**. The live Wix website at `https://icbsee.wixsite.com/my-site-2` is the desktop source of truth. The supplied 720 × 1600 mobile screenshots are the mobile source of truth. When desktop and mobile behavior differ, each reference governs its own breakpoint.

The implementation must preserve the original site’s deliberately literal visual character: the tall green gradient conference masthead, compact desktop pill navigation, mobile full-screen white navigation overlay, lime-green content areas, dark-green footer, yellow/black moving announcement, centered circular speaker portraits, stacked visual scope sequence, and dense registration presentation. Supplied logos, photographs, QR code, journal covers, chapter imagery, and sponsor branding must be retained; no generated or substitute imagery may be used.

## Chosen Direction: Reference-Faithful Institutional Conference Site

**Design Movement:** Direct reconstruction of the current ICBSEE Wix identity, including its high-contrast, information-dense academic-conference conventions.

**Core Principles:** Preserve source-specific composition and line breaks; distinguish desktop and mobile layouts intentionally; favor exact original assets over aesthetic substitutions; retain the original interaction vocabulary rather than modernizing it.

**Color Philosophy:** The fresh green masthead and lime content field communicate environmental research; dark green creates hierarchy; yellow/black gives the time-sensitive abstract announcement a functional warning character; deep red emphasizes dates and location on the home page.

**Layout Paradigm:** A compact stacked masthead on desktop with a horizontal pill navigation row; full-height compositional sections for the home page; direct content fields and image-led sequences on secondary pages; a mobile masthead that is consciously taller and more vertically spaced than desktop.

**Signature Elements:** The green/white atmospheric masthead; lime-green content fields with dark-underlined labels; the scrolling segmented yellow announcement block.

**Interaction Philosophy:** Navigation, chapter expansion, image gallery controls, lightbox viewing, outbound action buttons, and a live countdown should match the original’s practical behavior. Interactions remain direct and unobtrusive.

**Animation:** The abstract-submission notice moves continuously across the home hero; gallery changes and mobile-menu motion remain brief and functional; all optional motion respects reduced-motion preferences.

**Typography System:** Use Roboto Condensed for masthead, announcements, and emphatic home-page copy; Arial/Helvetica for navigation, dense body content, and dates; retain uppercase headings, underlines, italics, and source-style manual line breaks where the reference requires them.

**Brand Essence:** ICBSEE 2026 is the NIT Rourkela conference destination for researchers working across bioprocess, sustainable environment, and energy. **Academic, environmental, direct.**

**Brand Voice:** Headlines are factual, uppercase, and assertive; calls to action name their purpose plainly. Example: “SUBMIT ABSTRACT.” Example: “REACHING ROURKELA.”

**Wordmark & Logo:** Use the provided ICBSEE and NIT Rourkela marks, not text recreations or replacement graphics.

**Signature Brand Color:** `#086b2d` (the existing deep conference green).

## Style Decisions

- Desktop will use the Wix source’s compact green header, white all-caps title, actual logos, and bright-green rounded navigation controls.
- Mobile will use the screenshot-specific tall masthead and white full-screen navigation overlay rather than automatically shrinking the desktop header.
- The shared footer will preserve the dark green field, ICBSEE logo, “Designed by BM Department of NIT Rourkela” credit, and social links.
