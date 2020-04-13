import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: gray;
    background: #f8f8fb;

    display: grid;
    grid-template-columns: 1fr 0.02fr 3fr;

    
    #profilePic {
        margin-right: 20px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
    }

    #separator {
        height: 95%;
        width: 2px;
        background: #D4D4D4;
    }

    #profileContent {
        margin-left: 20px;
    }
`;
