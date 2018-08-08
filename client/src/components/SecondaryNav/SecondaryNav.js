import React from "react";
import { Grid, Col, Row } from 'react-bootstrap';
import "./SecondaryNav.css";

const SecondaryNav = props => {
    return (
        <Grid className="secondaryNav">
            <Row className="secondaryNavRow">
                <Col xsHidden>
                    <div className='nav-wrap' >
                        <a onClick={() => props.handleComponentChange("pinnedRec")}><p className="secondaryNavText">Overview</p></a>
                        <a onClick={() => props.handleComponentChange("following")}><p className="secondaryNavText">Following</p></a>
                        <a onClick={() => props.handleComponentChange("followers")}><p className="secondaryNavText">Followers</p></a>
                        <a onClick={() => props.handleComponentChange("likes")}><p className="secondaryNavText">Likes</p></a>
                        <a onClick={() => props.handleComponentChange("recipes")}><p className="secondaryNavText">Recipes</p></a>
                    </div>
                </Col>
                <Col smHidden mdHidden lgHidden>
                    <div>
                        <a className='text-center' onClick={() => props.handleComponentChange("pinnedRec")}>
                            <p className="secondaryNavText">Overview</p>
                        </a>
                        <hr/>
                        <a className='text-center' onClick={() => props.handleComponentChange("following")}>
                            <p className="secondaryNavText">Following</p>
                        </a>
                        <hr/>                        
                        <a className='text-center' onClick={() => props.handleComponentChange("followers")}>
                            <p className="secondaryNavText">Followers</p>
                        </a>
                        <hr/>                        
                        <a className='text-center' onClick={() => props.handleComponentChange("likes")}>
                            <p className="secondaryNavText">Likes</p>
                        </a>
                        <hr/>                        
                        <a className='text-center' onClick={() => props.handleComponentChange("recipes")}>
                            <p className="secondaryNavText">Recipes</p>
                        </a>
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default SecondaryNav;


