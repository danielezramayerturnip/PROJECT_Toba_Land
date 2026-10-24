var WA = '6281234567890'; /* GANTI: nomor WhatsApp Bapak, format 62 tanpa 0 */
var ST = { ok: 'Tersedia', bk: 'Booking', sold: 'Terjual' };

document.querySelectorAll('.wa-link').forEach(function (a) {
  a.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Halo Pak, saya tertarik dengan kavling di Tobaland.');
  a.target = '_blank';
});

/* DATA KAVLING: bentuk (p) dan luas (a) diambil dari PDF peta asli */
var RAW = [
  {"a":1300,"p":[[297.5,93.6],[259.4,113.5],[278.1,149.5],[290.8,145.2],[286.5,131.7],[298.5,127.2],[303.8,138.7],[326.3,129.8],[321.8,118.3],[307.1,100.3]]},
  {"a":521,"p":[[233.2,123.3],[220.0,128.4],[211.6,135.8],[228.2,162.4],[254.6,147.3],[243.3,127.2],[235.9,127.4]]},
  {"a":100,"p":[[298.0,128.1],[287.2,132.5],[292.0,143.3],[302.8,138.9]]},
  {"a":100,"p":[[317.0,139.7],[305.9,144.2],[311.5,154.5],[322.3,149.7]]},
  {"a":433,"p":[[342.2,130.5],[333.3,133.4],[327.5,133.4],[326.1,130.8],[316.3,134.9],[330.4,161.5],[353.0,151.7]]},
  {"a":200,"p":[[357.1,126.0],[343.9,130.1],[354.7,150.9],[365.9,145.9]]},
  {"a":200,"p":[[264.4,164.1],[251.2,171.3],[263.5,193.9],[276.9,186.7]]},
  {"a":100,"p":[[299.2,162.0],[289.1,166.3],[295.1,177.3],[305.0,173.0]]},
  {"a":273,"p":[[345.8,161.5],[331.4,168.0],[345.5,191.0],[359.5,184.3]]},
  {"a":200,"p":[[250.5,172.3],[228.2,183.3],[233.0,194.6],[255.6,184.0]]},
  {"a":200,"p":[[290.8,186.4],[281.5,192.0],[295.4,214.8],[304.0,209.7],[297.1,200.6]]},
  {"a":100,"p":[[307.9,178.5],[298.3,182.6],[304.5,194.1],[314.1,189.8]]},
  {"a":100,"p":[[337.6,181.2],[327.8,185.5],[333.8,196.5],[344.1,191.5]]},
  {"a":200,"p":[[395.7,174.2],[372.6,185.0],[379.1,194.8],[401.7,184.3]]},
  {"a":150,"p":[[332.1,204.0],[323.0,208.5],[332.6,226.0],[342.2,219.8]]},
  {"a":240,"p":[[409.8,192.0],[401.9,203.7],[422.3,217.6],[430.2,205.9]]},
  {"a":200,"p":[[437.9,198.2],[423.8,218.4],[433.1,225.1],[447.0,204.7]]},
  {"a":150,"p":[[359.7,233.0],[379.4,246.9],[385.4,240.4],[367.6,227.7]]},
  {"a":129,"p":[[369.0,226.5],[386.6,239.2],[392.3,232.8],[376.2,221.7]]},
  {"a":219,"p":[[395.0,209.0],[377.9,220.5],[393.5,231.3],[406.2,217.2]]},
  {"a":150,"p":[[407.9,218.1],[395.0,232.3],[403.8,238.5],[416.6,224.6]]},
  {"a":150,"p":[[418.2,225.3],[405.8,239.5],[414.6,246.0],[427.1,231.6]]},
  {"a":150,"p":[[330.4,253.2],[346.0,263.9],[353.7,254.8],[341.7,245.7]]},
  {"a":380,"p":[[388.7,262.8],[373.1,251.7],[366.7,259.4],[360.9,259.4],[355.1,255.6],[347.5,264.9],[369.3,280.3],[375.5,271.9],[381.8,271.9]]},
  {"a":150,"p":[[394.0,233.7],[380.8,248.1],[389.7,254.4],[402.9,240.0]]},
  {"a":318,"p":[[414.6,247.9],[401.4,262.5],[422.3,277.1],[434.3,261.8]]},
  {"a":240,"p":[[478.5,248.8],[470.6,260.6],[490.9,274.5],[499.1,263.0]]},
  {"a":170,"p":[[215.7,272.6],[206.6,282.9],[213.3,297.1],[225.3,291.3]]},
  {"a":326,"p":[[232.8,258.4],[223.2,263.7],[216.9,270.9],[227.0,290.3],[244.5,279.8]]},
  {"a":200,"p":[[299.9,274.0],[320.3,287.9],[328.3,278.1],[311.5,266.3]]},
  {"a":100,"p":[[324.2,257.5],[312.9,265.1],[322.7,272.1],[331.1,262.3]]},
  {"a":100,"p":[[389.9,263.7],[383.0,273.1],[392.3,279.3],[399.3,270.2]]},
  {"a":252,"p":[[434.6,263.0],[423.8,279.1],[440.6,289.1],[450.6,272.3]]},
  {"a":170,"p":[[205.4,284.1],[192.9,299.5],[191.5,308.6],[202.8,304.7],[203.2,302.1],[211.9,298.0]]},
  {"a":200,"p":[[226.3,293.0],[204.2,303.8],[208.0,313.1],[230.4,302.8]]},
  {"a":320,"p":[[246.7,281.0],[227.7,291.1],[234.4,309.8],[255.3,296.8]]},
  {"a":200,"p":[[271.1,293.0],[271.4,295.6],[289.1,308.1],[298.5,299.9],[298.5,297.1],[283.1,286.5]]},
  {"a":400,"p":[[313.1,290.6],[305.7,299.5],[300.2,299.5],[292.0,309.3],[312.9,323.9],[329.0,301.9]]},
  {"a":137,"p":[[329.7,279.1],[321.8,288.9],[334.5,297.5],[341.9,287.5]]},
  {"a":280,"p":[[362.3,284.3],[346.3,305.5],[359.2,314.8],[375.0,293.2]]},
  {"a":200,"p":[[408.2,293.0],[401.4,302.6],[420.6,316.0],[427.4,306.7]]},
  {"a":200,"p":[[415.8,282.2],[409.1,291.5],[428.3,305.2],[435.0,295.6]]},
  {"a":100,"p":[[203.2,306.2],[191.7,310.3],[196.3,320.8],[207.6,316.5]]},
  {"a":100,"p":[[208.3,317.9],[196.8,322.3],[201.3,332.8],[212.6,327.8]]},
  {"a":1000,"p":[[209.0,313.9],[230.4,384.6],[233.0,384.9],[254.1,357.3],[229.2,305.9]]},
  {"a":400,"p":[[330.4,302.8],[314.3,324.9],[333.1,337.9],[348.7,315.3]]},
  {"a":201,"p":[[396.6,308.3],[389.7,318.4],[409.4,331.9],[416.1,322.0]]},
  {"a":600,"p":[[437.7,306.4],[423.3,326.8],[455.7,347.7],[469.4,327.1]]},
  {"a":200,"p":[[284.6,333.8],[269.5,351.3],[279.3,359.0],[293.9,340.3]]},
  {"a":400,"p":[[419.7,331.9],[404.8,352.7],[425.7,365.9],[439.4,344.6]]},
  {"a":400,"p":[[267.3,352.7],[252.0,373.1],[274.0,388.5],[293.2,361.6],[283.6,361.6],[283.4,358.3],[279.3,360.4]]},
  {"a":215,"p":[[395.7,365.2],[389.0,374.8],[410.8,388.7],[417.8,378.2]]},
  {"a":544,"p":[[489.7,371.7],[473.4,396.6],[498.4,412.7],[513.0,387.0]]},
  {"a":442,"p":[[168.4,392.6],[173.5,457.4],[198.0,468.9]]},
  {"a":754,"p":[[230.4,391.4],[227.5,391.6],[213.3,423.3],[223.4,452.1],[226.3,451.6],[256.5,411.5],[256.3,408.6]]}
];

