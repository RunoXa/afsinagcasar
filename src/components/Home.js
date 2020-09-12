import React, {Component} from "react";
import '../styles/Home.css';
import HomeImage from '../images/res_10.jpg'

export default class Home extends Component {

    render() {
        let heading = "AĞCAŞAR'A HOŞ GELDİNİZ";
        let subheading1 = "Köroğlu dağının tepesinden aşağıya doğru hiç baktınız mı? Neden Köroğlu'na çıkarız? Neden Ağcaşar'a gideriz? Neden bütün sohbetlerimizde lafı mutlaka Ağcaşar'a getiririz? Neden sürekli birbirimizle sorunlar yaşarız? Neden sevdiklerimizden ayrı kalırız? Bir türlü kopamadığımız Ağcaşar'ı neden terk etmek zorunda kaldık? Zaman içerisinde neden çıkarcı olduk? Çok sevdiğimizi her vesileyle vurguladığımız Ağcaşar insanının yaptığı güzel şeyleri neden kıskanırız? Gücümüzü birleştirme konusunda neden duyarsızız? Neden ortak çıkarlarımız için yapılacak işlerin dışında dururuz? Geçmişimizi neden iyi bilmeyiz? Biz kimiz?";
        let subheading2 = "Bu soruları çoğaltmak mümkün. Bizler bu ve buna benzer soruların cevabını ararken, dünyanın birçok yerine göçmüş Ağcaşarlılar arasında bir bağ kurmak istedik. Yaşam şartları öyle bir hal aldı ki çoğumuz köyümüzden, yöremizden  ayrılmak zorunda kaldık. Yaşadığımız bütün bu güzellikler yüreğimizin bir köşesinde sadece birer anı ve özlem olarak kaldı.";
        let subheading3 = "İşte Ağcaşar Sitesi unutulmaya yüz tutmuş bu güzellikleri belleklerimizde yeniden canlandırmak, kültürel değerlerimize sahip çıkıp, gelecek nesillere taşımak, uzakları yakın kılmak, köyün sorunlarına yer vermek, bu sorunlara çözümler üretmek amacıyla 2006 yılının başında kurulmuştur.";
        let subheading4 = "Bizler internet sayfası yapma konusunda profesyonel değiliz. Mutlaka yanlışlarımız olacaktır.";
        let subheading5 = "Bu sayfada yayınlanmasını istediğiniz yazı ve resimleri bize gönderebilirsiniz.";

        return (
            <div>
                <section className="section">
                    <div className="section-body">
                        <div className="container">
                            <h1 className="title">{heading}</h1>
                            <div className="home-text">
                               <p> <img className="home-image" src={HomeImage} alt="HomeImage"/></p>
                                <p className="subtitle is-4">{subheading1}</p>
                                <p className="subtitle is-4">{subheading2}</p>
                                <p className="subtitle is-4">{subheading3}</p>
                                <p className="subtitle is-4">{subheading4}</p>
                                <p className="subtitle is-4">{subheading5}</p>
                            </div>
                            <a type="button" className="btn is-large text-dark bg-secondary" id="learn">Coming Soon..</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}