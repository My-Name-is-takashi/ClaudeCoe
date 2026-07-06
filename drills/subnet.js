// サブネット計算道場: 問題を毎回ランダム生成する
window.DRILL_DATA = (function(){
  const r = n => Math.floor(Math.random()*n);
  const pick = a => a[r(a.length)];

  function hostCount(){
    const cidr = pick([24,25,26,27,28,29,30]);
    const hosts = Math.pow(2, 32-cidr) - 2;
    const wrongs = new Set([hosts+2, Math.pow(2,32-cidr), Math.max(2,hosts/2-1), hosts*2+2]);
    wrongs.delete(hosts);
    const choices = [String(hosts), ...[...wrongs].slice(0,3).map(String)];
    return { q: `/${cidr} のサブネットで利用できるホスト数は?`, choices, answer: 0,
             fb: `2^(32-${cidr}) - 2(ネットワーク/ブロードキャスト分を引く)= ${hosts}` };
  }
  function maskToCidr(){
    const map = { "255.255.255.0":24, "255.255.255.128":25, "255.255.255.192":26,
                  "255.255.255.224":27, "255.255.255.240":28, "255.255.0.0":16 };
    const mask = pick(Object.keys(map));
    const cidr = map[mask];
    const wrongs = [cidr-1, cidr+1, cidr+2].map(c=>"/"+c);
    return { q: `サブネットマスク ${mask} をCIDR表記にすると?`, choices: ["/"+cidr, ...wrongs], answer: 0,
             fb: `マスクの2進数で1が立っているビット数 = ${cidr}` };
  }
  function netAddr(){
    const third = r(200)+1;
    const cidr = pick([25,26,27]);
    const block = Math.pow(2, 32-cidr);
    const host = r(254)+1;
    const net = Math.floor(host/block)*block;
    const wrongs = new Set([net+block, Math.max(0,net-block), net+1]);
    wrongs.delete(net);
    return { q: `192.168.${third}.${host}/${cidr} のネットワークアドレスは?`,
             choices: [`192.168.${third}.${net}`, ...[...wrongs].slice(0,3).map(v=>`192.168.${third}.${v}`)],
             answer: 0,
             fb: `/${cidr} のブロックサイズは ${block}。${host} を含む ${block} の倍数区間の先頭は ${net}` };
  }
  function isPrivate(){
    const priv = [`10.${r(255)}.${r(255)}.${r(254)+1}`, `192.168.${r(255)}.${r(254)+1}`, `172.${16+r(16)}.${r(255)}.${r(254)+1}`];
    const glob = [`8.8.8.${r(254)+1}`, `203.0.113.${r(254)+1}`, `172.${r(15)+1}.0.${r(254)+1}`, `11.${r(255)}.0.${r(254)+1}`];
    const isPriv = r(2)===0;
    const ip = isPriv ? pick(priv) : pick(glob);
    return { q: `${ip} はプライベートIPアドレス?`, choices: isPriv?["はい","いいえ"]:["いいえ","はい"], answer: 0,
             fb: "プライベートは 10.0.0.0/8、172.16.0.0/12(172.16〜31)、192.168.0.0/16 の3レンジ" };
  }
  function broadcast(){
    const cidr = pick([25,26,27,28]);
    const block = Math.pow(2, 32-cidr);
    const idx = r(256/block);
    const bc = idx*block + block - 1;
    const wrongs = new Set([bc+block, idx*block, bc-1]);
    wrongs.delete(bc);
    return { q: `192.168.10.0/24 を /${cidr} に分割したとき、${idx+1}番目のサブネットのブロードキャストアドレスは?`,
             choices: [`192.168.10.${bc}`, ...[...wrongs].slice(0,3).map(v=>`192.168.10.${v}`)], answer: 0,
             fb: `ブロック ${block} ごとに分割。${idx+1}番目は .${idx*block}〜.${bc} で、末尾がブロードキャスト` };
  }

  const gens = [hostCount, maskToCidr, netAddr, isPrivate, broadcast];
  return {
    title: "サブネット計算道場",
    desc: "問題は毎回ランダム生成。ホスト数・CIDR変換・ネットワークアドレスを反射で計算できるまで!",
    gen(){
      const g = pick(gens)();
      // engine側でシャッフル表示されるので answer は choices の index 0 固定でよい
      return { q: g.q, choices: g.choices, answer: g.answer, fb: g.fb };
    }
  };
})();