var PPM = [0.8, 0.8, 0.8, 0.8]; /* harga asli: Rp 80 jt per kavling ±100 m² = Rp 800.000/m², dalam juta */

var plots = RAW.map(function (d, i) {
  var xs = d.p.map(function (q) { return q[0]; }),
      ys = d.p.map(function (q) { return q[1]; }),
      x = Math.min.apply(0, xs),
      y = Math.min.apply(0, ys);
  return {
    id: 'K-' + (i < 9 ? '0' : '') + (i + 1),
    area: d.a,
    pts: d.p,
    b: {
      x: x,
      y: y,
      w: Math.max.apply(0, xs) - x,
      h: Math.max.apply(0, ys) - y
    },
    status: i % 5 === 4 ? 'sold' : (i % 7 === 3 ? 'bk' : 'ok'),
    ppm: PPM[i % 4] * 1e6,
    legal: 'SHM', /* semua kavling SHM */
    road: ['Jalan 3,5 m', 'Jalan 4,5 m', 'Jalan 5 m'][i % 3]
  };
});

function P(a) {
  return a.map(function (q) { return q[0] + ',' + q[1]; }).join(' ');
}

function rp(v) {
  return 'Rp ' + Math.round(v).toLocaleString('id-ID');
}

var svg = document.getElementById('map'),
    VB = { x: 0, y: 0, w: 842, h: 595 },
    F = { st: '', pr: '', ar: '' };

