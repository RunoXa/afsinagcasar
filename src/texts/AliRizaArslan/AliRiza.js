import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AliRizaText1 from "./AliRizaText1";

const useStyles = makeStyles((theme) => ({
   root: {
      margin: '20px'
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      color: '#50001B',
      fontWeigth: 'bold'
   },
   accordionContent: {
      backgroundColor: '#f5f5f5',
      boxShadow: '8px 8px 8px 8px silver'
}
}));

const AccordionSummary = withStyles({
   content: {
      flexGrow: 1
   }
})(MuiAccordionSummary);

export default function ControlledAccordions() {
   const classes = useStyles();
   const [expanded, setExpanded] = React.useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <div className={classes.root}>
         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                    className={classes.accordionContent}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon/>}
               aria-controls="panel1bh-content"
               id="panel1bh-header">
               <Typography className={classes.heading}>AĞCAŞAR’DA YAŞADIĞIM BİR OLAY</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  <AliRizaText1/>
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.accordionContent}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon/>}
               aria-controls="panel2bh-content"
               id="panel2bh-header">
               <Typography className={classes.heading}>Yazi 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                  diam eros in elit. Pellentesque convallis laoreet laoreet.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.accordionContent}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon/>}
               aria-controls="panel3bh-content"
               id="panel3bh-header">
               <Typography className={classes.heading}>Yazi 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                  vitae egestas augue. Duis vel est augue.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.accordionContent}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon/>}
               aria-controls="panel4bh-content"
               id="panel4bh-header">
               <Typography className={classes.heading}>Yazi 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                  vitae egestas augue. Duis vel est augue.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
}
