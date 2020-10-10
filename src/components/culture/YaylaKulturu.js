import React, {Component} from "react";
import YaylaImage1 from '../../images/yaylakulturu1.jpg';
import YaylaImage2 from '../../images/yaylakulturu2.jpg';
import YaylaImage3 from '../../images/yaylakulturu3.jpg';

export default class YaylaKulturu extends Component {

   render() {
      return (
         <div style={{
            border: "3px solid #50001B",
            padding: "1rem",
            borderRadius: "10px 10px 10px 10px",
            backgroundColor: "#f5f5f5",
            color: "#50001B"
         }}>
            <div>
               <h2 style={{fontWeight: "bold", color: "#50001B"}}>Ağcaşar'da Yaylaya Göç</h2>
            </div>
            <div style={{marginTop: "50px"}}>
               <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold"}}>E</span>skiden mayıs ayında diğer
                  tüm komşu köylerde olduğu gibi Ağcaşar’da da bir telaş başlardı. Bu telaş
                  ve heyecan kollektif bir yaşamın ve üretimin başlangıcı olan yaylaya göçün telaşıydı. Yaylaya yaklaşık
                  olarak mayıs ayı ortalarında gidilir ve yaz sonunda tekrar köye geri dönülürdü. Bu gidiş ve gelişlerin
                  her birinin ayrı ayrı zevkleri ve zorlukları vardı. Asıl önemlisi bu göçlerin kendine özgü bir kültürü
                  vardı. Belki de Ağcaşarlıların hala değişerek bir şekilde devam eden göç kültürlerinin geçmişi buradan
                  gelmektedir.</p>
               <p>
                  <img src={YaylaImage1} alt="YaylaImage1" style={{float: "right", maxWidth: "100%", margin: "6px"}}/>
                  Ağcaşarlıların yaylaya göç tarihi Ağcaşar’ın kuruluşundan hemen sonra başlar. Göç mekanları zamanla
                  değişmiştir. İlk önce köyün kuzeyindeki Köroğlu dağının eteğindeki pınarların yanına çadır kurar,
                  burada birkaç ay kalır, sonra tekrar köye inerlerdi. Daha sonra göç mekanları Nişanatlılarla birlikte
                  Teknebaşı olmuştur. Bir müddette yayla olarak buraya gidip gelmişlerdir. Ancak hayvan sayısının
                  artması sonucunda yeni bir yayla yeri aramak zorunda kalmışlardır. Devlete yapılan müracaattan sonra
                  Ağcaşar ve Kötüre’ye Kırkpınar ve Çoçort yaylak olarak hazine tarafından verilmiştir. Buranın
                  yetersizliğinden dolayı iki köy birleşir ve Sarpçayla Çevirme’yi Kızılcıklı Taslı Emine adında
                  birinden Kötüre ve Ağcaşarlılar adına satın alırlar. O dönemde Gözpınar Ağcaşar’a bağlı bir mezra
                  olduğu için Gözpınar da bu yayla alımında Ağcaşar ile birliktedir. 1944 yılından sonra Ağcaşarlılar
                  buraya yaylaya gitmeye başlamışlardır.
               </p>
               <p>
                  Yaylaya göç iki aşamada gerçekleşirdi: Birinci aşama, sürülerin yola çıkması ve yaylaya varması
                  aşamasıdır. Sürüler sabah yapılan hazırlıklardan sonra kuşluk vakti köyden çıkar ve ilk gece
                  Kömürcüpınar’da geçirilir, sabah Kömürcüpınar aşılarak ikinci gece Karataş’ta geçirilirdi. İkinci
                  günün sabahında aynı zamanda köyden de bir eşeğe gıda maddeleri yüklenir ve atlıkta sürüye
                  yetiştirilirdi. Sürü üçüncü geceyi Cevizli’de, dördüncü geceyi Savaşın Gediği’nde geçirir ve beşinci
                  günde Sarpça’ya ulaşılırdı. Bu gidişler daha önceki gidiş gelişlerden edinilmiş tecrübeler
                  doğrultusunda devam ederdi. Bu nedenle gidiş geliş süreleri ve yol güzergahı hemen hemen hep aynıdır.
                  Bazen olumsuz hava koşuları ve güzergah üzerindeki oba ve köylerin müdahalesi sonucunda bu süre biraz
                  daha uzardı. Göçün bu birinci aşaması daha zahmetli daha heyecanlı olurdu. Çünkü bu aşamada süre 4-5
                  günü bulurdu. Bu süre içerisinde kaybolan koyunlar, yattıkları yerde uyuyup kalan güzelim emlik
                  kuzular, köpekler, eşekler, yolda karşılaşılan olaylardan dolayı yaşanan küçük çaplı kavgalar, yolda
                  yağan yağmurun altında sırılsıklam ıslanıp elbiselerinizin üzerinizde kuruması ve ateş yakıp ısınmaya
                  bile fırsatınızın olmaması, geceyi geçirmek için düşündüğünüz yere zamanında varamamak ve yemek
                  yapmak, köpekleri doyurmak almaz koyunları ya da kuzuları ölmüş koyunları başka kuzuları emzirmek gibi
                  olaylar bu yolculuktaki zorluklar ve sıkıntılardı. Göçün bu aşamasının güzel yanları da vardı. Baharla
                  birlikte erimiş karların kalktığı yerlerde açan renk renk çiçekler içinde insanın ciğerlerini dolduran
                  mis gibi dağ havasının ve bu atmosferin insana verdiği güven ve güzel duygular eşliğinde gece yüce bir
                  dağın eteğinde, yıldızların altında az biraz da olsa uyuyup dinlenerek yapılan bir yolculuktur. Bu
                  göçün çok güzel ve muzip hikayeleri de vardır. Bana hiçbir yol ve göç hikayesi bu hikayeler kadar
                  güzel gelmez. Bu gidişler ve gelişler birçok göç anısı ile doludur.
               </p>
               <p>
                  Bu göçün ikinci aşamasında çadırların, yani kullanılacak eşyalarla kullanacak kişilerin obaya göçü
                  vardır. Köyde göçün yaylaya gidileceği günün sabahı erkenden kalkılır ve sabahın serinliğinde yola
                  çıkılırdı. Yaylaya götürülecek eşyalar bir gün önceden hazırlanmış olan hayvanlara, hayvanın gücü ve
                  cinsine göre yüklenirdi. Genellikle dağ yollarında rahat yürüyüşlerinden dolayı katırlara yorgan-döşek
                  türü eşyalar üstüne yaşlılar ve çocuklar binecek şekilde yüklenilirdi. Tabi ayaklarından bağlanıp kafa
                  üstü yüklere asılan tavukları da unutmamak gerekir. Yaylaya gidenlerden bazıları, kiminin “Riya Yayle”
                  kiminin ise “Riya Tirkan” dedikleri yukarı yoldan, bir kısmı da Kepez üzerinden Kızılcık köyünün
                  içinden geçen yoldan giderek Kızılcık köyünün çıkışında birleşir ve yolun geri kalan kısmına birlikte
                  devam ederlerdi. Yolun ilk etabı olan bu kısmın, hem sabahın serinliğinde hem dinlenmiş hem de yaylaya
                  gitmenin heyecanıyla nasıl gidildiği pek fark edilmezdi. Ancak Kenger Çatı’na gelinince yavaş yavaş
                  yorgunluk belirtileri başlardı. Kenger Çatı’dan Sarı Pınar’ın üstünde yemek molası verilirdi. Bundan
                  sonra yolun en zor kısmı olan ve bir yılan misali kıvranan Kenger Çatı’nın yokuşu başlardı. Bu yokuş
                  çıkılırken hafif bir bahar esintisi insana güç verirdi. Savaşın gediğine varıldı mı baba-dede yurdu
                  görünürdü. Yolun bu kısmında Sarpça’nın dibindeki küçük yokuşa kadar insan kendini iniş aşağı koyu
                  verirdi. Ancak Sarpçanın alt yanındaki o küçük yokuş yol, 6-7 saat yol yürümenin verdiği yorgunluk ile
                  insanın gözüne büyürde büyürdü. En fazla 15-20 dakika sonra mutlu sona ulaşılırdı. Erkekler
                  hayvanların yükünü indirirken kadınlar çadırı temizler ve akşam yemeğinin telaşına düşerlerdi. Yemek
                  hazırlama konusunda öncelik köpeklere verilirdi. Çünkü bir hafta süren yolculukta köpekler istenmese
                  de ihmal edilmiş olunabiliyordu. Bu nedenle onu telefi etmenin gayreti vardı. İlk akşam ateşler
                  yakılır, biraz sohbet edilirdi. Bazen bu sohbetler çadırdan çadıra bile yapılırdı. Bu sohbetler bazen
                  köpeklerin eşekleri ürkütmesi sonucu eşeklerin o davudi sesiyle bölünürdü. Sohbeti bölünenlerin
                  öfkeyle zavallı eşeklere karşı zalimce davranmalarına sebep olurdu. Gecenin bir saatinde sonrada
                  ikinci gün yapılacak işler konuşulur, sonra herkes derin bir uykuya dalardı. Birkaç gün sonra rutin
                  yayla yaşamı başlardı.
               </p>
               <p>
                  Yayla yaşamı yolculuğu gibi zor olsa da insanın dağlarda özgür olmasının yanında pek kimse şikayette
                  bulunmazdı. Çocuklar kar sularıyla beslenen o derelerde akan sularda o yaşın verdiği afacanlıkla
                  çimenin zevkini hiçbir yerde yaşayamaz ve o heyecanı hiçbir yerde duyamazdı. Hele kendi aralarında
                  yaptıkları “soğuk suda kim fazla kalır” yarışmalarındaki birinciliklerin gururu ve heyecanı dünya
                  olimpiyatlarında alınan madalyadan daha büyük, daha anlamlı olurdu. Sularda çimmeler genelde
                  büyüklerden gizli yapılırdı. Onun için çocuklar kuzuların kırkılmadan önce yıkanması olayını dört
                  gözle beklerdi. Çünkü o zaman morarıncaya kadar suda kalabiliyorlardı. Bunun sonucunda bazen
                  hastalanmakta vardı ama, kimin umurundaydı. Yaylada hayat doğa kurallarına uyumlu bir tarzda devam
                  ederdi. Birkaç basit kapkacaktan başka hiçbir teknoloji, teknik yardım ve alet yoktur yaylada.
                  Tahtadan yayıklarda yayık yayılır, tahta küleklere süt sağılır, ahşap ve taştan yapılmış çadırlarda
                  (alacık Holuk) oturulurdu. Besin maddeleri un ve bulgur haricinde tamamen hayvansal gıdalar olup
                  üretimleri orda yapılmaktaydı. Bunun dışında bir de yaylada toplanan kengerlerden yapılan yemekler
                  vardı ki, onların tadı ve güzelliği hiçbir yemekte yoktu. Büyükler günlük rutin işlerle uğraşırken
                  çocuklar büyük ardıç ağaçlarının altında yaptıkları evciklerde yaylacılık oynanırlardı. Yani kız
                  çocukları annelerinin ya da nenelerinin, erkek çocukları da çobanların ve babalarının yayla hayatını
                  oynayarak gerçek yayla hayatına hazırlanırlardı.
               </p>
               <p>
                  <img src={YaylaImage2} alt="YaylaImage2" style={{float: "left", maxWidth: "100%", margin: "6px"}}/>
                  Ağcaşar obası yaylada oyun bakımından şanslı obalardan biriydi. Çünkü bu obaya ilkbaharda gidilir ve
                  sonbahara kadar aynı yurtta kalınırdı. Halbuki Çoçort’ta kalanlar yaz ortasından kırk pınara
                  geçerlerdi. Onun için oyunları ve oyuncakları bölünürdü. Ağcaşar’ın tek yurdu olduğu için çocukların
                  tüm oyunları ve oyuncakları bir yerdeydi. Çocukların en çok sevdiği oyunlardan biri de Carcuruk’tu.
                  Carcuruk’un zevkini ve heyecanını anlatmak mümkün değil yaşamak gerekir. Bu oyuncak sistem olarak
                  bugünkü tattaravalliye benzer bir oyuncaktı. Ona sadece akşam üzerleri ve sabah binilirdi. Diğer
                  zamanlarda binilmemesinin nedeni de onun çıkardığı sesten uyuyan çobanların rahatsız olmasıydı.
                  Çobanların uykuları kaçmasın diye sanki gizli yapılmış bir anlaşma vardı çocukların arasında. Gündüz
                  saatlerinde kimse binmezdi. Arada bir köyden yeni gelmiş misafir çocuklara oyuncak gösterilip
                  gururlanmak için bu kural bozulurdu. Ancak bu durum uzun sürmez, kuralı bozanlar uyarılır ve
                  tekrarında tehtit edilirdi. Anneler ve neneler, çoban kimse onun ismini söyler “şimdi uyanırsa onu
                  kırar yakar” dediklerinde çocuklar o anda yelkenleri suya indirirlerdi. Çocuklar Carcuruk dönerken iyi
                  ses çıkarsın diye bazen yağ dürümlerindeki yağın bir kısmını Carcuruk’a sürerlerdi. Carcuruk tüm oba
                  çocuklarının ortak malıydı. Ancak obadaki en büyük çocuğun yönetiminde ve denetiminde kullanılırdı.
                  Birisi obada yapılması gerekeni yapmazsa onu Carcuruk’a bindirmeme cezası verilirdi ki, bu yaylada bir
                  çocuğa verilecek en büyük cezaydı. Bu ceza genellikle çobanlara yardım etmeyen erkek çocuklarına
                  verilirdi. Yani erkek çocuklarına mahsus bir cezaydı. Bu nedenle Carcuruk’un yapımında genellikle
                  çobanlar yardımlarını esirgemezler ve onu çocuklar üzerinde bir baskı aracı olarak kullanırlardı.
                  Büyüyünce anladım ki, hayatın her aşamasında hatta devletlerin birbirleriyle ilişkilerinde de buna
                  benzer bir sistem var. Yaylada geceleri ay ışığı olduğu zamanlarda çocuklar saklambaç oynarlardı.
                  Saklambaç oyununa bazen obadaki gençler de eşlik ederlerdi. Gençler çoğunlukla genç kızlardı. Zira
                  obada genç olarak bayanlar daha fazla olurdu. Bunun nedeni de annelere yardım etmeleri için yaylaya
                  çoğunlukla genç kızların götürülmeleridir.
               </p>
               <p>
                  Yayladaki ilginç olaylardan biri de gelen çerçilerdi. Zaten yayladaki çocuklar, bir köyden gelenlerin
                  yolunu, bir de çerçinin yolunu gözlerlerdi. Köyden gelenler genellikle köyde yetişmiş olan mevsim
                  meyve ve sebzesini getirirlerdi. Getirilen bu sebze ve meyvelerden istisnasız tüm obada herkese az ya
                  da çok bir pay verilirdi. Çerçi geldiğinde çocuklar toplayıp sağa sola sakladıkları yünleri çerçiye
                  verip balon, sakız, lokum ya da sucuk alırlardı. Çocukların yününün alım gücü az olduğu için çerçiler
                  bir sakız ya da bir balonla çocukların tüm topladıkları yünlerini alırdı. Çocuklar her seferinde sanki
                  kandırılmış duygusuna kapılırdı. Kadınlar çerçiden daha çok iğne iplik filketen ve varsa kuru üzüm,
                  sucuk, lokum alırlardı. Bazı kadınların don lastiği alması gerektiğinde kadınlardan iyi pazarlık yapan
                  biri çağrılır ve onun yapacağı pazarlık sonucu birkaç metre lastik alınırdı. Bu durumda pazarlığı
                  yapan kadınlar büyük bir alış verişin mağlupları edasıyla çevreyi şöyle bir süzerlerdi. Bu pazarlıkta
                  en önemli şey metre denen uzunluğun ne kadar olduğuydu. Çerçi bu uzunluğu şöyle belirlerdi. Mümkün
                  olduğu kadar elinin başından başlar ve omuz hizasına kadar olan mesafeyi bir metre olarak kabul
                  ederdi. Tabi ki pazarlık öncelikle bu mesafe üzerinde yapılırdı ve uzunluk en fazla göğüs kemiğinin
                  üstüne kadar getirilirdi. Ben bu uzunluğu geçmiş bir pazarlık hatırlamıyorum. Kadınların alış
                  verişlerinde çocukları da en çok lastik alımı ilgilendirirdi. Çünkü don lastiğinin alınmasıyla uçkur
                  sağlama alınırdı. Böylece arkadaşlarıyla koşarken ya da oynarken bir eli uçkurunda oynamayacağını ya
                  da koşmayacağını, yani iki elleriyle oyun oynamanın hazzını yaşayacaklardı. Alış verişlerde benim
                  bildiğim kadarıyla en iyi pazarlığı Ağgül teyze (Ağgül Akarsu), en kötüsünü de benim babaannem
                  (Gülistan Arslan) yapardı. Çünkü babaannem hem pazarlık yapmaktan utanır hem de zaten Türkçe konuşmayı
                  pek bilmezdi. Onun için babaannemin alış verişini omojina Ağgül ya da omojuna Gül yapardı.
               </p>
               <p>
                  Yaz sonlarına doğru yavaş yavaş köye dönüş hazırlıkları başlardı. Dönüşte sürüler daha rahat gelirdi.
                  Yayla dönüşünde evler için birkaç sefer yapılırdı. Önce ağır olan eşyalar yani fazlalıklar gönderilir
                  sonra yağlar ve çökelekler gönderilirdi. Yağlar ve çökelekler gönderilirken akşam üzeri yola çıkılır
                  gece yolculuk yapılırdı. Yağlar sıcakta zarar görmesin diye ve genellikle fiziki gücü yerinde olan
                  kişiler götürme işi yapardı. Çünkü bir yıllık emek götürüyordu. En son olarak kalan eşyaların bir
                  kısmı obada saklanır diğerleri de yüklenerek yayladan ayrılınırdı. Bu arada çocuklarda oyuncaklarını
                  ve Çarcuruk’u saklarlardı. Bir dahaki baharda gelmek dileğiyle yurt yerini terk eder göçmen kuşlar
                  gibi daha ılık yerlere göçülürdü.
               </p>
               <p>
                  <img src={YaylaImage3} alt="YaylaImage3"
                       style={{float: "right", maxWidth: "100%", maxHeight: "100%", margin: "6px"}}/>
                  Ben iki yaşımdan 13 yaşıma kadar bu göç olayını aralıksız yaşadım. 32 sene sonra (2005) Sarpça’ya
                  gittiğimde oyuncaklarımı sakladığım yeri deştim ve bir tanesini buldum. Hazine bulmuş kadar sevindim.
                  Kendimden bir parçaya kavuşmuş gibi oldum. Geçmişten gelen bir köküme bir damarıma kavuştum sandım.
                  Bunlar Ağcaşar’ın kültür değerinden, geleneklerindendir. Bu ve bunlara benzer birçok geleneğimiz ne
                  yazık ki kaybolmak üzeredir. Bu değerlerin kaybolmalarını önlemek için bunları yazılı hale getirmek ve
                  arşivlemek gerektiğini düşünmekteyim. Bu konuda her Ağcaşarlı yapabildiği katkı verirse, Ağcaşar ve
                  Ağcaşarın kültürü, geleneği, tarihi ayakta kalır. Aksi takdirde Ağcaşara özel bazı değerleri bir daha
                  bulamayız
               </p>
               <p style={{color: 'red', fontSize: "40px"}}>***</p>
               <p>
                  Ali Rıza ARSLAN<br/>
                  15.07.2007<br/>
               </p>
            </div>
         </div>
      )
   }
}