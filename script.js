
const S = [
  {
    name:'Aadhaar Services', hi:'Aadhaar Services', icon:'🪪',
    cat:'Government Services',
    services:['Aadhaar update/correction','Aadhaar download/print','Update assistance'],
    hiServices:['Aadhaar update/correction','Aadhaar download/print','Update assistance'],
    docs:['Aadhaar Card','Registered Mobile Number','Supporting document, if applicable'],
    hiDocs:['Aadhaar Card','Registered Mobile Number','Supporting document, if applicable'],
    note:'Requirements vary by request type.',
    hiNote:'Requirements request type ke hisaab se alag ho sakte hain.'
  },
  {
    name:'PAN Card', hi:'PAN Card', icon:'💳',
    cat:'Government Services',
    services:['New PAN','PAN correction','e-PAN assistance'],
    hiServices:['New PAN','PAN correction','e-PAN assistance'],
    docs:['Aadhaar Card','Mobile Number','Email ID','Photo, if required'],
    hiDocs:['Aadhaar Card','Mobile Number','Email ID','Photo, if required'],
    note:'Requirements vary by applicant type.',
    hiNote:'Applicant type ke hisaab se requirements alag ho sakti hain.'
  },
  {
    name:'Ayushman Bharat', hi:'Ayushman Bharat', icon:'🏥',
    cat:'Government Services',
    services:['Ayushman card assistance','Eligibility/beneficiary help','Download/print'],
    hiServices:['Ayushman card assistance','Eligibility/beneficiary help','Download/print'],
    docs:['Aadhaar Card','Ration Card / Family details','Mobile Number'],
    hiDocs:['Aadhaar Card','Ration Card / Family details','Mobile Number'],
    note:'Eligibility and requirements can vary.',
    hiNote:'Eligibility aur requirements case ke hisaab se alag ho sakti hain.'
  },
  {
    name:'Voter ID', hi:'Voter ID', icon:'🗳️',
    cat:'Government Services',
    services:['New registration','Correction/update','EPIC download'],
    hiServices:['New registration','Correction/update','EPIC download'],
    docs:['Identity proof','Address proof','Mobile Number','Photograph'],
    hiDocs:['Identity proof','Address proof','Mobile Number','Photograph'],
    note:'Exact proof depends on application.',
    hiNote:'Exact proof application ke hisaab se depend karta hai.'
  },
  {
    name:'PM Kisan', hi:'PM Kisan', icon:'🌾',
    cat:'Government Services',
    services:['Registration help','e-KYC assistance','Status help'],
    hiServices:['Registration help','e-KYC assistance','Status help'],
    docs:['Aadhaar Card','Mobile Number','Bank Account Details','Land/farmer details if required'],
    hiDocs:['Aadhaar Card','Mobile Number','Bank Account Details','Land/farmer details if required'],
    note:'Eligibility and documents depend on the case.',
    hiNote:'Eligibility aur documents case ke hisaab se depend karte hain.'
  },
  {
    name:'eShram / Labour', hi:'eShram / Labour', icon:'👷',
    cat:'Government Services',
    services:['eShram registration','Profile/card help','Download/print'],
    hiServices:['eShram registration','Profile/card help','Download/print'],
    docs:['Aadhaar Card','Mobile Number','Bank Account Details if required'],
    hiDocs:['Aadhaar Card','Mobile Number','Bank Account Details if required'],
    note:'Details vary by service.',
    hiNote:'Details service ke hisaab se alag ho sakti hain.'
  },
  {
    name:'Banking / AEPS', hi:'Banking / AEPS', icon:'🏦',
    cat:'Banking & Financial',
    services:['AEPS cash withdrawal','Balance enquiry','Mini statement'],
    hiServices:['AEPS cash withdrawal','Balance enquiry','Mini statement'],
    docs:['Aadhaar Card','Bank-linked Mobile Number','Biometric authentication'],
    hiDocs:['Aadhaar Card','Bank-linked Mobile Number','Biometric authentication'],
    note:'Availability and limits depend on provider/bank.',
    hiNote:'Availability aur limits provider/bank par depend karte hain.'
  },
  {
    name:'DigiPay', hi:'DigiPay', icon:'💰',
    cat:'Banking & Financial',
    services:['Digital banking assistance','Transaction assistance','Service guidance'],
    hiServices:['Digital banking assistance','Transaction assistance','Service guidance'],
    docs:[], hiDocs:[],
    note:'No document is normally required for basic information/service guidance.',
    hiNote:'Basic information/service guidance ke liye normally kisi document ki zarurat nahi hoti.'
  },
  {
    name:'Insurance', hi:'Insurance', icon:'🛡️',
    cat:'Banking & Financial',
    services:['Health insurance assistance','Motor insurance','Renewal/enquiry'],
    hiServices:['Health insurance assistance','Motor insurance','Renewal/enquiry'],
    docs:['KYC document','Mobile Number','RC/previous policy for motor','Relevant personal details'],
    hiDocs:['KYC document','Mobile Number','RC/previous policy for motor','Relevant personal details'],
    note:'Exact documents depend on insurer/policy.',
    hiNote:'Exact documents insurer/policy par depend karte hain.'
  },
  {
    name:'IRCTC Booking', hi:'IRCTC Booking', icon:'🚆',
    cat:'Travel Services',
    services:['Train ticket booking','Cancellation/enquiry','Passenger details'],
    hiServices:['Train ticket booking','Cancellation/enquiry','Passenger details'],
    docs:[], hiDocs:[],
    note:'For booking, passenger and journey details are generally sufficient. Carry valid ID while travelling.',
    hiNote:'Booking ke liye passenger aur journey details generally sufficient hote hain. Travel ke time valid ID saath rakhein.'
  },
  {
    name:'Certificates', hi:'Certificates', icon:'📄',
    cat:'Documents & Certificates',
    services:['Online certificate application','Form filling','Download/print'],
    hiServices:['Online certificate application','Form filling','Download/print'],
    docs:['Aadhaar/ID proof','Address proof','Mobile Number','Supporting documents as required'],
    hiDocs:['Aadhaar/ID proof','Address proof','Mobile Number','Supporting documents as required'],
    note:'Requirements vary by certificate.',
    hiNote:'Certificate ke type ke hisaab se requirements alag ho sakti hain.'
  },
  {
    name:'Passport Services', hi:'Passport Services', icon:'🛂',
    cat:'Government Services',
    services:['Passport application assistance','Appointment/form help','Document upload/print'],
    hiServices:['Passport application assistance','Appointment/form help','Document upload/print'],
    docs:['Identity proof','Address proof','Date-of-birth proof','Other documents as applicable'],
    hiDocs:['Identity proof','Address proof','Date-of-birth proof','Other documents as applicable'],
    note:'Requirements vary by applicant/application.',
    hiNote:'Applicant/application ke hisaab se requirements alag ho sakti hain.'
  },
  {
    name:'Bill Payment', hi:'Bill Payment', icon:'⚡',
    cat:'Payments',
    services:['Electricity bill','Water/utility bill','Supported bill payments'],
    hiServices:['Electricity bill','Water/utility bill','Supported bill payments'],
    docs:[], hiDocs:[],
    note:'Keep your latest bill or consumer/account number ready.',
    hiNote:'Latest bill ya consumer/account number ready rakhein.'
  },
  {
    name:'Recharge', hi:'Recharge', icon:'📱',
    cat:'Payments',
    services:['Mobile recharge','DTH recharge','Supported recharge'],
    hiServices:['Mobile recharge','DTH recharge','Supported recharge'],
    docs:[], hiDocs:[],
    note:'Verify number and plan before payment.',
    hiNote:'Payment se pehle number aur plan verify kar lein.'
  },
  {
    name:'Print & Scan', hi:'Print & Scan', icon:'🖨️',
    cat:'Print & Digital',
    services:['Document printing','Photo printing','Scanning/PDF'],
    hiServices:['Document printing','Photo printing','Scanning/PDF'],
    docs:[], hiDocs:[],
    note:'Send the file/photo you want to print or scan.',
    hiNote:'Jis file/photo ko print ya scan karwana hai, woh provide karein.'
  },
  {
    name:'Online Forms', hi:'Online Forms', icon:'📝',
    cat:'Online Assistance',
    services:['Application filling','Document upload','Form submission'],
    hiServices:['Application filling','Document upload','Form submission'],
    docs:['Applicant ID proof','Mobile Number','Email ID','Required supporting documents'],
    hiDocs:['Applicant ID proof','Mobile Number','Email ID','Required supporting documents'],
    note:'Requirements depend on the particular form/portal.',
    hiNote:'Requirements particular form/portal ke hisaab se depend karte hain.'
  },

  // NEW SERVICES
  {
    name:'जाति प्रमाणपत्र', hi:'जाति प्रमाणपत्र', icon:'📄',
    cat:'Documents & Certificates',
    services:['New application assistance','Correction assistance','Application status/download'],
    hiServices:['नया आवेदन सहायता','आवेदन में सुधार','आवेदन की स्थिति/डाउनलोड'],
    docs:['Identity proof','Address proof','Caste/family-related proof, where applicable','Mobile Number'],
    hiDocs:['पहचान प्रमाण','पते का प्रमाण','जाति/परिवार संबंधी प्रमाण, जहाँ लागू हो','मोबाइल नंबर'],
    note:'Requirements depend on the state portal and applicant.',
    hiNote:'दस्तावेज राज्य के पोर्टल और आवेदक के अनुसार अलग हो सकते हैं।'
  },
  {
    name:'निवास प्रमाणपत्र', hi:'निवास प्रमाणपत्र', icon:'🏠',
    cat:'Documents & Certificates',
    services:['New application assistance','Correction assistance','Certificate download/print'],
    hiServices:['नया आवेदन सहायता','आवेदन में सुधार','प्रमाणपत्र डाउनलोड/प्रिंट'],
    docs:['Identity proof','Address proof','Mobile Number','Other residence documents, if required'],
    hiDocs:['पहचान प्रमाण','पते का प्रमाण','मोबाइल नंबर','अन्य निवास संबंधी दस्तावेज, यदि आवश्यक हों'],
    note:'Exact requirements depend on the state portal.',
    hiNote:'सटीक दस्तावेज राज्य के पोर्टल और आवेदन के अनुसार तय होंगे।'
  },
  {
    name:'आय प्रमाणपत्र', hi:'आय प्रमाणपत्र', icon:'💵',
    cat:'Documents & Certificates',
    services:['New application assistance','Correction assistance','Certificate download/print'],
    hiServices:['नया आवेदन सहायता','आवेदन में सुधार','प्रमाणपत्र डाउनलोड/प्रिंट'],
    docs:['Identity proof','Address proof','Income proof','Mobile Number'],
    hiDocs:['पहचान प्रमाण','पते का प्रमाण','आय संबंधी प्रमाण','मोबाइल नंबर'],
    note:'Income proof requirements vary by applicant and purpose.',
    hiNote:'आय संबंधी दस्तावेज आवेदक और उद्देश्य के अनुसार अलग हो सकते हैं।'
  },
  {
    name:'छात्रवृत्ति फॉर्म', hi:'छात्रवृत्ति फॉर्म', icon:'🎓',
    cat:'Education & Scholarship',
    services:['Scholarship application','Renewal assistance','Application status assistance'],
    hiServices:['छात्रवृत्ति आवेदन','नवीनीकरण सहायता','आवेदन स्थिति सहायता'],
    docs:['Student Aadhaar','Previous class marksheet','Bank passbook','Caste/income certificate if applicable','Institution/admission details'],
    hiDocs:['विद्यार्थी का आधार कार्ड','पिछली कक्षा की अंकसूची','बैंक पासबुक','जाति/आय प्रमाणपत्र, यदि लागू हो','संस्थान/प्रवेश संबंधी विवरण'],
    note:'Documents and eligibility depend on the scholarship scheme.',
    hiNote:'दस्तावेज और पात्रता संबंधित छात्रवृत्ति योजना पर निर्भर करते हैं।'
  },
  {
    name:'ड्राइविंग लाइसेंस', hi:'ड्राइविंग लाइसेंस', icon:'🚘',
    cat:'RTO & Vehicle Services',
    services:['Learner licence assistance','Driving licence assistance','Renewal/appointment assistance'],
    hiServices:['लर्निंग लाइसेंस सहायता','ड्राइविंग लाइसेंस सहायता','नवीनीकरण/अपॉइंटमेंट सहायता'],
    docs:['Age proof','Address proof','Identity proof','Mobile Number','Medical certificate where required'],
    hiDocs:['आयु प्रमाण','पते का प्रमाण','पहचान प्रमाण','मोबाइल नंबर','मेडिकल प्रमाणपत्र, जहाँ आवश्यक हो'],
    note:'Eligibility and documents depend on licence category.',
    hiNote:'पात्रता और दस्तावेज लाइसेंस की श्रेणी के अनुसार बदल सकते हैं।'
  },
  {
    name:'RTO वाहन सेवाएँ', hi:'RTO वाहन सेवाएँ', icon:'🚗',
    cat:'RTO & Vehicle Services',
    services:['RC assistance','Vehicle ownership transfer assistance','Vehicle/application status assistance'],
    hiServices:['RC संबंधी सहायता','वाहन स्वामित्व हस्तांतरण सहायता','वाहन/आवेदन स्थिति सहायता'],
    docs:['Vehicle RC','Owner identity proof','Insurance details','PUC where applicable','Other documents as required'],
    hiDocs:['वाहन RC','मालिक का पहचान प्रमाण','बीमा विवरण','PUC, जहाँ लागू हो','अन्य आवश्यक दस्तावेज'],
    note:'Required documents depend on the selected RTO service.',
    hiNote:'आवश्यक दस्तावेज चुनी गई RTO सेवा पर निर्भर करते हैं।'
  },
  {
    name:'वाहन बीमा', hi:'वाहन बीमा', icon:'🚙',
    cat:'Banking & Financial',
    services:['New motor insurance assistance','Policy renewal','Policy details/premium enquiry'],
    hiServices:['नया वाहन बीमा सहायता','बीमा नवीनीकरण','पॉलिसी/प्रीमियम पूछताछ'],
    docs:['Vehicle RC','Previous policy, if available','Mobile Number','Vehicle details'],
    hiDocs:['वाहन RC','पिछली पॉलिसी, यदि उपलब्ध हो','मोबाइल नंबर','वाहन का विवरण'],
    note:'Premium and coverage depend on insurer and vehicle details.',
    hiNote:'प्रीमियम और कवरेज बीमा कंपनी तथा वाहन के विवरण पर निर्भर करते हैं।'
  },
  {
    name:'हेल्थ इंश्योरेंस', hi:'हेल्थ इंश्योरेंस', icon:'🏥',
    cat:'Banking & Financial',
    services:['Health insurance information','Policy options enquiry','Renewal assistance'],
    hiServices:['हेल्थ इंश्योरेंस जानकारी','पॉलिसी विकल्प पूछताछ','नवीनीकरण सहायता'],
    docs:['Identity proof','Mobile Number','Age and personal details','Previous policy, if available'],
    hiDocs:['पहचान प्रमाण','मोबाइल नंबर','आयु और व्यक्तिगत विवरण','पुरानी पॉलिसी, यदि उपलब्ध हो'],
    note:'The insurer may request additional information or medical details.',
    hiNote:'बीमा कंपनी अतिरिक्त जानकारी या मेडिकल विवरण माँग सकती है।'
  }
];

