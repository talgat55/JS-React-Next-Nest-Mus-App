import {Button, Grid, Step, TextField} from '@mui/material';
import React, {useState} from 'react';
import MailLayout from "../../layouts/MailLayout";
import StepWrapper from "../../components/StepWrapper";
import FileUpload from '../../components/FileUpload';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const next = () => {
        setActiveStep(prev => prev + 1);
    }

    const back = () => {
        setActiveStep(prev => prev - 1);
    }

    return (
        <MailLayout>
            <StepWrapper activeStep={activeStep}>
                {
                    activeStep === 0 ?
                        <Grid container direction={"column"} style={{padding: 20}}>
                            <TextField
                                style={{marginTop: 10}}
                                label={"Name track"}
                            />
                            <TextField
                                style={{marginTop: 10}}
                                label={"Name author"}
                            />
                            <TextField
                                style={{marginTop: 10}}
                                label={"Words"}
                                multiline
                                rows={3}
                            />
                        </Grid>
                        :
                        null
                }
                {
                    activeStep === 1 ?
                        <FileUpload
                            file={""}
                            setFile={setPicture}
                            accept="image/*"
                        >
                            <Button>
                                Load image
                            </Button>
                        </FileUpload>
                        :
                        null
                }
                {
                    activeStep === 1 ?
                        <FileUpload
                            file={""}
                            setFile={setAudio}
                            accept="audio/*"
                        >
                            <Button>
                                Load audio
                            </Button>
                        </FileUpload>
                        :
                        null
                }

            </StepWrapper>
            <Grid>
                <Button disabled={activeStep === 0} onClick={next}>Next</Button>
                <Button onClick={back}>Back</Button>
            </Grid>
        </MailLayout>
    )
}
export default Create;