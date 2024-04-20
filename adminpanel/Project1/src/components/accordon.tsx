import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwitchLabels from './switch';
interface Props{
  name:String;
  labels:Array<string>;
}
export default function AccordionExpandDefault(props:Props) {
  const label=props.labels;
  return (
    <div>

      <Accordion sx={{ backgroundColor: 'none',boxShadow:'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          color='secondary'
          sx={{paddingTop:'none'}}
        >
          <Typography>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'1px 13px 1px'}}>
          
            <SwitchLabels labels={label}/>
         
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