function build() {
  var h = '<image href="peta.png" x="0" y="0" width="842" height="595"/>';
  plots.forEach(function (p) {
    h += '<polygon class="plot ' + p.status + '" id="' + p.id + '" tabindex="0" role="button" aria-label="Kavling ' + p.id + ', ' + p.area + ' meter persegi, ' + ST[p.status] + '" points="' + P(p.pts) + '"/>';
  });
  svg.innerHTML = h;
}

/* kunci: area pandang tidak boleh keluar dari gambar peta (842 x 595) */
function clampVB() {
  var mx = 842 - VB.w, my = 595 - VB.h;
  VB.x = mx < 0 ? mx / 2 : Math.min(Math.max(VB.x, 0), mx);
  VB.y = my < 0 ? my / 2 : Math.min(Math.max(VB.y, 0), my);
}

function setVB() {
  clampVB();
  svg.setAttribute('viewBox', VB.x + ' ' + VB.y + ' ' + VB.w + ' ' + VB.h);
  svg.classList.toggle('z', VB.w < 300);
}

function anim(t) {
  var f = Object.assign({}, VB),
      s = performance.now(),
      d = matchMedia('(prefers-reduced-motion:reduce)').matches ? 1 : 450;
  requestAnimationFrame(function step(now) {
    var k = Math.min(1, (now - s) / d);
    k = 1 - Math.pow(1 - k, 3);
    VB = {
      x: f.x + (t.x - f.x) * k,
      y: f.y + (t.y - f.y) * k,
      w: f.w + (t.w - f.w) * k,
      h: f.h + (t.h - f.h) * k
    };
    setVB();
    if (k < 1) requestAnimationFrame(step);
  });
}

function zoomBox(cx, cy, w) {
  var r = svg.getBoundingClientRect(),
      ar = r.width / r.height,
      h = w / ar;
  anim({ x: cx - w / 2, y: cy - h / 2, w: w, h: h });
}

function select(id, nohash) {
  var p = plots.filter(function (q) { return q.id === id; })[0];
  if (!p) return;
  document.querySelectorAll('.plot').forEach(function (e) {
    e.classList.toggle('sel', e.id === id);
  });
  zoomBox(p.b.x + p.b.w / 2, p.b.y + p.b.h / 2, Math.max(p.b.w * 4, 70));
  var msg = 'Halo Pak, saya tertarik dengan kavling ' + p.id + ' (' + p.area + ' m²) di Tobaland. Apakah masih tersedia?';
  var sh = 'https://wa.me/?text=' + encodeURIComponent('Lihat kavling ' + p.id + ' di Tobaland: ' + location.href.split('#')[0] + '#' + p.id);
  document.getElementById('panel').innerHTML =
    '<div class="top"><h3>Kavling ' + p.id + '</h3><span class="badge ' + p.status + '">' + ST[p.status] + '</span></div>' +
    '<div class="price">' + rp(p.area * p.ppm) + '</div><p class="sub">' + rp(p.ppm) + ' per m²</p>' +
    '<dl><div><dt>Luas</dt><dd>' + p.area.toLocaleString('id-ID') + ' m²</dd></div><div><dt>Legalitas</dt><dd>' + p.legal + '</dd></div><div><dt>Akses jalan</dt><dd>' + p.road + '</dd></div><div><dt>Lokasi</dt><dd>Tobaland, Bogor</dd></div></dl>' +
    '<a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/' + WA + '?text=' + encodeURIComponent(msg) + '">Tanya via WhatsApp</a>' +
    '<a class="btn" target="_blank" rel="noopener" href="' + sh + '">Bagikan kavling ini</a><p class="sub" style="margin:10px 0 0">Bisa dicicil, kurang dari 3 tahun.</p><p class="note">Harga mulai dari ukuran ±100 m²; status kavling masih data contoh.</p>';
  if (!nohash) {
    try { history.replaceState(null, '', '#' + id); } catch (e) { }
  }
}

/* ===== Tampilkan peta ===== */
build();
setVB();

/* ===== Klik / keyboard pada petak ===== */
var drag = null, moved = false;

svg.addEventListener('click', function (e) {
  if (moved) { moved = false; return; }
  var t = e.target.closest('.plot');
  if (t) select(t.id);
});
svg.addEventListener('keydown', function (e) {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('plot')) {
    e.preventDefault();
    select(e.target.id);
  }
});

