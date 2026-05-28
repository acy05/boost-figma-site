import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, ArrowUp, Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import "./styles.css";

const DESKTOP_WIDTH = 1440;
const MOBILE_WIDTH = 375;
const MOBILE_BREAKPOINT = 640;

const assets = {
  homeHero: "/assets/home-hero.jpg",
  homeCity: "/assets/home-city.jpg",
  homeMeeting: "/assets/home-meeting.jpg",
  homeRoad: "/assets/home-road.jpg",
  homeTeam: "/assets/home-team.jpg",
  innerHeroBase: "/assets/inner-hero-base.jpg",
  innerHero: "/assets/inner-hero-texture.jpg",
  serviceHeroMobile: "/assets/service-hero-mobile.jpg",
  companyHeroMobile: "/assets/company-hero-mobile.jpg",
  newsHeroMobile: "/assets/news-hero-mobile.jpg",
  newsDetailHeroMobile: "/assets/news-detail-hero-mobile.jpg",
  contactHeroMobile: "/assets/contact-hero-mobile.jpg",
  privacyHeroMobile: "/assets/privacy-hero-mobile.png",
  serviceMain: "/assets/service-main.jpg",
  serviceFeature1: "/assets/service-feature-1.jpg",
  serviceFeature2: "/assets/service-feature-2.jpg",
  serviceFeature3: "/assets/service-feature-3.jpg",
  companyMission: "/assets/company-mission.jpg",
  companyPresident: "/assets/company-president.jpg",
  companyExec1: "/assets/company-exec-1.jpg",
  companyExec2: "/assets/company-exec-2.jpg",
  companyExec3: "/assets/company-exec-3.jpg",
  newsThumb: "/assets/news-thumb.jpg",
  newsDetail: "/assets/news-detail.jpg",
};

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "SERVICE", href: "/service" },
  { label: "ABOUT", href: "/company" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

const serviceText =
  "サービスの簡易的な説明が入ります。サービスの簡易的な説明が入ります。サービスの簡易的な説明が入ります。サービスの簡易的な説明が入ります。サービスの簡易的な説明が入ります。サービスの簡易的な説明が入ります。サービスの簡易的な説明が入ります。サービスの簡易的な説明が入ります。";

const featureText =
  "サービスの具体的な特徴が入ります。サービスの具体的な特徴が入ります。サービスの具体的な特徴が入ります。サービスの具体的な特徴が入ります。サービスの具体的な特徴が入ります。サービスの具体的な特徴が入ります。サービスの具体的な特徴が入ります。サービスの具体的な特徴が入ります。";

const privacyText =
  "ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。ここにプライバシーポリシー詳細が入ります。";

const newsItems = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  title: "お知らせタイトル",
  date: "2022.07.13",
  category: "TOPICS",
  excerpt:
    "お知らせ詳細が入ります。お知らせ詳細が入ります。お知らせ詳細が入ります。お知らせ詳細が入ります。お知らせ詳細が入ります。お知らせ詳細が入ります。お知らせ詳細が入ります。",
}));

function Logo() {
  return (
    <a className="logo" href="/">
      BOOST
    </a>
  );
}

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav aria-label="Global navigation" className="nav">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SocialRail() {
  return (
    <div aria-label="Social links" className="social-rail">
      <a href="/" aria-label="Instagram">
        <Instagram size={23} strokeWidth={1.7} />
      </a>
      <a href="/" aria-label="Twitter">
        <Twitter size={23} strokeWidth={1.7} />
      </a>
      <a href="/" aria-label="Facebook">
        <Facebook size={23} strokeWidth={1.7} />
      </a>
    </div>
  );
}

function ScrollHint() {
  return (
    <div className="scroll-hint" aria-hidden="true">
      <span>SCROLL</span>
      <i />
    </div>
  );
}

