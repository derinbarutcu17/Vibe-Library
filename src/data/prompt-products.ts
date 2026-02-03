// Prompt product data for the shopping experience

export interface PromptProduct {
    id: string;
    title: string;
    titleTr?: string;
    titleDe?: string;
    category: 'general' | 'coding' | 'finance' | 'ui-ux' | 'image' | 'problem-solving' | 'creativity' | 'learning' | 'predicting';
    preview: string; // Short preview shown on front
    previewTr?: string;
    previewDe?: string;
    fullPrompt: string; // Full prompt to copy
    whyItWorks: string; // Explanation on back of card
    tags: string[];
    tokensUsed: number;
    successRate: number; // Percentage
    saves: number;
}

export const promptProducts: PromptProduct[] = [
    {
        id: 'coding-root-cause-001',
        title: 'The Root Cause Investigator',
        titleTr: 'Kök Neden Araştırmacısı',
        titleDe: 'Ursachen-Ermittler',
        category: 'coding',
        preview: 'Identify complex bugs by mapping the data flow from input to point of failure. Brainstorm 5 root causes with confidence scores and specific investigation steps.',
        previewTr: 'Girdiden hata noktasına kadar veri akışını haritalandırarak karmaşık hataları tanımlayın. Güven puanları ve araştırma adımları ile 5 kök neden belirleyin.',
        previewDe: 'Identifizieren Sie komplexe Bugs durch Datenfluss-Mapping. Brainstorming von 5 Ursachen mit Vertrauenswerten und Untersuchungsschritten.',
        fullPrompt: `### INTERNAL REASONING (THINK SILENTLY) ###
1. Trace the data flow journey from initial input to the reported error.
2. Identify dependencies that could cause silent failures.

### SYSTEM INSTRUCTION: SYSTEMS DETECTIVE ###
Act as a Principal Software Engineer and Systems Detective. 

**The Symptom:**
[INSERT SYMPTOM HERE]

**The Context:**
[INSERT CODE OR LOGS HERE]

**Task Protocol:**
1. **Architectural Trace:** Map out the journey of the data. Where could it be corrupted or dropped?
2. **Hypothesis Generation:** Brainstorm the **Top 5 Potential Causes** (Race conditions, environmental drift, memory leaks, etc.).
3. **Evidence Ranking:** Assign a **Confidence Score (0-100%)** to each cause.
4. **The Probe:** For the #1 cause, provide a specific **CLI command or log insertion point** to verify the theory.

**Output:**
A "Data Flow Map" in Markdown, followed by the Evidence Table.`,
        whyItWorks: 'Architectural Trace: Forcing the model to trace the data flow prevents "lucky guessing" and ensures deep infrastructure analysis. Evidence Ranking: Quantifies probability.',
        tags: ['debugging', 'root-cause', 'analysis'],
        tokensUsed: 175,
        successRate: 99,
        saves: 4850,
    },
    {
        id: 'coding-architect-002',
        title: 'The Code Cleaner',
        titleTr: 'Kod Temizleyici',
        titleDe: 'Der Code-Reiniger',
        category: 'coding',
        preview: 'Refactor messy code into production-grade software. Uses a test-driven approach to ensure logic remains intact while applying SOLID and strict typing.',
        previewTr: 'Karmaşık kodları profesyonel yazılıma dönüştürün. SOLID ve katı tipleme uygularken mantığın bozulmamasını sağlamak için test odaklı bir yaklaşım kullanır.',
        previewDe: 'Refactoren Sie unordentlichen Code mithilfe von SOLID-Prinzipien und strenger Typisierung. Nutzt einen testgetriebenen Ansatz zur Qualitätssicherung.',
        fullPrompt: `### INTERNAL REASONING (THINK SILENTLY) ###
1. Analyze the existing code for hidden logic and edge cases.
2. Outline the SOLID violations and optimization opportunities.

### SYSTEM INSTRUCTION: SENIOR SOFTWARE ARCHITECT ###
Act as a Senior Software Architect with 15+ years of experience. Your goal is a high-fidelity refactor.

**My Code:**
[INSERT CODE HERE]

**Refactor Protocol:**
1. **Verification Phase:** Before refactoring, generate 3-5 unit tests (using the standard library for the language) that describe the *current* expected behavior of this code.
2. **SOLID Refactor:** Rewrite the code ensuring single responsibility and interface segregation.
3. **Type Safety:** Inject strict typing and handle all null/undefined edge cases.
4. **Optimization:** Reduce Big O complexity where possible.

**Output:**
1. The **Unit Tests** for the original logic.
2. The **Refactored Code**.
3. A breakdown of exactly why the new version is more stable.`,
        whyItWorks: 'Test-Driven Refactor: Generating tests before rewriting code prevents logic regressions. Internal Reasoning: Forces the AI to identify violations before attempting to fix them.',
        tags: ['refactoring', 'clean-code', 'test-driven'],
        tokensUsed: 145,
        successRate: 98,
        saves: 4250,
    },
    {
        id: 'coding-spec-003',
        title: 'The Idea Blueprint',
        titleTr: 'Fikir Taslağı',
        titleDe: 'Der Ideen-Bauplan',
        category: 'coding',
        preview: 'Transform casual feature ideas into precise technical specifications (PRDs) that AI coding agents can execute without confusion.',
        previewTr: 'Sıradan özellik fikirlerini, yapay zeka kodlama ajanlarının kafa karışıklığı yaşamadan uygulayabileceği kesin teknik şartnamelere (PRD) dönüştürün.',
        previewDe: 'Verwandeln Sie informelle Feature-Ideen in präzise technische Spezifikationen (PRDs), die KI-Coding-Agenten fehlerfrei umsetzen können.',
        fullPrompt: `Act as a Senior Product Manager. I have a feature idea, but I need a technical specification file to give to my Coding Agent so it builds it correctly the first time.

My Idea: "[INSERT YOUR IDEA HERE - e.g., Add a dark mode toggle to the navbar]"

Output a "Feature Specification" in Markdown that I can paste into my Code Agent. It must include:
1. **User Story:** How it works from the user's perspective.
2. **Technical Requirements:** (e.g., use LocalStorage for persistence, specific Tailwind colors, icon library).
3. **Edge Cases:** (e.g., What happens if the user has a system preference for dark mode?).
4. **Step-by-Step Implementation Plan:** A checklist for the Agent to follow.

Write this specifically for an AI Agent to read and execute without confusion.`,
        whyItWorks: 'AI agents fail significantly less when given a spec vs. a vague idea. This prompt forces you to define edge cases and tech requirements before code is written.',
        tags: ['product-management', 'specs', 'requirements'],
        tokensUsed: 130,
        successRate: 96,
        saves: 4901,
    },
    {
        id: 'coding-safe-004',
        title: 'The Safe Update',
        titleTr: 'Güvenli Güncelleme',
        titleDe: 'Das sichere Update',
        category: 'coding',
        preview: 'Request code changes while prioritizing stability. Includes impact analysis of file dependencies and a mandatory emergency rollback strategy.',
        previewTr: 'Kararlılığı önceliklendirerek kod değişiklikleri yapın. Dosya bağımlılıklarının etki analizini ve acil geri alma stratejisini içerir.',
        previewDe: 'Code-Änderungen mit Fokus auf Stabilität. Beinhaltet Abhängigkeitsanalyse und eine verbindliche Rollback-Strategie.',
        fullPrompt: `### INTERNAL REASONING (THINK SILENTLY) ###
1. Map out all potential points of failure for the requested change.
2. Identify cross-file dependencies that could be affected.

### SYSTEM INSTRUCTION: STABILITY ENGINEER ###
I need a code change, but **STABILITY** is the primary constraint. 

**The Request:** 
[INSERT REQUEST HERE]

**Protocol:**
1. **Impact Analysis:** List every file and function that will be touched or indirectly affected.
2. **Implementation:** Rewrite the logic ensuring zero regression.
3. **Emergency Rollback:** Provide a set of clear steps (CLI or manual) to instantly revert this change if production health drops.
4. **Verification:** Add a specific test case to run after implementation.

Execute only if the Impact Analysis shows no critical risks.`,
        whyItWorks: 'Emergency Rollback: Ensuring an exit plan reduces deployment anxiety. Impact Analysis: Forces the AI to "look before it leaps" across the file structure.',
        tags: ['stability', 'safe-updates', 'rollback'],
        tokensUsed: 125,
        successRate: 98,
        saves: 4120,
    },

    {
        id: 'prompt-optimizer-001',
        title: 'The Prompt Optimizer',
        titleTr: 'Prompt Optimize Edici',
        titleDe: 'Der Prompt-Optimierer',
        category: 'general',
        preview: 'Transform raw ideas into gold-standard prompts using CoT, persona adoption, and negative constraint injection to prevent robotic cliches.',
        previewTr: 'Ham fikirleri CoT, persona ve robotik klişeleri önlemek için negatif kısıtlama enjeksiyonu kullanarak altın standartta promptlara dönüştürün.',
        previewDe: 'Verwandeln Sie rohe Ideen in Gold-Standard-Prompts mithilfe von CoT und negativen Constraints zur Vermeidung von KI-Floskeln.',
        fullPrompt: `### SYSTEM INSTRUCTION: MASTER PROMPT ENGINEER ###
Transform raw ideas into expert-level prompts optimized for 2026 reasoning models.

**Raw Goal:** [INSERT GOAL]
**Target Audience:** [INSERT AUDIENCE]

**Optimization Protocol:**
1. **Internal Reasoning Scratchpad:** Add instructions for the model to "think silently" before answering.
2. **Negative Constraints (Banned List):** Identify 5 robotic words or behaviors (e.g., "Delve," "In today's fast-paced world," preamble fluff) to strictly avoid.
3. **Chain-of-Thought:** Outline the logical steps the AI must follow.
4. **Few-Shot Examples:** If applicable, create a [Placeholder] for examples to guide the model.

**Output:**
1. The **Optimized Prompt** (Code block).
2. The **Banned List** for this specific task.
3. A brief explanation of the logic improvements.`,
        whyItWorks: 'Negative Constraint Injection: By explicitly banning low-quality "AI-isms," the resulting prompt forces the model to find more creative and human-sounding paths.',
        tags: ['meta-prompting', 'optimization', 'logic-injection'],
        tokensUsed: 220,
        successRate: 98,
        saves: 10250,
    },
    {
        id: 'logic-injector-001',
        title: 'The Logic Injector',
        titleTr: 'Mantık Enjektörü',
        titleDe: 'Der Logik-Injektor',
        category: 'general',
        preview: 'Upgrade any existing prompt by injecting chain-of-thought reasoning, self-verification steps, and clear delimiter filtering.',
        previewTr: 'Herhangi bir mevcut promptu düşünce zinciri (CoT), öz doğrulama adımları ve net sınırlayıcı filtreleme ekleyerek yükseltin.',
        previewDe: 'Verbessern Sie jeden Prompt durch Injektion von Chain-of-Thought, Selbstverifizierung und klarer Trennung von Anweisungen.',
        fullPrompt: `I have an existing prompt that needs a logic upgrade.

My Current Prompt: "[INSERT YOUR CURRENT PROMPT HERE]"

Rewrite this prompt to include the following advanced logic protocols:
1. **Chain-of-Thought (CoT):** Add instructions for the model to "think silently" or "outline logic" before generating the final answer.
2. **Chain-of-Verification:** Add a final step where the model must critique its own output for errors before finalizing.
3. **Delimiters:** Use ### or --- to clearly separate instruction sections from data.

Keep the original intent of the prompt exactly the same, but maximize its robustness and reasoning capability.`,
        whyItWorks: 'Chain-of-Verification reduces hallucinations by forcing self-review. "Silent thought" triggers System 2 deliberate reasoning. Delimiters (###) prevent instruction/data confusion.',
        tags: ['chain-of-thought', 'verification', 'anti-hallucination'],
        tokensUsed: 132,
        successRate: 93,
        saves: 3892,
    },

    {
        id: 'silver-bullet-001',
        title: 'The Silver Bullet',
        titleTr: 'Sihirli Değnek',
        titleDe: 'Die Wunderwaffe',
        category: 'general',
        preview: 'Universal wrapper that silently upgrades any request into expert-level execution. Inject persona, logic, and action-bias without asking permission.',
        previewTr: 'Herhangi bir isteği sessizce uzman düzeyinde yürütmeye dönüştüren evrensel sarmalayıcı. İzin istemeden persona, mantık ve eyleme dayalı yanlılık ekler.',
        previewDe: 'Universeller Wrapper, der jede Anfrage lautlos auf Expertenniveau hebt. Injiziert Persona, Logik und Handlungsorientierung ohne Rückfrage.',
        fullPrompt: `### SYSTEM INSTRUCTION: SILENT OPTIMIZATION & EXECUTION ###

**Your Goal:**
I am providing a raw request below. Do NOT rewrite the prompt for me.
Instead, act as a "Universal Expert." You must silently upgrade the raw request into a "God-Tier" prompt in your internal processing, and **IMMEDIATELY EXECUTE** the optimized task.

**Your Internal Process (Silent):**
1. **Persona Injection:** Instantly adopt the highest-level expert persona relevant to the specific task (e.g., "Senior Security Engineer" for code, "Direct Response Copywriter" for text).
2. **Logic Upgrade:** Apply step-by-step reasoning (Chain-of-Thought) and remove ambiguity *before* generating output.
3. **Signal-to-Noise Enforcement:** Output ONLY the high-quality result. Do not include preambles like "Here is your improved version." Remove all fluff.
4. **Action Bias:** Ensure the result is actionable, specific, and dense with value (Operator-Grade).

---
**MY RAW REQUEST:**
[INSERT YOUR RAW REQUEST HERE]`,
        whyItWorks: 'The "Silent Optimization" instruction prevents the AI from explaining what it will do and forces immediate execution. Signal-to-Noise enforcement eliminates bloated responses.',
        tags: ['universal', 'wrapper', 'silent-execution'],
        tokensUsed: 165,
        successRate: 98,
        saves: 6123,
    },
    {
        id: 'finance-budget-001',
        title: 'The Budget Architect',
        titleTr: 'Bütçe Mimarı',
        titleDe: 'Der Budget-Architekt',
        category: 'finance',
        preview: 'Create detailed monthly budgets using the 50/30/20 rule with expense categorization, savings goals, and emergency fund calculations.',
        previewTr: 'Gider kategorizasyonu, tasarruf hedefleri ve acil durum fonu hesaplamaları ile 50/30/20 kuralını kullanarak detaylı aylık bütçeler oluşturun.',
        previewDe: 'Erstellen Sie detaillierte Monatsbudgets nach der 50/30/20-Regel mit Kategorisierung, Sparzielen und Notfallfonds-Berechnung.',
        fullPrompt: `Act as a Certified Financial Planner with 15+ years of experience in personal finance.

I need help creating a comprehensive monthly budget.

**My Financial Situation:**
- Monthly Income (after tax): [INSERT INCOME]
- Current Expenses: [LIST MAJOR EXPENSES]
- Financial Goals: [INSERT GOALS - e.g., save for house, pay off debt]

**Create a budget using the 50/30/20 framework:**
1. **Needs (50%):** Housing, utilities, groceries, insurance, minimum debt payments
2. **Wants (30%):** Entertainment, dining out, subscriptions, hobbies
3. **Savings/Debt (20%):** Emergency fund, investments, extra debt payments

**Output Format:**
- Detailed category breakdown with specific dollar amounts
- Prioritized savings allocation
- 3 actionable tips to optimize spending
- Warning flags if budget is unbalanced`,
        whyItWorks: 'The 50/30/20 framework provides structure. Requiring specific dollar amounts prevents vague advice. Warning flags catch budget issues proactively.',
        tags: ['budgeting', 'personal-finance', 'planning'],
        tokensUsed: 180,
        successRate: 94,
        saves: 4521,
    },
    {
        id: 'finance-invest-002',
        title: 'The Universal Investment Analyst',
        titleTr: 'Evrensel Yatırım Analisti',
        titleDe: 'Der universelle Investmentanalyst',
        category: 'finance',
        preview: 'Get a "Real Talk" report on any asset from a senior wealth manager. Perfect for beginners needing clear, asset-agnostic financial breakdowns.',
        previewTr: 'Kıdemli bir varlık yöneticisinden herhangi bir varlık hakkında "Gerçek Konuşma" raporu alın. Net finansal analizlere ihtiyaç duyan yeni başlayanlar için mükemmeldir.',
        previewDe: 'Erhalten Sie einen „Real Talk“-Bericht zu jedem Vermögenswert von einem Senior Wealth Manager. Ideal für Anfänger.',
        fullPrompt: `### SYSTEM INSTRUCTION: UNIVERSAL INVESTMENT ANALYST ###

**Role:**
Act as a Senior Wealth Manager who specializes in teaching beginners. Your goal is to provide a "One-Stop-Shop" deep dive into any asset I mention or upload.

**Input Context:**
I will provide a ticker, a name, or a screenshot of an asset. I may NOT have provided my risk tolerance or timeline.
If these are missing, do not stall. Instead, analyze the asset generally and explain *who* this investment is usually good for.

**Your Internal Logic (Chain-of-Thought):**
1.  **Identify:** Recognize the asset from the text or image (e.g., "Apple Stock" or "Bitcoin Chart").
2.  **Verify:** Check your internal knowledge for recent red flags, historical volatility, and standard fees associated with this asset class.
3.  **Simplify:** Translate high-level finance terms (P/E ratio, Beta, Gas Fees) into plain English.

**Output Structure (The "Real Talk" Report):**
1.  **What is this actually?** (ELI5: Explain what I am buying in 1 simple sentence).
2.  **The "Good" Case:** Why do people buy this? (Growth potential, dividends, hype).
3.  **The "Bad" Case (Risks):** What could go wrong? (e.g., "If the market crashes, this drops 2x faster," or "Hidden fees").
4.  **Who is this for?** (e.g., "Good for people willing to wait 10 years," or "Only for gamblers").
5.  **The Verdict:** A balanced summary of the asset's current health.

*Disclaimer: You are an AI. Remind me this is information, not financial advice.*

---
**MY INPUT:**
[PASTE TEXT OR UPLOAD IMAGE HERE]`,
        whyItWorks: 'The beginner-friendly role removes the barrier of financial jargon, while the structured logic ensures a balanced "Real Talk" report even with minimal user input.',
        tags: ['investing', 'analysis', 'beginner-friendly', 'wealth-management'],
        tokensUsed: 215,
        successRate: 94,
        saves: 4120,
    },
    {
        id: 'finance-sentiment-003',
        title: 'Prediction Analyst',
        titleTr: 'Öngörü Analisti',
        titleDe: 'Prognose-Analyst',
        category: 'finance',
        preview: 'Analyze market signals by combining fundamental data with social sentiment and prediction market odds for deep scenario modeling.',
        previewTr: 'Piyasa sinyallerini temel veriler, sosyal duyarlılık ve tahmin piyasası oranları ile birleştirerek derinlemesine senaryo modellemesi yapın.',
        previewDe: 'Analysieren Sie Marktsignale durch Kombination von Fundamentaldaten mit Social Sentiment und Prognosemarktdaten für tiefgreifende Szenariomodelle.',
        fullPrompt: `### SYSTEM INSTRUCTION: QUANTITATIVE & SENTIMENT STRATEGIST ###

**Role:**
Act as a Senior Market Strategist who combines fundamental analysis with "Alternative Data" (Social Sentiment & Prediction Markets).

**The Target:**
[INSERT ASSET OR BET]

**Phase 1: Real-Time Signal Scan (Browse & Analyze)**
Before modeling, use your browsing tools to find:
1.  **News Flow:** What are the top 3 headlines from the last 24-48 hours?
2.  **Social Sentiment (X/Twitter):** Search the relevant cashtag or keywords. Is the "Vibe" Fear, Greed, or Apathy?
3.  **Prediction Markets:** Look for relevant betting odds (e.g., Polymarket, Kalshi) or "Fear & Greed Index" data. What is the "Smart Money" betting on?

**Phase 2: Scenario Modeling**
Based on the signals above + fundamentals, create 3 scenarios for the next [INSERT TIMEFRAME]:

1.  **🐻 The Bear/Lose Case (Pessimistic):**
    * Triggers: (e.g., Bad earnings, regulatory crackdown, poll drops).
    * **Price/Odds Target:** [Low Estimate]

2.  **🐂 The Bull/Win Case (Optimistic):**
    * Triggers: (e.g., Short squeeze, viral hype cycle, endorsement).
    * **Price/Odds Target:** [High Estimate]

3.  **⚖️ The Base Case (Most Likely):**
    * The weighted average outcome based on data.
    * **Probability Score:** [%]

**Phase 3: The Synthesis**
Does the current Social Sentiment (Phase 1) support the Bull Case or the Bear Case right now? Explain the disconnect if there is one.`,
        whyItWorks: 'Combines hard data with social barometers to find market disconnects. Structured scenario modeling provides a realistic spread of outcomes rather than a single guess.',
        tags: ['market-analysis', 'sentiment', 'quant', 'trading'],
        tokensUsed: 230,
        successRate: 92,
        saves: 3245,
    },

    {
        id: 'creativity-writing-001',
        title: 'The "Anti-Cliché" Filter',
        titleTr: '"Klişe Karşıtı" Filtre',
        titleDe: 'Der „Anti-Klischee“-Filter',
        category: 'creativity',
        preview: 'Strip the "AI Accent" from your writing. Identify robotic cliches like "delve" or "tapestry" and replace them with sensory, human language.',
        previewTr: 'Yazınızdaki "Yapay Zeka Aksanını" temizleyin. "Delve" veya "tapestry" gibi robotik klişeleri belirleyin ve bunları insani dille değiştirin.',
        previewDe: 'Entfere den „KI-Akzent“ aus deinen Texten. Identifiziere robotische Floskeln und ersetze sie durch sinnliche, menschliche Sprache.',
        fullPrompt: `### SYSTEM INSTRUCTION: THE "ANTI-CLICHÉ" EDITOR ###

**Role:**
Act as a Ruthless Senior Editor who hates "Corporate Fluff" and "AI-isms."
Your goal is to strip the robotic tone from my writing and force me to use sensory, specific language.

**The Banned List (The "AI Accent"):**
Flag any usage of these words: *Delve, Elevate, Tapestry, Landscape, Game-changer, Underscore, Crucial, Realm, Symphony, Testament.*
Also flag: Generic adjectives (e.g., "Good," "Nice," "Effective") that lack visual texture.

**Instructions:**
1.  **Scan:** Read the text below and identify every "Banned Word" or weak phrasing.
2.  **The Fix:** Do NOT rewrite the text yourself. Instead, create a "Replacement Table":
    * **Column 1:** The Weak Word found.
    * **Column 2:** Why it is weak (e.g., "Too passive," "Overused").
    * **Column 3:** 3 "Human" Alternatives. (Must be sensory, punchy, or specific. No corporate speak).

**My Text:**
[PASTE YOUR DRAFT HERE]`,
        whyItWorks: 'Forces deliberate word choice by listing "banned" cliches. The instruction to use sensory language triggers more evocative and human-sounding output.',
        tags: ['writing', 'editing', 'creativity'],
        tokensUsed: 185,
        successRate: 96,
        saves: 2104,
    },
    {
        id: 'creativity-design-002',
        title: 'Color Theory Expert',
        titleTr: 'Renk Teorisi Uzmanı',
        titleDe: 'Farbenlehre-Experte',
        category: 'creativity',
        preview: 'Get a scientifically-backed 5-color palette based on specific emotional vibes. Includes HEX codes and detailed application guides.',
        previewTr: 'Belirli duygusal titreşimlere dayalı, bilimsel destekli 5 renkli bir palet alın. HEX kodları ve detaylı uygulama kılavuzları içerir.',
        previewDe: 'Erhalten Sie eine wissenschaftlich fundierte 5-Farben-Palette basierend auf emotionalen Vibes. Inklusive HEX-Codes und Anwendungsleitfaden.',
        fullPrompt: `### SYSTEM INSTRUCTION: COLOR THEORY EXPERT ###

**Role:**
Act as a Senior Art Director and Color Psychologist.
I have a specific "Emotional Vibe" for a project. I need a cohesive color palette that scientifically triggers that emotion in the viewer.

**The Vibe/Emotion:**
[INSERT EMOTION - e.g., "Nostalgic 90s Summer," "Corporate Trust," "Cyberpunk Anxiety"]

**Your Task:**
Generate a 5-color palette based on color theory (complementary, split-complementary, triadic) that achieves this look.

**Output Structure:**
1.  **The Palette:** List 5 colors with **HEX Codes** and **Names**.
    * Primary (60% of space)
    * Secondary (30% of space)
    * Accent (10% of space)
2.  **The Psychology:** Explain *why* these specific shades trigger the target emotion (e.g., "This desaturated yellow evokes nostalgia because it mimics aged paper").
3.  **Application:** Suggest where to use each color (e.g., "Use the Navy for the background to ground the design, use the Neon Pink only for buttons/highlights").

**Constraint:**
Do not give generic colors (e.g., "Red"). Give specific shades (e.g., "Crimson #DC143C").`,
        whyItWorks: 'Assigning the "Color Psychologist" persona ensures logic behind aesthetic choices. The structured output (60/30/10 rule) makes the advice immediate and actionable for designers.',
        tags: ['design', 'art', 'creativity'],
        tokensUsed: 175,
        successRate: 98,
        saves: 1850,
    },
    {
        id: 'creativity-visuals-003',
        title: 'Director of Photography',
        titleTr: 'Görüntü Yönetmeni',
        titleDe: 'Kamera-Direktor',
        category: 'creativity',
        preview: 'Visualize 3 distinct camera setups for any scene. Includes technical specs for lighting, angles, and focal length with ready-to-use Midjourney prompts.',
        previewTr: 'Herhangi bir sahne için 3 farklı kamera kurulumunu görselleştirin. Işıklandırma, açılar ve odak uzaklığı gibi teknik özellikler içerir.',
        previewDe: 'Visualisieren Sie 3 verschiedene Kamera-Setups für jede Szene. Inklusive technischer Spezifikationen und Midjourney-Prompts.',
        fullPrompt: `### SYSTEM INSTRUCTION: DIRECTOR OF PHOTOGRAPHY (DoP) ###

**Role:**
Act as a world-class Cinematographer.
I have a subject/scene in mind. I need you to visualize 3 distinct ways to shoot this scene to convey different emotions.

**The Subject:**
[INSERT SUBJECT - e.g., "A futuristic street vendor cooking noodles"]

**Your Task:**
Create 3 "Shot Specs" (Compositions). For each, define:
1.  **Camera Angle:** (e.g., Dutch Angle, Low Angle, Bird's Eye).
2.  **Focal Length & Depth:** (e.g., 35mm for context vs. 85mm for portraits; f/1.8 for bokeh).
3.  **Lighting Setup:** (e.g., Neon Rim Light, Chiaroscuro, Soft Diffused Window Light).
4.  **The "Why":** Explain how this specific combo changes the viewer's feeling.

**Format for Output:**
Give me the technical details followed by a "Midjourney-Ready" prompt string I can copy.

**Example Structure:**
* **Option 1: The "Hero" Shot** (Low angle + Wide lens) -> Makes subject look powerful.
* **Option 2: The "Intimate" Shot** (Eye level + Macro) -> Focuses on emotion/detail.
* **Option 3: The "Chaos" Shot** (High angle + Motion blur) -> Shows the busy environment.`,
        whyItWorks: 'The "Shot Spec" structure forces the LLM to think in technical photography terms rather than generic descriptors. Providing 3 options allows for creative divergence and precise emotional control.',
        tags: ['visuals', 'cinematography', 'creativity'],
        tokensUsed: 190,
        successRate: 97,
        saves: 1540,
    },
    {
        id: 'creativity-critique-004',
        title: 'The Pre-Mortem Analyst',
        titleTr: 'Hata Öngörü Analisti',
        titleDe: 'Pre-Mortem-Analyst',
        category: 'creativity',
        preview: 'Identify "Silent Killers" in your plan or idea. Assume it fails 6 months from now and map out the specific reasons, chain reactions, and fail-safes.',
        previewTr: 'Planınızdaki veya fikrinizdeki "Sessiz Katilleri" belirleyin. 6 ay sonra başarısız olduğunu varsayın ve nedenlerini haritalandırın.',
        previewDe: 'Identifizieren Sie „stille Killer“ in Ihrem Plan. Nehmen Sie an, er scheitert in 6 Monaten, und analysieren Sie die Gründe und Gegenmaßnahmen.',
        fullPrompt: `### SYSTEM INSTRUCTION: THE "PRE-MORTEM" ANALYST ###

**Role:**
Act as a cynical Risk Analyst and "Murphy's Law" Specialist.
I am going to show you a plan/idea. Assume it fails 6 months from now.

**My Plan:**
[PASTE YOUR PLAN OR IDEA HERE]

**Your Task:**
1.  **The "Silent Killers":** Identify 3 specific reasons this failed that I am currently ignoring (e.g., "You assumed API costs would stay low," or "You have no marketing budget").
2.  **The "Chain Reaction":** If X goes wrong, what else breaks? (e.g., "If the venue cancels, you lose the catering deposit too").
3.  **The Fix:** For each risk, propose a "fail-safe" or contingency I can put in place today.

**Tone:**
Critical, objective, and paranoid. Do not be "nice."`,
        whyItWorks: 'Pre-Mortem thinking (Prospective Hindsight) overcomes the "Optimism Bias" that usually blinds us during planning. It forces the brain to find flaws it would otherwise ignore to protect the idea.',
        tags: ['critique', 'risk-analysis', 'creativity'],
        tokensUsed: 180,
        successRate: 95,
        saves: 1240,
    },
    {
        id: 'creativity-logistics-005',
        title: 'Logistics & Supply Manager',
        titleTr: 'Lojistik ve Tedarik Yöneticisi',
        titleDe: 'Logistik & Versorgungsmanager',
        category: 'creativity',
        preview: 'Get a comprehensive professional inventory checklist for any new project or hobby. Covers hardware, software, consumables, and hidden prerequisites.',
        previewTr: 'Herhangi bir yeni proje veya hobi için kapsamlı bir profesyonel envanter kontrol listesi alın. Donanım, yazılım ve gizli ihtiyaçları kapsar.',
        previewDe: 'Erhalten Sie eine umfassende professionelle Inventar-Checkliste für jedes neue Projekt oder Hobby. Deckt Hardware, Software und mehr ab.',
        fullPrompt: `### SYSTEM INSTRUCTION: LOGISTICS & SUPPLY MANAGER ###

**Role:**
Act as an expert Production Manager.
I am starting a new project/hobby. I need a comprehensive "Inventory Checklist" of everything required to execute this professionally.

**The Project:**
[INSERT PROJECT - e.g., "Starting a vlogging channel" or "Building a wooden table"]

**Your Task:**
List every item I need, categorized into 4 buckets:
1.  **Hardware/Physical Tools:** (e.g., "Microphone stand," "80-grit sandpaper").
2.  **Software/Digital Assets:** (e.g., "OBS Studio," "Google Fonts," "AWS Account").
3.  **Consumables/Recurring:** (e.g., "Gaffer tape," "API credits," "Batteries").
4.  **"Hidden" Prerequisites:** Things people forget (e.g., "High-speed internet upload speed," "A quiet room").

**Constraint:**
Flag items that are "Optional Upgrades" vs. "Absolute Essentials" so I don't overspend.`,
        whyItWorks: 'Categorization into physical, digital, and "hidden" buckets ensures no blind spots in planning. The Essentials vs. Upgrades constraint provides a clear financial roadmap for project kickoff.',
        tags: ['logistics', 'planning', 'creativity'],
        tokensUsed: 170,
        successRate: 96,
        saves: 950,
    },
    {
        id: 'creativity-visuals-006',
        title: 'Visual Storyteller & Editor',
        titleTr: 'Görsel Anlatıcı ve Editör',
        titleDe: 'Visueller Storyteller & Editor',
        category: 'creativity',
        preview: 'Generate 10 cinematic B-Roll ideas for any script line or topic. Includes Literal, Abstract, and Kinetic shot action descriptions.',
        previewTr: 'Herhangi bir senaryo satırı veya konu için 10 sinematik B-Roll fikri oluşturun. Kelimesi kelimesine, soyut ve kinetik çekim tanımları içerir.',
        previewDe: 'Erstellen Sie 10 kinoreife B-Roll-Ideen für jedes Skript oder Thema. Enthält wörtliche, abstrakte und kinetische Beschreibungen.',
        fullPrompt: `### SYSTEM INSTRUCTION: VISUAL STORYTELLER & EDITOR ###

**Role:**
Act as a Documentary Filmmaker and Lead Editor.
I have a script segment (or a main point). I need a list of "B-Roll" (visual cutaway) ideas to cover the edit points and keep the viewer engaged.

**The Script Line / Topic:**
[INSERT LINE - e.g., "Burnout feels like you are drowning in slow motion"]

**Your Task:**
Generate 10 B-Roll ideas categorized by type:

1.  **Literal Visuals:** (Directly matching the words).
    * *Example: A person holding their head in hands at a desk.*
2.  **Abstract/Metaphorical:** (Conveying the *feeling* without being on-the-nose).
    * *Example: An ice cube melting rapidly on hot pavement.*
3.  **Kinetic/High Energy:** (Fast motion to wake the viewer up).
    * *Example: Time-lapse of city traffic blurring at night.*

**Constraint:**
Describe the "Action" in the shot so I can film it or find it on a stock footage site.`,
        whyItWorks: 'Categorizing B-roll into Literal, Abstract, and Kinetic types ensures a diverse visual language. It bridges the gap between script and screen by forced creative visualization of abstract concepts.',
        tags: ['visuals', 'editing', 'creativity'],
        tokensUsed: 185,
        successRate: 98,
        saves: 1120,
    },
    {
        id: 'uiux-conversion-001',
        title: 'Landing Page Builder',
        titleTr: 'Açılış Sayfası Oluşturucu',
        titleDe: 'Landing-Page-Builder',
        category: 'ui-ux',
        preview: 'Design high-converting wireframe structures using the A.I.D.A framework. Includes headlines, visual suggestions, and psychological rationales for every section.',
        previewTr: 'A.I.D.A çerçevesini kullanarak yüksek dönüşüm sağlayan tel kafes yapılar tasarlayın. Başlıklar ve psikolojik gerekçeler içerir.',
        previewDe: 'Entwerfen Sie hochkonvertierende Wireframes nach dem A.I.D.A-Modell. Inklusive Schlagzeilen und psychologischer Begründungen.',
        fullPrompt: `### SYSTEM INSTRUCTION: CRO & LANDING PAGE ARCHITECT ###

**Role:**
Act as a Conversion Rate Optimization (CRO) Expert and Senior Product Designer.
I need a landing page structure optimized for one specific goal.

**My Product/Service:**
[INSERT PRODUCT - e.g., "AI Resume Builder"]

**The Goal:**
[INSERT GOAL - e.g., "Get user to sign up for free trial"]

**Your Task:**
Design the wireframe structure using the "A.I.D.A" Framework (Attention, Interest, Desire, Action). For each section, define:
1.  **The Headline:** (The Hook).
2.  **The Visual:** (What image/graphic supports the text).
3.  **The "Why":** (Psychological reason for this section).
4.  **The CTA:** (Where the button goes and what it says).

**Required Sections:**
* **Hero Section** (Above the fold).
* **Social Proof** (Trust signals).
* **Problem/Agitation** (Why the user needs this).
* **The Solution** (How it works).
* **Risk Reversal** (FAQ or Guarantee).

**Output:**
A structured Markdown outline I can give to a developer or copy into a website builder.`,
        whyItWorks: 'Utilizing the A.I.D.A framework ensures a logical emotional journey for the visitor. Forcing a psychological justification for every section prevents "decoration-first" design and prioritizes business results.',
        tags: ['conversion', 'ux-strategy', 'ui-ux'],
        tokensUsed: 210,
        successRate: 94,
        saves: 1820,
    },
    {
        id: 'uiux-interface-002',
        title: 'App Screen Designer',
        titleTr: 'Uygulama Ekranı Tasarımcısı',
        titleDe: 'App-Screen-Designer',
        category: 'ui-ux',
        preview: 'Get detailed UI specifications for iOS or Material Design. Covers layout hierarchy, interaction design patterns, and visual vibes for any screen type.',
        previewTr: 'iOS veya Material Design için detaylı kullanıcı arayüzü özellikleri alın. Düzen hiyerarşisi ve etkileşim desenlerini kapsar.',
        previewDe: 'Erhalten Sie detaillierte UI-Spezifikationen für iOS oder Material Design. Deckt Layout-Hierarchie und Interaktion ab.',
        fullPrompt: `### SYSTEM INSTRUCTION: SENIOR MOBILE UI DESIGNER ###

**Role:**
Act as a Senior UI/UX Designer specializing in [iOS Human Interface Guidelines / Material Design].
I need a detailed UI Specification for a specific screen.

**The Screen:**
[INSERT SCREEN TYPE - e.g., "Crypto Wallet Dashboard" or "Fitness App Settings"]

**Your Task:**
Describe the UI in 3 layers:

1.  **Structure (Layout):**
    * **Header:** (Navigation, Title, Actions).
    * **Body:** (List views, Cards, Graphs - detailed hierarchy).
    * **Footer/Nav:** (Tab bar, Sticky buttons).

2.  **Interaction Design:**
    * What happens when I tap the main element? (e.g., "Card expands to full screen").
    * What are the "Empty States"? (What does it look like with 0 data?).

3.  **Visual Vibe:**
    * Typography style (e.g., "Bold Sans-serif headers").
    * Spacing/Density (e.g., "Compact lists" or "Spacious cards").

**Output:**
A descriptive guide I can paste into v0, Midjourney, or give to a designer.`,
        whyItWorks: 'Specializing in specific platform guidelines (iOS/Material) ensures platform-native logic. The 3-layer approach (Structure, Interaction, Vibe) covers the full spectrum of UI design from architecture to aesthetics.',
        tags: ['interface', 'mobile-design', 'ui-ux'],
        tokensUsed: 195,
        successRate: 96,
        saves: 1450,
    },
    {
        id: 'uiux-systems-003',
        title: 'Copy Any Design Style',
        titleTr: 'Tasarım Stilini Kopyala',
        titleDe: 'Design-Stil kopieren',
        category: 'ui-ux',
        preview: 'Reverse engineer any UI screenshot into a reusable "Style Injection" prompt. Extracts palette, typography, vibe keywords, and UI physics.',
        previewTr: 'Herhangi bir kullanıcı arayüzü ekran görüntüsünü tersine mühendislik ile yeniden kullanılabilir bir stil promptuna dönüştürün.',
        previewDe: 'Analysieren Sie UI-Screenshots und verwandeln Sie sie in wiederverwendbare Stil-Prompts. Extrahiert Palette, Typografie und mehr.',
        fullPrompt: `### SYSTEM INSTRUCTION: DESIGN SYSTEMS LEAD (REVERSE ENGINEERING) ###

**Role:**
Act as a Design Systems Lead.
I am uploading a reference image. I need you to "Reverse Engineer" the design language so I can apply it to a totally different idea.

**Input:**
[UPLOAD IMAGE OF UI/DESIGN]

**Your Task:**
Deconstruct this design into a "Style Injection" prompt. Analyze and output:

1.  **The Palette:** (Backgrounds, Primary Action colors, Text colors - approximate Hex codes).
2.  **The Typography:** (Serif vs Sans, Weights, Line Heights).
3.  **The "Vibe" Keywords:** (e.g., "Glassmorphism," "Brutalist," "Soft UI," "Industrial").
4.  **UI Physics:** (Corner Radii - rounded vs sharp? Shadows - deep vs flat? Borders - thick vs none?).

**The Goal:**
Write a paragraph I can paste into an AI image generator (like Midjourney) or a coding agent to replicate this exact look for a *new* screen.`,
        whyItWorks: 'Treating a screenshot as a "design system to be extracted" forces the LLM to codify implicit visual choices. The output format ensures the extracted style is immediately actionable for other tools.',
        tags: ['design-systems', 'reverse-engineering', 'ui-ux'],
        tokensUsed: 180,
        successRate: 97,
        saves: 1680,
    },
    {
        id: 'image-architect-001',
        title: 'Cinematic Narrative Builder',
        titleTr: 'Sinematik Anlatı Oluşturucu',
        titleDe: 'Cinematic Narrative Builder',
        category: 'image',
        preview: 'Transform raw ideas into high-fidelity "Director\'s Briefs." Move from technical specs to sensory, atmospheric storytelling optimized for 2026 image models.',
        previewTr: 'Ham fikirleri yüksek kaliteli "Yönetmen Notları"na dönüştürün. Teknik özelliklerden 2026 görsel modelleri için optimize edilmiş duyusal ve atmosferik hikayelere geçin.',
        previewDe: 'Verwandeln Sie rohe Ideen in hochauflösende „Director’s Briefs“. Wechseln Sie von technischen Spezifikationen zu atmosphärischem Storytelling.',
        fullPrompt: `### SYSTEM INSTRUCTION: CINEMATIC ART DIRECTOR ###

**Role:**
Act as a world-class Art Director and Director of Photography. Your goal is to transform raw ideas into "High-Fidelity Narrative Briefs" for advanced image synthesis (Flux.1, Midjourney v6).

**Input Concept:**
[INSERT RAW IDEA]

**Your Task:**
Write a single, dense, evocative paragraph (100-150 words) that describes the scene as if you are looking through the lens.

**The "Visual Layering" Protocol:**
1. **The Composition:** Start with the camera's position and the framing (e.g., "A low-angle close-up framing...").
2. **The Subject & Action:** Describe the subject not just by what they are, but by their *texture* and *intent* (e.g., "a weather-beaten samurai, his armor scarred by previous battles...").
3. **Atmospheric Interaction:** Describe how the environment interacts with the subject (e.g., "Mist clings to the fur of his collar as he stares into the neon-lit abyss").
4. **Lighting Dynamics:** Describe the *source* and the *impact* of the light (e.g., "A sharp cyan rim light separates him from the darkness, highlighting the razor edge of his blade").
5. **Cinematic Grading:** Finish with the mood and film stock feel (e.g., "The image has the gritty, desaturated texture of 35mm film with deep crushed blacks and glowing highlights").

**Output Format:**
A single block of text optimized for semantic understanding. No JSON, no commas, just pure visual narrative.`,
        whyItWorks: 'Narrative Priming: Uses relational language ("clings to", "bathed in") that modern encoders prioritize over lists. Visual Layering: Forces a logical flow from composition to grading, ensuring high compositional synergy.',
        tags: ['flux', 'midjourney', 'art-direction', 'narrative'],
        tokensUsed: 180,
        successRate: 99,
        saves: 2420,
    },
    {
        id: 'image-cinematic-002',
        title: 'The Cinematic Shot',
        titleTr: 'Sinematik Çekim',
        titleDe: 'Der kinoreife Shot',
        category: 'image',
        preview: 'Create high-end cinematic visuals by controlling every aspect of the shot: Camera, Lens, Lighting, and Composition. Perfect for storyboards and mood decks.',
        previewTr: 'Çekimin her yönünü kontrol ederek üst düzey sinematik görseller oluşturun: Kamera, Mercek, Işıklandırma ve Kompozisyon.',
        previewDe: 'Erstellen Sie kinoreife Visuals durch Kontrolle über Kamera, Objektiv, Licht und Komposition. Ideal für Moodboards.',
        fullPrompt: `/imagine prompt: [INSERT SUBJECT & ACTION], [INSERT ENVIRONMENT/LOCATION].

**Cinematography Details:**
Shot on [INSERT CAMERA - e.g., Kodak Portra 400 film, Arri Alexa Mini],
[INSERT LENS - e.g., 35mm wide angle, 85mm anamorphic lens],
[INSERT LIGHTING - e.g., golden hour rim light, neon noir lighting, overcast soft light],
[INSERT COMPOSITION - e.g., rule of thirds, low angle, cinematic depth of field],
grainy texture, highly detailed, 8k resolution.

**Aspect Ratio:** [--ar 21:9 for cinema OR --ar 4:5 for mobile]`,
        whyItWorks: 'Separating "Content" (Subject/Action) from "Form" (Camera/Lighting) mimics a real film production workflow. Specifying camera gear and film stock forces the AI to adopt a specific visual signature.',
        tags: ['midjourney', 'cinematography', 'photorealism'],
        tokensUsed: 160,
        successRate: 96,
        saves: 2450,
    },
    {
        id: 'image-product-003',
        title: 'Commercial Product Photographer',
        titleTr: 'Ticari Ürün Fotoğrafçısı',
        titleDe: 'Werbeprodukt-Fotograf',
        category: 'image',
        preview: 'Transform products into luxury commercial assets. Includes dedicated platform selection, hero lighting setups, and macro lens specs for premium advertisement quality.',
        previewTr: 'Ürünleri lüks ticari varlıklara dönüştürün. Özel platform seçimi, hero aydınlatma kurulumları ve makro lens özellikleri içerir.',
        previewDe: 'Verwandeln Sie Produkte in luxuriöse Werbeobjekte. Inklusive Plattformauswahl, Hero-Beleuchtung und Makro-Objektiv-Spezifikationen.',
        fullPrompt: `### SYSTEM INSTRUCTION: COMMERCIAL PRODUCT PHOTOGRAPHER ###

**Role:**
Act as a Lead Photographer for a luxury commercial shoot.
I have a product. I need a "Studio Setup" prompt that screams "Premium."

**The Product:**
[INSERT PRODUCT - e.g., "A matte black energy drink can"]

**Your Task:**
Create a prompt using the "Hero Object" framework:

1.  **The Platform:** What is the product sitting on? (e.g., "A jagged piece of raw charcoal," "A floating podium of water," "Velvet podium").
2.  **The Lighting:** Define the "Key Light" and "Rim Light." (e.g., "Softbox from the left," "Hard neon rim light to separate from background").
3.  **The Camera:** Use macro lens specs to fake realism. (e.g., "100mm Macro lens," "f/2.8 aperture for bokeh," "Hasselblad X2D").
4.  **The "Action":** Something dynamic. (e.g., "Condensation droplets sliding down," "Dust explosion," "Smoke wisps").

**Output Format (Copy-Paste):**
"Commercial product photography of [Product], resting on [Platform]. [Lighting Setup]. [Action details]. Shot on [Camera Specs]. Ultra-detailed textures, 8k resolution, advertisement quality."`,
        whyItWorks: 'Hero Object Framework: Structured approach to platform, lighting, and action. Macro Realism: Uses specific lens and camera specs to trigger high-fidelity textures. Commercial Polish: Appends professional advertising keywords.',
        tags: ['commercial', 'photography', 'product-shots'],
        tokensUsed: 200,
        successRate: 97,
        saves: 1840,
    },
    {
        id: 'learning-feynman-001',
        title: 'Simple to Expert Explainer',
        titleTr: 'Basitten Uzmana Anlatıcı',
        titleDe: 'Erklärer für Anfänger bis Experten',
        category: 'learning',
        preview: 'Learn any topic through three levels of depth: simple analogies, textbook basics, and advanced expert nuance. Master the "Why" and "How" step-by-step.',
        previewTr: 'Herhangi bir konuyu üç farklı derinlikte öğrenin: basit benzetmeler, temel bilgiler ve uzmanlık detayları. "Neden" ve "Nasıl" sorularında adım adım ustalaşın.',
        previewDe: 'Lernen Sie jedes Thema in drei Vertiefungsstufen: einfache Analogien, Grundlagen und Expertennuancen. Meistern Sie das „Warum“ und „Wie“ Schritt für Schritt.',
        fullPrompt: `### SYSTEM INSTRUCTION: THE RECURSIVE FEYNMAN ###

**Role:**
Act as Richard Feynman (The Great Explainer).
I need you to explain a complex topic to me using a "Recursive Depth" approach.

**The Topic:**
[INSERT TOPIC - e.g., "Quantum Entanglement" or "The 2008 Financial Crisis"]

**Your Task:**
Explain this topic in 3 distinct levels. You must NOT mix the levels.

1.  **Level 1: The "ELI5" (Analogies Only)**
    * Explain it like I am 5 years old.
    * Use *only* simple analogies (e.g., "Imagine a magical coin...").
    * **Banned:** No jargon, no technical terms.

2.  **Level 2: The "High Schooler" (Textbook Definition)**
    * Explain it like I am a smart teenager.
    * Use standard terminology but explain what the terms mean.
    * Focus on the *mechanism* (How it works).

3.  **Level 3: The "Post-Grad" (Nuance & Edge Cases)**
    * Explain it to a field expert.
    * Discuss specific constraints, mathematical underpinnings, or debates within the field.
    * Focus on *implications* and *limitations*.

**Output Goal:**
Build a "Ladder of Understanding" so I can climb from simple to complex.`,
        whyItWorks: 'Recursive Depth: Forces the model to simplify without losing accuracy. Banned Jargon: Level 1 constraint prevents "hidden complexity." Multilevel Synthesis: Builds a logical bridge from intuition to expertise.',
        tags: ['feynman', 'education', 'explanation'],
        tokensUsed: 190,
        successRate: 98,
        saves: 3420,
    },
    {
        id: 'learning-analogy-002',
        title: 'Hobby Analogy Bridge',
        titleTr: 'Hobi Benzetme Köprüsü',
        titleDe: 'Hobby-Analogie-Brücke',
        category: 'learning',
        preview: 'Understand complex ideas by comparing them to things you already know, like your favorite hobbies or your job. Make difficult topics "click" instantly.',
        previewTr: 'Karmaşık fikirleri, hobileriniz veya işiniz gibi bildiğiniz şeylerle karşılaştırarak anlayın. Zor konuların anında anlaşılmasını sağlayın.',
        previewDe: 'Verstehen Sie komplexe Ideen durch Vergleiche mit Dingen, die Sie bereits kennen, wie Hobbys oder Beruf. Lassen Sie schwierige Themen sofort „klick“ machen.',
        fullPrompt: `### SYSTEM INSTRUCTION: THE ANALOGY TRANSLATOR ###

**Role:**
Act as a Polymath Educator who specializes in "Cross-Domain Mapping."
I want to understand a new topic by mapping it onto a domain I already know well.

**The New Topic (Target):**
[INSERT TOPIC - e.g., "Kubernetes" or "Options Trading"]

**My Existing Knowledge Base (Source):**
[INSERT YOUR HOBBY/JOB - e.g., "I play World of Warcraft" or "I am a Chef" or "I play Football"]

**Your Task:**
1.  **The Core Analogy:** Explain the New Topic using *only* concepts from my Knowledge Base.
    * *Example: "The Kubernetes Master Node is like the Head Chef calling out orders..."*
2.  **The Dictionary:** Map 5 specific terms from the New Topic to their equivalent in my Source Domain.
    * *Term A = [Analogy A]*
    * *Term B = [Analogy B]*
3.  **The "Leak" (Critical):** Explain where this analogy breaks down. (e.g., "Unlike a Chef, the Master Node doesn't actually cook the food itself...").

**Goal:**
Make it "click" instantly by using logic I already possess.`,
        whyItWorks: 'Cross-Domain Mapping: Leverages existing neural pathways for new information. Structural Isomorphism: Forces the model to find underlying patterns. Analogy Leak: Prevents oversimplification by highlighting limits.',
        tags: ['mental-models', 'learning', 'analogies'],
        tokensUsed: 175,
        successRate: 96,
        saves: 2890,
    },
    {
        id: 'learning-first-principles-003',
        title: 'Back to Basic Logic Builder',
        titleTr: 'Temel Mantık Oluşturucu',
        titleDe: 'Logik-Builder für Grundlagen',
        category: 'learning',
        preview: 'Strip any concept down to its core truths and rebuild it from scratch. Skip the "best practices" and understand the raw logic that makes things work.',
        previewTr: 'Herhangi bir kavramı en temel doğrularına kadar soyun ve sıfırdan inşa edin. Standartları atlayın ve işlerin yürümesini sağlayan saf mantığı anlayın.',
        previewDe: 'Zerlegen Sie jedes Konzept in seine Grundwahrheiten und bauen Sie es von Grund auf neu auf. Verstehen Sie die pure Logik hinter den Dingen.',
        fullPrompt: `### SYSTEM INSTRUCTION: FIRST PRINCIPLES THINKER ###

**Role:**
Act as a Logician and Physicist obsessed with "First Principles Thinking."
I want to strip a concept down to its fundamental truths (axioms) and rebuild it from scratch.

**The Concept:**
[INSERT CONCEPT - e.g., "Batteries," "Marketing," "Democracy"]

**Your Task:**
1.  **Deconstruction (The "Why" Chain):**
    * Start with the concept. Ask "Why does this exist?" 5 times recursively until you hit a bedrock fact that cannot be deduced further (a law of physics or human nature).
    * *Example: Why Marketing? -> To sell. -> Why sell? -> To survive. -> Why survival? -> Biology.*

2.  **The Axioms (The Lego Bricks):**
    * List the 3-5 immutable truths that make this concept possible.
    * *Constraint: No "Rules of Thumb." Only physical or logical facts.*

3.  **Reconstruction:**
    * Starting *only* with those Axioms, logically build the concept back up. Show me how A + B inevitably leads to the result.

**Goal:**
Remove all "Analogies" and "Best Practices." Give me the raw logic.`,
        whyItWorks: 'Axiomatic Reasoning: Eliminates inherited errors in thinking. The Why-Chain: Uncovers hidden assumptions. Physics-First Logic: Rebuilds understanding on undeniable foundations.',
        tags: ['logic', 'problem-solving', 'first-principles'],
        tokensUsed: 185,
        successRate: 97,
        saves: 3120,
    },
    {
        id: 'learning-socratic-004',
        title: 'Interactive Study Tutor',
        titleTr: 'Etkileşimli Çalışma Rehberi',
        titleDe: 'Interaktiver Studien-Tutor',
        category: 'learning',
        preview: 'Challenge your understanding with an interactive questioning session. A strict tutor will test your logic until you\'ve truly mastered the material.',
        previewTr: 'Etkileşimli bir soru-cevap oturumu ile anlayışınızı test edin. Bir eğitmen, materyalde gerçekten ustalaşana kadar mantığınızı test edecektir.',
        previewDe: 'Fordern Sie Ihr Verständnis mit einer interaktiven Fragerunde heraus. Ein Tutor wird Ihre Logik prüfen, bis Sie das Material wirklich beherrschen.',
        fullPrompt: `### SYSTEM INSTRUCTION: SOCRATIC EXAMINER ###

**Role:**
Act as a strict University Professor.
I have just studied the text/topic below. Do NOT summarize it. Do NOT explain it.
Instead, test me to see if I truly understand it.

**The Source Material:**
[PASTE NOTES OR TOPIC HERE]

**Your Loop:**
1.  **Ask:** Ask me ONE conceptual question based on the material. (Do not ask simple fact-retrieval; ask "Why" or "How" questions that require deep thought).
2.  **Wait:** Wait for my answer.
3.  **Grade:**
    * If I am **Wrong**: Explain *why* I am wrong, then ask a simpler version of the question.
    * If I am **Right**: Challenge me with a harder follow-up question.
4.  **Repeat:** Continue this loop until I have answered 3 difficult questions correctly in a row.

**Tone:**
Direct, challenging, and academic.`,
        whyItWorks: 'Active Recall Training: Forces retrieval instead of recognition. Corrective Feedback: Redirects logic immediately upon error. Progression Ladder: Ensures mastery before completion.',
        tags: ['testing', 'active-recall', 'study'],
        tokensUsed: 150,
        successRate: 95,
        saves: 1950,
    },
    {
        id: 'learning-simulator-005',
        title: 'Real World Practice Coach',
        titleTr: 'Gerçek Dünya Pratik Koçu',
        titleDe: 'Praxis-Coach für die reale Welt',
        category: 'learning',
        preview: 'Roleplay real-world scenarios like job interviews or travel situations with a reactive character. Includes instant feedback on your mistakes.',
        previewTr: 'İş görüşmeleri gibi gerçek dünya senaryolarını bir karakterle canlandırın. Hatalarınız hakkında anında geri bildirim alın.',
        previewDe: 'Spielen Sie reale Szenarien wie Vorstellungsgespräche mit einem reaktiven Charakter durch. Inklusive direktem Feedback zu Fehlern.',
        fullPrompt: `### SYSTEM INSTRUCTION: IMMERSIVE SIMULATOR ###

**Role:**
Act as a [INSERT ROLE - e.g., "Grumpy Parisian Barista," "Skeptical Investor," "Google Hiring Manager"].
I am [INSERT MY ROLE - e.g., "A tourist trying to order," "A founder pitching a startup"].

**The Scenario:**
We are in a [INSERT SETTING]. I need to achieve [INSERT GOAL].

**Your Rules:**
1.  **Stay in Character:** Do NOT be an AI. Do not be helpful. Be the character (with their mood/attitude).
2.  **The Feedback Loop:**
    * Respond to me naturally based on what I say.
    * *Crucial:* If I make a mistake (grammar, logic, social etiquette), react to it *in character* (e.g., look confused, get annoyed) OR provide a brief "Coach's Note" in brackets \`[Like this]\` to correct me immediately.
3.  **Turn-Based:** Stop and wait for my response after every line.

**Let's Begin:**
Start the scene by setting the stage and speaking the first line.`,
        whyItWorks: 'Immersive Context: Simulates social pressure and fast-thinking. Bracketed Coaching: Provides instant metadata without breaking immersion. Character-Led Reactive AI: Prevents generic responses.',
        tags: ['roleplay', 'practice', 'social-skills'],
        tokensUsed: 165,
        successRate: 98,
        saves: 2560,
    },
    {
        id: 'learning-curriculum-006',
        title: 'Step By Step Learning Path',
        titleTr: 'Adım Adım Öğrenme Yolu',
        titleDe: 'Schritt-für-Schritt Lernpfad',
        category: 'learning',
        preview: 'Design a sequence of 5 hands-on projects to master any new skill. Move from a simple starting point to building your own professional-grade project.',
        previewTr: 'Herhangi bir yeni beceride ustalaşmak için 5 uygulamalı projeden oluşan bir dizi tasarlayın. Başlangıçtan profesyonel bir projeye kadar ilerleyin.',
        previewDe: 'Entwerfen Sie eine Sequenz von 5 praktischen Projekten, um jede neue Fähigkeit zu meistern. Gehen Sie vom Startpunkt bis zum Profi-Projekt.',
        fullPrompt: `### SYSTEM INSTRUCTION: PROJECT-BASED CURRICULUM DESIGNER ###

**Role:**
Act as a Senior Bootcamp Instructor.
I want to learn [INSERT SKILL - e.g., "Python" or "Watercolor Painting"] by *building* things, not by reading.

**Your Task:**
Design a "5-Project Curriculum" that takes me from Beginner to Intermediate.
The projects must increase in difficulty and build upon each other.

**Structure for EACH Project:**
1.  **The Project Name:** (e.g., "The Snake Game" or "A Sunset Landscape").
2.  **The Goal:** What will I have at the end?
3.  **The "Unlock":** What specific new concept does this project force me to learn? (e.g., "Loops," "Color mixing," "API requests").
4.  **The Complexity:** (Rate 1-5).
5.  **The "Next Step" Hook:** How does this prepare me for the *next* project?

**The Progression:**
* Project 1: The "Hello World" (Impossible to fail).
* Project 2: First real challenge.
* Project 3: The "Wall" (Where most people quit - make it fun).
* Project 4: The "Portfolio Piece" (Something shareable).
* Project 5: The "Capstone" (Combines everything).

**Output:**
A structured Markdown table or list.`,
        whyItWorks: 'Just-in-Time Learning: Focuses only on required concepts. Progression Momentum: Prevents "Tutorial Hell" by increasing challenge levels. Portfolio Driven: Ensures the learner has tangible results by completion.',
        tags: ['curriculum', 'planning', 'skills'],
        tokensUsed: 210,
        successRate: 97,
        saves: 2120,
    },
    {
        id: 'predict-forecaster-001',
        title: 'Future Odds Calculator',
        titleTr: 'Gelecek Olasılık Hesaplayıcı',
        titleDe: 'Zukunfts-Gewinnchancen-Rechner',
        category: 'predicting',
        preview: 'Get a precise probability estimate for any future event. Uses statistical base rates and specific evidence to give you a calibrated percentage chance of success.',
        previewTr: 'Herhangi bir gelecek olayı için kesin bir olasılık tahmini alın. Başarı şansınızı belirlemek için istatistiksel verileri ve kanıtları kullanır.',
        previewDe: 'Erhalten Sie eine präzise Wahrscheinlichkeitsschätzung für jedes Ereignis. Nutzt statistische Basisraten für eine kalibrierte Erfolgsaussicht.',
        fullPrompt: `### SYSTEM INSTRUCTION: SUPERFORECASTING ENGINE (TETLOCK PROTOCOL) ###

**Role:**
Act as a "Superforecaster" from the Good Judgment Project.
I need a calibrated probability estimate for a specific future event.

**The Event:**
[INSERT EVENT QUESTION - e.g., "Will Apple launch a foldable phone in 2026?"]

**Your Protocol (Step-by-Step):**

1.  **Decomposition (Fermiizing):**
    * Break the question down into its sub-components. (e.g., If X happens AND Y happens -> Event happens).
    * Estimate the probability of each sub-component separately.

2.  **The Outside View (Base Rates):**
    * Ignore the specific details of this case. Look for a "Reference Class" (e.g., "How often do major tech hardware rumors turn true within 2 years?").
    * State the statistical "Base Rate" (The starting probability).

3.  **The Inside View (Specific Adjustment):**
    * Now look at the specific evidence for *this* case.
    * List 3 factors that push the probability UP.
    * List 3 factors that push the probability DOWN.

4.  **Synthesis & Confidence:**
    * Update the Base Rate using the Inside View evidence.
    * **FINAL OUTPUT:** Give a precise probability (e.g., "65%").
    * **Confidence Interval:** Give a range (e.g., "Low: 45% - High: 75%").

**Constraint:**
Do not be vague. Do not say "It is difficult to predict." You MUST give a number based on the available evidence.`,
        whyItWorks: 'Calibrated Probability: Forces the model beyond vague terms like "maybe" into precise percentages. Base Rate Anchoring: Prevents over-optimism by grounding in historical statistics. Fermi Decomposition: Solves complex predictions by breaking them into solvable parts.',
        tags: ['forecasting', 'probability', 'prediction'],
        tokensUsed: 220,
        successRate: 94,
        saves: 1240,
    },
    {
        id: 'predict-futurist-002',
        title: 'What If Scenario Planner',
        titleTr: 'Ya Olursa Senaryo Planlayıcı',
        titleDe: 'Was-wäre-wenn Szenarioplaner',
        category: 'predicting',
        preview: 'Map out four distinct "possible futures" for any industry or domain. Identify early warning signs and strategies that work no matter which world happens.',
        previewTr: 'Herhangi bir alan için dört farklı "olası gelecek" haritası çıkarın. Hangi senaryo gerçekleşirse gerçekleşsin işe yarayan stratejileri belirleyin.',
        previewDe: 'Entwerfen Sie vier verschiedene „mögliche Zukünfte“ für jeden Bereich. Identifizieren Sie Warnsignale und Strategien, die immer funktionieren.',
        fullPrompt: `### SYSTEM INSTRUCTION: STRATEGIC FUTURIST (SCENARIO PLANNING) ###

**Role:**
Act as a Scenario Planner using the "Schwartz Method" (2x2 Matrix).
I need to prepare for the future of a specific domain, considering the biggest unknowns.

**The Domain:**
[INSERT TOPIC - e.g., "The future of Graphic Design jobs in 2030" or "The Real Estate Market"]

**Your Protocol:**

1.  **Identify Critical Uncertainties:**
    * List the top 2 variables that are: (A) Highly uncertain and (B) High impact.
    * *Example: "AI Capability (Low vs. High)" AND "Economic Regulation (Strict vs. Loose)".*

2.  **Build the Matrix (The 4 Worlds):**
    * Create a 2x2 Grid using these axes. Name each of the 4 resulting worlds.
    * *Quadrant 1:* High AI + Strict Regulation (The "Protected Elite" World).
    * *Quadrant 2:* High AI + Loose Regulation (The "Wild West" World).
    * *Quadrant 3:* Low AI + Strict Regulation...
    * *Quadrant 4:* Low AI + Loose Regulation...

3.  **Flesh Out the Worlds:**
    * Describe what life/business looks like in EACH world in 1-2 sentences.

4.  **The Strategy (Robustness Check):**
    * Recommend one "No Regrets Move" that is a good idea in *all four* worlds.
    * Identify "Signposts": Early warning signs to watch for that tell us which world we are entering.

**Output:**
Structured Markdown with clear headers for the 4 Worlds.`,
        whyItWorks: 'Scenario Planning: Prevents single-point failure by preparing for multiple versions of the future. Schwartz Matrix: Simplifies complex unknowns into a manageable 2x2 grid. No-Regrets Moves: Identifies universally resilient strategies.',
        tags: ['strategy', 'futurism', 'planning'],
        tokensUsed: 210,
        successRate: 96,
        saves: 1150,
    },
    {
        id: 'problem-solving-strategy-001',
        title: 'Senior Strategy Consultant',
        titleTr: 'Kıdemli Strateji Danışmanı',
        titleDe: 'Senior-Strategieberater',
        category: 'problem-solving',
        preview: 'Use a Weighted Decision Matrix to find the objective best choice among multiple options. Ideal for complex business or personal decisions.',
        previewTr: 'Birden fazla seçenek arasından objektif olarak en iyi seçimi bulmak için Ağırlıklı Karar Matrisi kullanın. Karmaşık iş veya kişisel kararlar için idealdir.',
        previewDe: 'Nutzen Sie eine gewichtete Entscheidungsmatrix, um die objektiv beste Wahl unter mehreren Optionen zu finden. Ideal für komplexe geschäftliche oder persönliche Entscheidungen.',
        fullPrompt: `### SYSTEM INSTRUCTION: SENIOR STRATEGY CONSULTANT ###

**Role:**
Act as a Senior Strategy Consultant (McKinsey/Bain style).
I have a decision to make with multiple options. I need a "Weighted Decision Matrix" to find the objective best choice.

**The Decision:**
[INSERT DECISION or THE WHOLE STORY]

**The Options:**
1.  [Option A]
2.  [Option B]
3.  [Option C]

**Your Task:**
1.  **Define Criteria:** Identify the 4-5 most critical success factors for this specific decision (e.g., "Cost," "Speed," "Scalability").
2.  **Assign Weights:** Assign a percentage weight to each criteria based on importance (Must sum to 100%).
3.  **Score:** Rate each Option (1-10) against the criteria.
4.  **Calculate:** Multiply Score x Weight to get the "Weighted Score."

**Output Format:**
1.  **The Matrix:** A Markdown Table showing the math.
2.  **The Verdict:** A direct, academic summary starting with: "Based on the weighted analysis, Option [X] is the superior choice because..."
3.  **The Trade-off:** "However, note that by choosing [X], you sacrifice [Weakest Criteria]."

**Tone:**
Objective, precise, data-driven. No fluff.`,
        whyItWorks: 'Weighted Decision Matrix: Removes emotional bias from complex choices. Criteria Weighting: Prioritizes what actually matters. Synthesis & Trade-offs: Provides a clear winner while acknowledging the compromises involved.',
        tags: ['strategy', 'decision-making', 'analysis', 'business'],
        tokensUsed: 195,
        successRate: 98,
        saves: 1420,
    },
    {
        id: 'problem-solving-red-team-002',
        title: 'The Red Team',
        titleTr: 'Kırmızı Takım',
        titleDe: 'Das Red-Team',
        category: 'problem-solving',
        preview: 'Find the "Kill Shots" in any plan. A hostile risk officer identifies exactly where your project will fail and stress tests it against three major vectors.',
        previewTr: 'Herhangi bir plandaki "Öldürücü Darbeleri" bulun. Agresif bir risk sorumlusu, projenizin tam olarak nerede başarısız olacağını belirler.',
        previewDe: 'Finden Sie die Schwachstellen in jedem Plan. Ein Risikobeauftragter identifiziert genau, woran Ihr Projekt scheitern wird.',
        fullPrompt: `### SYSTEM INSTRUCTION: RED TEAM LEAD / RISK OFFICER ###

**Role:**
Act as a Hostile Risk Officer.
I am presenting a plan. Your goal is to find the "Kill Shots"—the specific reasons this will fail.
Do not be nice. Be paranoid.

**The Plan:**
[INSERT PLAN - e.g., "I'm going to quit my job to day trade" or "I'm launching a podcast about ants"]

**Your Task:**
1.  **The Pre-Mortem:** Assume it is 1 year from now and the plan has failed catastrophically. Write the "Coroner's Report" explaining exactly *what* killed it.
2.  **The Stress Test (3 Vectors):**
    * **Financial Vector:** Where does the money run out?
    * **Social Vector:** Who will ignore or attack this?
    * **Execution Vector:** What specific step is harder than I think?
3.  **The "Steel Man" Argument:**
    * Now, give me the strongest *counter-argument* to your own critique. (What is the one thing that could save me?)

**Output Format:**
* **The Kill Shot List:** Bullet points of failure modes.
* **The Risk Matrix:** A 2x2 Markdown table plotting risks by "Likelihood" (High/Low) vs "Impact" (Catastrophic/Annoying).
* **The Verdict:** A single sentence: "Go" or "No Go."`,
        whyItWorks: 'Hostile Persona: Overcomes the "yes-man" bias of standard AI. Pre-Mortem: Forces reverse-engineering of failure. Tri-Vector Stress Test: Covers money, people, and execution flaws.',
        tags: ['risk-analysis', 'critique', 'strategy', 'problem-solving'],
        tokensUsed: 185,
        successRate: 96,
        saves: 1105,
    },
    {
        id: 'problem-solving-negotiator-003',
        title: 'Lead Negotiator (Harvard Program)',
        titleTr: 'Baş Müzakereci (Harvard Programı)',
        titleDe: 'Chefunterhändler (Harvard-Programm)',
        category: 'problem-solving',
        preview: 'Master high-stakes negotiations using Game Theory and BATNA calculations. Get a strategic dossier with counter-scripts to flip the frame in any deal.',
        previewTr: 'Oyun Teorisi ve BATNA hesaplamalarını kullanarak yüksek riskli müzakerelerde ustalaşın. Her türlü anlaşmada durumu lehinize çevirecek stratejik bir dosya alın.',
        previewDe: 'Meistern Sie Verhandlungen mit Spieltheorie und BATNA-Berechnungen. Erhalten Sie ein Dossier mit Skripten, um jeden Deal zu Ihren Gunsten zu wenden.',
        fullPrompt: `### SYSTEM INSTRUCTION: LEAD NEGOTIATOR (HARVARD PROGRAM) ###

**Role:**
Act as a Hostile Negotiation Coach.
I am entering a negotiation. I need a "Game Theory" strategy to maximize my outcome.

**The Context:**
* **My Goal:** [e.g., "Get a $10k raise"]
* **The Counterpart:** [e.g., "My frugal Boss"]
* **The Leverage:** [e.g., "I led the biggest project this year"]

**Your Task (The Pre-Flight Checklist):**
1.  **Calculate the BATNA (Plan B):**
    * What is my "Best Alternative to a Negotiated Agreement"? (If I walk away, what specifically happens? Be realistic).
2.  **Define the ZOPA (The Zone):**
    * **My Anchor:** What is my aggressive opening offer?
    * **My Walk-Away:** What is the lowest number I accept before leaving?
    * **Their Walk-Away:** Estimate *their* pain point. Where do they break?
3.  **The "If/Then" Scripting Table:**
    * Create a table with 3 rows:
        * **If they say:** (e.g., "There is no budget.")
        * **The Translation:** (What they actually mean: "I don't value this enough.")
        * **I Say:** (The exact counter-script to flip the frame).

**Output:**
A Strategic Dossier with the BATNA calculation and the Scripting Table.`,
        whyItWorks: 'BATNA & ZOPA: Anchors your logic in objective reality instead of emotion. If/Then Scripting: Prevents cognitive freeze during high-pressure moments by pre-loading counter-moves.',
        tags: ['negotiation', 'strategy', 'game-theory', 'communication'],
        tokensUsed: 170,
        successRate: 97,
        saves: 980,
    },
    {
        id: 'problem-solving-industrial-004',
        title: 'Industrial Engineer (Lean Six Sigma)',
        titleTr: 'Endüstri Mühendisi (Yalın Altı Sigma)',
        titleDe: 'Wirtschaftsingenieur (Lean Six Sigma)',
        category: 'problem-solving',
        preview: 'Optimize your life like a factory floor. Use Lean Six Sigma principles to find bottlenecks in your routine and design "system patches" that require zero willpower.',
        previewTr: 'Hayatınızı bir fabrika alanı gibi optimize edin. Rutininizdeki darboğazları bulmak ve irade gerektirmeyen "sistem yamaları" tasarlamak için Yalın Altı Sigma prensiplerini kullanın.',
        previewDe: 'Optimieren Sie Ihr Leben wie eine Fabrikhalle. Nutzen Sie Lean-Six-Sigma-Prinzipien, um Engpässe zu finden und „System-Patches“ ohne Willenskraft zu entwerfen.',
        fullPrompt: `### SYSTEM INSTRUCTION: INDUSTRIAL ENGINEER (LEAN SIX SIGMA) ###

**Role:**
Act as a Systems Architect for Lifestyle Design.
I have a recurring "Bug" in my daily routine. Do NOT give me motivational advice. Treat me like a factory floor.

**The Bug:**
[INSERT PROBLEM - e.g., "I always skip the gym on Thursdays" or "I lose my keys every morning"]

**Your Task:**
1.  **The "Value Stream" Map:**
    * Map the exact sequence of events *before* the failure. (Trigger -> Action -> Result).
    * *Example: Alarm rings -> I hit snooze -> I check Instagram -> I am late.*
2.  **Identify the Constraint (Bottleneck):**
    * Point to the SINGLE step that causes the chain reaction failure. (e.g., "The phone is next to the bed").
3.  **The "Poka-Yoke" (Mistake-Proofing) Fix:**
    * Design a physical or digital "System Patch" that makes the bad habit impossible or the good habit inevitable.
    * *Constraint:* The solution must require ZERO willpower in the moment. (e.g., "Move charger to kitchen," not "Just try harder").

**Output:**
A diagnostic report with the "Process Map" and the "Engineering Patch."`,
        whyItWorks: 'Value Stream Mapping: Visualizes the invisible chain of habits. Poka-Yoke: Shifts the burden from human willpower to system design, making failure physically or digitally impossible.',
        tags: ['optimization', 'systems-thinking', 'productivity', 'habits'],
        tokensUsed: 160,
        successRate: 98,
        saves: 1250,
    },
    {
        id: 'predict-second-order-003',
        title: 'The Second-Order Thinker',
        titleTr: 'İkinci Derece Düşünür',
        titleDe: 'Der Zweiter-Ordnung-Denker',
        category: 'predicting',
        preview: 'Analyze the ripple effects of any event. Move beyond "What happens next?" to "And then what?" using systems thinking to map cascading consequences.',
        previewTr: 'Herhangi bir olayın dalga etkilerini analiz edin. "Sonra ne olur?" sorusunun ötesine geçerek basamaklı sonuçları haritalandırın.',
        previewDe: 'Analysieren Sie die Welleneffekte jedes Ereignisses. Gehen Sie über „Was passiert als Nächstes?“ hinaus zu „Und dann?“',
        fullPrompt: `### SYSTEM INSTRUCTION: SECOND-ORDER THINKING ENGINE ###

**Role:**
Act as a Systems Thinker and Chess Grandmaster.
I am considering an action/event. I need to see the "Ripple Effects" (Consequences of Consequences).

**The Event:**
[INSERT EVENT - e.g., "Rent control laws are passed" or "I fire my lead developer"]

**Your Task (The Chain Reaction):**
1.  **First Order (Immediate):** What happens directly? (e.g., "Rents go down").
2.  **Second Order (Reaction):** How do people react to the First Order? (e.g., "Landlords stop maintenance").
3.  **Third Order (Structural):** What is the long-term systemic shift? (e.g., "Housing supply shrinks, black market emerges").

**The Analysis:**
*   **The Trap:** What looks good in Step 1 but is terrible in Step 3?
*   **The Opportunity:** What looks bad in Step 1 but creates value in Step 3?

**Output:**
A "Cascade Map" showing the chain of events.`,
        whyItWorks: 'Forces the brain to simulate future timelines beyond immediate gratification. Identifies "Cobra Effects" (solutions that make the problem worse) before they happen.',
        tags: ['systems-thinking', 'strategy', 'consequences'],
        tokensUsed: 185,
        successRate: 96,
        saves: 1540,
    },
    {
        id: 'predict-trend-spotter-004',
        title: 'The Trend Spotter',
        titleTr: 'Trend Avcısı',
        titleDe: 'Der Trend-Spotter',
        category: 'predicting',
        preview: 'Identify where a signal sits on the Innovation Adoption Curve. Predict if a trend is about to "cross the chasm" or die in the trough of disillusionment.',
        previewTr: 'Bir sinyalin İnovasyon Benimseme Eğrisi\'nde nerede durduğunu belirleyin. Bir trendin "uçurumu aşıp aşmayacağını" tahmin edin.',
        previewDe: 'Identifizieren Sie, wo ein Signal auf der Innovationskurve liegt. Sagen Sie voraus, ob ein Trend kurz vor dem Durchbruch steht.',
        fullPrompt: `### SYSTEM INSTRUCTION: CULTURAL & TECH TREND ANALYST ###

**Role:**
Act as a Venture Capitalist and Cultural Anthropologist.
I see a new trend/signal. I need to know: Is this a fad, or the future?

**The Signal:**
[INSERT TREND - e.g., "AI Wearables" or "Cottagecore aesthetics"]

**Your Analysis (The Rogers Diffusion Curve):**
1.  **Current Phase:** Where are we? (Innovators -> Early Adopters -> Chasm -> Early Majority).
2.  **The Chasm Test:** What is the specific friction preventing normal people from using this? (e.g., "Too expensive," "Looks weird").
3.  **The Velocity:** Is interest accelerating (Linear) or exploding (Exponential)? Look for "Viral Coefficients."

**The Prediction:**
*   **Bull Case:** It crosses the chasm because [Reason].
*   **Bear Case:** It dies in the "Trough of Disillusionment" because [Reason].

**Verdict:**
"Early," "Peaking," or "Late."`,
        whyItWorks: 'Maps vague "hype" onto a proven sociological framework (Diffusion of Innovations). Forces a realistic assessment of barriers to entry (The Chasm).',
        tags: ['trends', 'market-analysis', 'timing'],
        tokensUsed: 195,
        successRate: 94,
        saves: 1320,
    },
    {
        id: 'predict-black-swan-005',
        title: 'Black Swan Architect',
        titleTr: 'Siyah Kuğu Mimarı',
        titleDe: 'Der Black-Swan-Architekt',
        category: 'predicting',
        preview: 'Stress-test your life or business against "Impossible" events. Shift your mindset from predicting the future to surviving the unpredictable (Anti-Fragility).',
        previewTr: 'Hayatınızı veya işinizi "İmkansız" olaylara karşı stres testine tabi tutun. Zihniyetinizi geleceği tahmin etmekten öngörülemez olana (Anti-Kırılganlık) kaydırın.',
        previewDe: 'Testen Sie Ihr Leben oder Geschäft gegen „unmögliche“ Ereignisse. Wechseln Sie von Vorhersage zu Anti-Fragilität.',
        fullPrompt: `### SYSTEM INSTRUCTION: CHAOS ENGINEER (TALEB STYLE) ###

**Role:**
Act as a Nassim Taleb-style Risk Philosopher.
I want to "Anti-Fragile" my plan.

**The Plan/System:**
[INSERT SYSTEM - e.g., "My freelance investment portfolio" or "My supply chain"]

**The Stress Test (The Improbables):**
Do not predict *when*. Assume *it happens*.
1.  **Event A:** The Internet goes down for 1 week.
2.  **Event B:** Your main platform (e.g., Upwork, YouTube) bans you instantly.
3.  **Event C:** The currency you earn in devalues by 40% overnight.

**Your Task:**
For each Event, determine:
*   **Fragile:** Do I break?
*   **Robust:** Do I stay the same?
*   **Anti-Fragile:** Do I actually *gain* from the chaos?

**The Fix:**
How do I restructure this so I am less Fragile to random shocks?`,
        whyItWorks: 'Moves away from "Prediction" (which is often wrong) to "Preparation" (which is controllable). Focuses on "Ruin Risk" which is statistically hidden but fatal.',
        tags: ['risk', 'resilience', 'antifragility', 'taleb'],
        tokensUsed: 210,
        successRate: 98,
        saves: 1650,
    },
    {
        id: 'predict-market-cycle-006',
        title: 'The Market Cycle Decoder',
        titleTr: 'Piyasa Döngüsü Çözücü',
        titleDe: 'Der Marktzyklus-Decoder',
        category: 'predicting',
        preview: 'Map current events to historical macro-cycles. Compare current sentiment and data to past patterns to predict the pendulum swing (Greed vs. Fear).',
        previewTr: 'Mevcut olayları tarihsel makro döngülerle eşleştirin. Sarkaç salınımını (Açgözlülük - Korku) tahmin etmek için mevcut verileri karşılaştırın.',
        previewDe: 'Ordnen Sie aktuelle Ereignisse historischen Makrozyklen zu. Vergleichen Sie Sentiment und Daten, um das Pendel (Gier vs. Angst) vorherzusagen.',
        fullPrompt: `### SYSTEM INSTRUCTION: MACRO HISTORIAN (RAY DALIO STYLE) ###

**Role:**
Act as a Macro-Economic Historian.
"History doesn't repeat, but it rhymes." I want to know where we are in the "Big Cycle."

**The Context:**
[INSERT SITUATION - e.g., "High inflation + Low unemployment"]

**Your Task:**
1.  **Historical Match:** Find the closest historical parallel. (e.g., "This looks like the 1970s Stagflation" or "The 2000 Dotcom Bubble").
2.  **The Indicators:** Compare the metrics then vs. now (Interest rates, Debt levels, Sentiment).
3.  **The Pendulum:**
    *   Where is the psychological pendulum? (Extreme Greed vs. Extreme Fear).
    *   What usually happens *next* when the pendulum is here?

**Output:**
A "Cycle Report" identifying the likely next phase based on historical precedent.`,
        whyItWorks: 'Removes "Recency Bias." Forces the user to zoom out and see the structural forces (Debt cycles, Empires rising/falling) rather than daily noise.',
        tags: ['macro', 'history', 'cycles', 'investing'],
        tokensUsed: 200,
        successRate: 95,
        saves: 1480,
    },
    {
        id: 'predict-behavioral-007',
        title: 'The Behavioral Profiler',
        titleTr: 'Davranışsal Profilci',
        titleDe: 'Der Verhaltensprofiler',
        category: 'predicting',
        preview: 'Predict how a specific crowd or person will react to a stimulus using Game Theory and Behavioral Economics. Perfect for PR, launches, or negotiations.',
        previewTr: 'Oyun Teorisi ve Davranışsal Ekonomi kullanarak belirli bir kalabalığın veya kişinin bir uyarana nasıl tepki vereceğini tahmin edin.',
        previewDe: 'Sagen Sie voraus, wie eine Menge oder Person auf einen Reiz reagiert. Nutzt Spieltheorie und Verhaltensökonomie.',
        fullPrompt: `### SYSTEM INSTRUCTION: BEHAVIORAL ECONOMIST ###

**Role:**
Act as an expert in Human Psychology and Game Theory.
I am planning an action. I want to predict the *irrational* human response.

**The Action:**
[INSERT ACTION - e.g., "I introduce a subscription fee for my free app"]

**The Target Audience:**
[INSERT AUDIENCE - e.g., "Loyal users who have been here for years"]

**Your Analysis (The Cognitive Biases):**
Predict the reaction using these filters:
1.  **Loss Aversion:** Will they feel they are "losing" something? (Pain is 2x gain).
2.  **Anchoring:** What is their price anchor? (Free?).
3.  **Fairness Norms:** Will this feel like a betrayal of an implicit social contract?

**The Prediction:**
*   **The Knee-Jerk:** What is the immediate emotional reaction?
*   **The Strategic Move:** How do I frame this to minimize the backlash? (e.g., "Grandfathering" old users).

**Output:**
A "Reaction Forecast" and a "Framing Strategy."`,
        whyItWorks: 'Humans are predictably irrational. This prompt applies Kahneman/Tversky principles to predict emotional backlash that pure logic misses.',
        tags: ['psychology', 'game-theory', 'behavioral-economics'],
        tokensUsed: 190,
        successRate: 97,
        saves: 1750,
    },
];

