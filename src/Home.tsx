import React from 'react';
import photo from './HomePhoto.jpg';
import HeaderBar from './HeaderBar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import './Home.css';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "500px",
      margin: "20px",
      cursor: "pointer"
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
                <img className="Photo" src={photo} alt="Shea Meyers" title="Shea Meyers"/>
                <h1 className="Main-portion--name">Shea Meyers</h1>
                <h2 className="Main-portion--job">Fullstack Web Developer</h2>
                <p><i className="Down-arrow"></i></p>
            </div>
            <div className="Projects-portion">
                <h2 className="Projects-portion--title">Projects</h2>
                <p>I mostly program in ReactJS and Django.</p>
                <p>Other projects can be found on my Github.</p>
                <br/>
                <div className="Projects-portion--projects">
                    <Card className={classes.root} onClick={_ => {
                        window.open("https://www.workercoordinator.com", '_blank');
                    }}>
                        <CardHeader 
                            title="Worker Coordinator"
                        />
                        <CardMedia
                            className={classes.media}
                            image={photo}
                            title="Worker Coordinator"
                        />
                        <CardContent>
                            Coordinate with your workers.  <br/>
                            Written in ReactJS and Django.
                        </CardContent>
                    </Card>
                    <Card className={classes.root} onClick={_ => {
                        window.open("https://www.jobsbyeducation.com", '_blank');
                    }}>
                        <CardHeader 
                            title="Jobs By Education"
                        />
                        <CardMedia
                            className={classes.media}
                            image={photo}
                            title="Jobs By Education"
                        />
                        <CardContent>
                            Find jobs by filtering on your education.  <br/>
                            Written in Django.
                        </CardContent>
                    </Card>
                </div>
                {/* <div className="Projects-portion--project__non-white-section">
                    <h3>Worker Coordinator</h3>
                    <p>Coordinate with your workers.  Written in ReactJS and Django.</p>
                    <a href="https://www.workercoordinator.com" target="_blank" rel="noopener noreferrer">https://www.workercoordinator.com</a>
                </div>
                <div className="Projects-portion--project__section">
                    <h3>Jobs By Education</h3>
                    <p>Find jobs by filtering on your education.  Written in Django.</p>
                    <a href="https://www.jobsbyeducation.com" target="_blank" rel="noopener noreferrer">https://www.jobsbyeducation.com</a>
                </div> */}
                <h3 className="Projects-portion--sub-title">Smaller Apps</h3>
                <p>Front end apps written in ReactJS</p>
                <br/>
                <div className="Projects-portion--projects">
                    <Card className={classes.root} onClick={_ => {
                        window.open("https://sheameyers.com/react-expensify-app", '_blank');
                    }}>
                        <CardHeader 
                            title="Expensify App"
                        />
                        <CardMedia
                            className={classes.media}
                            image={photo}
                            title="Expensify App"
                        />
                        <CardContent>
                            Track expenses.
                        </CardContent>
                    </Card>
                    <Card className={classes.root} onClick={_ => {
                        window.open("https://sheameyers.com/react-indecision-app", '_blank');
                    }}>
                        <CardHeader 
                            title="Indecision App"
                        />
                        <CardMedia
                            className={classes.media}
                            image={photo}
                            title="Indecision App"
                        />
                        <CardContent>
                            Give a set of decisions and randomly get a decision for you.
                        </CardContent>
                    </Card>


                    <Card className={classes.root} onClick={_ => {
                        window.open("https://sheameyers.com/pizza-area-comparer", '_blank');
                    }}>
                        <CardHeader 
                            title="Pizza Area Comparer"
                        />
                        <CardMedia
                            className={classes.media}
                            image={photo}
                            title="Pizza Area Comparer"
                        />
                        <CardContent>
                            See which pizza or pizzas give the best value.
                        </CardContent>
                    </Card>
                    <Card className={classes.root} onClick={_ => {
                        window.open("https://sheameyers.com/salary-breakdown", '_blank');
                    }}>
                        <CardHeader 
                            title="Salary Breakdown"
                        />
                        <CardMedia
                            className={classes.media}
                            image={photo}
                            title="Salary Breakdown"
                        />
                        <CardContent>
                            See your salary in different amounts.
                        </CardContent>
                    </Card>
                </div>
                {/* <div className="Projects-portion--project__section">
                    <h3>Expensify App</h3>
                    <p>Track expenses.  Written in ReactJS.</p>
                    <a href="https://sheameyers.com/react-expensify-app" target="_blank" rel="noopener noreferrer">https://sheameyers.com/react-expensify-app</a>
                </div>
                <div className="Projects-portion--project__non-white-section">
                    <h3>Indecision App</h3>
                    <p>Give a set of decisions and randomly get a decision for you.  Written in ReactJS.</p>
                    <a href="https://sheameyers.com/react-indecision-app" target="_blank" rel="noopener noreferrer">https://sheameyers.com/react-indecision-app</a>
                </div>
                <div className="Projects-portion--project__section">
                    <h3>Salary Breakdown</h3>
                    <p>See your salary in different amounts.  Written in ReactJS.</p>
                    <a href="https://sheameyers.com/salary-breakdown" target="_blank" rel="noopener noreferrer">https://sheameyers.com/salary-breakdown</a>
                </div>
                <div className="Projects-portion--project__non-white-section">
                    <h3>Pizza Area Comparer</h3>
                    <p>See which pizza or pizzas give the best value.  Written in ReactJS.</p>
                    <a href="https://sheameyers.com/pizza-area-comparer" target="_blank" rel="noopener noreferrer">https://sheameyers.com/pizza-area-comparer</a>
                </div> */}
            </div>
        </div>
    );
};

export default Home;
