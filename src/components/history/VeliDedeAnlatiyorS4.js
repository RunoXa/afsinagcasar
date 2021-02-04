import React, {Component} from "react";
import VeliDedeImage7 from "../../images/velidede/velidede7.jpg";
import VeliDedeImage8 from "../../images/velidede/velidede8.jpg";

export default class VeliDedeAnlatiyorS1 extends Component {

   render() {
      return (
         <div style={{
            border: "3px solid rgba(85, 4, 4, 1)",
            padding: "1rem",
            marginTop: "75px",
            borderRadius: "25px 25px 25px 25px",
            backgroundColor: "#181818",
            color: "#ffffff",
            overflow: "auto"
         }}>
            <div>
               <h2 style={{fontWeight: "bold", color: "#ffffff", textAlign: "center"}}>Kötüye Karşı İyilik</h2>
            </div>
            <div style={{marginTop: "50px"}}>
               <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold"}}>E</span>vet, nerde bir mazlum
                  varsa o ezilir. Ama zalımların sonu nerde kalır, onlar da ezilmiyor mu? Bu da yaradılıştan mı,
                  mayasından mı yoksa vicdandan mı, bilmiyorum kurban! Şimdi birisi senin kafanı kırsa. Bir saat sonra
                  da getirse tabancayı eline verse. Aha benim boynum, aha kılıç. İstersen beni kes. Sen ona acaba bir
                  çintik vurur musun, vurmaz mısın? Öteki de hiç öyle yapmaz. Çalışır ki bir fırsat bula da… ben de onu
                  öldüreyim der. Biz allaha bağlanmayak da nereye bağlanak!? Bir umut yok, n`edek! Elimizden bir iş
                  gelmezse… ancak allaha bağlanırık. Başka n`edek! Başka çaremiz yok.</p>
               <img src={VeliDedeImage7} alt="VeliDedeImage7"
                    style={{float: "left", maxWidth: "100%", maxHeight: "100%", margin: "10px"}}/>
               <p>Ufak bir mesele. Söylenecek bir mesele değil ama…İlerde bir dövüşümüz oldu. Ali Rıza`nın kafasını
                  kırdılar. İbrahim´in de şurasına bir hançer soktular. Bir saat sonra bizimkiler geldi, kuvvetimiz
                  çoğaldı… Çoğalınca onlar kaçtı. İki tanesi içimizde kaldı. En büyüğü Ali Kahyanın oğlu, o yanımızda
                  kaldı. Ötekiler hücum ettiler, baltayla, bıçakla bunu öldürecekler. Bunu da muhafaza eden bir ben, bir
                  de rahmetli Hasan Efendi aracı olduk. Koruduk, vurdurmadık. Bu adam içimizde kaldı, demek bunu öldürek
                  mi!? Bu erkeklik midir? Biz muhafaza ettik. Buna ahmaklık mı dersin, başka bir şey mi dersin…ötekiler
                  olsaydı öldürürlerdi! Biri balta attı, baltanın ağzıyla… Rahmetlik Hasan Efendi oğlanı kucağına aldı.
                  Biz de etrafta koruyoruz. Hasan Efendinin kucağına bir balta attı, Ali Rıza mıydı, yahut Hasan Efendi
                  mi oğlanı şöyle bir itti, baltanın ağzı buraya rastladı, yoksa şurdan biçip gidecekti. Buna ne dersin
                  kurban! Buna biz ne diyek!</p>
               <img src={VeliDedeImage8} alt="VeliDedeImage8"
                    style={{float: "right", maxWidth: "100%", maxHeight: "100%", margin: "10px"}}/>
               <p>Valla, ben epey gördüm ömrümde, epey gördüm haksızların ezilmesini. Haksızların cezasını bulduğunu ben
                  kendi gözümle görmüşüm, yavrum.</p>
               <p><span style={{fontStyle: "italic"}}>Eskiden beri tarihlerde hep yazar…(A.Beyazıt)</span></p>
               <p>Tarihi bilmiyorum. Ben gördüğümü derim. Kötülük yapanlar muhakkak kendi cezasını çekmiştir.</p>
               <p style={{color: 'red', fontSize: "40px"}}>***</p>
               <p>
                  <span style={{fontWeight: "bold"}}>Söyleşi ve ses kayıt:</span> Ali Beyazıt<br/>
                  <span style={{fontWeight: "bold"}}>Yer:</span> Ağcaşar<br/>
                  <span style={{fontWeight: "bold"}}>Tarih:</span> 11 Ağustos 1969<br/>
                  <span style={{fontWeight: "bold"}}>Yazıya aktarılan süre:</span> yaklaşık 30 dakika<br/>
                  <span style={{fontWeight: "bold"}}>Arşiv ve prodüksiyon:</span> Aslıhan Altun, Londra<br/>
                  <span style={{fontWeight: "bold"}}>Transkripsiyon (Yazıya Döken):</span> Ercan Arslan, Berlin<br/>
                  <span style={{fontWeight: "bold"}}>Fotoğraflar:</span> Vedat Arslan, Stephan Komitsch ve arşiv
               </p>
            </div>
         </div>
      )
   }
}