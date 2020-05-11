import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    #websiteicon {
        visibility: hidden;
        width: 0;
        height: 0;
    }

    #topElement {
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
    }

    #menu-div {
        z-index: 999;
        position: relative;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: center;

        ul {
            position: fixed;
            display: flex;
            justify-content: center;
            height: auto;
            /* border-bottom: 1px solid white; */
            width: 100%;
            background: black;
        }

        li {
            margin: 3px;
            list-style-type: none;
            /* border-bottom: 4px solid black; */
        }

        li:hover {
            border-radius: 10px;
            cursor: pointer;
            background: rgb(58, 59, 60);
        }

        .tabSelected {
            border-bottom: 3px solid white;
            margin-bottom: 0;
            :hover {
                border-radius: 0;
                background: black;
            }
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
            -webkit-transform: rotate(-45deg) translate(-8px, 7px);
            transform: rotate(-45deg) translate(-8px, 7px);
        }

        .change .bar2 {opacity: 0;}

        .change .bar3 {
            -webkit-transform: rotate(45deg) translate(-8px, -8px);
            transform: rotate(45deg) translate(-8px, -8px);
        }

        @media only screen and (max-width: 615px) {
            position: fixed;
            flex-direction: column;
            align-items: flex-start;
            justify-content: end;
            padding: 0;
            background: black;
            #websiteicon {
                position: absolute;
                z-index: 999;
                right: 0;
                top: 0;
                visibility: visible;
                width: auto;
                margin: 5px;
                height: 50px;
            }
            img {
                visibility: hidden;
                width: 0;
                height: 0;
            }
            ul {
                position: relative;
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
                    background: black;
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
            
            .ul-changedin {
                visibility: visible;
                opacity: 1;
            }

            .ul-changedout {
                visibility: hidden;
                opacity: 0;
            }

        }
    }





    #body-div {
        height: 100%;
        width: 100%;
        .text {
            margin-top: 1vh;
        }

        #codingPic {
            width: 100%;
            height: 100%;
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
            }
        }

        @media only screen and (max-width: 615px) {
            #box{
                height: 40em;
            }
            #codingPic {
                height: 40em;
            }
        }
    }
`;

