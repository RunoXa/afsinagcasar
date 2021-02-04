import React, {Component} from "react";
import VeliDedeImage1 from "../../images/velidede/velidede1.jpg";
import VeliDedeImage2 from "../../images/velidede/velidede2.jpg";

export default class VeliDedeAnlatiyorS1 extends Component {

   render() {
      return (
         <div style={{
            border: "3px solid rgba(85, 4, 4, 1)",
            padding: "1rem",
            marginTop: "75px",
            borderRadius: "25px 25px 25px 25px",
            backgroundColor: "#161616",
            color: "#ffffff",
            overflow: "auto"
         }}>
            <div>
               <h2 style={{fontWeight: "bold", color: "#ffffff", textAlign: "center"}}>Dersim'den Ağcaşar'a Göç ve
                  Seyyit Veli'nin Vasiyeti</h2>
            </div>
            <div style={{marginTop: "50px"}}>
               <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold"}}>H</span>ayır, hiç bir şey yokmuş.
                  Sadece bizim dedemiz oranın vahşiyetinden, oranın durumundan nefret etmiş,
                  daha doğrusu bizim aşiretle başka bir aşiret arasında bir düşmanlık olmuş. O aşiret de çok kuvvetli
                  bir aşiret. İlk harpte de aşiret reisi Veli Ağa vuruluyor. Vurulunca da bütün şark Dersim'i
                  ayaklanıyor. Bütün Pilvenkleri yeriyle yurduyla kaldırak, talıyak, kırak, kesek, biçek. Bunlarda da
                  tabii bir hazırlık. Bütün herkes silahlanacak, silah alacak, harp edeceğiz…O zaman Harput diyorlardı,
                  Elazığ yoktu. Bizim aşiret reisi Harput´tan silah falan götürtdürüyor. Köyler silahlanacak.</p>
               <img src={VeliDedeImage1} alt="VeliDedeImage1"
                    style={{float: "left", maxWidth: "100%", margin: "10px"}}/>
               <p>Dedemiz de evde yokmuş. Emmimize diyorlar, sen de ya silah alacaksın bizle harp edeceksin, veyahut
                  köyün sığırını güdeceksin, biz harbe gideceğiz, öyle ya… Emmim de diyor: Ne demek, ben sığır güdecek
                  adammıyım, ben sizden aşağı mıyım? Hüseyin Dede bir silah alıyor…hele babam... nişan kuruyorlar… ha
                  gözünü sevdiğimi attığını vuruyor, attığını vuruyor, tam harp edecek adamdır. Getiriyor silahı odaya
                  asıyor. Dedemiz de artık nerdeymişse, geliyor orada silahı görüyor.</p>
               <p>Bizim dedemizin başından nice serencamlar geçmiş. Böyle seyyah gibiymiş, canım. Artık neredeymişse
                  bilmiyorum ya... Gelmiş, orda bir silah asılı, „Bu nedir?“, diye nenemize soruyor: „Valla, oğlun
                  Hüseyin aldı“, diyor. -“Haa, şeytanı aldınız getirdiniz , evime koydunuz desene. Bu memleket bana
                  haram olsun“, diyor. İşte araziyi satıyor, parayı buraya gönderiyor. Kendisi de orda kalıyor.Yazın
                  göçüp geleceklermiş. Yazın, mart ayında da allahın emriyle vefaat ediyor.</p>
               <img src={VeliDedeImage2} alt="VeliDedeImage2"
                    style={{float: "right", maxWidth: "100%", margin: "10px"}}/>
               <p>Babalarımız da göçüp buraya, Ağcaşar´a geliyorlar. Emmim 28yaşında, babam 24 yaşında. Ötekiler daha
                  ufak. Orda evli, bütün o kadar emmi, emmizade o kadar hısım, akraba, aşiret, öyle ya…Bunları orda
                  bırakıyorlar. Emmim Hüseyin Dede biniyor geliyor Dallıkavak´a, parayı alıp geri götürüp de orda Cemiye
                  Zeran var, orayı alacaklar. Dallıkavak´a geliyor, Molla: “Valla Keko“, diyor, “Ben Ağcaşar´a sizin
                  paranızı koydum. Sizin için Ağcaşar´ı aldım, gelirseniz mülk sizindir. Gelmezseniz sizin de babanızdır
                  benim de. Kazanır veririm, n´edim. ”Elinde parası yok, n´etsin! Hüseyin Dede ordan biniyor geri
                  geliyor…sonra göçüyorlar. Beş kardeş ilk 310'da (1894) Ağcaşar´a geliyorlar, beş sene kaldıktan sonra
                  tekrar gidiyorlar memlekete. Ağcaşar´a son gelişlerinde Hasan Efendi varmış herhalde, zannedersem,
                  belki de Memet de varmış. Çünkü 320'de beş sene aradan sonra tekrar gelip Ağcaşar´a
                  yerleşiyorlar…Belki de analarının kucağında varmış bunlar. Dedemiz Seyyit Veli ölmeden önce
                  babalarımıza da vasiyet ediyor. Son vasiyeti, rahmetli babam derdi, son vasiyeti: “Dedelik
                  yapmayacaksınız, Hocalık yapmayacaksınız. Bu memlekette de durmayacaksınız, göçeceksiniz. Elbistan
                  memleketine gideceksiniz!“ Bu üç vasiyeti, rahmetli babam her zaman derdi… Nenemiz o kadar ikrar,
                  iman, ısrar:“ Sen niye bunu diyorsun?“ Rahmetli babam her zaman bunu bize derdi: “Böyle elini bir
                  salladı, artık son, son nefesi…Amaan dedi, buzun üstündeki bir temeldir, bir virandır onun hayırı
                  olmaz. Ama birisi getirir de rızalığına beş kuruş verirse, alsın öpsün başına koysunlar.“ Babam da
                  derdi: “Yavrum, dedelik çok saltanatlıydı, çok iyiydi, dedelikten bitürlü elimiz olmadı işte.“</p>
            </div>
         </div>
      )
   }
}