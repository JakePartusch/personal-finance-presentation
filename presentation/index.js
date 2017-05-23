// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Finance by Jake
            </Heading>
            <Heading size={1} fit caps>
              A Financial Guide for Young Adults
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps>
              College Life
            </Heading>
            <List>
              <Appear><ListItem>Create a Budget</ListItem></Appear>
              <Appear><ListItem>Start Building Credit</ListItem></Appear>
              <Appear><ListItem>Understand your Student Loans</ListItem></Appear>
              <Appear><ListItem>Begin to think about Retirement</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps>
              Budgeting Tools
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://www.youneedabudget.com/landing/students/">YNAB</Link>(Everyday tracking and budgeting)</ListItem></Appear>
              <Appear><ListItem><Link href="https://www.mint.com/">Mint</Link>(Net Worth Tracking, Account Linking)</ListItem></Appear>
              <Appear><ListItem><Link href="https://docs.google.com/spreadsheets/d/1xawTXik_BkhU3vTnV888h7AthJRy5z6WNh9SjQXFr2s/edit#gid=18">Google Docs Spreadsheet</Link>(Manual, hands-on)</ListItem></Appear>
              <Appear><ListItem><Link href="https://www.personalcapital.com/">Personal Capital</Link>(Good for tracking net worth progress)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps>
              Budgeting Tips
            </Heading>
            <List>
              <Appear><ListItem>Give Every dollar a job</ListItem></Appear>
              <Appear><ListItem>Automate as much as possible</ListItem></Appear>
              <Appear><ListItem>Your budget will be way off at first (and that's okay!)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps>
              Example Budget
            </Heading>
            <Heading size={1} fit caps>
              <Link href="https://docs.google.com/spreadsheets/d/1s-Qp2qb2LERr5g_yA6Q01aUxvJdNqCoVqEVF6kgV9CU/edit#gid=22">Google Docs Spreadsheet</Link>
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps>
              Building Credit
            </Heading>
            <List>
              <Appear><ListItem>Credit is a tool</ListItem></Appear>
              <Appear><ListItem>Treat a credit card like a fancy debit card</ListItem></Appear>
              <Appear><ListItem>PAY IN FULL EACH MONTH</ListItem></Appear>
              <Appear><ListItem>Try to keep credit usage under 30%</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps>
              Student Credit Cards
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://www.discover.com/credit-cards/student/">Discover it® for Students</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://www.capitalone.com/credit-cards/journey-student/">Journey® Student Rewards from Capital One®</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://www.usbank.com/credit-cards/secured-card.html">U.S. Bank Secured Visa® Card</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps>
              Student Loan Facts
            </Heading>
            <List>
              <Appear><ListItem>Reduce loan amounts by frugal living and part time work</ListItem></Appear>
              <Appear><ListItem>Your interest rate (APR 6% = $60/year for each $1000)</ListItem></Appear>
              <Appear><ListItem>You will owe about 1% of the loan balance each month for ten years. $200/month on $20,000</ListItem></Appear>
              <Appear><ListItem>You can not escape Student Loans! ಠ_ಠ</ListItem></Appear>
              <Appear><ListItem>If you are struggling to pay back federal loans look <Link href="https://studentaid.ed.gov/sa/repay-loans/understand/plans/income-driven">here</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={1} fit caps>
                So, I got a job... Now what?
            </Heading>
            <Image src="http://denisuca.com/wp-content/uploads/2014/06/thinking-meme-640x523.png" margin="0px auto 40px" height="293px"/>
           </Slide>
           <Slide transition={["zoom", "fade"]} bgColor="primary">
           <Heading size={1} fit caps>
               Let's talk priorities
           </Heading>
          </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Image src="https://i.imgur.com/fb7Dtmh.png" margin="0px auto 40px" height="650px"/>
        </Slide>
         <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Link href="https://i.imgur.com/CcEVQAV.png">It can get a little more complicated...</Link>
         </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
