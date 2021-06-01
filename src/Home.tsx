import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import HeaderBar from './HeaderBar';
import homePhoto from './homePhoto.jpg';
import inquiryBackground from './inquiryBackground.jpg';
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
      width: "40vw",
      margin: "20px",
      cursor: "pointer",
      '&:hover': {
        transform: "scale(1.05)",
      }
    },
    inquiryCard: {
        position: "absolute",
        top: "10vw",
        left: "25vw",
        right: "25vw",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }),
);



const Home: React.FC = () => {

    const classes = useStyles();
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');

    return (
        <div className="Home-body">
            <HeaderBar />
            <div className="Main-portion">
                <img className="Photo" src={homePhoto} alt="Shea Meyers" title="Shea Meyers"/>
                <h1 className="Main-portion--name">Shea Meyers</h1>
                <h2 className="Main-portion--job">Software Developer</h2>
                <p><i className="Down-arrow"></i></p>
            </div>
            <div className="Inquiry-portion">
                <img className="InquiryPhoto"  src={inquiryBackground} alt="Custom websites, web apps, and mobile apps" title="Custom websites, web apps, and mobile apps"/>
                <h1 className="Inquiry-text">Custom Websites, Web Apps, and Mobile Apps</h1>
                <Card className={classes.inquiryCard}>
                    <CardContent>
                        <form className="Inquiry-form" onSubmit={event => {
                            event.persist();
                            event.preventDefault();

                            // @ts-ignore
                            const elements = event.target.elements;
                            const name = elements.name.value;
                            const email = elements.email.value;
                            const message = elements.message.value;

                            setFeedbackMessage("Sending...")

                            axios.post(`http://localhost:8000/backend/create-inquiry/`, {
                                name: name,
                                email: email,
                                message: message
                            })
                            .then(_ => setFeedbackMessage("Success!  I will email you back as soon as I can."))
                            .catch(_ => _)
                        }}>
                            <TextField
                                id="outlined-name-input"
                                label="Name"
                                name="name"
                                margin="normal"
                                variant="outlined"
                                type="text"
                            />
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                name="email"
                                margin="normal"
                                variant="outlined"
                                type="email"
                            />
                            <TextField
                                id="outlined-message-input"
                                label="Need something made? Let me know!"
                                name="message"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                multiline
                                rows={4}
                            />
                            <Button variant="contained" color="primary" type="submit">
                                Send
                            </Button>
                            {feedbackMessage && 
                                <div className="Inquiry-success-message">{feedbackMessage}</div>
                            }
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div className="Projects-portion">
                <h2 className="Projects-portion--title">Projects</h2>
                <br/>
                <div className="Projects-portion--projects">
                    <a href="https://www.jobsbyeducation.com" target="_blank" rel="noopener">
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
                                Find jobs by filtering on your education.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://www.workercoordinator.com/" target="_blank" rel="noopener">
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
                                Provides a dashboard to coordinate with your workers.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://anonymous-reviewer-app.herokuapp.com/" target="_blank" rel="noopener">
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
                                Anonymously see and review businesses.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://email-collection-app.herokuapp.com/" target="_blank" rel="noopener">
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
                                Easily create a page to collect emails from users or customers.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://sheameyers.com/react-expensify-app" target="_blank" rel="noopener">
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
                                Allows you to add, delete, edit, and filter expenses.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://sheameyers.com/react-indecision-app" target="_blank" rel="noopener">
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
                                Give a set of decisions and randomly get a decision for you.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://sheameyers.com/pizza-area-comparer" target="_blank" rel="noopener">
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
                                See which pizza or pizzas give the best value.
                            </CardContent>
                        </Card>
                    </a>
                    <a href="https://sheameyers.com/salary-breakdown" target="_blank" rel="noopener">
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
                                See your salary in different amounts.
                            </CardContent>
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
