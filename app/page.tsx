import { ArrowDownRight, ArrowUpRight, Clock3, MapPin } from 'lucide-react';

const dishes = [
  {
    name: '桂花烟熏鸭',
    note: '龙井木 · 桂花蜜 · 时令青蔬',
    price: '¥128',
    image: '/dish-duck.jpg',
  },
  {
    name: '菌香手作豆腐',
    note: '云南菌菇 · 山泉豆腐 · 青花椒',
    price: '¥68',
    image: '/dish-tofu.jpg',
  },
  {
    name: '江南小笼',
    note: '黑猪肉 · 陈年香醋 · 鲜姜丝',
    price: '¥48',
    image: '/dish-dumpling.jpg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 text-white">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="禾宴首页"
          >
            <span className="grid size-10 place-items-center border border-white/35 font-heading text-xl">
              禾
            </span>
            <span className="font-heading text-xl tracking-[0.2em]">禾宴</span>
          </a>
          <nav
            className="hidden items-center gap-9 text-sm tracking-[0.08em] md:flex"
            aria-label="主导航"
          >
            <a className="transition-colors hover:text-[#e8c99d]" href="#story">
              关于禾宴
            </a>
            <a className="transition-colors hover:text-[#e8c99d]" href="#menu">
              本季菜单
            </a>
            <a className="transition-colors hover:text-[#e8c99d]" href="#visit">
              到店信息
            </a>
          </nav>
          <a
            href="#reservation"
            className="inline-flex h-10 items-center justify-center border border-[#d5ad78] bg-[#d5ad78] px-5 text-sm font-medium text-[#18211d] transition-colors hover:bg-[#e5c497] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5c497]"
          >
            预订餐位
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative min-h-[760px] bg-[#17201c] text-white lg:min-h-[850px]"
      >
        {/* oxlint-disable-next-line next/no-img-element */}
        <img
          src="/hero-food.jpg"
          alt="一桌精心摆盘的时令菜肴"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,29,23,.9)_0%,rgba(16,29,23,.45)_53%,rgba(16,29,23,.12)_100%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-16 pt-36 md:px-10 lg:min-h-[850px] lg:px-16 lg:pb-24">
          <div className="max-w-[730px]">
            <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.32em] text-[#e5c497]">
              <span className="h-px w-12 bg-[#d5ad78]" /> 江南时令料理 · 杭州
            </p>
            <h1 className="font-heading text-[clamp(4.5rem,10vw,9rem)] leading-[0.88] tracking-[-0.05em]">
              山野入席
              <span className="mt-3 block pl-[0.5em] text-[#e5c497]">
                四季有味
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/76 md:text-lg">
              我们循着节气寻找山川风物，以克制的火候与当代手法，
              让每一席都尝得到江南此刻的鲜活。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#reservation"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[#d5ad78] px-7 text-sm font-medium text-[#18211d] transition-colors hover:bg-[#e5c497] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5c497]"
              >
                即刻订座 <ArrowUpRight />
              </a>
              <a
                href="#menu"
                className="inline-flex h-12 items-center justify-center gap-2 border border-white/40 bg-transparent px-7 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#18211d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                查看本季菜单 <ArrowDownRight />
              </a>
            </div>
          </div>
          <div className="absolute bottom-7 right-5 hidden text-right text-xs leading-6 tracking-[0.12em] text-white/65 md:block lg:right-16">
            <p>午市 11:30 — 14:00</p>
            <p>晚市 17:30 — 22:00</p>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="bg-[#f2ede3] px-5 py-24 md:px-10 lg:px-16 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="section-kicker">OUR PHILOSOPHY</p>
            <p className="mt-8 font-heading text-2xl leading-relaxed text-[#756657]">
              一方水土，
              <br />
              一餐一季。
            </p>
          </div>
          <div>
            <h2 className="font-heading text-4xl leading-tight tracking-tight text-[#1c2822] md:text-6xl">
              不追逐繁复，
              <br />
              只呈现食材最好的样子。
            </h2>
            <div className="mt-10 grid gap-8 border-t border-[#bbae9c] pt-8 text-sm leading-7 text-[#675e54] sm:grid-cols-2">
              <p>
                清晨的笋、午后的鱼、雨后的菌。菜单随二十四节气轻轻转动，让味道与土地保持最近的距离。
              </p>
              <p>
                主厨周禾带领团队走访江浙小产区，用发酵、慢炖与炭火，重写熟悉的江南味道。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="bg-[#fbf8f2] px-5 py-24 md:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div>
              <p className="section-kicker">SEASONAL MENU · 秋</p>
              <h2 className="mt-5 font-heading text-5xl tracking-tight text-[#1c2822] md:text-7xl">
                本季风味
              </h2>
            </div>
            <a
              href="#reservation"
              className="hidden items-center gap-2 border-b border-[#342d27] pb-2 text-sm sm:flex"
            >
              品尝完整菜单 <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {dishes.map((dish, index) => (
              <article
                key={dish.name}
                className={index === 1 ? 'md:pt-20' : ''}
              >
                <div className="group relative aspect-[4/5] overflow-hidden bg-[#ded7ca]">
                  {/* oxlint-disable-next-line next/no-img-element */}
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="flex items-start justify-between border-b border-[#d2c8b8] py-5">
                  <div>
                    <h3 className="font-heading text-2xl text-[#1c2822]">
                      {dish.name}
                    </h3>
                    <p className="mt-2 text-xs tracking-wide text-[#817567]">
                      {dish.note}
                    </p>
                  </div>
                  <span className="pt-1 font-heading text-lg text-[#8b6336]">
                    {dish.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reservation"
        className="bg-[#1a2520] px-5 py-24 text-white md:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="section-kicker text-[#d5ad78]">RESERVATION</p>
            <h2 className="mt-6 max-w-3xl font-heading text-5xl leading-[1.1] md:text-7xl">
              把今晚，留给一席好味。
            </h2>
          </div>
          <div className="border-l border-white/20 pl-6 md:pl-10">
            <p className="mb-8 max-w-sm text-sm leading-7 text-white/65">
              午市与晚市均接受预订。六位以上聚餐或包间需求，请提前致电，我们会为你妥善安排。
            </p>
            <a
              href="tel:+8657188986628"
              className="inline-flex h-13 w-full items-center justify-center gap-2 bg-[#d5ad78] px-7 text-base font-medium text-[#18211d] transition-colors hover:bg-[#e5c497] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5c497] sm:w-auto"
            >
              致电预订 · 0571 8898 6628 <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <footer
        id="visit"
        className="bg-[#111a16] px-5 py-14 text-white/70 md:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1312px] gap-10 border-b border-white/10 pb-12 md:grid-cols-[1fr_auto_auto] md:gap-16">
          <div>
            <p className="font-heading text-3xl tracking-[0.16em] text-white">
              禾宴
            </p>
            <p className="mt-3 text-xs tracking-[0.22em] text-white/40">
              HEYAN · JIANGNAN DINING
            </p>
          </div>
          <div className="flex gap-3 text-sm leading-7">
            <MapPin className="mt-1 size-4 text-[#d5ad78]" />
            <p>
              杭州市西湖区灵隐路 18 号<br />
              青梧院内
            </p>
          </div>
          <div className="flex gap-3 text-sm leading-7">
            <Clock3 className="mt-1 size-4 text-[#d5ad78]" />
            <p>
              周二至周日营业
              <br />
              周一店休
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1312px] flex-col gap-3 pt-7 text-[11px] tracking-wider text-white/35 sm:flex-row sm:justify-between">
          <p>© 2026 禾宴餐厅</p>
          <p>循时而食 · 不时不食</p>
        </div>
      </footer>
    </main>
  );
}
