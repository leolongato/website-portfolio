import styled from 'styled-components';

export const Container = styled.div`
    background: #e4e4e4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    .progressBar {
        height: 150px;
        width: 150px;
    }

    #icon {
        width: 50px;
        height: 50px;
    }

    @media only screen and (max-width: 615px) {
        .progressBar {
            height: 100px;
            width: 100px;
        }
        #title {
            font-size: 18px;
        }
    }
`;
