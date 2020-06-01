master: https://news-app-clone.netlify.app/

# 概要
- 非公式に livedoor NEWS のアプリを Vue.js で作り直す  
  - https://apps.apple.com/jp/app/livedoor-news/id1398649461

# ルール
- 学習用なので、初期構築（vue create ...）でインストールされるライブラリ以外は一切使わない
- 本家に迷惑を掛けないために、APIを叩く箇所は静的なファイルを読み込むことで代替とする
  - API のレスポンス（静的なjson）については、学習がてら自分で考えて構築する
- PCでの閲覧は考慮しない
  - 対象ブラウザはchrome, safari

# 環境
```
$ node -v
v12.14.1

$ vue --version
@vue/cli 4.1.2

$ npm --version
6.13.4
```