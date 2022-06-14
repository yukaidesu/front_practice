import * as React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Header from '../components/Header'
import Checkbox from '@mui/material/Checkbox';
import label from '@mui/material/Checkbox';
import Link from 'next/link';

function Home() {
    return (
        <div>
            <Header />
            <div className='test-content'>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className='box1'>
                        <div><Checkbox {...label} color="secondary"/>気づいたらお金がない</div>
                        <Image src="/images/no_money.png" width={310} height={400} />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='box2'>
                        <div><Checkbox {...label} color="success" />ほしいものがある</div>
                        <Image src="/images/want.png" width={400} height={400} />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='box3'>
                        <div><Checkbox {...label} />あっても使いたくない</div>
                        <Image src="/images/kechi.png" width={347} height={400} />
                    </div>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={14}>
                    <div className='sign-box'>
                        <Link href="/form">
                            <button>そんなあなたは！</button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}
export default Home;