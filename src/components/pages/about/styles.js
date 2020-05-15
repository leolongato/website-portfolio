import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px;
    text-align: center;
    font-size: 1.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFF;
    img {
        /* width: 20%;
        height: 20%; */
        width: 300px;
        height: 300px;
    }
    #description {
        margin: 60px;
    }
    #social {
        background: white;
        margin: 20px 0;
        svg {
            cursor: pointer;
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
                        border-radius: 15px; 
                        background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);                        
                    }
                    & + svg {
                    :hover {
                        border-radius: 4px;
                        background: #24292e;
                        color:white;
                    }
                    & + svg {
                            :hover {
                                background: white;
                                color:red;
                            }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 943px) {
        img {
            width: 250px;
            height: 250px;
        }
    }
    @media only screen and (max-width: 647px) {
        flex-direction: column;
    }
`;
