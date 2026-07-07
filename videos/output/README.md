# 動画本編(全30本・自動生成)

台本(`videos/scripts/`)から自動生成した縦型ナレーション動画です。

- **ナレーション**: VOICEVOX 春日部つむぎ(講座ナビゲーター「いろは」役・早口1.15倍)
- **映像**: HTMLスライド(Chromiumで描画)+ Ken Burns + 日本語テロップ
- **合成**: ffmpeg。すべてローカル・無料ツールで生成(外部課金なし)
- **一覧/再生**: `portal/videos.html`(または `manifest.json` 参照)
- 合計 約55分・30本。ファイル名は章番号+ハッシュ

## クレジット
音声合成に [VOICEVOX](https://voicevox.hiroshiba.jp/)(春日部つむぎ)を使用しています。
利用の際は各キャラクターの利用規約に従ってください。

## 再生成
`scratchpad/movie/build_all.py` が台本を解析して全動画を再生成します
(VOICEVOX エンジンをローカルで起動しておく必要があります)。
