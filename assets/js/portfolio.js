'use strict';
/* ============================================================
   PORTFOLIO V7  —  Brian Rizqi P.D.
   Left-nav numbered · Circular next-btn · Timeline · Tilt
   ============================================================ */

/* ── THEME ─────────────────────────────────────────────── */
const html = document.documentElement;
(function(){ html.setAttribute('data-theme', localStorage.getItem('br-theme') || 'dark'); })();
document.getElementById('themeBtn')?.addEventListener('click', () => {
    const t = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', t); localStorage.setItem('br-theme', t);
});

/* ── WORKS DATA ─────────────────────────────────────────── */
const WORKS = [
    ['SSO Rootpixel','Single sign-on terpusat untuk semua platform Rootpixel.'],
    ['Membership Rootpixel','Marketplace produk digital internal Rootpixel.'],
    ['Vodub (Voice Dubber)','Marketplace voice over — klien & talent VO profesional.'],
    ['Web Survey','Platform survei online untuk mencari & mengelola responden.'],
    ['Jo-Florist','Toko bunga online berbasis di Jember.'],
    ['Arjuna Ristekdikti','Sistem akreditasi jurnal Kementerian Ristekdikti.'],
    ['TSA National Foundation','Website profil resmi TSA National Foundation.'],
    ['Gizihub.com','Portal e-commerce dan konsultasi gizi digital.'],
    ['Pixelpaper','E-commerce merchandise & kaos kreatif Rootpixel.'],
    ['Point of Sales Toko Emas','Sistem kasir modern untuk toko emas di Kalisat.'],
    ['Kalsa','Kalkulator analisis pergerakan aset kripto.'],
    ['Undangan Pernikahan','Undangan digital dengan fitur ucapan online.'],
    ['SPPK Pakan Sapi','SPK pemilihan pakan sapi (TOPSIS).'],
    ['Aplikasi Prosalina Radio','Streaming Radio Prosalina Jember berbasis mobile.'],
    ['Aplikasi Kiss FM','Streaming Radio Kiss FM Jember berbasis mobile.'],
    ['CRM TOG Soft Bank (SG)','Monitoring aktivitas harian TOG Soft Bank, Singapore.'],
    ['Talentgrowth','Platform pembelajaran & kuis interaktif untuk jobseeker.'],
    ['Work Order System','Monitoring real-time engineer dan sales lapangan.'],
    ['Geram Apps Pasuruan','SPK epidemi DBD Kab. Pasuruan.'],
    ['Apotek Rachman Farma','Sistem kasir apotek — laporan, faktur, stok opnam.'],
    ['PPE Butar PDSI PERTAMINA','Monitoring APD crew PERTAMINA.'],
    ['INVEE.NET','Platform pembuatan undangan digital serbaguna.'],
    ['Levidio Market','Marketplace produk desain digital Levidio.'],
    ['RISS Radana','Sistem pengajuan pinjaman platform Radana.'],
];

function renderWorks() {
    const strip = document.getElementById('worksStrip'); if (!strip) return;
    strip.innerHTML = WORKS.map(([title, desc], i) => `
        <div class="wmini">
            <div class="wthumb">
                <img src="assets/images/work-${i}.png" alt="${title}" loading="lazy" onerror="this.style.display='none'">
                <span class="widx">${String(i+1).padStart(2,'0')}</span>
            </div>
            <div class="wbody"><h4>${title}</h4><p>${desc}</p></div>
        </div>`).join('');
    initDragScroll();
}

function initDragScroll() {
    const w = document.getElementById('worksWrap'); if (!w) return;
    let dn=false, sx=0, sl=0;
    w.addEventListener('mousedown', e => { dn=true; sx=e.pageX-w.offsetLeft; sl=w.scrollLeft; });
    w.addEventListener('mouseleave', () => dn=false);
    w.addEventListener('mouseup', () => dn=false);
    w.addEventListener('mousemove', e => {
        if (!dn) return; e.preventDefault();
        w.scrollLeft = sl - (e.pageX - w.offsetLeft - sx) * 1.5;
    });
}

