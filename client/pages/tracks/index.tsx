import React from 'react';
import MailLayout from '../../layouts/MailLayout';
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/ITrack";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: 'track 1',
            artist: 'Artist 1',
            text: 'some text',
            listens: 5,
            audio: "path",
            picture: "path",
            comments: []
        }, {
            _id: '2',
            name: 'track 2',
            artist: 'Artist 2',
            text: 'some text',
            listens: 5,
            audio: "path",
            picture: "path",
            comments: []
        }, {
            _id: '3',
            name: 'track 3',
            artist: 'Artist 3',
            text: 'some text',
            listens: 5,
            audio: "path",
            picture: "path",
            comments: []
        }
    ];

    return (
        <>
            <MailLayout>
                <Grid container justifyContent="center">
                    <Card style={{width: 900}}>
                        <Box p="3">
                            <Grid container justifyContent="space-between">
                                <h1>Список треков</h1>
                                <Button onClick={() => router.push('tracks/create')}>Загрузить</Button>
                            </Grid>
                        </Box>
                        <TrackList
                            tracks={tracks}
                        />
                    </Card>
                </Grid>
            </MailLayout>

        </>
    )
}


export default Index;