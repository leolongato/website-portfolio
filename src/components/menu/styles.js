import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    #menu-div {
        z-index: 999;
        position: absolute;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: center;

        ul {
            display: flex;
            justify-content: center;
            height: auto;
            width: 100%;
        }

        .menubuttons {
            text-decoration: none;
            font-size: 1em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            cursor: pointer;
            height: 100%;
            padding: 15px 30px;
            border-bottom: 1px solid white;
        }

        .menubuttons:hover {
            opacity: 0.7;
        }


        .container {
            visibility: hidden;
            width: 0;
            height: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
        }

        .bar1, .bar2, .bar3 {
            width: 35px;
            height: 5px;
            background-color: white;
            margin: 3px 0;
            transition: 0.4s;
        }

        .menuMobileSize {
            height: auto;
        }

        .change .bar1 {
            html {
                backdrop-filter: blur(4px);
            }
            -webkit-transform: rotate(-45deg) translate(-8px, 7px);
            transform: rotate(-45deg) translate(-8px, 7px);
        }

        .change .bar2 {opacity: 0;}

        .change .bar3 {
            -webkit-transform: rotate(45deg) translate(-8px, -8px);
            transform: rotate(45deg) translate(-8px, -8px);
        }

        @media only screen and (max-width: 615px) {
            position: relative;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            background: black;
            img {
                visibility: hidden;
                width: 0;
                height: 0;
            }
            ul {
                background: black;
                visibility: hidden;
                justify-content: start;
                z-index: 5;
                opacity: 0;
                margin-left: 0;
                margin-top: 15px;
                width: 100%;
                height: 0;
                flex-direction: column;


                .menubuttons{
                    color: white;
                    border-bottom: 1px solid #D4D4D4;
                    margin-left: 0;
                    flex-direction: row;
                    justify-content: start;
                }

                .icons {
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                }
            }

            .container {
                margin-top: 15px;
                margin-left: 20px;
                width: 35px;
                height: 100%;
                visibility: visible;
                padding: 0;
            }
            @keyframes animatein{
                0% {
                    height: 0;
                }

                100% {
                    height: 240px;
                }
            }

            @keyframes animateout {
                0% {
                    height: 240px;                
                }

                100% {
                    height: 0;
                }
            }
            
            .ul-changedin {
                visibility: visible;
                opacity: 1;
                animation: animatein 0.1s linear;
            }

            .ul-changedout {
                visibility: hidden;
                opacity: 0;
                animation: animateout 0.1s linear;
            }

        }
    }

    #body-div {
        height: 100%;
        width: 100%;

        #codingPic {
            width: 100%;
            height: 50em;
            object-fit: cover;
        }

        #introductionText {
            display: flex;
            flex-direction: column;
        }
        
        #box{
            position: relative;
            height: 50em;
            text-align: center;
            color: white;

            @keyframes fadein {
                from { opacity: 0; }
                to   { opacity: 1; }
            }

            .text{
                animation: fadein 2s;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                h4 {
                    font-size: 1em;
                }

                h1 {
                    font-size: 4em;
                }

                #social {
                    margin-top: 15px;
                    svg {
                        margin-right: 15px;
                        :hover {
                            color: #0077B5;
                            background: white;
                            border-radius: 5px; 
                        }
                        & + svg {
                            :hover{
                                color: #3B5998;
                                background: white;
                                border-radius: 5px;                            
                            }
                            & + svg {
                                :hover {
                                    color: white;
                                    border-radius: 10px; 
                                    background: #f09433; 
                                    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
                                    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
                                    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
                                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

