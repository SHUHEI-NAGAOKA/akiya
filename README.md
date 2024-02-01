# akiya
To create a akiya website

update note rules
-更新日を記録する
-更新内容を箇条書きで記録する
-作業単位を分け、その単位の中でどのくらいの進捗かを記録する。

全体の進捗
1. サンプルサイトの作成
	a. 掲載内容の選定
	b. ワイヤーフレームの作成
	c. デザインの概要作成（メインカラー、コンテンツ全体の配置など）
	d. HTMLコーディング開始、スタイリング開始
		い. メインページの作成（物件を一覧で紹介するページの作成）
		ろ. メインページからリンクする物件紹介サイトのページ作成（サンプルなので1件のみ作成）
		は. 1件を紹介する際に参照するHTMLファイルのコーディング
		に. 物件紹介サイトのVR・3Dコンテンツのタブ切り替えコンテンツ作成
	e. 全体の調整
2. サンプルが承認されたらメインサイトの作成
以下サンプルが承認されたら作成

update 2024/01/31
#要素技術の確認
-aframeが使用可能か
	使用可能。しかしサイト内でウインドウとして表示できなかった。全体の構成に関わるので要確認。
-どのような環境で開発するべきか
	基本的にローカルにpython3 http.serverを立てて、そのポートに接続して開発を行う。開発環境は家のmacと揃えたいが、dockerの環境構築にかかる時間的コストを考えると最初からmacbookのみにした方がいいと判断した。
-ファイル構成はどのようにするか
	aframeの表示がiframeなしでウインドウ表示できるか否かによる。要調査。