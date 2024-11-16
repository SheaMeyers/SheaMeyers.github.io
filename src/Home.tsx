import React from "react";
import HeaderBar from "./HeaderBar";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import homePhoto from "./homePhoto.jpg";
import tmCalendar from "./tmCalendar.jpg";
import salaryPhoto from "./salaryPhoto.jpg";
import pizzaPhoto from "./pizzaPhoto.jpg";
import dateDiff from "./dateDiff.jpg";
import randomGif from "./randomGif.jpg";
import indecisionPhoto from "./indecisionPhoto.jpg";
import expensifyPhoto from "./expensifyPhoto.jpg";
import reactFakeStore from "./reactFakeStore.jpg";
import storyTranslator from "./storyTranslator.jpg";
import "./Home.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "40vw",
      margin: "20px",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="Home-body">
      <HeaderBar />
      <div className="Main-portion">
        <img
          className="Photo"
          src={homePhoto}
          alt="Shea Meyers"
          title="Shea Meyers"
        />
        <h1 className="Main-portion--name">Shea Meyers</h1>
        <h2 className="Main-portion--job">Web Developer</h2>
      </div>
      <div className="Projects-portion">
        <div>
          <h2 className="Projects-portion--title">Personal Projects</h2>
          <p>I mostly program with TypeScript/JavaScript (ReactJs and Node), C# (.Net), and Python (Django)</p>
          <p>The projects listed below are all ReactJS while other projects can be found on my Github.</p>
          <br />
        </div>
        <div className="Projects-portion--projects">
          <a
            href="https://www.ticketmastercalendar.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className={classes.root}>
              <CardHeader title="Ticketmaster Calendar" />
              <CardMedia
                className={classes.media}
                image={tmCalendar}
                title="Ticketmaster Calendar"
              />
              <CardContent>
                A calendar to keep track of your favorite performers.
              </CardContent>
            </Card>
          </a>
          <a
            href="https://story-translator.sheameyers.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className={classes.root}>
              <CardHeader title="Story Translator" />
              <CardMedia
                className={classes.media}
                image={storyTranslator}
                title="Story Translator"
              />
              <CardContent>
                Displays a story as well as it's translation
              </CardContent>
            </Card>
          </a>
          <a
            href="https://findagiphy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className={classes.root}>
              <CardHeader title="Random Gif" />
              <CardMedia
                className={classes.media}
                image={randomGif}
                title="Random Gif"
              />
              <CardContent>
                Displays random gifs and also offers searching for gifs.
              </CardContent>
            </Card>
          </a>
          <a
            href="https://react-fake-store.sheameyers.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className={classes.root}>
              <CardHeader title="React Fake Store" />
              <CardMedia
                className={classes.media}
                image={reactFakeStore}
                title="React Fake Store"
              />
              <CardContent>
                A fake store.
              </CardContent>
            </Card>
          </a>
          <a
            href="https://pizza-area-comparer.sheameyers.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className={classes.root}>
              <CardHeader title="Pizza Area Comparer" />
              <CardMedia
                className={classes.media}
                image={pizzaPhoto}
                title="Pizza Area Comparer"
              />
              <CardContent>
                See which pizza or pizzas give the best value.
              </CardContent>
            </Card>
          </a>
          <a
            href="https://salary-breakdown.sheameyers.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className={classes.root}>
              <CardHeader title="Salary Breakdown" />
              <CardMedia
                className={classes.media}
                image={salaryPhoto}
                title="Salary Breakdown"
              />
              <CardContent>
                See your salary in different amounts.
              </CardContent>
            </Card>
          </a>
          <a
            href="https://date-difference.sheameyers.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className={classes.root}>
              <CardHeader title="Date Difference" />
              <CardMedia
                className={classes.media}
                image={dateDiff}
                title="Date Difference"
              />
              <CardContent>
                See how many days are between two dates.
              </CardContent>
            </Card>
          </a>
        </div>
        <div>
          <h2 className="Projects-portion--title">Course Projects</h2>
          <p>These are projects I've built while following various courses</p>
          <br />
        </div>
        <div className="Projects-portion--projects">
          <a
            href="https://expensify-app.sheameyers.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className={classes.root}>
              <CardHeader title="Expensify App" />
              <CardMedia
                className={classes.media}
                image={expensifyPhoto}
                title="Expensify App"
              />
              <CardContent>
                Track expenses.
              </CardContent>
            </Card>
          </a>
          <a
            href="https://indecision-app.sheameyers.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className={classes.root}>
              <CardHeader title="Indecision App" />
              <CardMedia
                className={classes.media}
                image={indecisionPhoto}
                title="Indecision App"
              />
              <CardContent>
                Give a set of decisions and randomly get a decision for you.
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
