const localizations = {
    en: {
        needs: "Essentials (Needs)", wants: "Lifestyle (Wants)", savings: "Future (Savings)",
        dashHeader: "Your Financial Coach Blueprint", coachTitle: "🎯 True AI Personalized Analysis",
        formFields: {
            student: `
                <div class="form-group"><label>Monthly Pocket Money / Stipend (₹)</label><input type="number" id="income" required min="1" placeholder="e.g. 500"></div>
                <div class="form-group"><label>Tuition Fees / Course Material Cost (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="e.g. 300"></div>
                <div class="form-group"><label>Daily/Weekly Non-Essential Spending (Snacks, Outings) (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="e.g. 150"></div>
                <div class="form-group"><label>Target Timeline for Goal (In Months)</label><input type="number" id="timeline" required min="1" placeholder="e.g. 3"></div>`,
            corporate: `
                <div class="form-group"><label>Monthly Net Take-Home Salary (₹)</label><input type="number" id="income" required min="1" placeholder="e.g. 50000"></div>
                <div class="form-group"><label>Rent & Essential Utilities (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="e.g. 18000"></div>
                <div class="form-group"><label>Discretionary Spending (Dining, Shopping, Entertainment) (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="e.g. 10000"></div>
                <div class="form-group"><label>Target Timeline for Goal (In Months)</label><input type="number" id="timeline" required min="1" placeholder="e.g. 12"></div>`,
            govt: `
                <div class="form-group"><label>Monthly Basic Pay + Perks (₹)</label><input type="number" id="income" required min="1" placeholder="e.g. 60000"></div>
                <div class="form-group"><label>Out of pocket overheads (excl. government allowances) (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="e.g. 15000"></div>
                <div class="form-group"><label>Lifestyle Expenses & Subscriptions (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="e.g. 8000"></div>
                <div class="form-group"><label>Target Timeline for Goal (In Months)</label><input type="number" id="timeline" required min="1" placeholder="e.g. 24"></div>`,
            self_employed: `
                <div class="form-group"><label>Average Monthly Cash Inflow / Income (₹)</label><input type="number" id="income" required min="1" placeholder="e.g. 15000"></div>
                <div class="form-group"><label>Business Operational Overhead / Materials / Seeds (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="e.g. 5000"></div>
                <div class="form-group"><label>Household Maintenance & Daily Expenses (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="e.g. 6000"></div>
                <div class="form-group"><label>Seasonality Risk Profile</label><select id="sub-profile"><option value="highly-seasonal">Highly Seasonal (Crop Cycles / Daily Wage Waves)</option><option value="steady">Relatively Steady Month-on-Month</option></select></div>
                <div class="form-group"><label>Target Timeline for Goal (In Months)</label><input type="number" id="timeline" required min="1" placeholder="e.g. 6"></div>`,
            business: `
                <div class="form-group"><label>Average Monthly Net Revenue / Profit (₹)</label><input type="number" id="income" required min="1" placeholder="e.g. 200000"></div>
                <div class="form-group"><label>Commercial Rent, Salaries & Inventory Cost (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="e.g. 90000"></div>
                <div class="form-group"><label>Personal Luxury & Lifestyle Withdrawals (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="e.g. 40000"></div>
                <div class="form-group"><label>Tax & GST Allocation Managed?</label><select id="sub-profile"><option value="no-separate-tax">No, mixed with personal funds</option><option value="separate-tax">Yes, maintained in separate current account</option></select></div>
                <div class="form-group"><label>Target Timeline for Goal (In Months)</label><input type="number" id="timeline" required min="1" placeholder="e.g. 6"></div>`
        }
    },
    hi: {
        needs: "ज़रूरी खर्चे (Needs)", wants: "इच्छाएं/शौक (Wants)", savings: "भविष्य की बचत (Savings)",
        dashHeader: "आपका पर्सनल वित्तीय रोडमैप", coachTitle: "🎯 एआई कोच का खास विश्लेषण",
        formFields: {
            student: `
                <div class="form-group"><label>मासिक पॉकेट मनी / पार्ट-टाइम कमाई (₹)</label><input type="number" id="income" required min="1" placeholder="जैसे 500"></div>
                <div class="form-group"><label>पढ़ाई, बुक्स या कॉलेज का मासिक खर्च (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="जैसे 300"></div>
                <div class="form-group"><label>रोजाना/साप्ताहिक अन्य खर्चे (स्नैक्स, घूमना) (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="जैसे 150"></div>
                <div class="form-group"><label>लक्ष्य पूरा करने का समय (महीनों में)</label><input type="number" id="timeline" required min="1" placeholder="जैसे 3"></div>`,
            corporate: `
                <div class="form-group"><label>मासिक इन-हैंड सैलरी (₹)</label><input type="number" id="income" required min="1" placeholder="जैसे 50000"></div>
                <div class="form-group"><label>मकान का किराया, EMI और राशन का खर्च (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="जैसे 18000"></div>
                <div class="form-group"><label>शौक, बाहर खाना और शॉपिंग का खर्च (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="जैसे 10000"></div>
                <div class="form-group"><label>लक्ष्य पूरा करने का समय (महीनों में)</label><input type="number" id="timeline" required min="1" placeholder="जैसे 12"></div>`,
            govt: `
                <div class="form-group"><label>कुल मासिक वेतन (अलाउंस मिलाकर) (₹)</label><input type="number" id="income" required min="1" placeholder="जैसे 60000"></div>
                <div class="form-group"><label>बाहरी घरेलू खर्चे (सरकारी फायदों को छोड़कर) (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="जैसे 15000"></div>
                <div class="form-group"><label>लाइफस्टाइल और अन्य शौक के खर्चे (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="जैसे 8000"></div>
                <div class="form-group"><label>लक्ष्य पूरा करने का समय (महीनों में)</label><input type="number" id="timeline" required min="1" placeholder="जैसे 24"></div>`,
            self_employed: `
                <div class="form-group"><label>औसत मासिक कमाई / आवक (किसान, मजदूर, कारीगर) (₹)</label><input type="number" id="income" required min="1" placeholder="जैसे 15000"></div>
                <div class="form-group"><label>काम का खर्च / खाद-बीज / औजार का खर्च (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="जैसे 5000"></div>
                <div class="form-group"><label>घर का राशन और घरेलू खर्च (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="जैसे 6000"></div>
                <div class="form-group"><label>कमाई का उतार-चढ़ाव (Risk Profile)</label><select id="sub-profile"><option value="highly-seasonal">सीज़नल है (फसल चक्र या दिहाड़ी के हिसाब से बदलता है)</option><option value="steady">लगभग हर महीने बराबर रहता है</option></select></div>
                <div class="form-group"><label>लक्ष्य पूरा करने का समय (महीनों में)</label><input type="number" id="timeline" required min="1" placeholder="जैसे 6"></div>`,
            business: `
                <div class="form-group"><label>औसत मासिक शुद्ध मुनाफा (Net Profit) (₹)</label><input type="number" id="income" required min="1" placeholder="जैसे 200000"></div>
                <div class="form-group"><label>दुकान/फर्म का किराया, सैलरी और स्टॉक का खर्च (₹)</label><input type="number" id="fixed-cost" required min="0" placeholder="जैसे 90000"></div>
                <div class="form-group"><label>खुद के व्यक्तिगत शौक और विड्रॉल खर्च (₹)</label><input type="number" id="wants-cost" required min="0" placeholder="जैसे 40000"></div>
                <div class="form-group"><label>टैक्स और GST का मैनेजमेंट</label><select id="sub-profile"><option value="no-separate-tax">नहीं, सब एक ही अकाउंट में मिक्स रहता है</option><option value="separate-tax">हाँ, करंट अकाउंट में अलग से रखते हैं</option></select></div>
                <div class="form-group"><label>लक्ष्य पूरा करने का समय (महीनों में)</label><input type="number" id="timeline" required min="1" placeholder="जैसे 6"></div>`
        }
    }
};

