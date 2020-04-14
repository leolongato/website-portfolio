import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-basis: 20%;
    }
    img {
        position: relative;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #e4e4e4;
        padding: 10px;
        margin: 10px;
        border-radius: 20px;
        animation: flipCard 2s normal;
    }

    .icons {
        width: 64px;
        height: 64px;
    }

    @keyframes flipCard {
        0% {
            top: -500;
        }
        100% {
            top: +500;
        }
}
`;
