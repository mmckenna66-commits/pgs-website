# Breast Surgery Pages — Content Expansion Outline

**Prepared:** 2026-06-22 · **For:** Mike / Dr. Silhy review
**Goal:** Add genuine content depth to the 5 "Discovered – currently not indexed" breast pages so Google crawls, indexes, and ranks them. Differentiation between the pages is already good; the problem is thinness (~600 words of English content each). This outline proposes what to add to each page.

> **How to use this:** Every section below is a *draft scaffold* with suggested clinical talking points. The clinical detail reflects generally accepted breast surgical-oncology practice, but **please verify and edit for accuracy and for how Dr. Silhy actually practices before publishing.** I have not invented practice-specific claims (volumes, outcomes, specific protocols) — where those would strengthen a page, I've marked them `[practice detail to confirm]`.

---

## Ground rules that apply to all 5 pages

- **Keep the bilingual-on-one-URL structure.** Every new English section and FAQ must be mirrored in Spanish, matching the existing pattern. Word targets below refer to *English* content; the Spanish mirror roughly doubles on-page text.
- **Target depth:** move each page from ~600 to **~1,100–1,300 English words**. That's enough to clear the "thin content" bar without padding.
- **New FAQs go in two places:** the visible FAQ section *and* the `FAQPage` JSON-LD block (the schema is already there — just extend the `mainEntity` array so the rich-result eligibility matches the visible content).
- **Keep the existing template** (Intro → When This May Be Considered → What Dr. Silhy Evaluates → Safety and Eligibility → CTA → FAQ → Related Topics). New sections insert *between* the intro and the CTA.
- **Preserve E-E-A-T signals:** keep the "Physician Review / Reviewed by Dr. Silhy" attribution and Physician schema. Adding a short "Why choose Premier General Surgeons for breast surgery in the Rio Grande Valley" trust line on each page helps.
- **Internal links:** each page already cross-links the breast cluster well. The higher-value add is **inbound links from authority pages** — add a contextual link to each of these 5 from `surgeons.html`/`staff.html` (Dr. Silhy's profile) and from `general-surgery.html`, not just from within the breast cluster.
- **After publishing,** re-request indexing in Search Console for any page still excluded (already done once on 2026-06-22).

---

## 1. breast-conserving-surgery.html (lumpectomy)

**Primary keyword:** breast-conserving surgery / lumpectomy — Brownsville & Harlingen
**Secondary/long-tail:** lumpectomy vs mastectomy, partial mastectomy, lumpectomy recovery time, is lumpectomy as safe as mastectomy, lumpectomy and radiation
**Search intent:** patient newly diagnosed, weighing breast-conservation vs mastectomy.

**New sections to add (with talking points):**

1. **"Lumpectomy vs. Mastectomy: How the Decision Is Made"**
   - For appropriately selected early-stage breast cancer, breast-conserving surgery *plus radiation* offers survival outcomes equivalent to mastectomy — a key reassurance point.
   - Factors that push toward one or the other: tumor size relative to breast size, single vs. multiple tumor sites (multifocal/multicentric), ability to achieve clear margins, genetics (e.g., BRCA), whether the patient can receive radiation, and patient preference.
2. **"What to Expect — Before, During, and After Surgery"**
   - Usually outpatient; general or local-plus-sedation `[confirm anesthesia approach]`.
   - For non-palpable tumors, localization (wire or seed/marker) is placed beforehand.
   - Sentinel lymph node biopsy is often performed in the same operation to check node status — worth explaining in plain language.
   - Typical operative time and same-day discharge expectations `[confirm]`.
3. **"Recovery and Healing Timeline"**
   - Drains are usually not needed for a lumpectomy; most patients resume light activity within days and normal activity within ~1–2 weeks `[confirm]`.
   - Follow-up visit, pathology review, and what the margin result means for next steps.
4. **"Margins, Re-excision, and Radiation"** (expand existing margin content)
   - What a "positive" or "close" margin means and why a second, smaller re-excision is sometimes recommended.
   - Why radiation typically follows breast-conserving surgery and what that course generally looks like (referred to radiation oncology).
   - Mention oncoplastic techniques as an option to preserve shape (links to oncoplastic-lumpectomy.html).

**New FAQs (add to page + schema):**
- How long is recovery after a lumpectomy?
- Is a lumpectomy as safe as a mastectomy?
- Will I need radiation, chemotherapy, or both after a lumpectomy?
- What is a sentinel lymph node biopsy?
- How large can a tumor be and still allow breast-conserving surgery?
- Will my breast look different afterward?

---

## 2. breast-reconstruction-coordination.html

**Primary keyword:** breast reconstruction coordination — Brownsville & Harlingen
**Secondary/long-tail:** immediate vs delayed breast reconstruction, breast reconstruction options after mastectomy, does insurance cover breast reconstruction, reconstruction after radiation
**Search intent:** patient facing mastectomy who wants to understand reconstruction pathway and how the surgical team coordinates it.

**New sections to add (with talking points):**

1. **"Immediate vs. Delayed Reconstruction"**
   - Immediate = reconstruction begun at the same time as the mastectomy; delayed = months/years later.
   - Trade-offs and how planned radiation often influences timing (radiation can affect reconstruction results, so the plan may favor delaying certain reconstructions).
2. **"Breast Reconstruction Options — A Brief Overview"**
   - Implant-based reconstruction vs. autologous/"flap" reconstruction (e.g., DIEP, TRAM, latissimus) — one or two plain-language sentences each.
   - **Clarify roles:** reconstruction itself is performed by a plastic surgeon; Dr. Silhy performs and coordinates the *cancer surgery* side and the hand-off. This honest framing is also good for trust and accuracy.
3. **"How the Cancer-Surgery and Reconstruction Plans Are Coordinated"**
   - Sequencing of the operation, skin- and nipple-sparing decisions made jointly, shared OR planning, communication between teams.
4. **"Insurance Coverage and Your Rights (WHCRA)"**
   - Under the federal Women's Health and Cancer Rights Act, group plans that cover mastectomy must also cover reconstruction, symmetry procedures on the other breast, and prostheses. `[Confirm how PGS handles referrals/insurance verification.]`

**New FAQs (add to page + schema):**
- Does insurance cover breast reconstruction after mastectomy?
- What are my breast reconstruction options?
- Can I have reconstruction years after my mastectomy?
- How does radiation affect reconstruction timing?
- Do I have to decide about reconstruction before my cancer surgery?

---

## 3. mastectomy-scar-revision.html

**Primary keyword:** mastectomy scar revision — Brownsville & Harlingen
**Secondary/long-tail:** dog ears after mastectomy, painful mastectomy scar, scar revision after breast surgery, fix mastectomy scar contour
**Search intent:** post-mastectomy patient (often months/years out) bothered by scar, contour, or fit issues.

**New sections to add (with talking points):**

1. **"Common Reasons Patients Seek Scar Revision"**
   - "Dog ears" (puckered tissue at the ends of the incision), redundant or excess tissue, contour irregularities, problems with prosthesis or bra fit, persistent discomfort/tightness, and thickened (hypertrophic/keloid) scars.
2. **"What Scar Revision Can — and Cannot — Do"**
   - Sets realistic expectations: revision improves contour, comfort, and fit; it refines rather than erases a scar.
3. **"Timing: How Long After Mastectomy"**
   - Generally wait until tissues are fully healed and stable (commonly several months) `[confirm typical interval]`; prior radiation affects skin quality and candidacy.
4. **"The Procedure and Recovery"**
   - Often outpatient; local or general anesthesia depending on scope `[confirm]`; typical recovery and activity guidance.
5. **"Non-Surgical Measures Worth Trying First"** (optional, builds trust)
   - Scar massage, silicone sheets/gels, time — appropriate to mention so patients understand surgery isn't always first-line.

**New FAQs (add to page + schema):**
- How long after a mastectomy should I wait for scar revision?
- Is mastectomy scar revision covered by insurance?
- Can scar revision help my prosthesis or bra fit?
- Can it relieve a painful or tight scar?
- Is the procedure done under local or general anesthesia?

---

## 4. scar-minimizing-breast-surgery.html

**Primary keyword:** scar-minimizing breast surgery — Brownsville & Harlingen
**Secondary/long-tail:** hidden incision breast surgery, minimal scar lumpectomy, where are breast surgery incisions placed, reduce scarring after breast surgery
**Search intent:** patient who wants the best cosmetic outcome while treating cancer.

**New sections to add (with talking points):**

1. **"Incision-Planning Techniques"**
   - Where incisions can sometimes be hidden when oncologically safe: along the inframammary fold (under the breast), around the areola (periareolar), or in the axilla (underarm). Feasibility depends on tumor location and anatomy.
2. **"Factors That Influence Scar Outcomes"**
   - Tumor location and depth, skin type and tendency to scar, smoking, prior radiation, tension across the incision, and aftercare.
3. **"Oncologic Safety Comes First"**
   - Reinforce that complete cancer removal and clear margins always take priority over incision placement; scar planning happens within those limits.
4. **"How Patients Can Support Better Healing"**
   - Smoking cessation, wound care, sun protection of the scar, and silicone-based scar products once healed.

**New FAQs (add to page + schema):**
- Where are incisions usually placed to minimize visible scarring?
- Does minimizing scars ever compromise cancer safety?
- Is every patient a candidate for hidden incisions?
- What can I do to reduce scarring after breast surgery?
- Does skin type affect how I'll scar?

---

## 5. skin-nipple-sparing-mastectomy.html

**Primary keyword:** nipple-sparing mastectomy / skin-sparing mastectomy — Brownsville & Harlingen
**Secondary/long-tail:** am I a candidate for nipple-sparing mastectomy, is nipple-sparing mastectomy safe, skin-sparing vs nipple-sparing, preventive (prophylactic) mastectomy
**Search intent:** patient (cancer or high-risk/preventive) exploring techniques that preserve the breast skin envelope/nipple for reconstruction.

**New sections to add (with talking points):**

1. **"Skin-Sparing vs. Nipple-Sparing: The Key Difference"** (expand existing intro)
   - Skin-sparing removes breast tissue and the nipple-areola complex but preserves most of the skin envelope; nipple-sparing additionally preserves the nipple-areola skin. Both are done to support reconstruction.
2. **"Who Is a Candidate for Nipple-Sparing Mastectomy"**
   - Selection factors commonly include tumor distance from the nipple (often a minimum clearance such as ~2 cm `[confirm Dr. Silhy's criteria]`), tumor size, no clinical/imaging involvement of the nipple, and breast size/shape considerations; not used for inflammatory breast cancer.
3. **"Oncologic Safety and What the Evidence Shows"**
   - In appropriately selected patients, these techniques have outcomes comparable to traditional mastectomy; the tissue behind the nipple is checked (intraoperative margin) to confirm it's clear.
4. **"How These Techniques Support Reconstruction"**
   - Preserving the skin envelope (and nipple, when safe) generally improves reconstructed-breast appearance — coordinated with the plastic surgeon (link to reconstruction-coordination page).
5. **"Risk-Reducing (Preventive) Mastectomy"**
   - For high-risk patients (e.g., BRCA carriers), nipple-sparing mastectomy is frequently an option in the preventive setting. `[Confirm whether PGS offers/coordinates this.]`

**New FAQs (add to page + schema):**
- Am I a candidate for nipple-sparing mastectomy?
- Is nipple-sparing mastectomy safe?
- Will I keep sensation in the nipple? (Set honest expectations — sensation is often reduced.)
- Can nipple-sparing mastectomy be used for preventive (risk-reducing) surgery?
- What happens if the tumor is close to the nipple?

---

## Suggested rollout order

1. **breast-conserving-surgery.html** and **skin-nipple-sparing-mastectomy.html** first — highest search demand and clearest commercial intent.
2. **breast-reconstruction-coordination.html** next (insurance/WHCRA angle attracts strong intent).
3. **mastectomy-scar-revision.html** and **scar-minimizing-breast-surgery.html** — lower volume but easy differentiation wins.

After each goes live, request indexing in Search Console and watch the URL Inspection status flip from "Discovered – currently not indexed" to "Submitted and indexed." I can re-run the index-coverage dataflow to confirm in the weekly report.

*This is a planning document only — no site files were changed.*
