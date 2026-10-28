# kfp-website
Kibbel Financial Planning Website
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Brand &amp; Style Guide · Kibbel Financial Planning</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root {
  --navy: #1A1A1A; --navy-mid: #2D2D2D; --navy-deep: #0D0D0D;
  --gold: #D4AF37; --gold-light: #E0C45A; --gold-faint: rgba(212,175,55,0.08);
  --cream: #F7F6F2; --cream-dark: #EDEAE2;
  --white: #FFFFFF;
  --text-dark: #1A1A1A; --text-mid: #5A5A5A; --text-light: #8A8A8A;
  --border: #E0DDD6; --border-dark: #CCCAC3;
}
* , *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--text-dark); -webkit-font-smoothing: antialiased; line-height: 1.5; }
code, .mono { font-family: 'JetBrains Mono', monospace; }

.wrap { max-width: 1180px; margin: 0 auto; padding: 0 64px 120px; }

/* ===== TOP BANNER ===== */
.top-banner { background: var(--navy); padding: 64px 64px 56px; }
.top-banner-inner { max-width: 1180px; margin: 0 auto; }
.brand-logo-lg { font-family: 'Playfair Display', serif; font-size: 26px; color: var(--white); font-weight: 500; margin-bottom: 24px; }
.brand-logo-lg span { color: var(--gold); }
.banner-title { font-family: 'Playfair Display', serif; font-size: 42px; color: var(--white); font-weight: 500; margin-bottom: 12px; }
.banner-title em { color: var(--gold); font-style: italic; }
.banner-sub { font-size: 15px; color: rgba(255,255,255,0.5); font-weight: 300; max-width: 640px; line-height: 1.7; }
.banner-meta { margin-top: 28px; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.35); }

/* ===== SECTION SCAFFOLD ===== */
.section { padding: 72px 0; border-bottom: 1px solid var(--border-dark); }
.section:last-child { border-bottom: none; }
.sec-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-size: 10px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
.sec-eyebrow::before { content: ''; width: 22px; height: 1px; background: var(--gold); display: block; }
.sec-title { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 500; color: var(--navy); margin-bottom: 12px; }
.sec-desc { font-size: 14px; color: var(--text-mid); font-weight: 300; line-height: 1.7; max-width: 720px; margin-bottom: 40px; }

/* ===== COLOR SWATCHES ===== */
.swatch-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.swatch { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; background: var(--white); break-inside: avoid; page-break-inside: avoid; }
.swatch-color { height: 88px; }
.swatch-body { padding: 14px 16px; }
.swatch-name { font-size: 13px; font-weight: 500; color: var(--navy); margin-bottom: 2px; }
.swatch-hex { font-size: 11px; color: var(--text-light); font-family: 'JetBrains Mono', monospace; }
.swatch-use { font-size: 10.5px; color: var(--text-light); margin-top: 6px; line-height: 1.5; }

/* ===== TYPE SPECIMENS ===== */
.type-row { display: flex; align-items: baseline; gap: 28px; padding: 20px 0; border-top: 1px solid var(--border); break-inside: avoid; page-break-inside: avoid; }
.type-row:first-of-type { border-top: 1px solid var(--border-dark); }
.type-tag { font-size: 10px; color: var(--text-light); font-family: 'JetBrains Mono', monospace; width: 130px; flex-shrink: 0; padding-top: 8px; }
.type-sample-h1 { font-family: 'Playfair Display', serif; font-size: 44px; font-weight: 500; color: var(--navy); line-height: 1.15; }
.type-sample-h2 { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 500; color: var(--navy); }
.type-sample-h3 { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 500; color: var(--navy); }
.type-sample-h4 { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 500; color: var(--navy); }
.type-sample-body { font-size: 15px; color: var(--text-mid); font-weight: 300; max-width: 560px; line-height: 1.7; }
.type-sample-small { font-size: 11px; color: var(--text-light); font-weight: 300; }
.type-sample-eyebrow { font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); }
em.gold { color: var(--gold); font-style: italic; }

