### 課題１

**- `network` という用語は、物流、コンピューター、神経など様々な分野で使われます。このnetworkの一般的な定義を自分の言葉で説明してください。**

ルーターの集まり。ルーターとルーターの間の空間。一つの組織が運営するネットワーク全体世界で唯一のAS番号が割り当てられる


**- `internet` という用語の意味を説明してください。その際に、`network` という用語を交えて説明してください。**

ネットワークの集まり。複数の組織のネットワークが繋がっていること。

### 課題２

**- データ通信におけるインターフェイスの役割と、それがなぜ重要かを述べてください。**

機器同士を接続させることでデータ転送や通信を行い、一つの機器ではできないことを実現するための規格。外部機器のデータをパソコンに読み込んだり外部機器の機能をパソコンで実行したりすることができるため

**- プロトコルとは何か説明してください。**

通信契約で通信時の約束事。コンピューター間で取り決めた誰とでも通信できるようにするための約束事。
例：郵便だと宛先の郵便番号をここに書く、宛先の住所と名前を書くといった約束の通りにすれば宛先に届く

**- データ通信でプロトコルが果たす役割と、その重要性について述べてください。**

データの送受信を円滑に行うための共通ルールとして機能し、プロトコルがあることで異なるシステムやデバイス間でも同じルールで取り決めを作るので別メーカーの機器同士でも情報交換を可能にできる。

### 課題３

**- 回線交換方式について、基本的な原理と特徴を自分の言葉で説明してください。どのようなシナリオで利用されるか、その利点と制限を考察してください。**

端末間においてデータの送受信を行う方式の事で一つの回線を占有して通信を行います。おもに電話に使われる際に利用しており、接続した回線は専有して利用できるため、セキュリティや速度の面で優れていますが、１：１の接続が原則のため、１つの機器を使用している時は、同時に他の回線と接続することができないため伝送効率は悪いです。

**- パケット交換方式についても同様に、基本的な原理と特徴を説明し、回線交換方式と比較して、どのような利点があるかを述べてください。**

コンピューターからコンピューターにデータを届ける時に、小分けに分割(パケット化)して送信する。受け取る側は分割したデータを組み立てて元の形に直す。
分割して送ることで、細かく分けたデータの間に空いている回線を使って他の人が送った別データも送れる。つまり同時に複数のやりとりが可能になり、一本の回線を占有せずに複数のコンピューターで効率よくシェアすることができる。

**- ネットワークのデータ通信における回線交換方式の制限と、パケット交換方式の導入によって解決された問題点を挙げてください。**

回線交換方式は通信中は回線を占有してしまうので、２ヶ所以上の相手と同時に通信することができず制限がかかってしまっていましたが、パケット交換方式の導入により通信が必要なとき以外は回線を開放することが可能になり、複数人が同じ回線を共有することができました。

**- `パケット交換機（ルーター）`/`セグメント`/`ハブ`/`マルチアクセスネットワーク`/`ポイントツーポイントネットワーク`といった用語を解説してください。各用語がネットワークにおいてどのような役割を果たすのか、その意義について具体的に説明してください。**

**- パケット交換機（ルーター）**　
　パケット化されたデータを、宛先別に振り分ける装置。ルーターはパケットを受け取ると，ルーター内にある経路表とパケットのアドレスを照合して，次のルーターへの回線を選びパケットを送ります。

**- セグメント**
　集団やまとまりを区切ること、1つの範囲内に区分された小さなネットワーク（LAN）のまとまりをセグメントと呼びます

**- ハブ**
複数のLANケーブルをつなげる集線装置。インターネットにつなげたいパソコンなどの接続機器を増やす役割があります。

**- マルチアクセスネットワーク**
２台以上のルータと接続しているネットワーク

**- ポイントツーポイントネットワーク**　
通信回線の接続方式のひとつで2台の機器や2ヵ所の地点を1対1に接続する接続形態のこと。


### 課題４

**- `LAN`と`WAN`の定義を説明し、両者の主な違いについて比較してください。**

LANは比較的狭い範囲・限定したエリアのネットワーク（距離の明確な定義はありませんが、約数メートルから数キロほどの範囲）
WANはipsの回線を介して接続されているインターネット。離れた複数のLANを接続するためのネットワークで、より広い範囲ネットワーク（都市間や日本中、世界中までと広範囲）

 **- それぞれがどのような用途で使われるかを説明してください。**

LANは家庭内や社内で使用するネットワークで、pcやスマホをルーター(無線LANルーターや有線LANルーター)に接続して使用。
WANは企業が持っているローカルネットワークを相互に接続し、データの転送などを行う目的で使用。

**- `ISP`が提供するサービスと、インターネット接続においてISPが果たす役割について解説してください。**

ISPが提供するサービスはインターネットの接続のほか、電子メールのアカウント、Webページを公開するためのスペース、IP電話などで、回線への接続を仲介する役割

