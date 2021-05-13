import React from 'react';
import HeaderBar from './HeaderBar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import homePhoto from './homePhoto.jpg';
import wcPhoto from './wcPhoto.jpg';
import jbePhoto from './jbePhoto.jpg';
import arPhoto from './arPhoto.jpg';
import ecPhoto from './ecPhoto.jpg';
import salaryPhoto from './salaryPhoto.jpg';
import pizzaPhoto from './pizzaPhoto.jpg';
import indecisionPhoto from './indecisionPhoto.jpg';
import expensifyPhoto from './expensifyPhoto.jpg';
import './Home.css';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "600px",
      margin: "20px",
      cursor: "pointer",
      '&:hover': {
        transform: "scale(1.05)",
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }),
);



const Home: React.FC = () => {

    const classes = useStyles();

    return (
        <div className="Home-body">
            <HeaderBar />
            <div className="Main-portion">
                <img className="Photo" src={homePhoto} alt="Shea Meyers" title="Shea Meyers"/>
                <h1 className="Main-portion--name">Shea Meyers</h1>
                <h2 className="Main-portion--job">Fullstack Web Developer</h2>
                <p><i className="Down-arrow"></i></p>
            </div>
            <div className="Projects-portion">
                <h2 className="Projects-portion--title">Projects</h2>
                <p>I mostly program with ReactJS and Django.</p>
                <p>Other projects can be found on my Github.</p>
                <br/>
                <div className="Projects-portion--projects">
                    <a href="https://www.workercoordinator.com" target="_blank" rel="noreferrer">
                        <Card className={classes.root}>
                            <CardHeader 
                                title="Worker Coordinator"
                            />
                            <CardMedia
                                className={classes.media}
                                image={wcPhoto}
                                title="Worker Coordinator"
                            />
                            <CardContent>
                                Coordinate with your workers.  <br/>
                                Written in ReactJS and Django.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://www.jobsbyeducation.com" target="_blank" rel="noreferrer">
                        <Card className={classes.root}>
                            <CardHeader 
                                title="Jobs By Education"
                            />
                            <CardMedia
                                className={classes.media}
                                image={jbePhoto}
                                title="Jobs By Education"
                            />
                            <CardContent>
                                Find jobs by filtering on your education.  <br/>
                                Written in Django.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://github.com/SheaMeyers/anonymous-reviewer-django-react" target="_blank" rel="noreferrer">
                        <Card className={classes.root}>
                            <CardHeader 
                                title="Anonymous Reviewer"
                            />
                            <CardMedia
                                className={classes.media}
                                image={arPhoto}
                                title="Anonymous Reviewer"
                            />
                            <CardContent>
                                Anonymously see and review businesses.  <br/>
                                Written in ReactJS and Django.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://github.com/SheaMeyers/email-collection-app" target="_blank" rel="noreferrer">
                        <Card className={classes.root}>
                            <CardHeader 
                                title="Email Collect"
                            />
                            <CardMedia
                                className={classes.media}
                                image={ecPhoto}
                                title="Email Collect"
                            />
                            <CardContent>
                                Easily collect emails.  <br/>
                                Written in Django.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://sheameyers.com/react-expensify-app" target="_blank" rel="noreferrer">
                        <Card className={classes.root}>
                            <CardHeader 
                                title="Expensify App"
                            />
                            <CardMedia
                                className={classes.media}
                                image={expensifyPhoto}
                                title="Expensify App"
                            />
                            <CardContent>
                                Track expenses. <br/>
                                Written in ReactJS.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://sheameyers.com/react-indecision-app" target="_blank" rel="noreferrer">
                        <Card className={classes.root}>
                            <CardHeader 
                                title="Indecision App"
                            />
                            <CardMedia
                                className={classes.media}
                                image={indecisionPhoto}
                                title="Indecision App"
                            />
                            <CardContent>
                                Give a set of decisions and randomly get a decision for you.<br/>
                                Written in ReactJS.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://sheameyers.com/pizza-area-comparer" target="_blank" rel="noreferrer">
                        <Card className={classes.root}>
                            <CardHeader 
                                title="Pizza Area Comparer"
                            />
                            <CardMedia
                                className={classes.media}
                                image={pizzaPhoto}
                                title="Pizza Area Comparer"
                            />
                            <CardContent>
                                See which pizza or pizzas give the best value.<br/>
                                Written in ReactJS.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://sheameyers.com/salary-breakdown" target="_blank" rel="noreferrer">
                        <Card className={classes.root}>
                            <CardHeader 
                                title="Salary Breakdown"
                            />
                            <CardMedia
                                className={classes.media}
                                image={salaryPhoto}
                                title="Salary Breakdown"
                            />
                            <CardContent>
                                See your salary in different amounts.<br/>
                                Written in ReactJS.
                            </CardContent>
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