.font-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
.font-card { background: var(--white); border: 1px solid var(--border); border-radius: 8px; padding: 28px 32px; break-inside: avoid; page-break-inside: avoid; }
.font-card-label { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px; }
.font-card-sample { font-size: 30px; color: var(--navy); margin-bottom: 10px; }
.font-card-sample.serif { font-family: 'Playfair Display', serif; font-weight: 500; }
.font-card-sample.sans { font-family: 'DM Sans', sans-serif; font-weight: 400; }
.font-card-meta { font-size: 12px; color: var(--text-light); font-family: 'JetBrains Mono', monospace; }

/* ===== COMPONENT EXAMPLES ===== */
.comp-block { margin-bottom: 56px; break-inside: avoid; page-break-inside: avoid; }
.comp-label { font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-light); margin-bottom: 14px; }
.comp-demo { background: var(--white); border: 1px solid var(--border); border-radius: 8px; padding: 40px 44px; margin-bottom: 14px; }
.comp-demo.dark { background: var(--navy); }
.comp-code { background: var(--navy-deep); border-radius: 6px; padding: 16px 20px; font-size: 11.5px; color: #B8E6B8; font-family: 'JetBrains Mono', monospace; line-height: 1.7; overflow-x: auto; white-space: pre; }

/* Eyebrow demo already covered by .sec-eyebrow styles above, reused */

/* Stat callout demo */
.stat-demo-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; border-top: 1px solid var(--border); padding-top: 16px; max-width: 320px; }
.stat-demo-num { font-family: 'Playfair Display', serif; font-size: 38px; font-weight: 500; color: var(--navy); line-height: 1; }
.stat-demo-label { font-size: 10px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-light); text-align: right; line-height: 1.5; }

/* Buttons */
.btn-row { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-primary { display: inline-flex; align-items: center; padding: 14px 28px; background: var(--gold); color: var(--navy); font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; border-radius: 4px; }
.btn-outline-dark { display: inline-flex; align-items: center; padding: 14px 28px; border: 1px solid rgba(255,255,255,0.38); color: var(--white); font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; border-radius: 4px; }
.btn-navy { display: inline-flex; align-items: center; padding: 14px 28px; background: var(--navy); color: var(--white); font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; border-radius: 4px; }

/* Card examples */
.card-demo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.card-demo { background: var(--white); border: 1px solid var(--border); border-radius: 8px; padding: 28px 32px; break-inside: avoid; page-break-inside: avoid; }
.card-demo-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--gold-faint); border: 1px solid rgba(212,175,55,0.15); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 16px; color: var(--gold); }
.card-demo h4 { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 500; color: var(--navy); margin-bottom: 8px; }
.card-demo p { font-size: 13px; color: var(--text-mid); font-weight: 300; line-height: 1.7; }

/* Closing band demo */
.closing-demo { background: var(--navy); border-radius: 8px; padding: 40px 44px; }
.closing-demo h3 { font-family: 'Playfair Display', serif; font-size: 24px; color: var(--white); font-weight: 500; margin-bottom: 10px; }
.closing-demo h3 em { color: var(--gold); font-style: italic; }
.closing-demo p { font-size: 13px; color: rgba(255,255,255,0.55); font-weight: 300; line-height: 1.7; max-width: 600px; }

/* Note/callout box */
.note-demo { background: var(--white); border: 1px solid var(--border); border-left: 2px solid var(--gold); border-radius: 4px; padding: 16px 22px; }
.note-demo p { font-size: 12.5px; line-height: 1.7; color: var(--text-mid); font-weight: 300; }
.note-demo strong { color: var(--navy); font-weight: 500; }

/* ===== SPACING SCALE ===== */
.space-row { display: flex; align-items: center; gap: 20px; padding: 10px 0; }
.space-bar { background: var(--gold); height: 10px; border-radius: 2px; }
.space-label { width: 90px; font-size: 12px; color: var(--text-mid); font-family: 'JetBrains Mono', monospace; flex-shrink: 0; }
.space-use { font-size: 12px; color: var(--text-light); }

