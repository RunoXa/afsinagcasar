import React, {Component} from "react";
import '../styles/Home.css';
import Carousel from './Carousel'
export default class Home extends Component {

    render() {
        let heading = "AĞCAŞAR'A HOŞ GELDİNİZ";
        let subheading1 = "Köroğlu dağının tepesinden aşağıya doğru hiç baktınız mı? Neden Köroğlu'na çıkarız? Neden Ağcaşar'a gideriz? Neden bütün sohbetlerimizde lafı mutlaka Ağcaşar'a getiririz? Neden sürekli birbirimizle sorunlar yaşarız? Neden sevdiklerimizden ayrı kalırız? Bir türlü kopamadığımız Ağcaşar'ı neden terk etmek zorunda kaldık? Zaman içerisinde neden çıkarcı olduk? Çok sevdiğimizi her vesileyle vurguladığımız Ağcaşar insanının yaptığı güzel şeyleri neden kıskanırız? Gücümüzü birleştirme konusunda neden duyarsızız? Neden ortak çıkarlarımız için yapılacak işlerin dışında dururuz? Geçmişimizi neden iyi bilmeyiz? Biz kimiz?";
        let subheading2 = "Bu soruları çoğaltmak mümkün. Bizler bu ve buna benzer soruların cevabını ararken, dünyanın birçok yerine göçmüş Ağcaşarlılar arasında bir bağ kurmak istedik. Yaşam şartları öyle bir hal aldı ki çoğumuz köyümüzden, yöremizden  ayrılmak zorunda kaldık. Yaşadığımız bütün bu güzellikler yüreğimizin bir köşesinde sadece birer anı ve özlem olarak kaldı.";
        let subheading3 = "İşte Ağcaşar Sitesi unutulmaya yüz tutmuş bu güzellikleri belleklerimizde yeniden canlandırmak, kültürel değerlerimize sahip çıkıp, gelecek nesillere taşımak, uzakları yakın kılmak, köyün sorunlarına yer vermek, bu sorunlara çözümler üretmek amacıyla 2006 yılının başında kurulmuştur.";
        let subheading4 = "Bizler internet sayfası yapma konusunda profesyonel değiliz. Mutlaka yanlışlarımız olacaktır.";
        let subheading5 = "Bu sayfada yayınlanmasını istediğiniz yazı ve resimleri bize gönderebilirsiniz.";

        return (
            <div className="home-content">
                <section className="container">
                    <Carousel/>
                    {/*<Carousel>*/}
                    {/*    <Carousel.Item>*/}
                    {/*        <img className="home-image" src={HomeImage1}*/}
                    {/*             alt="HomeImage1"/>*/}
                    {/*    </Carousel.Item>*/}
                    {/*    <Carousel.Item>*/}
                    {/*        <img className="home-image" src={HomeImage2}*/}
                    {/*             alt="HomeImage2"/>*/}
                    {/*    </Carousel.Item>*/}
                    {/*    <Carousel.Item>*/}
                    {/*        <img className="home-image" src={HomeImage3}*/}
                    {/*             alt="HomeImage3"/>*/}
                    {/*    </Carousel.Item>*/}
                    {/*</Carousel>*/}
                    <h1 className="home-title">{heading}</h1>
                    <div className="container">
                        <div className="home-text">
                            <p className="subtitle is-4">{subheading1}</p>
                            <p className="subtitle is-4">{subheading2}</p>
                            <p className="subtitle is-4">{subheading3}</p>
                            <p className="subtitle is-4">{subheading4}</p>
                            <p className="subtitle is-4">{subheading5}</p>
                        </div>
                        <a type="button" href="/" className="btn is-large text-dark bg-secondary" id="button">Coming
                            Soon..</a>
                    </div>
                </section>
            </div>
        )
    }
}