import React  from 'react';
import styles from '../styles/Player.module.css';
import {Grid, IconButton} from "@mui/material";
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import TrackProgress from "./TrackProgress";

const Player = () =>{
    const active = false;
    return (
        <div className={styles.player}>
            <IconButton
                onClick={ e => e.stopPropagation()}
            >
                {
                    !active ?
                        <PlayArrow/>
                        :
                        <Pause/>
                }
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray'}}></div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
            <VolumeUp
                style={{ marginLeft: 'auto'}}
            />
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
        </div>
    )
}
export  default Player;