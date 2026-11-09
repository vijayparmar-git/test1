(function(){
document.documentElement.className="js";
var l=document.getElementById('links'),tg=document.getElementById('tog');
if(l&&tg){tg.onclick=function(){tg.setAttribute('aria-expanded',l.classList.toggle('open'))};
l.addEventListener('click',function(){l.classList.remove('open');tg.setAttribute('aria-expanded','false')});}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});document.querySelectorAll('.sg,.ps,.pr,.wg>div,.job,.head').forEach(function(e){e.classList.add('rv');io.observe(e)})}
})();
(function(){
var S={"I need 24×7 monitoring and response":[["Managed Security Operations Center","Managed Detection & Response","AI-Assisted Security Operations"],"Managed SOC"],
"I want to find weaknesses before attackers do":[["Vulnerability Assessment & Management","Penetration Testing"],"VAPT"],
"We run workloads in the cloud":[["Cloud Security","Identity & Access Management"],"Cloud Security"],
"Phishing and email fraud worry me":[["Email Security","Endpoint Security"],"Cybersecurity Assessment"],
"I need to prepare for HIPAA, DPDP or ISO":[["Compliance Services","Vulnerability Assessment & Management"],"Consulting"],
"I need to secure my network and remote access":[["Network Security","Identity & Access Management"],"Cybersecurity Assessment"]};
var o=document.getElementById('opts'),r=document.getElementById('res'),t=document.getElementById('t');
function setTopic(v){for(var i=0;i<t.options.length;i++)if(t.options[i].text===v)t.selectedIndex=i}
Object.keys(S).forEach(function(k){var b=document.createElement('button');b.type='button';b.textContent=k;b.setAttribute('aria-pressed','false');
b.onclick=function(){[].forEach.call(o.children,function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');
r.innerHTML='<h3>Suggested services</h3><ul>'+S[k][0].map(function(s){return '<li>'+s.replace(/&/g,'&amp;')+'</li>'}).join('')+'</ul><a class="btn btn-p" href="#contact" data-t="'+S[k][1]+'">Request Security Assessment</a>'};o.appendChild(b)});
document.addEventListener('click',function(e){var a=e.target.closest('[data-t]');if(a)setTopic(a.getAttribute('data-t'))});
})();

(function(){
var f=document.getElementById('cf'),pc=document.getElementById('pc'),sb=f.querySelector('button[type=submit]'),
fs=document.getElementById('st'),cc=document.getElementById('cc'),co=document.getElementById('cco'),
cw=document.getElementById('cw'),cqq=document.getElementById('cqq'),cq=document.getElementById('cq'),
cv=document.getElementById('cv'),cr=document.getElementById('cr'),cm=document.getElementById('cm'),
ans=0,verified=false;
function rnd(n){return Math.floor(Math.random()*n)}
function newQ(){var a=2+rnd(8),b=1+rnd(8),m=rnd(3);
 if(m===0){ans=a+b;cqq.textContent=a+' + '+b}
 else if(m===1){if(a<b){var t=a;a=b;b=t}ans=a-b;cqq.textContent=a+' \u2212 '+b}
 else{b=2+rnd(4);ans=a*b;cqq.textContent=a+' \u00D7 '+b}
 cq.value='';verified=false;sync()}
function say(t,c){cm.textContent=t;cm.className='fn'+(c?' '+c:'')}
function sync(){var on=pc.checked&&verified;sb.disabled=!on;sb.setAttribute('aria-disabled',String(!on));cq.disabled=verified;cv.disabled=verified}
function check(){if(verified)return;var v=cq.value.trim();
 if(!/^-?[0-9]+$/.test(v)){say('Please type the answer as a number.','err');return}
 if(parseInt(v,10)===ans){verified=true;say('Verified. You can now send your request.','ok');sync();sb.focus()}
 else{newQ();say('Incorrect answer. Here is a new question.','err');cq.focus()}}
pc.addEventListener('change',function(){
 if(pc.checked){cw.hidden=false;newQ();say('');cq.focus()}
 else{cw.hidden=true;verified=false;cq.value='';say('');sync()}});
cv.addEventListener('click',check);
cq.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();check()}});
cr.addEventListener('click',function(){if(!verified){newQ();say('');cq.focus()}});
cc.addEventListener('change',function(){var o=cc.value==='Other';co.hidden=!o;co.required=o;if(!o)co.value=''});
f.addEventListener('reset',function(){setTimeout(function(){cw.hidden=true;verified=false;cq.value='';say('');co.hidden=true;co.required=false;sync()},0)});
f.addEventListener('submit',function(x){
 x.preventDefault();
 if(f.querySelector('.hp').value)return;
 if(!pc.checked){fs.textContent='Please tick the Privacy Policy and Terms box.';fs.className='show err';return}
 if(!verified){fs.textContent='Please complete the security check first.';fs.className='show err';return}
 fs.className='';sb.disabled=true;sb.textContent='Sending\u2026';
 fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){
  if(!r.ok)throw 0;fs.textContent='Thank you. Your enquiry has been submitted and we will get back to you.';fs.className='show ok';f.reset();
 }).catch(function(){fs.textContent='Something went wrong. Please try again or email info@techandsupport.com directly.';fs.className='show err';newQ()})
 .then(function(){sb.textContent='Request Security Assessment';sync()});
});
sync();
})();
