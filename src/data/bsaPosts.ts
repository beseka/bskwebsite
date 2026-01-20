export type BsaPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;     // "2025-01-12"
  tag: "Analysis" | "Model" | "Product";
  body: Array<
    | { type: "p"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string }
    | { type: "code"; code: string }
    | { type: "image"; src: string; alt?: string }
    | { type: "imageRow"; images: { src: string; alt?: string }[] }
    | { type: "separator" }
  >;
};

export const BSA_POSTS: BsaPost[] = [
  {
    slug: "influencer-sponsorship-analysis",
    title: "Influencer Sponsorship Detector",
    excerpt:
      "Youtube influencer sponsorluklarını tespit eden regex script tasarımı, analizi ve gelecek geliştirme, kullanım alanları.",
    date: "29 Aralık 2025",
    tag: "Analysis",
    body: [
      { type: "h3", text: "Başlamadan" },
      { type: "p", text: "Github Repo: https://github.com/beseka/ifbm" },
      { type: "p", text: "Streamlit: https://influencerbranding.streamlit.app/" },

      {
        type: "p",
        text:
          "Influencerlarla çalışmak günümüzde küçüğünden en büyüğüne tüm markalar için çok önemli hale geldi. Aynı zamanda influencerlar da aldığı bu iş birlikleriyle, çalıştığı markalarla bir etki alanı yaratıyor aynı zamanda da belli alanlarla kendilerini birleştiriyorlar demek yanlış olmaz. Yemek içeriği üreten bir influencerdan teknoloji firması reklamı görmeyi beklemiyoruz. Markalar doğru hedef kitleye kendini tanıtmak, influencarlarda bu alanlardaki faydalı markalarla çalışmak istiyor. Bu yüzden markalar ve influencerlar arasında mutual bir ilişki var. Markalar doğru influencerları ve doğru hedef kitleleri bulmalı. "
      },

      { type: "h3", text: "Projenin Amacı" },
      {
        type: "ul",
        items: [
          "Markaların doğru influencerları seçmelerini sağlamak.",
          "Influencerlar ve bağlamlarını incelemek.",
          "Bağlamların influencerlarla uyumunu test etmek."
        ]
      },

      {
        type: "p",
        text:
          "Bu projede, daha büyük ve yararlı bir projenin temellerini atmaya çalıştım. Temel olarak belirlediğim influencerların aldığı iş birliklerini belirlemeye yarayan manuel bir model tasarımı ortaya çıkardım. İlk olarak Youtube Data API V3 kullanarak belirlediğim listedeki influencerların son 2 ay içerisindeki tüm videoları tarihleri ve açıklamalarını kaydettim. Bu listeyi kullanarak ise bir doğal dil işleme yöntemi olan REGEX ile açıklamalardan sponsor ve marka adaylarını belirleyen bir manuel model yazdım."
      },
      {
        type: "p",
        text:
          "Model öncelikle video listesinde iş birliği var mı yok mu diye kontrol ediyor ve olanları buluyor. burada yaklaşık olarak 150 video 10 influencerlık bir liste ile çalıştım. Videolardaki sponsorlukları %98.73 oranında doğru bularak kaydetti."
      },

      { type: "quote", text: "Doğru Influenceri seçmek müşteri kazanımını arttırır." },

      {
        type: "p",
        text:
          "Genel olarak youtube içerisinde çok fazla sponsorluk yapan markaları belirleyerek bir trust brands listesi oluşturdum ve adaylar içerisindeki olasılıklarını arttırdım. İş birliğiyle, sponsorluğuyla, katkılarıyla gibi kelime ve kelime grupları, linkler, indirim kodları gibi bağlamlarla sponsor adayları çıkarmaya ve tek sponsoru bulmaya çalıştım."
      },
      {
        type: "p",
        text:
          "Sistem kısaca; pandas ile Excel verilerini okuyup işlerken, regex ve metin normalizasyonu kullanarak açıklamalardaki sponsorluk ifadelerini tarar. Önceden tanımlanmış bilinen sponsorlar listesi, link/domain analizi ve “işbirliği, sponsor, reklam” gibi bağlamsal ipuçları birlikte değerlendirilir. Kanal adı, kişi isimleri ve platform adları gibi yanıltıcı kelimeler özel olarak filtrelenir. Tüm bu sinyaller puanlanarak en güvenilir sponsor marka otomatik olarak seçilir ve sonuçlar yeni bir Excel dosyası olarak çıktı alınır. Listeyi https://influencerbranding.streamlit.app/ adresinden inceleyebilirsiniz."
      },

      {
        type: "image",
        src: "/influencer-sponsor-dashboard.png",
        alt: "Influencer x Branding dashboard"
      },


      {
        type: "p",
        text:
          "Sonuç ise adaylardaki doğru sponsorları ve genel olarak doğru çıkan sponsorları dahil ettiğimizde %88.17 çıktı. Bu aşamada sadece manuel text mining yapıldığı için sonuçların gayet yeterli olduğunu düşünüyorum ama tabiki de gelişmeye ve farklı featurelar ile birlikte geliştirilip tam anlamıyla kullanıma açılabilir hale getirilebilir."
      },

      { type: "h3", text: "Analizler" },
      {
        type: "ul",
        items: [
          "Sponsor seçimi ve influencer arasındaki uyuşma ne kadar yüksekse izlenmeler artıyor.",
          "Seçtiği influencerlar aynı bağlamla ve alanda işleyen markalar daha yüksek marka bilinirliği sağlıyor.",
        ]
      },

      { type: "h3", text: "Projenin Geleceği ve Kullanım Alanları" },
      {
        type: "p",
        text:
          "Bu kısım projenin ilk aşaması olarak ele alınabilir. Bu projenin geleceğinin küçük büyük tüm skaladaki markalar tarafından kullanılabilir hale getirilmesi ve kullanılması kanaatindeyim. Otomatik bir pipeline kurularak düzenli olarak yenilenen marka x influencer işbirliklerini ve bunların izlenmelere genel etkilerini büyükten küçüğe influencerlar için derlediğimizde markalar için ortaya bir yol haritası çıkması işten bile değil. Bu sayede markalar kendi alanında ve büyüklüğünde influencerları seçebilir ve onlarla çalışmayı tercih edebilirler ve hedef kitleye ulaşımı ve satışları gözle görülür anlamda arttırabilirler."
      },
      {
        type: "p",
        text:
          "Bunu yaparken analizler bölümündeki izlenme etkilerini, markaların erişebildikleri hedef kitlelerini ve genel sonuçlarını göze almak gerekiyor. Teknik olarak ise LLM model kullanarak sponsor detectionlarını daha net ve accurate halde ele alabiliriz. Bu sayede kurulan bir otomatik pipeline ile birçok influencer ve sponsor derlenebilir ve analizler çeşitli hale gelebilir. Detectionlar sonrası kesin sponsorların kayıt altına alınması ile model bunları öğrenebilir ve çok daha net hale gelebilir. Ayrıca markalar ve influencerların alanlarının belirlenmesi ile alanlar arasındaki bağlantıları daha net ortaya çıkararak markaların daha net seçimler yapılması sağlanabilir."
      }
    ]
  },













  {
    slug: "yorum-ve-trend",
    title: "Comment Sentimantal Analysis ",
    excerpt:
      "Sosyal medya üzerinde kullanılabilecek türkçe tabanlı comment sentimantal analiz uygulaması",
    date: "17 Ocak 2026",
    tag: "Analysis",
    body: [
      { type: "h3", text: "Başlamadan" },
      { type: "p", text: "Github Repo: https://github.com/beseka/sea-sm" },
      { type: "p", text: "Streamlit: https://turkceduyguanalysis.streamlit.app/" },
      { type: "p", text: "Sosyal medyada izlenmelerin, yorumlar ve beğenilerin motivasyon olarak da etkileşim olarak da inanılmaz bir etkisi olduğunu kabul etmemiz gerekiyor. Portföy sitemde de geniş detaylarıyla konuları incelemektense güzel zeminler atarak neye yol açabileceğini tartışmak niyetindeyim ve bu konu da onlardan bir tanesi, ileride dönüşebileceği uygulamaları görebilirsiniz." },
      { type: "p", text: "Türkçe için eğitilmiş bir pre-trained Bert modelini kullandım ve hibrit bir yapı kurarak sosyal medya için kullanılabilir hale getirdim. Hibrit model heuristics kural tabanlı bir katman da uygulayarak edge-caselerde olumlu sonuç yakalamaya yarıyor. Bunu yapma sebebim ise emojiler ve negationları handle edebilmek ayrıca tam anlamıyla olmasa da ironileri anlayabilme kapasitesi ortaya çıkarmaktı. Aşağıdaki 3 sample örneğinde de bunları inceleyebilir, streamlit uygulamasından da kendi denemelerinizi yapabilirsiniz. (Light mode açmanızı ve model yüklenene kadar biraz beklemenizi öneririm.)" },
      { type: "h3", text: "Örnekler" },
      {
        type: "imageRow",
        images: [
          {
            src: "/1p.png",
            alt: "Positive Sample"
          },
          {
            src: "/2nt.png",
            alt: "Negative Sample ve Teknik Detay"
          },
          {
            src: "/3n.png",
            alt: "Negative Sample "
          },
          {
            src: "/4pt.png",
            alt: "Negation Handling "
          }
        ]
      },
      { type: "h3", text: "Nasıl Çalışıyor? " },
      { type: "p", text: "Model öncelikle yazılmış olan yorumları preprocess ediyor. Kullanıcı adları, linkler gibi duygu analizine hizmet etmeyecek kısımlar temizleniyor ve ardından da normalizasyon yapılarak yorum analize hazır hale getiriliyor. Ardından Bert modelden çıkan AI tahminini ve skorunu alıyoruz. Ardından da kural tabanlı heuristics based katmanda bu skoru normalize ederek tam sonucu ortaya çıkarmaya çalışıyoruz. Bu katmanda, pozitif ve negatif olarak etiketlemiş olduğum emojiler sonuca direkt etki ediyor. İroni var ise bakılıyor. Yine negatif ve pozitif olarak etiketlediğim sözcük grupları ve negationlar bulunarak direkt olarak confidential skora etki etmesi sağlanıyor ve son sonuç ortaya çıkıyor." },
      { type: "h3", text: "Analiz" },
      { type: "ul", items: ["Yorum sayıları arttığında haliyle yorumların duygu analiz skor toplamları daha neutral seyretmeye başlıyor.", "Viral olan ve hesap içerisinde görece daha çok izlenmiş reelslerde de durum aynı şekilde seyrediyor.", "Hesap için ortalama skalada izlenen takip edilen reelslerde duygu analizleri halihazırda takipçilerle daha çok sınırlandığından pozitif yönde ilerleme kaydediyor."] },
      { type: "quote", text: "Etkileşim ve kullanıcı perspektiflerini kullanarak bir yol haritası çıkarmaya yardımcı olabilir." },
      { type: "h3", text: "Future Works & Applications" },
      { type: "ul", items: ["Sosyal Medya Performans Analizleri", "Marka Değer Monitoring", "İnfluencer Marketing Değerlendirmeleri"] },
      { type: "separator" },
      { type: "ul", items: ["İroni daha iyi handle edilebilir", "Otomation pipeline kurularak direkt incelemeler sağlanabilir"] },
      { type: "separator" },
      { type: "p", text: "Bu modeller şirketler ve hesaplar tarafından zaten halihazırda çokça kullanılıyorlar. Kendimde bir benzerini hazırlayarak konuya hakimiyetimi arttırmak ve geliştirmek daha sonraki projelerimde kullanım alanlarını sağlayarak da fayda sağlamak istedim." }
    ],
  },













  {
    slug: "müsteri-psikolojisi-finansal-etkiler",
    title: "Müşteri Psikolojisinin Finansal Etkileri",
    excerpt:
      "Müsteri psikolojininın finansal metriklere etkisi ve ürün kararlarına yansımaları.",
    date: "5 Ocak 2026",
    tag: "Product",
    body: [
      {
        type: "p",
        text:
          "Gıda sektöründe sosyal medya kullanımı ve online platformlarda satışları arttırmaya yönelik çalışmalarımın tam olarak 1.yılına gelmiş bulunmaktayım. Bu yüzden de bu konudaki analizlerimi biraz product + software ekseninde müşterinin psikolojinin nasıl finansal etkileri olduğunu incelemek istedim ve birçok analiz, deneme yanılma yapma imkanı buldum. Bunu da bilgisayar mühendisi olarak 1 yıldır kendime bir proje olarak gördüm demem yanlış olmayacaktır. Sektörle alakası bulunan kısımlar olsa da müşteri her yerde aynı psikolojiyle satın alım yaptığından software productlar için de tam anlamıyla işleyebileceğine inanıyorum."
      },
      {
        type: "p",
        text:
          " Sosyal medya yönetimi ve hepimizin kullanıyor olduğu online platformlar ürün için bir UI/UX aslında, müşteri tarafında psikolojik olarak aynı etkiyi sağladıklarını söyleyebilirim. Tek farkı ise rekabet içinde olduğumuz benzer matematikte birçok ürünün daha bulunuyor olması. Sosyal medyada trend takibi, doğru influencer ve reklam tercihleri ve güzel gözüken bir profilin acquisition ve retention üzerinde çok büyük etkileri var. Karşısına çıkan kullanıcı daha sonra bu platformlarda ürününüzü gördüğünde satın alım yapma ihtimali yaklaşık olarak %34 artıyor. Aynı zamanda halihazırdaki müşteriler için de tam bir bilinirlik sağlıyor ve hatırlatma ihtimalleri artıyor ve retention oranları bu sayede artıyor. "
      },


      { type: "h3", text: "Deney 1" },
      {
        type: "p",
        text:
          "Uzun süre ürünlerin ortalama profesyonellikte direkt olarak çekimlerini ürün fotoğrafı olarak kullandım ve satış rakamlarını takip ettim. Ardından ise Nano Banana ile ürünlerin gerçekçiliğini bozmadan sadece ışık ve arkaplanda oynama yaparak tekrardan satışları takip ettim. Gerçekçiliği bozulmadan daha profesyonel gözüken fotoğraflara geçildiğinde satış rakamları aniden yaklaşık olarak %8 artış gösterdi. "
      },

      {
        type: "imageRow",
        images: [
          {
            src: "/btek.jpg",
            alt: "İlk Fotoğraf"
          },
          {
            src: "/Hamburger.png",
            alt: "Optimize edilmiş profesyonel ürün fotoğrafı"
          }
        ]
      },

      {
        type: "p",
        text:
          "Ayrıca güzel görseller satın alım üzerinde olumlu etkiye sahip ve müşteri özelinde premium ve lüks düşüncesi sağlayarak fiyat konusundaki tereddütlerini de olumlu anlamda azaltmasına neden olabiliyor."
      },
      {
        type: "quote",
        text: "Yapay olmayan profesyonel görünümler satışları arttırıyor."
      },

      { type: "h3", text: "Deney 2" },
      {
        type: "p",
        text:
          "Online platformlardaki indirim ve kampanyaların sürekliliği de satış rakamlarını ve müşteri psikolojisini etkiliyor. İndirimler ve kampanyalar müşterileri zaten çekiyor fakat bunların kalıcılıklarını ve retentionu doğru oranda takip etmek gerekiyor. İndirimleri bir anda kaldırmak müşteri psikolojinde ürüne zam yapılmasıyla aynı etkiyi yaratıyor ve aynı ürünü, aynı zevki daha yüksek bir meblağa alıyor olma düşüncesi bazı müşterileri markaya küstürebiliyor. Yüksek oranda marka bilinirliği olmayan markalar için de bu durum neredeyse vahim bir durum halini alabiliyor çünkü ortalama siparişler %40 a varan azalma gösterebiliyor. Bu yüzden bazı indirim oranları sabit tutmak sürekli acquisition ve retention üzerinde olumlu etkilere sahip."
      },
      {
        type: "quote",
        text: "Sabit indirimler kazanç sağlıyor."
      },

      { type: "h3", text: "Deney 3" },
      {
        type: "p",
        text:
          "Market araştırması ve sepet matematikleri sipariş tutarlarının artmasına yani daha fazla ciroya sebep olabiliyor fakat çok tehlikeli bir alan olduğunu söylemem gerekiyor çünkü müşteri bunu hissettiği an bunu bir kurnazlık olarak nitelendirip markadan soğuyabiliyor. Bu yüzden burada ince bir denge var ve bu dengenin doğru kurulması gerekiyor. Sepeti büyütmeye yönelik hamleler, kullanıcıya şeffaf, mantıklı ve ihtiyaca dayalı sunulmalı; müşteri eklenen her kalemin gerçekten siparişine değer kattığını hissetmeli. Opsiyonlar mantıklı ve almam daha iyi olur düşüncesi oluşturacak şekilde ayarlanmalı, fiyat artışı açık ve anlaşılır olmalı, paketler ise yapay değil doğal tüketim alışkanlıklarına dayanmalıdır. Kullanıcı, sistem tarafından yönlendirildiğini değil, karar sürecinde desteklendiğini düşündüğünde sepet matematikleri sürdürülebilir hale gelir. Bunun en güzel yolu ise Bundle menüler çıkarmak diyebilirim. Ürün kalemi arttıkça ve bundle ayrı ayrı toplamaya göre daha uyguna geliyorsa müşteri daha ucuza daha çok tüketim dürtüsünü durduramayacaktır. Ayrıca opsiyonların menü ve ürünlere göre farklı fiyatlandırmada olması da yancıların satışını olumlu oranlarda arttıracaktır. Bundle menülerin genel anlamıyla en çok satan ürünler arasına çok çabuk girdiğini söyleyebilirim. Market araştırması ile doğru fiyatlandırmayla birlikte hem ürün satışları hem de yancı aperatiflerin satışları da azımsanamayacak miktarlarda artıyor ve sepet miktarları istediğimiz ölçüde artıyor. "
      },
      {
        type: "quote",
        text: "Bundle ve doğru fiyatlandırılmış aperatifler sepet miktarlarını arttırıyor."
      },
      {
        type: "h3",
        text: "Bakış açısı ve Sonuçlar"
      },
      {
        type: "p",
        text:
          "Kendi açımdan bu projenin en büyük faydasının software + product alanlarında bakış açımı ve analizlerimi değiştirmesi oldu diyebilirim. Tüm sektörlerde benzer psikolojik hamleleri uygulayabilmek kesinlikle mümkün. Sadece minik bir varsayım yapmak zorundayız. Yemek yemek insanın en temel içgüdüsü bu yüzden müşteri kullanışlılık veya işime yarayacak mı gibi software product alanında karşılaşacağımız ilk soruya daha kolay ikna oluyor. Ürünümüzün bir kitle için bir sorunu çözdüğü ve kullanışlı olduğu varsayımını yaptığımızda ise bu noktadan sonra gıda sektöründe elde edilen bu içgörüleri software product dünyasına taşımak oldukça doğal hale geliyor. Aslında SaaS ürünleri, mobil uygulamalar ve dijital servisler de kullanıcıya sunulan birer menüden ibaret. Onboarding süreci, feature set’i, pricing sayfası ve abonelik planları; yemek platformlarındaki mağaza kartı, ürün görselleri ve sepet yapısıyla birebir aynı psikolojik temeller üzerine kuruluyor. Kullanıcı bir ürünü satın alırken yalnızca fonksiyonelliğe değil, kendisine ne kadar net, güvenilir ve değerli hissettirdiğine bakıyor. Bu yüzden software product’larda da acquisition aşamasında fazla vaatte bulunmak kısa vadede kullanıcı sayısını artırsa bile, retention tarafında ciddi kırılmalar yaratabiliyor. Tıpkı sürekli indirim yapan bir markanın zamanla güven kaybetmesi gibi, agresif free-trial kurguları veya gizli fiyat artışları da churn’ü tetikliyor."
      },
      {
        type: "p",
        text:
          "Benzer şekilde feature bundling ve pricing stratejileri, sepet matematiklerinin software karşılığı olarak düşünülebilir. Kullanıcıya tek tek satılan küçük özellikler yerine, gerçek kullanım senaryolarına dayanan paketler sunulduğunda hem algılanan değer yükseliyor hem de karar verme süreci kolaylaşıyor. Burada kritik olan nokta, kullanıcıya “daha fazla ödemeye zorlanıyorum” hissi değil, “ihtiyacım olan her şey burada” hissini verebilmek. Premium planların, giriş seviyesindeki planı anlamsızlaştırmaması; entry planın ise ürünü deneyimlemek için yeterli değeri sunması gerekiyor. Aksi halde kullanıcı ya hiç başlamıyor ya da kısa sürede ürünü terk ediyor. En güzel örnek yakın zamanda ChatGPT için yeni bir model getirilmiş olması, 20$’lık Pro modelinden bile zarar etmeyi çok fazla kullanıcıya ulaştığı için tolere edebilen OpenAI buna rağmen 6$’lık yepyeni bir model getirdi. Günlük kullanıcının çok fazla olması ve bu sektörde anneannelerimiz dedelerimiz tarafından bile adı bilinen az bile olsa kullanıma ulaşabilen bir genel uygulama haline gelmiş ve en popüler LLM model olmuştu ama bunlar bile günlük kullanıcının 20$’lık bire alım yapmasını gerektiren unsurlar değildi ama sırf onlar için ucuz bir model tanıtılıyor olması hem günlük kullanıcıyı kaybetmemek hem de doğru oranda satış yaparak bunu bir kar marjına da çevirmelerine imkan sağladı."
      },
      {
        type: "p",
        text:
          "Son olarak UI/UX’in rolü, gıda sektöründeki görsel kaliteyle birebir örtüşüyor. Temiz bir arayüz, doğru hiyerarşi, sade mesajlar ve iyi kurgulanmış akışlar; ürünün teknik kapasitesinden bağımsız olarak algılanan kaliteyi ciddi şekilde yükseltiyor. Kullanıcı, ürünü kullanırken zorlanmadığında ve kontrolün kendisinde olduğunu hissettiğinde fiyat hassasiyeti azalıyor ve ürüne karşı toleransı artıyor. Bu nedenle gıda sektöründe edinilen bu deneyimler, software product’larda yalnızca tasarım veya fiyatlandırma değil, uçtan uca ürün stratejisi geliştirmek için güçlü bir referans noktası oluşturuyor."
      },
      {
        type: "h3",
        text:
          "Son Yorum"
      },
      {
        type: "p",
        text:
          "Burada bahsettiklerim çok temel düzeyde ve basit olsa da bir yıllık bu deneyimim bana bu alanda birçok şeyi öğrettiği için bir proje haline getirmek ve analiz etmek istedim. Finansal analizlerin matematiğinden bir nebze de olsa uzaklaşıp müşteri ve ürün temelli bir bakış açısıyla incelemek ve aktarmak istedim. Basitliği malum olsa da kendi açımdan bakış açımı değiştirdiğini, tüm alanlarda bu bakış açısının kullanılabileceğini, analizleri çeşitlendirebileceğini ve uygulandığında ürünün vizyonunun değişebileceğine inanıyorum."
      },

    ]
  },
];
