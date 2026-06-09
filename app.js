const POSES={
  A:{d:'Puño, pulgar lateral',th:[.2,.1],i:[.9,.8],m:[.9,.8],r:[.9,.8],p:[.9,.8],thS:0,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  B:{d:'4 dedos ext., pulgar recogido',th:[.85,.7],i:[0,0],m:[0,0],r:[0,0],p:[0,0],thS:-.3,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  C:{d:'Mano en C',th:[.3,.1],i:[.45,.3],m:[.45,.3],r:[.45,.3],p:[.4,.25],thS:.2,iS:.1,mS:.1,rS:.1,wx:.2,wy:0,wz:0},
  D:{d:'Índice ext., C con el resto',th:[.4,.3],i:[0,0],m:[.75,.6],r:[.8,.65],p:[.8,.65],thS:0,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  E:{d:'Dedos doblados a la palma',th:[.6,.5],i:[.75,.6],m:[.75,.6],r:[.75,.6],p:[.75,.6],thS:0,iS:0,mS:0,rS:0,wx:-.1,wy:0,wz:0},
  F:{d:'Pulgar e índice se tocan',th:[.1,.05],i:[.1,.05],m:[0,0],r:[0,0],p:[0,0],thS:0,iS:0,mS:.15,rS:.15,wx:0,wy:0,wz:0},
  G:{d:'Índice y pulgar al lado',th:[.1,0],i:[.05,0],m:[.9,.8],r:[.9,.8],p:[.9,.8],thS:.15,iS:0,mS:0,rS:0,wx:0,wy:0,wz:.45},
  H:{d:'Índice y corazón al lado',th:[.85,.7],i:[.05,0],m:[.05,0],r:[.9,.8],p:[.9,.8],thS:0,iS:0,mS:0,rS:0,wx:0,wy:0,wz:.45},
  I:{d:'Meñique extendido',th:[.25,.15],i:[.9,.8],m:[.9,.8],r:[.9,.8],p:[0,0],thS:0,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  J:{d:'Como I con movimiento J',th:[.25,.15],i:[.9,.8],m:[.9,.8],r:[.9,.8],p:[0,0],thS:0,iS:0,mS:0,rS:0,wx:-.2,wy:.15,wz:-.1},
  K:{d:'V con pulgar entre los dedos',th:[.4,.3],i:[0,0],m:[0,0],r:[.85,.7],p:[.85,.7],thS:0,iS:.2,mS:0,rS:0,wx:-.15,wy:0,wz:0},
  L:{d:'Índice arriba, pulgar al lado',th:[0,0],i:[0,0],m:[.9,.8],r:[.9,.8],p:[.9,.8],thS:.4,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  M:{d:'Tres dedos sobre el pulgar',th:[.5,.4],i:[.8,.7],m:[.8,.7],r:[.8,.7],p:[.9,.8],thS:0,iS:0,mS:0,rS:0,wx:0,wy:0,wz:-.1},
  N:{d:'Índice y corazón sobre pulgar',th:[.5,.4],i:[.8,.7],m:[.8,.7],r:[.9,.8],p:[.9,.8],thS:0,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  O:{d:'Dedos forman O con el pulgar',th:[.3,.2],i:[.4,.3],m:[.4,.3],r:[.4,.3],p:[.35,.25],thS:0,iS:.05,mS:.05,rS:.05,wx:0,wy:0,wz:0},
  P:{d:'Índice apunta abajo',th:[.3,.2],i:[.05,0],m:[.05,0],r:[.9,.8],p:[.9,.8],thS:.1,iS:0,mS:0,rS:0,wx:0,wy:0,wz:.5},
  Q:{d:'Pulgar e índice al suelo',th:[.1,0],i:[.1,0],m:[.9,.8],r:[.9,.8],p:[.9,.8],thS:.1,iS:0,mS:0,rS:0,wx:0,wy:.1,wz:.55},
  R:{d:'Índice y corazón cruzados',th:[.7,.6],i:[.05,0],m:[.05,0],r:[.9,.8],p:[.9,.8],thS:0,iS:-.15,mS:0,rS:0,wx:0,wy:0,wz:0},
  S:{d:'Puño, pulgar cruzado',th:[.05,0],i:[.9,.8],m:[.9,.8],r:[.9,.8],p:[.9,.8],thS:0,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  T:{d:'Pulgar entre índice y corazón',th:[.35,.25],i:[.85,.75],m:[.85,.75],r:[.9,.8],p:[.9,.8],thS:0,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  U:{d:'Índice y corazón juntos',th:[.8,.7],i:[0,0],m:[0,0],r:[.9,.8],p:[.9,.8],thS:-.2,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  V:{d:'Índice y corazón en V',th:[.8,.7],i:[0,0],m:[0,0],r:[.9,.8],p:[.9,.8],thS:-.2,iS:.18,mS:0,rS:0,wx:0,wy:0,wz:0},
  W:{d:'Tres dedos separados',th:[.85,.75],i:[0,0],m:[0,0],r:[0,0],p:[.9,.8],thS:-.2,iS:.18,mS:0,rS:.18,wx:0,wy:0,wz:0},
  X:{d:'Índice en gancho',th:[.3,.2],i:[.55,.45],m:[.9,.8],r:[.9,.8],p:[.9,.8],thS:0,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  Y:{d:'Pulgar y meñique ext.',th:[0,0],i:[.9,.8],m:[.9,.8],r:[.9,.8],p:[0,0],thS:.3,iS:0,mS:0,rS:0,wx:0,wy:0,wz:0},
  Z:{d:'Índice traza Z',th:[.7,.6],i:[0,0],m:[.9,.8],r:[.9,.8],p:[.9,.8],thS:0,iS:0,mS:0,rS:0,wx:-.15,wy:0,wz:0}
};

const SPD=[1500,980,640,380,210];
const SPDL=['Muy lento','Lento','Normal','Rápido','Muy rápido'];
let spdIdx=2,queue=[],qIdx=0,signing=false,spTimer=null,lastTxt='';
let recog=null,micOn=false;
let scene,cam,rend,wristR,wristL,bonesR={},bonesL={};
let tgtR={t1:0,t2:0,i1:0,i2:0,m1:0,m2:0,r1:0,r2:0,p1:0,p2:0,tX:0,iX:0,mX:0,rX:0,wx:0,wy:0,wz:0};
let curR=Object.assign({},tgtR);
let tgtL={t1:.1,t2:.05,i1:.05,i2:0,m1:.05,m2:0,r1:.05,r2:0,p1:.05,p2:0,tX:0,iX:0,mX:0,rX:0,wx:.1,wy:0,wz:-.05};
let curL=Object.assign({},tgtL);

function lerp(a,b,t){return a+(b-a)*t}
function mkSkin(c){return new THREE.MeshPhongMaterial({color:c||0xf5c090,shininess:22,specular:new THREE.Color(0x441100)})}
function mkMat(c,s){return new THREE.MeshPhongMaterial({color:c,shininess:s||6})}

function initScene(){
  const cv=document.getElementById('av-canvas');
  const W=cv.parentElement.clientWidth, H=cv.parentElement.clientHeight;
  cv.width=W; cv.height=H;
  scene=new THREE.Scene();
  cam=new THREE.PerspectiveCamera(40,W/H,.1,100);
  cam.position.set(0,.2,4.0); cam.lookAt(0,-.1,0);
  rend=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});
  rend.setSize(W,H); rend.setPixelRatio(Math.min(window.devicePixelRatio,2));
  rend.setClearColor(0x000000,0);
  scene.add(new THREE.AmbientLight(0xfff0e8,.6));
  const key=new THREE.DirectionalLight(0xffeedd,1.5); key.position.set(2,5,5); scene.add(key);
  const fill=new THREE.DirectionalLight(0xaaccff,.5); fill.position.set(-3,2,2); scene.add(fill);
  buildAvatar(); renderLoop();
}

function buildAvatar(){
  const root=new THREE.Group(); root.position.set(0,-.7,0); scene.add(root);
  const SK=mkSkin(0xf0b882),SK2=mkSkin(0xe0a060);
  const SHIRT=mkMat(0x1a1a2a),HAIR=mkMat(0x1a0f08,45);
  const WHITE=mkMat(0xf2f2f2,30),IRIS=mkMat(0x3d2b1f,20);
  const EYE=mkMat(0x111111),LIP=mkMat(0xc06855,28);

  // Torso
  const tor=new THREE.Mesh(new THREE.CylinderGeometry(.36,.44,1.15,22),SHIRT);
  tor.position.y=.15; root.add(tor);
  [-0.48,0.48].forEach(x=>{
    const s=new THREE.Mesh(new THREE.SphereGeometry(.155,14,10),SHIRT);
    s.scale.set(1,.85,.9); s.position.set(x,.8,0); root.add(s);
  });

  // Cuello
  const nk=new THREE.Mesh(new THREE.CylinderGeometry(.1,.125,.24,14),SK);
  nk.position.y=1.05; root.add(nk);

  // Cabeza
  const hd=new THREE.Mesh(new THREE.SphereGeometry(.262,30,24),SK);
  hd.scale.set(1,1.08,.9); hd.position.y=1.38; root.add(hd);
  const jaw=new THREE.Mesh(new THREE.SphereGeometry(.205,20,12,0,Math.PI*2,0,Math.PI*.5),SK);
  jaw.scale.set(1.03,1,.87); jaw.position.set(0,1.21,0); root.add(jaw);

  // Pelo corto oscuro
  const hb=new THREE.Mesh(new THREE.SphereGeometry(.272,26,20),HAIR);
  hb.scale.set(1.01,.6,.96); hb.position.set(0,1.55,-.01); root.add(hb);
  [-0.255,0.255].forEach(x=>{
    const hs=new THREE.Mesh(new THREE.SphereGeometry(.262,14,12),HAIR);
    hs.scale.set(.33,.65,.56); hs.position.set(x,1.38,0); root.add(hs);
  });
  const fq=new THREE.Mesh(new THREE.SphereGeometry(.26,14,10),HAIR);
  fq.scale.set(.9,.35,1); fq.position.set(0,1.56,.18); root.add(fq);

  // Ojos
  [-0.09,0.09].forEach(x=>{
    const ew=new THREE.Mesh(new THREE.SphereGeometry(.042,14,12),WHITE);
    ew.scale.set(1,.82,.8); ew.position.set(x,1.41,.235); root.add(ew);
    const ir=new THREE.Mesh(new THREE.SphereGeometry(.028,12,10),IRIS);
    ir.position.set(x,1.41,.258); root.add(ir);
    const pu=new THREE.Mesh(new THREE.SphereGeometry(.017,10,8),EYE);
    pu.position.set(x,1.41,.267); root.add(pu);
    const gl=new THREE.Mesh(new THREE.SphereGeometry(.006,6,5),
      new THREE.MeshPhongMaterial({color:0xffffff,emissive:new THREE.Color(.9,.9,.9)}));
    gl.position.set(x+.01,1.424,.274); root.add(gl);
  });

  // Cejas
  [-0.09,0.09].forEach(x=>{
    const bg=new THREE.Mesh(new THREE.BoxGeometry(.064,.014,.012),
      new THREE.MeshPhongMaterial({color:0x1a0f08}));
    bg.position.set(x,1.48,.238); bg.rotation.z=x>0?-.15:.15; root.add(bg);
  });

  // Nariz y boca
  const ns=new THREE.Mesh(new THREE.SphereGeometry(.026,8,6),SK2);
  ns.scale.set(1,.7,1.1); ns.position.set(0,1.34,.254); root.add(ns);
  const lb=new THREE.Mesh(new THREE.TorusGeometry(.038,.01,8,14,Math.PI),LIP);
  lb.position.set(0,1.274,.248); lb.rotation.x=.12; root.add(lb);
  const lb2=new THREE.Mesh(new THREE.TorusGeometry(.033,.009,8,14,Math.PI),LIP);
  lb2.position.set(0,1.26,.246); lb2.rotation.z=Math.PI; lb2.rotation.x=-.08; root.add(lb2);

  // Orejas
  [-0.263,0.263].forEach(x=>{
    const er=new THREE.Mesh(new THREE.SphereGeometry(.041,10,8),SK2);
    er.scale.set(.43,.66,.37); er.position.set(x,1.36,0); root.add(er);
  });

  // Brazos
  buildArm(root,SK,SHIRT,-1); buildArm(root,SK,SHIRT,1);

  // Manos articuladas
  wristR=new THREE.Group(); wristR.position.set(.85,-.18,.62); root.add(wristR);
  buildHand(wristR,SK,SK2,bonesR,1);
  wristL=new THREE.Group(); wristL.position.set(-.85,-.18,.62); root.add(wristL);
  buildHand(wristL,SK,SK2,bonesL,-1);
}

function buildArm(root,SK,CLOTH,s){
  const ua=new THREE.Mesh(new THREE.CylinderGeometry(.09,.08,.58,14),CLOTH);
  ua.position.set(s*.58,.54,0); ua.rotation.z=s*.28; root.add(ua);
  const el=new THREE.Mesh(new THREE.SphereGeometry(.08,12,9),s===1?SK:CLOTH);
  el.scale.set(.9,.8,.85); el.position.set(s*.75,.24,.06); root.add(el);
  const la=new THREE.Mesh(new THREE.CylinderGeometry(.07,.06,.5,14),SK);
  la.position.set(s*.85,-.02,.23); la.rotation.z=s*.52; la.rotation.x=-.28; root.add(la);
}

function buildHand(par,SK,SK2,bones,side){
  par.add(new THREE.Mesh(new THREE.BoxGeometry(.29,.33,.068,3,4,2),SK));
  const wr=new THREE.Mesh(new THREE.CylinderGeometry(.063,.073,.1,14),SK);
  wr.position.set(0,-.21,0); wr.rotation.x=.1; par.add(wr);
  [-.098,-.033,.033,.098].forEach(x=>{
    const k=new THREE.Mesh(new THREE.SphereGeometry(.021,8,6),SK2);
    k.position.set(x,.175,.02); par.add(k);
  });
  const FD=[
    {n:'th',x:side*-.142,y:.042,z:.01,bz:side*-.35,l:[.115,.094],r:[.040,.032,.026]},
    {n:'idx',x:side*-.095,y:.184,z:0,bz:0,l:[.100,.081],r:[.032,.026,.020]},
    {n:'mid',x:side*-.011,y:.198,z:0,bz:0,l:[.110,.086],r:[.032,.026,.020]},
    {n:'rng',x:side*.068,y:.184,z:0,bz:0,l:[.098,.079],r:[.030,.024,.018]},
    {n:'pnk',x:side*.142,y:.158,z:0,bz:0,l:[.075,.061],r:[.024,.018,.014]}
  ];
  FD.forEach(fd=>{
    const fg=new THREE.Group();
    fg.position.set(fd.x,fd.y,fd.z); fg.rotation.z=fd.bz; par.add(fg);
    fg.add(new THREE.Mesh(new THREE.SphereGeometry(fd.r[0]*.9,9,7),SK));
    const f1=new THREE.Mesh(new THREE.CylinderGeometry(fd.r[0],fd.r[1],fd.l[0],10),SK);
    f1.position.y=fd.l[0]*.5+.004; fg.add(f1);
    const j2=new THREE.Group(); j2.position.y=fd.l[0]+.004;
    j2.add(new THREE.Mesh(new THREE.SphereGeometry(fd.r[1]*.87,8,6),SK2));
    const f2=new THREE.Mesh(new THREE.CylinderGeometry(fd.r[1],fd.r[2],fd.l[1],10),SK);
    f2.position.y=fd.l[1]*.5+.003; j2.add(f2);
    const tip=new THREE.Mesh(new THREE.SphereGeometry(fd.r[2],10,8),SK);
    tip.scale.set(1,.84,.88); tip.position.y=fd.l[1]+.003; j2.add(tip);
    fg.add(j2);
    bones[fd.n]={base:fg,j2};
  });
}

function applyBones(bones,cur){
  const M=1.55;
  if(bones.th){bones.th.base.rotation.x=-.35+cur.t1*M*.75;bones.th.base.rotation.z=-.35+cur.tX*.55;bones.th.j2.rotation.x=cur.t2*M*.65}
  if(bones.idx){bones.idx.base.rotation.x=cur.i1*M;bones.idx.base.rotation.z=cur.iX*.35;bones.idx.j2.rotation.x=cur.i2*M*.85}
  if(bones.mid){bones.mid.base.rotation.x=cur.m1*M;bones.mid.base.rotation.z=cur.mX*.35;bones.mid.j2.rotation.x=cur.m2*M*.85}
  if(bones.rng){bones.rng.base.rotation.x=cur.r1*M;bones.rng.base.rotation.z=cur.rX*.35;bones.rng.j2.rotation.x=cur.r2*M*.85}
  if(bones.pnk){bones.pnk.base.rotation.x=cur.p1*M;bones.pnk.j2.rotation.x=cur.p2*M*.85}
}

function renderLoop(){
  requestAnimationFrame(renderLoop);
  const s=.09, t=Date.now();
  for(const k in tgtR) curR[k]=lerp(curR[k],tgtR[k],s);
  for(const k in tgtL) curL[k]=lerp(curL[k],tgtL[k],s);
  if(wristR){wristR.rotation.x=curR.wx;wristR.rotation.y=curR.wy+Math.sin(t*.0008)*.01;wristR.rotation.z=curR.wz}
  if(wristL){wristL.rotation.x=curL.wx;wristL.rotation.y=curL.wy-Math.sin(t*.0008)*.01;wristL.rotation.z=curL.wz}
  applyBones(bonesR,curR); applyBones(bonesL,curL);
  rend.render(scene,cam);
}

function applyPose(p){
  tgtR.t1=p.th[0];tgtR.t2=p.th[1];tgtR.i1=p.i[0];tgtR.i2=p.i[1];
  tgtR.m1=p.m[0];tgtR.m2=p.m[1];tgtR.r1=p.r[0];tgtR.r2=p.r[1];
  tgtR.p1=p.p[0];tgtR.p2=p.p[1];
  tgtR.tX=p.thS;tgtR.iX=p.iS;tgtR.mX=p.mS;tgtR.rX=p.rS;
  tgtR.wx=p.wx;tgtR.wy=p.wy;tgtR.wz=p.wz;
}

function restPose(){
  Object.assign(tgtR,{t1:.1,t2:.05,i1:.05,i2:0,m1:.05,m2:0,r1:.05,r2:0,p1:.05,p2:0,tX:0,iX:0,mX:0,rX:0,wx:0,wy:0,wz:0});
  Object.assign(tgtL,{t1:.1,t2:.05,i1:.08,i2:.04,m1:.08,m2:.04,r1:.08,r2:.04,p1:.08,p2:.04,tX:0,iX:0,mX:0,rX:0,wx:.1,wy:0,wz:-.05});
}

function doSpell(){
  const v=document.getElementById('txt-in').value.trim();
  if(!v) return;
  lastTxt=v; document.getElementById('sub-orig').textContent=v; startSpell(v);
}
function quick(p){document.getElementById('txt-in').value=p;lastTxt=p;document.getElementById('sub-orig').textContent=p;startSpell(p)}
function repeatLast(){if(lastTxt)startSpell(lastTxt)}

function startSpell(txt){
  stopAll();
  const clean=txt.toUpperCase().replace(/[^A-Z ]/g,'');
  if(!clean.trim()) return;
  queue=clean.split(''); qIdx=0; signing=true;
  const row=document.getElementById('sp-row');
  row.innerHTML='';
  queue.forEach((c,i)=>{
    const d=document.createElement('div');
    d.className=c===' '?'sl sp':'sl'; d.textContent=c===' '?'·':c; d.id='sl'+i;
    row.appendChild(d);
  });
  setSt('sign','Signando...'); document.getElementById('sign-ind').classList.add('vis');
  nextSign();
}

function nextSign(){
  if(!signing||qIdx>=queue.length){if(qIdx>=queue.length)doneSpell();return}
  const ch=queue[qIdx];
  document.getElementById('prog').style.width=Math.round(qIdx/queue.length*100)+'%';
  document.querySelectorAll('.sl').forEach((e,i)=>{
    if(i<qIdx){e.classList.add('done');e.classList.remove('act')}
    else if(i===qIdx){e.classList.add('act');e.classList.remove('done')}
    else{e.classList.remove('act','done')}
  });
  showSign(ch); qIdx++;
  spTimer=setTimeout(nextSign,SPD[spdIdx]);
}

function doneSpell(){
  signing=false;
  document.getElementById('prog').style.width='100%';
  document.getElementById('cur-sign').textContent='✓';
  document.getElementById('sign-ind').classList.remove('vis');
  setSt('ready','Completado ✓');
  setTimeout(()=>{
    document.getElementById('prog').style.width='0%';
    document.getElementById('cur-sign').textContent='—';
    document.querySelectorAll('.sl').forEach(e=>e.classList.remove('act','done'));
    setSt('ready','Listo — escribe o habla');
    restPose();
  },2000);
}

function stopAll(){
  signing=false; clearTimeout(spTimer); queue=[]; qIdx=0; restPose();
  document.getElementById('prog').style.width='0%';
  document.getElementById('cur-sign').textContent='—';
  document.getElementById('sign-ind').classList.remove('vis');
  document.querySelectorAll('.sl').forEach(e=>e.classList.remove('act','done'));
  setSt('ready','Listo');
}

function showSign(ch){
  if(ch===' '){document.getElementById('cur-sign').textContent='·';restPose();return}
  const p=POSES[ch]; if(!p) return;
  document.getElementById('cur-sign').textContent=ch;
  applyPose(p);
}

function initSpeech(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){
    const btn=document.getElementById('mic-btn');
    btn.disabled=true; btn.style.opacity='.35';
    document.getElementById('mic-lbl').textContent='Solo disponible en Chrome con HTTPS';
    return;
  }
  recog=new SR(); recog.lang='es-ES'; recog.continuous=false; recog.interimResults=true;
  recog.onstart=()=>{
    micOn=true;
    document.getElementById('mic-btn').classList.add('on');
    document.getElementById('mic-icon').textContent='🔴';
    document.getElementById('mic-lbl').textContent='Escuchando... pulsa para parar';
    setSt('mic','Escuchando...');
    const tb=document.getElementById('transcript');
    tb.style.display='block'; tb.textContent='...';
    document.getElementById('sub-orig').textContent='...';
  };
  recog.onresult=(e)=>{
    let interim='',final='';
    for(let i=e.resultIndex;i<e.results.length;i++){
      const t=e.results[i][0].transcript;
      if(e.results[i].isFinal) final+=t; else interim+=t;
    }
    const s=final||interim;
    document.getElementById('transcript').textContent=s;
    document.getElementById('sub-orig').textContent=s;
    if(final) lastTxt=final.trim();
  };
  recog.onend=()=>{
    micOn=false;
    document.getElementById('mic-btn').classList.remove('on');
    document.getElementById('mic-icon').textContent='🎤';
    document.getElementById('mic-lbl').textContent='Pulsa para hablar';
    if(lastTxt){
      document.getElementById('txt-in').value=lastTxt;
      document.getElementById('transcript').textContent='"'+lastTxt+'"';
      startSpell(lastTxt); lastTxt='';
    } else {
      document.getElementById('transcript').style.display='none';
      setSt('ready','Listo — escribe o habla');
    }
  };
  recog.onerror=(e)=>{
    micOn=false;
    document.getElementById('mic-btn').classList.remove('on');
    document.getElementById('mic-icon').textContent='🎤';
    document.getElementById('mic-lbl').textContent='Pulsa para hablar';
    document.getElementById('transcript').style.display='none';
    const msgs={'not-allowed':'⚠️ Activa el micrófono en el candado de la URL','no-speech':'No detecté voz, inténtalo de nuevo','network':'Error de red'};
    setSt('ready',msgs[e.error]||'Error: '+e.error);
  };
}

function toggleMic(){
  if(!recog) return;
  if(micOn){micOn=false;recog.stop()}
  else{lastTxt='';try{recog.start()}catch(e){setSt('ready','Error iniciando micrófono')}}
}

function setSt(type,txt){
  document.getElementById('sdot').className='sdot '+(type||'');
  document.getElementById('stxt').textContent=txt;
}
function setSpd(v){spdIdx=parseInt(v)-1;document.getElementById('spd-val').textContent=SPDL[spdIdx]}

window.addEventListener('load',()=>{
  initScene(); initSpeech(); restPose();
  window.addEventListener('resize',()=>{
    const cv=document.getElementById('av-canvas');
    const W=cv.parentElement.clientWidth, H=cv.parentElement.clientHeight;
    cv.width=W; cv.height=H; rend.setSize(W,H);
    cam.aspect=W/H; cam.updateProjectionMatrix();
  });
  setTimeout(()=>window.dispatchEvent(new Event('resize')),100);
});