const userTypeSelect = document.getElementById('user-type');
const langPrefSelect = document.getElementById('lang-pref');
const dynamicInputs = document.getElementById('dynamic-inputs');

function renderDynamicFields() {
    const lang = langPrefSelect.value;
    const type = userTypeSelect.value;
    dynamicInputs.innerHTML = localizations[lang].formFields[type];
}

userTypeSelect.addEventListener('change', renderDynamicFields);
langPrefSelect.addEventListener('change', renderDynamicFields);

window.addEventListener('DOMContentLoaded', () => {
    renderDynamicFields();
});

function formatMarkdown(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^\s*\*\s*(.*?)$/gm, '<li>$1</li>')
        .replace(/^\s*(\d+)\.\s*(.*?)$/gm, '<h3>$1. $2</h3>')
        .split('\n\n').map(p => {
            if (p.includes('<li>')) return `<ul>${p}</ul>`;
            if (p.includes('<h3>')) return p;
            return `<p>${p}</p>`;
        }).join('');
}

document.getElementById('finance-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const loadingSpinner = document.getElementById('loading-spinner');
    const coachingContent = document.getElementById('coaching-content');
    const outputCard = document.getElementById('output-card');

    const lang = langPrefSelect.value;
    const type = userTypeSelect.value;
    const income = parseFloat(document.getElementById('income').value);
    const fixedCost = parseFloat(document.getElementById('fixed-cost').value);
    const wantsCost = parseFloat(document.getElementById('wants-cost').value);
    const timeline = parseInt(document.getElementById('timeline').value);
    
    const subProfileEl = document.getElementById('sub-profile');
    const subProfile = subProfileEl ? subProfileEl.selectedOptions[0].text : "Standard";
    const specialIssue = document.getElementById('special-issue').value;

    const calculatedSavings = income - (fixedCost + wantsCost);
    document.getElementById('label-needs').innerText = localizations[lang].needs;
    document.getElementById('label-wants').innerText = localizations[lang].wants;
    document.getElementById('label-savings').innerText = localizations[lang].savings;
    document.getElementById('out-needs').innerText = `₹${fixedCost.toFixed(0)}`;
    document.getElementById('out-wants').innerText = `₹${wantsCost.toFixed(0)}`;
    document.getElementById('out-savings').innerText = `₹${calculatedSavings.toFixed(0)}`;
    document.getElementById('out-header').innerText = localizations[lang].dashHeader;
    document.getElementById('coaching-title').innerText = localizations[lang].coachTitle;

    outputCard.classList.remove('hidden');
    coachingContent.innerHTML = '';
    loadingSpinner.classList.remove('hidden');
    submitBtn.disabled = true;
    outputCard.scrollIntoView({ behavior: 'smooth' });

    try {
        const response = await fetch('/api/advisor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lang, type, income, fixedCost, wantsCost, timeline, subProfile, specialIssue })
        });

        const data = await response.json();
        
        if (response.ok) {
            coachingContent.innerHTML = formatMarkdown(data.advice);
        } else {
            coachingContent.innerHTML = `<p style="color:red;">Error: ${data.error || 'Failed to sync coaching advice.'}</p>`;
        }
    } catch (err) {
        coachingContent.innerHTML = `<p style="color:red;">Connection error. Please check your backend.</p>`;
    } finally {
        loadingSpinner.classList.add('hidden');
        submitBtn.disabled = false;
    }
});