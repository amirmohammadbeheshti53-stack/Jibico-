import { QUESTIONS } from '../data/questions'

export function L(a, id){ return ((a[id] || 1) - 1) * 25 }

function computeMBTI(a){
  const count = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0}
  QUESTIONS.filter(q=>q.type==='mbti').forEach(q=>{ const l=a[q.id]; if(l) count[l]++ })
  const pick=(x,y)=>count[x]>=count[y]?x:y
  const type = pick('E','I')+pick('S','N')+pick('T','F')+pick('J','P')
  const temperament = type[1]==='N' ? (type[2]==='T'?'NT':'NF') : (type[3]==='J'?'SJ':'SP')
  const st=(x,y)=>{const d=Math.abs(count[x]-count[y]);return d>=5?'واضح':d>=3?'متوسط':'خفیف'}
  return { type, temperament, counts:count,
    strength:{EI:st('E','I'), SN:st('S','N'), TF:st('T','F'), JP:st('J','P')} }
}

function computeDISC(a){
  const avg=(...ids)=>ids.reduce((s,id)=>s+L(a,id),0)/ids.length
  const scores = { D:avg('D1','D2','D3','D4'), I:avg('I1','I2','I3','I4'),
                   S:avg('S1','S2','S3','S4'), C:avg('C1','C2','C3','C4') }
  const order = Object.keys(scores).sort((x,y)=>scores[y]-scores[x])
  return { scores, style: order[0]+order[1] }
}

export function computeProfile(a){
  const skill = 0.3*L(a,'m1') + 0.2*L(a,'m2') + 0.25*L(a,'m3') + 0.15*(a.m4||0) + 0.1*L(a,'m5')
  const monet = 0.6*(a.b1||0) + 0.2*L(a,'b2') + 0.2*L(a,'b3')
  const gap   = 0.6*L(a,'b4') + 0.4*(100 - L(a,'b3'))

  const bottlenecks = {
    visibility:(L(a,'d1')+L(a,'d2'))/2, packaging:(L(a,'q1')+L(a,'q2'))/2,
    channel:(L(a,'f1')+L(a,'f2'))/2, market:(L(a,'z4')+L(a,'z5'))/2,
    scatter:(L(a,'p1')+L(a,'p2'))/2, outdated:(L(a,'r1')+L(a,'r2'))/2,
    mindset:(L(a,'n1')+L(a,'n2'))/2,
  }
  const keys = Object.keys(bottlenecks).sort((x,y)=>bottlenecks[y]-bottlenecks[x])
  const highSkill = skill>=60, highMonet = monet>=60

  let archetype
  if(highSkill && !highMonet) archetype = (a.z1==='employed') ? 'tired_employee' : 'hidden_expert'
  else if(highSkill && highMonet) archetype = (bottlenecks.scatter>=60||bottlenecks.channel>=60) ? 'scattered_freelancer' : 'scaler'
  else if(!highSkill && highMonet) archetype = 'wave_rider'
  else archetype = 'starter'

  const mbti = computeMBTI(a)
  const disc = computeDISC(a)
  const style = {
    directness: mbti.type[2]==='T' ? 'صریح' : 'ملایم',
    deadline_mode: mbti.type[3]==='J' ? 'سررسید قطعی' : 'پنجره انعطاف',
    channel_bias: (mbti.type[0]==='E' && disc.scores.I>=60) ? 'حضوری'
                : (mbti.type[0]==='I' && disc.scores.I<60) ? 'محتوامحور' : 'ترکیبی',
    pace: disc.scores.D>=60 ? 'تند' : (disc.scores.S>=60 ? 'پلکانی' : 'متعارف'),
  }

  return { skill:Math.round(skill), monet:Math.round(monet), gap:Math.round(gap),
    bottlenecks, primary:keys[0], secondary:keys[1],
    close: (bottlenecks[keys[0]]-bottlenecks[keys[1]])<10,
    coach: bottlenecks.mindset>=70,
    archetype, mbti, disc, style }
}

export const ARCHETYPES = {
  hidden_expert:{e:'🥷', t:'کارشناس پنهان', h:'تو مهارتت رو داری؛ پلِ دیده‌شدن جا افتاده.'},
  tired_employee:{e:'🧑‍', t:'کارمند خسته', h:'مهارت تو بیشتر از چیزی که سازمانت پرداخت می‌کنه می‌ارزه.'},
  scattered_freelancer:{e:'🌀', t:'فریلنسر پراکنده', h:'همیشه شلوغی؛ حالا وقتِ تمرکزه.'},
  scaler:{e:'🚀', t:'در آستانه مقیاس', h:'به نقطه خوبی رسیدی؛ مرحله بعد بزرگ‌تره.'},
  starter:{e:'🌱', t:'شروع‌کننده', h:'مسیر جلوت بازه؛ با تمرکز شروع می‌کنیم.'},
  wave_rider:{e:'🌊', t:'سوار بر موج', h:'درآمدت فعلاً از مهارت پشتیبانی نمی‌شه؛ ماندگارش می‌کنیم.'},
}
export const BOTTLENECK_NAMES = {
  visibility:'دیده‌نشدن', packaging:'بسته‌بندی و قیمت‌گذاری', channel:'کانال فروش',
  market:'بازار اشتباه', scatter:'پراکندگی', outdated:'به‌روز نبودن', mindset:'ذهنی',
}
export const PLAYBOOKS = {
  visibility:['سه نمونه‌کار برترت رو انتخاب کن و در یک صفحه منتشر کن.','این هفته یک پست درباره تجربه کاری‌ات منتشر کن.','به پنج نفر از آشناها بگو آماده پروژه گرفتن هستی.'],
  packaging:['خدمتت رو در یک جمله بنویس: «من X رو برای Y انجام می‌دم.»','سه بسته قیمتی مشخص تعریف کن.','قیمت پیشنهاد بعدی رو ۲۰٪ بالاتر بگو.'],
  channel:['فقط یک کانال که مشتری‌هات اونجان رو انتخاب کن.','این هفته سه پیام یا پیشنهاد بفرست.','از هر مشتری، درخواست ارجاع کن.'],
  market:['دو بازار که این مهارت رو بیشتر پول می‌دن تحقیق کن.','با یک فرد فعال در بازار هدف گفت‌وگو کن.','نمونه‌کارت رو برای بازار جدید بازسازی کن.'],
  scatter:['همه چیزهایی که شروع کردی رو لیست کن.','فقط یک مورد رو نگه دار.','سی روز به هر چیز جدید «نه» بگو.'],
  outdated:['مهم‌ترین مهارت جدید بازارت رو پیدا کن.','روزی ۳۰ دقیقه یادگیریش کن.','یک نمونه‌کار کوچک باهاش بساز.'],
  mindset:['سه دستاوردی که بهشون افتخار می‌کنی رو بنویس.','با یک فرد قابل‌اعتماد درباره اهدافت حرف بزن.','در اولین جلسه کوچینگ، درباره سدهای درونی صحبت کن.'],
}