export type Locale = "en" | "vi";

export type DomainItem = {
  title: string;
  details?: [string, string][];
  body?: string;
};

export type FaqItem = { question: string; answer: string };
export type ProjectText = { category: string; description: string; imageAlt: string };

type SectionText = {
  first: string;
  second?: string;
  description: string;
  eyebrowLeft: string;
  eyebrowRight: string;
};

export type StudioCopy = {
  pageTitle: string;
  pageDescription: string;
  navigation: string[];
  menu: { open: string; close: string; dialog: string; main: string; tagline: string };
  loader: { label: string; tagline: string; loading: string };
  video: { play: string; pause: string };
  hero: { label: string; caption: string; expertise: string[]; summary: string };
  manifesto: {
    label: string;
    heading: string;
    corners: string[];
    words: [[string, string], [string, string]];
  };
  domain: SectionText & { sideNote: string; items: DomainItem[] };
  recognition: { label: string; copy: string; stats: [string, string, string] };
  services: SectionText & { items: string[] };
  work: SectionText & { projects: ProjectText[]; visit: string; newTab: string };
  faq: SectionText & { promptFirst: string; promptSecond: string; contact: string; items: FaqItem[] };
  footer: {
    accessibleHeading: string;
    first: string;
    second: string;
    script: string;
    copy: string;
    contact: string;
    backToTop: string;
  };
};

