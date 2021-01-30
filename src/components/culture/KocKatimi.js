import React, {Component} from "react";
import KocKatimiImage1 from '../../images/kockatimi1.jpg';
import KocKatimiImage2 from '../../images/kockatimi2.jpg';
import KocKatimiImage3 from '../../images/kockatimi3.jpg';

export default class KocKatimi extends Component {

   render() {
      return (
         <div style={{
            border: "3px solid rgba(85, 4, 4, 1)",
            padding: "1rem",
            marginTop: "75px",
            borderRadius: "25px 25px 25px 25px",
            backgroundColor: "rgb(10,0,0)",
            color: "#ffffff"
         }}>
            <div>
               <h2 style={{fontWeight: "bold", color: "#ffffff"}}>Ağcaşar'da Koç Katımı</h2>
            </div>
            <div style={{marginTop: "50px"}}>
               <p>
                  <img src={KocKatimiImage1} alt="KocKatimiImage1"
                       style={{float: "left", maxWidth: "100%", margin: "20px 60px 20px 0px"}}/>
                  <span style={{color: "blue", fontSize: "25px", fontWeight: "bold"}}>A</span>ğcaşar Toroslar’ın Kuzey
                  eteklerinde Binboğa Dağlarının güney yamaçlarına yaslanmış daha doğrusu serpiştirilmiş küçük bir dağ
                  köyüdür. Bu küçük dağ köyünün de kendine özgü gelenekleri ve görenekleri vardır. Bu gelenek ve
                  görenekler ya kendi yaşam ve inançları sonucu oluşmuş ya da çevredeki diğer toplum grupları ile
                  müşterek yaşamın sonucu oluşmuş değerler olup toplumsal yaşamın gereğidir. Diğer toplumlarda olduğu
                  gibi Ağcaşar’da da bu değerlerin bir kısmı inançlarından ötürü bir kısmı da üretim şekillerinden ötürü
                  oluşmuştur. Bu geleneklerden bir tanesi de KOÇ KATIMI’dır. Bu gelenek Ağcaşar’daki üretim sonucunda
                  oluşan geleneklerimizden biridir.</p>
               <p>
                  <img src={KocKatimiImage2} alt="KocKatimiImage2"
                       style={{float: "right", maxWidth: "100%", margin: "10px"}}/>
                  Ağcaşar’da ağustos ayı sonu eylül ayı başında koçlar koyunlardan ayrılırdı. Ayrılan koçlar ayrı bir
                  şekilde özel bir itina ile köyün en iyi otlaklarında otlatılarak Ekim ayı sonuna kadar iyice
                  beslenirdi. Koçları besleme işini genellikle 12-15 yaş arasındaki çocuklar tarafından yapılırdı. Sabah
                  güneşi ile kalkılır, koçlar meraya götürülür, öğlen sıcağında ya bir ağaç gölgesinde ya da ağılda
                  dinlendirildi. Koçlar akşam serinliğinde yine otlağa götürülür ve yatsı zamanı ağıla getirilirdi.
                  Burada özel hazırlanmış yemlerle sabaha kadar beslenir ve dinlendirilirlerdi. Koçlara yapılan bu özel
                  bakım yaklaşık bir, bir buçuk ay sürerdi.</p>
               <p>
                  <img src={KocKatimiImage3} alt="KocKatimiImage3"
                       style={{float: "left", maxWidth: "100%", margin: "20px 60px 20px 0px"}}/>
                  Bu sürenin sonunda “Koç Katımı (neri beranan)” hazırlıkları başlardı. İlk önce koçların boyanması için
                  özel boyalar alınır ya da hazırlanırdı. Koçların sürüye katılacak günün sabahı koçlar yemlendikten
                  sonra boyanırdı. Boyama işlemi koçun kafasından başlar ve bel kemiğini takip eder ve kuyruk ucuna
                  kadar çizgi şeklinde inerdi. Daha sonra bu çizgiye dik olarak belinden karnına doğru giden gök
                  kuşağının anımsatan rengarenk çizgiler çizilirdi. Boyanan her bir koçu, silkinerek üzerindeki boyayı
                  atmasını ve boya ile oluşturulan şekillerdeki uyumun bozulmasını önlemek için, bir çocuk ya da bir
                  yetişkin beklerdi. Koçların boyalı kuruduktan sonra, koçların boyunlarına ipe geçirilmiş genellikle
                  elma olmak üzere nadiren nar ve ayva meyveleri takılırdı. Koçların meyveleri yemelerinin engellemek
                  için ipler kısa tutularak takılırdı.
               </p>
               <p>Bu esnada aynı zamanda mutfakta da kadınlar mevsimin ve mutfağın en özel yemeklerini hazırlarlardı.
                  Her kadın genellikle en iyi yaptığı yemeği yapardı. Ağırlıkta tereyağının kullanıldığı yemekler
                  yapılırdı. Şimdi belli bir yaşın üzerindeki Ağcaşarlıların adını ve tadını unuttuğu ve çoğumuzun da
                  hiç tatmadığı bu yemeklerden bir kaçını hatırlayalım. “Yağda yumurta” yani “kaygana” (Mete Elif buna
                  birde kuru dut katardı), Omojıne Gule’nin “nane tevesi”, Gülistan nenemin “helvası” (nenem, şeker pek
                  olmadığından helvaya bal şerbeti ya da dut pekmezi katardı), Gule nenemin “yağda kayısısı”. Bunlar
                  benim çocukluğumun aşçılarıydı. Ancak aşçılar her dönem değişiyordu. Daha sonra ki dönemlerde, Zeycan
                  halanın “Hevrışkı”, Omojıne Hec’in “Korizesi’” çok özel yemeklerdi. Bu yemeklerin yanında “Heside”,
                  “Haşıl”, “Nene hekan”, “Kılora puşuruge” yapılırdı.</p>
               <p>Bütün bu hazırlıklar tamamlandıktan sonra millet ve tüm sürü harmanda toplanırdı. Ağılda bulunan
                  koçlar bırakılmadan önce koçların sırtına küçük çocuklar bindirilir ve sürüye katılana kadar geçen yol
                  boyunca koçların sırtında kalırlardı. Küçük çocukların koçların sırtına bindirilmesinin nedeni, eğer
                  kız çocuğu bindirilirse o yıl doğacak kuzuların dişi, eğer erkek çocuğu bindirilirse doğacak kuzuların
                  erkek olacağına inanılmasındandı. Bu esnada yaşları biraz daha büyük çocuklarda koçların boyunlarına
                  asılan meyveleri kapmak için yarışırlardı. Böylece koçlar sürüye katılmış olurdu.</p>
               <p>Bunun ardında Koç Katım töreninin yeme içme kısmı başlardı. Yeme içme esnasında çobanlar, sürü
                  sahipleri ve komşular olmak üzere tüm köylü orada bulunur şenliğe katılırdı. Omojine Nazife’nin günün
                  önem ve ehemmiyetine uygun esprileri eşliğinde sohbetler yapılır, gelecek yılın kuzuları ve koyunları
                  üzerine hayaller ve hesaplar yapılır, temenni dileklerinde bulunulurdu. Yemeğin sonunda köyün
                  büyüklerinden bir tanesi dua-mani karışımı bir şeyler okur ve köylüler dağılırdı. Ancak çobanlar, sürü
                  sahipleri ve çocuklar o günü orda geçirirlerdi. Çocuklar koçların toslaşması-vuruşmasını, kimin koçu
                  kaçacak kimin koçu kazanacak heyecanı ile seyrederlerdi. Gerçi bu vuruşmalara çobanlar müdahale
                  ederlerdi. Ancak koçlar o denli çok vuruşur ve bu vuruşmalar o denli kısa olurdu ki çoğuna müdahale
                  etmeleri mümkün olamazdı. Koçların vuruşmasında koçun biri kaçar ve olay biterdi.</p>
               <p>Günün akşamında sürü sahipleri koyunlarını ayırır ve herkes kendi koyunlarını ağıllarına götürürdü.
                  Çocuklar gün boyu topladıkları Koç Katımı Çiçeği denilen ve güz yağmurları sonrasında olan renga renk
                  parlak çiçekler ile köye dönerlerdi. Koç Katımı törenin yapıldığı günün akşamı çobanın o yılki
                  çobanlık süresi sona ererdi. Ertesi yıl aynı sürünün çobanlığını yapacak olanlar devam ederdi. Ancak
                  etmeyecekse o gün o yılın çobanın son günü ya da yeni çobanın ilk günüdür. Bu gün sürü sahipleri ve
                  çobanlar için yılbaşı günü sayılırdı.</p>
               <p>Bu kültürel değer, Ağcaşar’ın geçmişteki üretim şeklinden kaynaklı bir değerdir. Ağcaşar’da 1980’den
                  itibaren tarım ve hayvancılık yavaş yavaş kaybolunca bu gelenekler de kaybolmaya başlamıştır. Bu
                  geleneği bundan sonra tekrar yaşatmak biraz zordur. Bir düşünür der ki: “Kültür bir üretimin
                  sonucudur. Bir şey üretemeyen ve üretimde gelişemeyen toplumlar kültürel olarak ta üretici olamaz ve
                  gelişemezler. Üretmek kültürü bireylerin ve o bireylerin oluşturduğu toplumların işidir.”</p>
               <p style={{color: 'red', fontSize: "40px"}}>***</p>
               <p>
                  Ali Rıza ARSLAN<br/>
                  09.10.2007<br/>
               </p>
            </div>
         </div>
      )
   }
}