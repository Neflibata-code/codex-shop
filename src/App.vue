<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight, Clock3, Leaf, MapPin, MoveDown, Phone } from 'lucide-vue-next';

const dishes = [
  { name: '桂花烟熏鸭', note: '龙井木 · 桂花蜜 · 时令青蔬', price: '¥128', image: '/dish-duck.jpg', number: '01' },
  { name: '菌香手作豆腐', note: '云南菌菇 · 山泉豆腐 · 青花椒', price: '¥68', image: '/dish-tofu.jpg', number: '02' },
  { name: '江南小笼', note: '黑猪肉 · 陈年香醋 · 鲜姜丝', price: '¥48', image: '/dish-dumpling.jpg', number: '03' },
];
</script>

<template>
  <main>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="禾宴首页"><span>禾</span><b>禾宴</b></a>
      <nav aria-label="主导航">
        <a href="#story">山川之味</a><a href="#menu">当季菜单</a><a href="#visit">到店信息</a>
      </nav>
      <a class="header-book" href="#reservation">预订餐位 <ArrowUpRight :size="16" /></a>
    </header>

    <section id="top" class="hero">
      <img src="/hero-food.jpg" alt="一桌精心摆盘的时令菜肴" />
      <div class="hero-wash"></div>
      <div class="hero-content">
        <p class="eyebrow light"><i></i> 杭州 · 江南时令料理</p>
        <p class="hero-season">二〇二六 · 秋</p>
        <h1>山野入席 <em>四季有味</em></h1>
        <p class="hero-copy">循着节气寻找山川风物，以克制的火候与当代手法，让每一席都尝得到江南此刻的鲜活。</p>
        <div class="hero-actions"><a class="button gold" href="#reservation">即刻订座 <ArrowUpRight :size="18" /></a><a class="button ghost" href="#menu">览当季菜单 <ArrowDownRight :size="18" /></a></div>
      </div>
      <div class="hero-bottom"><span>午市 11:30 — 14:00</span><span>晚市 17:30 — 22:00</span><a href="#story" aria-label="向下浏览"><MoveDown :size="22" /></a></div>
    </section>

    <section id="story" class="story section-pad">
      <div class="story-aside"><p class="eyebrow"><i></i> OUR PHILOSOPHY</p><div class="vertical-note">一方水土 · 一餐一季</div></div>
      <div class="story-main"><p class="display-quote">不追逐繁复，<br />只呈现食材<span>最好的样子。</span></p><div class="story-text"><p>清晨的笋、午后的鱼、雨后的菌。菜单随二十四节气轻轻转动，让味道与土地保持最近的距离。</p><p>主厨周禾带领团队走访江浙小产区，用发酵、慢炖与炭火，重写熟悉的江南味道。</p></div><div class="story-mark"><Leaf :size="18" /> <span>时 · 地 · 人</span></div></div>
    </section>

    <section id="menu" class="menu section-pad">
      <div class="menu-intro"><div><p class="eyebrow"><i></i> SEASONAL MENU · 秋</p><h2>本季<br /><em>风味</em></h2></div><p>从枝头至餐桌，<br />让风土落在每一口之间。</p></div>
      <div class="dish-grid"><article v-for="(dish, index) in dishes" :key="dish.name" :class="['dish-card', { offset: index === 1 }]" ><div class="dish-image"><img :src="dish.image" :alt="dish.name" loading="lazy" /><span>{{ dish.number }}</span></div><div class="dish-info"><div><h3>{{ dish.name }}</h3><p>{{ dish.note }}</p></div><strong>{{ dish.price }}</strong></div></article></div>
      <a class="menu-link" href="#reservation">品尝完整菜单 <ArrowUpRight :size="18" /></a>
    </section>

    <section id="reservation" class="reservation section-pad">
      <div><p class="eyebrow light"><i></i> RESERVATION</p><h2>把今晚，<br /><em>留给一席好味。</em></h2></div>
      <div class="booking-card"><span class="card-index">01 — 预订餐位</span><p>午市与晚市均接受预订。六位以上聚餐或包间需求，请提前致电，我们会为你妥善安排。</p><a href="tel:+8657188986628"><Phone :size="17" /> 0571 8898 6628 <ArrowUpRight :size="17" /></a></div>
    </section>

    <footer id="visit"><div class="footer-top"><div><a class="brand footer-brand" href="#top"><span>禾</span><b>禾宴</b></a><p>HEY AN · JIANGNAN DINING</p></div><div class="visit-detail"><MapPin :size="18" /><p>杭州市西湖区灵隐路 18 号<br />青梧院内</p></div><div class="visit-detail"><Clock3 :size="18" /><p>周二至周日营业<br />周一店休</p></div></div><div class="footer-bottom"><span>© 2026 禾宴餐厅</span><span>循时而食 · 不时不食</span><a href="#top">回到页首 ↑</a></div></footer>
  </main>
</template>
