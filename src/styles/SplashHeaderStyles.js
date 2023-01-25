import sizes from './sizes';

const styles = {
    SplashHeader: {
        marginTop: '44px',
    },
    splashFull: {
        width: '100%',
        height: '330px',
        background: 'linear-gradient(to right, #84d2ff, #6871ff);',
    },
    splashFocus: {
        background: 'url(./images/triangles.png)',
        backgroundSize: 'cover',
        width: '1100px',
        maxWidth: '100vw',
        height: '100%',
        margin: 'auto',
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [sizes.down('lg')]: {
            justifyContent: 'center',
        },
        '& h1, h3': {
            padding: 0,
            margin: 0,
            color: 'rgb(255,255,255)',
        },
        '& h1': {
            lineHeight: '5rem',
            fontSize: '4rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            [sizes.down('sm')]: {
                fontSize: '3rem',
                lineHeight: '3rem',
            },
        },
        '& h3': {
            fontSize: '3rem',
            lineHeight: '2.7rem',
            fontWeight: 400,
            textTransform: 'uppercase',
            [sizes.down('sm')]: {
                fontSize: '2rem',
                lineHeight: '3rem',
            },
        },
    },
    splashTitles: {
        width: '100%',
        position: 'relative',
        height: '100%',
    },
    splashHeadings: {
        position: 'absolute',
        top: '80px',
        left: '16px',
        [sizes.down('sm')]: {
            position: 'relative',
            left: 0,
            textAlign: 'center',
        },
    },
    splashButtons: {
        display: 'flex',
        position: 'absolute',
        bottom: '32px',
        left: '16px',
        justifyContent: 'center',
        '& button': {
            fontSize: '1rem',
            background: 'rgba(0,200,25,0.9)',
            boxShadow: '0 0 2px rgba(0,0,0, 0.5)',
            fontWeight: '700',
            color: 'rgb(255,255,255)',
            width: '128px',
            height: '48px',
            borderRadius: '8px',
            border: 'none',
            '&:hover': {
                background: 'rgba(0,200,0,0.9)',
                cursor: 'pointer',
            },
            '&:active': {
                background: 'rgba(0,255,0,0.9)',
            },
        },
        [sizes.down('sm')]: {
            position: 'relative',
            margin: '130px auto',
            left: '0',
        },
    },
    skillList: {
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        width: '45%',
        flexWrap: 'wrap',
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'flex-end',
        '& li': {
            color: '#fff',
            borderRadius: '10px',
            background: 'rgba(0,67,81,0.5)',
            padding: '2px 10px',
            marginLeft: '0.25rem',
            marginTop: '0.25rem',
        },
        [sizes.down('sm')]: {
            display: 'none',
        },
    },
};

export default styles;