function SkewButton({ children, href, dark = false }: { children: React.ReactNode; href: string; dark?: boolean }) {
  return (
    <a className={dark ? "skew-button skew-button-dark" : "skew-button"} href={href}>
      <span>{children}</span>
    </a>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="page-hero">
      <img alt="" className="page-hero-image" src={assets.innerHero} />
      <div className="hero-shade" />
      <Header />
      <SocialRail />
      <ScrollHint />
      <div className="page-hero-title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

function Breadcrumb({ children }: { children: React.ReactNode }) {
  return <div className="breadcrumb">{children}</div>;
}

function Footer() {
  return (
    <footer className="footer">
      <a aria-label="Back to top" className="top-button" href="#top">
        <ArrowUp size={44} strokeWidth={1.4} />
      </a>
      <div className="footer-inner">
        <div className="footer-copy">
          <h2>
            GET IN TOUCH
            <br />
            WITH US
          </h2>
          <SkewButton href="/contact">CONTACT</SkewButton>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-line" />
        <Logo />
        <a className="footer-privacy" href="/privacy">
          PRIVACY POLICY
        </a>
        <p className="footer-copyright">©2022 BOOST INC.</p>
      </div>
    </footer>
  );
}

function PageShell({
  heroTitle,
  heroSubtitle,
  breadcrumb,
  children,
}: {
  heroTitle: string;
  heroSubtitle: string;
  breadcrumb: string;
  children: React.ReactNode;
}) {
  return (
    <main id="top" className="site-page">
      <PageHero title={heroTitle} subtitle={heroSubtitle} />
      <Breadcrumb>{breadcrumb}</Breadcrumb>
      {children}
      <Footer />
    </main>
  );
}

function HomePage() {
  return (
    <main id="top" className="site-page home-page">
      <section className="home-hero">
        <div className="home-visual">
          <img alt="" src={assets.homeHero} />
          <div className="hero-shade" />
          <Header />
          <SocialRail />
          <ScrollHint />
          <div className="home-title">
            <h1>
              BOOST YOUR
              <br />
              POTENTIAL
            </h1>
            <p>DX × 人材であなたのビジネスを加速する</p>
          </div>
        </div>
        <div className="home-statement">
          <div className="massive-line" aria-hidden="true">
            <div className="massive-word">BOOST</div>
            <div className="massive-word">BOOST</div>
          </div>
          <h2>
            走り出そう。
            <br />
            大きな成長を信じて。
          </h2>
          <p>
            創業のモチベーションを覚えていますか。
            <br />
            夢をかなえるため、見たことのない景色を見るため。
            <br />
            十人十色の志があったはずです。
          </p>
          <p className="mobile-statement-lines">
            <span>その志を同じくする仲間との切磋琢磨が今につながっている。</span>
            <span>そう感じることはありませんか。</span>
            <span>「これまで」を支えてくれた人と、</span>
            <span>「これから」をともに作る人と。</span>
          </p>
          <p className="mobile-statement-lines">
            <span>BOOSTは、あなたと「人」をつなぎ、</span>
            <span>ともに事業を成長させる。</span>
            <span>そんな存在でありたいと考えています。</span>
          </p>
        </div>
      </section>

      <section className="home-content">
        <div className="home-service">
          <img alt="" className="home-service-image" src={assets.homeCity} />
          <div className="home-service-copy">
            <p className="eyebrow">事業内容</p>
            <h2 className="section-title">SERVICE</h2>
            <p>
              BOOSTは「DX × 人材」で
              <br />
              あなたの事業を加速させます。
            </p>
            <SkewButton dark href="/service">
              VIEW MORE
            </SkewButton>
          </div>
          <img alt="" className="home-meeting-image" src={assets.homeMeeting} />
          <div className="vertical-note vertical-note-left">WE RUN AS YOUR TRUSTWORTHY PARTNER.</div>
          <p className="home-service-detail">
            人は事業の根幹であり、同時に推進力でもある、最も貴重な資源でありながら、業務環境改善や評価制度などは後回しにされがちな領域です。
            <br />
            私たちは一人ひとりの能力を最大限引き出すため人材の観点からDXソリューションを提供いたします。
          </p>
        </div>

        <div className="home-about">
          <div className="home-about-copy">
            <p className="eyebrow">事業内容</p>
            <h2 className="section-title">ABOUT</h2>
            <p>
              創業期から更なる発展期までお客様と
              <br />
              切磋琢磨して走り切る。
            </p>
            <SkewButton dark href="/company">
              VIEW MORE
            </SkewButton>
          </div>
          <img alt="" className="home-road-image" src={assets.homeRoad} />
          <img alt="" className="home-team-image" src={assets.homeTeam} />
          <p className="home-about-detail">
            採用ひとつをとっても、創業初期と、成長期ではそのニーズが変わってきます。
            <br />
            どのようなステージでも、「利用してよかった」と心から感じてもらえるように。
            <br />
            私たちは、コンサルタント一人一人の専門知識と経験を活かして、つないで終わりではない、採用支援をおこないます。
          </p>
          <div className="vertical-note vertical-note-right">WE RUN AS YOUR SUSTAINABLE PARTNER.</div>
        </div>
      </section>

      <section className="home-news">
        <div className="section-head section-head-light">
          <p className="eyebrow">お知らせ</p>
          <h2 className="section-title">NEWS</h2>
        </div>
        <div className="home-news-list">
          {["PRESS", "MEDIA", "MEDIA", "MEDIA"].map((category, index) => (
            <a className="home-news-row" href="/news/detail" key={`${category}-${index}`}>
              <span>
                <strong>2022.01.04</strong>
                <em>{category}</em>
              </span>
              <p>週間経済に代表のコメントが掲載されました。</p>
              <ArrowRight size={20} />
            </a>
          ))}
        </div>
        <SkewButton href="/news">VIEW MORE</SkewButton>
      </section>
      <Footer />
    </main>
  );
}

function ServicePage() {
  const features = [
    { number: "01", image: assets.serviceFeature1 },
    { number: "02", image: assets.serviceFeature2, reverse: true },
    { number: "03", image: assets.serviceFeature3 },
  ];

  return (
    <PageShell breadcrumb="HOME - SERVICE" heroSubtitle="事業概要" heroTitle="SERVICE">
      <section className="service-intro">
        <img alt="" className="service-main-image" src={assets.serviceMain} />
        <p>{serviceText}</p>
      </section>
      <section className="service-features">
        <div className="content-frame">
          <h2 className="jp-heading">サービスの特徴</h2>
          <div className="feature-list">
            {features.map((feature) => (
              <article className={feature.reverse ? "feature-row feature-row-reverse" : "feature-row"} key={feature.number}>
                <img alt="" src={feature.image} />
                <div>
                  <strong>{feature.number}</strong>
                  <h3>サービスのタイトル</h3>
                  <p>{featureText}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function CompanyPage() {
  const companyRows = [
    ["社名", "株式会社BOOST"],
    ["設立", "2022年4月"],
    ["資本金", "1億円"],
    ["代表者", "加速隼人"],
    ["本社電話番号", "03-1234-5678"],
    ["本社所在地", "〒123-5678 東京都渋谷区渋谷1-2-3 ABCビル7F"],
  ];

  const officers = [
    { title: "COO", name: "財前　充", image: assets.companyExec1 },
    { title: "CTO", name: "ラージ・クルハーン", image: assets.companyExec2 },
    { title: "CXO", name: "楽天　遊人", image: assets.companyExec3 },
  ];

  return (
    <PageShell breadcrumb="HOME - COMPANY" heroSubtitle="会社概要" heroTitle="COMPANY">
      <section className="company-content content-frame">
        <section className="mission">
          <h2 className="jp-heading centered">ミッション</h2>
          <p>
            ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。
          </p>
          <img alt="" src={assets.companyMission} />
        </section>

        <section className="president">
          <img alt="" src={assets.companyPresident} />
          <div className="president-copy">
            <p>
              社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。
            </p>
            <span>代表取締役　社長</span>
            <strong>加速　隼人</strong>
          </div>
        </section>

        <section className="officers">
          <h2 className="jp-heading">役員紹介</h2>
          <div className="officer-grid">
            {officers.map((officer) => (
              <article key={officer.title}>
                <img alt="" src={officer.image} />
                <p>
                  <span>{officer.title}</span>
                  <strong>{officer.name}</strong>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="company-info">
          <h2 className="jp-heading">基本情報</h2>
          <dl>
            {companyRows.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
          <h3>アクセス</h3>
          <div className="map-placeholder">google map埋め込み</div>
          <p>銀座線・半蔵門線「渋谷」駅 1番出口徒歩5分</p>
          <p>京王線「渋谷本町」駅 3番出口徒歩2分</p>
          <h3>主要取引先</h3>
          <div className="client-list">
            <strong>大手金融機関</strong>
            <p>（国内外銀行、国内外証券会社、国内外生命保険会社、国内外損保会社）、アセットマネジメント会社、M&amp;Aアドバイザリーファーム、投資ファンド（バイアウト、不動産など）</p>
            <strong>コンサル・監査法人</strong>
            <p>コンサルティングファーム、監査法人 フィナンシャルアドバイザリーファーム</p>
            <strong>事業会社</strong>
            <p>大手商社、上場企業、ターンアラウンド企業など</p>
            <strong>その他多数</strong>
          </div>
        </section>
      </section>
    </PageShell>
  );
}

function NewsCard({ item }: { item: (typeof newsItems)[number] }) {
  return (
    <a className="news-card" href="/news/detail">
      <img alt="" src={assets.newsThumb} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.excerpt}</p>
        <span>
          {item.date} - {item.category}
        </span>
      </div>
    </a>
  );
}

function NewsPage() {
  return (
    <PageShell breadcrumb="HOME - NEWS" heroSubtitle="お知らせ" heroTitle="NEWS">
      <section className="news-list content-frame">
        {newsItems.map((item) => (
          <NewsCard item={item} key={item.id} />
        ))}
        <div className="pagination" aria-label="Pagination">
          {[1, 2, 3, 4].map((page) => (
            <a className={page === 1 ? "active" : ""} href="/news" key={page}>
              {page}
            </a>
          ))}
          <a href="/news">次へ</a>
        </div>
      </section>
    </PageShell>
  );
}

function NewsDetailPage() {
  return (
    <PageShell breadcrumb="HOME - NEWS - お知らせタイトル１" heroSubtitle="お知らせ" heroTitle="NEWS">
      <article className="news-detail content-frame">
        <div className="news-detail-head">
          <p>
            <span>2022.07.13</span>
            <span>TOPICS</span>
          </p>
          <h1>お知らせタイトル１</h1>
        </div>
        <img alt="" src={assets.newsDetail} />
        <p>
          ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。
        </p>
        <a className="black-button" href="/news">
          一覧に戻る
        </a>
      </article>
    </PageShell>
  );
}

function ContactPage() {
  const fields = [
    "貴社名（必須）",
    "ご担当者名（必須）",
    "部署名（必須）",
    "役職",
    "貴社URL",
    "メールアドレス（必須）",
    "お電話番号",
  ];

  return (
    <PageShell breadcrumb="HOME - CONTACT" heroSubtitle="お問い合わせ" heroTitle="CONTACT">
      <section className="contact content-frame">
        <p className="contact-lead">
          お問い合わせ、ご相談は下記のフォームよりお問い合わせください。
          <br />
          後ほど担当者よりご連絡差し上げます。
          <br />
          なお、入力いただきましたお客様の個人情報・相談内容は弊社にて厳重に取り扱い致します。
        </p>
        <form>
          <fieldset className="contact-types">
            <legend>お問い合わせ種別</legend>
            {["サービスについてのお問い合わせ", "弊社への広告サービスのご提案", "採用について", "その他のお問い合わせ"].map((label) => (
              <label key={label}>
                <input name="type" type="radio" />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>
          <div className="field-list">
            {fields.map((field, index) => (
              <label className="text-field" key={field}>
                <span>{field}</span>
                <input defaultValue={index === 5 ? "株式会社BOOST会社" : "株式会社BOOST"} />
              </label>
            ))}
          </div>
          <label className="textarea-field">
            <span>お問い合わせ内容</span>
            <textarea />
          </label>
          <label className="textarea-field privacy-field">
            <span>個人情報のお取り扱いについて</span>
            <textarea readOnly value="" />
          </label>
          <p className="privacy-note">プライバシーポリシーの内容入れ込み</p>
          <label className="agree">
            <input type="checkbox" />
            <span>同意する</span>
          </label>
          <button type="button">送信する</button>
        </form>
      </section>
    </PageShell>
  );
}

function PrivacyPage() {
  return (
    <PageShell breadcrumb="HOME - PRIVACY POLICY" heroSubtitle="個人情報の取り扱い" heroTitle="PRIVACY POLICY">
      <section className="privacy content-frame">
        <h1>個人情報の取り扱いについて</h1>
        <p>{privacyText}</p>
      </section>
    </PageShell>
  );
}

type MobilePageProps = {
  onOpenMenu: () => void;
};

function MobileLogo({ light = false }: { light?: boolean }) {
  return (
    <a className={light ? "mobile-logo mobile-logo-light" : "mobile-logo"} href="/">
      BOOST
    </a>
  );
}

function MobileMenuButton({ onClick, close = false }: { onClick: () => void; close?: boolean }) {
  return (
    <a
      aria-label={close ? "Close menu" : "Open menu"}
      className="mobile-menu-button"
      href={close ? "/" : "/menu"}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {close ? <X size={31} strokeWidth={1.8} /> : <Menu size={31} strokeWidth={1.8} />}
    </a>
  );
}

function MobileHeader({ onOpenMenu, lightLogo = false }: MobilePageProps & { lightLogo?: boolean }) {
  return (
    <div className="mobile-header">
      <MobileLogo light={lightLogo} />
      <MobileMenuButton onClick={onOpenMenu} />
    </div>
  );
}

function MobileSkewButton({ children, href, dark = false }: { children: React.ReactNode; href: string; dark?: boolean }) {
  return (
    <a className={dark ? "mobile-skew-button mobile-skew-button-dark" : "mobile-skew-button"} href={href}>
      <span>{children}</span>
    </a>
  );
}

function MobileFooter() {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-title">
        <span>GET IN TOUCH</span>
        <span>WITH US</span>
      </div>
      <MobileSkewButton href="/contact">VIEW MORE</MobileSkewButton>
      <nav className="mobile-footer-nav" aria-label="Footer navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a aria-label="Back to top" className="mobile-top-button" href="#top">
        <ArrowUp size={34} strokeWidth={1.5} />
      </a>
      <MobileLogo light />
      <a className="mobile-footer-privacy" href="/privacy">
        PRIVACY POLICY
      </a>
      <p className="mobile-footer-copyright">©2022 BOOST INC.</p>
    </footer>
  );
}

function MobileHero({ title, subtitle, onOpenMenu, image = assets.innerHeroBase }: MobilePageProps & { title: string; subtitle: string; image?: string }) {
  return (
    <section className="mobile-page-hero">
      <img alt="" src={image} />
      <div className="mobile-page-hero-shade" />
      <MobileHeader onOpenMenu={onOpenMenu} />
      <div className="mobile-page-title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

function MobileBreadcrumb({ children }: { children: React.ReactNode }) {
  return <div className="mobile-breadcrumb">{children}</div>;
}

function MobileMenuPage({ onClose }: { onClose: () => void }) {
  return (
    <main className="mobile-menu-page">
      <MobileMenuButton close onClick={onClose} />
      <MobileLogo light />
      <nav className="mobile-menu-nav" aria-label="Mobile navigation">
        {navItems.map((item, index) => (
          <a className={index === 0 ? "active" : ""} href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="mobile-menu-privacy" href="/privacy">
        PRIVACY POLICY
      </a>
      <div aria-label="Social links" className="mobile-menu-social">
        <a href="/" aria-label="Instagram">
          <Instagram size={23} strokeWidth={1.7} />
        </a>
        <a href="/" aria-label="Twitter">
          <Twitter size={23} strokeWidth={1.7} />
        </a>
        <a href="/" aria-label="Facebook">
          <Facebook size={23} strokeWidth={1.7} />
        </a>
      </div>
      <p className="mobile-menu-copyright">©2022 BOOST INC.</p>
    </main>
  );
}

function MobileHomePage({ onOpenMenu }: MobilePageProps) {
  return (
    <main id="top" className="mobile-page mobile-home-page">
      <section className="mobile-home-hero">
        <img alt="" className="mobile-home-hero-image" src={assets.homeHero} />
        <div className="mobile-home-hero-gradient" />
        <MobileHeader onOpenMenu={onOpenMenu} />
        <div className="mobile-home-title">
          <h1>
            <span>BOOST YOUR</span>
            <span>POTENTIAL</span>
          </h1>
          <p>DX × 人材であなたのビジネスを加速する</p>
        </div>
        <div className="mobile-home-statement">
          <h2>
            走り出そう。
            <br />
            大きな成長を信じて。
          </h2>
          <p className="mobile-statement-lines">
            <span>創業のモチベーションを覚えていますか。</span>
            <span>夢をかなえるため、</span>
            <span>見たことのない景色を見るため。</span>
            <span>十人十色の志があったはずです。</span>
          </p>
          <p className="mobile-statement-lines">
            <span>その志を同じくする仲間との切磋琢磨が</span>
            <span>今につながっている。</span>
            <span>そう感じることはありませんか。</span>
            <span>「これまで」を支えてくれた人と、</span>
            <span>「これから」をともに作る人と。</span>
          </p>
          <p className="mobile-statement-lines">
            <span>BOOSTは、あなたと「人」をつなぎ、</span>
            <span>ともに事業を成長させる。</span>
            <span>そんな存在でありたいと考えています。</span>
          </p>
        </div>
      </section>

      <section className="mobile-home-content">
        <div className="mobile-home-service-head">
          <p>事業内容</p>
          <h2>SERVICE</h2>
          <strong>
            BOOSTは「DX × 人材」で
            <br />
            あなたの事業を加速させます。
          </strong>
          <MobileSkewButton dark href="/service">
            VIEW MORE
          </MobileSkewButton>
        </div>
        <img alt="" className="mobile-home-service-image" src={assets.homeMeeting} />
        <div className="mobile-home-service-detail">
          <div className="mobile-vertical-note" aria-label="WE RUN AS YOUR TRUSTWORTHY PARTNER.">
            <span>
              <em>WE RUN AS</em>
            </span>
            <span>
              <em>YOUR TRUSTWORTHY</em>
            </span>
            <span>
              <em>PARTNER.</em>
            </span>
          </div>
          <p className="mobile-service-lines">
            <span>人は事業の根幹であり、同時に推進力でも</span>
            <span>ある、最も貴重な資源でありながら、業務</span>
            <span>環境改善や評価制度などは</span>
            <span>後回しにされがちな領域です。</span>
            <span>私たちは一人ひとりの能力を最大限引き出</span>
            <span>すため人材の観点から</span>
            <span>
              <b>DX</b>ソリューションを提供いたします。
            </span>
          </p>
        </div>

        <div className="mobile-home-about-head">
          <p>事業内容</p>
          <h2>ABOUT</h2>
          <strong>
            創業期から更なる発展期までお客様と
            <br />
            切磋琢磨して走り切る。
          </strong>
          <MobileSkewButton dark href="/company">
            VIEW MORE
          </MobileSkewButton>
        </div>
        <img alt="" className="mobile-home-road-image" src={assets.homeCity} />
        <img alt="" className="mobile-home-about-image" src={assets.homeTeam} />
        <img alt="" className="mobile-home-team-image" src={assets.homeRoad} />
        <div className="mobile-home-about-detail">
          <p className="mobile-about-lines">
            <span>採用ひとつをとっても、創業初期と、成長</span>
            <span>期ではそのニーズが変わってきます。</span>
            <span>どのようなステージでも、「利用してよ</span>
            <span>かった」と心から感じてもらえるように。</span>
            <span>私たちは、コンサルタント一人一人の専門</span>
            <span>知識と経験を活かして、</span>
            <span>つないで終わりではない、採用支援をおこ</span>
            <span>ないます。</span>
          </p>
          <div className="mobile-vertical-note" aria-label="WE RUN AS YOUR SUSTAINABLE PARTNER.">
            <span>
              <em>WE RUN AS</em>
            </span>
            <span>
              <em>YOUR SUSTAINABLE</em>
            </span>
            <span>
              <em>PARTNER.</em>
            </span>
          </div>
        </div>
      </section>

      <section className="mobile-home-news">
        <p className="mobile-news-eyebrow">お知らせ</p>
        <h2>NEWS</h2>
        <div className="mobile-home-news-list">
          {["PRESS", "MEDIA", "MEDIA", "MEDIA"].map((category, index) => (
            <a className="mobile-home-news-row" href="/news/detail" key={`${category}-${index}`}>
              <span>
                <strong>2022.01.04</strong>
                <em>{category}</em>
              </span>
              <p>週間経済に代表のコメントが掲載されました。</p>
              <ArrowRight size={15} strokeWidth={1.6} />
            </a>
          ))}
        </div>
      </section>
      <MobileFooter />
    </main>
  );
}

function MobileSubPageShell({
  title,
  subtitle,
  breadcrumb,
  children,
  onOpenMenu,
  className,
  heroImage,
}: MobilePageProps & {
  title: string;
  subtitle: string;
  breadcrumb: string;
  children: React.ReactNode;
  className: string;
  heroImage?: string;
}) {
  return (
    <main id="top" className={`mobile-page ${className}`}>
      <MobileHero title={title} subtitle={subtitle} image={heroImage} onOpenMenu={onOpenMenu} />
      <MobileBreadcrumb>{breadcrumb}</MobileBreadcrumb>
      {children}
      <MobileFooter />
    </main>
  );
}

function MobileServicePage({ onOpenMenu }: MobilePageProps) {
  const features = [
    { number: "01", image: assets.serviceFeature1 },
    { number: "02", image: assets.serviceFeature2 },
    { number: "03", image: assets.serviceFeature3 },
  ];

  return (
    <MobileSubPageShell breadcrumb="HOME - SERVICE" className="mobile-service-page" heroImage={assets.serviceHeroMobile} subtitle="事業概要" onOpenMenu={onOpenMenu} title="SERVICE">
      <section className="mobile-service-intro">
        <img alt="" src={assets.serviceMain} />
        <p>{serviceText}</p>
      </section>
      <section className="mobile-service-features">
        <h2>サービスの特徴</h2>
        <div className="mobile-feature-list">
          {features.map((feature) => (
            <article className="mobile-feature-card" key={feature.number}>
              <img alt="" src={feature.image} />
              <div>
                <strong>{feature.number}</strong>
                <h3>サービスのタイトル</h3>
                <p>{featureText}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </MobileSubPageShell>
  );
}

function MobileCompanyPage({ onOpenMenu }: MobilePageProps) {
  const companyRows = [
    ["社名", "株式会社BOOST"],
    ["設立", "2022年4月"],
    ["資本金", "1億円"],
    ["代表者", "加速隼人"],
    ["本社電話番号", "03-1234-5678"],
    ["本社所在地", "〒123-5678 東京都渋谷区渋谷1-2-3 ABCビル7F"],
  ];

  const officers = [
    { title: "COO", name: "財前　充", image: assets.companyExec1 },
    { title: "CTO", name: "ラージ・クルハーン", image: assets.companyExec2 },
    { title: "CXO", name: "楽天　遊人", image: assets.companyExec3 },
  ];

  return (
    <MobileSubPageShell breadcrumb="HOME - COMPANY" className="mobile-company-page" heroImage={assets.companyHeroMobile} subtitle="会社概要" onOpenMenu={onOpenMenu} title="COMPANY">
      <section className="mobile-company-body">
        <section className="mobile-mission">
          <h2>ミッション</h2>
          <p>
            ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。ここにミッションが入ります。
          </p>
          <img alt="" src={assets.companyMission} />
        </section>
        <section className="mobile-president">
          <div className="mobile-president-sign">
            <span>代表取締役　社長</span>
            <strong>加速　隼人</strong>
          </div>
          <p>
            社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。社長挨拶が入ります。
          </p>
          <img alt="" src={assets.companyPresident} />
        </section>
        <section className="mobile-officers">
          <h2>役員紹介</h2>
          {officers.map((officer) => (
            <article key={officer.title}>
              <p>
                <span>{officer.title}</span>
                <strong>{officer.name}</strong>
              </p>
              <img alt="" src={officer.image} />
            </article>
          ))}
        </section>
        <section className="mobile-company-info">
          <h2>基本情報</h2>
          <dl>
            {companyRows.map(([term, description]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
          <h3>アクセス</h3>
          <div className="mobile-map-placeholder">google map埋め込み</div>
          <p>銀座線・半蔵門線「渋谷」駅 1番出口徒歩5分</p>
          <p>京王線「渋谷本町」駅 3番出口徒歩2分</p>
          <h3>主要取引先</h3>
          <div className="mobile-client-list">
            <strong>大手金融機関</strong>
            <p>（国内外銀行、国内外証券会社、国内外生命保険会社、国内外損保会社）、アセットマネジメント会社、M&amp;Aアドバイザリーファーム、投資ファンド（バイアウト、不動産など）</p>
            <strong>コンサル・監査法人</strong>
            <p>コンサルティングファーム、監査法人 フィナンシャルアドバイザリーファーム</p>
            <strong>事業会社</strong>
            <p>大手商社、上場企業、ターンアラウンド企業など</p>
            <strong>その他多数</strong>
          </div>
        </section>
      </section>
    </MobileSubPageShell>
  );
}

function MobileNewsListCard({ item }: { item: (typeof newsItems)[number] }) {
  return (
    <a className="mobile-news-list-card" href="/news/detail">
      <img alt="" src={assets.newsThumb} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.excerpt}</p>
        <span>
          {item.date} - {item.category}
        </span>
      </div>
    </a>
  );
}

function MobileNewsPage({ onOpenMenu }: MobilePageProps) {
  return (
    <MobileSubPageShell breadcrumb="HOME - NEWS" className="mobile-news-page" heroImage={assets.newsHeroMobile} subtitle="お知らせ" onOpenMenu={onOpenMenu} title="NEWS">
      <section className="mobile-news-list-page">
        <div className="mobile-card-list">
          {newsItems.slice(0, 4).map((item) => (
            <MobileNewsListCard item={item} key={item.id} />
          ))}
        </div>
        <div className="mobile-pagination" aria-label="Pagination">
          {[1, 2, 3, 4].map((page) => (
            <a className={page === 1 ? "active" : ""} href="/news" key={page}>
              {page}
            </a>
          ))}
          <a className="next" href="/news">
            次へ
          </a>
        </div>
      </section>
    </MobileSubPageShell>
  );
}

function MobileNewsDetailPage({ onOpenMenu }: MobilePageProps) {
  return (
    <MobileSubPageShell breadcrumb="HOME - NEWS - お知らせタイトル１" className="mobile-news-detail-page" heroImage={assets.newsDetailHeroMobile} subtitle="お知らせ" onOpenMenu={onOpenMenu} title="NEWS">
      <article className="mobile-news-detail">
        <div className="mobile-news-detail-head">
          <p>
            <span>2022.07.13</span>
            <span>TOPICS</span>
          </p>
          <h1>お知らせタイトル</h1>
        </div>
        <img alt="" src={assets.newsDetail} />
        <p>
          ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。ここに記事が入ります。
        </p>
        <a className="mobile-black-button" href="/news">
          一覧に戻る
        </a>
      </article>
    </MobileSubPageShell>
  );
}

function MobileContactPage({ onOpenMenu }: MobilePageProps) {
  const fields = ["貴社名（必須）", "ご担当者名（必須）", "部署名（必須）", "役職", "貴社URL", "メールアドレス（必須）", "お電話番号"];

  return (
    <MobileSubPageShell breadcrumb="HOME - CONTACT" className="mobile-contact-page" heroImage={assets.contactHeroMobile} subtitle="お問い合わせ" onOpenMenu={onOpenMenu} title="CONTACT">
      <section className="mobile-contact-body">
        <p className="mobile-contact-lead">
          お問い合わせ、ご相談は下記のフォームよりお問い合わせください。
          <br />
          後ほど担当者よりご連絡差し上げます。
          <br />
          なお、入力いただきましたお客様の個人情報・相談内容は弊社にて厳重に取り扱い致します。
        </p>
        <form>
          <fieldset className="mobile-contact-types">
            <legend>お問い合わせ種別</legend>
            {["サービスについてのお問い合わせ", "弊社への広告サービスのご提案", "採用について", "その他のお問い合わせ"].map((label, index) => (
              <label key={label}>
                <input defaultChecked={index === 1} name="type" type="radio" />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>
          <div className="mobile-field-list">
            {fields.map((field, index) => (
              <label className="mobile-text-field" key={field}>
                <span>{field}</span>
                <input defaultValue={index === 5 ? "株式会社BOOST会社" : "株式会社BOOST"} />
              </label>
            ))}
          </div>
          <label className="mobile-textarea-field">
            <span>お問い合わせ内容</span>
            <textarea />
          </label>
          <label className="mobile-textarea-field mobile-privacy-field">
            <span>個人情報のお取り扱いについて</span>
            <textarea readOnly value="" />
          </label>
          <p className="mobile-privacy-note">プライバシーポリシーの内容入れ込み</p>
          <label className="mobile-agree">
            <input type="checkbox" />
            <span>同意する</span>
          </label>
          <button type="button">送信する</button>
        </form>
      </section>
    </MobileSubPageShell>
  );
}

function MobilePrivacyPage({ onOpenMenu }: MobilePageProps) {
  return (
    <MobileSubPageShell
      breadcrumb="HOME - PRIVACY POLICY"
      className="mobile-privacy-page"
      heroImage={assets.privacyHeroMobile}
      subtitle="個人情報の取り扱い"
      onOpenMenu={onOpenMenu}
      title={"PRIVACY\nPOLICY"}
    >
      <section className="mobile-privacy">
        <h1>個人情報の取り扱いについて</h1>
        <p>{privacyText}</p>
      </section>
    </MobileSubPageShell>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const [viewportWidth, setViewportWidth] = React.useState(() => window.innerWidth);
  const [canvasHeight, setCanvasHeight] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const canvasRef = React.useRef<HTMLDivElement>(null);
  const isMobile = viewportWidth <= MOBILE_BREAKPOINT;
  const designWidth = isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;

  React.useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  React.useLayoutEffect(() => {
    const updateCanvasHeight = () => {
      if (canvasRef.current) {
        setCanvasHeight(canvasRef.current.scrollHeight);
      }
    };

    updateCanvasHeight();

    const observer = new ResizeObserver(updateCanvasHeight);
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    window.addEventListener("load", updateCanvasHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("load", updateCanvasHeight);
    };
  }, [path, isMobile, isMobileMenuOpen]);

  const scale = viewportWidth / designWidth;

  let page: React.ReactNode;
  if (isMobile && isMobileMenuOpen) page = <MobileMenuPage onClose={() => setIsMobileMenuOpen(false)} />;
  else if (isMobile && path === "/menu") page = <MobileMenuPage onClose={() => window.history.length > 1 ? window.history.back() : window.location.assign("/")} />;
  else if (isMobile && path === "/service") page = <MobileServicePage onOpenMenu={() => setIsMobileMenuOpen(true)} />;
  else if (isMobile && path === "/company") page = <MobileCompanyPage onOpenMenu={() => setIsMobileMenuOpen(true)} />;
  else if (isMobile && path === "/news") page = <MobileNewsPage onOpenMenu={() => setIsMobileMenuOpen(true)} />;
  else if (isMobile && path === "/news/detail") page = <MobileNewsDetailPage onOpenMenu={() => setIsMobileMenuOpen(true)} />;
  else if (isMobile && path === "/contact") page = <MobileContactPage onOpenMenu={() => setIsMobileMenuOpen(true)} />;
  else if (isMobile && path === "/privacy") page = <MobilePrivacyPage onOpenMenu={() => setIsMobileMenuOpen(true)} />;
  else if (isMobile) page = <MobileHomePage onOpenMenu={() => setIsMobileMenuOpen(true)} />;
  else if (path === "/service") page = <ServicePage />;
  else if (path === "/company") page = <CompanyPage />;
  else if (path === "/news") page = <NewsPage />;
  else if (path === "/news/detail") page = <NewsDetailPage />;
  else if (path === "/contact") page = <ContactPage />;
  else if (path === "/privacy") page = <PrivacyPage />;
  else page = <HomePage />;

  return (
    <div className="scale-shell" style={{ height: canvasHeight ? `${canvasHeight * scale}px` : undefined }}>
      <div className="scale-canvas" ref={canvasRef} style={{ transform: `scale(${scale})`, width: `${designWidth}px` }}>
        {page}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