let langMode = localStorage.getItem('bds-lang') || 'en';

const W = m => 'https://wa.me/917999276798?text=' + encodeURIComponent(m);
const $ = id => document.getElementById(id);

$('wa1').href = W('Hello, mujhe Balaji Digital Seva ke baare me information chahiye.');
$('wa2').href = W('Hello, mujhe Balaji Digital Seva ki digital service ke baare me information chahiye.');
$('year').textContent = new Date().getFullYear();

let active = 'All';
const cats = ['All', ...new Set(S.map(x => x.cat))];

function t(en, hi) {
  return langMode === 'hi' ? hi : en;
}

function setLanguage() {
  document.documentElement.lang = langMode;

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = t(el.dataset.en, el.dataset.hi);
  });

  $('search').placeholder = t(
    $('search').dataset.placeholderEn,
    $('search').dataset.placeholderHi
  );

  $('lang').textContent = langMode === 'hi' ? 'EN / हिं' : 'हिं / EN';

  renderChips();
  render();
}

function renderChips() {
  $('chips').innerHTML = cats.map(c =>
    `<button class="chip ${c === active ? 'active' : ''}" data-cat="${c}">${
      c === 'All' ? t('All', 'Sabhi') : c
    }</button>`
  ).join('');

  document.querySelectorAll('.chip').forEach(b => {
    b.onclick = () => {
      active = b.dataset.cat;
      renderChips();
      render();
    };
  });
}

