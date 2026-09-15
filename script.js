const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('bhanu-theme');
root.dataset.theme=savedTheme||'dark';
function updateThemeMeta(){document.querySelector('meta[name="theme-color"]').setAttribute('content',root.dataset.theme==='light'?'#f4f8fd':'#06101e')}
updateThemeMeta();
themeToggle.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('bhanu-theme',root.dataset.theme);updateThemeMeta()});

const menuBtn=document.getElementById('menuBtn');
const mobileNav=document.getElementById('mobileNav');
menuBtn.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.nav-link')];
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(n=>n.classList.toggle('active',n.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const projectData={
 brc:{title:'British Red Cross — ITSM & CSM',text:'Migrated SOW to CSM Workspace and customized Employee Center experiences while supporting ITSM and CSM service delivery.',bullets:['CSM Workspace and related configurations','Employee Center and custom widgets','Service Catalog and Request Management','Client Scripts, Business Rules, ACLs and Declarative Actions']},
 charter:{title:'Charter House — CSM',text:'Developed and customized CSM solutions around Case Types, Workspace, Portal and Service Catalog capabilities.',bullets:['Workspace configurations using UI Builder','Custom Portal development and portal configuration','Case Types and Service Catalog','Client Scripts, UI Policies, Notifications, ACLs and Flow Designer']},
 arsenal:{title:'Arsenal — ITSM & Portals',text:'Customized Employee Center and Customer Support portals and delivered Mobile Agent solutions for ITSM requirements.',bullets:['Employee Center customization','Customer Support / CSM portal work','Mobile Agent solutions','ITSM process configuration']}
};
const modal=document.getElementById('projectModal');
function openProject(key){const p=projectData[key];if(!p)return;document.getElementById('modalTitle').textContent=p.title;document.getElementById('modalText').textContent=p.text;document.getElementById('modalBullets').innerHTML=p.bullets.map(x=>`<div>✦ ${x}</div>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeProject(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.project-card').forEach(c=>c.addEventListener('click',()=>openProject(c.dataset.project)));
document.getElementById('viewAll').addEventListener('click',()=>{openProject('charter');document.getElementById('modalTitle').textContent='Selected ServiceNow Portfolio Projects';document.getElementById('modalText').textContent='The resume includes a broader set of ServiceNow implementations across CSM, ITSM, portals, workspaces, mobile and integrations.';document.getElementById('modalBullets').innerHTML=['Charterhouse (CSM)','British Red Cross (ITSM & CSM)','Arsenal (ITSM & Portals)','Alan Turing Institute (CSM)','MSX (CSM & Custom Application)','Kerno (ITSM & CSM)','Novuna (ITSM)','ICT (Mobile Agent and Now Mobile)'].map(x=>`<div>✦ ${x}</div>`).join('')});
modal.addEventListener('click',e=>{if(e.target.hasAttribute('data-close'))closeProject()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProject()});

const form=document.getElementById('contactForm');
form.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const email=document.getElementById('email').value.trim();const subject=document.getElementById('subject').value;const message=document.getElementById('message').value.trim();const body=`Hi Bhanu,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`;window.location.href=`mailto:bhanuvamshi0211@gmail.com?subject=${encodeURIComponent(subject+' — Portfolio enquiry')}&body=${encodeURIComponent(body)}`;document.getElementById('formStatus').textContent='Opening your email client…'});
