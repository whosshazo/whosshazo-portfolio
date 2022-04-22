import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardText,
} from "reactstrap";
import Sk8spotter from "../../assets/selfie/sk8spotter.png";
import Notes from "../../assets/selfie/note-taker.png";
import Cocktails from "../../assets/selfie/cocky-cocktails.png";

function Projects(props) {
  return (
    <div className="d-flex p-2 ">
      <Card className="p-2">
        <CardBody>
          <CardTitle tag="h5"><u>Sk8.Spotter</u></CardTitle>
        </CardBody>
        <img alt="ska8spotter home page" src={Sk8spotter} width="100%" />
        <CardBody>
          <CardText>
            This application makes finding skateparks easier in the local
            Richmond, VA area. User can view photos, comments and even rate the
            parks for other users.
          </CardText>
          <CardLink href="https://github.com/sora64/sk8spotter">
            GitHub
          </CardLink>
          <CardLink href="https://sk8spotter.herokuapp.com/">URL</CardLink>
        </CardBody>
      </Card>
      <Card className="p-2">
        <CardBody>
          <CardTitle tag="h5"><u>Note Taker</u></CardTitle>
        </CardBody>
        <img alt="ska8spotter home page" src={Notes} width="100%" />
        <CardBody>
          <CardText>
            With the help of Express.js, Note Taker Plus creates and saves a
            users's notes then deleted when the user is finished with them.
          </CardText>
          <CardLink href="https://github.com/whosshazo/note-taker-express">
            GitHub
          </CardLink>
          <CardLink href="https://lit-sands-64855.herokuapp.com/">
            Live Site
          </CardLink>
        </CardBody>
      </Card>
      <Card className="p-2">
        <CardBody>
          <CardTitle tag="h5"><u>Cocky Cocktails</u></CardTitle>
        </CardBody>
        <img alt="ska8spotter home page" src={Cocktails} width="100%" />
        <CardBody>
          <CardText>
            Cocky-Cocktails is an application for aspiring bartenders. This
            applications will give cocktatil instructions from the availible
            supplies in your cupboard. Once a cocktail is selected, the user
            will be giving mixing instructions and a YouTube video on how to
            make the drink.
          </CardText>
          <CardLink href="https://github.com/whosshazo/cocktail-project">
            GitHub
          </CardLink>
          <CardLink href="https://whosshazo.github.io/cocktail-project/">
            URL
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
}

export default Projects;