function render() {
  const q = $('search').value.trim().toLowerCase();

  const a = S.map((x, i) => [x, i]).filter(([x]) => {
    const searchable = [
      x.name, x.hi, x.cat,
      ...x.services, ...x.hiServices,
      ...x.docs, ...x.hiDocs
    ].join(' ').toLowerCase();

    return (active === 'All' || x.cat === active) &&
      (!q || searchable.includes(q));
  });

  $('grid').innerHTML = a.map(([x, i]) =>
    `<article onclick="openM(${i})">
      <div class="ico">${x.icon}</div>
      <h3>${langMode === 'hi' ? x.hi : x.name}</h3>
      <small>${x.cat}</small><br>
      <small>${t('Tap for details →', 'Details ke liye tap karein →')}</small>
    </article>`
  ).join('') || `<p class="empty">${t('No matching service found.', 'Koi matching service nahi mili.')}</p>`;
}

renderChips();
render();
$('search').oninput = render;

function openM(i) {
  const x = S[i];
  const docs = langMode === 'hi' ? x.hiDocs : x.docs;
  const services = langMode === 'hi' ? x.hiServices : x.services;

  $('mi').textContent = x.icon;
  $('mc').textContent = x.cat;
  $('mt').textContent = langMode === 'hi' ? x.hi : x.name;

  $('ma').innerHTML = services.map(v => '<li>' + v + '</li>').join('');
  $('docsBox').style.display = docs.length ? 'block' : 'none';
  $('md').innerHTML = docs.map(v => '<li>' + v + '</li>').join('');

  $('mn').textContent = langMode === 'hi' ? x.hiNote : x.note;

  const msg = docs.length
    ? `Hello, mujhe ${x.name} service ke liye enquiry karni hai. Required documents aur charges bata dijiye.`
    : `Hello, mujhe ${x.name} service ke liye enquiry karni hai. Charges aur process bata dijiye.`;

  $('mw').href = W(msg);

  $('modal').classList.add('open');
  $('modal').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

$('close').onclick = closeModal;

$('modal').onclick = e => {
  if (e.target === $('modal')) closeModal();
};

function closeModal() {
  $('modal').classList.remove('open');
  $('modal').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

$('share').onclick = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Balaji Digital Seva',
        text: 'Deepak Mishra - VLE',
        url: location.href
      });
    } catch (e) {}
  } else {
    navigator.clipboard?.writeText(location.href);
    showToast(t('Link copied', 'Link copy ho gaya'));
  }
};

