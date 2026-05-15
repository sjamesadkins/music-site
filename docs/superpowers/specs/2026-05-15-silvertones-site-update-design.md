# The Silvertones Site Update — Design Spec

**Date:** 2026-05-15
**Status:** Approved
**Branch (current):** `laurels` (will be renamed `silvertones`)
**Repo:** `sjamesadkins/music-site` (repo name stays generic)

## Goals

Refresh a dormant React/Vite single-page site so it can be redeployed under a new band identity. Specifically:

1. Rename the band from "Laurels" to "The Silvertones" everywhere in code and UI.
2. Replace the duplicated 6-image Media grid with 3 fresh images + 3 short looping muted videos (self-hosted).
3. Fix a broken contact form so messages reliably reach Gmail via EmailJS.
4. Polish: tighten the existing 4-color accent palette, fix mobile breakpoints, drop unused font files, fix the broken favicon declaration, add page meta tags.
5. Add new branding details: silver gradient on the band name, SVG laurel-branch overlay (silver + orange) on the existing skull image.
6. Update copy: a new About paragraph; a new intro header and one label tweak on the Contact form.
7. Deploy in two clean phases — first to the existing `sjamesadkins.github.io/music-site` URL, then migrate to the newly-purchased custom domain `silvertoneslive.com` registered through Cloudflare Registrar.

## Non-goals

- Adding a router / multi-page navigation. The site keeps its current state-swap pattern.
- Replacing EmailJS with another contact-form provider. Existing service/template is reused; user reconnects Gmail on EmailJS's side.
- Adding analytics, SEO automation, or build-time optimizations beyond meta tags.
- Cross-browser exhaustive testing. Smoke-test in the user's primary browser only.
- Spam protection on the contact form. Punted; revisit if abuse appears.
- Generating or editing JPG assets. The skull JPG stays as-is; laurels are added via SVG overlay.

## Constraints

- **GitHub Pages file size:** 100 MB per file hard limit. Video clips must be compressed accordingly (H.264, likely 720p, sensible bitrate). The user supplies the mp4s; we flag any file that's too large.
- **GitHub Pages bandwidth:** soft 100 GB/month cap. Three short clips is well within this.
- **EmailJS public key in client code:** `MIMdJYunxMPNG7bsq` is exposed in the bundle. This is the documented EmailJS pattern; allowlist domains on EmailJS's side prevent abuse from other origins.
- **Node toolchain:** user's Homebrew Node binary is currently broken (icu4c dylib version drift). Must be replaced before any local dev work is possible.

---

## Phase 1 — Code changes, deploy to existing URL

### Step 0 — Fix the local Node toolchain (precondition)

The current failure is in the system Node itself, not the project:

```
dyld: Library not loaded: /opt/homebrew/opt/icu4c/lib/libicui18n.74.dylib
Referenced from: /opt/homebrew/Cellar/node/22.9.0/bin/node
```

Homebrew upgraded `icu4c` from v74 to v77 since Node 22.9.0 was installed (~Oct 2025); the old dylib no longer exists on disk. Every Node command is broken until the binary is replaced.

User already has nvm 0.39.5 installed. Solution: update nvm, install a fresh nvm-managed Node, pin the project to it, and rebuild `node_modules`.

**0.1** Update nvm (user runs in own terminal, not via tooling — installer touches `~/.zshrc`):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

**0.2** Install Node 22 LTS and make it the default:
```bash
nvm install --lts
nvm use --lts
nvm alias default lts/*
```

**0.3** Pin the project to Node 22 by adding `.nvmrc`:
```
22
```

**0.4** Clean reinstall of dependencies. Approved decision: remove `package-lock.json` and regenerate (site has been dormant 17 months; minor/patch security updates are wanted):
```bash
rm -rf node_modules package-lock.json
npm install
```

**0.5** Verify dev server starts:
```bash
npm run dev
```
Expected: Vite serves at `http://localhost:5173/music-site/` and the existing (still pre-update) site renders.

### Step 1 — Rename Laurels → The Silvertones

Single sweep across all surfaces:

| Location | Before | After |
|---|---|---|
| `index.html` `<title>` | `LAURELS Music` | `The Silvertones` |
| `src/Components/Nav/Nav.jsx` brand `<Navbar.Text>` | `Laurels` | `The Silvertones` |
| `package.json` `homepage` | `https://sjamesadkins.github.io/music-site/` | unchanged in Phase 1; set to `https://silvertoneslive.com` in Phase 2 |
| `README.md` | Vite boilerplate | "The Silvertones — band site. React/Vite, deployed to GitHub Pages." |
| Git branch | `laurels` | `silvertones` (rename: `git branch -m laurels silvertones`) |

