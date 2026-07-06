// ポート番号かるた: 4択即答
window.DRILL_DATA = {
  title: "ポート番号かるた",
  desc: "実務頻出のウェルノウンポートを反射で答えられるように。",
  questions: [
    { q: "HTTP のポート番号は?", choices: ["80", "443", "8080", "23"], answer: 0, fb: "暗号化なしのWeb。443(HTTPS)とセットで暗記" },
    { q: "HTTPS のポート番号は?", choices: ["443", "80", "8443", "465"], answer: 0 },
    { q: "SSH のポート番号は?", choices: ["22", "23", "21", "3389"], answer: 0, fb: "23はTelnet、21はFTP。お隣さんに注意" },
    { q: "DNS のポート番号は?", choices: ["53", "67", "25", "123"], answer: 0 },
    { q: "SMTP(メール送信)のポート番号は?", choices: ["25", "110", "143", "587"], answer: 0, fb: "投稿用のサブミッションポートは587" },
    { q: "メール投稿(サブミッション)のポート番号は?", choices: ["587", "25", "993", "465"], answer: 0 },
    { q: "POP3 のポート番号は?", choices: ["110", "143", "995", "25"], answer: 0 },
    { q: "IMAP のポート番号は?", choices: ["143", "110", "993", "587"], answer: 0 },
    { q: "RDP(リモートデスクトップ)のポート番号は?", choices: ["3389", "5900", "22", "8080"], answer: 0, fb: "5900はVNC" },
    { q: "FTP(制御)のポート番号は?", choices: ["21", "20", "22", "69"], answer: 0, fb: "データ転送は20、TFTPは69" },
    { q: "DHCP(サーバー側)のポート番号は?", choices: ["67", "68", "53", "123"], answer: 0, fb: "クライアント側は68" },
    { q: "NTP(時刻同期)のポート番号は?", choices: ["123", "161", "514", "53"], answer: 0 },
    { q: "SMB(Windowsファイル共有)のポート番号は?", choices: ["445", "139", "389", "636"], answer: 0 },
    { q: "LDAP(ディレクトリサービス)のポート番号は?", choices: ["389", "636", "445", "88"], answer: 0, fb: "LDAPSは636、Kerberosは88" },
    { q: "SNMP(機器監視)のポート番号は?", choices: ["161", "123", "514", "162"], answer: 0, fb: "Trap受信は162" },
    { q: "Syslog のポート番号は?", choices: ["514", "161", "123", "443"], answer: 0 },
    { q: "ポート 23 を使うプロトコルは?", choices: ["Telnet", "SSH", "FTP", "SMTP"], answer: 0, fb: "平文通信のため現在は原則使用禁止" },
    { q: "ポート 3306 を使うのは?", choices: ["MySQL/MariaDB", "PostgreSQL", "Redis", "SQL Server"], answer: 0, fb: "PostgreSQLは5432、SQL Serverは1433" },
    { q: "ポート 8080 がよく使われる用途は?", choices: ["HTTPの代替(プロキシ/テスト用Web)", "HTTPSの代替", "メール受信", "DNSの代替"], answer: 0 },
    { q: "ポート 993 を使うのは?", choices: ["IMAPS(IMAP over SSL)", "POP3S", "SMTPS", "LDAPS"], answer: 0, fb: "POP3Sは995" },
  ]
};