$('theme').onclick = () => {
  document.body.classList.toggle('dark');
  $('theme').textContent = document.body.classList.contains('dark') ? '☀' : '☾';
};

$('lang').onclick = () => {
  langMode = langMode === 'en' ? 'hi' : 'en';
  localStorage.setItem('bds-lang', langMode);
  setLanguage();
};

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  $('installBtn').hidden = false;
});

$('installBtn').onclick = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    $('installBtn').hidden = true;
    return;
  }

  showToast(t(
    'Use browser menu → Add to Home Screen / Install App.',
    'Browser menu → Add to Home Screen / Install App par tap karein.'
  ));
};

window.addEventListener('appinstalled', () => {
  $('installBtn').hidden = true;
  showToast(t(
    'Balaji Digital Seva added to Home Screen.',
    'Balaji Digital Seva Home Screen par add ho gaya.'
  ));
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

function showToast(text) {
  $('toast').textContent = text;
  $('toast').classList.add('show');
  setTimeout(() => $('toast').classList.remove('show'), 2800);
}

setLanguage();

/* Gallery slider + lightbox */
(function() {
  const slides = [...document.querySelectorAll('.gallery-slide')];
  const dots = [...document.querySelectorAll('.gallery-dots button')];
  const prev = document.querySelector('.gallery-prev');
  const next = document.querySelector('.gallery-next');

  let current = 0;
  let timer;

  function show(n) {
    if (!slides.length) return;

    current = (n + slides.length) % slides.length;

    slides.forEach((s, i) => {
      s.classList.toggle('active', i === current);
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => show(current + 1), 4500);
  }

  if (slides.length) {
    prev?.addEventListener('click', e => {
      e.stopPropagation();
      show(current - 1);
      restart();
    });

    next?.addEventListener('click', e => {
      e.stopPropagation();
      show(current + 1);
      restart();
    });

    dots.forEach((d, i) => {
      d.addEventListener('click', () => {
        show(i);
        restart();
      });
    });

    slides.forEach(s => {
      s.querySelector('img')?.addEventListener('click', function() {
        const b = document.getElementById('galleryLightbox');
        const p = document.getElementById('galleryPreview');

        if (b && p) {
          p.src = this.src;
          b.hidden = false;
        }
      });
    });

    show(0);
    restart();
  }

  const close = document.getElementById('galleryClose');
  const box = document.getElementById('galleryLightbox');

  close?.addEventListener('click', () => {
    box.hidden = true;
  });

  box?.addEventListener('click', e => {
    if (e.target === box) box.hidden = true;
  });
})();
