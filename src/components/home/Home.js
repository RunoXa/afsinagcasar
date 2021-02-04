import React from "react";
import '../../styles/Home.css';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Carousel from '../Carousel'
import WriterList from './WriterList'
import Paper from '@material-ui/core/Paper';
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles(() => ({
   root: {
      flexGrow: 1,
      color: '#ffffff'
   },
   paper: {
      paddingTop: '20px',
      border: '3px solid rgba(85, 4, 4, 1)',
      marginTop: '10px',
      borderRadius: '25px 25px 25px 25px',
      backgroundColor: '#181818',
      color: '#ffffff',
      overflow: 'auto'
   },
}));

export default function Home() {
   const classes = useStyles();
   const subheading1 = "Köroğlu dağının tepesinden aşağıya doğru hiç baktınız mı? Neden Köroğlu'na çıkarız? Neden Ağcaşar'a gideriz? Neden bütün sohbetlerimizde lafı mutlaka Ağcaşar'a getiririz? Neden sürekli birbirimizle sorunlar yaşarız? Neden sevdiklerimizden ayrı kalırız? Bir türlü kopamadığımız Ağcaşar'ı neden terk etmek zorunda kaldık? Zaman içerisinde neden çıkarcı olduk? Çok sevdiğimizi her vesileyle vurguladığımız Ağcaşar insanının yaptığı güzel şeyleri neden kıskanırız? Gücümüzü birleştirme konusunda neden duyarsızız? Neden ortak çıkarlarımız için yapılacak işlerin dışında dururuz? Geçmişimizi neden iyi bilmeyiz? Biz kimiz?";
   const subheading2 = "Bu soruları çoğaltmak mümkün. Bizler bu ve buna benzer soruların cevabını ararken, dünyanın birçok yerine göçmüş Ağcaşarlılar arasında bir bağ kurmak istedik. Yaşam şartları öyle bir hal aldı ki çoğumuz köyümüzden, yöremizden  ayrılmak zorunda kaldık. Yaşadığımız bütün bu güzellikler yüreğimizin bir köşesinde sadece birer anı ve özlem olarak kaldı.";
   const subheading3 = "İşte Ağcaşar Sitesi unutulmaya yüz tutmuş bu güzellikleri belleklerimizde yeniden canlandırmak, kültürel değerlerimize sahip çıkıp, gelecek nesillere taşımak, uzakları yakın kılmak, köyün sorunlarına yer vermek, bu sorunlara çözümler üretmek amacıyla 2006 yılının başında kurulmuştur.";
   const subheading4 = "Bu sayfada yayınlanmasını istediğiniz yazı ve resimleri bize gönderebilirsiniz.";

   window.scrollTo(0, 0);

   return (
      <div>
         <section className="container">
            <h1 className="home-title">AĞCAŞAR'A HOŞ GELDİNİZ</h1>
            <Carousel/>
            <div className="container">
               <div className="home-text">
                  <p className="subtitle is-4">{subheading1}</p>
                  <p className="subtitle is-4">{subheading2}</p>
                  <p className="subtitle is-4">{subheading3}</p>
                  <p className="subtitle is-4">{subheading4}</p>
               </div>
            </div>
            <div className={classes.root}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                     <Paper className={classes.paper}><WriterList/></Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Paper className={classes.paper}>
                        <ListSubheader component="div" style={{color: '#ffffff'}}>
                           <h3 style={{textAlign: 'center'}}>GÜNCEL HABERLER</h3>
                           <p>Bu bölümde güncel haberler eklenecektir..</p>
                        </ListSubheader>
                     </Paper>
                  </Grid>
               </Grid>
            </div>
         </section>
      </div>
   );
}
