import React, {Component} from "react";
import YaylaImage1 from '../../images/yayla1.jpg';

export default class Yayla extends Component {

   render() {
      return (
         <div style={{
            border: "3px solid #50001B", padding: "1rem", borderRadius: "10px 10px 10px 10px", backgroundColor: "#f5f5f5"
         }}>
            <div>
               <h2 style={{fontWeight: "bold", color: "#50001B"}}>Ağcaşar'da Yaylaya Göç</h2>
            </div>
            <div style={{marginTop: "50px"}}>
               <p>Eskiden mayıs ayında diğer tüm komşu köylerde olduğu gibi Ağcaşar’da da bir telaş başlardı. Bu telaş
                  ve heyecan kollektif bir yaşamın ve üretimin başlangıcı olan yaylaya göçün telaşıydı. Yaylaya yaklaşık
                  olarak mayıs ayı ortalarında gidilir ve yaz sonunda tekrar köye geri dönülürdü. Bu gidiş ve gelişlerin
                  her birinin ayrı ayrı zevkleri ve zorlukları vardı. Asıl önemlisi bu göçlerin kendine özgü bir kültürü
                  vardı. Belki de Ağcaşarlıların hala değişerek bir şekilde devam eden göç kültürlerinin geçmişi buradan
                  gelmektedir.</p>
               <p>
                  <img src={YaylaImage1} alt="YaylaImage1" style={{float: "right", maxWidth: "100%"}}/>
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
            </div>
         </div>
      )
   }
}