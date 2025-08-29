-- 研修課題1
-- customerテーブルに含まれる全ての列のデータを取得するSELECT文を作成してください。

SELECT \* FROM customer;

-- customerテーブルから、last_nameとfirst_nameの列だけを取得するSELECT文を作成してください。

SELECT last_name, first_name FROM customer;


-- 研修課題2
-- customerテーブルのfirst_name列とlast_name列の値を連結し、間に半角スペースを入れて表示するSELECT文を作成してください。

SELECT last_name || ' ' || first_name FROM customer;

-- 研修課題3
-- 実践課題2で作成したSQL文を基に、連結して作成した列にfull_nameという分かりやすい名前（列エイリアス）を付けて表示するようにしてください。

SELECT last_name || ' ' || first_name AS "full_name" FROM customer;

-- 研修課題4

-- customerテーブルの全てのデータを、last_nameのアルファベット順（昇順）で並び替えて表示するSELECT文を作成してください。
SELECT \* FROM customer ORDER BY last_name ASC;-- ASCはデフォルトだから省略可能


-- customerテーブルの全てのデータを、create_dateが新しい順（降順）で並び替えて表示するSELECT文を作成してください。
SELECT \* FROM customer ORDER BY create_date DESC;

-- customerテーブルのデータを、まずfirst_nameのアルファベット順（昇順）で並び替え、first_nameが同じ場合はlast_nameのアルファベット順（降順）で並び替えて表示するSELECT文を作成してください。
SELECT \* FROM customer ORDER BY first_name ASC, last_name DESC