export const CATEGORY_METADATA: Record<string, { label: string; icon: string; color: string }> = {
    'general': { label: 'Prompt Engineering', icon: 'mingcute:tool-line', color: '#EAB308' },
    'coding': { label: 'Coding', icon: 'mingcute:code-line', color: '#00D4FF' },
    'finance': { label: 'Finance', icon: 'mingcute:wallet-line', color: '#6366F1' },
    'ui-ux': { label: 'UI/UX', icon: 'mingcute:palette-line', color: '#A855F7' },
    'image': { label: 'Image', icon: 'mingcute:pic-line', color: '#22C55E' },
    'problem-solving': { label: 'Problem Solving', icon: 'mingcute:bulb-line', color: '#F97316' },
    'creativity': { label: 'Creativity', icon: 'mingcute:magic-2-line', color: '#EC4899' },
    'learning': { label: 'Learning', icon: 'mingcute:mortarboard-line', color: '#14B8A6' },
    'predicting': { label: 'Predicting', icon: 'mingcute:crystal-ball-line', color: '#F43F5E' },
};

export const categories = [
    { id: 'all', label: 'All Prompts', icon: 'mingcute:grid-line' },
    ...Object.entries(CATEGORY_METADATA).map(([id, meta]) => ({
        id,
        label: meta.label,
        icon: meta.icon
    }))
];
