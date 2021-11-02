/* eslint-disable no-unused-vars */
import {makeStyles} from '@mui/styles';
import { lineHeight } from '@mui/system';

export default makeStyles((theme)=>({
    hero:{
        backgroundColor:(props)=>props.blendColor ? props.blendColor:theme.palette.secondary.light,
        backgroundImage:(props)=>props.bgImage ? `url(../assets/images/hero/${props.bgImage}.webp)`:"transparent",
        backgroundBlendMode:(props)=>props.blendMode ? props.blendMode : "difference",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        [theme.breakpoints.up("md")]:{
            backgroundPosition:"center bottom"
        },
        [theme.breakpoints.up("md")]:{
            backgroundPosition:"center"
        },
        flexShrink:0,
        height:400,
        width:"100%"
    },
    ['hero__container']:{
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        [theme.breakpoints.up('md')]:{
            justifyContent:'flex-start',
        }
    },
    ['hero__content']:{
        backgroundColor:'rgba(0,0,0,0.65)',
        maxWidth:400,
        padding:32,
        borderRadius:4
    },
    ['hero__title']:{
        color:theme.palette.secondary.contrastText,
        marginBottom:0,
        lineHeight:1.15
    },
    ['hero__subtitle']:{
        color:theme.palette.secondary.contrastText,
        marginBottom:0
    }
}));