/* ===== Tombol zoom ===== */
function zoomBy(f) {
  var w = Math.min(842, Math.max(60, VB.w * f));
  zoomBox(VB.x + VB.w / 2, VB.y + VB.h / 2, w);
}
document.getElementById('zi').onclick = function () { zoomBy(0.6); };
document.getElementById('zo').onclick = function () { zoomBy(1 / 0.6); };
document.getElementById('zr').onclick = function () { anim({ x: 0, y: 0, w: 842, h: 595 }); };

/* ===== Geser peta ===== */
svg.addEventListener('pointerdown', function (e) {
  drag = { x: e.clientX, y: e.clientY, vx: VB.x, vy: VB.y };
  moved = false;
});
window.addEventListener('pointermove', function (e) {
  if (!drag) return;
  var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  if (Math.abs(dx) + Math.abs(dy) > 5) moved = true;
  if (!moved) return;
  var r = svg.getBoundingClientRect(),
      s = Math.max(VB.w / r.width, VB.h / r.height);
  VB.x = drag.vx - dx * s;
  VB.y = drag.vy - dy * s;
  setVB();
});
window.addEventListener('pointerup', function () { drag = null; });

/* ===== Filter ===== */
function applyFilter() {
  var n = 0;
  plots.forEach(function (p) {
    var tot = p.area * p.ppm / 1e6, ok = true;
    if (F.st && p.status !== F.st) ok = false;
    if (F.pr === 'a' && tot >= 300) ok = false;
    if (F.pr === 'b' && (tot < 300 || tot > 600)) ok = false;
    if (F.pr === 'c' && tot <= 600) ok = false;
    if (F.ar === 'a' && p.area >= 150) ok = false;
    if (F.ar === 'b' && (p.area < 150 || p.area > 250)) ok = false;
    if (F.ar === 'c' && p.area <= 250) ok = false;
    document.getElementById(p.id).classList.toggle('dim', !ok);
    if (ok) n++;
  });
  document.getElementById('cnt').textContent = n + ' kavling cocok';
}

/* chip status */
var chipBox = document.getElementById('chips');
[['', 'Semua'], ['ok', 'Tersedia'], ['bk', 'Booking'], ['sold', 'Terjual']].forEach(function (c) {
  var b = document.createElement('button');
  b.className = 'chip';
  b.type = 'button';
  b.setAttribute('aria-pressed', c[0] === '' ? 'true' : 'false');
  b.textContent = c[1];
  b.onclick = function () {
    F.st = c[0];
    chipBox.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
    b.setAttribute('aria-pressed', 'true');
    document.getElementById('q-s').value = c[0];
    applyFilter();
  };
  chipBox.insertBefore(b, document.getElementById('cnt'));
});

/* form pencarian di hero */
document.getElementById('sf').addEventListener('submit', function (e) {
  e.preventDefault();
  F.pr = document.getElementById('q-p').value;
  F.ar = document.getElementById('q-a').value;
  F.st = document.getElementById('q-s').value;
  applyFilter();
  document.getElementById('siteplan').scrollIntoView();
});

applyFilter();

/* buka kavling dari link, misal index.html#K-05 */
if (location.hash.length > 1) select(decodeURIComponent(location.hash.slice(1)), true);

/* ===== TAMBAHAN DESAIN BARU ===== */

/* menu HP */
var burger = document.getElementById('burger'), menu = document.getElementById('menu');
if (burger) {
  burger.onclick = function () {
    var o = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', o);
  };
  menu.querySelectorAll('a').forEach(function (a) {
    a.onclick = function () { menu.classList.remove('open'); };
  });
}

/* angka statistik naik saat terlihat (ubah angka di atribut data-n pada HTML) */
var nums = document.querySelectorAll('[data-n]');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target, n = parseFloat(el.dataset.n), s = performance.now(), dec = String(n).indexOf('.') > -1;
      requestAnimationFrame(function t(now) {
        var k = Math.min(1, (now - s) / 1200);
        var v = n * (1 - Math.pow(1 - k, 3));
        el.textContent = (dec ? v.toFixed(1) : Math.round(v)) + (el.dataset.s || '');
        if (k < 1) requestAnimationFrame(t);
      });
      io.unobserve(el);
    });
  }, { threshold: .6 });
  nums.forEach(function (el) { io.observe(el); });
}