export const studioCopy: Record<Locale, StudioCopy> = {
  en: {
    pageTitle: "LOREM Technology — Digital Experiences",
    pageDescription: "LOREM Technology crafts Web3 solutions, immersive games, scalable architectures, and seamless digital experiences.",
    navigation: ["Home", "Our Domain", "Services", "Selected Work", "FAQ", "Contact"],
    menu: {
      open: "Open navigation",
      close: "Close navigation",
      dialog: "Site navigation",
      main: "Main navigation",
      tagline: "Building the future of digital experiences.",
    },
    loader: { label: "Loading LOREM Technology", tagline: "BUILDING DIGITAL EXPERIENCES", loading: "LOADING" },
    video: { play: "Play background video", pause: "Pause background video" },
    hero: {
      label: "Introduction",
      caption: "Building the Future of Digital Experiences",
      expertise: ["Web3 Development", "Game Development", "Solution Architecture", "UX UI design"],
      summary: "We craft innovative Web3 solutions, immersive games, scalable architectures, and seamless user experiences—empowering businesses to thrive in the digital era.",
    },
    manifesto: {
      label: "Our approach",
      heading: "Boost impact. Drive results.",
      corners: ["Unleash Brand Potential", "Achieve Tangible Results", "Shape Lasting Impact", "Make Your Mark"],
      words: [["BOOST", "IMPACT"], ["DRIVE", "RESULTS"]],
    },
    domain: {
      first: "OUR", second: "DOMAIN",
      description: "FROM IDEATION TO EXECUTION, WE TURN YOUR VISION INTO EXTRAORDINARY OUTCOMES",
      eyebrowLeft: "PROCESS", eyebrowRight: "DEVELOP",
      sideNote: "WHAT WE BUILD / HOW WE BUILD IT",
      items: [
        {
          title: "Core Stack",
          details: [
            ["Lang", "TypeScript everywhere"],
            ["Frontend", "Next.js + React, Tailwind, shadcn/ui"],
            ["Mobile", "React Native (Expo) / Flutter"],
            ["Backend", "NestJS (Node), FastAPI (Python), Go"],
            ["DB & Cache", "PostgreSQL + Prisma, Redis"],
            ["Auth", "WebAuthn + Clerk/Auth0"],
            ["Infra", "Docker, GitHub Actions, AWS, Cloudflare, Google Cloud"],
            ["Monitoring", "Grafana, Sentry"],
          ],
        },
        { title: "Web3 Development", body: "We turn ambitious Web3 ideas into intuitive digital products, from early concepts and interface design to secure, scalable implementation." },
        { title: "Game Development", body: "Immersive worlds and memorable interactions come together through thoughtful design, compelling storytelling, and technical craft." },
        { title: "Solution Architecture", body: "We shape robust technology foundations that connect the right systems, people, and experiences as your product grows." },
      ],
    },
    recognition: {
      label: "Our numbers",
      copy: "LOREM Technology is proud to have received recognition from prestigious design and innovation platforms",
      stats: ["Number Of Projects", "Number Of Partners", "Backed By"],
    },
    services: {
      first: "SERVICES",
      description: "We merge creativity with technical excellence to deliver products that inspire, engage, and perform.",
      eyebrowLeft: "SERVICE", eyebrowRight: "OFFER",
      items: ["Website Design & Development", "UX/UI Design", "Game Development", "Solution Architecture"],
    },
    work: {
      first: "SELECTED", second: "WORK",
      description: "DIGITAL EXPERIENCES FOR AGRICULTURE, CONTENT, AND SOFTWARE COMMERCE",
      eyebrowLeft: "LATEST WORK", eyebrowRight: "03 SELECTED PROJECTS",
      projects: [
        { category: "AGRICULTURE / DIGITAL ASSETS", description: "A digital home for agricultural asset digitization, connecting blockchain and IoT with a more transparent farming ecosystem.", imageAlt: "DDC Holdings brand artwork with seedlings and its Grow Smarter, Harvest Better message" },
        { category: "CONTENT / CREATIVE STUDIO", description: "A strategy-led website for a TikTok content studio, bringing its production services and real client work into focus.", imageAlt: "Xây Kênh TikTok studio artwork featuring mobile video projects across industries" },
        { category: "COMMERCE / SOFTWARE", description: "A clear storefront for Microsoft software licenses, helping individuals and businesses compare options and find the right fit.", imageAlt: "Việt License artwork showing Microsoft Windows and Office software products" },
      ],
      visit: "VIEW WEBSITE", newTab: "opens in a new tab",
    },
    faq: {
      first: "CLEAR", second: "ANSWERS",
      description: "We believe in transparency. From the first call to final delivery, you’ll always know where your project stands, what’s next, and how we’re building it together.",
      eyebrowLeft: "FAQ", eyebrowRight: "YOUR QUESTION",
      promptFirst: "CAN’T SPOT", promptSecond: "YOUR QUERY?", contact: "CONTACT",
      items: [
        { question: "What services does LOREM Technology offer?", answer: "We bring together website design and development, UX/UI design, game development, Web3 development, and solution architecture to build digital experiences tailored to your goals." },
        { question: "How long does a typical project take?", answer: "Every project is different. After we understand the scope, complexity, and desired outcomes, we share a clear timeline and milestones before work begins." },
        { question: "Do you offer custom solutions?", answer: "Yes. We shape each solution around the specific product, audience, and technical needs rather than forcing a one-size-fits-all approach." },
        { question: "What industries do you work with?", answer: "Our approach adapts to a wide range of industries. Tell us about your idea and we will explore what makes sense for your audience and context." },
        { question: "What is your pricing model?", answer: "Pricing depends on the scope and requirements. Contact us to discuss your project and receive an estimate tailored to the work involved." },
      ],
    },
    footer: {
      accessibleHeading: "Blending technology with productivity",
      first: "BLENDING", second: "TECHNOLOGY", script: "With Productivity",
      copy: "We don’t just build solutions—we create digital experiences that last. Let’s bring your next big idea to life together.",
      contact: "Contact Us", backToTop: "BACK TO TOP ↑",
    },
  },
  vi: {
    pageTitle: "LOREM Technology — Trải nghiệm số",
    pageDescription: "LOREM Technology thiết kế và phát triển website, sản phẩm Web3, game và giải pháp số theo nhu cầu của bạn.",
    navigation: ["Trang chủ", "Năng lực", "Dịch vụ", "Dự án", "Hỏi đáp", "Liên hệ"],
    menu: {
      open: "Mở menu",
      close: "Đóng menu",
      dialog: "Menu điều hướng",
      main: "Điều hướng chính",
      tagline: "Kiến tạo trải nghiệm số.",
    },
    loader: { label: "Đang tải LOREM Technology", tagline: "KIẾN TẠO TRẢI NGHIỆM SỐ", loading: "ĐANG TẢI" },
    video: { play: "Phát video nền", pause: "Tạm dừng video nền" },
    hero: {
      label: "Giới thiệu",
      caption: "Kiến tạo trải nghiệm số",
      expertise: ["Phát triển Web3", "Phát triển game", "Kiến trúc giải pháp", "Thiết kế UX/UI"],
      summary: "Chúng tôi thiết kế và phát triển sản phẩm số từ ý tưởng đến vận hành: Web3, game, kiến trúc hệ thống và trải nghiệm người dùng.",
    },
    manifesto: {
      label: "Cách chúng tôi làm việc",
      heading: "Nâng tầm giá trị. Hướng tới hiệu quả.",
      corners: ["Khai mở tiềm năng", "Hiệu quả rõ ràng", "Dấu ấn bền lâu", "Khác biệt từ chi tiết"],
      words: [["NÂNG", "GIÁ TRỊ"], ["TẦM", "HIỆU QUẢ"]],
    },
    domain: {
      first: "NĂNG", second: "LỰC",
      description: "TỪ Ý TƯỞNG ĐẾN SẢN PHẨM HOÀN CHỈNH",
      eyebrowLeft: "QUY TRÌNH", eyebrowRight: "PHÁT TRIỂN",
      sideNote: "CHÚNG TÔI LÀM GÌ / LÀM NHƯ THẾ NÀO",
      items: [
        {
          title: "Nền tảng công nghệ",
          details: [
            ["Ngôn ngữ", "TypeScript xuyên suốt"],
            ["Giao diện", "Next.js + React, Tailwind, shadcn/ui"],
            ["Di động", "React Native (Expo) / Flutter"],
            ["Hệ thống", "NestJS (Node), FastAPI (Python), Go"],
            ["Dữ liệu", "PostgreSQL + Prisma, Redis"],
            ["Xác thực", "WebAuthn + Clerk/Auth0"],
            ["Hạ tầng", "Docker, GitHub Actions, AWS, Cloudflare, Google Cloud"],
            ["Giám sát", "Grafana, Sentry"],
          ],
        },
        { title: "Phát triển Web3", body: "Từ ý tưởng đến sản phẩm Web3 dễ dùng, an toàn và có thể mở rộng." },
        { title: "Phát triển game", body: "Thiết kế và phát triển game có chiều sâu, mượt mà và giàu tương tác." },
        { title: "Kiến trúc giải pháp", body: "Xây nền tảng hệ thống vững chắc để sản phẩm phát triển dài hạn." },
      ],
    },
    recognition: {
      label: "Những con số",
      copy: "Những dự án và mối quan hệ hợp tác tạo nên hành trình của LOREM Technology.",
      stats: ["Dự án", "Đối tác", "Đơn vị đồng hành"],
    },
    services: {
      first: "DỊCH VỤ",
      description: "Kết hợp tư duy thiết kế và năng lực kỹ thuật để tạo ra sản phẩm dễ dùng, hiệu quả.",
      eyebrowLeft: "DỊCH VỤ", eyebrowRight: "CHÚNG TÔI",
      items: ["Thiết kế & phát triển website", "Thiết kế UX/UI", "Phát triển game", "Kiến trúc giải pháp"],
    },
    work: {
      first: "DỰ ÁN", second: "CHỌN LỌC",
      description: "SẢN PHẨM SỐ CHO NÔNG NGHIỆP, NỘI DUNG VÀ THƯƠNG MẠI PHẦN MỀM",
      eyebrowLeft: "DỰ ÁN", eyebrowRight: "03 DỰ ÁN TIÊU BIỂU",
      projects: [
        { category: "NÔNG NGHIỆP / TÀI SẢN SỐ", description: "Nền tảng số cho nông nghiệp, kết nối blockchain và IoT để quản lý tài sản minh bạch hơn.", imageAlt: "Hình ảnh thương hiệu DDC Holdings với mầm cây và thông điệp Grow Smarter, Harvest Better" },
        { category: "NỘI DUNG / SÁNG TẠO", description: "Website giới thiệu dịch vụ và dự án thực tế của studio phát triển kênh TikTok.", imageAlt: "Hình ảnh studio Xây Kênh TikTok cùng các dự án video trên thiết bị di động" },
        { category: "THƯƠNG MẠI / PHẦN MỀM", description: "Cửa hàng phần mềm giúp cá nhân và doanh nghiệp tìm đúng giải pháp Microsoft.", imageAlt: "Hình ảnh Việt License với các sản phẩm Microsoft Windows và Office" },
      ],
      visit: "XEM WEBSITE", newTab: "mở trong tab mới",
    },
    faq: {
      first: "HỎI", second: "ĐÁP",
      description: "Mọi bước triển khai đều rõ ràng, từ trao đổi ban đầu đến bàn giao.",
      eyebrowLeft: "CÂU HỎI", eyebrowRight: "THƯỜNG GẶP",
      promptFirst: "CÒN", promptSecond: "THẮC MẮC?", contact: "LIÊN HỆ",
      items: [
        { question: "LOREM Technology cung cấp dịch vụ gì?", answer: "Chúng tôi thiết kế và phát triển website, trải nghiệm UX/UI, game, sản phẩm Web3 và kiến trúc giải pháp theo nhu cầu từng dự án." },
        { question: "Một dự án thường mất bao lâu?", answer: "Tùy quy mô và độ phức tạp. Sau khi hiểu rõ yêu cầu, chúng tôi sẽ thống nhất tiến độ và các mốc bàn giao trước khi bắt đầu." },
        { question: "LOREM có làm giải pháp theo yêu cầu không?", answer: "Có. Mỗi giải pháp được xây dựng theo sản phẩm, người dùng và nhu cầu kỹ thuật cụ thể." },
        { question: "LOREM làm việc với những lĩnh vực nào?", answer: "Chúng tôi làm việc với nhiều lĩnh vực. Hãy chia sẻ bài toán; chúng tôi sẽ đề xuất hướng phù hợp với người dùng và bối cảnh của bạn." },
        { question: "Chi phí được tính như thế nào?", answer: "Chi phí phụ thuộc phạm vi công việc và yêu cầu cụ thể. Liên hệ để nhận ước tính phù hợp với dự án của bạn." },
      ],
    },
    footer: {
      accessibleHeading: "Công nghệ tạo giá trị",
      first: "CÔNG NGHỆ", second: "TẠO GIÁ TRỊ", script: "Từ ý tưởng đến thực tế",
      copy: "Chúng tôi tạo ra sản phẩm số bền vững, dễ dùng và phù hợp mục tiêu của bạn. Hãy cùng bắt đầu từ ý tưởng tiếp theo.",
      contact: "Liên hệ", backToTop: "VỀ ĐẦU TRANG ↑",
    },
  },
};
