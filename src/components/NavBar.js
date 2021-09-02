import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginRight: '32px'
  },
  button: {
    color: "white",
    border: "solid 1px white",
    marginLeft: "8px",
    "&:hover": {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }

}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            PAPERBOY
          </Typography>
          <Button href="/topHeadlines" className={classes.button}>
            Top Headlines
          </Button>
          <Button href="/" className={classes.button}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
      <div className="hwrap">
        <div className="hmove">
        <div className="hitem">Mønti Pythøn ik den Hølie Gräilen Røtern nik Akten Di Wik Alsø wik Alsø alsø wik Wi nøt trei a høliday in Sweden this yër? See the løveli lakes The wøndërful telephøne system And mäni interesting furry animals The characters and incidents portrayed and the names used are fictitious and any similarity to the names, characters, or history of any person is entirely accidental and unintentional. Signed RICHARD M. NIXON</div>
        <div className="hitem">Including the majestik møøse A Møøse once bit my sister... No realli! She was Karving her initials
        on the møøse with the sharpened end of an interspace tøøthbrush given her by Svenge - her brother-in-law - an Oslo dentist and star of many Norwegian møvies: "The Høt Hands of an Oslo Dentist", "Fillings of Passion", "The Huge Mølars of Horst Nordfink"... We apologise for the fault in the subtitles.</div>
        <div className="hitem">Those responsible have been sacked. Mynd you, møøse bites Kan be pretti nasti... We apologise again for the fault in the subtitles. Those responsible for sacking the people who have just been sacked have been sacked. Møøse trained by YUTTE HERMSGERVØRDENBRØTBØRDA Special </div> 
        <div className="hitem">Møøse Effects OLAF PROT Møøse Costumes SIGGI CHURCHILLMøøse Choreographedby HORST PROT III Miss Taylor's Møøses by HENGST DOUGLAS-HOME Møøse trained to mix concrete and sign complicated insurance forms by JURGEN WIGG Møøses' noses wiped by BJØRN IRKESTØM-SLATER WALKER </div>
        <div className="hitem">Large møøse on the left hand side of the screen in the third scene from the end, given a thorough grounding in Latin, French and "O" Level Geography by BO BENN Suggestive poses for the Møøse suggested by VIC ROTTER Antler-care by LIV THATCHER The directors of the firm hired to </div>
        <div className="hitem">continue the credits after the other people had been sacked, wish it to be known that they have just been sacked. The credits have been completed in an entirely different style at great expense and at the last minute. Executive ProducerJOHN GOLDSTONE & "RALPH" The Wonder Llama </div>
        <div className="hitem">Producer MARK FORSTATER Assisted By EARL J. LLAMA MIKE Q. LLAMA III SY LLAMA MERLE Z. LLAMA IX Directed By 40 SPECIALLY TRAINED ECUADORIAN MOUNTAIN LLAMAS 6 VENEZUELAN REDLLAMAS 142 MEXICAN WHOOPING LLAMAS 14 NORTH CHILEAN GUANACOS (CLOSELY RELATED TO THE LLAMA) REG LLAMA OF BRIXTON 76000 BATTERY LLAMAS FROM "LLAMA-FRESH" FARMS LTD. NEAR PARAGUAY and TERRY GILLIAM & TERRY JONES</div>
        </div>
      </div>
    </div>
  );
}