/* ===== TABLE ===== */
.ref-table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
.ref-table th { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-light); text-align: left; padding: 0 0 10px; border-bottom: 1px solid var(--border-dark); }
.ref-table td { font-size: 13px; color: var(--text-mid); padding: 12px 0; border-bottom: 1px solid var(--border); vertical-align: top; }
.ref-table td:first-child { color: var(--navy); font-weight: 500; white-space: nowrap; padding-right: 24px; }
.ref-table code { font-size: 11.5px; background: var(--cream-dark); padding: 2px 6px; border-radius: 3px; color: var(--navy); }

/* ===== DO / DON'T ===== */
.dd-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.dd-card { border-radius: 8px; padding: 26px 28px; border: 1px solid var(--border); break-inside: avoid; page-break-inside: avoid; }
.dd-card.do { border-left: 3px solid #4A7C59; }
.dd-card.dont { border-left: 3px solid #B8554A; }
.dd-title { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 14px; }
.dd-card.do .dd-title { color: #4A7C59; }
.dd-card.dont .dd-title { color: #B8554A; }
.dd-card ul { list-style: none; }
.dd-card li { font-size: 13px; color: var(--text-mid); line-height: 1.8; padding-left: 18px; position: relative; margin-bottom: 4px; }
.dd-card li::before { content: '—'; position: absolute; left: 0; color: var(--text-light); }

/* Asset checklist */
.asset-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 1px solid var(--border-dark); border-left: 1px solid var(--border-dark); }
.asset-item { background: var(--white); border-right: 1px solid var(--border-dark); border-bottom: 1px solid var(--border-dark); padding: 20px 24px; break-inside: avoid; page-break-inside: avoid; }
.asset-item .an { font-family: 'Playfair Display', serif; font-size: 13px; color: var(--gold); margin-bottom: 6px; }
.asset-item .at { font-size: 13px; font-weight: 500; color: var(--navy); margin-bottom: 4px; }
.asset-item .ad { font-size: 11.5px; color: var(--text-light); line-height: 1.6; }

.copyblock { background: var(--white); border: 1px solid var(--border); border-radius: 8px; padding: 24px 28px; margin-bottom: 20px; break-inside: avoid; page-break-inside: avoid; }
.copyblock-label { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-light); margin-bottom: 10px; }
.copyblock-text { font-size: 12px; line-height: 1.8; color: var(--text-mid); font-weight: 300; }

@media (max-width: 900px) {
  .wrap { padding: 0 24px 80px; }
  .top-banner { padding: 48px 24px 40px; }
  .swatch-grid, .font-pair, .card-demo-grid, .dd-grid, .asset-list { grid-template-columns: 1fr; }
  .asset-item { border-right: none; }
}
</style>
</head>
<body>

<div class="top-banner">
  <div class="top-banner-inner">
    <div class="brand-logo-lg">Kibbel <span>Financial</span> Planning</div>
    <div class="banner-title">Brand &amp; Style <em>Guide</em></div>
    <p class="banner-sub">The single reference for color, type, voice, and components across every Kibbel Financial Planning asset — website, lead magnets, social content, and client-facing documents. Built directly from the live site at kibbelfinancialplanning.com.</p>
    <div class="banner-meta">Version 1.0 &middot; 2026</div>
  </div>
</div>

<div class="wrap">

  <!-- ============ POSITIONING ============ -->
  <div class="section">
    <div class="sec-eyebrow">Positioning</div>
    <div class="sec-title">Brand foundation</div>
    <p class="sec-desc">Every asset should read as approachable, transparent, and confident — never salesy, never hedge-everything corporate. Faith-integrated undertones are welcome where natural, never forced.</p>

    <div class="ref-table" style="margin-bottom:40px;">
      <table class="ref-table" style="width:100%;">
        <tr><td>Philosophy</td><td>Plan &middot; Build &middot; Protect &middot; Thrive</td></tr>
        <tr><td>Tagline</td><td>Transparent Fees. Expert Guidance. Comprehensive Planning.</td></tr>
        <tr><td>Voice</td><td>Approachable, transparent, confident. Plain language over jargon. Direct, warm, never pushy.</td></tr>
        <tr><td>Audience</td><td>Millennial, Gen X, and Gen Z professionals and business owners</td></tr>
        <tr><td>Content series</td><td>"Build Your Financial House on Solid Ground"</td></tr>
        <tr><td>Social handles</td><td>@kibbelfinancial (financial) &middot; @closedbykibbel (real estate)</td></tr>
      </table>
    </div>

    <div class="dd-grid">
      <div class="dd-card do">
        <div class="dd-title">Voice — Do</div>
        <ul>
          <li>Describe the actual process (diversified, low-cost, tax-efficient)</li>
          <li>Use plain, warm, direct language</li>
          <li>Disclose fees and conflicts clearly and early</li>
        </ul>
      </div>
      <div class="dd-card dont">
        <div class="dd-title">Voice — Don't</div>
        <ul>
          <li>Claim superiority ("highest-value," "best," "evidence-based")</li>
          <li>Reference "decades of academic research" backing a strategy</li>
          <li>Use "how we earn" framing for fee disclosures</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ============ COLOR ============ -->
  <div class="section">
    <div class="sec-eyebrow">Color</div>
    <div class="sec-title">Palette</div>
    <p class="sec-desc">Light cream theme throughout — verified against the live website. Never substitute a dark theme or alternate gold tone without checking the live site first.</p>

    <div class="swatch-grid">
      <div class="swatch">
        <div class="swatch-color" style="background:#F7F6F2;"></div>
        <div class="swatch-body">
          <div class="swatch-name">Cream</div>
          <div class="swatch-hex">#F7F6F2</div>
          <div class="swatch-use">Page background</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#EDEAE2;"></div>
        <div class="swatch-body">
          <div class="swatch-name">Cream Dark</div>
          <div class="swatch-hex">#EDEAE2</div>
          <div class="swatch-use">Section alternation, code chips</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#1A1A1A;"></div>
        <div class="swatch-body">
          <div class="swatch-name">Navy</div>
          <div class="swatch-hex">#1A1A1A</div>
          <div class="swatch-use">Primary text, dark sections</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#D4AF37;"></div>
        <div class="swatch-body">
          <div class="swatch-name">Gold</div>
          <div class="swatch-hex">#D4AF37</div>
          <div class="swatch-use">Accent, eyebrow, italic emphasis</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#E0C45A;"></div>
        <div class="swatch-body">
          <div class="swatch-name">Gold Light</div>
          <div class="swatch-hex">#E0C45A</div>
          <div class="swatch-use">Hover state for gold elements</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#FFFFFF; border-bottom:1px solid #E0DDD6;"></div>
        <div class="swatch-body">
          <div class="swatch-name">White</div>
          <div class="swatch-hex">#FFFFFF</div>
          <div class="swatch-use">Card surfaces</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#5A5A5A;"></div>
        <div class="swatch-body">
          <div class="swatch-name">Text Mid</div>
          <div class="swatch-hex">#5A5A5A</div>
          <div class="swatch-use">Body copy</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#8A8A8A;"></div>
        <div class="swatch-body">
          <div class="swatch-name">Text Light</div>
          <div class="swatch-hex">#8A8A8A</div>
          <div class="swatch-use">Captions, labels, fine print</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#E0DDD6;"></div>
        <div class="swatch-body">
          <div class="swatch-name">Border</div>
          <div class="swatch-hex">#E0DDD6</div>
          <div class="swatch-use">1px card borders</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#CCCAC3;"></div>
        <div class="swatch-body">
          <div class="swatch-name">Border Dark</div>
          <div class="swatch-hex">#CCCAC3</div>
          <div class="swatch-use">Grid dividers, section rules</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ============ TYPOGRAPHY ============ -->
  <div class="section">
    <div class="sec-eyebrow">Typography</div>
    <div class="sec-title">Type system</div>
    <p class="sec-desc">Playfair Display for every headline and stat number. DM Sans for all body copy, labels, and UI text. Never substitute other families for web/HTML — for print/PDF fallback, use Times (serif) and Helvetica (sans), base-14 families only.</p>

    <div class="font-pair">
      <div class="font-card">
        <div class="font-card-label">Headlines &amp; Stats</div>
        <div class="font-card-sample serif">Playfair Display</div>
        <div class="font-card-meta">weights: 400, 500, 600 &middot; italic 400/500</div>
      </div>
      <div class="font-card">
        <div class="font-card-label">Body &amp; UI</div>
        <div class="font-card-sample sans">DM Sans</div>
        <div class="font-card-meta">weights: 300, 400, 500</div>
      </div>
    </div>

    <div class="type-row">
      <div class="type-tag">h1 / 32–46px</div>
      <div class="type-sample-h1">What does good planning <em class="gold">actually improve?</em></div>
    </div>
    <div class="type-row">
      <div class="type-tag">h2 / 32px</div>
      <div class="type-sample-h2">Everything you need. <em class="gold">Nothing you don't.</em></div>
    </div>
    <div class="type-row">
      <div class="type-tag">h3 / 22px</div>
      <div class="type-sample-h3">How tiered pricing works</div>
    </div>
    <div class="type-row">
      <div class="type-tag">h4 / 17px</div>
      <div class="type-sample-h4">Diversified, low-cost investing</div>
    </div>
    <div class="type-row">
      <div class="type-tag">body / 13–16px</div>
      <div class="type-sample-body">We build portfolios around broad diversification, low costs, and tax efficiency — set in DM Sans at 300 weight, 1.7 line-height for comfortable reading.</div>
    </div>
    <div class="type-row">
      <div class="type-tag">eyebrow / 10px</div>
      <div class="type-sample-eyebrow">&mdash; Research Brief</div>
    </div>
    <div class="type-row">
      <div class="type-tag">fine print / 10–11px</div>
      <div class="type-sample-small">Past performance is not indicative of future results.</div>
    </div>
  </div>

  <!-- ============ SIGNATURE PATTERNS ============ -->
  <div class="section">
    <div class="sec-eyebrow">Signature Patterns</div>
    <div class="sec-title">Recognizable details</div>
    <p class="sec-desc">These small patterns are what make something feel like KFP rather than a generic finance template.</p>

    <div class="comp-block">
      <div class="comp-label">01 &middot; Headline ending — upright text + gold italic close</div>
      <div class="comp-demo">
        <div class="type-sample-h2" style="margin-bottom:0;">Smarter planning. <em class="gold">Built around you.</em></div>
      </div>
      <div class="comp-code">&lt;h2 class="h2"&gt;Smarter planning. &lt;em class="gold"&gt;Built around you.&lt;/em&gt;&lt;/h2&gt;</div>
    </div>

    <div class="comp-block">
      <div class="comp-label">02 &middot; Eyebrow — gold rule + letter-tracked gold caps</div>
      <div class="comp-demo">
        <div class="sec-eyebrow" style="margin-bottom:0;">Research Brief</div>
      </div>
      <div class="comp-code">.eyebrow::before { width: 22px; height: 1px; background: var(--gold); }
.eyebrow { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); }</div>
    </div>

    <div class="comp-block">
      <div class="comp-label">03 &middot; Stat callout — large serif number on white, thin divider, no boxed badge</div>
      <div class="comp-demo">
        <div class="stat-demo-row">
          <div class="stat-demo-num">+29%</div>
          <div class="stat-demo-label">Retirement<br>Income</div>
        </div>
      </div>
      <div class="comp-code">&lt;div class="stat-row"&gt;
  &lt;div class="stat-num"&gt;+29%&lt;/div&gt;
  &lt;div class="stat-label"&gt;Retirement&lt;br&gt;Income&lt;/div&gt;
&lt;/div&gt;
/* stat-row: border-top 1px solid var(--border) only — never a boxed badge */</div>
    </div>

    <div class="comp-block">
      <div class="comp-label">04 &middot; Cards — white surface, 1px border, 8px radius, gold border on hover</div>
      <div class="comp-demo">
        <div class="card-demo-grid">
          <div class="card-demo">
            <div class="card-demo-icon">$</div>
            <h4>Investment Management</h4>
            <p>Diversified, low-cost portfolio management — no asset minimum, tax-efficient strategy.</p>
          </div>
          <div class="card-demo">
            <div class="card-demo-icon">%</div>
            <h4>Tax Planning</h4>
            <p>Coordinated tax strategy that works alongside your investment and planning decisions.</p>
          </div>
        </div>
      </div>
      <div class="comp-code">.card { background: var(--white); border: 1px solid var(--border); border-radius: 8px; }
.card:hover { border-color: var(--gold); box-shadow: 0 4px 20px rgba(212,175,55,0.1); }</div>
    </div>

    <div class="comp-block">
      <div class="comp-label">05 &middot; Buttons</div>
      <div class="comp-demo">
        <div class="btn-row" style="margin-bottom:20px;">
          <a class="btn-primary" href="#">Schedule a Free Consultation</a>
          <a class="btn-navy" href="#" style="color:white;">Open in QuickBooks</a>
        </div>
      </div>
      <div class="comp-demo dark">
        <div class="btn-row">
          <a class="btn-outline-dark" href="#">Learn More</a>
        </div>
      </div>
      <div class="comp-code">.btn-primary  { background: var(--gold); color: var(--navy); }      /* on light bg */
.btn-navy     { background: var(--navy); color: var(--white); }     /* on light bg */
.btn-outline-dark { border: 1px solid rgba(255,255,255,.38); color: var(--white); } /* on dark bg only */</div>
    </div>

    <div class="comp-block">
      <div class="comp-label">06 &middot; Closing / CTA band — navy background, gold italic emphasis</div>
      <div class="comp-demo dark" style="padding:0;">
        <div class="closing-demo">
          <h3>Planning first. <em>Investing second.</em></h3>
          <p>None of this is about predicting markets. It's about making better decisions that compound for decades.</p>
        </div>
      </div>
    </div>

    <div class="comp-block">
      <div class="comp-label">07 &middot; Note / callout box — gold left border, never a full gold fill</div>
      <div class="comp-demo">
        <div class="note-demo">
          <p><strong>Note:</strong> You are never required to use these providers. We simply share trusted professionals who consistently deliver a great client experience.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ============ SPACING ============ -->
  <div class="section">
    <div class="sec-eyebrow">Layout</div>
    <div class="sec-title">Spacing &amp; structure</div>
    <p class="sec-desc">A consistent spacing scale keeps every page feeling like the same family, even across very different content types.</p>

    <div style="margin-bottom:36px;">
      <div class="space-row"><div class="space-bar" style="width:8px;"></div><div class="space-label">4–8px</div><div class="space-use">Micro-spacing: label to value, icon gaps</div></div>
      <div class="space-row"><div class="space-bar" style="width:16px;"></div><div class="space-label">12–16px</div><div class="space-use">Inside-card spacing, paragraph gaps</div></div>
      <div class="space-row"><div class="space-bar" style="width:28px;"></div><div class="space-label">24–28px</div><div class="space-use">Card padding, component gaps</div></div>
      <div class="space-row"><div class="space-bar" style="width:40px;"></div><div class="space-label">36–40px</div><div class="space-use">Section sub-block spacing</div></div>
      <div class="space-row"><div class="space-bar" style="width:64px;"></div><div class="space-label">56–80px</div><div class="space-use">Section padding, page margins</div></div>
    </div>

    <table class="ref-table">
      <tr><th>Token</th><th>Value</th><th>Use</th></tr>
      <tr><td><code>.max-560</code></td><td>max-width: 560px</td><td>Tight body copy column</td></tr>
      <tr><td><code>.max-640</code></td><td>max-width: 640px</td><td>Standard body copy column</td></tr>
      <tr><td><code>.max-760</code></td><td>max-width: 760px</td><td>Wide body copy / disclosures</td></tr>
      <tr><td><code>border-radius</code></td><td>4px buttons &middot; 6–8px cards</td><td>Never sharp corners, never fully rounded</td></tr>
      <tr><td><code>nav</code></td><td>position: fixed, height 72px</td><td>Site nav only — never on standalone documents</td></tr>
    </table>
  </div>

  <!-- ============ COMPLIANCE ============ -->
  <div class="section">
    <div class="sec-eyebrow">Compliance</div>
    <div class="sec-title">Guardrails &amp; required language</div>
    <p class="sec-desc">Kibbel Financial Planning, LLC is a DBA of Shorebreak Capital LLC, a Registered Investment Adviser. Every claim about outcomes, performance, or value needs to read as fair, balanced, and substantiated under the SEC Marketing Rule — copy should describe what the firm actually does, not imply a guaranteed or superior result.</p>

    <div class="dd-grid" style="margin-bottom:40px;">
      <div class="dd-card dont">
        <div class="dd-title">Flagged &amp; replaced before</div>
        <ul>
          <li>"Evidence-based investing" / "decades of academic research"</li>
          <li>"This is one of the highest-value things we do"</li>
          <li>"We tell you exactly how we earn"</li>
        </ul>
      </div>
      <div class="dd-card do">
        <div class="dd-title">Approved replacements</div>
        <ul>
          <li>"Diversified, low-cost investing" + describe the actual process</li>
          <li>"...a high-impact, often-overlooked part of the work"</li>
          <li>"Our fees are disclosed clearly, whatever form they take"</li>
        </ul>
      </div>
    </div>

    <div class="copyblock">
      <div class="copyblock-label">Standard footer disclosure (use verbatim)</div>
      <p class="copyblock-text">Investment Advisory Services: Offered through Shorebreak Capital LLC, a Registered Investment Adviser. Kibbel Financial Planning LLC is owned and operated by Steven Kibbel, an Investment Adviser Representative of Shorebreak Capital LLC. Registration as an investment adviser does not imply a certain level of skill or training. Tax Services &amp; Bookkeeping: Offered through Kibbel Financial Planning LLC as outside business activities, separate from and not offered through Shorebreak Capital LLC. Insurance &amp; Annuities: Commissions may be received on insurance and annuity products. Real Estate: Steven Kibbel may receive real estate commissions in connection with real estate transactions. These outside business activities represent conflicts of interest and are disclosed separately. Full conflict of interest disclosure available at adviserinfo.sec.gov.</p>
    </div>

    <div class="copyblock">
      <div class="copyblock-label">Standard performance-data disclaimer (use verbatim)</div>
      <p class="copyblock-text">These findings illustrate the potential value of specific financial-planning behaviors and decisions — not a guarantee of investment performance or of working with any advisor. Each study uses its own methodology, time period, and assumptions; individual results vary by personal circumstance. Past performance is not indicative of future results. Kibbel Financial Planning does not guarantee any specific outcome, return, or level of value from its services. Full source citations are available upon request.</p>
    </div>

    <p class="sec-desc" style="margin-bottom:0;">Full legal reference: the live <strong style="color:var(--navy);">Disclosures</strong> and <strong style="color:var(--navy);">Privacy Policy</strong> pages on the website are the source of truth for anything not covered here — check those before writing new disclosure language from scratch.</p>
  </div>

  <!-- ============ ASSET FORMATS ============ -->
  <div class="section">
    <div class="sec-eyebrow">Production</div>
    <div class="sec-title">Asset formats we've built</div>
    <p class="sec-desc">Use this as the starting checklist whenever a new KFP asset is requested — match the format to what's already proven to work.</p>

    <div class="asset-list">
      <div class="asset-item">
        <div class="an">01</div>
        <div class="at">Website pages</div>
        <div class="ad">HTML, fixed nav (position: fixed), footer once at the bottom of the flow only — never repeated per section.</div>
      </div>
      <div class="asset-item">
        <div class="an">02</div>
        <div class="at">Lead-magnet one-pagers</div>
        <div class="ad">Standalone HTML + Letter-size PDF, portrait. No site nav. Card grid with <code>break-inside: avoid</code> for clean PDF pagination.</div>
      </div>
      <div class="asset-item">
        <div class="an">03</div>
        <div class="at">Client-facing vault documents</div>
        <div class="ad">Same as above, plus verify every link/email/phone resolves correctly and no card splits across a page break.</div>
      </div>
      <div class="asset-item">
        <div class="an">04</div>
        <div class="at">Social carousel</div>
        <div class="ad">1080&times;1080 PNG per slide. Cover + one stat per slide + closing slide with CTA and a short disclosure line.</div>
      </div>
    </div>
  </div>

</div>

</body>
</html>