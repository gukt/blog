export default function Portfolio() {
  return (
    <>
      <p>
        自 2018
        年以来，诺玛一直通过平面设​​计、网页开发、编辑设计和企业品牌推广尝试激进的想法，她相信一张用
        Times New Roman 字体快速打印的 A4
        纸比任何装饰或神秘化都能更好地、更有效地进行沟通。
      </p>
      <p id="portfolio-desc" className="sr-only">
        以下是老司机的作品列表
      </p>
      <div className="mt-10">
        <a
          href="/en/projects/torino-design-info/"
          aria-label="TorinoDesign.info 出版物“意大利：新的集体景观”。2023"
        >
          <figure>
            <img
              className="regular"
              alt="书籍设计"
              src="https://images.prismic.io/normadesign/b2f18ca5-bba9-4d97-93de-4209ab9f0012_homepage-torinodesign.png"
            />
            <figcaption className="text-base">
              <h3>都灵设计信息</h3>
              <p>《意大利：新的集体景观》出版物。2023 年</p>
            </figcaption>
          </figure>
        </a>
      </div>
    </>
  );
}
