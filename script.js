document.addEventListener('DOMContentLoaded', () => {
    const topicInput = document.getElementById('topicInput');
    const generateBtn = document.getElementById('generateBtn');
    const outputSection = document.getElementById('outputSection');
    const errorMessage = document.getElementById('errorMessage');

    const hookOutput = document.getElementById('hookOutput');
    const scriptOutput = document.getElementById('scriptOutput');
    const ctaOutput = document.getElementById('ctaOutput');
    const captionsOutput = document.getElementById('captionsOutput');
    const musicOutput = document.getElementById('musicOutput');

    // --- TEMPLATE DATABASE ---
    const hooks = [
        "Stop scrolling! You need to hear this about {topic}.",
        "I bet you didn't know this about {topic}...",
        "Why is nobody talking about {topic}?!",
        "This one hack changed how I see {topic} forever.",
        "Unpopular opinion: {topic} is actually amazing. Here's why.",
        "If you optimize for {topic}, watch this.",
        "The biggest mistake people make with {topic} is this."
    ];

    // --- EXTENDED PROFESSIONAL TEMPLATE DATABASE ---

    // 1. The Setup / Context (Deep Dive Hook)
    const scriptIntros = [
        "Let's have a serious conversation about {topic}. In the current landscape, most professionals are completely misinterpreting the data. They see {topic} as a checkbox exercise rather than a strategic lever. But when you analyze the top 1% of performers in this sector, a different pattern emerges. They aren't just 'doing' {topic}; they are operationalizing it in a way that fundamentally changes the game.",
        "There is a silent crisis happening right now regarding {topic}. We are seeing a massive divergence between those who understand the first-principles of {topic} and those who are merely following outdated playbooks. If you feel like you're working harder but seeing diminishing returns, it's not you—it's your approach to {topic}. Let's break down exactly why the old models are failing.",
        "I want to challenge a common misconception about {topic}. The industry standard advice—which you've probably heard a thousand times—is actually counterproductive in today's environment. We need to stop treating {topic} as a simple tactic and start respecting it as a complex system. Once you understand the underlying mechanics, everything changes.",
        "The most dangerous phrase in business and personal growth is 'we've always done it this way.' Nowhere is this more damaging than with {topic}. We are on the precipice of a major shift, and the tools that got you here will not get you to the next level. We need to rethink {topic} from the ground up, starting with the core philosophy.",
        "Deep mastery of {topic} is rare. Why? Because it requires moving beyond the surface-level 'hacks' and committing to the boring, unsexy fundamentals. But here is the reality: the market doesn't reward effort; it rewards value. And the highest leverage value right now is hiding in plain sight within {topic}."
    ];

    // 2. The Problem / Analytical Breakdown
    const scriptProblems = [
        "Here is the issue: we are addicted to complexity. We build elaborate structures around {topic} to feel productive, but we are actually just creating friction. Real efficiency is the absence of unnecessary steps. When you look at your current workflow for {topic}, ask yourself: is this step creating value, or is it just creating motion?",
        "The bottleneck isn't resources; it's clarity. Most people approach {topic} with a scattered focus, trying to optimize everything at once. This leads to decision fatigue and ultimately, burnout. We need to apply the Pareto Principle here: 80% of your results in {topic} will come from just 20% of your inputs. The challenge is identifying that 20%.",
        "We are often told that {topic} requires innate talent or massive capital. That is empirically false. The barrier to entry isn't skill; it's discipline. The reason so many fail at {topic} is because they lack a systematic framework. They rely on willpower instead of process. And willpower always fatigues.",
        "There is a significant gap between theory and practice when it comes to {topic}. Theoretically, we all know what to do. But practically, implementation gets messy. We get distracted by metrics that don't matter and ignore the leading indicators that actually predict success in {topic}.",
        "Consider the opportunity cost of ignoring {topic}. While you are debating the minor details, your competition is executing. In a hyper-competitive environment, speed of implementation is a competitive advantage. You cannot afford to be passive about {topic} any longer."
    ];

    // 3. The Solution / Strategic Framework
    const scriptSolutions = [
        "The solution requires a paradigm shift. Instead of asking 'how do I do more {topic}?', ask 'how do I increase the leverage of every hour I spend on {topic}?'. This means automating the routine, delegating the non-essential, and obsessively focusing your energy on the high-impact creative variables.",
        "You need a framework. I call it the 'Minimum Viable Process' for {topic}. Strip everything down to the absolute essentials. What is the single most important action that drives the needle? Do that. Do it ruthlessly well. Ignore everything else until you have mastered that one core component.",
        "Excellence in {topic} is not an act, but a habit. It sounds cliché, but it is the truth. You need to build a feedback loop. Execute, measure, adjust. Most people skip the measurement. They execute blindly. If you aren't tracking your performance in {topic}, you aren't managing it—you're just gambling.",
        "We need to adopt an 'iterative mindset' towards {topic}. Don't wait for perfection. Version one is better than version none. Launch your initiative, gather real-world feedback, and iterate rapidly. The market will teach you more about effective {topic} in one day than a textbook will in a year.",
        "Focus on 'Asymmetric Bets'. in the context of {topic}, this means finding actions that have a capped downside but an uncapped upside. This is how the smartest operators win. They don't take more risks; they take better risks. Structure your approach to {topic} so that even if you fail, you learn, but if you succeed, you win big."
    ];

    // 4. The Outcome / Professional Forecast
    const scriptOutcomes = [
        "When you implement this level of strategic thinking to {topic}, the results are not just additive; they are exponential. You move from being a participant in the market to being a leader. You stop chasing trends and start setting the standard. That is the power of true mastery.",
        "Imagine having a system for {topic} that operates with machine-like precision. The mental bandwidth you save can then be reinvested into innovation and growth. This is how you scale. You don't scale by working harder; you scale by building systems that work for you.",
        "The long-term value of mastering {topic} cannot be overstated. It is a transferable skill that amplifies everything else you do. Whether you are leading a team, building a product, or managing a brand, the principles of effective {topic} remain the same. It is an investment in your own professional equity.",
        "This is your call to action. Stop treating {topic} as a side project. Elevate it. Give it the strategic priority it deserves. The professionals who win in the next decade will be the ones who didn't overlook these fundamentals.",
        "Ultimately, {topic} is a mirror. It reflects your discipline, your clarity, and your commitment to excellence. By refining your approach to {topic}, you are actually refining your entire professional operating system. Stick with it, and the results will speak for themselves."
    ];

    const ctas = [
        "Save this video for later!",
        "Share this with a friend who needs to see it.",
        "Comment 'YES' if you agree!",
        "Follow for more {topic} tips!",
        "Link in bio for the full guide.",
        "Smash that like button if this helped!"
    ];

    const captionsTemplates = [
        "{topic} Secrets 🤫",
        "Wait for it... 🤯",
        "Game Changer 🚀",
        "Don't Miss This ⚠️",
        "Level Up 📈",
        "Truth Bomb 💣",
        "Life Hack ✨"
    ];

    const musicVibes = [
        "Trending Audio - High Energy Phonk",
        "Lo-Fi Chill Beat (Concentration)",
        "Upbeat Pop / Funk",
        "Dramatic Movie Score Build-up",
        "Trap Beat with Heavy Bass",
        "Synthwave / Retro"
    ];

    // --- LOGIC ---

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function generateScript() {
        const topic = topicInput.value.trim();

        if (!topic) {
            errorMessage.classList.remove('hidden');
            outputSection.classList.add('hidden');
            return;
        }

        errorMessage.classList.add('hidden');

        // 1. Hook
        const rawHook = getRandomItem(hooks);
        const processedHook = rawHook.replace(/{topic}/g, topic);

        // 2. Body Script (Combined Sections for Length)
        const intro = getRandomItem(scriptIntros).replace(/{topic}/g, topic);
        const problem = getRandomItem(scriptProblems).replace(/{topic}/g, topic);
        const solution = getRandomItem(scriptSolutions).replace(/{topic}/g, topic);
        const outcome = getRandomItem(scriptOutcomes).replace(/{topic}/g, topic);

        const processedBody = `${intro}\n\n${problem}\n\n${solution}\n\n${outcome}`;

        // 3. CTA
        const rawCta = getRandomItem(ctas);
        const processedCta = rawCta.replace(/{topic}/g, topic);

        // 4. Captions (Generate 3 random ones)
        const selectedCaptions = [];
        const shuffledCaptions = [...captionsTemplates].sort(() => 0.5 - Math.random());
        for (let i = 0; i < 3; i++) {
            selectedCaptions.push(shuffledCaptions[i].replace(/{topic}/g, topic));
        }

        // 5. Music
        const music = getRandomItem(musicVibes);

        // Update DOM
        hookOutput.innerText = processedHook; // textContent handles newlines poorly in some CSS setups, but CSS white-space: pre-wrap usually needed
        scriptOutput.style.whiteSpace = "pre-line"; // Ensure newlines are respected
        scriptOutput.textContent = processedBody;
        ctaOutput.textContent = processedCta;

        captionsOutput.innerHTML = '';
        selectedCaptions.forEach(cap => {
            const li = document.createElement('li');
            li.textContent = cap;
            captionsOutput.appendChild(li);
        });

        musicOutput.textContent = music;

        outputSection.classList.remove('hidden');
    }

    // --- EVENT LISTENERS ---
    generateBtn.addEventListener('click', generateScript);

    topicInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateScript();
        }
    });
});