### Step 2 — Polish hygiene (decided in brainstorming)

**2a. Palette consistency** — keep all four existing accent colors, but assign each one role and stop introducing ad-hoc colors:

| Color | Hex | Role |
|---|---|---|
| Background | `#242424` | All pages |
| Primary text | `#fff7e6` | All body copy |
| Blue | `#006cbf` | Nav link hover only |
| Orange | `#bf5000` | Nav link default + SVG laurel stroke + Contact form focus ring |
| Teal | `#b3cccc` | Button border (default) + Contact form input borders + form labels |
| Gold | `#d7820a` | Button hover border + form validation feedback accent |
| Silver (new role) | `#c0c0c0` (`#f5f5f5` → `#c0c0c0` → `#808080` gradient stops) | Band name gradient + SVG laurel fill |

**2b. Mobile breakpoints**

- `src/Components/Nav/Nav.css`: change `@media (max-device-width: 500px)` → `@media (max-width: 500px)`.
- `src/Components/Media/Media.css`: change `@media (max-device-width: 830px)` → `@media (max-width: 830px)`; drop the `padding: 100px` (replace with `padding: 16px`); keep single-column grid.
- `src/Components/Nav/Nav.jsx`: change brand image fixed `height="250"` to scaling `style={{ height: "clamp(120px, 25vw, 250px)" }}`. Remove the `marginTop: "30%"` push (it's a hack to vertically center; CSS-side adjustment handles it).

**2c. Drop unused fonts** — `src/index.css` declares 6 `@font-face` rules, but only `rumor` is consumed anywhere. Remove the `@font-face` blocks for `france`, `facon`, `paper`, `tundra`, `draco`. Delete the matching directories under `src/Assets/Fonts/`. Net: ~hundreds of KB shaved off initial load.

**2d. Vertical rhythm** — `src/Components/About/About.jsx` uses `<br><br><br><br>` for top spacing. Replace with `padding-top: 4rem` on `.text` (in `About.css`).

**2e. Favicon + meta** — `index.html`:
- Change `<link rel="icon" type="image/svg+xml" href="src/Assets/Images/skull.jpg"/>` to `<link rel="icon" type="image/jpeg" href="/src/Assets/Images/skull.jpg"/>` (correct MIME, leading slash for absolute path).
- Add `<meta name="description" content="The Silvertones — duo from St. Louis, MO. Book a show.">`.
- Add Open Graph tags: `og:title`, `og:description`, `og:image` (pointing at `/src/Assets/Images/skull.jpg`), `og:url`, `og:type=website`. Repeat with `twitter:card=summary_large_image` and matching twitter tags.

### Step 3 — Silver gradient on the band name

New CSS class in `src/Components/Nav/Nav.css`:

```css
.silver-gradient {
  background: linear-gradient(180deg, #f5f5f5 0%, #c0c0c0 40%, #808080 55%, #c0c0c0 70%, #f5f5f5 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
```

Applied alongside `font-face-rumor-lg` on the brand text in `Nav.jsx`. The current blue (`#006cbf`) on `font-face-rumor-lg` is removed from that selector (so the gradient shows); blue is retained only on the `:hover` state of nav links.

Browser fallback: any browser without `background-clip: text` support renders the text in whatever the fallback `color:` is; safe value `#c0c0c0` is set on `.silver-gradient` so the name still reads as solid silver if the gradient fails. Last unsupported browser is IE11, which we don't care about.

### Step 4 — SVG laurels overlay on the skull image

`Nav.jsx`: wrap the skull `<Image>` in a `<div className="brand-wrapper">` with `position: relative`. Add two SVG laurel-branch elements absolutely positioned over the skull — one on the left (curving inward), one on the right (mirrored). Both branches:

- Fill: `#c0c0c0` (silver)
- Stroke: `#bf5000` (orange), 1.5px
- ~7 leaves per branch, hand-authored SVG paths
- Stored as a single SVG file: `src/Assets/Images/laurel-branch.svg` (the file contains one branch; the right branch is rendered as the same element transformed with `scaleX(-1)`)
- Positioned so leaves curve up around the temples/jaw of the skull, not obscuring the face

CSS (in `Nav.css`):
```css
.brand-wrapper { position: relative; display: inline-block; }
.laurel { position: absolute; top: 0; height: 100%; pointer-events: none; }
.laurel-left { left: -15%; }
.laurel-right { right: -15%; transform: scaleX(-1); }
```

### Step 5 — About page

Replace `src/Components/About/About.jsx` body:

```jsx
const About = () => (
  <div className="page">
    <div className="text">
      <p>The Silvertones are a duo consisting of Kevin Korinek and Sam Adkins hailing from St. Louis, MO. They make great music together and build a vibe.</p>
    </div>
  </div>
);
```

`About.css`: remove `<br>`-related styling; `.text` gets `padding-top: 4rem`.

### Step 6 — Contact form: fixes + new content

**Bug fixes (all in `Contact.jsx`):**

1. **yup schema mismatch.** Schema validates field `hand` which doesn't exist on the form. Replace:
   ```js
   const schema = yup.object().shape({
     user_name: yup.string().required(),
     user_email: yup.string().email().required(),
     message: yup.string().required(),
   });
   ```
2. **Formik onSubmit.** `onSubmit={console.log()}` calls `console.log` immediately and passes its `undefined` return as the handler. Replace with a real handler that calls `sendEmail`.
3. **Initial values keys.** Match field names: `{ user_name: '', user_email: '', message: '' }`.
4. **Dead `<script>` tags.** Remove the two inline `<script>` blocks at the top of the JSX — they're inert in React (don't execute) and the actual EmailJS init happens via the `publicKey` arg to `sendForm`.
5. **Modal timing.** Currently `handleClick` (which opens the success modal) fires from the button's `onClick`, *before* the email send resolves. Move the `setShow(true)` call into the `.then(...)` success callback of `sendEmail`. Add a parallel error-modal state opened in `.catch(...)`.
6. **Form reset.** Reset form fields on successful send (use Formik's `resetForm` or imperatively clear via `form.current.reset()`).

**Content changes (in `Contact.jsx`):**

- Add a paragraph above the `<Form>`: *"The Silvertones would love to play your club, party, event, private island... whatever. Please send them a message below and they will arrange a show for you."*
- Change the textarea label from `Gimme us the Deets` to `Share the Deets`.
- All other labels, placeholders, and button text unchanged.

**Color accents (in `Contact.css`):**

- `Form.Label` color: `#b3cccc` (teal)
- `Form.Control:focus`: `border-color: #bf5000` (orange) + `box-shadow: 0 0 0 0.2rem rgba(191, 80, 0, 0.25)` (orange focus ring)
- Invalid feedback color: `#d7820a` (gold)

### Step 7 — Media: 6-tile grid with 3 images + 3 videos

Rewrite `src/Components/Media/Media.jsx` to render from a single typed list:

```jsx
const tiles = [
  { type: "image", src: img1, alt: "..." },
  { type: "video", src: video1 },
  { type: "image", src: img2, alt: "..." },
  { type: "video", src: video2 },
  { type: "image", src: img3, alt: "..." },
  { type: "video", src: video3 },
];

const Media = () => (
  <div className="page">
    <div className="grid-container">
      {tiles.map((tile, i) =>
        tile.type === "image" ? (
          <Image key={i} className="grid-item img" src={tile.src} rounded alt={tile.alt} />
        ) : (
          <video
            key={i}
            className="grid-item img"
            src={tile.src}
            autoPlay
            loop
            muted
            playsInline
          />
        )
      )}
    </div>
  </div>
);
```

- Final image filenames + video filenames are placeholders during implementation; user supplies the 3 mp4s into `src/Assets/Videos/` and selects which 3 of the existing JPGs to keep.
- `Media.css`: ensure `<video>` shares sizing rules with `<img>` (already covered by the shared `.img` class with `min-width: 300px; max-width: 500px; width: 100%; height: auto;`).

### Step 8 — Tidy `.gitignore`

Currently `dist/` is untracked but not formally ignored (visible in `git status` as `??`). Add `dist/` to `.gitignore` so it stops appearing in status output.

### Step 9 — Phase 1 deploy & verification

**9.1** Commit all Phase 1 changes on the renamed `silvertones` branch.

**9.2** `npm run deploy` — builds with `vite build` (still using `base: "/music-site/"`) and pushes `dist/` to the `gh-pages` branch.

**9.3** Verify at `https://sjamesadkins.github.io/music-site/`. Checklist:
- Nav: silver gradient band name, skull + laurel branches render, link clicks swap pages, no `&nsbp` literal anywhere, no console warnings.
- About: new copy, no `<br>` stack, clean spacing.
- Media: 6 tiles render — 3 images, 3 videos autoplaying muted in loop, no controls visible, no overflow.
- Contact: intro paragraph above form, "Share the Deets" label correct, submitting valid data sends mail and shows success modal *after* send resolves; invalid data blocks submit.
- Mobile (Chrome DevTools at 375px): nav image scales, no horizontal scroll, Media is single column, Contact form fits.
- Favicon shows in browser tab.
- Link preview: paste URL into Slack/iMessage draft — title and description show.

**9.4** Send a real contact form submission to confirm Gmail delivery. (User must first reconnect Gmail in the EmailJS dashboard to resolve the `412 Gmail_API: Invalid grant` error reported during brainstorming.)

If everything in 9.3 and 9.4 passes, proceed to Phase 2.

---

## Phase 2 — Custom domain (silvertoneslive.com via Cloudflare Registrar)

### Step 10 — Register domain

User actions (Cloudflare web UI, not driven by tooling):
1. Sign up for / log into Cloudflare at cloudflare.com.
2. Cloudflare dashboard → Registrar → search `silvertoneslive.com` → register (.com is at-cost, ~$10/yr).
3. After registration, the domain automatically uses Cloudflare DNS. No nameserver migration needed.

### Step 11 — Configure DNS in Cloudflare

In the domain's DNS panel, add these records. **All with proxy disabled (gray cloud)** — GitHub Pages provisions Let's Encrypt SSL itself and Cloudflare's orange-cloud proxy would interfere with cert issuance:

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |
| CNAME | `www` | `sjamesadkins.github.io` | DNS only |

(The four A records are GitHub's published Pages apex IPs; the CNAME makes `www.silvertoneslive.com` resolve.)

### Step 12 — Tell GitHub Pages about the custom domain

User actions (GitHub web UI):
1. Repo → Settings → Pages → Custom domain → enter `silvertoneslive.com` → Save.
2. GitHub auto-creates a `CNAME` file on the `gh-pages` branch containing `silvertoneslive.com`.
3. Wait for the "DNS check successful" green checkmark (minutes to a few hours).
4. Once "Enforce HTTPS" is selectable, check it. Let's Encrypt cert provisioning may take an additional 5–60 min after DNS verification.

### Step 13 — Flip Vite base path + redeploy

In code:
- `vite.config.js`: change `base: "/music-site/"` → `base: "/"`.
- `package.json`: change `homepage` to `"https://silvertoneslive.com"`.
- `package.json` `deploy` script: change to `vite build && gh-pages -d dist --cname silvertoneslive.com` so the deploy script re-writes the CNAME file on every deploy (prevents `gh-pages` from clobbering the one GitHub's UI added).
- Update `index.html` OG `og:url` meta tag to use the new domain.

Then:
```bash
npm run deploy
```

### Step 14 — Phase 2 verification

- `https://silvertoneslive.com` loads, SSL padlock shows valid cert, no browser warnings.
- `https://www.silvertoneslive.com` loads.
- `http://silvertoneslive.com` (plain HTTP) auto-redirects to HTTPS.
- All four-ish "pages" (About / Media / Contact navigation) work; all assets load (network tab clean of 404s — would indicate `base` flip caused trouble).
- Send a second test contact form submission post-domain to confirm EmailJS still works under the new origin. EmailJS allowlist on the service may need `silvertoneslive.com` and `www.silvertoneslive.com` added.

**Expected breakage:** the old `https://sjamesadkins.github.io/music-site/` URL will start 404'ing once `base` flips to `/`. This is intentional. If you want a redirect, that's a follow-up (set up a separate stub gh-pages deploy at the old URL with a meta-refresh).

---

## Risk register

| Risk | Likelihood | Mitigation |
|---|---|---|
| User's Node fix doesn't go smoothly | Low | If `nvm install --lts` fails, fall back to `brew reinstall node`; if both fail, escalate. |
| Video files exceed GitHub's 100 MB per-file limit | Medium | Check file sizes before commit; if too large, compress further (e.g., `ffmpeg -vcodec libx264 -crf 28 ...`) or downgrade resolution to 480p. Git LFS is a last resort. |
| EmailJS still fails after Gmail reconnect | Low | Logged error from `.catch` will show the new code; debug from there. |
| DNS records misconfigured (orange-cloud proxy enabled) | Medium | Step 11 explicitly calls out gray cloud; verify on first DNS check. |
| Let's Encrypt cert provisioning stalls | Low | Common to wait up to an hour. If it stalls >24h, toggle the Pages custom domain off/on. |
| EmailJS allowlist blocks new origin | Medium | Step 14 covers adding `silvertoneslive.com` and `www.silvertoneslive.com` to the EmailJS service allowlist. |
| Existing `sjamesadkins.github.io/music-site/` URL breaks for anyone who bookmarked it | Acknowledged | Expected behavior after base path flip; out of scope unless user requests a redirect. |

## Open items deferred to implementation

- Which 3 of the existing JPGs (`1.jpg`–`6.jpg`, `laurels.jpg`, `sAstral.jpg`, `sWaves.jpg`, etc.) to keep as the 3 grid images.
- 3 video mp4 files (user drops into `src/Assets/Videos/`).
- Exact SVG path data for the laurel branch (hand-authored at implementation time).
- Whether to keep `package-lock.json` once regenerated, or also commit it. (Default: commit it.)
