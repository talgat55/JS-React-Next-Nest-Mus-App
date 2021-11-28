import React from 'react';
import {useRouter} from "next/router";
import MailLayout from "../../layouts/MailLayout";
import {Button, Grid, TextField} from "@mui/material";

const TrackDetailPage = () => {
    const router = useRouter();
    return (
        <MailLayout>
            <Button
                variant={"outline"}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                Back
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h2>Name track - {track.name}</h2>
                    <h2>Artist - {track.artist}</h2>
                    <h2>Listens - {track.listens}</h2>
                </div>
            </Grid>
            <h2>Words in song</h2>
            <p>{track.text}</p>
            <Grid container>
                <TextField
                    label="Name"
                    fullWidth
                />
                <TextField
                    label="Comments"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Send</Button>
            </Grid>
            <div>
                {
                    tracks.comments.map((comment, index) => {
                        <div key={index}>
                            <div> Author - {comment.username}</div>
                            <div> Comment - {comment.text}</div>
                        </div>
                    })
                }
            </div>
        </MailLayout>
    )
}
export default TrackDetailPage;