/* ── LOADER ─────────────────────────────────────────────── */
function initLoader() {
    const loader = document.getElementById('loader');
    const fill = document.getElementById('loaderFill');
    const pctEl = document.getElementById('loaderPct');
    if (!loader) return;
    let pct = 0;
    const iv = setInterval(() => {
        pct = Math.min(pct + Math.random() * 18, 88);
        if (fill) fill.style.width = pct + '%';
        if (pctEl) pctEl.textContent = Math.round(pct) + '%';
    }, 120);
    const hide = () => {
        clearInterval(iv);
        if (fill) fill.style.width = '100%';
        if (pctEl) pctEl.textContent = '100%';
        setTimeout(() => { loader.classList.add('out'); FP.revealSlide(0); }, 450);
    };
    window.addEventListener('load', () => setTimeout(hide, 600));
    setTimeout(hide, 2800);
}

/* ── CURSOR ─────────────────────────────────────────────── */
(function(){
    const el = document.getElementById('cursor');
    if (!el || window.matchMedia('(pointer:coarse)').matches) return;
    const dot = el.querySelector('.cursor-dot'), ring = el.querySelector('.cursor-ring');
    let mx=-200, my=-200, rx=-200, ry=-200;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
    (function tick(){
        rx += (mx-rx)*.10; ry += (my-ry)*.10;
        dot.style.transform  = `translate(calc(${mx}px - 50%),calc(${my}px - 50%))`;
        ring.style.transform = `translate(calc(${rx}px - 50%),calc(${ry}px - 50%))`;
        requestAnimationFrame(tick);
    })();
    document.querySelectorAll('a,button,[data-go],.wmini,.ski,.svcc,.edc').forEach(e => {
        e.addEventListener('mouseenter', () => document.body.classList.add('ch'));
        e.addEventListener('mouseleave', () => document.body.classList.remove('ch'));
    });
})();

/* ── CANVAS PARTICLES ───────────────────────────────────── */
(function(){
    const canvas = document.getElementById('heroCanvas'); if (!canvas) return;
    const ctx = canvas.getContext('2d');
    function resize(){ canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
    window.addEventListener('resize', resize); resize();
    class P {
        constructor(){ this.reset(true); }
        reset(init){
            this.x = Math.random()*canvas.width;
            this.y = init ? Math.random()*canvas.height : canvas.height+5;
            this.vx = (Math.random()-.5)*.2; this.vy = -(Math.random()*.3+.1);
            this.r = Math.random()*1.3+.4; this.life=0; this.maxLife=Math.random()*550+200;
            this.maxA = Math.random()*.4+.1;
        }
        get a(){ const p=this.life/this.maxLife; return p<.2?(p/.2)*this.maxA:p>.75?((1-p)/.25)*this.maxA:this.maxA; }
        update(){ this.x+=this.vx; this.y+=this.vy; this.life++; if(this.life>=this.maxLife) this.reset(false); }
        draw(){
            const dk=html.getAttribute('data-theme')==='dark';
            ctx.beginPath(); ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
            ctx.fillStyle = dk?`rgba(79,142,247,${this.a})`:`rgba(37,99,235,${this.a*.6})`;
            ctx.fill();
        }
    }
    const pts = Array.from({length:48},()=>new P());
    let mx=0,my=0;
    document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
    (function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const dk=html.getAttribute('data-theme')==='dark';
        const gr=ctx.createRadialGradient(mx,my,0,mx,my,200);
        gr.addColorStop(0,dk?'rgba(79,142,247,0.05)':'rgba(37,99,235,0.03)');
        gr.addColorStop(1,'transparent');
        ctx.fillStyle=gr; ctx.fillRect(0,0,canvas.width,canvas.height);
        pts.forEach(p=>{p.update();p.draw();});
        for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
            const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
            if(d<100){ ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);
                ctx.strokeStyle=dk?`rgba(79,142,247,${(1-d/100)*.07})`:`rgba(37,99,235,${(1-d/100)*.04})`;
                ctx.lineWidth=.5;ctx.stroke(); }
        }
        requestAnimationFrame(draw);
    })();
})();

