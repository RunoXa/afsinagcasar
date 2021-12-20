import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

const useStyles = makeStyles(() => ({
   root: {
      height: '100%',
      overflow: 'auto'
   },
   header: {
      width: 'auto',
      textAlign: 'center',
      marginRight: '15px',
      marginLeft: '15px',
      padding: '25px',
   },
   item: {
      border: '3px solid #333333',
      borderRadius: '25px 25px 25px 25px',
      marginRight: '15px',
      marginLeft: '15px',
      marginBottom: '13px',
      padding: '15px',
      width: 'auto',
      "&:hover": {
         borderRadius: '25px 25px 25px 25px',
         color: 'white !important',
         backgroundColor: '#333333'
      },
   },
   listSection: {
      width: '100%',
      height: '100%',
      marginTop: '20px'
   },
   paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#ffffff',
      marginTop: '15x',
      overflow: 'auto',
      backgroundColor: '#1e1e1e',
      lineHeight: 2
   },
   badge: {
      marginRight: '20px',
      marginLeft: '20px'
   },
   listItemText: {
      fontSize: '30px'
   }
}));

export default function AliRizaArslan() {
   const classes = useStyles();

   window.scrollTo(0, 0);

   return (
      <div>
         <div className={classes.paper}>
            <div className={classes.listSection}>
               <div className={classes.header}>
                  <h2>Ali Rıza Arslan</h2>
               </div>
               <List
                   component="nav"
                   aria-labelledby="nested-list-subheader"
                   className={classes.root}>
                  <ListItem button exact to="/writer/aliRizaArslan/1" className={classes.item} component={Link}>
                     <article>
                        <p style={{textAlign: 'left'}}><DateRangeOutlinedIcon
                            style={{color: "white", width: '20px'}}/> 06/02/2008</p>
                        <h3 style={{marginBottom: '20px'}}>Yaşadığım Bir Olay</h3>
                        <p><span
                            style={{color: "blue", fontSize: "25px", fontWeight: "bold", lineHeight: 1}}>Y</span>ıllar önce Ağcaşar’da
                           yaşadığım bir olay vardı. Belki çok önemli değildi ama o yaşta yaşadığım ve bana
                           anlatılanlar çok önemli gelmişti. Öyle ki günümüzde o konuya ilişkin bir şeyler olduğunda ben
                           o yaşta yaşadıklarımı hatırlarım...
                        </p>
                        <p>> <u><strong>devamını oku</strong></u></p>
                     </article>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/2" className={classes.item} component={Link}>
                     <article>
                        <p style={{textAlign: 'left'}}><DateRangeOutlinedIcon
                            style={{color: "white", width: '20px'}}/> 15/03/2008</p>
                        <h3 style={{marginBottom: '20px'}}>Garip Bir İhale</h3>
                        <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold", lineHeight: 1}}>A</span>fşin-Elbistan A santrali
                           de garip bir özelleştirme uygulamasına maruz kalmıştır. 1994 yılında,
                           santralin tamamlanmayan iki ünitesinin yapılarak toplam 6 ünitesinin 20 yıl boyunca kömür sahasıyla
                           birlikte işletilmesi için uluslararası beş ayrı konsorsiyuma çağrı yapılmış...
                        </p>
                        <p>> <u><strong>devamını oku</strong></u></p>
                     </article>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/3" className={classes.item} component={Link}>
                     <article>
                        <p style={{textAlign: 'left'}}><DateRangeOutlinedIcon
                            style={{color: "white", width: '20px'}}/> 06/04/2008</p>
                        <h3 style={{marginBottom: '20px'}}>Hüseyin Dede</h3>
                        <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold", lineHeight: 1}}>H</span>üseyin Dede ŞEH DELİLİLİ
                           BELİCAN evladından Mola Veli ve Senem ananın ilk çocuklarıdır. Hüseyin Dede, ata yurdu olan Dersim’in
                           Pertek ilçesi Dere nahiyesi Karaveliler mezrasında 1866 tarihinde dünyaya gelmiş...
                        </p>
                        <p>> <u><strong>devamını oku</strong></u></p>
                     </article>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/4" className={classes.item} component={Link}>
                     <article>
                        <p style={{textAlign: 'left'}}><DateRangeOutlinedIcon
                            style={{color: "white", width: '20px'}}/> 30/04/2008</p>
                        <h3 style={{marginBottom: '20px'}}>1 Mayıs ve Pertek Anısı</h3>
                        <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold", lineHeight: 1}}>1</span> Mayıs İşçi Bayramı ya da
                           amele bayramı tüm dünyada sembolik de olsa kutlanıp tatil ilan edilirken bizim ülkemizde halen yasal
                           bir statüye kavuşturulamadı. Bahar bayramı mı desek yoksa işçi bayramı mı desek ya da amele bayramı mı
                           desek halen bunun tartışması var bizim ülkemizde...
                        </p>
                        <p>> <u><strong>devamını oku</strong></u></p>
                     </article>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/5" className={classes.item} component={Link}>
                     <article>
                        <p style={{textAlign: 'left'}}><DateRangeOutlinedIcon
                            style={{color: "white", width: '20px'}}/> 10/07/2008</p>
                        <h3 style={{marginBottom: '20px'}}>Sorumluluk</h3>
                        <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold", lineHeight: 1}}>D</span>ünyada savaş tarihi ile
                           insanlık tarihi eş zamanda başlamıştır. Tarihçiler, tarihi incelerken insanın tüm kültürel ve sosyal
                           yanlarını incelemelerine rağmen insanlık tarihinde savaşlar daha önemli bir yer alırlar...
                        </p>
                        <p>> <u><strong>devamını oku</strong></u></p>
                     </article>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/6" className={classes.item} component={Link}>
                     <article>
                        <p style={{textAlign: 'left'}}><DateRangeOutlinedIcon
                            style={{color: "white", width: '20px'}}/> 01/10/2008</p>
                        <h3 style={{marginBottom: '20px'}}>Karayolları ve Kazalar</h3>
                        <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold", lineHeight: 1}}>D</span>
                           ünya Sağlık Örgütüne göre gelişmiş ülkelerde, trafikteki insanlara yönelik tehdit-risk sıralama
                           ortalaması 9. sırada. Geri kalmış ülkelerde ise bu tehdit 3. sırada...
                        </p>
                        <p>> <u><strong>devamını oku</strong></u></p>
                     </article>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/7" className={classes.item} component={Link}>
                     <article>
                        <p style={{textAlign: 'left'}}><DateRangeOutlinedIcon
                            style={{color: "white", width: '20px'}}/> 12/12/2008</p>
                        <h3 style={{marginBottom: '20px'}}>Gündem</h3>
                        <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold", lineHeight: 1}}>B</span>u aralar gerek görsel
                           basında gerekse yazılı basında bazı konular yaygın bir şekilde konuşuluyor. Bunların başında dünya
                           ekonomik krizi, yerel seçimler ve Alevilerin Ankara'da yaptıkları miting ve tabi bunların önümüzdeki
                           yerel seçimlere nasıl yansıyacağı ve Alevi dernek ve vakıflarının bir biriyle olan rekabetleri
                           geliyor...
                        </p>
                        <p>> <u><strong>devamını oku</strong></u></p>
                     </article>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/8" className={classes.item} component={Link}>
                     <article>
                        <p style={{textAlign: 'left'}}><DateRangeOutlinedIcon
                            style={{color: "white", width: '20px'}}/> 25/12/2008</p>
                        <h3 style={{marginBottom: '20px'}}>Unuttuk mu?</h3>
                        <p><span style={{color: "blue", fontSize: "25px", fontWeight: "bold", lineHeight: 1}}>O</span>
                           tuz yıl önce bu gün Maraş’ta Maraşlılar, Maraşlılara bir can pazarı yaşattılar. Bu gün bir katliam
                           başlamıştı ve tam dört gün sürdü. Bu katliamdan sonra Maraş bir daha asla eski Maraş olmadı. Buraya
                           yolu düşenlerin içinde bir burukluk, bir acı olmuştur...
                        </p>
                        <p>> <u><strong>devamını oku</strong></u></p>
                     </article>
                  </ListItem>
               </List>
            </div>
         </div>
      </div>
   );
}