import sizes from './sizes';

const styles = {
    Portfolio: {
        [sizes.down('sm')]: {
            paddingTop: '2rem',
            background: 'rgb(220,220,220)',
        },
    },
    portfolioHeading: {
        marginTop: '4rem',
        marginBottom: '-1rem',

        // borderLeft: "16px solid rgb(0,67,81)",
        paddingLeft: '1rem',
        lineHeight: '1.8rem',
        fontWeight: '700',
        [sizes.down('sm')]: {
            marginTop: '2rem',
            marginBottom: '1rem',
            border: 0,
            textAlign: 'center',
        },
        '& h1, h4': {
            margin: 0,
            padding: 0,
        },
        '& h1': {
            fontSize: '3rem',
            lineHeight: '2.4rem',
        },
        '& h4': {
            fontSize: '1rem',
            lineHeight: '1.6rem',
        },
    },
    portfolioList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        [sizes.down('sm')]: {
            padding: 0,
        },
        '& h1, h2, h3, h4': {
            padding: 0,
            margin: 0,
        },
    },
    spinner: {
        opacity: '0.4',
        display: 'flex',
        margin: ' 2rem auto',
        '& img': {
            margin: 'auto',
        },
    },
};

export default styles;