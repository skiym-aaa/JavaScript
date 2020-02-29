// Skipprの初期化
$("document").ready(function(){
  $(".theTarget").skippr();
});

// オプションを指定してSkipprの実行
$(".theTarget").skippr({
  // スライドショーの変化
  transition: 'fade',
  // 変化にかかる時間
  speed: 1000,
  // easingの種類
  easing : 'easeOutQuart',
  // ナビゲーションの形
  navType: 'block',
  // 子要素の種類
  childrenElementType: 'div',
  // ナビゲーション矢印の表示
  arrows: true,
  // スライドショーの自動再生
  autoPlay: true,
  // 自動再生時のスライド切り替え感覚
  autoPlayDuration: 5000,
  // キーボードの矢印キーによるスライド送りの設定
  keyboardOnAlways : true,
  // 1枚目のスライド表示に戻る矢印を表示するかどうか
  hidePrevious: false
});