// ショートカット&サポート即答道場(Windows中心・ヘルプデスク頻出)
window.DRILL_DATA = {
  title: "ショートカット即答道場",
  desc: "ヘルプデスクで「口頭で案内できる」レベルを目指す、Windows操作の反射訓練です。",
  questions: [
    { q: "Windowsで画面をロックするショートカットは?", choices: ["Win + L", "Win + D", "Ctrl + L", "Alt + F4"], answer: 0, fb: "離席時の基本。セキュリティ教育でも必ず案内" },
    { q: "タスクマネージャーを直接開くのは?", choices: ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Win + X", "Alt + Tab"], answer: 0, fb: "Ctrl+Alt+Delはメニュー経由。直接開くならこちら" },
    { q: "アクティブウィンドウだけをスクリーンショットするのは?", choices: ["Alt + PrintScreen", "PrintScreen", "Win + Shift + S", "Ctrl + P"], answer: 0, fb: "範囲指定キャプチャは Win+Shift+S。問い合わせ時の画面共有に必須" },
    { q: "範囲を指定してスクリーンショットを撮るのは?", choices: ["Win + Shift + S", "Alt + PrintScreen", "Win + P", "Ctrl + Shift + S"], answer: 0 },
    { q: "「ファイル名を指定して実行」を開くのは?", choices: ["Win + R", "Win + E", "Win + X", "Ctrl + R"], answer: 0, fb: "ここから cmd、control、msinfo32 などを起動" },
    { q: "エクスプローラーを開くのは?", choices: ["Win + E", "Win + R", "Win + F", "Ctrl + E"], answer: 0 },
    { q: "デスクトップを一瞬で表示するのは?", choices: ["Win + D", "Win + L", "Alt + Tab", "Win + Home"], answer: 0 },
    { q: "外部モニターへの出力切替(複製/拡張)を出すのは?", choices: ["Win + P", "Win + M", "Ctrl + Alt + →", "F5"], answer: 0, fb: "会議室サポートの最頻出。口頭で案内できるように" },
    { q: "直前の操作を取り消すのは?", choices: ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Alt + Z"], answer: 0, fb: "やり直しは Ctrl+Y" },
    { q: "ウィンドウを切り替えるのは?", choices: ["Alt + Tab", "Ctrl + Tab", "Win + Tab のみ", "Alt + Esc のみ"], answer: 0 },
    { q: "ブラウザでキャッシュを無視して再読み込み(スーパーリロード)するのは?", choices: ["Ctrl + F5", "F5", "Ctrl + R", "Shift + Esc"], answer: 0, fb: "「更新したのに画面が変わらない」問い合わせの定番回答" },
    { q: "「ファイル名を指定して実行」でシステム情報を開くコマンドは?", choices: ["msinfo32", "winver", "eventvwr", "regedit"], answer: 0, fb: "winverはバージョン表示、eventvwrはイベントビューアー" },
    { q: "Windowsのバージョンを確認する実行コマンドは?", choices: ["winver", "msinfo32", "ver", "sysver"], answer: 0 },
    { q: "イベントビューアーを開く実行コマンドは?", choices: ["eventvwr", "msconfig", "eventlog", "viewer"], answer: 0 },
    { q: "コントロールパネルを開く実行コマンドは?", choices: ["control", "cpl", "panel", "settings"], answer: 0 },
    { q: "IP設定を確認するWindowsコマンドは?", choices: ["ipconfig /all", "ifconfig", "ip a", "netstat -ip"], answer: 0, fb: "Linuxは ip a。混同注意" },
    { q: "DNSキャッシュをクリアするWindowsコマンドは?", choices: ["ipconfig /flushdns", "ipconfig /renew", "dnsclear", "netsh dns reset"], answer: 0, fb: "「さっきまで見られたサイトが見られない」時の定番" },
    { q: "Macで「コピー」のショートカットは?", choices: ["Cmd + C", "Ctrl + C", "Opt + C", "Cmd + V"], answer: 0, fb: "Mac対応もヘルプデスクの守備範囲。CtrlではなくCmd" },
  ]
};