/* ===== DARK MODE ===== */
var themeBtn = document.getElementById('theme');
function paintTheme() {
  var d = document.documentElement.getAttribute('data-theme') === 'dark';
  themeBtn.textContent = d ? '☀️' : '🌙';
  themeBtn.setAttribute('aria-pressed', d);
}
themeBtn.onclick = function () {
  var t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('tema', t); } catch (e) { }
  paintTheme();
};
paintTheme();

/* ===== GALERI BANGUNAN ===== */
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.gi'));
  if (!items.length) return;
  var chipBox = document.getElementById('gchips'),
      cnt = document.getElementById('gcnt'),
      lb = document.getElementById('lb'),
      lbImg = document.getElementById('lb-i'),
      lbCap = document.getElementById('lb-c'),
      list = [], cur = 0, opener = null, tx = null;

  /* filter */
  function filterBy(k) {
    var n = 0;
    items.forEach(function (it) {
      var show = !k || it.dataset.k === k;
      it.hidden = !show;
      if (show) n++;
    });
    cnt.textContent = n + ' foto';
  }
  [['', 'Semua'], ['rumah', 'Rumah'], ['kayu', 'Rumah Kayu'], ['bambu', 'Saung Bambu']].forEach(function (c) {
    var b = document.createElement('button');
    b.className = 'chip';
    b.type = 'button';
    b.setAttribute('aria-pressed', c[0] === '' ? 'true' : 'false');
    b.textContent = c[1];
    b.onclick = function () {
      chipBox.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      filterBy(c[0]);
    };
    chipBox.insertBefore(b, cnt);
  });
  filterBy('');

  /* tampilan besar */
  function show(i) {
    cur = (i + list.length) % list.length;
    var fig = list[cur], img = fig.querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = fig.querySelector('figcaption').textContent;
  }
  function openLb(fig) {
    list = items.filter(function (it) { return !it.hidden; });
    opener = fig.querySelector('button');
    show(list.indexOf(fig));
    lb.classList.add('on');
    document.body.style.overflow = 'hidden';
    document.getElementById('lb-x').focus();
  }
  function closeLb() {
    lb.classList.remove('on');
    document.body.style.overflow = '';
    if (opener) opener.focus();
  }
  items.forEach(function (fig) {
    fig.querySelector('button').addEventListener('click', function () { openLb(fig); });
  });
  document.getElementById('lb-x').onclick = closeLb;
  document.getElementById('lb-p').onclick = function () { show(cur - 1); };
  document.getElementById('lb-n').onclick = function () { show(cur + 1); };
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('on')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
  lb.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (tx === null) return;
    var d = e.changedTouches[0].clientX - tx;
    if (Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1));
    tx = null;
  }, { passive: true });
})();

/* ===================================================== */
/* BUKTI SERAH TERIMA (BARU)                             */
/* Berdiri sendiri, membuat tampilan foto besar sendiri  */
/* sehingga tidak bentrok dengan galeri bangunan.        */
/* ===================================================== */
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('#bukti-grid .bi'));
  if (!items.length) return;

  /* buat lightbox lewat JS */
  var lb = document.createElement('div');
  lb.className = 'bt-lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Foto serah terima diperbesar');
  lb.innerHTML =
    '<button class="x" type="button" aria-label="Tutup">✕</button>' +
    '<button class="pv" type="button" aria-label="Foto sebelumnya">‹</button>' +
    '<button class="nx" type="button" aria-label="Foto berikutnya">›</button>' +
    '<img src="" alt=""><p></p>';
  document.body.appendChild(lb);

  var img = lb.querySelector('img'),
      cap = lb.querySelector('p'),
      bx = lb.querySelector('.x'),
      bp = lb.querySelector('.pv'),
      bn = lb.querySelector('.nx'),
      cur = 0, opener = null, tx = null;

  function show(i) {
    cur = (i + items.length) % items.length;
    var fig = items[cur], im = fig.querySelector('img');
    img.src = im.src;
    img.alt = im.alt;
    cap.textContent = fig.querySelector('figcaption').textContent;
  }
  function open(i) {
    opener = items[i].querySelector('button');
    show(i);
    lb.classList.add('on');
    document.body.style.overflow = 'hidden';
    bx.focus();
  }
  function close() {
    lb.classList.remove('on');
    document.body.style.overflow = '';
    if (opener) opener.focus();
  }

  items.forEach(function (fig, i) {
    fig.querySelector('button').addEventListener('click', function () { open(i); });
  });
  bx.onclick = close;
  bp.onclick = function () { show(cur - 1); };
  bn.onclick = function () { show(cur + 1); };
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('on')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });

  /* geser jari kiri/kanan di HP */
  lb.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (tx === null) return;
    var d = e.changedTouches[0].clientX - tx;
    if (Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1));
    tx = null;
  }, { passive: true });
})();