/* ── MOUSE PARALLAX ─────────────────────────────────────── */
(function(){
    if (window.matchMedia('(pointer:coarse)').matches) return;
    let mx=0,my=0,cx=window.innerWidth/2,cy=window.innerHeight/2;
    document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
    (function tick(){
        const dx=(mx-cx)/cx, dy=(my-cy)/cy;
        document.querySelectorAll('.orb-a').forEach(el=>{ el.style.transform=`translate(${dx*20}px,${dy*14}px)`; });
        document.querySelectorAll('.orb-b').forEach(el=>{ el.style.transform=`translate(${dx*12}px,${dy*9}px)`; });
        document.querySelectorAll('.slide-ghost').forEach(el=>{ el.style.transform=`translate(${dx*8}px,${dy*5}px)`; });
        requestAnimationFrame(tick);
    })();
})();

/* ── 3D TILT ─────────────────────────────────────────────── */
function init3DTilt(){
    document.querySelectorAll('.svcc,.edc,.wmini').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r=card.getBoundingClientRect();
            const x=(e.clientX-r.left-r.width/2)/(r.width/2);
            const y=(e.clientY-r.top-r.height/2)/(r.height/2);
            card.style.transform=`perspective(600px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave',()=>{ card.style.transform=''; });
    });
}

/* ── COUNTER ─────────────────────────────────────────────── */
function animCount(el){
    if (el.dataset.counted) return; el.dataset.counted='1';
    const target=+el.dataset.count, dur=1400, t0=performance.now();
    (function tick(now){ const p=Math.min((now-t0)/dur,1); el.textContent=Math.round((1-Math.pow(1-p,3))*target); if(p<1) requestAnimationFrame(tick); })(t0);
}

/* ── GHOST NUMBERS ──────────────────────────────────────── */
function injectGhostNums(){
    document.querySelectorAll('.fp-slide').forEach((slide,i) => {
        const g=document.createElement('div');
        g.className='slide-ghost';
        g.textContent=String(i+1).padStart(2,'0');
        slide.appendChild(g);
    });
}

/* ── FULLPAGE ENGINE ─────────────────────────────────────── */
const LABELS=['Home','About','Education','Experience','Skills','Services','Works','Contact'];

const FP={
    current:0, busy:false, slides:[], total:0,

    init(){
        this.slides=Array.from(document.querySelectorAll('.fp-slide'));
        this.total=this.slides.length;
        this._bindEvents(); this._updateUI();
    },

    go(idx){
        if(this.busy||idx<0||idx>=this.total||idx===this.current) return;
        this.busy=true;
        const dir = idx > this.current ? 'up' : 'down';
        const prev = this.current;
        const outSlide = this.slides[prev];
        const inSlide  = this.slides[idx];

        // Animate out the current slide
        outSlide.classList.add(`is-leaving-${dir}`);

        // Prepare incoming slide (visible but behind)
        inSlide.classList.add('active', `is-entering-${dir}`);
        this._resetSlide(idx);

        this.current = idx;
        this._updateUI();

        const LEAVE_MS = 420, ENTER_REVEAL = 300;

        setTimeout(()=>{
            // Clean up outgoing
            outSlide.classList.remove('active',`is-leaving-${dir}`);
            outSlide.style.transform='';
            outSlide.style.opacity='';
        }, LEAVE_MS);

        setTimeout(()=>{
            // Remove animation class once done
            inSlide.classList.remove(`is-entering-${dir}`);
            this.revealSlide(idx);
            this.busy=false;
        }, ENTER_REVEAL);
    },

    revealSlide(idx){
        const slide=this.slides[idx];
        slide.querySelectorAll('.sr,.sr-l,.sr-r').forEach(el=>{
            el.style.transitionDelay=`${parseInt(el.getAttribute('data-d')||'0',10)}ms`;
            el.classList.add('in');
        });
        slide.querySelectorAll('[data-count]').forEach(animCount);
        init3DTilt();
    },

    _resetSlide(idx){
        this.slides[idx].querySelectorAll('.sr,.sr-l,.sr-r').forEach(el=>{
            el.style.transitionDelay='0ms'; el.classList.remove('in');
        });
    },

    _updateUI(){
        // Left nav
        document.querySelectorAll('.sbn').forEach((item,i)=>item.classList.toggle('active',i===this.current));
        // Next button
        const nb=document.getElementById('nextBtn'), nl=document.getElementById('nextLabel');
        if(nb){
            if(this.current>=this.total-1){
                nb.classList.add('last');
                if(nl) nl.textContent='TOP';
                nb.querySelector('svg').style.transform='rotate(180deg)';
            } else {
                nb.classList.remove('last');
                if(nl) nl.textContent='SCROLL';
                nb.querySelector('svg').style.transform='';
            }
        }
    },

    _bindEvents(){
        // Wheel — timestamp cooldown + accumulated delta to prevent skipping
        let lastNav = 0;
        let accDelta = 0;
        let resetTimer = null;
        const COOLDOWN = 900;   // ms minimum between navigations
        const THRESHOLD = 60;   // accumulated deltaY needed to trigger

        window.addEventListener('wheel', e=>{
            if(document.getElementById('mobOverlay')?.classList.contains('open')) return;
            // Let horizontal scroll on works strip pass through
            const wrap=this.slides[this.current]?.querySelector('.wstrap');
            if(wrap && Math.abs(e.deltaX)>Math.abs(e.deltaY)) return;
            e.preventDefault();

            const now = Date.now();
            // Hard cooldown gate — don't even accumulate during transition
            if(now - lastNav < COOLDOWN) return;

            accDelta += e.deltaY;

            // Reset accumulator if user pauses scrolling
            clearTimeout(resetTimer);
            resetTimer = setTimeout(()=>{ accDelta=0; }, 200);

            if(Math.abs(accDelta) >= THRESHOLD){
                const dir = accDelta > 0 ? 1 : -1;
                accDelta = 0;
                lastNav = now;
                this.go(this.current + dir);
            }
        },{passive:false});

        // Touch
        let ty=0;
        window.addEventListener('touchstart',e=>{ty=e.touches[0].clientY;},{passive:true});
        window.addEventListener('touchend',e=>{
            const dy=ty-e.changedTouches[0].clientY; if(Math.abs(dy)<60) return;
            this.go(this.current+(dy>0?1:-1));
        },{passive:true});

        // Keyboard
        window.addEventListener('keydown',e=>{
            if(e.key==='ArrowDown'||e.key==='PageDown'){e.preventDefault();this.go(this.current+1);}
            if(e.key==='ArrowUp'  ||e.key==='PageUp')  {e.preventDefault();this.go(this.current-1);}
        });

        // Left nav dots
        document.querySelectorAll('.sbn').forEach(item=>item.addEventListener('click',()=>this.go(+item.dataset.target)));

        // Next/top circular button
        document.getElementById('nextBtn')?.addEventListener('click',()=>{
            if(this.current>=this.total-1) this.go(0);
            else this.go(this.current+1);
        });

        // data-go buttons
        document.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>this.go(+btn.dataset.go)));

        // Logo → home
        document.getElementById('navLogo')?.addEventListener('click',e=>{e.preventDefault();this.go(0);});

        // Mobile overlay
        const ham=document.getElementById('hamburger'),ov=document.getElementById('mobOverlay'),mc=document.getElementById('mobClose');
        ham?.addEventListener('click',()=>{ov.classList.toggle('open');ham.classList.toggle('open');});
        mc?.addEventListener('click',()=>{ov.classList.remove('open');ham.classList.remove('open');});
        document.querySelectorAll('.mob-link').forEach(l=>l.addEventListener('click',()=>{
            this.go(+l.dataset.target);ov.classList.remove('open');ham.classList.remove('open');
        }));
    },
};

/* ── INIT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded',()=>{
    renderWorks();
    injectGhostNums();
    FP.init();
    initLoader();
});
